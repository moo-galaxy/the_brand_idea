/* ============================================================
   Heend Made — Interactive Business Presentation
   Vanilla JS
   ============================================================ */

(() => {
  'use strict';

  /* ---------- Year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Nav scroll ---------- */
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive: true });

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    document.body.style.overflow = nav.classList.contains('is-open') ? 'hidden' : '';
  });

  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  /* ---------- Scroll Reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = Math.min(i * 60, 300);
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.count;
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  /* ---------- Ecosystem nodes ---------- */
  const ecoData = [
    { label: 'Designer', angle: -90 },
    { label: 'Marketing', angle: -45 },
    { label: 'Content', angle: 0 },
    { label: 'Sales', angle: 45 },
    { label: 'Support', angle: 90 },
    { label: 'Data', angle: 135 },
    { label: 'Operations', angle: 180 },
    { label: 'VIP', angle: 225 },
  ];
  const ecoNodesEl = document.getElementById('ecosystemNodes');
  const ecoSvg = document.querySelector('.ecosystem__svg');
  const ecoLines = document.querySelector('.eco-lines');

  if (ecoNodesEl && ecoSvg) {
    const cx = 400, cy = 400, radius = 300;
    ecoData.forEach(({ label, angle }, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = cx + radius * Math.cos(rad);
      const y = cy + radius * Math.sin(rad);
      const pctX = (x / 800) * 100;
      const pctY = (y / 800) * 100;

      const node = document.createElement('div');
      node.className = 'eco-node';
      node.textContent = label;
      node.style.left = pctX + '%';
      node.style.top = pctY + '%';
      ecoNodesEl.appendChild(node);

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', cx);
      line.setAttribute('y1', cy);
      line.setAttribute('x2', x);
      line.setAttribute('y2', y);
      line.setAttribute('stroke-dasharray', '4 6');
      line.style.opacity = 0;
      line.style.transition = `opacity .6s ease ${i * 0.08}s`;
      ecoLines.appendChild(line);
      requestAnimationFrame(() => { line.style.opacity = 1; });
    });
  }

  /* ---------- Teams ---------- */
  const teams = [
    {
      ico: '🧵', title: 'Designers',
      task: 'تصميم وتنفيذ منتجات Handmade.',
      impact: 'هو مصدر المنتج الأساسي.',
      benefits: ['عرض منتجاته', 'وصول لعملاء محتملين', 'دعم Marketing', 'Feedback', 'Portfolio', 'تطوير المنتجات']
    },
    {
      ico: '📣', title: 'Marketing Team',
      task: 'Social Media, Campaigns, Ads, Brand Awareness.',
      impact: 'زيادة الوصول والـ Traffic والـ Leads.',
      benefits: ['Social Media', 'Campaigns', 'Ads', 'Brand Awareness', 'Acquisition']
    },
    {
      ico: '🎬', title: 'Content Team',
      task: 'Reels, Posts, Stories, Product Photography.',
      impact: 'تحويل المنتج إلى محتوى يجذب الانتباه.',
      benefits: ['Reels', 'Posts', 'Stories', 'Photography', 'Creative']
    },
    {
      ico: '💰', title: 'Sales Team',
      task: 'Leads, Customer Communication, Closing.',
      impact: 'تحويل الاهتمام إلى Orders.',
      benefits: ['Leads', 'Presentation', 'Follow-up', 'Closing']
    },
    {
      ico: '💬', title: 'Customer Support',
      task: 'الرد على العملاء ومتابعة الـ DMs والطلبات.',
      impact: 'تحسين تجربة العميل ورفع احتمالية العودة للشراء.',
      benefits: ['DMs', 'FAQ', 'Order Tracking', 'CRM']
    },
    {
      ico: '📊', title: 'Data Analysis',
      task: 'تحليل الأداء واكتشاف الفرص واتخاذ القرارات.',
      impact: 'توجيه الفريق لاتخاذ قرارات أفضل مبنية على أرقام.',
      benefits: ['Dashboard', 'Funnel', 'Retention', 'Conversion']
    },
    {
      ico: '🎨', title: 'Graphic Design',
      task: 'تصميم الهوية والمحتوى البصري للبراند.',
      impact: 'رفع جودة الصورة البصرية للبراند.',
      benefits: ['Branding', 'Posts', 'Ads', 'Portfolio']
    },
    {
      ico: '🚀', title: 'Operations',
      task: 'تنظيم العملية بين الفرق والطلب والشحن.',
      impact: 'الحفاظ على سلاسة النظام بالكامل.',
      benefits: ['Management', 'Organization', 'Leadership']
    }
  ];

  const teamsGrid = document.getElementById('teamsGrid');
  if (teamsGrid) {
    teams.forEach(t => {
      const card = document.createElement('article');
      card.className = 'team-card reveal';
      card.innerHTML = `
        <span class="team-card__ico">${t.ico}</span>
        <h3 class="team-card__title">${t.title}</h3>
        <div class="team-card__row">
          <strong>المهمة</strong>${t.task}
        </div>
        <div class="team-card__row">
          <strong>التأثير</strong>${t.impact}
        </div>
        <div class="team-card__list">
          ${t.benefits.map(b => `<span>${b}</span>`).join('')}
        </div>
      `;
      // hover spotlight
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);
      });
      teamsGrid.appendChild(card);
    });
    // observe newly created
    teamsGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  /* ---------- Marketing Funnel reveal ---------- */
  const mkRows = document.querySelectorAll('.mkfunnel__row');
  const mkObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'none';
        }, i * 100);
        mkObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  mkRows.forEach(r => {
    r.style.opacity = 0;
    r.style.transform = 'translateY(24px)';
    r.style.transition = 'opacity .7s ease, transform .7s ease';
    mkObserver.observe(r);
  });

  /* ---------- Funnel bars reveal ---------- */
  const funnelSteps = document.querySelectorAll('.funnel__step');
  const funnelObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const w = el.style.getPropertyValue('--w');
        el.style.width = '0';
        setTimeout(() => {
          el.style.transition = 'width .9s cubic-bezier(.22,.61,.36,1), transform .3s';
          el.style.width = w;
        }, i * 120);
        funnelObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  funnelSteps.forEach(s => funnelObserver.observe(s));

  /* ---------- Join Form ---------- */
  const form = document.getElementById('joinForm');
  const note = document.getElementById('joinNote');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const required = ['name', 'age', 'role', 'skills', 'whatsapp', 'why'];
      const missing = required.find(k => !String(data[k] || '').trim());
      if (missing) {
        note.textContent = '⚠️ من فضلك اكمل جميع الحقول المطلوبة.';
        note.className = 'join__note error';
        return;
      }
      // Local confirmation — connect to backend later
      note.textContent = `✅ تم استلام طلبك يا ${data.name}! سنتواصل معك قريبًا.`;
      note.className = 'join__note success';
      form.reset();
      // optional: send to backend / WhatsApp / Google Sheet
      console.log('[Heend Made] New submission:', data);
    });
  }

  /* ---------- Hero nodes parallax (light) ---------- */
  const heroDiagram = document.querySelector('.hero__diagram');
  if (heroDiagram && window.matchMedia('(min-width: 981px)').matches) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      heroDiagram.style.transform = `translate(${x}px, ${y}px)`;
    }, { passive: true });
  }

    /* ============================================================
     STAGE 2 — Sections 10 → 16
     ============================================================ */

  /* ---------- 10. IMPACT NODES ---------- */
  const impactData = [
    { label: 'Designer', angle: -90 },
    { label: 'Content', angle: -45 },
    { label: 'Marketing', angle: 0 },
    { label: 'Data', angle: 45 },
    { label: 'Support', angle: 90 },
    { label: 'Sales', angle: 135 },
    { label: 'Developer', angle: 180 },
    { label: 'Operations', angle: 225 },
  ];
  const impactNodesEl = document.getElementById('impactNodes');
  if (impactNodesEl) {
    const cx = 350, cy = 350, radius = 260;
    impactData.forEach(({ label, angle }, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = cx + radius * Math.cos(rad);
      const y = cy + radius * Math.sin(rad);
      const node = document.createElement('div');
      node.className = 'impact-node';
      node.textContent = label;
      node.style.left = (x / 700 * 100) + '%';
      node.style.top = (y / 700 * 100) + '%';
      node.style.animationDelay = (-i * 0.8) + 's';
      impactNodesEl.appendChild(node);
    });
  }

  /* ---------- 11. BENEFITS ---------- */
  const benefits = [
    {
      ico: '🧵', title: 'Designer',
      items: ['Exposure', 'Marketing Support', 'Customer Feedback', 'Portfolio', 'الوصول لعملاء محتملين']
    },
    {
      ico: '💰', title: 'Sales',
      items: ['Sales Experience', 'Communication', 'Negotiation', 'Commission حسب النظام والأداء']
    },
    {
      ico: '📣', title: 'Marketing',
      items: ['Real Brand Experience', 'Portfolio', 'Campaign Experience']
    },
    {
      ico: '📊', title: 'Data Analyst',
      items: ['Real Business Analytics', 'Dashboard Building', 'E-commerce Analytics', 'Portfolio']
    },
    {
      ico: '💬', title: 'Moderator',
      items: ['Customer Service', 'Communication', 'CRM Experience']
    },
    {
      ico: '🎨', title: 'Graphic Designer',
      items: ['Portfolio', 'Brand Experience']
    },
    {
      ico: '🚀', title: 'Developer',
      items: ['Real Project', 'Automation', 'Dashboard', 'Website Development']
    },
    {
      ico: '📋', title: 'Operations',
      items: ['Management', 'Organization', 'Leadership']
    }
  ];
  const benefitsGrid = document.getElementById('benefitsGrid');
  if (benefitsGrid) {
    benefits.forEach(b => {
      const el = document.createElement('article');
      el.className = 'benefit reveal';
      el.innerHTML = `
        <div class="benefit__head">
          <div class="benefit__ico">${b.ico}</div>
          <div class="benefit__title">${b.title}</div>
        </div>
        <div class="benefit__hint">اضغط لعرض المكاسب</div>
        <div class="benefit__list">
          ${b.items.map(i => `<span>${i}</span>`).join('')}
        </div>
      `;
      el.addEventListener('click', () => el.classList.toggle('is-open'));
      benefitsGrid.appendChild(el);
    });
    benefitsGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  /* ---------- 12. CHARTS (SVG-like canvas رسم يدوي) ---------- */
  const CHART = {
    ink: '#2c1f16',
    inkSoft: '#5a3c28',
    brown: '#8c5c3a',
    brownLight: '#c9a27a',
    beige: '#e2c9a8',
    line: 'rgba(90,60,40,.15)',
    grid: 'rgba(90,60,40,.08)'
  };

  // helper: sharp canvas on retina
  function setupCanvas(canvas) {
    if (!canvas) return null;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || canvas.width;
    const h = canvas.clientHeight || canvas.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx, w, h };
  }

  // Line chart
  function drawLineChart(canvas, data, labels, opts = {}) {
    const s = setupCanvas(canvas);
    if (!s) return;
    const { ctx, w, h } = s;
    const padding = { top: 20, right: 16, bottom: 34, left: 44 };
    const cw = w - padding.left - padding.right;
    const ch = h - padding.top - padding.bottom;
    const max = Math.max(...data) * 1.15;
    const min = 0;
    const stepX = cw / (data.length - 1);

    // grid
    ctx.strokeStyle = CHART.grid;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (ch / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + cw, y);
      ctx.stroke();
    }

    // line
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = padding.left + i * stepX;
      const y = padding.top + ch - ((v - min) / (max - min)) * ch;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(201,162,122,.55)');
    grad.addColorStop(1, 'rgba(201,162,122,0)');
    ctx.lineTo(padding.left + cw, padding.top + ch);
    ctx.lineTo(padding.left, padding.top + ch);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // stroke re-draw on top
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = padding.left + i * stepX;
      const y = padding.top + ch - ((v - min) / (max - min)) * ch;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = CHART.inkSoft;
    ctx.lineWidth = 2.2;
    ctx.lineJoin = 'round';
    ctx.stroke();

    // points
    ctx.fillStyle = CHART.brownLight;
    data.forEach((v, i) => {
      const x = padding.left + i * stepX;
      const y = padding.top + ch - ((v - min) / (max - min)) * ch;
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // labels
    ctx.fillStyle = CHART.inkSoft;
    ctx.font = '11px Tajawal, system-ui, sans-serif';
    ctx.textAlign = 'center';
    labels.forEach((l, i) => {
      const x = padding.left + i * stepX;
      ctx.fillText(l, x, h - 10);
    });
  }

  // Bar chart
  function drawBarChart(canvas, data, labels, opts = {}) {
    const s = setupCanvas(canvas);
    if (!s) return;
    const { ctx, w, h } = s;
    const padding = { top: 20, right: 16, bottom: 34, left: 44 };
    const cw = w - padding.left - padding.right;
    const ch = h - padding.top - padding.bottom;
    const max = Math.max(...data) * 1.15;
    const barW = (cw / data.length) * 0.55;
    const gap = cw / data.length;

    ctx.strokeStyle = CHART.grid;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (ch / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + cw, y);
      ctx.stroke();
    }

    data.forEach((v, i) => {
      const bh = (v / max) * ch;
      const x = padding.left + i * gap + (gap - barW) / 2;
      const y = padding.top + ch - bh;

      const grad = ctx.createLinearGradient(0, y, 0, padding.top + ch);
      grad.addColorStop(0, CHART.brown);
      grad.addColorStop(1, CHART.brownLight);
      ctx.fillStyle = grad;
      roundRect(ctx, x, y, barW, bh, 6);
      ctx.fill();
    });

    ctx.fillStyle = CHART.inkSoft;
    ctx.font = '11px Tajawal, system-ui, sans-serif';
    ctx.textAlign = 'center';
    labels.forEach((l, i) => {
      const x = padding.left + i * gap + gap / 2;
      ctx.fillText(l, x, h - 10);
    });
  }

  // Donut chart
  function drawDonut(canvas, data, colors, labels) {
    const s = setupCanvas(canvas);
    if (!s) return;
    const { ctx, w, h } = s;
    const cx = w / 2;
    const cy = h / 2;
    const r = Math.min(w, h) / 2 - 30;
    const total = data.reduce((a, b) => a + b, 0);
    let start = -Math.PI / 2;

    data.forEach((v, i) => {
      const angle = (v / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, start + angle);
      ctx.closePath();
      ctx.fillStyle = colors[i];
      ctx.fill();
      start += angle;
    });

    // hole
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();

    // legend
    ctx.font = '11px Tajawal, system-ui, sans-serif';
    ctx.textAlign = 'right';
    const legendX = w - 10;
    let legendY = 20;
    labels.forEach((l, i) => {
      ctx.fillStyle = colors[i];
      ctx.fillRect(legendX - 10, legendY - 8, 10, 10);
      ctx.fillStyle = CHART.inkSoft;
      ctx.fillText(l, legendX - 16, legendY + 1);
      legendY += 16;
    });
  }

  // Funnel chart
  function drawFunnelChart(canvas, stages, values) {
    const s = setupCanvas(canvas);
    if (!s) return;
    const { ctx, w, h } = s;
    const max = values[0];
    const padY = 14;
    const rowH = (h - padY * 2) / stages.length;
    const maxW = w - 120;
    const minW = 40;

    stages.forEach((label, i) => {
      const p = values[i] / max;
      const bw = minW + (maxW - minW) * p;
      const x = (w - bw) / 2;
      const y = padY + i * rowH + 2;
      const bh = rowH - 6;

      const grad = ctx.createLinearGradient(x, 0, x + bw, 0);
      grad.addColorStop(0, CHART.brownLight);
      grad.addColorStop(1, CHART.brown);
      ctx.fillStyle = grad;
      roundRect(ctx, x, y, bw, bh, 8);
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 11px Tajawal, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${label} — ${values[i]}`, w / 2, y + bh / 2 + 4);
    });
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  // Draw when visible
  function observeChart(canvas, drawFn) {
    if (!canvas) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          drawFn();
          obs.unobserve(canvas);
        }
      });
    }, { threshold: 0.25 });
    obs.observe(canvas);
  }

  observeChart(document.getElementById('chartSales'), () => {
    drawLineChart(
      document.getElementById('chartSales'),
      [1200, 1900, 2400, 3100, 3800, 4600, 5400, 6800],
      ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8']
    );
  });

  observeChart(document.getElementById('chartOrders'), () => {
    drawBarChart(
      document.getElementById('chartOrders'),
      [42, 68, 81, 96, 120, 148, 172, 210],
      ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8']
    );
  });

  observeChart(document.getElementById('chartProducts'), () => {
    drawBarChart(
      document.getElementById('chartProducts'),
      [340, 280, 220, 180, 120, 90],
      ['Bags', 'Candles', 'Embroidery', 'Jewelry', 'Home', 'Other']
    );
  });

  observeChart(document.getElementById('chartChannels'), () => {
    drawDonut(
      document.getElementById('chartChannels'),
      [45, 25, 15, 10, 5],
      [CHART.inkSoft, CHART.brown, CHART.brownLight, CHART.beige, '#d9c8ad'],
      ['Instagram', 'Facebook', 'Groups', 'Referrals', 'Other']
    );
  });

  observeChart(document.getElementById('chartRetention'), () => {
    drawLineChart(
      document.getElementById('chartRetention'),
      [22, 24, 26, 28, 30, 31, 33, 34],
      ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8']
    );
  });

  observeChart(document.getElementById('chartFunnel'), () => {
    drawFunnelChart(
      document.getElementById('chartFunnel'),
      ['Views', 'Visits', 'Messages', 'Leads', 'Orders', 'Repeat'],
      [10000, 500, 150, 50, 20, 7]
    );
  });

  /* ---------- 13. GROWTH LOOP ---------- */
  const loopSteps = [
    'PRODUCT', 'CONTENT', 'MARKETING', 'TRAFFIC',
    'LEADS', 'SALES', 'CUSTOMERS', 'FEEDBACK',
    'DATA', 'INSIGHTS', 'IMPROVEMENT'
  ];
  const loopLabels = document.getElementById('loopLabels');
  if (loopLabels) {
    const cx = 350, cy = 350, radius = 250;
    loopSteps.forEach((label, i) => {
      const angle = (i / loopSteps.length) * Math.PI * 2 - Math.PI / 2;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      const isAccent = i === loopSteps.length - 1;

      const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      bg.setAttribute('x', x - 60);
      bg.setAttribute('y', y - 15);
      bg.setAttribute('width', 120);
      bg.setAttribute('height', 30);
      bg.setAttribute('rx', 15);
      bg.setAttribute('class', 'loop-step-bg' + (isAccent ? ' loop-step-bg--accent' : ''));
      loopLabels.appendChild(bg);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', x);
      text.setAttribute('y', y + 1);
      if (isAccent) text.classList.add('is-accent');
      text.textContent = label;
      loopLabels.appendChild(text);
    });
  }

  /* ---------- 15. ROADMAP ---------- */
  const roadmap = [
    { n: '01', title: 'Build the Team', desc: 'تجميع المهارات الأساسية من كل التخصصات.' },
    { n: '02', title: 'Build the Brand', desc: 'بناء الهوية والصورة البصرية للبراند.' },
    { n: '03', title: 'Launch Products', desc: 'إطلاق أول دفعة منتجات بشكل منظم.' },
    { n: '04', title: 'Build Sales Network', desc: 'توسيع قنوات البيع وبناء فريق Sales.' },
    { n: '05', title: 'Build VIP Community', desc: 'بناء المجتمع الخاص بالعملاء المميزين.' },
    { n: '06', title: 'Collect Data', desc: 'تجهيز الـ Dashboard وجمع الأرقام الأساسية.' },
    { n: '07', title: 'Optimize Marketing & Sales', desc: 'تحسين الحملات وقنوات التحويل بناء على البيانات.' },
    { n: '08', title: 'Scale', desc: 'التوسع في المنتجات والأسواق والفريق.' }
  ];
  const roadmapList = document.getElementById('roadmapList');
  if (roadmapList) {
    roadmap.forEach(r => {
      const li = document.createElement('li');
      li.className = 'roadmap__item reveal';
      li.innerHTML = `
        <span class="roadmap__num">المرحلة ${r.n}</span>
        <div class="roadmap__title">${r.title}</div>
        <div class="roadmap__desc">${r.desc}</div>
      `;
      roadmapList.appendChild(li);
    });
    roadmapList.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  /* ---------- 16. FAQ ---------- */
  const faqs = [
    {
      q: 'هل لازم يكون عندي خبرة؟',
      a: 'مش شرط. المهم يكون عندك مهارة أساسية أو شغف حقيقي للتعلم، وإحنا نساعدك تطورها في بيئة عملية.'
    },
    {
      q: 'هل لازم أحقق Orders؟',
      a: 'لا. كل دور له تأثير مختلف. الـ Data Analyst مثلاً بيأثر من غير ما يحقق Order بنفسه.'
    },
    {
      q: 'هل المصمم مسؤول عن التسويق؟',
      a: 'لا. المصمم مسؤول عن المنتج، والـ Marketing Team مسؤولة عن الوصول. كل واحد بيركز في تخصصه.'
    },
    {
      q: 'كيف يعمل الـ Sales Team؟',
      a: 'بيستقبل Leads، يتواصل مع العملاء، يعرض المنتج، يعمل Follow-up، ويقفل الطلب بناء على النظام.'
    },
    {
      q: 'ما دور الـ Data Analyst؟',
      a: 'يقرأ الأرقام ويكتشف الفرص والمشاكل، ويوجه الفريق لقرارات أفضل بخصوص المنتجات والتسويق.'
    },
    {
      q: 'هل العمل Online؟',
      a: 'أيوه، الشغل بيتم عن بعد مع اجتماعات ومتابعة أونلاين حسب النظام.'
    },
    {
      q: 'كيف يتم توزيع المسؤوليات؟',
      a: 'كل دور له Scope واضح وKPIs، والـ Operations بتتابع التكامل بين كل الفرق.'
    },
    {
      q: 'كيف أستفيد من الانضمام؟',
      a: 'خبرة عملية، Portfolio، علاقات مهنية، وتطوير مهارات حقيقية في بيئة Brand بتتبني من الأول.'
    }
  ];
  const faqList = document.getElementById('faqList');
  if (faqList) {
    faqs.forEach((f, i) => {
      const item = document.createElement('div');
      item.className = 'faq__item reveal';
      item.innerHTML = `
        <button class="faq__q" type="button" aria-expanded="false">
          <span>${f.q}</span>
        </button>
        <div class="faq__a"><p>${f.a}</p></div>
      `;
      const btn = item.querySelector('.faq__q');
      btn.addEventListener('click', () => {
        const open = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open);
      });
      faqList.appendChild(item);
    });
    faqList.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  /* ---------- Extended counters (decimals + suffix) ---------- */
  const extCounters = document.querySelectorAll('[data-count][data-decimal], [data-count][data-suffix]');
  const extObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const decimal = parseInt(el.dataset.decimal || '0', 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = (decimal ? val.toFixed(decimal) : Math.round(val).toLocaleString()) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = (decimal ? target.toFixed(decimal) : target.toLocaleString()) + suffix;
      };
      requestAnimationFrame(tick);
      extObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  extCounters.forEach(c => extObserver.observe(c));

  /* ---------- Redraw charts on resize (debounced) ---------- */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Re-trigger draws for the visible charts
      const redraw = [
        ['chartSales', () => drawLineChart(document.getElementById('chartSales'),
          [1200, 1900, 2400, 3100, 3800, 4600, 5400, 6800],
          ['W1','W2','W3','W4','W5','W6','W7','W8'])],
        ['chartOrders', () => drawBarChart(document.getElementById('chartOrders'),
          [42, 68, 81, 96, 120, 148, 172, 210],
          ['W1','W2','W3','W4','W5','W6','W7','W8'])],
        ['chartProducts', () => drawBarChart(document.getElementById('chartProducts'),
          [340, 280, 220, 180, 120, 90],
          ['Bags','Candles','Embroidery','Jewelry','Home','Other'])],
        ['chartChannels', () => drawDonut(document.getElementById('chartChannels'),
          [45,25,15,10,5],
          [CHART.inkSoft, CHART.brown, CHART.brownLight, CHART.beige, '#d9c8ad'],
          ['Instagram','Facebook','Groups','Referrals','Other'])],
        ['chartRetention', () => drawLineChart(document.getElementById('chartRetention'),
          [22,24,26,28,30,31,33,34],
          ['M1','M2','M3','M4','M5','M6','M7','M8'])],
        ['chartFunnel', () => drawFunnelChart(document.getElementById('chartFunnel'),
          ['Views','Visits','Messages','Leads','Orders','Repeat'],
          [10000,500,150,50,20,7])]
      ];
      redraw.forEach(([id, fn]) => {
        const el = document.getElementById(id);
        if (el && el.dataset.drawn === '1') fn();
      });
    }, 200);
  });

})();