/* ==========================================================================
   EPH Topic Library data — UPSC CSE, part 2.
   Augments window.EPH_TOPIC_DATA created by topics-upsc.js (load order:
   topics-upsc.js -> topics-upsc-2.js -> renderer):
     window.EPH_TOPIC_DATA.topics.push( 17 topic objects );
     window.EPH_TOPIC_DATA.papers = [ 2 practice paper objects ];
   Topic contract: { id, title, subject, tag, blurb, intro,
     sections:[{h, body?, table?, svg?, svgCap?}],
     questions:[{q, options[4], answer (0-3), expl}] }
   Paper contract: { id, title, meta, minutes, instructions?, questions:[...] }
   Practice papers are ORIGINAL items written for this site — not PYQs.
   All content is original. No external copying. Never mention any AI assistant.
   ========================================================================== */
(function () {
if(!window.EPH_TOPIC_DATA) return;

window.EPH_TOPIC_DATA.topics.push(

/* ============================ POLITY ============================ */
{
id: "upsc-polity-dpsp-fd",
title: "Directive Principles & Fundamental Duties",
subject: "Polity",
tag: "Prelims GS I · Mains GS II · High weightage",
blurb: "Articles 36–51 tell the State what to aim for; Article 51A tells the citizen what is owed back — and why neither is enforceable in court.",
intro: "If Fundamental Rights are the Constitution's promise to the citizen, the Directive Principles of State Policy are its programme for the State. Part IV (Articles 36–51) sketches the welfare-state goals — social, economic and political justice — that every government must strive towards. The catch is written into Article 37 itself: these principles are non-justiciable, so no court can compel a government to implement them, yet they are 'fundamental in the governance of the country'. The Fundamental Duties (Part IVA, Article 51A), added in 1976, complete the triangle: rights for the citizen, goals for the State, duties for the citizen.",
sections: [
{ h: "Three families of Directive Principles",
  body: "<p>Textbooks group the Principles into three families — a favourite framing for both Prelims and Mains. The <strong>socialist</strong> family (Articles 38, 39, 39A, 41, 42, 43, 43A, 47) pushes economic justice: equal pay for equal work, free legal aid (39A, added by the 42nd Amendment), a living wage, and public health. The <strong>Gandhian</strong> family (Articles 40, 43, 43B, 46, 47, 48) carries the village-republic vision: panchayats, cottage industries, co-operative societies (43B, added by the 97th Amendment), and protection of SCs/STs. The <strong>liberal–intellectual</strong> family (Articles 44, 45, 48, 48A, 49, 50, 51) is the moderniser's list: a uniform civil code (44), separation of the judiciary from the executive (50), environmental protection (48A), and promotion of international peace (51). In practice, big legislations trace back here: MGNREGA to the right to work (41), the 73rd Amendment to panchayats (40), and the RTE Act to education (45, now 21A).</p>",
  table: { head: ["Family", "Key articles", "Signature ideas"],
  rows: [
   ["Socialist", "38, 39, 39A, 41, 42, 43, 43A, 47", "Minimise inequalities; equal pay; free legal aid; living wage; maternity relief; workers' participation in management."],
   ["Gandhian", "40, 43, 43B, 46, 47, 48", "Village panchayats; cottage industries; co-operative societies; uplift of SCs/STs; ban on cow slaughter."],
   ["Liberal–intellectual", "44, 45, 48A, 49, 50, 51", "Uniform civil code; early childhood care; environment; monuments; judiciary separated from executive; world peace."]
  ] } },
{ h: "The design at a glance",
  svg: "<svg class='tl-svg' viewBox='0 0 640 360' role='img' aria-label='Directive Principles families diagram'><rect class='tdb2' x='200' y='12' width='240' height='50' rx='10'/><text class='tdc' x='320' y='43' text-anchor='middle'>Part IV · Articles 36–51</text><line class='tdl' x1='320' y1='62' x2='140' y2='100'/><line class='tdl' x1='320' y1='62' x2='320' y2='100'/><line class='tdl' x1='320' y1='62' x2='500' y2='100'/><rect class='tdb' x='20' y='100' width='180' height='86' rx='10'/><text class='tdt' x='110' y='126' text-anchor='middle'>Socialist</text><text class='tds' x='110' y='148' text-anchor='middle'>Arts 38, 39, 39A,</text><text class='tds' x='110' y='166' text-anchor='middle'>41, 42, 43, 47</text><rect class='tdb' x='230' y='100' width='180' height='86' rx='10'/><text class='tdt' x='320' y='126' text-anchor='middle'>Gandhian</text><text class='tds' x='320' y='148' text-anchor='middle'>Arts 40, 43, 43B,</text><text class='tds' x='320' y='166' text-anchor='middle'>46, 47, 48</text><rect class='tdb' x='440' y='100' width='180' height='86' rx='10'/><text class='tdt' x='530' y='126' text-anchor='middle'>Liberal–intellectual</text><text class='tds' x='530' y='148' text-anchor='middle'>Arts 44, 45, 48A,</text><text class='tds' x='530' y='166' text-anchor='middle'>49, 50, 51</text><line class='tdld' x1='320' y1='186' x2='320' y2='216'/><rect class='tdb' x='140' y='216' width='360' height='66' rx='10'/><text class='tdt' x='320' y='242' text-anchor='middle'>Part IVA · Article 51A</text><text class='tds' x='320' y='264' text-anchor='middle'>11 Fundamental Duties — the citizen's side (42nd &amp; 86th Amendments)</text><rect class='tdb' x='170' y='298' width='300' height='40' rx='20'/><text class='tds' x='320' y='323' text-anchor='middle'>DPSPs: non-justiciable (Art 37) · Duties: non-enforceable</text></svg>",
  svgCap: "Part IV directs the State; Part IVA reminds the citizen." },
{ h: "Fundamental Duties: eleven reminders",
  body: "<p>The Duties were inserted by the <strong>42nd Amendment (1976)</strong> on the recommendation of the <strong>Swaran Singh Committee</strong> — originally ten, raised to eleven when the <strong>86th Amendment (2002)</strong> added 51A(k): every parent or guardian must provide education to a child aged 6–14. The list reads like a civic charter: respect the Constitution, flag and anthem; cherish the ideals of the freedom struggle; protect India's sovereignty and integrity; defend the country; promote harmony across religions, languages and regions; safeguard public property; protect the environment; develop scientific temper and the spirit of inquiry; and strive for excellence. Like the Principles, the Duties are not directly enforceable — but courts routinely invoke them while interpreting laws, especially in environmental and education cases, treating them as the moral counterweight to Fundamental Rights.</p>" }
],
questions: [
{ q: "The Directive Principles are 'fundamental in the governance of the country' yet not enforceable by courts because of:",
  options: ["Article 32", "Article 37", "Article 50", "Article 51"],
  answer: 1, expl: "Article 37 expressly bars courts from enforcing the Directive Principles, while declaring them fundamental in governance and a duty of the State to apply in law-making." },
{ q: "The Fundamental Duties were inserted into the Constitution by the:",
  options: ["24th Amendment, 1971", "42nd Amendment, 1976", "44th Amendment, 1978", "52nd Amendment, 1985"],
  answer: 1, expl: "The 42nd Amendment added Part IVA (Article 51A) on the Swaran Singh Committee's recommendation. The 44th Amendment is the one that rolled back Emergency-era changes." },
{ q: "Which Directive Principle was given institutional shape by the 73rd Constitutional Amendment?",
  options: ["Article 39 — equal pay for equal work", "Article 40 — organisation of village panchayats", "Article 44 — uniform civil code", "Article 48 — prohibition of cow slaughter"],
  answer: 1, expl: "Article 40 directs the State to organise village panchayats; the 73rd Amendment (1992) constitutionalised them as the third tier of government." },
{ q: "The eleventh Fundamental Duty, Article 51A(k), added by the 86th Amendment, requires:",
  options: ["The State to provide free legal aid", "Parents or guardians to provide educational opportunities to children aged 6–14", "Citizens to protect monuments of national importance", "Citizens to safeguard public property"],
  answer: 1, expl: "51A(k) makes it a parent's/guardian's duty to ensure education for children between 6 and 14 — the duty-side companion of the Article 21A right to education." },
{ q: "Article 50 of the Directive Principles directs the State to:",
  options: ["Secure a uniform civil code", "Take steps to separate the judiciary from the executive", "Organise village panchayats", "Protect and improve the environment"],
  answer: 1, expl: "Article 50 mandates separation of the judiciary from the executive in public services — the constitutional root of judicial independence. UCC is Article 44; panchayats Article 40; environment Article 48A." }
]
},
{
id: "upsc-polity-parliament",
title: "Parliament — Composition, Powers, Procedures",
subject: "Polity",
tag: "Prelims GS I · Mains GS II · Very high weightage",
blurb: "Lok Sabha vs Rajya Sabha numbers, the money-bill fast lane, and the devices — from Question Hour to no-confidence — that keep the executive answerable.",
intro: "Parliament is the Union's legislative organ: the President plus two Houses — the Council of States (Rajya Sabha) and the House of the People (Lok Sabha), under Articles 79–122. It makes laws, controls the purse, and holds the executive collectively responsible to the Lok Sabha. For the exam, the high-yield core is numerical and procedural: the composition of each House, how the two Houses differ in power, the special route for money bills, and the parliamentary devices through which accountability is enforced day to day.",
sections: [
{ h: "Composition: the numbers that matter",
  table: { head: ["Feature", "Lok Sabha", "Rajya Sabha"],
  rows: [
   ["Maximum strength", "550 (530 states + 20 UTs)", "250 (238 elected + 12 nominated)"],
   ["Current elected strength", "543", "245"],
   ["Term", "5 years (can be extended in Emergency)", "Permanent body; 1/3 retire every 2 years; 6-year term per member"],
   ["Minimum age", "25 years", "30 years"],
   ["Nominated members", "None now — Anglo-Indian reservation ended by the 104th Amendment, 2020", "12, nominated by the President for eminence in art, science, literature, social service"],
   ["Presiding officer", "Speaker (elected by the House)", "Vice-President of India, ex-officio Chairman"]
  ] } },
{ h: "Money bills vs ordinary bills",
  body: "<p>The money-bill route is Parliament's most-tested procedure. A bill is a <strong>money bill</strong> only if it deals substantially with the matters in <strong>Article 110</strong> (taxation, borrowing, Consolidated Fund) — and the <strong>Speaker certifies</strong> it, a decision courts rarely second-guess. It can be introduced <strong>only in the Lok Sabha</strong> and only on the President's recommendation. After passage, the Rajya Sabha gets just <strong>14 days</strong> to return it with recommendations, which the Lok Sabha may accept or reject; if the Rajya Sabha does nothing, the bill is deemed passed. The President <strong>cannot return</strong> a money bill for reconsideration. Ordinary bills, by contrast, need both Houses' agreement — and a deadlock triggers a <strong>joint sitting under Article 108</strong>, presided over by the Speaker, decided by simple majority of members present and voting.</p>",
  svg: "<svg class='tl-svg' viewBox='0 0 640 360' role='img' aria-label='Money bill versus ordinary bill flowchart'><rect class='tdb2' x='220' y='10' width='200' height='52' rx='10'/><text class='tdc' x='320' y='41' text-anchor='middle'>Bill introduced</text><line class='tdl' x1='320' y1='62' x2='180' y2='96'/><line class='tdl' x1='320' y1='62' x2='460' y2='96'/><rect class='tdb' x='60' y='96' width='240' height='76' rx='10'/><text class='tdt' x='180' y='122' text-anchor='middle'>Money Bill (Art 110)</text><text class='tds' x='180' y='144' text-anchor='middle'>Lok Sabha only · Speaker certifies</text><text class='tds' x='180' y='162' text-anchor='middle'>Rajya Sabha: 14 days, advisory</text><rect class='tdb' x='340' y='96' width='240' height='76' rx='10'/><text class='tdt' x='460' y='122' text-anchor='middle'>Ordinary Bill</text><text class='tds' x='460' y='144' text-anchor='middle'>Either House · both must agree</text><text class='tds' x='460' y='162' text-anchor='middle'>Deadlock → joint sitting (Art 108)</text><line class='tdl' x1='180' y1='172' x2='180' y2='200'/><line class='tdl' x1='460' y1='172' x2='460' y2='200'/><rect class='tdb' x='60' y='200' width='240' height='60' rx='10'/><text class='tds' x='180' y='224' text-anchor='middle'>President cannot return it</text><text class='tds' x='180' y='244' text-anchor='middle'>for reconsideration</text><rect class='tdb' x='340' y='200' width='240' height='60' rx='10'/><text class='tds' x='460' y='224' text-anchor='middle'>President may return once</text><text class='tds' x='460' y='244' text-anchor='middle'>(suspensive veto, Art 111)</text><rect class='tdb' x='180' y='282' width='280' height='44' rx='22'/><text class='tds' x='320' y='309' text-anchor='middle'>Pocket veto: no time limit for assent is prescribed</text></svg>",
  svgCap: "Two legislative lanes: the money-bill fast lane and the ordinary-bill route." },
{ h: "Devices of accountability",
  body: "<ul><li><strong>Question Hour:</strong> the first hour of sitting; starred questions get oral answers with supplementaries, unstarred get written replies.</li><li><strong>Zero Hour:</strong> an Indian innovation (not in the rules) — members raise urgent matters without notice after Question Hour.</li><li><strong>Adjournment motion:</strong> suspends normal business to discuss a definite matter of urgent public importance; needs 50 members' support to admit.</li><li><strong>No-confidence motion:</strong> the ultimate weapon — moved only in the Lok Sabha, needs 50 members to admit; if passed, the entire Council of Ministers must resign (collective responsibility, Article 75).</li><li><strong>Money control:</strong> no tax without law (Article 265); the budget's demands for grants are voted only by the Lok Sabha; the CAG audits and the Public Accounts Committee scrutinises.</li></ul>" }
],
questions: [
{ q: "The maximum strength of the Rajya Sabha, and the number of members nominated by the President, are:",
  options: ["250 and 12", "245 and 12", "250 and 10", "238 and 12"],
  answer: 0, expl: "Article 80 caps the Rajya Sabha at 250 — 238 elected plus 12 nominated for eminence in fields like art, science and literature. The present strength is 245." },
{ q: "After a money bill is passed by the Lok Sabha, the Rajya Sabha must return it within:",
  options: ["7 days", "14 days", "30 days", "60 days"],
  answer: 1, expl: "Article 109 gives the Rajya Sabha 14 days to return a money bill with recommendations, which the Lok Sabha may accept or reject. Silence for 14 days means deemed passage." },
{ q: "A no-confidence motion can be moved:",
  options: ["In either House of Parliament", "Only in the Lok Sabha", "Only in the Rajya Sabha", "Only during the Budget Session"],
  answer: 1, expl: "No-confidence targets the Council of Ministers' collective responsibility to the Lok Sabha (Article 75), so it lies only there, and needs 50 members' support for admission." },
{ q: "The 104th Constitutional Amendment (2020) is associated with:",
  options: ["Goods and Services Tax", "End of Anglo-Indian reservation in legislatures", "Lowering the voting age", "Creation of new states"],
  answer: 1, expl: "The 104th Amendment discontinued the nomination of Anglo-Indians to the Lok Sabha and state assemblies, while extending SC/ST reservation to 2030." },
{ q: "A joint sitting of Parliament under Article 108 is presided over by the:",
  options: ["President of India", "Vice-President", "Speaker of the Lok Sabha", "Senior-most member present"],
  answer: 2, expl: "Article 118(4): the Speaker presides over a joint sitting; in the Speaker's absence, the Deputy Speaker. It resolves deadlocks on ordinary bills by simple majority." }
]
},
{
id: "upsc-polity-judiciary",
title: "Judiciary & Judicial Review",
subject: "Polity",
tag: "Prelims GS I · Mains GS II · Very high weightage",
blurb: "One integrated court pyramid, three jurisdictions of the Supreme Court, and how judicial review grew teeth from 1967 to Minerva Mills.",
intro: "India has a single, integrated judiciary — the Supreme Court at the apex, High Courts in the states, and subordinate courts below — unlike the dual court systems of federations like the United States. The Supreme Court (Articles 124–147) came into being in 1950, replacing the colonial Federal Court. For the exam, organise the topic around three questions: what each tier does (jurisdictions), how courts acquired the power to strike down laws (judicial review), and who gets to be a judge (appointments and the collegium).",
sections: [
{ h: "The pyramid and its jurisdictions",
  table: { head: ["Court", "Constitutional home", "Key jurisdiction"],
  rows: [
   ["Supreme Court", "Arts 124–147", "Original (Art 131: Centre–State and inter-State disputes); writ (Art 32); appellate (Arts 132–136); advisory (Art 143); law declared by it binds all courts (Art 141)."],
   ["High Courts", "Arts 214–231", "Writ jurisdiction wider than the SC's (Art 226 covers legal rights too); superintendence over subordinate courts (Art 227)."],
   ["Subordinate courts", "Arts 233–237", "District judges appointed by the Governor in consultation with the High Court (Art 233); handle civil and criminal trials."]
  ] } },
{ h: "How judicial review grew teeth",
  body: "<p><strong>Judicial review</strong> — the power to strike down laws and executive actions that violate the Constitution — is not spelt out in one article; the courts built it case by case. The arc runs: <strong>Golaknath (1967)</strong>, where the Court said Fundamental Rights could not be amended at all → the <strong>24th Amendment (1971)</strong>, where Parliament asserted it could amend any part → <strong>Kesavananda Bharati (1973)</strong>, the 13-judge compromise: Parliament can amend, but cannot destroy the <strong>basic structure</strong> → the <strong>42nd Amendment (1976)</strong>, which tried to shield all laws from review → <strong>Minerva Mills (1980)</strong>, which struck that shield down and confirmed that judicial review and the balance between Parts III and IV are themselves part of the basic structure.</p>",
  svg: "<svg class='tl-svg' viewBox='0 0 640 360' role='img' aria-label='Timeline of judicial review in India'><rect class='tdb' x='10' y='150' width='112' height='80' rx='10'/><text class='tdt' x='66' y='176' text-anchor='middle'>1967</text><text class='tds' x='66' y='198' text-anchor='middle'>Golaknath:</text><text class='tds' x='66' y='214' text-anchor='middle'>FRs can't</text><text class='tds' x='66' y='228' text-anchor='middle'>be amended</text><rect class='tdb' x='138' y='150' width='112' height='80' rx='10'/><text class='tdt' x='194' y='176' text-anchor='middle'>1971</text><text class='tds' x='194' y='198' text-anchor='middle'>24th Amdt:</text><text class='tds' x='194' y='214' text-anchor='middle'>Parliament can</text><text class='tds' x='194' y='228' text-anchor='middle'>amend anything</text><rect class='tdb2' x='266' y='150' width='112' height='80' rx='10'/><text class='tdc' x='322' y='176' text-anchor='middle'>1973</text><text class='tds' x='322' y='198' text-anchor='middle' fill='#fff'>Kesavananda:</text><text class='tds' x='322' y='214' text-anchor='middle' fill='#fff'>basic structure</text><text class='tds' x='322' y='228' text-anchor='middle' fill='#fff'>doctrine born</text><rect class='tdb' x='394' y='150' width='112' height='80' rx='10'/><text class='tdt' x='450' y='176' text-anchor='middle'>1976</text><text class='tds' x='450' y='198' text-anchor='middle'>42nd Amdt:</text><text class='tds' x='450' y='214' text-anchor='middle'>tries to oust</text><text class='tds' x='450' y='228' text-anchor='middle'>judicial review</text><rect class='tdb' x='522' y='150' width='112' height='80' rx='10'/><text class='tdt' x='578' y='176' text-anchor='middle'>1980</text><text class='tds' x='578' y='198' text-anchor='middle'>Minerva Mills:</text><text class='tds' x='578' y='214' text-anchor='middle'>review itself is</text><text class='tds' x='578' y='228' text-anchor='middle'>basic structure</text><line class='tdl' x1='20' y1='130' x2='620' y2='130'/><polygon points='620,130 608,124 608,136' fill='var(--tl-accent,#f19a59)'/><text class='tdt' x='320' y='60' text-anchor='middle'>The tug-of-war: Parliament's amending power vs the Court's review power</text><text class='tds' x='320' y='90' text-anchor='middle'>Kesavananda (13 judges, 1973) remains the longest-oral-argument case in Supreme Court history</text><rect class='tdb' x='150' y='262' width='340' height='60' rx='10'/><text class='tds' x='320' y='288' text-anchor='middle'>Offshoot doctrines: PIL (Hussainara Khatoon, 1979), basic-structure review</text><text class='tds' x='320' y='308' text-anchor='middle'>of the 9th Schedule (I.R. Coelho, 2007)</text></svg>",
  svgCap: "Parliament pushes, the Court pushes back — the basic structure settles the contest." },
{ h: "Who becomes a judge: the collegium",
  body: "<p>Judges of the Supreme Court and High Courts are appointed by the President <strong>after consultation</strong> — but three landmark cases turned 'consultation' into judicial primacy. The <strong>First Judges case (1981)</strong> said the executive could overrule the Chief Justice; the <strong>Second Judges case (1993)</strong> reversed that, creating the <strong>collegium</strong> (CJI + four senior-most judges for SC appointments); the <strong>Third Judges case (1998)</strong> settled its working rules. Parliament tried to replace it with the National Judicial Appointments Commission via the 99th Amendment — struck down in 2015 as violating judicial independence, itself a basic-structure feature. Removal, meanwhile, is deliberately hard: a judge can be removed only by Parliament on proved misbehaviour or incapacity, by a two-thirds majority — a motion has succeeded against no Supreme Court judge so far.</p>" }
],
questions: [
{ q: "The Supreme Court's original jurisdiction under Article 131 covers:",
  options: ["Appeals in criminal cases from High Courts", "Disputes between the Centre and States, or between States", "Advisory opinions sought by the President", "Transfer of cases between High Courts"],
  answer: 1, expl: "Article 131 gives the SC exclusive original jurisdiction over Centre–State and inter-State disputes — no other court can hear them at first instance. Advisory jurisdiction is Article 143." },
{ q: "The basic structure doctrine was propounded in:",
  options: ["Golaknath v. State of Punjab (1967)", "Kesavananda Bharati v. State of Kerala (1973)", "Minerva Mills v. Union of India (1980)", "Maneka Gandhi v. Union of India (1978)"],
  answer: 1, expl: "Kesavananda Bharati (1973), decided by a 13-judge bench, held Parliament may amend the Constitution but cannot destroy its basic structure. Minerva Mills (1980) later confirmed judicial review is part of it." },
{ q: "The collegium system for judicial appointments was created by the:",
  options: ["First Judges case, 1981", "Second Judges case, 1993", "Third Judges case, 1998", "99th Constitutional Amendment"],
  answer: 1, expl: "The Second Judges case (1993) gave primacy to the CJI-led collegium. The 99th Amendment tried to replace it with the NJAC, which the Court struck down in 2015." },
{ q: "The President seeks the Supreme Court's advisory opinion under:",
  options: ["Article 32", "Article 136", "Article 141", "Article 143"],
  answer: 3, expl: "Article 143 lets the President refer questions of law or fact of public importance to the SC. Article 136 is special leave to appeal; 141 makes SC law binding." },
{ q: "Which statement about High Courts' writ jurisdiction is correct?",
  options: ["It is narrower than the Supreme Court's Article 32 power", "It covers Fundamental Rights and other legal rights under Article 226", "It cannot be used against private bodies", "It requires Parliament's prior permission"],
  answer: 1, expl: "Article 226 lets High Courts issue writs for Fundamental Rights and 'for any other purpose' — i.e., ordinary legal rights — making it wider in scope than Article 32." }
]
},
{
id: "upsc-polity-federalism",
title: "Federalism & Centre–State Relations",
subject: "Polity",
tag: "Prelims GS I · Mains GS II · High weightage",
blurb: "Why India is called quasi-federal, the three legislative lists, and the four doors through which Parliament can enter the State List.",
intro: "Article 1 describes India as a 'Union of States' — deliberately not a federation of states, because the states have no right to secede and the Union can redraw their boundaries. Constitutional scholar K.C. Wheare called the result 'quasi-federal': federal in form, unitary in spirit, with a distinct tilt towards the Centre. The relationship runs on three tracks — legislative, administrative and financial — and the exam loves testing exactly where each track bends towards New Delhi.",
sections: [
{ h: "Three lists, one tilt",
  body: "<p>The <strong>Seventh Schedule</strong> divides law-making: the <strong>Union List</strong> (now 100 subjects — defence, railways, banking), the <strong>State List</strong> (now 61 — police, public health, agriculture), and the <strong>Concurrent List</strong> (52 — education, forests, marriage), where both can legislate but Union law prevails in a clash (Article 254). Anything unlisted — the <strong>residuary subjects</strong> — goes to Parliament under Article 248. Parliament can also legislate on State subjects through four specific doors: <strong>Article 249</strong> (Rajya Sabha resolution by two-thirds), <strong>Article 250</strong> (during a National Emergency), <strong>Article 252</strong> (two or more states request it), and <strong>Article 253</strong> (to implement international treaties). Administratively, Articles 256–257 oblige states to comply with Union law and not impede Union executive power; financially, the Finance Commission and the GST Council do the heavy lifting.</p>",
  table: { head: ["List", "Subjects (present count)", "Who legislates"],
  rows: [
   ["Union List", "100 — defence, atomic energy, railways, banking, census", "Parliament alone"],
   ["State List", "61 — police, public order, health, agriculture, land", "State legislatures (normally)"],
   ["Concurrent List", "52 — education, forests, electricity, bankruptcy", "Both; Union law prevails on repugnancy (Art 254)"],
   ["Residuary", "Unlisted — e.g., cyber law, space", "Parliament (Art 248)"]
  ] } },
{ h: "The four doors into the State List",
  svg: "<svg class='tl-svg' viewBox='0 0 640 360' role='img' aria-label='Flowchart of Parliament legislating on state subjects'><rect class='tdb2' x='190' y='12' width='260' height='52' rx='10'/><text class='tdc' x='320' y='43' text-anchor='middle'>Parliament wants a State-List law</text><line class='tdl' x1='320' y1='64' x2='320' y2='92'/><rect class='tdb' x='30' y='92' width='270' height='70' rx='10'/><text class='tdt' x='165' y='118' text-anchor='middle'>Art 249</text><text class='tds' x='165' y='140' text-anchor='middle'>Rajya Sabha: 2/3 majority,</text><text class='tds' x='165' y='156' text-anchor='middle'>national interest, 1-year window</text><rect class='tdb' x='340' y='92' width='270' height='70' rx='10'/><text class='tdt' x='475' y='118' text-anchor='middle'>Art 250</text><text class='tds' x='475' y='140' text-anchor='middle'>During National Emergency</text><text class='tds' x='475' y='156' text-anchor='middle'>(Art 352)</text><line class='tdl' x1='165' y1='162' x2='165' y2='192'/><line class='tdl' x1='475' y1='162' x2='475' y2='192'/><rect class='tdb' x='30' y='192' width='270' height='70' rx='10'/><text class='tdt' x='165' y='218' text-anchor='middle'>Art 252</text><text class='tds' x='165' y='240' text-anchor='middle'>Two or more states pass</text><text class='tds' x='165' y='256' text-anchor='middle'>resolutions requesting it</text><rect class='tdb' x='340' y='192' width='270' height='70' rx='10'/><text class='tdt' x='475' y='218' text-anchor='middle'>Art 253</text><text class='tds' x='475' y='240' text-anchor='middle'>To implement international</text><text class='tds' x='475' y='256' text-anchor='middle'>treaties and agreements</text><rect class='tdb' x='150' y='288' width='340' height='44' rx='22'/><text class='tds' x='320' y='315' text-anchor='middle'>Plus: President's Rule (Art 356) — Parliament legislates for the state</text></svg>",
  svgCap: "Four constitutional doors let Parliament legislate on State subjects." },
{ h: "Financial federalism and the new architecture",
  body: "<p>Money is where federalism is truly negotiated. The <strong>Finance Commission (Article 280)</strong>, appointed every five years, recommends how the divisible tax pool is split: the <strong>15th Commission (N.K. Singh)</strong> fixed the states' vertical share at <strong>41%</strong> for 2021–26. The <strong>GST Council (Article 279A)</strong> — created by the 101st Amendment — is India's most genuinely federal institution: the Union Finance Minister chairs, every state gets a vote, and decisions need a three-fourths majority with the Centre holding one-third weight. Around these sit the advisory landmarks: the <strong>Sarkaria Commission (1983)</strong> and the <strong>Punchhi Commission (2010)</strong> on Centre–State relations, and <strong>NITI Aayog (2015)</strong>, which replaced the Planning Commission with a cooperative-federalism forum where chief ministers sit on the Governing Council.</p>" }
],
questions: [
{ q: "Residuary legislative powers — subjects not enumerated in any list — vest in:",
  options: ["The state legislatures", "Parliament under Article 248", "The President", "Both Parliament and state legislatures concurrently"],
  answer: 1, expl: "Article 248 assigns residuary subjects (cyber law, space) to Parliament — a key unitary tilt, unlike the US where residuary powers rest with the states." },
{ q: "Parliament may legislate on a State List subject in the national interest when:",
  options: ["The Lok Sabha passes a simple-majority resolution", "The Rajya Sabha passes a two-thirds resolution under Article 249", "The President issues an ordinance", "The Supreme Court directs it"],
  answer: 1, expl: "Article 249: a Rajya Sabha resolution supported by two-thirds of members present and voting lets Parliament legislate on a State subject for one year (renewable)." },
{ q: "The Finance Commission is constituted under:",
  options: ["Article 270", "Article 275", "Article 280", "Article 282"],
  answer: 2, expl: "Article 280 mandates a Finance Commission every five years (or earlier). The 15th Commission recommended 41% vertical devolution to states for 2021–26." },
{ q: "The GST Council is established under:",
  options: ["Article 263", "Article 269A", "Article 279A", "Article 307"],
  answer: 2, expl: "Article 279A (101st Amendment) creates the GST Council — Union FM as chair, state FMs as members, decisions by three-fourths majority." },
{ q: "Which commission on Centre–State relations submitted its report in 1988?",
  options: ["Punchhi Commission", "Sarkaria Commission", "Rajamannar Committee", "N.K. Singh Committee"],
  answer: 1, expl: "The Sarkaria Commission (1983–88) is the landmark review of Centre–State relations. Punchhi reported in 2010; Rajamannar was a Tamil Nadu state committee (1971)." }
]
},
{
id: "upsc-polity-local",
title: "Local Governance — 73rd & 74th Amendments",
subject: "Polity",
tag: "Prelims GS I · High weightage",
blurb: "Panchayats and municipalities as the third tier: three levels, 29 + 18 subjects, reservations, and why the 3 Fs still decide success.",
intro: "The Constitution originally mentioned village panchayats only as a Directive Principle (Article 40). The 73rd and 74th Amendments (1992) converted that aspiration into a justiciable third tier of government — 'democratic decentralisation' in constitutional form. The 73rd (in force 24 April 1993, celebrated as Panchayati Raj Day) covers rural areas in Part IX; the 74th (in force 1 June 1993) covers urban areas in Part IXA. Together they added nearly 2.5 lakh elected local bodies and over 30 lakh elected representatives, a third of them women by mandate.",
sections: [
{ h: "The three-tier design",
  table: { head: ["Tier", "Rural (73rd)", "Urban (74th)"],
  rows: [
   ["Village / ward level", "Gram Panchayat — sarpanch + ward members", "Nagar Panchayat (transitional areas)"],
   ["Intermediate level", "Panchayat Samiti / Block / Mandal", "Municipal Council (smaller urban areas)"],
   ["District / city level", "Zila Parishad — chairperson + members", "Municipal Corporation (larger urban areas)"],
   ["Subjects devolved", "29 subjects, Eleventh Schedule (Arts 243G)", "18 functions, Twelfth Schedule (Art 243W)"]
  ] } },
{ h: "The rural–urban third tier",
  svg: "<svg class='tl-svg' viewBox='0 0 640 360' role='img' aria-label='Three-tier panchayat and municipal structure'><rect class='tdb2' x='40' y='20' width='250' height='52' rx='10'/><text class='tdc' x='165' y='51' text-anchor='middle'>Rural · 73rd Amdt · Part IX</text><rect class='tdb2' x='350' y='20' width='250' height='52' rx='10'/><text class='tdc' x='475' y='51' text-anchor='middle'>Urban · 74th Amdt · Part IXA</text><line class='tdl' x1='165' y1='72' x2='165' y2='100'/><line class='tdl' x1='475' y1='72' x2='475' y2='100'/><rect class='tdb' x='55' y='100' width='220' height='56' rx='10'/><text class='tdt' x='165' y='124' text-anchor='middle'>Zila Parishad</text><text class='tds' x='165' y='144' text-anchor='middle'>District apex</text><rect class='tdb' x='365' y='100' width='220' height='56' rx='10'/><text class='tdt' x='475' y='124' text-anchor='middle'>Municipal Corporation</text><text class='tds' x='475' y='144' text-anchor='middle'>Large cities</text><line class='tdl' x1='165' y1='156' x2='165' y2='184'/><line class='tdl' x1='475' y1='156' x2='475' y2='184'/><rect class='tdb' x='55' y='184' width='220' height='56' rx='10'/><text class='tdt' x='165' y='208' text-anchor='middle'>Panchayat Samiti</text><text class='tds' x='165' y='228' text-anchor='middle'>Block level</text><rect class='tdb' x='365' y='184' width='220' height='56' rx='10'/><text class='tdt' x='475' y='208' text-anchor='middle'>Municipal Council</text><text class='tds' x='475' y='228' text-anchor='middle'>Smaller towns</text><line class='tdl' x1='165' y1='240' x2='165' y2='268'/><line class='tdl' x1='475' y1='240' x2='475' y2='268'/><rect class='tdb' x='55' y='268' width='220' height='56' rx='10'/><text class='tdt' x='165' y='292' text-anchor='middle'>Gram Panchayat</text><text class='tds' x='165' y='312' text-anchor='middle'>Village · Gram Sabha below it</text><rect class='tdb' x='365' y='268' width='220' height='56' rx='10'/><text class='tdt' x='475' y='292' text-anchor='middle'>Nagar Panchayat</text><text class='tds' x='475' y='312' text-anchor='middle'>Transitional areas</text></svg>",
  svgCap: "Three rural tiers under the 73rd Amendment; three urban grades under the 74th." },
{ h: "The fine print that examiners love",
  body: "<ul><li><strong>Tenure:</strong> five years everywhere; elections must be held before expiry, and a dissolved body gets a fresh term only for the remainder (unless under six months remain).</li><li><strong>Reservations:</strong> seats for SCs/STs in proportion to population, and <strong>one-third for women</strong> (Articles 243D, 243T) — several states have raised this to 50%.</li><li><strong>Referees:</strong> a <strong>State Election Commission (243K/243ZA)</strong> conducts the polls; a <strong>State Finance Commission (243I/243Y)</strong> recommends fund-sharing every five years.</li><li><strong>PESA (1996):</strong> extends panchayat provisions to Scheduled Areas with safeguards for tribal self-governance — Gram Sabhas get real powers over land, forests and minor minerals.</li><li><strong>The 3 Fs test:</strong> devolution is judged by <strong>Functions, Funds and Functionaries</strong> — most states transferred functions on paper but kept the money and staff, which is why 'activity mapping' is a recurring reform demand.</li><li><strong>Roots:</strong> the Balwant Rai Mehta Committee (1957) first recommended the three-tier system; Rajasthan (Nagaur, 1959) implemented it first.</li></ul>" }
],
questions: [
{ q: "The 73rd Constitutional Amendment came into force on:",
  options: ["26 January 1993", "24 April 1993", "15 August 1993", "1 June 1993"],
  answer: 1, expl: "The 73rd Amendment took effect on 24 April 1993 (observed as Panchayati Raj Day). The 74th followed on 1 June 1993." },
{ q: "The Eleventh Schedule, added by the 73rd Amendment, contains:",
  options: ["18 urban functions", "29 subjects for panchayats", "22 official languages", "12 fundamental duties"],
  answer: 1, expl: "The Eleventh Schedule lists 29 subjects (agriculture, health, drinking water, etc.) for devolution to panchayats. The Twelfth Schedule has 18 urban functions." },
{ q: "Reservation of seats for women in panchayats and municipalities is mandated at:",
  options: ["One-fourth of seats", "One-third of seats", "One-half of seats", "Only for the chairperson's post"],
  answer: 1, expl: "Articles 243D and 243T mandate one-third reservation for women (including SC/ST women). Many states have since raised it to 50%." },
{ q: "PESA, 1996, is significant because it:",
  options: ["Created municipal corporations", "Extended panchayat provisions to Scheduled Areas with tribal safeguards", "Introduced the Mayor-in-Council system", "Merged rural and urban local bodies"],
  answer: 1, expl: "The Panchayats (Extension to Scheduled Areas) Act, 1996 adapts Part IX for Fifth Schedule areas, giving Gram Sabhas powers over land alienation, forests and minor minerals." },
{ q: "The committee that first recommended a three-tier Panchayati Raj system was the:",
  options: ["Ashok Mehta Committee", "Balwant Rai Mehta Committee", "L.M. Singhvi Committee", "G.V.K. Rao Committee"],
  answer: 1, expl: "The Balwant Rai Mehta Committee (1957) recommended the Zila Parishad–Panchayat Samiti–Gram Panchayat structure; Ashok Mehta (1977) later suggested a two-tier model." }
]
},
{
id: "upsc-polity-preamble-citizen",
title: "Preamble, Citizenship & the Basic Structure",
subject: "Polity",
tag: "Prelims GS I · Mains GS II · High weightage",
blurb: "Five words that define the republic, who counts as a citizen, and the doctrine that no amendment can touch the Constitution's soul.",
intro: "The Preamble is the Constitution's identity card — in N.A. Palkhivala's phrase, it declares the source of authority ('We, the people'), the nature of the polity, and the goals it must pursue. Citizenship (Part II, Articles 5–11) decides who 'the people' are. And the basic structure doctrine, born in Kesavananda Bharati (1973), draws the one line Parliament's amending power can never cross. These three ideas are routinely clubbed into one question in Prelims and form the opening move of most Mains polity answers.",
sections: [
{ h: "Decoding the Preamble",
  body: "<p>Drafted on the Objectives Resolution moved by Nehru in December 1946, the Preamble promises <strong>Justice</strong> (social, economic, political), <strong>Liberty</strong> (thought, expression, belief, faith, worship), <strong>Equality</strong> (status and opportunity), and <strong>Fraternity</strong> (dignity of the individual, unity and integrity of the nation). The polity it creates is <strong>Sovereign, Socialist, Secular, Democratic, Republic</strong> — the middle three words ('Socialist, Secular') and 'Integrity' being the <strong>42nd Amendment's (1976)</strong> sole addition to the Preamble. Legally, the journey was: <strong>Berubari Union (1960)</strong> — the Preamble is not part of the Constitution → <strong>Kesavananda Bharati (1973)</strong> — it is part → <strong>LIC of India (1995)</strong> — it is an integral part. The Preamble is not justiciable, but it is the lodestar for interpreting ambiguities.</p>",
  table: { head: ["Keyword", "What it commits India to"],
  rows: [
   ["Sovereign", "No external authority; free conduct of foreign policy."],
   ["Socialist", "Democratic socialism — mixed economy, reduction of inequalities (42nd Amendment word)."],
   ["Secular", "Equal respect for all religions; no state religion (42nd Amendment word; basic feature per S.R. Bommai, 1994)."],
   ["Democratic", "Government by the people through universal adult franchise."],
   ["Republic", "Head of state elected, not hereditary — the President."]
  ] } },
{ h: "From Berubari to Bommai",
  svg: "<svg class='tl-svg' viewBox='0 0 640 360' role='img' aria-label='Timeline of Preamble and basic structure cases'><line class='tdl' x1='40' y1='170' x2='600' y2='170'/><polygon points='600,170 588,164 588,176' fill='var(--tl-accent,#f19a59)'/><rect class='tdb' x='50' y='90' width='110' height='64' rx='10'/><text class='tdt' x='105' y='114' text-anchor='middle'>1960</text><text class='tds' x='105' y='134' text-anchor='middle'>Berubari:</text><text class='tds' x='105' y='148' text-anchor='middle'>not part</text><rect class='tdb2' x='185' y='90' width='110' height='64' rx='10'/><text class='tdc' x='240' y='114' text-anchor='middle'>1973</text><text class='tds' x='240' y='134' text-anchor='middle' fill='#fff'>Kesavananda:</text><text class='tds' x='240' y='148' text-anchor='middle' fill='#fff'>part + basic</text><text class='tds' x='240' y='160' text-anchor='middle' fill='#fff'>structure</text><rect class='tdb' x='320' y='90' width='110' height='64' rx='10'/><text class='tdt' x='375' y='114' text-anchor='middle'>1976</text><text class='tds' x='375' y='134' text-anchor='middle'>42nd Amdt:</text><text class='tds' x='375' y='148' text-anchor='middle'>3 words added</text><rect class='tdb' x='455' y='90' width='110' height='64' rx='10'/><text class='tdt' x='510' y='114' text-anchor='middle'>1994</text><text class='tds' x='510' y='134' text-anchor='middle'>S.R. Bommai:</text><text class='tds' x='510' y='148' text-anchor='middle'>secularism is</text><text class='tds' x='510' y='160' text-anchor='middle'>basic feature</text><rect class='tdb' x='90' y='210' width='460' height='110' rx='10'/><text class='tdt' x='320' y='236' text-anchor='middle'>Basic structure — illustrative elements</text><text class='tds' x='320' y='260' text-anchor='middle'>Supremacy of the Constitution · rule of law · judicial review ·</text><text class='tds' x='320' y='282' text-anchor='middle'>separation of powers · federalism · secularism · free &amp; fair elections ·</text><text class='tds' x='320' y='304' text-anchor='middle'>welfare state · unity and integrity of the nation</text></svg>",
  svgCap: "How the Preamble's status — and Parliament's limits — were settled case by case." },
{ h: "Citizenship: who are 'the people'?",
  body: "<p>Part II (Articles 5–11) settled citizenship only at the Constitution's commencement; Article 11 then hands Parliament the power to regulate it — exercised through the <strong>Citizenship Act, 1955</strong>. India has <strong>single citizenship</strong> (no separate state citizenship). The Act recognises five modes of acquisition: <strong>birth, descent, registration, naturalisation, and incorporation of territory</strong> (e.g., Goa, Sikkim). The controversial <strong>Citizenship (Amendment) Act, 2019</strong> fast-tracks citizenship for persecuted Hindu, Sikh, Buddhist, Jain, Parsi and Christian migrants from Afghanistan, Bangladesh and Pakistan who entered India by 31 December 2014. Loss of citizenship happens by renunciation, termination (voluntarily acquiring another country's citizenship), or deprivation by the government. Note the exam favourite: an <strong>alien</strong> (foreigner) enjoys fewer rights — Articles 15, 16, 19, 29 and 30 are citizen-only.</p>" }
],
questions: [
{ q: "The Preamble was amended:",
  options: ["Never — it cannot be amended", "Once, by the 42nd Amendment (1976)", "Twice, in 1976 and 1978", "By the 44th Amendment (1978)"],
  answer: 1, expl: "Only the 42nd Amendment touched the Preamble, adding 'Socialist', 'Secular' and 'Integrity'. The Court has held the Preamble is part of the Constitution and hence amendable within basic-structure limits." },
{ q: "Which case first held that the Preamble is a part of the Constitution?",
  options: ["Berubari Union (1960)", "Kesavananda Bharati (1973)", "Maneka Gandhi (1978)", "S.R. Bommai (1994)"],
  answer: 1, expl: "Berubari (1960) said the Preamble was not part of the Constitution; Kesavananda (1973) overruled that view. S.R. Bommai (1994) later held secularism a basic feature." },
{ q: "Under the Citizenship Act, 1955, citizenship CANNOT be acquired by:",
  options: ["Birth", "Descent", "Registration", "Long-term residence alone"],
  answer: 3, expl: "The Act lists five modes — birth, descent, registration, naturalisation, incorporation of territory. Mere long residence, without meeting a statutory mode, confers nothing." },
{ q: "Which of the following is a citizen-only Fundamental Right?",
  options: ["Article 14 — equality before law", "Article 21 — protection of life and personal liberty", "Article 19 — the six freedoms", "Article 25 — freedom of religion"],
  answer: 2, expl: "Articles 15, 16, 19, 29 and 30 are reserved for citizens; Articles 14, 20, 21, 21A, 22, 23, 24, 25–28 use 'person' and cover everyone." },
{ q: "The basic structure doctrine implies that:",
  options: ["Parliament cannot amend the Constitution at all", "Parliament can amend any part but cannot destroy the Constitution's essential features", "Only the Supreme Court can amend the Constitution", "Fundamental Rights can never be amended"],
  answer: 1, expl: "Kesavananda (1973): the amending power is wide but not unlimited — the Constitution's basic structure (supremacy, rule of law, judicial review, secularism, federalism, etc.) is inviolable." }
]
},

/* ============================ HISTORY ============================ */
{
id: "upsc-history-harappa",
title: "Harappan Civilization",
subject: "History",
tag: "Prelims GS I · High weightage",
blurb: "Town planning, the Great Bath, the undeciphered script, and which site is famous for what — the Bronze Age's best-planned cities.",
intro: "The Harappan (Indus Valley) Civilization — mature phase roughly 2600–1900 BCE — was the largest of the world's Bronze Age urban cultures, spread across present-day Pakistan and western India. It was rediscovered in the 1920s: Daya Ram Sahni excavated Harappa in 1921, R.D. Banerji dug Mohenjo-daro in 1922, and John Marshall announced the discovery to the world in 1924. What makes it an exam staple is its town planning — grid streets, covered drains, the Great Bath — and the signature finds attached to each major site.",
sections: [
{ h: "Anatomy of a Harappan city",
  body: "<p>Harappan cities share a template: a raised <strong>citadel</strong> on the west (public buildings, granaries, the Great Bath) and a larger <strong>lower town</strong> on the east (houses, workshops). Streets run in a grid; houses open onto lanes, not main roads; and almost every house had a bathroom connected to covered street drains — sanitation 4,000 years before modern sewers. The <strong>Great Bath</strong> at Mohenjo-daro (11.88 × 7.01 m, watertight with bitumen) was likely ritual. Standardised <strong>cubical weights</strong> and the <strong>unicorn seal</strong> point to regulated trade reaching Mesopotamia — texts there mention <strong>Meluhha</strong>, widely identified with the Indus region.</p>",
  svg: "<svg class='tl-svg' viewBox='0 0 640 360' role='img' aria-label='Diagram of a Harappan city layout'><rect class='tdb2' x='180' y='14' width='280' height='50' rx='10'/><text class='tdc' x='320' y='45' text-anchor='middle'>A Harappan city (west → east)</text><rect class='tdb' x='40' y='100' width='240' height='120' rx='10'/><text class='tdt' x='160' y='128' text-anchor='middle'>Citadel (raised, west)</text><text class='tds' x='160' y='152' text-anchor='middle'>Great Bath · granary ·</text><text class='tds' x='160' y='170' text-anchor='middle'>assembly hall · priests'</text><text class='tds' x='160' y='188' text-anchor='middle'>houses</text><rect class='tdb' x='360' y='100' width='240' height='120' rx='10'/><text class='tdt' x='480' y='128' text-anchor='middle'>Lower town (east)</text><text class='tds' x='480' y='152' text-anchor='middle'>Grid streets · courtyard</text><text class='tds' x='480' y='170' text-anchor='middle'>houses · workshops ·</text><text class='tds' x='480' y='188' text-anchor='middle'>covered drains</text><line class='tdld' x1='280' y1='160' x2='360' y2='160'/><rect class='tdb' x='120' y='248' width='400' height='84' rx='10'/><text class='tdt' x='320' y='274' text-anchor='middle'>Signature finds</text><text class='tds' x='320' y='298' text-anchor='middle'>Steatite seals (unicorn) · standard weights · bronze 'Dancing Girl' ·</text><text class='tds' x='320' y='318' text-anchor='middle'>bearded 'Priest King' · red-black pottery · no temples or palaces found</text></svg>",
  svgCap: "Citadel for public life, lower town for residents — the Harappan template." },
{ h: "Site-to-fame map",
  table: { head: ["Site (modern location)", "Famous for"],
  rows: [
   ["Mohenjo-daro (Sindh, Pakistan)", "Great Bath, Great Granary, bronze Dancing Girl; excavated by R.D. Banerji, 1922."],
   ["Harappa (Punjab, Pakistan)", "Two rows of granaries, workmen's quarters; excavated by Daya Ram Sahni, 1921."],
   ["Dholavira (Gujarat)", "Elaborate water management, the famous inscribed signboard; excavated by R.S. Bisht."],
   ["Lothal (Gujarat)", "Dockyard, bead-making factory; excavated by S.R. Rao."],
   ["Kalibangan (Rajasthan)", "Ploughed field, fire altars; excavated by B.B. Lal and B.K. Thapar."],
   ["Rakhigarhi (Haryana)", "Largest Harappan site in India."],
   ["Chanhudaro (Sindh, Pakistan)", "Only major city without a citadel; bead and bangle workshops."]
  ] } },
{ h: "Script, religion and decline",
  body: "<p>The Harappan <strong>script remains undeciphered</strong> — short inscriptions on seals, mostly written right to left, with no bilingual key like the Rosetta Stone. Religion is read from artefacts: the 'proto-Shiva' <strong>Pashupati seal</strong>, mother-goddess figurines, fire altars at Kalibangan and Lothal, and ritual bathing. For the decline (from ~1900 BCE), the old 'Aryan invasion' theory has lost favour; current explanations stress <strong>river shifts</strong> (the drying Ghaggar-Hakra/Saraswati system), <strong>climate change</strong> weakening the monsoon, and the breakdown of Mesopotamian trade — a multi-cause collapse, not a single invasion.</p>" }
],
questions: [
{ q: "The excavator of Harappa in 1921 was:",
  options: ["R.D. Banerji", "Daya Ram Sahni", "John Marshall", "S.R. Rao"],
  answer: 1, expl: "Daya Ram Sahni excavated Harappa (1921); R.D. Banerji dug Mohenjo-daro (1922); John Marshall, as Director-General of the ASI, announced the discovery in 1924; S.R. Rao excavated Lothal." },
{ q: "The Great Bath is located at:",
  options: ["Harappa", "Mohenjo-daro", "Dholavira", "Kalibangan"],
  answer: 1, expl: "The watertight Great Bath (about 12 × 7 m) is at Mohenjo-daro's citadel — likely used for ritual bathing. Harappa is known for granaries, Dholavira for water management, Kalibangan for the ploughed field." },
{ q: "Which Harappan site is associated with a dockyard?",
  options: ["Lothal", "Banawali", "Ropar", "Kot Diji"],
  answer: 0, expl: "Lothal (Gujarat), excavated by S.R. Rao, has the famous dockyard and bead factory — evidence of maritime trade with the Persian Gulf and Mesopotamia." },
{ q: "The Harappan script is best described as:",
  options: ["Deciphered and read as early Sanskrit", "Undeciphered, with short seal inscriptions", "Written in the Brahmi script", "Preserved in long palm-leaf manuscripts"],
  answer: 1, expl: "The script is undeciphered — inscriptions are short (mostly on seals), with no bilingual text to crack them. Brahmi belongs to a much later period (Ashokan edicts)." },
{ q: "Which is the largest Harappan site excavated in India?",
  options: ["Dholavira", "Rakhigarhi", "Lothal", "Kalibangan"],
  answer: 1, expl: "Rakhigarhi (Hisar, Haryana) is the largest Harappan site in India. Dholavira is notable for water management, Lothal for the dockyard, Kalibangan for the ploughed field." }
]
},
{
id: "upsc-history-maurya",
title: "Mauryan Empire & Ashoka",
subject: "History",
tag: "Prelims GS I · Mains GS I · Very high weightage",
blurb: "From Chandragupta's Arthashastra state to Ashoka's Dhamma edicts — the first empire to unite most of the subcontinent.",
intro: "The Mauryan Empire (321–185 BCE) was India's first large-scale empire, stretching from Afghanistan to Bengal and south to Karnataka. Chandragupta Maurya, guided by Chanakya (Kautilya), author of the Arthashastra, overthrew the Nandas; his grandson Ashoka (reigned c. 268–232 BCE) turned a war of conquest — Kalinga, 261 BCE — into history's most famous change of heart, and broadcast his moral code, Dhamma, on rocks and pillars across the empire.",
sections: [
{ h: "The Arthashastra state",
  body: "<p>Kautilya's <strong>Arthashastra</strong> is the Mauryan theory of statecraft: the <strong>saptanga</strong> (seven limbs) — king, ministers (amatya), territory and people (janapada), fort (durga), treasury (kosha), army (danda), and ally (mitra). The empire was divided into provinces governed by <strong>kumaras</strong> (royal princes) at centres like Taxila, Ujjain, Tosali and Suvarnagiri; Megasthenes, Seleucus's ambassador at Chandragupta's court, described Pataliputra's administration in his <strong>Indica</strong>. Revenue came chiefly from land (the king's share, bhaga, was one-sixth of produce), and the state ran mines, forests and mints. This centralised bureaucracy — spies, census-like records, price controls — is why the Mauryas are called India's first imperial administration.</p>",
  table: { head: ["Ruler", "Reign (approx.)", "Known for"],
  rows: [
   ["Chandragupta Maurya", "321–298 BCE", "Founded the empire with Chanakya; treaty with Seleucus (~303 BCE); embraced Jainism late in life (tradition)."],
   ["Bindusara", "298–273 BCE", "Called 'Amitraghata' (slayer of foes); maintained the empire; father of Ashoka."],
   ["Ashoka", "268–232 BCE", "Kalinga war (261 BCE); Dhamma policy; rock and pillar edicts; Third Buddhist Council."],
   ["Brihadratha", "—185 BCE", "Last Mauryan; assassinated by his commander Pushyamitra Shunga, founding the Shunga dynasty."]
  ] } },
{ h: "Ashoka's reign in one timeline",
  svg: "<svg class='tl-svg' viewBox='0 0 640 360' role='img' aria-label='Timeline of the Mauryan Empire and Ashoka'><line class='tdl' x1='40' y1='150' x2='600' y2='150'/><polygon points='600,150 588,144 588,156' fill='var(--tl-accent,#f19a59)'/><rect class='tdb' x='45' y='70' width='100' height='64' rx='10'/><text class='tdt' x='95' y='94' text-anchor='middle'>321 BCE</text><text class='tds' x='95' y='114' text-anchor='middle'>Chandra-</text><text class='tds' x='95' y='128' text-anchor='middle'>gupta founds</text><rect class='tdb' x='165' y='70' width='100' height='64' rx='10'/><text class='tdt' x='215' y='94' text-anchor='middle'>298 BCE</text><text class='tds' x='215' y='114' text-anchor='middle'>Bindusara</text><text class='tds' x='215' y='128' text-anchor='middle'>succeeds</text><rect class='tdb2' x='285' y='70' width='100' height='64' rx='10'/><text class='tdc' x='335' y='94' text-anchor='middle'>261 BCE</text><text class='tds' x='335' y='114' text-anchor='middle' fill='#fff'>Kalinga war</text><text class='tds' x='335' y='128' text-anchor='middle' fill='#fff'>→ Dhamma</text><rect class='tdb' x='405' y='70' width='100' height='64' rx='10'/><text class='tdt' x='455' y='94' text-anchor='middle'>~250 BCE</text><text class='tds' x='455' y='114' text-anchor='middle'>3rd Buddhist</text><text class='tds' x='455' y='128' text-anchor='middle'>Council</text><rect class='tdb' x='520' y='70' width='80' height='64' rx='10'/><text class='tdt' x='560' y='94' text-anchor='middle'>185</text><text class='tds' x='560' y='114' text-anchor='middle'>BCE</text><text class='tds' x='560' y='128' text-anchor='middle'>Shunga</text><rect class='tdb' x='80' y='196' width='480' height='120' rx='10'/><text class='tdt' x='320' y='222' text-anchor='middle'>The edicts: Ashoka in his own words</text><text class='tds' x='320' y='246' text-anchor='middle'>14 Major Rock Edicts · 7 Pillar Edicts · Minor Rock &amp; Pillar Edicts</text><text class='tds' x='320' y='268' text-anchor='middle'>Prakrit in Brahmi script (Kharosthi in NW; Greek &amp; Aramaic at Kandahar)</text><text class='tds' x='320' y='290' text-anchor='middle'>Deciphered by James Prinsep, 1837 · Maski edict names him 'Ashoka'</text></svg>",
  svgCap: "Kalinga is the hinge: conquest before it, Dhamma after it." },
{ h: "Dhamma: what Ashoka actually preached",
  body: "<p>Dhamma was not Buddhism as a sect — it was a <strong>moral code for a plural empire</strong>: respect parents and elders, kindness to servants and animals, tolerance of all sects, truthfulness, and restraint in spending. Ashoka appointed <strong>dhamma-mahamattas</strong> (officers of righteousness) to propagate it, banned animal slaughter on certain days, and sent missions abroad — to Sri Lanka (his son Mahinda and daughter Sanghamitta, per tradition), and to Greek kings named in the edicts (Antiochus, Ptolemy, Antigonus). The <strong>Third Buddhist Council</strong> (~250 BCE) at Pataliputra, presided over by <strong>Moggaliputta Tissa</strong>, was convened under his patronage. The Lion Capital of his Sarnath pillar is now India's national emblem — the most visible Mauryan survival of all.</p>" }
],
questions: [
{ q: "The Arthashastra is attributed to:",
  options: ["Megasthenes", "Kautilya (Chanakya)", "Bhadrabahu", "Vishakhadatta"],
  answer: 1, expl: "Kautilya, Chandragupta's minister, authored the Arthashastra on statecraft. Megasthenes wrote the Indica; Vishakhadatta wrote the play Mudrarakshasa (about Chandragupta's rise)." },
{ q: "The Kalinga war, after which Ashoka embraced Dhamma, was fought in:",
  options: ["273 BCE", "261 BCE", "250 BCE", "232 BCE"],
  answer: 1, expl: "The Kalinga war (261 BCE, Ashoka's 8th regnal year) caused the remorse recorded in Major Rock Edict XIII — the turning point of his reign." },
{ q: "Ashokan edicts were first deciphered by:",
  options: ["John Marshall", "Alexander Cunningham", "James Prinsep", "R.D. Banerji"],
  answer: 2, expl: "James Prinsep deciphered the Brahmi script in 1837, unlocking the edicts. The Maski minor rock edict is the one that names the author as 'Ashoka' (most edicts call him Devanampiya Piyadasi)." },
{ q: "The Third Buddhist Council was held during Ashoka's reign at:",
  options: ["Sarnath", "Pataliputra", "Vaishali", "Rajgir"],
  answer: 1, expl: "The Third Council (~250 BCE) met at Pataliputra under Moggaliputta Tissa's presidency, with Ashoka's patronage. First: Rajgir; Second: Vaishali; Fourth: Kashmir/Kundalvana (Kanishka)." },
{ q: "The last Mauryan ruler, assassinated by Pushyamitra Shunga, was:",
  options: ["Bindusara", "Dasharatha", "Brihadratha", "Samprati"],
  answer: 2, expl: "Brihadratha (c. 185 BCE) was killed by his commander-in-chief Pushyamitra Shunga, who founded the Shunga dynasty." }
]
},
{
id: "upsc-history-mughal",
title: "Mughal Administration",
subject: "History",
tag: "Prelims GS I · Mains GS I · High weightage",
blurb: "Mansabdari ranks, the zabt revenue system, and the officer corps that ran an empire from Kabul to the Deccan.",
intro: "The Mughal Empire (1526–1857, effectively to 1707) built India's most elaborate pre-modern administration, and Akbar (1556–1605) was its architect. Working with his finance minister Raja Todar Mal, Akbar created two interlocking machines: the mansabdari system for ranking and paying officers, and the zabt system for assessing land revenue. Together with a graded imperial officer corps, they let a small elite govern a vast agrarian empire.",
sections: [
{ h: "Mansabdari: rank is everything",
  body: "<p>Every imperial officer held a <strong>mansab</strong> (rank) expressed as two numbers: <strong>zat</strong> (personal status, fixing salary) and <strong>sawar</strong> (the cavalry contingent he had to maintain). A mansabdar was paid not in cash but usually by a <strong>jagir</strong> — the right to collect revenue from a territory (crown lands kept directly were <strong>khalisa</strong>). To stop fraud, Akbar introduced <strong>dagh</strong> (branding of horses) and <strong>chehra</strong> (descriptive rolls of soldiers). Jagirs were transferable, so no officer put down local roots — a deliberate check on rebellion. The system later strained under Aurangzeb as the number of mansabdars outgrew available jagirs (the famous 'jagir crisis').</p>",
  table: { head: ["Term", "Meaning"],
  rows: [
   ["Zat", "Personal rank of the mansabdar; determined salary and status."],
   ["Sawar", "Number of horsemen the mansabdar had to maintain."],
   ["Jagir", "Revenue assignment given in lieu of cash salary; transferable."],
   ["Khalisa", "Crown lands whose revenue went directly to the imperial treasury."],
   ["Dagh and chehra", "Branding of horses and descriptive rolls of troopers — anti-fraud checks."]
  ] } },
{ h: "Chain of command",
  svg: "<svg class='tl-svg' viewBox='0 0 640 360' role='img' aria-label='Mughal administrative hierarchy'><rect class='tdb2' x='230' y='12' width='180' height='52' rx='10'/><text class='tdc' x='320' y='43' text-anchor='middle'>The Emperor</text><line class='tdl' x1='320' y1='64' x2='320' y2='92'/><rect class='tdb' x='60' y='92' width='560' height='58' rx='10'/><text class='tdt' x='340' y='114' text-anchor='middle'>Central ministers</text><text class='tds' x='340' y='136' text-anchor='middle'>Wazir/Diwan (revenue) · Mir Bakshi (military pay) · Mir Saman (household) · Sadr-us-Sudur (religion/charity)</text><line class='tdl' x1='320' y1='150' x2='320' y2='178'/><rect class='tdb' x='190' y='178' width='260' height='52' rx='10'/><text class='tdt' x='320' y='200' text-anchor='middle'>Subadar (provincial governor)</text><text class='tds' x='320' y='220' text-anchor='middle'>Head of the suba (province)</text><line class='tdl' x1='320' y1='230' x2='200' y2='262'/><line class='tdl' x1='320' y1='230' x2='440' y2='262'/><rect class='tdb' x='80' y='262' width='240' height='52' rx='10'/><text class='tdt' x='200' y='284' text-anchor='middle'>Faujdar</text><text class='tds' x='200' y='304' text-anchor='middle'>Law &amp; order (sarkar/district)</text><rect class='tdb' x='320' y='262' width='240' height='52' rx='10'/><text class='tdt' x='440' y='284' text-anchor='middle'>Amilguzar</text><text class='tds' x='440' y='304' text-anchor='middle'>Revenue collection</text></svg>",
  svgCap: "From emperor to village: the Mughal chain of command." },
{ h: "Land revenue and Akbar's religious policy",
  body: "<p>The <strong>zabt</strong> (or dahsala) system, introduced around 1580, assessed land revenue on the <strong>average produce and prices of the previous ten years</strong>, with land classified by fertility and the state's share fixed at roughly one-third. Abu'l Fazl's <strong>Ain-i-Akbari</strong> (part of the Akbarnama) documents the whole apparatus — court, army, revenues, provinces. In religion, Akbar pursued <strong>sulh-i-kul</strong> (universal peace): he abolished the jizya (1564) and pilgrim tax, built the <strong>Ibadat Khana</strong> (1575) at Fatehpur Sikri for inter-faith debate, and in 1582 propounded the <strong>Din-i-Ilahi</strong>, a syncretic court order rather than a mass religion. (Aurangzeb later reimposed jizya in 1679 — a favourite contrast question.)</p>" }
],
questions: [
{ q: "In the mansabdari system, 'zat' and 'sawar' denoted respectively:",
  options: ["Cavalry and infantry contingents", "Personal rank/status and the cavalry to be maintained", "Land revenue and military pay", "Court rank and religious status"],
  answer: 1, expl: "Zat fixed the mansabdar's personal status and salary; sawar fixed the horsemen he maintained. Both were expressed as numbers (e.g., 5000 zat / 5000 sawar)." },
{ q: "The zabt/dahsala land revenue system is associated with:",
  options: ["Sher Shah Suri", "Akbar, implemented by Raja Todar Mal", "Shah Jahan", "Aurangzeb"],
  answer: 1, expl: "Todar Mal's dahsala (1580) averaged ten years' produce and prices to fix assessments — building on Sher Shah's earlier zabt experiments, but systematised under Akbar." },
{ q: "The Ain-i-Akbari was authored by:",
  options: ["Abul Fazl", "Badauni", "Nizamuddin Ahmad", "Faizi"],
  answer: 0, expl: "Abul Fazl's Ain-i-Akbari (third volume of the Akbarnama) is the great gazetteer of Akbar's empire — administration, revenues, army, and court life." },
{ q: "The Din-i-Ilahi was propounded by Akbar in:",
  options: ["1564", "1575", "1582", "1601"],
  answer: 2, expl: "Din-i-Ilahi (1582) was Akbar's syncretic order blending elements of Islam, Hinduism, Zoroastrianism and others — joined by a handful of courtiers, never a popular movement." },
{ q: "Which Mughal officer was in charge of military pay and recruitment?",
  options: ["Mir Saman", "Mir Bakshi", "Sadr-us-Sudur", "Diwan-i-Arz"],
  answer: 1, expl: "The Mir Bakshi headed military administration — pay, recruitment and the dagh/chehra checks. Mir Saman managed the imperial household; Sadr-us-Sudur handled religious grants." }
]
},
