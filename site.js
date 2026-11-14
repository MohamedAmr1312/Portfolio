/* Mohamed Amr — portfolio site. Hash routes: #home · #work · #project-<slug> · #about · #contact */
(() => {
  const S = window.SITE, P = S.projects, m = S.site;
  const $ = (q, r = document) => r.querySelector(q), $$ = (q, r = document) => [...r.querySelectorAll(q)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const bySlug = s => P.find(p => p.slug === s);
  const svcTitle = s => (S.services.find(x => x.slug === s) || {}).title || s;
  const ext = u => /^https?:/.test(u) ? ' target="_blank" rel="noopener noreferrer"' : '';
  const AR = '<span class="ar" aria-hidden="true">↗</span>';
  const img = (o, cls = '', lazy = true) => `<img src="${esc(o.src)}" alt="${esc(o.alt)}" width="${o.width}" height="${o.height}" ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async" class="${cls}">`;
  const sheet = p => 'MA-' + pad(P.indexOf(p) + 1);

  // Logo: a hex nut (bolt head) with an "MA" monogram drawn in strokes
  const logo = (title = 'Mohamed Amr') => `<svg viewBox="0 0 64 64" role="img" aria-label="${esc(title)}"><polygon points="61,32 46.5,57.1 17.5,57.1 3,32 17.5,6.9 46.5,6.9" fill="#14171b" stroke="#f5a524" stroke-width="2.4" stroke-linejoin="round"/><circle cx="32" cy="32" r="21" fill="none" stroke="#f5a52455" stroke-width="1"/><polyline points="14.5,41 14.5,23 22.5,34 30.5,23 30.5,41" fill="none" stroke="#e8ecf1" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/><polyline points="34,41 41.5,23 49,41" fill="none" stroke="#f5a524" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/><line x1="37" y1="35" x2="46" y2="35" stroke="#f5a524" stroke-width="3" stroke-linecap="round"/></svg>`;

  const NAV = [['#home', 'Index', 'home'], ['#work', 'Work', 'work'], ['#about', 'About', 'about'], ['#contact', 'Contact', 'contact']];

  // ---------- cards ----------
  const card = (p, size = '') => `
    <a class="pc ${size} reveal" href="#project-${p.slug}">
      <div class="im">${img(p.cover)}<span class="sheetno">${sheet(p)}</span>${p.model ? '<span class="b3d">3D</span>' : ''}</div>
      <div class="body">
        <span class="tg">${esc(p.category)} · ${esc(p.year)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.subtitle)}</p>
        <div class="meta"><span class="kv"><b>${esc(p.metrics[0].value)}</b>${esc(p.metrics[0].label)}</span></div>
      </div>
    </a>`;
  const secH = (n, t, aside = '') => `<div class="sec-h"><span class="n">${n}</span><h2>${t}</h2>${aside ? `<span class="aside">${aside}</span>` : ''}</div>`;

  // ---------- pages ----------
  function home() {
    const ind = P.filter(p => p.featured), per = P.filter(p => !p.featured);
    const lay = ['wide', '', '', 'wide', 'half', 'half'];
    const nums = [['2 t', 'Lifting capacity of the mobile jib crane, over an 8.5 m span', 'jib-crane'], ['300 m', 'Water depth the stepper-motor pod is sealed for', 'sealing-pod'], ['2', 'Encoder fixture versions designed, stress-checked and fabricated', 'encoder-fixture'], ['1,325', 'Parts in the motorized roller conveyor assembly', 'roller-conveyor']];
    const steps = [['Understand', 'Loads, environment, envelope and how it will be made — written down before anything is modelled.'], ['Design', 'Concept first, then a full SOLIDWORKS assembly with standard parts, sheet metal and weldments.'], ['Validate', 'Engineering calculations and FEA on every load-bearing part, before anything is cut.'], ['Deliver', 'Drawings with GD&T, BOM, STEP files, renders and a 3D model anyone can open in a browser.']];
    const tick = ['Mechanical design', 'SOLIDWORKS · CSWP', 'FEA & stress analysis', 'Subsea equipment', 'Lifting equipment', 'GD&T drawings', 'Sheet metal & weldments', 'Mechatronics'];
    return `
    <section class="hero">
      <div class="hero-top"><span class="status tag"><span class="dot"></span>${esc(m.availability)}</span><span class="tg">${esc(m.location)} · <span data-clock>--:--</span></span></div>
      <div class="hero-mid">
        <div class="hero-copy">
          <span class="tg">Portfolio · Mechanical design engineer</span>
          <h1>Mohamed<br><span class="o">Amr</span><span class="amber">.</span></h1>
          <div class="role">// Mechanical Design Engineer — Innovation @ MCS Group</div>
          <p class="lead">I design equipment that gets built and works under load: subsea fixtures, lifting frames, sealed housings and machines — from concept and FEA to drawings the workshop can fabricate from.</p>
          <div class="ctas"><a class="btn solid" href="#work">View the work ${AR}</a><a class="btn" href="#contact">Start a project ${AR}</a><a class="btn" href="${esc(m.resumeUrl)}" target="_blank" rel="noopener">Résumé PDF ${AR}</a></div>
        </div>
        <div class="hero-stage">
          <div class="cross" aria-hidden="true"></div>
          <span class="dim" style="left:24px;top:22px">VIEW A · ISOMETRIC</span><span class="dim" style="right:24px;top:22px">SCALE 1:5</span>
          <img src="media-about-hero-showcase.webp" alt="Selected projects together: warehouse robot, lifting frame, XY gantry, 3D scanner, sonar fixture, sealing pod, encoder fixture and spherical bearing" width="1400" height="825" fetchpriority="high" style="inset:8% 1% 9%;width:98%;height:83%">
          <div class="cap"><span class="tg">Selected projects · MCS Group &amp; personal</span><a href="#work">See all projects →</a></div>
        </div>
      </div>
      <div class="tblock">
        <div><span class="tg">Role</span><b>Mechanical Design Engineer</b></div>
        <div><span class="tg">Company</span><b>MCS Group · subsea</b></div>
        <div><span class="tg">Certified</span><b>CSWP · CSWP-SM</b></div>
        <div><span class="tg">Education</span><b>B.Sc. Mechatronics · 2nd</b></div>
        <div><span class="tg">Projects</span><b>${P.length} · all in 3D</b></div>
      </div>
    </section>
    <div class="ticker" aria-hidden="true"><div class="t">${[...tick, ...tick].map(t => `<span>${esc(t)}</span>`).join('')}</div></div>

    <section class="sec"><div class="wrap">
      ${secH('01', 'Industry work — MCS Group', `<a class="btn" href="#work">Drawing register ${AR}</a>`)}
      <div class="grid-work">${ind.map((p, i) => card(p, lay[i % lay.length])).join('')}</div>
    </div></section>

    <section class="sec"><div class="wrap">
      ${secH('02', 'By the numbers')}
      <div class="nums reveal">${nums.map(([v, t, s]) => `<a href="#project-${s}"><div class="v">${v}</div><p>${t}</p></a>`).join('')}</div>
    </div></section>

    <section class="sec"><div class="wrap">
      ${secH('03', 'What I can do for you', '<span class="tg">Click a service for the deliverables</span>')}
      <div class="svc reveal">${S.services.map(s => `<details><summary><span class="i">${s.index} /</span><h3>${esc(s.title)}</h3><p>${esc(s.short)}</p><span class="more">Deliverables +</span></summary><ul>${s.deliverables.map(d => `<li>${esc(d)}</li>`).join('')}</ul></details>`).join('')}</div>
    </div></section>

    <section class="sec"><div class="wrap">
      ${secH('04', 'How I work')}
      <div class="steps reveal">${steps.map(([h, t]) => `<div><h3>${h}</h3><p>${t}</p></div>`).join('')}</div>
    </div></section>

    <section class="sec"><div class="wrap">
      ${secH('05', 'Personal & academic projects')}
      <div class="grid-work">${per.map(p => card(p)).join('')}</div>
    </div></section>`;
  }

  function work(filter = 'all') {
    const F = [['all', 'All'], ['industrial', 'Industry · MCS Group'], ['personal', 'Personal & academic']];
    const list = P.filter(p => filter === 'all' || p.filters.includes(filter));
    return `
    <section class="wrap" style="padding:80px 40px 110px">
      <span class="crumb">INDEX / WORK</span>
      <div class="sec-h" style="margin-top:18px"><h2 style="font-size:clamp(52px,8vw,120px)">Drawing register</h2><span class="aside tag">${P.length} projects · ${P.filter(p => p.model).length} interactive 3D models</span></div>
      <div class="filters" role="group" aria-label="Filter projects">${F.map(([k, l]) => `<button type="button" data-f="${k}" aria-pressed="${k === filter}">${l}</button>`).join('')}</div>
      <table class="reg"><thead><tr><th>Sheet</th><th></th><th>Title</th><th class="c">Category</th><th class="y">Year</th><th></th></tr></thead>
      <tbody>${list.map(p => `<tr class="row" data-go="#project-${p.slug}"><td class="no">${sheet(p)}</td><td class="th">${img(p.cover)}</td><td class="t"><a href="#project-${p.slug}">${esc(p.title)}</a><div style="font-weight:400;font-size:14px;color:var(--ink2);margin-top:4px">${esc(p.subtitle)}</div></td><td class="c">${esc(p.category)}</td><td class="y">${esc(p.year)}</td><td>${p.model ? '<span class="pill">3D</span>' : ''}</td></tr>`).join('')}</tbody></table>
    </section>`;
  }

  function project(slug) {
    const p = bySlug(slug); if (!p) return notFound();
    const i = P.indexOf(p), nx = P[(i + 1) % P.length];
    let n = 0; const N = () => pad(++n);
    return `
    <article>
      <header class="p-head">
        <div class="l"><span class="crumb"><a href="#work">WORK</a> / ${sheet(p)}</span>
          <h1>${esc(p.title)}</h1><p class="sub">${esc(p.subtitle)}</p></div>
        <dl>${[['Sheet', sheet(p)], ['Context', p.context], ['Year', p.year], ['Role', p.role], ['Disciplines', p.services.map(svcTitle).join(' · ')], ['Tools', p.tools.join(' · ')]].map(([k, v]) => `<div><dt class="tg">${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
      </header>
      <div class="p-cover">${img(p.cover, '', false)}</div>
      <div class="wrap">
        <section class="p-sum"><p>${esc(p.summary)}</p>
          <div class="mets">${p.metrics.map(x => `<div><b>${esc(x.value)}</b><span>${esc(x.label)}</span></div>`).join('')}</div></section>
      </div>
      ${p.model ? `<section class="viewer-sec"><div class="wrap">
        ${secH(N(), 'Interactive 3D model', `<span class="tg">${esc(p.model.label)}</span>`)}
        <p style="color:var(--ink2);margin:-26px 0 26px;max-width:760px">Orbit, pick any part from the list, explode the assembly or switch to orthographic views. ${esc(p.model.note || '')}</p>
        <div class="viewer-box" data-viewer="${p.slug}">${img(p.cover)}<button type="button" class="btn solid load" data-load>Load 3D model · ${esc(p.model.size)}</button></div>
      </div></section>` : ''}
      <div class="wrap">
        <section class="sec" style="border-top:0"><div class="two">
          <div class="reveal">${secH(N(), 'The brief')}<ol class="list">${p.challenge.map(c => `<li data-p="Q">${esc(c)}</li>`).join('')}</ol></div>
          <div class="reveal">${secH(N(), 'Approach')}<ol class="list">${p.approach.map(c => `<li data-p="">${esc(c)}</li>`).join('')}</ol></div>
        </div></section>
        <section class="sec">${secH(N(), 'Design decisions')}
          <div class="dec reveal">${p.decisions.map((d, k) => `<div class="d"><div><span class="tg amber">D-${pad(k + 1)}</span><h4>${esc(d.title)}</h4></div><div><span class="tg">Context</span><p>${esc(d.context)}</p></div><div><span class="tg">Decision</span><p style="color:var(--ink)">${esc(d.decision)}</p></div><div><span class="tg">Rationale</span><p>${esc(d.rationale)}</p></div></div>`).join('')}</div>
        </section>
        <section class="sec">${secH(N(), 'Specification')}
          <table class="spec reveal">${p.specs.map(s => `<tr><td>${esc(s.label)}</td><td>${esc(s.value)}</td></tr>`).join('')}</table>
        </section>
        ${p.gallery.length ? `<section class="sec">${secH(N(), 'Renders, photos & drawings', `<span class="tg">${p.gallery.length} images · click to enlarge</span>`)}
          <div class="gal">${p.gallery.map((g, k) => `<button type="button" data-lb="${k}">${img(g)}<span class="gc"><span>${esc(g.caption || g.alt)}</span><span class="tg">${esc(g.kind)}</span></span></button>`).join('')}</div>
        </section>` : ''}
        <div class="next" style="border-top:1px solid var(--line)"><div><span class="tg">Next sheet · ${sheet(nx)}</span><br><a class="big" href="#project-${nx.slug}">${esc(nx.title)} →</a></div><a class="btn solid" href="#contact" data-ref="${esc(p.title)}">Start a similar project ${AR}</a></div>
      </div>
    </article>`;
  }

  function about() {
    const T = S.timeline.slice().reverse();
    const pr = [['Make it buildable', 'Fixtures, frames and brackets are designed for the shop that will make them: standard stock, standard fasteners, flat patterns and weld symbols on the drawing.'], ['Check it before it’s cut', 'Calculations and FEA on every load-bearing part — the crane, the lifting frames and both encoder fixtures were checked before fabrication.'], ['Design for the environment', 'Underwater means stainless steel, O-rings and pressure-rated walls; the sealing pod is sized for 300 m of water.'], ['Leave a clear trail', 'Drawings with GD&T, a BOM and a 3D model anyone can open in a browser — so the next engineer understands the design.']];
    return `
    <div class="wrap">
      <section class="ab-head">
        <div><span class="crumb">INDEX / ABOUT</span>
          <h1>Mohamed<br><span class="amber">Amr</span></h1>
          <span class="tg amber" style="display:block;margin-top:26px">Professional summary</span>
          <p class="lead" style="margin-top:10px">Mechatronics Engineer – Mechanical Design Engineer and Certified SOLIDWORKS Professional (CSWP).</p>
          <p>Expertise in mechanical design, SolidWorks, ANSYS, stress analysis, and modeling &amp; simulation. Experienced in designing and validating subsea equipment, lifting equipment and fixtures through simulation-driven approaches, from concept to fabrication drawings.</p>
          <p>Solid foundation in control and embedded systems, enabling collaboration across multidisciplinary teams. Seeking opportunities in mechanical design, simulation, or product development.</p>
          <div class="ctas" style="display:flex;gap:12px;flex-wrap:wrap;margin-top:28px"><a class="btn solid" href="${esc(m.resumeUrl)}" target="_blank" rel="noopener">Résumé PDF ${AR}</a><a class="btn" href="${esc(m.contact.linkedin)}"${ext(m.contact.linkedin)}>LinkedIn ${AR}</a><a class="btn" href="${esc(m.gradBookUrl)}"${ext(m.gradBookUrl)}>Graduation project book ${AR}</a></div>
        </div>
        <figure class="ab-fig corner" style="margin:0"><img src="media-warehouse-robot-built.webp" alt="The autonomous warehouse robot from the graduation project, as built"><figcaption>FIG. 01 — GRADUATION PROJECT, AS BUILT</figcaption></figure>
      </section>
      <section class="sec">${secH('01', 'Revision history', '<span class="tg">Newest first</span>')}
        <table class="rev reveal"><thead><tr><th>Rev</th><th>Period</th><th>Description</th></tr></thead><tbody>
        ${T.map((t, k) => `<tr class="${t.current ? 'cur' : ''}"><td class="r"><span>${String.fromCharCode(70 - k)}</span></td><td class="p">${esc(t.period)}<br><span class="tg">${esc(t.kind)}${t.current ? ' · current' : ''}</span></td><td><h4>${esc(t.title)}</h4><div class="org">${esc(t.org)}</div><ul>${t.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>${t.link ? `<a class="tg amber" href="#${t.link}">Open project →</a>` : ''}</td></tr>`).join('')}
        </tbody></table></section>
      <section class="sec">${secH('02', 'Certifications', `<span class="tg">${S.certifications.length} certificates · click to enlarge</span>`)}
        <div class="certs reveal">${S.certifications.map((c, k) => `<div class="cert">
          <button type="button" class="cimg" data-clb="${k}" aria-label="Enlarge certificate: ${esc(c.name)}"><img src="${esc(c.image)}" alt="${esc(c.name)} certificate" loading="lazy"><span class="zoom">Click to enlarge</span></button>
          <div class="cb">${c.badge ? `<img class="badge" src="${esc(c.badge)}" alt="" loading="lazy">` : ''}<div><b>${esc(c.code)}</b><span class="nm">${esc(c.name)}</span></div></div>
          <span class="tg">${esc(c.issuer)} · ${esc(c.date)}</span>
          ${c.id ? `<span class="tg">ID ${esc(c.id)}</span>` : ''}
          ${c.verify ? `<a href="${esc(c.verify)}"${ext(c.verify)}>Verify credential ↗</a>` : ''}</div>`).join('')}</div>
        <div class="two" style="margin-top:56px">
          <div class="reveal"><span class="tg">Courses</span><table class="bom" style="margin-top:12px"><thead><tr><th>Item</th><th>Course</th><th>Provider</th></tr></thead><tbody>${S.courses.map((c, k) => `<tr><td>${pad(k + 1)}</td><td>${esc(c[0])}</td><td>${esc(c[1])}${c[2] ? ' · ' + esc(c[2]) : ''}</td></tr>`).join('')}</tbody></table></div>
          <div class="reveal"><span class="tg">Skills — bill of materials</span><table class="bom" style="margin-top:12px"><thead><tr><th>Item</th><th>Group</th><th>Parts</th></tr></thead><tbody>${S.skills.map((c, k) => `<tr><td>${pad(k + 1)}</td><td>${esc(c[0])}</td><td>${esc(c[1])}</td></tr>`).join('')}</tbody></table></div>
        </div></section>
      <section class="sec">${secH('03', 'Design principles')}
        <div class="princ reveal">${pr.map(([h, t], k) => `<div><span class="tg amber">P-${pad(k + 1)}</span><h3>${h}</h3><p>${t}</p></div>`).join('')}</div></section>
      <section class="sec"><div class="two" style="align-items:center">
        <div>${secH('04', 'From CAD to steel')}<p style="font-size:19px;color:var(--ink2);margin:0">The lifting and extension frames went from 3D model and FEA to drawings — and then to the fabrication shop. Following a design into steel is how the next one gets better.</p></div>
        <figure class="ab-fig corner reveal" style="margin:0"><img src="media-lifting-frames-fabricated.webp" alt="Lifting and extension frames, fabricated" style="aspect-ratio:1140/720"><figcaption>FIG. 02 — LIFTING &amp; EXTENSION FRAMES, AS FABRICATED</figcaption></figure>
      </div></section>
    </div>`;
  }

  function contact(ref = '') {
    const c = m.contact;
    const ch = [['E-mail', 'mailto:' + c.email, c.email], ['Phone', 'tel:' + c.phone.replace(/\s/g, ''), c.phone], ['LinkedIn', c.linkedin, 'mohamedamr1312'], ['GrabCAD', c.grabcad, 'CAD models'], ['Upwork', c.upwork, 'Hire me on Upwork']];
    return `
    <div class="wrap"><section class="ct">
      <div><span class="crumb">INDEX / CONTACT</span><h1>Let’s build<br><span class="amber">it.</span></h1>
        <p style="font-size:19px;color:var(--ink2);max-width:520px">Tell me what you’re building — a fixture, a frame, a machine or a part that needs drawings. The more concrete the loads and constraints, the better my first reply.</p>
        <div class="chan" style="margin-top:34px">${ch.map(([k, h, v]) => `<a href="${esc(h)}"${ext(h)}><span class="k">${k}</span><span class="v">${esc(v)}</span><span aria-hidden="true">↗</span></a>`).join('')}</div>
        <p class="tg" style="margin-top:18px">${esc(m.availability)}</p></div>
      <form class="msg" novalidate>
        <span class="tg amber">Project inquiry</span>
        <label>Your name<input name="name" required autocomplete="name"></label>
        <label>Your e-mail<input name="email" type="email" required autocomplete="email"></label>
        <label>Service<select name="service"><option value="">Not sure yet</option>${S.services.map(s => `<option>${esc(s.title)}</option>`).join('')}</select></label>
        <label>The project — loads, size, material, quantity, deadline<textarea name="msg" required>${ref ? esc(`I'd like something similar to “${ref}”.\n\n`) : ''}</textarea></label>
        <button class="btn solid" type="submit" style="justify-content:center">Prepare my message ${AR}</button>
        <div class="out" role="status"></div>
      </form>
    </section></div>`;
  }

  const notFound = () => `<div class="wrap" style="padding:140px 40px"><span class="crumb">ERROR 404</span><h1 style="font-size:80px;margin:10px 0">Sheet not found</h1><a class="btn solid" href="#home">Back to the index ${AR}</a></div>`;

  // ---------- shell ----------
  function shell(active) {
    const nav = NAV.map(([h, l, k]) => `<a href="${h}" ${k === active ? 'aria-current="page"' : ''}>${l}</a>`).join('');
    $('#rail').innerHTML = `<a class="logo" href="#home" aria-label="Mohamed Amr — home">${logo()}</a><nav aria-label="Primary">${nav}</nav><span class="foot">© ${new Date().getFullYear()} M. AMR</span>`;
    $('#topbar').innerHTML = `<a class="logo" href="#home" aria-label="Mohamed Amr — home">${logo()}</a><nav aria-label="Primary">${nav}</nav>`;
    const c = m.contact;
    $('#foot').innerHTML = `
      <div class="cta-band"><div class="wrap"><span class="tg amber">Got a project in mind?</span><h2 style="margin-top:18px">Send the brief.<br><em>I’ll send the design.</em></h2>
        <div style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn solid" href="#contact">Start a project ${AR}</a><a class="btn lc" href="mailto:${esc(c.email)}">${esc(c.email)}</a></div></div></div>
      <div class="tb">
        <div style="display:flex;gap:14px;align-items:center"><span style="width:44px;flex:none">${logo()}</span><div><span class="tg">Drawn by</span><b>${esc(m.name)}</b> · Mechanical Design Engineer</div></div>
        <div><span class="tg">Location</span>6th of October City, Giza</div>
        <div><span class="tg">Local time</span><span data-clock>--:--</span> · Cairo</div>
        <div><span class="tg">Profiles</span><a href="${esc(c.linkedin)}"${ext(c.linkedin)}>LinkedIn</a> · <a href="${esc(c.grabcad)}"${ext(c.grabcad)}>GrabCAD</a> · <a href="${esc(c.upwork)}"${ext(c.upwork)}>Upwork</a></div>
        <div><span class="tg">Sheet</span>1 / 1 · Rev F</div>
      </div>`;
  }

  // ---------- behaviours ----------
  let viewerLoading = null;
  function loadViewer() {
    if (window.MAEViewer) return Promise.resolve();
    return viewerLoading || (viewerLoading = new Promise((res, rej) => { const s = document.createElement('script'); s.src = 'viewer.js'; s.onload = res; s.onerror = rej; document.head.appendChild(s); }));
  }
  function mountViewer(box) {
    const p = bySlug(box.dataset.viewer); if (!p || box.dataset.mounted) return; box.dataset.mounted = '1';
    const b = $('[data-load]', box); if (b) b.remove();
    loadViewer().then(() => window.MAEViewer.mount(box, p.model, 'full')).catch(() => box.insertAdjacentHTML('beforeend', '<p class="tg" style="position:absolute;left:16px;bottom:16px;background:#101316;padding:8px 10px">3D viewer failed to load — showing a render.</p>'));
  }
  function wire(route) {
    $$('.reveal').forEach(e => io.observe(e));
    $$('[data-viewer]').forEach(box => {
      $('[data-load]', box)?.addEventListener('click', () => mountViewer(box));
      const o = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { o.disconnect(); mountViewer(box); } }, { rootMargin: '200px' });
      o.observe(box);
    });
    $$('[data-f]').forEach(b => b.addEventListener('click', () => { $('#app').innerHTML = work(b.dataset.f); wire(route); }));
    $$('tr[data-go]').forEach(r => r.addEventListener('click', e => { if (!e.target.closest('a')) location.hash = r.dataset.go; }));
    $$('[data-ref]').forEach(a => a.addEventListener('click', () => { pendingRef = a.dataset.ref; }));
    const gal = route.name === 'project' ? (bySlug(route.slug) || {}).gallery : route.name === 'about' ? S.certifications.map(c => ({ src: c.image, alt: c.name + ' certificate', caption: `${c.name} — ${c.issuer}, ${c.date}` })) : null;
    if (gal && gal.length) {
      const lb = $('#lb'); let k = 0;
      const show = () => { const g = gal[k]; $('#lb-img').src = g.src; $('#lb-img').alt = g.alt; $('#lb-cap').textContent = g.caption || g.alt; $('#lb-n').textContent = `${k + 1} / ${gal.length}`; };
      $$('[data-lb],[data-clb]').forEach(b => b.addEventListener('click', () => { k = +(b.dataset.lb ?? b.dataset.clb); show(); lb.showModal(); }));
      $('#lb-prev').onclick = () => { k = (k - 1 + gal.length) % gal.length; show(); };
      $('#lb-next').onclick = () => { k = (k + 1) % gal.length; show(); };
      lb.onkeydown = e => { if (e.key === 'ArrowLeft') $('#lb-prev').click(); if (e.key === 'ArrowRight') $('#lb-next').click(); };
    }
    const f = $('form.msg');
    if (f) f.addEventListener('submit', e => {
      e.preventDefault(); const d = Object.fromEntries(new FormData(f)), out = $('.out', f);
      if (!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email) || d.msg.trim().length < 15) { out.style.display = 'block'; out.innerHTML = 'Please add your name, a valid e-mail and a few lines about the project.'; return; }
      const subj = `Project inquiry${d.service ? ' — ' + d.service : ''}`;
      const body = `Name: ${d.name}\nE-mail: ${d.email}\nService: ${d.service || 'Not sure yet'}\n\n${d.msg}`;
      out.style.display = 'block';
      out.innerHTML = `Your message is ready. Send it from your e-mail app, or copy it and send it to <b>${esc(m.contact.email)}</b>.<pre>${esc(body)}</pre><div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn solid" href="mailto:${esc(m.contact.email)}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}">Open e-mail app ${AR}</a><button type="button" class="btn" data-copy>Copy message</button></div>`;
      $('[data-copy]', out).onclick = async ev => { try { await navigator.clipboard.writeText(`To: ${m.contact.email}\nSubject: ${subj}\n\n${body}`); ev.target.textContent = 'Copied ✓'; } catch { ev.target.textContent = 'Select the text above to copy'; } };
    });
    clock();
  }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  function clock() { const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Cairo', hour: '2-digit', minute: '2-digit' }); $$('[data-clock]').forEach(e => e.textContent = f.format(new Date())); }
  setInterval(clock, 20000);

  let pendingRef = '';
  function parse() {
    const h = decodeURIComponent(location.hash.slice(1)) || 'home';
    if (h.startsWith('project-')) return { name: 'project', slug: h.slice(8) };
    return { name: ['home', 'work', 'about', 'contact'].includes(h) ? h : '404' };
  }
  function render() {
    const r = parse();
    const html = r.name === 'home' ? home() : r.name === 'work' ? work() : r.name === 'project' ? project(r.slug) : r.name === 'about' ? about() : r.name === 'contact' ? contact(pendingRef) : notFound();
    pendingRef = r.name === 'contact' ? '' : pendingRef;
    shell(r.name === 'project' ? 'work' : r.name);
    $('#app').innerHTML = html;
    const pr = r.name === 'project' && bySlug(r.slug);
    document.title = r.name === 'home' ? 'Mohamed Amr · Mechanical Design Engineer' : `${pr ? pr.title : r.name[0].toUpperCase() + r.name.slice(1)} — Mohamed Amr`;
    window.scrollTo(0, 0);
    wire(r);
  }
  window.addEventListener('hashchange', render);
  render();
})();
