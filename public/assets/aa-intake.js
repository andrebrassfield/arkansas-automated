// Shared public lead intake for ported landing pages.
// Same receiver and payload shape as src/lib/hub.ts + LeadForm: HUB_LEADS_URL.
export const HUB_LEADS_URL = 'https://fort-smith-pros.vercel.app/api/public/leads';

export function wireLeadForm(form, buildPayload, opts = {}) {
  if (!form || form.dataset.wired === 'true') return;
  form.dataset.wired = 'true';
  const button = opts.submitSelector ? form.querySelector(opts.submitSelector) : form.querySelector('button[type="submit"], button.cta');
  const message = opts.messageSelector ? form.querySelector(opts.messageSelector) : form.querySelector('[data-submit-note]');
  const done = opts.doneSelector ? form.querySelector(opts.doneSelector) : form.querySelector('#sent');
  let inFlight = false;
  let submitted = false;
  const show = (text) => { if (message) { message.hidden = false; message.textContent = text; } };
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (inFlight || submitted) return;
    const payload = buildPayload();
    if (!payload) return;
    inFlight = true;
    const original = button ? button.textContent : '';
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }
    if (done) done.hidden = true;
    show('Sending your request…');
    let response;
    try {
      response = await fetch(HUB_LEADS_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(payload) });
    } catch (err) {
      response = undefined;
    }
    inFlight = false;
    if (response && response.ok) {
      submitted = true;
      form.reset();
      if (done) done.hidden = false;
      show('Request sent. Dre gets an email alert.');
      if (button) button.textContent = 'Sent';
      return;
    }
    if (response && (response.status === 400 || response.status === 422)) {
      if (button) { button.disabled = false; button.textContent = original; }
      show('Please check the request details and try again.');
      return;
    }
    submitted = true;
    if (button) { button.textContent = 'Please email to check'; }
    show('We cannot confirm whether your request arrived. Do not submit it again; email dre@arkansasautomated.com to check.');
  });
}
