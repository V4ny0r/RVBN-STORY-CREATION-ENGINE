/* Ravenbane Architect — Character.AI helper
   Two jobs, both only for character.ai:
   1. rules.json removes the header that tells browsers to refuse their pages
      inside another site, so the story app can show a chat in its own pane.
   2. Their login cookies are re-marked so they are still sent when the page
      sits inside the app (Chrome drops cookies in that position unless they
      say SameSite=None). Nothing is read, stored or sent anywhere. */
const DOMAIN = 'character.ai';
let busy = false;
function relax(c) {
  if (busy || !c || !c.domain || c.domain.indexOf(DOMAIN) < 0) return;
  if (c.sameSite === 'no_restriction' && c.secure) return;
  const host = c.domain.replace(/^\./, '');
  const out = { url: 'https://' + host + (c.path || '/'), name: c.name, value: c.value, path: c.path,
    secure: true, httpOnly: c.httpOnly, sameSite: 'no_restriction', storeId: c.storeId };
  if (!c.hostOnly) out.domain = c.domain;
  if (!c.session && c.expirationDate) out.expirationDate = c.expirationDate;
  busy = true;
  chrome.cookies.set(out, () => { busy = false; void chrome.runtime.lastError; });
}
function relaxAll() { chrome.cookies.getAll({ domain: DOMAIN }, (list) => (list || []).forEach(relax)); }
chrome.runtime.onInstalled.addListener(relaxAll);
chrome.runtime.onStartup.addListener(relaxAll);
chrome.cookies.onChanged.addListener((info) => { if (!info.removed) relax(info.cookie); });
