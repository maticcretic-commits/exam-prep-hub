/* Exam Prep Hub — cookie consent banner (dependency-free).
   Include once per page: <script src="/exam-prep-hub/assets/consent.js" defer></script>
   Analytics (PostHog) only initialises after the visitor accepts. */
(function () {
  var KEY = 'eph-consent';
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  // Called when consent is granted — loads PostHog (US cloud).
  // NOTE: the phc_ key below is public by design (it ships in page source).
  window.__enableAnalytics = function () {
    if (window.__analyticsOn) return;
    window.__analyticsOn = true;
    (function (t, e) {
      var o, n, p, r;
      e.__SV || ((window.posthog = e), (e._i = []), (e.init = function (i, s, a) {
        function g(t, e) {
          var o = e.split(".");
          2 == o.length && ((t = t[o[0]]), (e = o[1])), t.hasOwnProperty(e) && t[e]();
        }
        ((o = t.createElement("script")).type = "text/javascript"),
          (o.crossOrigin = "anonymous"),
          (o.async = !0),
          (o.src = s.api_host + "/static/array.js"),
          (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(o, r);
        var u = e;
        for (void 0 !== a ? (u = e[a] = []) : a = "posthog",
          u.people = u.people || [],
          u.toString = function (t) {
            var e = "posthog";
            return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e;
          },
          u.people.toString = function () { return u.toString(1) + ".people"; },
          n = "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),
          p = 0; p < n.length; p++) g(u, n[p]);
        e._i.push([i, s, a]);
      }), (e.__SV = 1));
    })(document, window.posthog || []);
    window.posthog.init("phc_phHSdCajbiQWYpSZyX7ma7eo4uA4UxCmP2kJaLkcXofH", {
      api_host: "https://us.i.posthog.com",
    });
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
