// Shared missed-call calculator math for /missed-call-calculator and the homepage calculator.
// Anchor: 22 calls/week, $550 ticket, 35% book rate, 52/12 weeks = $18,352/month won back.
export const WEEKS_PER_MONTH = 52 / 12;
export const MISSED_CALL_CALC_DEFAULTS = { calls: 22, newPct: 100, value: 550, winPct: 35 };
export const MISSED_CALL_PLANS = [
  ['Missed-Call Text Back', 129],
  ['After-Hours Answering', 299],
  ['Front Desk', 499],
];
export function computeMissedCallCalc(input) {
  const calls = Number(input.calls) > 0 ? Number(input.calls) : 0;
  const pNew = Math.min(Math.max(Number(input.newPct) || 0, 0), 100) / 100;
  const value = Number(input.value) > 0 ? Number(input.value) : 0;
  const pWin = Math.min(Math.max(Number(input.winPct) || 0, 0), 100) / 100;
  const newCallsMonth = calls * WEEKS_PER_MONTH * pNew;
  const lossMonth = newCallsMonth * value;
  const jobsBackMonth = newCallsMonth * pWin;
  const winMonth = jobsBackMonth * value;
  return { calls, newPct: pNew * 100, value, winPct: pWin * 100, newCallsMonth, lossMonth, jobsBackMonth, winMonth };
}
