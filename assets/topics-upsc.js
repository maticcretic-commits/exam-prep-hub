/* ==========================================================================
   EPH Topic Library data — UPSC CSE.
   window.EPH_TOPIC_DATA contract: { exam, examName, topics:[...], papers:[...] }
   Topic: { id, title, subject, tag, blurb, intro, sections:[{h, body?, table?, svg?, svgCap?}],
            questions:[{q, options[4], answer, expl}] }
   Paper: { id, title, meta, minutes, instructions?, questions:[...] }
   All content is original, written for this site. No external copying.
   ========================================================================== */
window.EPH_TOPIC_DATA = {
exam: "upsc",
examName: "UPSC Civil Services",
topics: [

/* ============================ POLITY ============================ */
{
id: "upsc-polity-fr",
title: "Fundamental Rights (Articles 12–35)",
subject: "Polity",
tag: "Prelims GS I · Mains GS II · Very high weightage",
blurb: "The six groups of rights, how writs enforce them, and the Article 32 vs 226 distinction.",
intro: "Fundamental Rights are the justiciable core of the Constitution — the citizen can walk straight into court if the State violates them. Part III (Articles 12–35) draws on the American Bill of Rights but adds Indian innovations: rights against private exploitation (Articles 23–24), cultural and educational rights for minorities (29–30), and the right to constitutional remedies itself made a Fundamental Right (Article 32). For the exam, master three things: which article says what, how each right is enforced, and where the right ends (reasonable restrictions).",
sections: [
{ h: "The six groups at a glance",
  table: { head: ["Group", "Articles", "Core idea"],
  rows: [
   ["Right to Equality", "14–18", "Equality before law, no discrimination, equality of opportunity in public employment, abolition of untouchability and titles."],
   ["Right to Freedom", "19–22", "Six freedoms (speech, assembly, association, movement, residence, profession); protection in conviction; life and personal liberty; protection against arrest."],
   ["Right against Exploitation", "23–24", "Prohibition of human trafficking, forced labour, and child labour in hazardous work (under 14)."],
   ["Right to Freedom of Religion", "25–28", "Freedom of conscience, to profess/practise/propagate, manage religious affairs; no religious taxes; no religious instruction in state-funded schools."],
   ["Cultural & Educational Rights", "29–30", "Minorities may conserve language/script/culture and run educational institutions."],
   ["Right to Constitutional Remedies", "32", "The right to move the Supreme Court to enforce the other rights — called the 'heart and soul' of the Constitution."]
  ] } },
{ h: "How a violated right is enforced",
  body: "<p>Think of enforcement as a two-door system. The citizen whose right is violated chooses a door; the court then picks the right <strong>writ</strong> — a written judicial command. The Supreme Court's door (Article 32) opens <strong>only</strong> for Fundamental Rights. The High Court's door (Article 226) opens for Fundamental Rights <strong>and</strong> 'any other purpose', i.e. ordinary legal rights too — wider in scope.</p>",
  svg: "<svg class='tl-svg' viewBox='0 0 640 360' role='img' aria-label='Flowchart of Fundamental Rights enforcement'><rect class='tdb2' x='220' y='10' width='200' height='52' rx='10'/><text class='tdc' x='320' y='41' text-anchor='middle'>Fundamental Right violated</text><line class='tdl' x1='320' y1='62' x2='320' y2='88'/><polygon points='320,96 312,84 328,84' fill='var(--tl-accent,#f19a59)'/><rect class='tdb' x='60' y='96' width='240' height='60' rx='10'/><text class='tdt' x='180' y='120' text-anchor='middle'>Supreme Court</text><text class='tds' x='180' y='140' text-anchor='middle'>Article 32 — FRs only</text><rect class='tdb' x='340' y='96' width='240' height='60' rx='10'/><text class='tdt' x='460' y='120' text-anchor='middle'>High Court</text><text class='tds' x='460' y='140' text-anchor='middle'>Article 226 — FRs + legal rights</text><line class='tdl' x1='180' y1='156' x2='180' y2='186'/><line class='tdl' x1='460' y1='156' x2='460' y2='186'/><rect class='tdb' x='20' y='186' width='600' height='120' rx='10'/><text class='tdt' x='320' y='212' text-anchor='middle'>Five writs — the enforcement tools</text><text class='tds' x='320' y='236' text-anchor='middle'>Habeas Corpus: produce the detained person · Mandamus: command a public duty</text><text class='tds' x='320' y='258' text-anchor='middle'>Prohibition: stop a lower court from exceeding jurisdiction · Certiorari: quash its order</text><text class='tds' x='320' y='280' text-anchor='middle'>Quo Warranto: by what authority do you hold this public office?</text><rect class='tdb' x='180' y='318' width='280' height='34' rx='17'/><text class='tds' x='320' y='340' text-anchor='middle'>Parliament can empower other courts (Art 32(3)); Art 32 cannot be suspended except in Emergency</text></svg>",
  svgCap: "Enforcement route: violation → court → writ." },
{ h: "Exam traps to avoid",
  body: "<ul><li><strong>Article 32 vs 226:</strong> 226 is wider (any other purpose), but 32 is itself a Fundamental Right — that is why it is called the heart and soul.</li><li><strong>Available against:</strong> most FRs operate against the State (Article 12 defines State); Articles 15(2), 17, 23, 24 also reach private action.</li><li><strong>Reasonable restrictions:</strong> freedoms under Article 19 are not absolute — each lists its own permitted grounds (sovereignty, public order, morality, etc.).</li><li><strong>Amendability:</strong> Parliament can amend FRs (24th Amendment, 1971), but not destroy the basic structure (Kesavananda Bharati, 1973).</li></ul>" }
],
questions: [
{ q: "Which statement best distinguishes Article 226 from Article 32?",
  options: ["Only Article 226 permits habeas corpus", "Article 226 also covers legal rights beyond Fundamental Rights", "Article 226 can be used only against state governments", "Article 32 petitions are heard only by High Courts"],
  answer: 1, expl: "High Courts under Article 226 may issue writs for Fundamental Rights and 'for any other purpose', i.e. ordinary legal rights — wider subject-matter scope than Article 32, which is confined to Fundamental Rights." },
{ q: "The writ of Certiorari is issued to:",
  options: ["Produce a detained person before the court", "Command a public authority to perform its duty", "Quash the order of a lower court or tribunal", "Question a person's claim to public office"],
  answer: 2, expl: "Certiorari quashes an order already passed by a lower court/tribunal acting beyond jurisdiction. Prohibition stops proceedings in advance; Habeas Corpus produces the detainee; Mandamus commands performance of duty; Quo Warranto questions authority to hold office." },
{ q: "Which Fundamental Right is available to citizens and non-citizens alike?",
  options: ["Article 15 — prohibition of discrimination", "Article 16 — equality of opportunity in public employment", "Article 21 — protection of life and personal liberty", "Article 19 — the six freedoms"],
  answer: 2, expl: "Articles 15, 16 and 19 are citizen-only. Article 21 ('no person shall be deprived of life or personal liberty') uses 'person', so it protects everyone, including non-citizens." },
{ q: "The 86th Amendment (2002) inserted which Fundamental Right?",
  options: ["Right to free and compulsory education for ages 6–14 (Article 21A)", "Right to privacy", "Right to clean environment", "Right to speedy trial"],
  answer: 0, expl: "The 86th Amendment inserted Article 21A (free and compulsory education, 6–14 years), substituted Article 45, and added a Fundamental Duty (51A(k)) for parents. The RTE Act, 2009 gave it statutory shape." },
{ q: "Untouchability is abolished and its practice punishable under:",
  options: ["Article 15", "Article 17", "Article 23", "Article 25"],
  answer: 1, expl: "Article 17 abolishes untouchability and forbids its practice in any form. Article 15 bars discrimination on listed grounds; Article 23 bars trafficking and forced labour." }
]
},
],
papers: []
};
