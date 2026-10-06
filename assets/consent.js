/* Exam Prep Hub — cookie consent banner (dependency-free).
   Include once per page: <script src="/exam-prep-hub/assets/consent.js" defer></script>
   Analytics (PostHog) only initialises after the visitor accepts. */
(function () {
  var KEY = 'eph-consent';
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  // Called when consent is granted — PostHog snippet is injected here (phase 2, needs API key).
  window.__enableAnalytics = function () {
    if (window.__analyticsOn) return;
    window.__analyticsOn = true;
    // TODO: paste PostHog snippet here once the API key exists.
    // See POSTHOG-SETUP (tap list) for the key step.
  };

  function banner() {
    var css = '#eph-consent{position:fixed;left:0;right:0;bottom:0;z-index:9999;' +
      'background:#1E1B4B;color:#E2E8F0;padding:14px 18px;display:flex;gap:14px;' +
      'align-items:center;justify-content:center;flex-wrap:wrap;' +
      'font:14px/1.5 Inter,system-ui,sans-serif;box-shadow:0 -4px 24px rgba(0,0,0,.25)}' +
      '#eph-consent p{margin:0;max-width:640px}' +
      '#eph-consent button{border:0;border-radius:10px;padding:9px 18px;font-weight:700;cursor:pointer}' +
      '#eph-ok{background:#6366F1;color:#fff}#eph-no{background:transparent;color:#C7D2FE;border:1px solid #475569}';
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    var bar = document.createElement('div');
    bar.id = 'eph-consent';
    bar.innerHTML = '<p>We use minimal analytics cookies to see which study pages help most. ' +
      'No ads, no tracking across sites.</p>' +
      '<span><button id="eph-ok">Accept</button> ' +
      '<button id="eph-no">Decline</button></span>';
    document.body.appendChild(bar);
    document.getElementById('eph-ok').onclick = function () {
      set('accepted'); bar.remove(); window.__enableAnalytics();
    };
    document.getElementById('eph-no').onclick = function () {
      set('declined'); bar.remove();
    };
  }

  function init() {
    var c = get();
    if (c === 'accepted') { window.__enableAnalytics(); return; }
    if (c === 'declined') return;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', banner);
    } else { banner(); }
  }
  init();
})();
