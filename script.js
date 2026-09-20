/* =========================================================
   Heend Made — Interactions
   ========================================================= */
(() => {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Navbar: scroll state ---------- */
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");

  const closeMenu = () => {
    if (!navLinks || !hamburger) return;
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  };
  const toggleMenu = () => {
    if (!navLinks || !hamburger) return;
    const isOpen = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  };

  hamburger?.addEventListener("click", toggleMenu);
  navLinks?.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });
  document.addEventListener("click", e => {
    if (!navLinks || !hamburger) return;
    if (!navLinks.classList.contains("open")) return;
    if (navLinks.contains(e.target) || hamburger.contains(e.target)) return;
    closeMenu();
  });

  /* ---------- Active section indicator ---------- */
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const linkMap = new Map();
  document.querySelectorAll('.nav-link[href^="#"]').forEach(a => {
    const id = a.getAttribute("href").slice(1);
    if (!linkMap.has(id)) linkMap.set(id, []);
    linkMap.get(id).push(a);
  });

  if ("IntersectionObserver" in window && sections.length){
    const visible = new Map();
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        visible.set(en.target.id, en.isIntersecting ? en.intersectionRatio : 0);
      });
      let bestId = null, bestRatio = 0;
      visible.forEach((ratio, id) => {
        if (ratio > bestRatio){ bestRatio = ratio; bestId = id; }
      });
      if (bestId){
        linkMap.forEach((links, id) => {
          const active = id === bestId;
          links.forEach(a => a.classList.toggle("active", active));
        });
      }
    }, { rootMargin: "-45% 0px -45% 0px", threshold: [0, .15, .35, .6, .85, 1] });

    sections.forEach(s => io.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReduced){
    const ro = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting){
          en.target.classList.add("visible");
          ro.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(el => ro.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("visible"));
  }

  /* ---------- Pipeline sequential animation ---------- */
  const pipeline = document.getElementById("pipeline");
  if (pipeline && "IntersectionObserver" in window && !prefersReduced){
    const steps = pipeline.querySelectorAll(".pipe-step");
    const po = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting){
          steps.forEach((s, i) => {
            setTimeout(() => s.classList.add("visible"), i * 90);
          });
          po.unobserve(pipeline);
        }
      });
    }, { threshold: 0.15 });
    po.observe(pipeline);
  } else if (pipeline){
    pipeline.querySelectorAll(".pipe-step").forEach(s => s.classList.add("visible"));
  }

  /* ---------- Number counters ---------- */
  const counters = document.querySelectorAll("[data-counter]");
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.counter) || 0;
    const suffix = el.dataset.suffix || "";
    const dur = 1200;
    const start = performance.now();
    const fmt = (n) => n.toLocaleString("en-US");
    if (prefersReduced){
      el.textContent = fmt(target) + suffix;
      return;
    }
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (counters.length && "IntersectionObserver" in window){
    const co = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting){
          animateCounter(en.target);
          co.unobserve(en.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => co.observe(c));
  } else {
    counters.forEach(c => {
      c.textContent = (parseFloat(c.dataset.counter) || 0).toLocaleString("en-US") + (c.dataset.suffix || "");
    });
  }

  /* ---------- Commission calculator ---------- */
  const salesInput = document.getElementById("salesInput");
  const outDay = document.getElementById("outDay");
  const outDayComm = document.getElementById("outDayComm");
  const outDayPage = document.getElementById("outDayPage");
  const outMonth = document.getElementById("outMonth");
  const outMonthComm = document.getElementById("outMonthComm");
  const outMonthPage = document.getElementById("outMonthPage");

  const fmtEGP = (n) => n.toLocaleString("en-US") + " EGP";

  const updateCalc = () => {
    if (!salesInput) return;
    let perDay = parseFloat(salesInput.value);
    if (isNaN(perDay) || perDay < 0) perDay = 0;

    const comm  = perDay * 0.20;
    const page  = perDay * 0.10;
    const month = perDay * 30;

    outDay.textContent      = fmtEGP(Math.round(perDay));
    outDayComm.textContent  = fmtEGP(Math.round(comm));
    outDayPage.textContent  = fmtEGP(Math.round(page));
    outMonth.textContent    = fmtEGP(Math.round(month));
    outMonthComm.textContent= fmtEGP(Math.round(month * 0.20));
    outMonthPage.textContent= fmtEGP(Math.round(month * 0.10));
  };
  salesInput?.addEventListener("input", updateCalc);
  updateCalc();

  /* ---------- Poll ---------- */
  const pollOpts = document.querySelectorAll(".poll-opt");
  const pollFill = document.getElementById("pollFill");
  pollOpts.forEach(btn => {
    btn.addEventListener("click", () => {
      pollOpts.forEach(b => b.classList.remove("picked"));
      btn.classList.add("picked");
      if (pollFill){
        const fake = 55 + Math.random() * 30;
        pollFill.style.width = Math.round(fake) + "%";
      }
    });
  });

  /* ---------- Back to top ---------- */
  const backTop = document.getElementById("backTop");
  const onScrollTop = () => {
    if (!backTop) return;
    backTop.classList.toggle("show", window.scrollY > 500);
  };
  onScrollTop();
  window.addEventListener("scroll", onScrollTop, { passive: true });
  backTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  });

  /* ---------- FAQ: keep only one open ---------- */
  const detailsList = document.querySelectorAll("#accordion details");
  detailsList.forEach(d => {
    d.addEventListener("toggle", () => {
      if (d.open){
        detailsList.forEach(o => { if (o !== d) o.open = false; });
      }
    });
  });

  /* ---------- Card subtle tilt (desktop only, no reduced motion) ---------- */
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (canHover && !prefersReduced){
    const tilts = document.querySelectorAll(".team-card, .card");
    const maxTilt = 3.5;
    tilts.forEach(el => {
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width  - 0.5;
        const py = (e.clientY - r.top ) / r.height - 0.5;
        el.style.transform =
          `translateY(-4px) rotateX(${-py * maxTilt}deg) rotateY(${px * maxTilt}deg)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* ---------- Cursor glow (desktop only) ---------- */
  if (canHover && !prefersReduced){
    const glow = document.createElement("div");
    glow.setAttribute("aria-hidden", "true");
    glow.style.cssText = `
      position: fixed; top:0; left:0;
      width: 320px; height: 320px; border-radius: 50%;
      background: radial-gradient(circle, rgba(196,112,58,.14), transparent 62%);
      pointer-events: none; z-index: 3;
      transform: translate3d(-50%,-50%,0);
      transition: opacity .3s ease;
      opacity: 0;
    `;
    document.body.appendChild(glow);

    let rx = window.innerWidth / 2, ry = window.innerHeight / 2;
    let tx = rx, ty = ry;
    window.addEventListener("mousemove", e => {
      tx = e.clientX; ty = e.clientY;
      glow.style.opacity = "1";
    }, { passive: true });
    document.addEventListener("mouseleave", () => { glow.style.opacity = "0"; });

    const loop = () => {
      rx += (tx - rx) * 0.15;
      ry += (ty - ry) * 0.15;
      glow.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  /* ---------- Smooth scroll for in-page anchors (with sticky offset) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 78;
      window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
      history.replaceState(null, "", id);
    });
  });

})();