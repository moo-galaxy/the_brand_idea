/* =========================================================
   Heend Made — Design System
   ========================================================= */
:root{
  --cream:      #FAF5EE;
  --off-white:  #FFFDF9;
  --beige:      #EFE3D3;
  --sand:       #E3D2BC;
  --brown:      #8A5A3B;
  --brown-2:    #A67554;
  --dark-brown: #3B2417;
  --deep:       #241610;
  --text:       #2A1B12;
  --muted:      #7A6355;
  --line:       #E6D8C5;
  --accent:     #C4703A;
  --success:    #5B7B5A;
  --warn:       #B78634;

  --radius-sm: 10px;
  --radius:    16px;
  --radius-lg: 24px;
  --radius-xl: 32px;

  --shadow-sm: 0 2px 8px rgba(59,36,23,.06);
  --shadow:    0 10px 30px rgba(59,36,23,.08);
  --shadow-lg: 0 20px 50px rgba(59,36,23,.14);

  --ease: cubic-bezier(.22,.61,.36,1);
  --max: 1180px;

  --font-ar: "Cairo", "Tajawal", system-ui, -apple-system, "Segoe UI", Arial, sans-serif;
}

*,*::before,*::after{ box-sizing: border-box; }

html,body{
  margin:0; padding:0;
  overflow-x: hidden;
  background: var(--cream);
  color: var(--text);
  font-family: var(--font-ar);
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

img{ max-width:100%; height:auto; display:block; }
a{ color: inherit; text-decoration: none; }
button{ font-family: inherit; }
h1,h2,h3{ margin:0 0 .5em; line-height:1.3; letter-spacing:-.01em; }
h1{ font-size: clamp(1.9rem, 6vw, 3.4rem); font-weight: 800; }
h2{ font-size: clamp(1.5rem, 4.2vw, 2.4rem); font-weight: 800; }
h3{ font-size: clamp(1.05rem, 2.6vw, 1.35rem); font-weight: 700; }
p{ margin: 0 0 1em; }

/* Selection */
::selection{ background: var(--accent); color:#fff; }

/* Focus */
:focus-visible{
  outline: 3px solid var(--accent);
  outline-offset: 3px;
  border-radius: 8px;
}

/* Container */
.container{
  width: min(100% - 32px, var(--max));
  margin-inline: auto;
}
.container.narrow{ width: min(100% - 32px, 860px); }

/* Sections */
.section{ padding: clamp(56px, 9vw, 110px) 0; position: relative; }
.section.alt{ background: linear-gradient(180deg, #FBF6EF 0%, #F6ECDE 100%); }

.section-head{ text-align:center; margin: 0 auto 40px; max-width: 780px; }
.section-sub{ color: var(--muted); font-size: 1.02rem; }
.eyebrow{
  display:inline-block;
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .12em;
  color: var(--brown);
  background: #F1E4D3;
  border: 1px solid var(--line);
  padding: 6px 12px;
  border-radius: 999px;
  margin-bottom: 14px;
  text-transform: uppercase;
}

.center{ text-align:center; }
.center-note{
  text-align:center;
  font-weight: 700;
  color: var(--dark-brown);
  margin-top: 28px;
  font-size: clamp(1rem, 2.6vw, 1.15rem);
}
.muted{ color: var(--muted); }
.lead{ font-size: clamp(1rem, 2.6vw, 1.12rem); }

/* =========================================================
   Buttons
   ========================================================= */
.btn{
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  padding: 13px 22px;
  border-radius: 999px;
  font-weight: 700;
  font-size: .95rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform .25s var(--ease), background .25s var(--ease), color .25s var(--ease), box-shadow .25s var(--ease);
  min-height: 46px;
  text-align:center;
  white-space: normal;
  line-height: 1.3;
}
.btn-lg{ padding: 16px 28px; font-size: 1rem; min-height: 54px; }

.btn-primary{
  background: var(--dark-brown);
  color: #fff;
  box-shadow: var(--shadow-sm);
}
.btn-primary:hover{ background: var(--deep); transform: translateY(-2px); box-shadow: var(--shadow); }

.btn-outline{
  background: transparent;
  color: var(--dark-brown);
  border-color: var(--dark-brown);
}
.btn-outline:hover{ background: var(--dark-brown); color:#fff; transform: translateY(-2px); }

.btn-ghost{
  background: rgba(255,255,255,.7);
  color: var(--dark-brown);
  border-color: var(--line);
  backdrop-filter: blur(6px);
}
.btn-ghost:hover{ background:#fff; transform: translateY(-2px); box-shadow: var(--shadow-sm); }

/* =========================================================
   Navbar
   ========================================================= */
.navbar{
  position: sticky; top:0; z-index: 90;
  background: rgba(250,245,238,.85);
  backdrop-filter: saturate(140%) blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color .3s var(--ease), background .3s var(--ease), box-shadow .3s var(--ease);
}
.navbar.scrolled{
  border-bottom-color: var(--line);
  background: rgba(250,245,238,.95);
  box-shadow: var(--shadow-sm);
}
.nav-inner{
  display:flex; align-items:center; justify-content:space-between;
  min-height: 68px; gap: 12px;
}
.logo{ display:inline-flex; align-items:center; gap:10px; font-weight:800; }
.logo-mark{
  width: 36px; height: 36px;
  display:grid; place-items:center;
  border-radius: 12px;
  background: var(--dark-brown);
  color: #fff;
  font-weight: 900;
  font-family: "Cairo", sans-serif;
  box-shadow: var(--shadow-sm);
}
.logo-text{ font-size: 1.1rem; letter-spacing:-.01em; }
.logo-text em{ font-style: normal; color: var(--brown); }

.nav-links{
  display:flex; align-items:center; gap: 4px;
}
.nav-link{
  padding: 8px 10px;
  font-size: .9rem;
  font-weight: 600;
  color: var(--muted);
  border-radius: 8px;
  transition: color .2s var(--ease), background .2s var(--ease);
  position: relative;
}
.nav-link:hover{ color: var(--dark-brown); background: rgba(0,0,0,.04); }
.nav-link.active{ color: var(--dark-brown); }
.nav-link.active::after{
  content:""; position: absolute; bottom: 2px; right: 10px; left: 10px;
  height: 2px; background: var(--accent); border-radius: 2px;
}
.nav-cta{ margin-inline-start: 8px; }

.hamburger{
  display:none;
  background: transparent; border: 1px solid var(--line);
  width: 44px; height: 44px; border-radius: 12px;
  cursor:pointer; padding: 0;
  flex-direction: column; justify-content: center; align-items: center; gap: 4px;
}
.hamburger span{
  width: 20px; height: 2px; background: var(--dark-brown);
  border-radius: 2px; transition: transform .3s var(--ease), opacity .3s var(--ease);
}
.hamburger[aria-expanded="true"] span:nth-child(1){ transform: translateY(6px) rotate(45deg); }
.hamburger[aria-expanded="true"] span:nth-child(2){ opacity: 0; }
.hamburger[aria-expanded="true"] span:nth-child(3){ transform: translateY(-6px) rotate(-45deg); }

/* =========================================================
   Hero
   ========================================================= */
.hero{
  position: relative; overflow: hidden;
  padding: clamp(48px, 8vw, 96px) 0 clamp(56px, 9vw, 110px);
  background:
    radial-gradient(1200px 500px at 100% 0%, #F4E6D2 0%, transparent 60%),
    radial-gradient(900px 500px at 0% 100%, #F7ECDC 0%, transparent 55%),
    var(--cream);
}
.hero-grid{
  display:grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  position: relative; z-index: 2;
}
.hero-title{ display:flex; flex-direction:column; gap: 10px; }
.hero-sub{
  font-size: clamp(1rem, 2.8vw, 1.3rem);
  font-weight: 600;
  color: var(--brown);
  line-height: 1.6;
}
.hero-cta{ display:flex; flex-wrap:wrap; gap: 10px; margin: 18px 0 22px; }

.hero-stats{
  list-style:none; padding:0; margin: 0;
  display:flex; flex-wrap:wrap; gap: 14px 20px;
  color: var(--muted); font-size: .9rem; font-weight: 600;
}
.hero-stats li{ display:flex; align-items:center; gap:8px; }
.dot{ width:8px; height:8px; border-radius:50%; background: var(--accent); display:inline-block; }

/* Hero visual — System diagram */
.hero-visual{ display:flex; justify-content:center; }
.system-diagram{
  background: rgba(255,255,255,.7);
  backdrop-filter: blur(10px);
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  padding: clamp(18px, 4vw, 28px);
  box-shadow: var(--shadow-lg);
  display:flex; flex-direction: column; align-items:center;
  gap: 6px; width: 100%; max-width: 380px;
}
.sys-node{
  width:100%;
  text-align:center;
  padding: 10px 14px;
  border-radius: 12px;
  background: var(--off-white);
  border: 1px solid var(--line);
  font-weight: 700; font-size: .92rem;
  color: var(--dark-brown);
  transition: transform .3s var(--ease), background .3s var(--ease);
}
.sys-node:hover{ transform: translateY(-2px); background: #fff; }
.sys-node.accent{ background: #F3E3D2; border-color: #E9D2B9; }
.sys-node.success{ background: var(--dark-brown); color: #fff; border-color: var(--dark-brown); }
.sys-arrow{ color: var(--brown-2); font-size: 1rem; line-height: 1; }

.hero-bg{ position: absolute; inset: 0; z-index: 0; pointer-events:none; }
.blob{
  position:absolute; border-radius: 50%;
  filter: blur(60px); opacity: .55;
}
.blob.b1{ width: 320px; height: 320px; background: #EED9BE; top: -80px; inset-inline-end: -80px; }
.blob.b2{ width: 260px; height: 260px; background: #F2E2CB; bottom: -60px; inset-inline-start: -60px; }
.grid-dots{
  position:absolute; inset:0;
  background-image: radial-gradient(rgba(59,36,23,.10) 1px, transparent 1px);
  background-size: 22px 22px;
  mask-image: radial-gradient(circle at 50% 50%, #000 40%, transparent 75%);
  -webkit-mask-image: radial-gradient(circle at 50% 50%, #000 40%, transparent 75%);
  opacity:.6;
}

/* =========================================================
   Prose / Callout
   ========================================================= */
.prose{ max-width: 780px; margin: 0 auto; font-size: 1.02rem; color: #3A2A20; }
.callout{
  background: #FFF8EE;
  border: 1px solid var(--line);
  border-inline-start: 4px solid var(--accent);
  padding: 16px 18px;
  border-radius: 12px;
  margin-top: 12px;
  font-weight: 600;
}

/* =========================================================
   Compare
   ========================================================= */
.compare{
  display:grid;
  grid-template-columns: 1fr;
  gap: 18px;
  margin-top: 40px;
}
.compare-card{
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: clamp(20px, 4vw, 28px);
  box-shadow: var(--shadow-sm);
}
.compare-title{
  font-size: 1.1rem;
  display:inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
}
.compare-title.before{ background: #F4E3E0; color: #8A3E33; }
.compare-title.after{ background: #E4EDE0; color: #3F5C3E; }

.chain{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px; }
.chain li{
  padding: 10px 14px;
  border-radius: 12px;
  background: #FBF5EC;
  border: 1px solid var(--line);
  font-weight: 600;
  display: flex; justify-content: space-between; align-items: center; gap: 8px;
  flex-wrap: wrap;
}
.chain li.arrow{
  background: transparent; border: none; padding: 0; color: var(--brown-2);
  justify-content: center; font-size: 1rem;
}
.chain li.bad{ background: #F4E3E0; border-color: #E9C9C3; color:#7A2F24; }
.chain li.good{ background: var(--dark-brown); color:#fff; border-color: var(--dark-brown); justify-content:center; }
.chain li .tag{
  font-size: .8rem; color: var(--muted); font-weight: 700;
}

/* =========================================================
   Cards grid
   ========================================================= */
.grid{ display:grid; gap: 16px; grid-template-columns: 1fr; }
.cards-5{ grid-template-columns: 1fr; }
.teams-grid{ grid-template-columns: 1fr; }
.community-grid{ grid-template-columns: 1fr; }
.grid.two{ grid-template-columns: 1fr; margin-top: 28px; }

.card{
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow-sm);
  transition: transform .35s var(--ease), box-shadow .35s var(--ease), border-color .35s var(--ease);
  position: relative;
}
.card:hover{ transform: translateY(-4px); box-shadow: var(--shadow); border-color: #DCC7AA; }
.card-num{
  display:inline-block;
  font-weight: 800;
  color: var(--accent);
  font-size: .85rem;
  margin-bottom: 6px;
  letter-spacing: .05em;
}
.card h3{ margin-bottom: 6px; color: var(--dark-brown); }
.card p{ color: #4A3A2E; margin-bottom: 0; }

.team-card{
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow-sm);
  transition: transform .3s var(--ease), box-shadow .3s var(--ease);
}
.team-card:hover{ transform: translateY(-4px); box-shadow: var(--shadow); }
.team-card .ico{ font-size: 1.6rem; display:inline-block; margin-bottom: 6px; }
.team-card h3{ color: var(--dark-brown); margin-bottom: 4px; }
.team-card p{ color: #4A3A2E; margin: 0; font-size: .95rem; }

/* =========================================================
   Pipeline
   ========================================================= */
.pipeline{
  display:flex; flex-direction:column; align-items:center; gap: 8px;
  margin: 20px auto 0; max-width: 620px;
}
.pipe-step{
  width: 100%;
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px 18px;
  text-align: center;
  font-weight: 700;
  color: var(--dark-brown);
  box-shadow: var(--shadow-sm);
  opacity: 0; transform: translateY(14px);
  transition: opacity .6s var(--ease), transform .6s var(--ease);
  display: flex; flex-direction: column; gap: 4px;
}
.pipe-step em{ font-style: normal; color: var(--muted); font-weight: 600; font-size: .82rem; }
.pipe-step.visible{ opacity: 1; transform: translateY(0); }
.pipe-step.success{ background: var(--dark-brown); color: #fff; border-color: var(--dark-brown); }
.pipe-arrow{ color: var(--brown-2); font-size: 1.1rem; }

/* =========================================================
   Impact chain
   ========================================================= */
.impact-chain{ display:flex; flex-direction: column; gap: 10px; }
.impact-row{
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 10px;
  align-items: center;
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px 16px;
  box-shadow: var(--shadow-sm);
  font-size: .95rem;
}
.impact-row .who{ font-weight: 800; color: var(--dark-brown); }
.impact-row .arrow{ color: var(--accent); font-weight: 800; }
.impact-row .what{ color: #4A3A2E; }

.impact-list{ list-style:none; padding:0; margin: 0; display:flex; flex-direction:column; gap:10px; }
.impact-list li{
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 14px 16px;
  box-shadow: var(--shadow-sm);
  font-size: .98rem;
}
.impact-list strong{ color: var(--dark-brown); }

/* =========================================================
   Dashboard
   ========================================================= */
.dash{
  margin-top: 28px;
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: clamp(18px, 4vw, 26px);
  box-shadow: var(--shadow);
}
.dash-top{
  display:flex; flex-wrap:wrap; gap: 10px; align-items:center; justify-content:space-between;
  margin-bottom: 18px;
}
.badge-warn{
  background: #FBEFD8; color: #7A5315; border: 1px solid #EED9AF;
  padding: 6px 12px; border-radius: 999px;
  font-size: .78rem; font-weight: 800;
}
.dash-sub{ font-size: .85rem; color: var(--muted); }

.kpis{
  display:grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
  margin-bottom: 22px;
}
.kpi{
  background: #FBF5EC;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 14px;
  display: flex; flex-direction: column; gap: 4px;
}
.kpi-label{ font-size: .82rem; color: var(--muted); font-weight: 700; }
.kpi-value{ font-size: clamp(1.1rem, 3.4vw, 1.4rem); font-weight: 800; color: var(--dark-brown); }

.funnel{ display:flex; flex-direction:column; gap: 10px; }
.funnel-row{
  width: var(--w, 100%);
  max-width: 100%;
  min-height: 44px;
  background: linear-gradient(90deg, #3B2417 0%, #7A4E2F 100%);
  border-radius: 10px;
  display:flex; align-items:center; padding: 0 14px;
  color:#fff; font-weight: 700; font-size: .88rem;
  transition: width .8s var(--ease);
  margin-inline-start: auto; /* RTL: shrink from right */
  box-shadow: var(--shadow-sm);
  word-break: break-word;
}
.funnel-row:nth-child(1){ background: linear-gradient(90deg,#241610,#3B2417); }
.funnel-row:nth-child(2){ background: linear-gradient(90deg,#3B2417,#5C3A24); }
.funnel-row:nth-child(3){ background: linear-gradient(90deg,#5C3A24,#7A4E2F); }
.funnel-row:nth-child(4){ background: linear-gradient(90deg,#7A4E2F,#9A6743); }
.funnel-row:nth-child(5){ background: linear-gradient(90deg,#9A6743,#B98A5E); }
.funnel-row:nth-child(6){ background: linear-gradient(90deg,#B98A5E,#C4703A); }
.funnel-label{ white-space: normal; }

.note{ font-size: .82rem; color: var(--muted); margin-top: 14px; }

/* Decisions */
.decisions{ margin-top: 40px; }
.mini-title{
  display:inline-block;
  font-weight: 800;
  color: var(--dark-brown);
  font-size: 1.05rem;
  margin-bottom: 12px;
}
.flow-inline{
  display:flex; flex-wrap: wrap; gap: 8px; align-items:center;
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px 16px;
  box-shadow: var(--shadow-sm);
}
.flow-inline span{
  padding: 6px 12px;
  background: #FBF5EC;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-weight: 700; font-size: .86rem;
  color: var(--dark-brown);
}
.flow-inline span.arrow{ background: transparent; border: none; padding: 0; color: var(--accent); }
.flow-inline span.good{ background: var(--dark-brown); color:#fff; border-color: var(--dark-brown); }

.quote{
  background: #FFF8EE;
  border: 1px solid var(--line);
  border-inline-start: 4px solid var(--accent);
  padding: 14px 16px;
  border-radius: 12px;
  color: #4A3A2E;
  font-weight: 600;
}

/* =========================================================
   Poll
   ========================================================= */
.poll{ margin-top: 12px; }
.poll-opt{
  background: #FBF5EC;
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 8px 14px;
  font-weight: 700;
  color: var(--dark-brown);
  cursor: pointer;
  margin-inline-end: 6px; margin-bottom: 8px;
  transition: background .2s var(--ease), color .2s var(--ease);
}
.poll-opt:hover{ background: #fff; }
.poll-opt.picked{ background: var(--dark-brown); color:#fff; }
.poll-bar{
  height: 10px; background: #F1E4D3; border-radius: 999px; overflow:hidden;
  margin-top: 6px;
}
.poll-fill{
  display:block; height: 100%; width: 0%;
  background: linear-gradient(90deg, var(--accent), #8A5A3B);
  transition: width .6s var(--ease);
}
.poll-hint{ display:block; margin-top: 6px; color: var(--muted); font-size: .8rem; }

/* =========================================================
   Community data
   ========================================================= */
.community-data{ margin-top: 36px; }

/* =========================================================
   Chips
   ========================================================= */
.chips{
  display:flex; flex-wrap:wrap; gap: 8px; justify-content:center;
  margin: 0 0 32px;
}
.chip{
  padding: 8px 14px;
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: 999px;
  font-weight: 700; font-size: .88rem;
  color: var(--dark-brown);
  box-shadow: var(--shadow-sm);
  transition: transform .2s var(--ease), background .2s var(--ease);
}
.chip:hover{ transform: translateY(-2px); background:#fff; }

/* =========================================================
   Funnel visual (marketing)
   ========================================================= */
.funnel-visual{
  display:flex; flex-direction: column; gap: 10px;
  margin: 22px auto 40px;
  max-width: 620px;
}
.fv-step{
  padding: 16px 18px;
  border-radius: 14px;
  background: var(--off-white);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  display:flex; flex-direction:column; gap: 4px;
  margin-inline: auto;
  width: 100%;
}
.fv-step strong{ color: var(--dark-brown); }
.fv-step span{ color: var(--muted); font-size: .88rem; }
.fv-step.s1{ width: 100%; }
.fv-step.s2{ width: 88%; }
.fv-step.s3{ width: 76%; }
.fv-step.s4{ width: 64%; }
.fv-step.s5{ width: 52%; }
.fv-step.s6{ width: 42%; }
@media (max-width: 480px){
  .fv-step.s2{ width: 94%; }
  .fv-step.s3{ width: 88%; }
  .fv-step.s4{ width: 82%; }
  .fv-step.s5{ width: 76%; }
  .fv-step.s6{ width: 70%; }
}

/* =========================================================
   Steps / Check
   ========================================================= */
.check{
  list-style:none; padding: 0; margin: 6px 0 0;
  display:flex; flex-direction: column; gap: 8px;
}
.check li{
  position: relative;
  padding-inline-start: 26px;
  color: #4A3A2E;
  font-weight: 600;
  font-size: .95rem;
}
.check li::before{
  content:"✓";
  position: absolute; inset-inline-start: 0; top: 0;
  width: 18px; height: 18px;
  display:grid; place-items:center;
  background: var(--dark-brown); color:#fff;
  border-radius: 50%;
  font-size: .7rem; font-weight: 900;
  margin-top: 5px;
}
.center-list{ align-items:center; }
.center-list li{ padding-inline-start: 0; padding-top: 26px; text-align:center; }
.center-list li::before{ inset-inline: 0; margin-inline: auto; }

.steps{
  padding-inline-start: 20px;
  color: #4A3A2E;
  margin: 6px 0 10px;
}
.steps li{ margin-bottom: 6px; font-weight: 600; }

/* =========================================================
   Commission donut
   ========================================================= */
.commission{ margin-top: 40px; }
.donut{
  display:flex; flex-wrap: wrap; gap: 22px; align-items:center;
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 22px;
  box-shadow: var(--shadow-sm);
}
.donut-chart{
  --p: 20;
  width: 150px; height: 150px; border-radius: 50%;
  background: conic-gradient(
    var(--dark-brown) 0 calc(var(--p) * 1%),
    var(--accent) calc(var(--p) * 1%) 100%
  );
  display:grid; place-items:center;
  position: relative;
  flex-shrink: 0;
}
.donut-chart::before{
  content:""; position: absolute; inset: 22px;
  background: var(--off-white);
  border-radius: 50%;
}
.donut-center{
  position: relative;
  font-weight: 900;
  color: var(--dark-brown);
  font-size: 1.2rem;
}
.donut-legend{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; min-width: 0; flex: 1 1 240px; }
.donut-legend li{ display:flex; gap: 10px; align-items: flex-start; color:#4A3A2E; font-weight: 600; font-size: .95rem; }
.sw{ width: 14px; height: 14px; border-radius: 4px; flex-shrink: 0; margin-top: 5px; }
.sw1{ background: var(--dark-brown); }
.sw2{ background: var(--accent); }

/* =========================================================
   Calculator
   ========================================================= */
.calc{ margin-top: 40px; }
.calc-row{
  display:flex; flex-wrap: wrap; gap: 12px; align-items:center;
  margin-bottom: 14px;
}
.calc-row label{ font-weight: 700; color: var(--dark-brown); }
.calc-row input{
  flex: 1 1 160px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: #fff;
  font-family: inherit;
  font-weight: 700;
  color: var(--dark-brown);
  font-size: 1rem;
  min-width: 0;
}
.calc-grid{
  display:grid; grid-template-columns: repeat(2, 1fr); gap: 10px;
}
.calc-out{
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
  display:flex; flex-direction:column; gap:2px;
}
.calc-out span{ font-size: .78rem; color: var(--muted); font-weight: 700; }
.calc-out strong{ font-size: 1rem; color: var(--dark-brown); }

/* =========================================================
   Growth loop
   ========================================================= */
.loop{ margin-top: 50px; text-align:center; }
.loop-ring{
  position: relative;
  width: min(320px, 90vw); height: min(320px, 90vw);
  margin: 20px auto;
  border-radius: 50%;
  border: 2px dashed var(--line);
}
.loop-center{
  position: absolute; inset: 50% auto auto 50%; transform: translate(-50%,-50%);
  background: var(--dark-brown); color:#fff;
  padding: 14px 18px; border-radius: 999px;
  font-weight: 800; font-size: .9rem;
  box-shadow: var(--shadow);
}
.loop-node{
  position: absolute;
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 6px 12px;
  font-weight: 700; font-size: .78rem;
  color: var(--dark-brown);
  box-shadow: var(--shadow-sm);
  white-space: nowrap;
  transform: translate(-50%,-50%);
}
.loop-node.n1{ top: 0%;    left: 50%; }
.loop-node.n2{ top: 14.6%; left: 85.4%; }
.loop-node.n3{ top: 50%;   left: 100%; }
.loop-node.n4{ top: 85.4%; left: 85.4%; }
.loop-node.n5{ top: 100%;  left: 50%; }
.loop-node.n6{ top: 85.4%; left: 14.6%; }
.loop-node.n7{ top: 50%;   left: 0%; }
.loop-node.n8{ top: 14.6%; left: 14.6%; }

/* =========================================================
   Roadmap
   ========================================================= */
.roadmap{
  list-style:none; padding: 0; margin: 0;
  display:flex; flex-direction: column; gap: 14px;
  position: relative;
}
.roadmap li{
  position: relative;
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px 18px 18px 20px;
  box-shadow: var(--shadow-sm);
  transition: transform .3s var(--ease), box-shadow .3s var(--ease);
}
.roadmap li:hover{ transform: translateX(-4px); box-shadow: var(--shadow); }
.roadmap .phase{
  display:inline-block;
  font-size: .75rem; font-weight: 800; letter-spacing: .1em;
  background: #F1E4D3; color: var(--brown);
  padding: 4px 10px; border-radius: 999px;
  margin-bottom: 8px;
}
.roadmap h3{ margin: 0 0 4px; color: var(--dark-brown); }
.roadmap p{ margin: 0; color: #4A3A2E; font-size: .95rem; }

/* =========================================================
   Join
   ========================================================= */
.join{ text-align: center; }
.join-actions{
  display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;
  margin: 8px 0 18px;
}
.join-phone{
  font-weight: 700; color: var(--dark-brown);
}
.join-phone a{ color: var(--accent); text-decoration: underline; text-underline-offset: 4px; }

.cta-final{ background: linear-gradient(180deg, #F7ECDC 0%, #F1E1CA 100%); text-align:center; }
.cta-final h2{ font-size: clamp(1.6rem, 5vw, 2.6rem); }

/* =========================================================
   FAQ Accordion
   ========================================================= */
.accordion{ display: flex; flex-direction: column; gap: 10px; }
.accordion details{
  background: var(--off-white);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 4px 16px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow .3s var(--ease), border-color .3s var(--ease);
}
.accordion details[open]{ box-shadow: var(--shadow); border-color: #DCC7AA; }
.accordion summary{
  list-style: none;
  cursor: pointer;
  padding: 14px 0;
  font-weight: 800;
  color: var(--dark-brown);
  display: flex; align-items:center; justify-content: space-between; gap: 10px;
  font-size: 1rem;
}
.accordion summary::-webkit-details-marker{ display: none; }
.accordion summary::after{
  content: "+";
  font-size: 1.3rem; font-weight: 400; color: var(--brown);
  transition: transform .3s var(--ease);
  flex-shrink: 0;
}
.accordion details[open] summary::after{ transform: rotate(45deg); }
.accordion .ans{
  padding: 0 0 16px;
  color: #4A3A2E;
  font-size: .96rem;
}

/* =========================================================
   Footer
   ========================================================= */
.footer{
  background: var(--deep);
  color: #E9DBCB;
  padding: 48px 0 24px;
  margin-top: 20px;
}
.footer-grid{
  display: grid; grid-template-columns: 1fr; gap: 24px;
  padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,.08);
}
.footer .logo{ color: #fff; }
.footer .logo-mark{ background: var(--accent); }
.footer .logo-text em{ color: #F0B583; }
.footer-tag{ margin: 12px 0 4px; font-weight: 600; color: #E9DBCB; }
.footer-tag-alt{ margin: 0; color: #B9A692; font-size: .92rem; }

.footer-links{ display: flex; flex-wrap: wrap; gap: 10px 18px; }
.footer-links a{
  color: #D8C6B1; font-weight: 600;
  padding: 4px 0;
  border-bottom: 1px solid transparent;
  transition: color .2s var(--ease), border-color .2s var(--ease);
}
.footer-links a:hover{ color: #fff; border-bottom-color: var(--accent); }

.footer-bottom{
  display: flex; flex-wrap: wrap; gap: 8px; justify-content: space-between;
  padding-top: 16px; color: #A89380; font-size: .82rem;
}

/* =========================================================
   Floating WhatsApp + Back To Top
   ========================================================= */
.wa-float{
  position: fixed;
  inset-block-end: max(18px, env(safe-area-inset-bottom));
  inset-inline-start: 18px;
  width: 56px; height: 56px;
  border-radius: 50%;
  background: #25D366;
  color: #fff;
  display: grid; place-items: center;
  box-shadow: 0 12px 28px rgba(37,211,102,.35);
  z-index: 80;
  transition: transform .25s var(--ease), box-shadow .25s var(--ease);
  animation: wa-pulse 2.6s infinite;
}
.wa-float:hover{ transform: translateY(-3px) scale(1.04); }
@keyframes wa-pulse{
  0%,100%{ box-shadow: 0 12px 28px rgba(37,211,102,.35); }
  50%    { box-shadow: 0 12px 28px rgba(37,211,102,.65); }
}

.back-top{
  position: fixed;
  inset-block-end: max(18px, env(safe-area-inset-bottom));
  inset-inline-end: 18px;
  width: 46px; height: 46px;
  border-radius: 50%;
  background: var(--dark-brown);
  color: #fff;
  border: none;
  display: grid; place-items: center;
  z-index: 79;
  cursor: pointer;
  opacity: 0; pointer-events: none;
  transform: translateY(10px);
  transition: opacity .3s var(--ease), transform .3s var(--ease);
}
.back-top.show{ opacity: 1; pointer-events: auto; transform: translateY(0); }

/* =========================================================
   Reveal animations
   ========================================================= */
.reveal{
  opacity: 0;
  transform: translateY(22px);
  transition: opacity .7s var(--ease), transform .7s var(--ease);
  will-change: opacity, transform;
}
.reveal.visible{ opacity: 1; transform: translateY(0); }
.delay-1{ transition-delay: .08s; }
.delay-2{ transition-delay: .16s; }
.delay-3{ transition-delay: .24s; }
.delay-4{ transition-delay: .32s; }

/* Mono for promo text */
.mono{
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  background: #F3E6D5;
  padding: 2px 8px;
  border-radius: 6px;
  display: inline-block;
  margin: 3px 0;
  font-size: .88rem;
}

/* =========================================================
   Responsive — Mobile-first => grow up
   ========================================================= */

/* Small phones */
@media (min-width: 480px){
  .grid.two{ grid-template-columns: 1fr 1fr; }
  .kpis{ grid-template-columns: repeat(2, 1fr); }
  .calc-grid{ grid-template-columns: repeat(3, 1fr); }
}

/* Tablets */
@media (min-width: 720px){
  .hero-grid{ grid-template-columns: 1.15fr .85fr; gap: 40px; }
  .compare{ grid-template-columns: 1fr 1fr; }
  .cards-5{ grid-template-columns: repeat(2, 1fr); }
  .teams-grid{ grid-template-columns: repeat(2, 1fr); }
  .community-grid{ grid-template-columns: repeat(2, 1fr); }
  .kpis{ grid-template-columns: repeat(4, 1fr); }
  .footer-grid{ grid-template-columns: 1.4fr 1fr; }
}

/* Desktop */
@media (min-width: 960px){
  .cards-5{ grid-template-columns: repeat(3, 1fr); }
  .teams-grid{ grid-template-columns: repeat(3, 1fr); }
  .community-grid{ grid-template-columns: repeat(3, 1fr); }
  .roadmap{ flex-direction: row; flex-wrap: wrap; }
  .roadmap li{ flex: 1 1 280px; }
}

/* Wide desktop */
@media (min-width: 1280px){
  .teams-grid{ grid-template-columns: repeat(4, 1fr); }
}

/* =========================================================
   Mobile Nav (hamburger)
   ========================================================= */
@media (max-width: 959px){
  .nav-links{
    position: fixed;
    inset: 68px 12px auto 12px;
    background: rgba(255,253,249,.98);
    backdrop-filter: blur(14px);
    border: 1px solid var(--line);
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    flex-direction: column;
    align-items: stretch;
    padding: 12px;
    gap: 4px;
    transform: translateY(-12px);
    opacity: 0; pointer-events: none;
    transition: opacity .25s var(--ease), transform .25s var(--ease);
    max-height: calc(100vh - 90px);
    overflow-y: auto;
    z-index: 95;
  }
  .nav-links.open{
    opacity: 1; pointer-events: auto; transform: translateY(0);
  }
  .nav-link{
    padding: 12px 14px;
    font-size: 1rem;
    border-radius: 12px;
  }
  .nav-link.active{ background: #F1E4D3; }
  .nav-link.active::after{ display:none; }
  .nav-cta{
    margin: 8px 4px 4px;
    width: calc(100% - 8px);
  }
  .hamburger{ display: inline-flex; }
}

/* =========================================================
   Reduced motion
   ========================================================= */
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
    scroll-behavior: auto !important;
  }
  .reveal{ opacity: 1; transform: none; }
  .pipe-step{ opacity: 1; transform: none; }
  .wa-float{ animation: none; }
}

/* =========================================================
   Tiny screens (320px-360px)
   ========================================================= */
@media (max-width: 360px){
  .container{ width: calc(100% - 24px); }
  .btn{ padding: 12px 16px; font-size: .88rem; }
  .logo-text{ font-size: 1rem; }
  .eyebrow{ font-size: .72rem; padding: 5px 10px; }
  .card, .team-card{ padding: 16px; }
  .impact-row{
    grid-template-columns: 1fr;
    text-align: center; gap: 4px;
  }
  .impact-row .arrow{ transform: rotate(90deg); }
  .dash{ padding: 14px; }
  .donut-chart{ width: 120px; height: 120px; }
  .donut-chart::before{ inset: 18px; }
}

/* Ensure no horizontal overflow */
html,body{ max-width: 100%; }
*{ word-wrap: break-word; overflow-wrap: break-word; }