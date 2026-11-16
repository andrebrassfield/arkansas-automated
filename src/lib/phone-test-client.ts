/*
 * Phone Test intake: field lists, validation and the hub payload.
 *
 * Pure functions so tests can run them without a browser. The hub schema
 * (fort-smith-pros src/lib/lead-intake.ts) accepts type
 * "automation_assessment", name 2+ chars, phone 7+ chars, optional email,
 * details up to 2000 chars, submissionId up to 100 chars and a free-form
 * `extra` record. Do not send `category`: it is a foreign key to directory
 * categories on the hub and would fail the insert.
 */

export const TRADES = [
  "Roofing",
  "HVAC",
  "Plumbing",
  "Garage doors",
  "Concrete",
  "Painting",
  "Electrical",
  "Landscaping",
  "Pressure washing",
  "Other home service",
] as const;

export const TOWNS = [
  "Fort Smith",
  "Van Buren",
  "Greenwood",
  "Alma",
  "Barling",
  "Rogers",
  "Bentonville",
  "Fayetteville",
  "Springdale",
  "Somewhere else in Arkansas",
] as const;

export const SMS_CONSENT_TEXT_CLIENT =
  "Text me about my Phone Test at this number. Message and data rates may apply. Reply STOP to opt out.";

export interface PhoneTestValues {
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  trade: string;
  town: string;
  website: string;
  smsConsent: boolean;
  botField: string;
}

export interface PhoneTestMeta {
  submissionId: string;
  sourcePath: string;
  placement: string;
  attribution: { firstTouch: unknown; lastTouch: unknown };
  msToSubmit: number;
  msToFirstInput: number | null;
  failedAttempts: number;
  smsConsentText: string;
  submittedAt: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Digits only, US numbers normalized to 10 digits when a leading 1 is present. */
export function phoneDigits(raw: string): string {
  const d = raw.replace(/\D/g, "");
  return d.length === 11 && d.startsWith("1") ? d.slice(1) : d;
}

/** Field name to message. Empty object means valid. Order is field order. */
export function validatePhoneTest(v: PhoneTestValues): Record<string, string> {
  const e: Record<string, string> = {};
  if (v.businessName.length < 2) e.businessName = "Add your business name.";
  if (v.contactName.length < 2) e.contactName = "Add your name.";
  if (phoneDigits(v.phone).length < 10) e.phone = "Add a 10-digit mobile number so we can reach you.";
  if (v.email && !EMAIL_RE.test(v.email)) e.email = "That email does not look right. Leave it blank if you prefer.";
  if (!v.trade) e.trade = "Pick your trade.";
  if (!v.town) e.town = "Pick your main town.";
  return e;
}

export function buildPhoneTestPayload(v: PhoneTestValues, m: PhoneTestMeta) {
  const details = [
    "Phone Test request.",
    `Trade: ${v.trade}. Town: ${v.town}.`,
    v.website ? `Website or listing: ${v.website}.` : "",
    `SMS consent: ${v.smsConsent ? "yes" : "no"}.`,
  ].filter(Boolean).join(" ").slice(0, 2000);

  return {
    type: "automation_assessment" as const,
    businessName: v.businessName.slice(0, 160),
    name: v.contactName.slice(0, 120),
    phone: v.phone.slice(0, 40),
    email: v.email || null,
    details,
    sourcePath: m.sourcePath.slice(0, 300),
    spokeDomain: "arkansasautomated.com",
    submissionId: m.submissionId.slice(0, 100),
    "bot-field": v.botField,
    extra: {
      intent: "Phone Test request",
      offer: "phone-test",
      placement: m.placement,
      trade: v.trade,
      town: v.town,
      website: v.website || null,
      smsConsent: v.smsConsent,
      smsConsentText: v.smsConsent ? m.smsConsentText : null,
      smsConsentAt: v.smsConsent ? m.submittedAt : null,
      firstTouch: m.attribution.firstTouch,
      lastTouch: m.attribution.lastTouch,
      msToSubmit: m.msToSubmit,
      msToFirstInput: m.msToFirstInput,
      failedAttempts: m.failedAttempts,
      submittedAt: m.submittedAt,
    },
  };
}
