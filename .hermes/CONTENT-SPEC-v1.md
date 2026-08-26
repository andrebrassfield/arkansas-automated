# Arkansas Automated — Organic Content Spec (v1.0)

> **Status:** active spec for the first content cycle. Bounded by
> `Decision-2026-08-06-arkansas-automated-positioning` (Dre, #command event
> `4107d81d224a16fd9101356d4db5a5a8ce14ccf238ffd5b1e65ec5d527cf1f07`).
>
> **Source of truth for constraints:** `00-System/PROTOCOL.md` §10 + §13,
> `00-System/COPY-STANDARD.md`, this spec.
>
> **What this spec produces:** ten draft pieces in a review queue. NOT
> published. NOT posted to any account. Dre approves each piece individually
> before it leaves the queue.

---

## 1. The offer (one sentence)

arkansasautomated.com helps small business owners implement working AI and
automations in their businesses — through workshops, services, and follow-up
support.

## 2. The ICP (one line)

Operator who runs a small business (sole proprietor to ~15-person team,
non-technical or semi-technical, $200k-$5M revenue, US-based, currently
doing manual work that AI could automate in hours not weeks).

## 3. The three to five recurring themes (substantiable from real data)

These are the only themes in scope for the first cycle. Each theme has to be
backed by real data from the operator's business — not vibes, not competitor
claims. If the theme can't be substantiated, drop it.

1. **Manual workflows that eat the operator's week.** Receipts, follow-ups,
   inventory checks, scheduling, customer replies. Time data from real
   businesses, not estimates. (Anchor: PROTOCOL §10 substantiation rule.)
2. **Cheap AI that already pays for itself in the first month.** Concrete
   cost math: hours saved × hourly rate vs. tool cost. Use real numbers
   from real operators when available.
3. **The "I tried ChatGPT and it didn't work" failure mode.** Why generic
   AI prompts fail for a specific business, and what the "implementation"
   step adds (workflow mapping + tool selection + integration + iteration).
4. **What NOT to automate.** A short, sharp piece on judgment calls, edge
   cases, and customer relationships that AI makes worse. (Anti-slop
   posture: real examples of automation backfires, not generic warnings.)
5. **The first 90 days.** A timeline of what a typical small business
   actually sees when they implement AI/automation: weeks 1-2 (one
   workflow), weeks 3-4 (two more), weeks 5-8 (staff handoff), weeks 9-12
   (compound gains). Frame as a journey, not a sales pitch.

Themes 1-3 are the load-bearing content. Theme 4 is the trust-builder.
Theme 5 is the conversion path. If the cycle produces less than ten usable
pieces, drop theme 5 first.

## 4. Voice constraints (binding)

These come straight from `00-System/COPY-STANDARD.md` and `PROTOCOL §13`.
The agent that drafts must apply them at write time; the reviewer who
approves must check them at read time.

- **No em dash (—) or en dash (–) in customer-facing copy.** Restructure
  the sentence. Do not swap the character for a hyphen.
- **No banned slop patterns** from the canonical `stop-slop` /
  `no-ai-slop` rule sets (vendored at `04-Reference/vendors/`, gitignored,
  local-only). Concretely:
  - No throat-clearing ("In today's world...", "Let me explain...")
  - No binary-contrast crutches ("It's not just X, it's Y")
  - No structural clichés ("First... Second... Third..." used as filler)
  - No padded transitions ("Furthermore," "Additionally," "Moreover")
  - Active voice by default. Concrete over abstract.
- **Every claim must be substantiable.** If a statistic appears, it
  comes from a named source or a real customer data point — not
  fabrication. PROTOCOL §10 hard floor.
- **Voice is the operator's voice, not a model's voice.** Apply minimum
  effective edits to remove slop WITHOUT flattening voice. If the piece
  reads like it could have been written by any AI, it is wrong.
- **No claims that the customer is "missing out" or that their competitors
  are ahead.** The product is helping operators save time; the framing is
  "here's what works," not "you're falling behind."

## 5. Format per piece

Ten pieces total. Mix of formats so the queue shows range:

- **3 long-form posts** (800-1500 words, blog-shaped, for the
  arkansasautomated.com site or LinkedIn long-form). Pick the load-bearing
  themes.
- **5 medium posts** (200-500 words, LinkedIn / X shaped). Pick the
  trust-builder + first-90-days themes.
- **2 short posts** (under 200 words, X shaped). One concrete number or
  one concrete failure mode, nothing else.

Each piece carries:
- A working title (not clickbait; descriptive).
- The theme from §3 it draws on.
- A draft body (no em dash, no slop, substantiated claims).
- A "what to substantiate" footer listing the specific data points /
  sources the claim relies on (so the reviewer knows what to verify).
- A "voice check" footer: one sentence stating how this piece keeps the
  operator's voice distinct from generic AI output.

## 6. Approval gate (the human in the loop)

Nothing publishes automatically. Every piece sits in a review queue
(channel: `#project-arkansas-automated`, posted as a separate thread per
piece) where Dre can:

- Read the full draft
- Read the "what to substantiate" footer
- Read the "voice check" footer
- Approve, edit, or send back for revision

The agent must surface **what data is missing or unverified** in the
substantiation footer. If the footer is empty or hand-wavy, the piece is
not ready for review.

Build the gate into the architecture from the start. If any code path
ships a piece to a public account without Dre's explicit per-piece approval,
that code path is wrong and the cycle is blocked.

## 7. Anti-slop review (mandatory before the review queue)

Every piece passes an anti-AI-slop review before it goes into the queue. The
gate (PROTOCOL §13):

1. Run the banned-phrase and structural-cliché check against the canonical
   skill rule sets.
2. Apply minimum effective edits to remove slop.
3. Keep the zero-em-dash rule.
4. Record the pass in the piece's compliance checklist footer (in addition
   to the "voice check" and "what to substantiate" footers from §5).

If the piece cannot pass this review, it does not enter the queue.

## 8. Out of scope for this spec

The following are explicitly out and must NOT be drafted:

- Any outbound / cold email / LinkedIn-DM messaging.
- Any claim about the customer's competitors "falling behind."
- Any vendor recommendations (Apify, Instantly, Clay, etc.) — those are the
  outbound build, deferred.
- Any pricing for arkansasautomated.com services (Dre handles pricing).
- Any claim about specific customer outcomes that aren't substantiated.
- Any reference to the directory path (`list-your-business.astro`) as a
  positioning element — it is subordinate under the new positioning.

If a piece naturally wants to go there, cut it or ask Dre.

## 9. Definition of done for this spec's first cycle

1. Ten draft pieces, each carrying the §5 footers and the §7 anti-slop
   checklist, posted as separate threads in `#project-arkansas-automated`
   for Dre's review.
2. None of the ten is published to any public account.
3. None of the ten references any of the §8 out-of-scope items.
4. Each piece passes the anti-slop review recorded in its own footer.
5. A receipt per the completion contract (operation id, artifacts, checks
   actually run) posted to `#project-arkansas-automated` and surfaced to
   `#command`.

---

*End of spec v1.0. Any change to constraints in §4-§7 requires Dre's GO
and an updated version stamp. Theme additions in §3 do not require Dre's
GO if the additions are substantiable; they get a v1.x stamp on next edit.*.