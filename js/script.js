/* ============================================================
   Mounika Bala Katyaini — Portfolio
   Vanilla JS interactions
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Shared data (used by portfolio + home) ---------- */
  const PROJECTS = [
    {
      id: 'fake-news',
      title: 'Multimodal Fake News Detection System',
      category: 'ai',
      categoryLabel: 'AI / ML',
      visualLabel: 'AI · NLP · Vision',
      short: 'An end-to-end deep learning-based system that analyzes both textual and visual content for fake news detection through a fusion-based approach.',
      tech: ['Deep Learning', 'NLP', 'Computer Vision', 'OCR', 'Image Processing', 'AI'],
      overview: 'A deep learning system designed to detect fake news by processing text and images simultaneously and combining extracted features through a fusion-based approach.',
      purpose: 'Misinformation spreads rapidly across digital platforms. Detecting fake news reliably requires analyzing more than text alone — visual content is often manipulated too.',
      solution: 'The system combines text analysis, image feature extraction, OCR, and deepfake detection, then fuses the extracted features for final classification.',
      features: [
        'Text content analysis using NLP techniques',
        'Image feature extraction and processing',
        'OCR to extract text embedded in images',
        'Deepfake detection for manipulated visuals',
        'Feature fusion for combined classification'
      ],
      learned: 'Working across modalities (text + image) and fusing features taught deep architectural thinking and practical computer-vision fundamentals.',
      glyph: 'AI'
    },
    {
      id: 'weather',
      title: 'Weather Forecast Application',
      category: 'python',
      categoryLabel: 'Python',
      visualLabel: 'Python · Tkinter',
      short: 'A Python desktop weather application with a Tkinter interface that retrieves real-time weather using the OpenWeatherMap API.',
      tech: ['Python', 'Tkinter', 'OpenWeatherMap API', 'Requests', 'JSON'],
      overview: 'A desktop weather application built in Python that fetches and displays real-time weather information for any city.',
      purpose: 'Provide a simple, reliable desktop tool for checking live weather conditions with a clean Tkinter UI.',
      solution: 'The app calls the OpenWeatherMap API, parses the JSON response, and renders temperature, humidity, wind speed, and current conditions in a Tkinter window.',
      features: [
        'Real-time temperature, humidity, and wind speed',
        'Current conditions display',
        'City search with input validation',
        'Error handling for invalid cities and API issues',
        'Clean Tkinter-based desktop interface'
      ],
      learned: 'Integrating third-party REST APIs, handling JSON responses, and building user-friendly input validation in a desktop GUI.',
      glyph: 'Py'
    },
    {
      id: 'voting',
      title: 'Online Voting System',
      category: 'web',
      categoryLabel: 'Web Development',
      visualLabel: 'Flask · SQLite',
      short: 'A full-stack email OTP-based voting system with user registration, email verification, secure voting, and an admin results interface.',
      tech: ['Python', 'Flask', 'HTML5', 'CSS3', 'Jinja2', 'SQLite', 'Flask-Mail', 'SMTP'],
      overview: 'A full-stack voting system developed with Python and Flask featuring email OTP verification, secure voting, and an admin panel for results.',
      purpose: 'Enable trustworthy remote voting with identity verification and protection against duplicate votes.',
      solution: 'Users register and verify via email OTP, cast a single tracked vote, and an admin panel displays results — all backed by SQLite with unique vote tracking.',
      features: [
        'User registration with email verification',
        'OTP-based secure authentication (Flask-Mail / SMTP)',
        'Prevention of multiple votes per user',
        'Unique vote tracking in SQLite',
        'Admin panel for viewing results'
      ],
      learned: 'Full-stack integration (Flask + templates + SQLite), secure OTP flows, and enforcing one-vote-per-user constraints.',
      glyph: 'VS'
    },
    {
      id: 'chatbot',
      title: 'Pizza Ordering Chatbot',
      category: 'ai',
      categoryLabel: 'AI / ML',
      visualLabel: 'GenAI · NLP',
      short: 'A conversational AI chatbot that accepts pizza orders naturally, validates details, generates summaries, and collects delivery information.',
      tech: ['Python', 'Generative AI', 'NLP', 'Gemini/ChatGPT API'],
      overview: 'A conversational AI chatbot built during the IIDT–Blackbucks internship that handles natural-language pizza ordering end to end.',
      purpose: 'Let customers order pizza through natural conversation instead of rigid menus.',
      solution: 'The chatbot parses natural-language input, validates order information, generates an order summary, and collects delivery details using generative AI and NLP.',
      features: [
        'Natural-language order taking',
        'Order information validation',
        'Automatic order summary generation',
        'Delivery detail collection',
        'Conversational interface powered by GenAI'
      ],
      learned: 'Designing conversational flows, validating unstructured user input, and integrating generative AI APIs responsibly.',
      glyph: 'AI'
    },
    {
      id: 'supermarket',
      title: 'Supermarket Sales Analysis',
      category: 'data',
      categoryLabel: 'Data Analytics',
      visualLabel: 'EDA · Tableau',
      short: 'An exploratory data analysis and interactive visualization project on supermarket sales using Python and Tableau.',
      tech: ['Python', 'Tableau', 'EDA', 'Data Visualization'],
      overview: 'An internship project focused on exploratory data analysis and interactive visualizations of supermarket sales data.',
      purpose: 'Uncover sales patterns and trends in supermarket transaction data to support better business understanding.',
      solution: 'Performed EDA with Python and built interactive dashboards in Tableau to visualize sales patterns and key metrics.',
      features: [
        'Exploratory data analysis with Python',
        'Interactive Tableau visualizations',
        'Sales pattern identification',
        'Cleaned and structured transaction dataset'
      ],
      learned: 'Structured EDA workflow, choosing the right visualizations, and telling a story with data.',
      glyph: 'DA'
    }
  ];

  /* ---------- Inject reusable header ---------- */
  const NAV_ITEMS = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'services.html', label: 'Skills' },
    { href: 'portfolio.html', label: 'Projects' },
    { href: 'experience.html', label: 'Experience' },
    { href: 'certifications.html', label: 'Certifications' },
    { href: 'gallery.html', label: 'Gallery' },
    { href: 'contact.html', label: 'Contact' }
  ];

  function currentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path;
  }

  function buildHeader() {
    const current = currentPage();
    const menuLinks = NAV_ITEMS.map(item =>
      `<a href="${item.href}" class="nav__link${item.href === current ? ' active' : ''}" aria-current="${item.href === current ? 'page' : 'false'}">${item.label}</a>`
    ).join('');
    const mobileLinks = NAV_ITEMS.map(item =>
      `<a href="${item.href}" class="${item.href === current ? 'active' : ''}">${item.label}</a>`
    ).join('');

    const header = document.createElement('header');
    header.className = 'nav';
    header.id = 'nav';
    header.innerHTML = `
      <div class="container nav__inner">
        <a href="index.html" class="nav__logo">Mounika<span>.</span></a>
        <nav class="nav__menu" aria-label="Primary">${menuLinks}</nav>
        <div class="nav__cta">
          <a href="contact.html" class="btn btn--primary btn--sm">Let's Connect</a>
          <button class="nav__toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobileMenu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    `;
    document.body.prepend(header);

    const mobileMenu = document.createElement('nav');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.id = 'mobileMenu';
    mobileMenu.setAttribute('aria-label', 'Mobile');
    mobileMenu.innerHTML = mobileLinks + `<a href="contact.html" class="btn btn--primary btn--block" style="margin-top:0.75rem">Let's Connect</a>`;
    header.appendChild(mobileMenu);
  }

  /* ---------- Inject reusable footer ---------- */
  function buildFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <h3>Mounika<span>.</span></h3>
            <p>Computer Science Engineering Student &amp; Aspiring Software Developer. Open to entry-level opportunities and internships.</p>
            <div class="footer__social" style="margin-top:1rem">
              <a href="https://www.linkedin.com/in/mounika-bala-katyaini-devarapu" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17.34v-7H6.67v7h1.67zM7.5 9.34a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9.84 8v-3.84c0-1.67-.3-2.95-2.3-2.95-.94 0-1.57.51-1.83 1h-.03v-.85h-1.6v7h1.67v-3.47c0-.9.17-1.77 1.29-1.77 1.1 0 1.12 1.03 1.12 1.83v3.41h1.67z"/></svg>
              </a>
              <a href="mailto:devarapumounikabalakatyaini999@gmail.com" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </div>
          <div class="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Skills</a></li>
              <li><a href="portfolio.html">Projects</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Explore</h4>
            <ul>
              <li><a href="experience.html">Experience</a></li>
              <li><a href="certifications.html">Certifications</a></li>
              <li><a href="gallery.html">Gallery</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="contact.html">Let's Connect</a></li>
              <li><a href="mailto:devarapumounikabalakatyaini999@gmail.com">Email</a></li>
              <li><a href="tel:9499915999">9499915999</a></li>
              <li><a href="assets/Mounika-Bala-Katyaini-Resume.pdf" download>Download Resume</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <span>&copy; 2026 Mounika Bala Katyaini. All rights reserved.</span>
          <span>Built with HTML, CSS &amp; JavaScript</span>
        </div>
      </div>
    `;
    document.body.appendChild(footer);

    const backTop = document.createElement('button');
    backTop.className = 'back-top';
    backTop.id = 'backTop';
    backTop.setAttribute('aria-label', 'Back to top');
    backTop.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>';
    document.body.appendChild(backTop);
  }

  /* ---------- Navigation behavior ---------- */
  function initNav() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('mobileMenu');

    function onScroll() {
      if (window.scrollY > 20) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('open');
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('open');
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }));

    const backTop = document.getElementById('backTop');
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!revealEls.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ---------- Animated counters ---------- */
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const decimals = (el.dataset.decimals && parseInt(el.dataset.decimals)) || 0;
        const dur = 1200;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          el.textContent = val.toFixed(decimals) + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target.toFixed(decimals) + suffix;
        }
        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
  }

  /* ---------- Portfolio filtering ---------- */
  function initFilters() {
    const filterBar = document.querySelector('[data-filters]');
    if (!filterBar) return;
    const grid = document.querySelector('[data-project-grid]');
    const cards = grid ? Array.from(grid.querySelectorAll('.project-card')) : [];

    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.transition = 'opacity 300ms ease, transform 300ms ease';
        if (match) {
          card.style.display = '';
          requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => { card.style.display = 'none'; }, 280);
        }
      });
    });
  }

  /* ---------- Project detail modal ---------- */
  function initProjectModal() {
    const container = document.querySelector('[data-project-grid]');
    if (!container) return;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = '<div class="modal" role="dialog" aria-modal="true"><button class="modal__close" aria-label="Close">&times;</button><div class="modal__content"></div></div>';
    document.body.appendChild(overlay);
    const content = overlay.querySelector('.modal__content');
    const closeBtn = overlay.querySelector('.modal__close');

    function open(id) {
      const p = PROJECTS.find(x => x.id === id);
      if (!p) return;
      content.innerHTML = `
        <span class="eyebrow">${p.categoryLabel}</span>
        <h2>${p.title}</h2>
        <div class="modal__tags" style="margin-top:.5rem">${p.tech.map(t => `<span class="tag tag--pink">${t}</span>`).join('')}</div>
        <div class="modal__section"><h4>Overview</h4><p>${p.overview}</p></div>
        <div class="modal__section"><h4>Problem / Purpose</h4><p>${p.purpose}</p></div>
        <div class="modal__section"><h4>Solution</h4><p>${p.solution}</p></div>
        <div class="modal__section"><h4>Key Features</h4><ul class="modal__list">${p.features.map(f => `<li>${f}</li>`).join('')}</ul></div>
        <div class="modal__section"><h4>What I Learned</h4><p>${p.learned}</p></div>
        <div class="modal__section" style="display:flex;gap:.5rem;flex-wrap:wrap">
          <a href="contact.html" class="btn btn--primary btn--sm">Discuss This Project</a>
          <button class="btn btn--ghost btn--sm" disabled>Coming Soon</button>
        </div>
      `;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    container.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-open-project]');
      if (btn) open(btn.dataset.openProject);
    });
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('open')) close(); });
  }

  /* ---------- Gallery lightbox ---------- */
  function initGallery() {
    const grid = document.querySelector('[data-gallery]');
    if (!grid) return;
    const items = Array.from(grid.querySelectorAll('.gallery-item'));
    const captions = items.map(i => i.dataset.caption || 'Gallery');

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <button class="lightbox__close" aria-label="Close">&times;</button>
      <button class="lightbox__nav lightbox__prev" aria-label="Previous">&#8249;</button>
      <button class="lightbox__nav lightbox__next" aria-label="Next">&#8250;</button>
      <div class="lightbox__content">
        <div class="lightbox__placeholder"></div>
        <div class="lightbox__caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
    const placeholder = lightbox.querySelector('.lightbox__placeholder');
    const captionEl = lightbox.querySelector('.lightbox__caption');
    let current = 0;

    function show(i) {
      current = (i + items.length) % items.length;
      placeholder.textContent = captions[current];
      captionEl.textContent = captions[current];
    }
    function open(i) { show(i); lightbox.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function close() { lightbox.classList.remove('open'); document.body.style.overflow = ''; }

    items.forEach((item, i) => item.addEventListener('click', () => open(i)));
    lightbox.querySelector('.lightbox__close').addEventListener('click', close);
    lightbox.querySelector('.lightbox__prev').addEventListener('click', () => show(current - 1));
    lightbox.querySelector('.lightbox__next').addEventListener('click', () => show(current + 1));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
  }

  /* ---------- Contact form validation ---------- */
  function initContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;
    const feedback = form.querySelector('.form-feedback');
    const fields = {
      name: form.querySelector('#name'),
      email: form.querySelector('#email'),
      subject: form.querySelector('#subject'),
      message: form.querySelector('#message')
    };

    function setError(field, msg) {
      const group = field.closest('.form-group');
      group.classList.add('invalid');
      const err = group.querySelector('.form-error');
      if (err) err.textContent = msg;
    }
    function clearError(field) { field.closest('.form-group').classList.remove('invalid'); }

    function validate() {
      let ok = true;
      Object.values(fields).forEach(clearError);
      if (!fields.name.value.trim()) { setError(fields.name, 'Please enter your name.'); ok = false; }
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(fields.email.value.trim())) { setError(fields.email, 'Please enter a valid email address.'); ok = false; }
      if (!fields.subject.value.trim()) { setError(fields.subject, 'Please add a subject.'); ok = false; }
      if (fields.message.value.trim().length < 10) { setError(fields.message, 'Message should be at least 10 characters.'); ok = false; }
      return ok;
    }

    Object.values(fields).forEach(f => f.addEventListener('input', () => clearError(f)));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      feedback.classList.remove('show', 'success', 'error');
      if (!validate()) {
        feedback.textContent = 'Please fix the highlighted fields and try again.';
        feedback.classList.add('show', 'error');
        return;
      }
      feedback.textContent = "Thanks! This form is frontend-only — please use the Email button to send your message, or connect on LinkedIn.";
      feedback.classList.add('show', 'success');
      form.reset();
    });
  }

  /* ---------- Inject project cards into [data-featured] and [data-project-grid] ---------- */
  function projectCardHTML(p, featured) {
    const tags = p.tech.slice(0, featured ? 4 : 5).map(t => `<span class="tag">${t}</span>`).join('');
    return `
      <article class="project-card reveal" data-category="${p.category}">
        <div class="project-card__visual" data-label="${p.visualLabel}">
          <span class="glyph">${p.glyph}</span>
        </div>
        <div class="project-card__body">
          <span class="project-card__cat">${p.categoryLabel}</span>
          <h3>${p.title}</h3>
          <p class="project-card__desc">${p.short}</p>
          <div class="project-card__tags">${tags}</div>
          <div class="project-card__footer">
            <button class="btn-link" data-open-project="${p.id}">
              View Details
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button class="btn btn--ghost btn--sm" disabled>Coming Soon</button>
          </div>
        </div>
      </article>
    `;
  }

  function injectProjects() {
    const featured = document.querySelector('[data-featured]');
    if (featured) {
      featured.innerHTML = PROJECTS.slice(0, 4).map(p => projectCardHTML(p, true)).join('');
    }
    const grid = document.querySelector('[data-project-grid]');
    if (grid) {
      grid.innerHTML = PROJECTS.map(p => projectCardHTML(p, false)).join('');
    }
  }

  /* ---------- FAQ accordion (kept for potential reuse; not linked) ---------- */
  function initAccordion() {
    document.querySelectorAll('[data-accordion] .accordion-item').forEach(item => {
      const btn = item.querySelector('.accordion__q');
      const panel = item.querySelector('.accordion__a');
      if (!btn || !panel) return;
      btn.addEventListener('click', () => {
        const open = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
        panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0';
      });
    });
  }

  /* ---------- Boot ---------- */
  function boot() {
    buildHeader();
    buildFooter();
    document.body.classList.add('page-enter');
    injectProjects();
    initNav();
    initReveal();
    initCounters();
    initFilters();
    initProjectModal();
    initGallery();
    initContactForm();
    initAccordion();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
