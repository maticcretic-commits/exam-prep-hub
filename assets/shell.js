/* ============================================================
   Exam Prep Hub v2 — shared shell (shell.js)
   Theme toggle · mobile nav · scrollspy · reveal · back-to-top
   · footer year · initSearch()
   No dependencies. Guards every lookup so it never throws on
   pages that omit optional components.
   ============================================================ */
(function () {
  'use strict';

  var THEME_KEY = 'eph-theme';
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Theme ---------- */
  function savedTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* private mode */ }
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      var toLight = theme === 'dark';
      btn.setAttribute('aria-label', toLight ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('aria-pressed', String(!toLight));
    }
  }
  function initTheme() {
    var t = savedTheme();
    applyTheme(t === 'light' || t === 'dark' ? t : 'dark'); // default: dark
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        applyTheme(cur === 'light' ? 'dark' : 'light');
      });
    }
  }

  /* ---------- Mobile nav ---------- */
  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Scrollspy for nav.section-nav ---------- */
  function initScrollspy() {
    var nav = document.querySelector('nav.section-nav');
    if (!nav) return;
    var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;
    var map = {};
    links.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      var sec = document.getElementById(id);
      if (sec) map[id] = a;
    });
    var ids = Object.keys(map);
    if (!ids.length) return;

    function setActive(id) {
      links.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }

    if (!('IntersectionObserver' in window)) {
      setActive(ids[0]);
      return;
    }
    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) current = en.target.id;
      });
      // Pick the last intersecting section nearest the top of the band
      if (current) setActive(current);
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    ids.forEach(function (id) { io.observe(document.getElementById(id)); });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Back to top ---------- */
  function initBackToTop() {
    var btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '&#8593;';
    document.body.appendChild(btn);
    var ticking = false;
    function onScroll() {
      btn.classList.toggle('show', window.scrollY > 600);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  /* ---------- Search ----------
     initSearch(jsonUrl, inputId, resultsId)
     jsonUrl: path to search-index.json —
       array of { t: title, e: exam, p: page, a: anchor, k: keywords }
     Renders results grouped by exam, linking to "p + a". */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  window.initSearch = function (jsonUrl, inputId, resultsId) {
    var input = document.getElementById(inputId);
    var box = document.getElementById(resultsId);
    if (!input || !box) return;

    var index = null;
    fetch(jsonUrl, { credentials: 'same-origin' })
      .then(function (r) { if (!r.ok) throw new Error('search index missing'); return r.json(); })
      .then(function (d) {
        index = Array.isArray(d) ? d : [];
        render(input.value);
      })
      .catch(function () { index = []; }); // fail silent: no dropdown

    var timer = null;
    input.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { render(input.value); }, 120);
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { input.value = ''; render(''); input.blur(); }
    });
    document.addEventListener('click', function (e) {
      if (!box.contains(e.target) && e.target !== input) box.innerHTML = '';
    });

    function render(q) {
      q = (q || '').trim().toLowerCase();
      if (!q || !index || !index.length) { box.innerHTML = ''; return; }
      var words = q.split(/\s+/);
      var hits = index.filter(function (it) {
        var hay = ((it.t || '') + ' ' + (it.e || '') + ' ' + (it.k || '')).toLowerCase();
        return words.every(function (w) { return hay.indexOf(w) !== -1; });
      }).slice(0, 40);

      if (!hits.length) {
        box.innerHTML = '<p class="search-empty">No matches. Try "syllabus", "dates", or an exam name.</p>';
        return;
      }
      var groups = {}, order = [];
      hits.forEach(function (it) {
        var g = it.e || 'General';
        if (!groups[g]) { groups[g] = []; order.push(g); }
        groups[g].push(it);
      });
      box.innerHTML = order.slice(0, 8).map(function (g) {
        var items = groups[g].slice(0, 6).map(function (it) {
          var href = esc((it.p || 'index.html') + (it.a || ''));
          return '<li><a href="' + href + '">' + esc(it.t || 'Untitled') + '</a></li>';
        }).join('');
        return '<div class="search-group"><p class="search-exam">' + esc(g) +
          '</p><ul>' + items + '</ul></div>';
      }).join('');
    }
  };

  /* ---------- Boot ---------- */
  function boot() {
    initTheme();
    initMobileNav();
    initScrollspy();
    initReveal();
    initBackToTop();
    initYear();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
