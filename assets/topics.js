/* ==========================================================================
   EPH Topic Library — shared renderer for all 12 exam pages.
   Requires window.EPH_TOPIC_DATA = { exam, examName, topics:[...], papers:[...] }
   (loaded from topics-<exam>.js BEFORE this file).
   Mount: <div id="topic-lib"></div> inside <section class="topic-lib-sec">.
   Hash routes: #topic-<id>  #paper-<id>
   ========================================================================== */
(function () {
  'use strict';
  var D = window.EPH_TOPIC_DATA;
  var mount = document.getElementById('topic-lib');
  if (!D || !D.topics || !mount) return;

  var LETTERS = ['A', 'B', 'C', 'D', 'E'];
  var viewMode = null; // null | 'topic' | 'paper'
  var currentId = null;
  var paperState = null;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function scrollToLib() {
    var sec = mount.closest('.topic-lib-sec');
    if (sec && sec.scrollIntoView) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------------- skeleton ---------------- */
  mount.innerHTML =
    '<div class="tl-toolbar">' +
      '<input id="tl-search" class="tl-search" type="search" placeholder="Search topics, e.g. monsoon, writs, inflation…" aria-label="Search topics">' +
      '<div id="tl-filters" class="tl-filters" aria-label="Filter by subject"></div>' +
    '</div>' +
    '<div id="tl-grid" class="tl-grid" role="list"></div>' +
    '<div id="tl-view" class="tl-view" hidden></div>' +
    '<h3 class="tl-papers-h">Practice papers</h3>' +
    '<p class="tl-sub">Full timed papers written in exam style. Answer everything, submit, and get your score with a complete answer key and explanations. Nothing leaves your browser.</p>' +
    '<div id="tl-paper-grid" class="tl-grid" role="list"></div>' +
    '<div id="tl-paper-view" class="tl-view" hidden></div>';

  var grid = $('#tl-grid', mount), view = $('#tl-view', mount),
      pgrid = $('#tl-paper-grid', mount), pview = $('#tl-paper-view', mount),
      search = $('#tl-search', mount), filters = $('#tl-filters', mount);

  var subjects = [];
  D.topics.forEach(function (t) { if (subjects.indexOf(t.subject) < 0) subjects.push(t.subject); });

  /* ---------------- topic index ---------------- */
  function topicCard(t) {
    var b = document.createElement('button');
    b.className = 'tl-card'; b.setAttribute('role', 'listitem');
    b.dataset.subject = t.subject; b.dataset.title = (t.title + ' ' + t.subject + ' ' + (t.tag || '')).toLowerCase();
    b.innerHTML = '<span class="tl-chip">' + esc(t.subject) + '</span><h3>' + esc(t.title) + '</h3>' +
      '<p>' + esc(t.blurb || t.intro.slice(0, 110) + '…') + '</p>' +
      (t.tag ? '<p class="tl-paper-meta">' + esc(t.tag) + '</p>' : '') +
      '<span class="tl-open">Open full topic →</span>';
    b.addEventListener('click', function () { location.hash = 'topic-' + t.id; });
    return b;
  }
  function renderGrid() {
    grid.innerHTML = '';
    D.topics.forEach(function (t) { grid.appendChild(topicCard(t)); });
    applyFilter();
  }
  function renderFilters() {
    filters.innerHTML = '';
    var all = document.createElement('button');
    all.className = 'tl-filter'; all.textContent = 'All';
    all.setAttribute('aria-pressed', 'true'); all.dataset.f = '';
    filters.appendChild(all);
    subjects.forEach(function (s) {
      var b = document.createElement('button');
      b.className = 'tl-filter'; b.textContent = s;
      b.setAttribute('aria-pressed', 'false'); b.dataset.f = s;
      filters.appendChild(b);
    });
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('.tl-filter'); if (!b) return;
      filters.querySelectorAll('.tl-filter').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      applyFilter();
    });
  }
  function applyFilter() {
    var q = (search.value || '').toLowerCase().trim();
    var f = (filters.querySelector('[aria-pressed="true"]') || {}).dataset;
    f = f ? f.f : '';
    grid.querySelectorAll('.tl-card').forEach(function (c) {
      var okSub = !f || c.dataset.subject === f;
      var okQ = !q || c.dataset.title.indexOf(q) >= 0;
      c.hidden = !(okSub && okQ);
    });
  }
  search.addEventListener('input', applyFilter);

  /* ---------------- topic detail ---------------- */
  function findTopic(id) { for (var i = 0; i < D.topics.length; i++) if (D.topics[i].id === id) return D.topics[i]; return null; }

  function renderSections(t) {
    var out = '';
    (t.sections || []).forEach(function (s) {
      out += '<div class="tl-sec"><h3>' + esc(s.h) + '</h3>';
      if (s.body) out += s.body; // authored HTML
      if (s.table) {
        out += '<table class="tl-table"><thead><tr>';
        s.table.head.forEach(function (c) { out += '<th>' + esc(c) + '</th>'; });
        out += '</tr></thead><tbody>';
        s.table.rows.forEach(function (r) {
          out += '<tr>'; r.forEach(function (c) { out += '<td>' + c + '</td>'; }); out += '</tr>';
        });
        out += '</tbody></table>';
      }
      if (s.svg) out += '<div class="tl-diagram" role="img" aria-label="' + esc(s.svgCap || 'Diagram') + '">' + s.svg + (s.svgCap ? '<p class="tl-cap">' + esc(s.svgCap) + '</p>' : '') + '</div>';
      out += '</div>';
    });
    return out;
  }

  function questionHTML(q, idx, prefix) {
    var out = '<div class="tl-q" data-ans="' + q.answer + '"><p class="tl-qn">' + (idx + 1) + '. ' + esc(q.q) + '</p><div class="tl-opts">';
    q.options.forEach(function (o, i) {
      out += '<button type="button" class="tl-opt" data-i="' + i + '"><span class="tl-k">' + LETTERS[i] + '.</span><span>' + esc(o) + '</span></button>';
    });
    out += '</div><div class="tl-expl"><strong>Answer: ' + LETTERS[q.answer] + '.</strong> ' + esc(q.expl) + '</div></div>';
    return out;
  }
  function wireQuestions(root) {
    root.querySelectorAll('.tl-q').forEach(function (qel) {
      var ans = parseInt(qel.dataset.ans, 10);
      var opts = qel.querySelectorAll('.tl-opt');
      opts.forEach(function (b) {
        b.addEventListener('click', function () {
          var pick = parseInt(b.dataset.i, 10);
          opts.forEach(function (x) { x.disabled = true; });
          opts[ans].classList.add('tl-right');
          if (pick !== ans) b.classList.add('tl-wrong');
          var ex = qel.querySelector('.tl-expl');
          if (ex) ex.classList.add('show');
        });
      });
    });
  }

  function openTopic(id, fromHash) {
    var t = findTopic(id); if (!t) return;
    viewMode = 'topic'; currentId = id;
    grid.hidden = true;
    view.hidden = false;
    view.innerHTML =
      '<button type="button" class="tl-back" id="tl-back">← All topics</button>' +
      '<h2>' + esc(t.title) + '</h2>' +
      '<div class="tl-chips"><span>' + esc(t.subject) + '</span>' + (t.tag ? '<span>' + esc(t.tag) + '</span>' : '') + '</div>' +
      '<p class="tl-intro">' + esc(t.intro) + '</p>' +
      renderSections(t) +
      '<div class="tl-qblock"><h3>Quick-revision questions</h3><div id="tl-qs"></div></div>';
    var qs = $('#tl-qs', view);
    (t.questions || []).forEach(function (q, i) { qs.insertAdjacentHTML('beforeend', questionHTML(q, i)); });
    wireQuestions(view);
    $('#tl-back', view).addEventListener('click', function () { location.hash = 'topic-library'; });
    if (!fromHash) scrollToLib(); else { var sec = mount.closest('.topic-lib-sec'); if (sec) sec.scrollIntoView({ block: 'start' }); }
  }

  function closeTopic() {
    viewMode = null; currentId = null;
    view.hidden = true; grid.hidden = false;
  }

  /* ---------------- practice papers ---------------- */
  function findPaper(id) { for (var i = 0; i < (D.papers || []).length; i++) if (D.papers[i].id === id) return D.papers[i]; return null; }

  function renderPaperGrid() {
    pgrid.innerHTML = '';
    (D.papers || []).forEach(function (p) {
      var b = document.createElement('button');
      b.className = 'tl-card'; b.setAttribute('role', 'listitem');
      b.innerHTML = '<span class="tl-chip">Practice paper</span><h3>' + esc(p.title) + '</h3>' +
        '<p class="tl-paper-meta">' + esc(p.meta) + '</p>' +
        '<p>' + p.questions.length + ' questions · ' + p.minutes + ' minutes</p>' +
        '<span class="tl-open">Start paper →</span>';
      b.addEventListener('click', function () { location.hash = 'paper-' + p.id; });
      pgrid.appendChild(b);
    });
  }

  function openPaper(id, fromHash) {
    var p = findPaper(id); if (!p) return;
    viewMode = 'paper'; currentId = id;
    pgrid.hidden = true; pview.hidden = false;
    paperState = { p: p, answers: {}, startT: null, timerId: null, left: p.minutes * 60, submitted: false };
    pview.innerHTML =
      '<button type="button" class="tl-back" id="tl-pback">← All papers</button>' +
      '<h2>' + esc(p.title) + '</h2>' +
      '<div class="tl-chips"><span>' + p.questions.length + ' questions</span><span>' + p.minutes + ' minutes</span><span>' + esc(p.meta) + '</span></div>' +
      '<p class="tl-intro">' + esc(p.instructions || 'Answer every question, then submit. The timer starts when you press Start. Your score and a full answer key appear instantly.') + '</p>' +
      '<div class="tl-actions"><button type="button" class="tl-btn" id="tl-pstart">Start paper</button></div>' +
      '<div id="tl-prun"></div>';
    $('#tl-pback', pview).addEventListener('click', function () { location.hash = 'topic-library'; });
    $('#tl-pstart', pview).addEventListener('click', startPaper);
    if (fromHash) { var sec = mount.closest('.topic-lib-sec'); if (sec) sec.scrollIntoView({ block: 'start' }); }
  }

  function startPaper() {
    var st = paperState, run = $('#tl-prun', pview);
    st.startT = Date.now();
    var out = '<div class="tl-timer" id="tl-timer"><span>⏱ Time left</span><span id="tl-clock"></span></div><div id="tl-pqs"></div>' +
      '<div class="tl-actions"><button type="button" class="tl-btn" id="tl-submit">Submit paper</button></div>';
    run.innerHTML = out;
    var qs = $('#tl-pqs', run);
    st.p.questions.forEach(function (q, i) {
      var d = document.createElement('div');
      d.className = 'tl-q tl-pq';
      var inner = '<p class="tl-qn">' + (i + 1) + '. ' + esc(q.q) + '</p><div class="tl-opts">';
      q.options.forEach(function (o, j) {
        inner += '<label class="tl-opt"><input type="radio" name="pq' + i + '" value="' + j + '" style="margin-top:3px"><span><span class="tl-k">' + LETTERS[j] + '.</span> ' + esc(o) + '</span></label>';
      });
      d.innerHTML = inner + '</div>';
      qs.appendChild(d);
    });
    // labels: single-choice behaviour is native to radio; style selected via :checked accent
    run.addEventListener('change', function (e) {
      var r = e.target.closest('input[type=radio]'); if (!r) return;
      st.answers[parseInt(r.name.slice(2), 10)] = parseInt(r.value, 10);
    });
    $('#tl-submit', run).addEventListener('click', function () { submitPaper(false); });
    tickClock();
    st.timerId = setInterval(tickClock, 1000);
    run.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function tickClock() {
    var st = paperState; if (!st || st.submitted) return;
    var el = $('#tl-clock', pview); if (!el) return;
    st.left = Math.max(0, st.p.minutes * 60 - Math.floor((Date.now() - st.startT) / 1000));
    var m = Math.floor(st.left / 60), s = st.left % 60;
    el.textContent = m + ':' + (s < 10 ? '0' : '') + s;
    var t = $('#tl-timer', pview);
    if (t) t.classList.toggle('tl-low', st.left < 300);
    if (st.left <= 0) submitPaper(true);
  }

  function submitPaper(auto) {
    var st = paperState; if (!st || st.submitted) return;
    st.submitted = true;
    if (st.timerId) clearInterval(st.timerId);
    var run = $('#tl-prun', pview);
    var correct = 0, total = st.p.questions.length;
    st.p.questions.forEach(function (q, i) { if (st.answers[i] === q.answer) correct++; });
    var pct = Math.round(correct / total * 100);
    var grade = pct >= 85 ? 'Outstanding — exam ready on this set.' : pct >= 65 ? 'Strong — revise the ones you missed below.' : pct >= 45 ? 'Getting there — re-study the weak topics, then retake.' : 'Rebuild the basics first — open the related topics above, then retake.';
    var used = Math.floor((Date.now() - st.startT) / 1000);
    var um = Math.floor(used / 60), us = used % 60;
    var out = '<div class="tl-result"><p class="tl-score">' + correct + ' / ' + total + '</p>' +
      '<p class="tl-grade">' + pct + '% · ' + (auto ? 'Time expired — auto-submitted. ' : '') + 'Time used: ' + um + 'm ' + us + 's<br>' + esc(grade) + '</p>' +
      '<div class="tl-actions"><button type="button" class="tl-btn ghost" id="tl-retake">Retake paper</button></div></div>' +
      '<div class="tl-qblock"><h3>Answer key with explanations</h3><div class="tl-review" id="tl-rev"></div></div>';
    run.innerHTML = out;
    var rev = $('#tl-rev', run);
    st.p.questions.forEach(function (q, i) {
      var mine = st.answers[i], ok = mine === q.answer;
      var d = document.createElement('div');
      d.className = 'tl-q ' + (ok ? 'tl-r-ok' : 'tl-r-no');
      var inner = '<p class="tl-qn">' + (i + 1) + '. ' + esc(q.q) + '</p>';
      inner += '<p class="tl-your ' + (ok ? 'ok' : 'no') + '">' + (mine == null ? 'Not attempted' : 'Your answer: ' + LETTERS[mine] + (ok ? ' ✓' : ' ✗')) + ' · Correct: ' + LETTERS[q.answer] + '</p>';
      inner += '<div class="tl-expl show"><strong>Answer: ' + LETTERS[q.answer] + '.</strong> ' + esc(q.expl) + '</div>';
      d.innerHTML = inner;
      rev.appendChild(d);
    });
    $('#tl-retake', run).addEventListener('click', function () { openPaper(st.p.id, true); });
    run.scrollIntoView({ block: 'start' });
  }

  function closePaper() {
    if (paperState && paperState.timerId) clearInterval(paperState.timerId);
    paperState = null; viewMode = null; currentId = null;
    pview.hidden = true; pgrid.hidden = false;
  }

  /* ---------------- router ---------------- */
  function route() {
    var hh = location.hash || '';
    var m = hh.match(/^#topic-(.+)$/);
    var pm = hh.match(/^#paper-(.+)$/);
    if (m && findTopic(m[1])) {
      if (viewMode !== 'topic' || currentId !== m[1]) { closePaper(); openTopic(m[1], true); }
      return;
    }
    if (pm && findPaper(pm[1])) {
      if (viewMode !== 'paper' || currentId !== pm[1]) { closeTopic(); openPaper(pm[1], true); }
      return;
    }
    // any other hash (incl. #topic-library): show indexes
    if (viewMode === 'topic') closeTopic();
    if (viewMode === 'paper') closePaper();
  }
  window.addEventListener('hashchange', route);

  renderFilters();
  renderGrid();
  renderPaperGrid();
  route();
})();
