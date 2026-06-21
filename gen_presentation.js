const fs   = require('fs');
const path = require('path');

const logoSrc  = fs.readFileSync('C:/Users/MC_PAL/.gemini/antigravity/brain/7eb90f9b-6b92-4696-ab83-1302664fafba/scratch/bzu_base64.txt',   'utf8').trim();
const introSrc = fs.readFileSync('C:/Users/MC_PAL/.gemini/antigravity/brain/7eb90f9b-6b92-4696-ab83-1302664fafba/scratch/intro_base64.txt', 'utf8').trim();

// Video uses relative path (same folder as HTML)
const videoFile = 'I just graduatedddd danceeeeeing.mp4';
const TOTAL = 10;

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>الأمومة في ظل التهجير القسري – يسرى زاهر محروم</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
<style>
/* ══════ RESET ══════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  /* Pale, emotional palette */
  --rose-pale:  #fdf5f7; --rose-mid:  #eeccd6; --rose-acc:  #b88090; --rose-dk:  #8a5060;
  --sage-pale:  #f5faf5; --sage-mid:  #cce0cc; --sage-acc:  #7a9e7a; --sage-dk:  #507050;
  --warm-pale:  #fdfaf5; --warm-mid:  #ecdcc4; --warm-acc:  #a88860; --warm-dk:  #7a6040;
  --lav-pale:   #f8f6fc; --lav-mid:   #dad4ec; --lav-acc:   #9088b8; --lav-dk:   #6858a0;
  --sky-pale:   #f4f8fc; --sky-mid:   #ccdde8; --sky-acc:   #7aa0c0; --sky-dk:   #487090;
  --cream:      #fefcf8;

  --t-dark:  #1e1428;
  --t-mid:   #3c2b48;
  --t-soft:  #5c4a6a;
  --t-light: #8a7398;
}

/* ══════ BASE ══════ */
html, body { width:100%; height:100%; overflow:hidden; font-family:'Cairo','Amiri',serif; background:#120b1c; }

/* ══════ PRESENTATION ══════ */
#presentation { width:100vw; height:100vh; position:relative; }

/* ══════ SLIDES ══════ */
.slide {
  position:absolute; inset:0;
  display:flex; flex-direction:column;
  align-items:center; justify-content:center;
  opacity:0; pointer-events:none;
  transition:opacity .65s cubic-bezier(.4,0,.2,1), transform .65s cubic-bezier(.4,0,.2,1);
  transform:translateX(-50px);
  padding:20px;
}
.slide.active  { opacity:1; pointer-events:all; transform:translateX(0); }
.slide.exit    { opacity:0; transform:translateX(50px); }

/* ══════ FRAME ══════ */
.slide-frame {
  width:94vw; max-width:1440px;
  height:80vh; /* Fixed height ratio to leave space for nav and prevent overlaps */
  border-radius:28px;
  padding:48px 64px;
  position:relative; overflow:hidden;
  display:flex; flex-direction:column; align-items:center;
  box-shadow:0 30px 90px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.08);
  transition:all .4s cubic-bezier(.4,0,.2,1);
}

/* Fullscreen state styling */
body.fullscreen-active .slide {
  padding:0 !important;
}
body.fullscreen-active .slide-frame {
  width:100vw !important;
  max-width:100vw !important;
  height:100vh !important;
  max-height:100vh !important;
  border-radius:0 !important;
  box-shadow:none !important;
  padding:60px 80px 110px !important;
}

.bg-rose  { background:linear-gradient(160deg, var(--rose-pale) 0%, #faf0f3 100%); }
.bg-sage  { background:linear-gradient(160deg, var(--sage-pale) 0%, #eef6ee 100%); }
.bg-warm  { background:linear-gradient(160deg, var(--warm-pale) 0%, #f8f2e6 100%); }
.bg-lav   { background:linear-gradient(160deg, var(--lav-pale)  0%, #f0eef8 100%); }
.bg-sky   { background:linear-gradient(160deg, var(--sky-pale)  0%, #ecf3f9 100%); }
.bg-cream { background:linear-gradient(160deg, var(--cream)     0%, #f6f2e8 100%); }

/* Orbs */
.slide-frame::before {
  content:''; position:absolute; top:-90px; right:-90px;
  width:320px; height:320px; border-radius:50%;
  opacity:.12; pointer-events:none; z-index:0;
}
.slide-frame::after {
  content:''; position:absolute; bottom:-70px; left:-70px;
  width:240px; height:240px; border-radius:50%;
  opacity:.09; pointer-events:none; z-index:0;
}
.bg-rose::before,  .bg-rose::after  { background:var(--rose-acc); }
.bg-sage::before,  .bg-sage::after  { background:var(--sage-acc); }
.bg-warm::before,  .bg-warm::after  { background:var(--warm-acc); }
.bg-lav::before,   .bg-lav::after   { background:var(--lav-acc); }
.bg-sky::before,   .bg-sky::after   { background:var(--sky-acc); }
.bg-cream::before, .bg-cream::after { background:var(--warm-acc); }

.slide-badge {
  position:absolute; top:24px; left:30px;
  font-size:.9rem; color:var(--t-light);
  letter-spacing:2px; font-weight:700; z-index:2;
}

/* ══════ TYPOGRAPHY ══════ */
.section-label {
  font-size:clamp(1rem, 1.4vw, 1.25rem); letter-spacing:3px;
  font-weight:700; opacity:.65; margin-bottom:12px;
  display:block; text-align:center; z-index:2; position:relative;
}

.accent-bar {
  height:6px; border-radius:99px; width:90px;
  margin:0 auto 32px; position:relative; z-index:2;
}
.bar-rose  { background:linear-gradient(90deg,var(--rose-dk),var(--rose-mid)); }
.bar-sage  { background:linear-gradient(90deg,var(--sage-dk),var(--sage-mid)); }
.bar-warm  { background:linear-gradient(90deg,var(--warm-dk),var(--warm-mid)); }
.bar-lav   { background:linear-gradient(90deg,var(--lav-dk), var(--lav-mid)); }
.bar-sky   { background:linear-gradient(90deg,var(--sky-dk), var(--sky-mid)); }
.bar-cream { background:linear-gradient(90deg,var(--warm-dk),var(--warm-mid)); }

.slide-title {
  font-family:'Amiri',serif;
  font-size:clamp(2.2rem, 3.8vw, 3.2rem);
  font-weight:800; color:var(--t-dark);
  margin-bottom:28px; line-height:1.45;
  text-align:center; position:relative; z-index:2; width:100%;
}

.content-body {
  flex:1; display:flex; flex-direction:column;
  justify-content:center; align-items:center; width:100%;
  position:relative; z-index:2;
}

/* Bullets - Center aligned */
.bullet-list {
  list-style:none; display:flex; flex-direction:column; gap:20px; width:100%; max-width:960px; align-items:center;
}
.bullet-list li {
  font-size:clamp(1.4rem, 2.2vw, 1.85rem);
  font-weight:700; color:var(--t-mid); line-height:1.8; text-align:center;
}

/* Quote box - Center aligned bold */
.quote-box {
  border-right:4px solid; padding:24px 32px;
  border-radius:0 18px 18px 0; margin:22px 0;
  font-family:'Amiri',serif;
  font-size:clamp(1.5rem, 2.5vw, 2.1rem);
  font-weight:700; color:var(--t-dark); line-height:1.8;
  text-align:center; width:100%; max-width:960px;
}
.quote-rose  { border-color:var(--rose-acc); background:rgba(184,128,144,.07); }
.quote-lav   { border-color:var(--lav-acc);  background:rgba(144,136,184,.07); }
.quote-warm  { border-color:var(--warm-acc); background:rgba(168,136, 96,.07); }
.quote-sky   { border-color:var(--sky-acc);  background:rgba(122,160,192,.07); }

.divider {
  height:1px;
  background:linear-gradient(90deg,transparent,rgba(0,0,0,.10),transparent);
  margin:20px 0; width:100%;
}

.two-col { display:grid; grid-template-columns:1.1fr 0.9fr; gap:36px; align-items:start; width:100%; max-width:1050px; }
.col-label { font-size:clamp(1.1rem, 1.5vw, 1.3rem); font-weight:700; letter-spacing:1.5px; margin-bottom:12px; opacity:.70; display:block; text-align:center; }

/* ══════ CARDS ══════ */
.cards-col { display:flex; flex-direction:column; gap:14px; }
.card {
  background:rgba(255,255,255,.85); border-radius:18px;
  padding:22px 24px; text-align:center;
  box-shadow:0 4px 18px rgba(0,0,0,.06);
  transition:transform .3s, box-shadow .3s; backdrop-filter:blur(8px);
}
.card:hover { transform:translateY(-5px); box-shadow:0 10px 28px rgba(0,0,0,.12); }
.card-text { font-size:clamp(1.2rem, 1.8vw, 1.5rem); font-weight:700; color:var(--t-mid); line-height:1.65; }

/* ══════ PARTICIPANTS ══════ */
.participants-grid {
  display:grid; grid-template-columns:repeat(3,1fr);
  gap:20px; margin-top:12px; width:100%; max-width:1050px;
}
.participant-card {
  background:rgba(255,255,255,.85); border-radius:18px;
  padding:24px 20px; box-shadow:0 6px 20px rgba(0,0,0,.06);
  border-top:4px solid; transition:transform .3s, box-shadow .3s; text-align:center;
  backdrop-filter:blur(8px);
}
.participant-card:hover { transform:translateY(-6px); box-shadow:0 12px 30px rgba(0,0,0,.12); }
.participant-name   { font-weight:800; font-size:clamp(1.3rem, 1.8vw, 1.6rem); color:var(--t-dark); margin-bottom:10px; }
.participant-detail { font-size:clamp(1.05rem, 1.5vw, 1.25rem); font-weight:700; color:var(--t-soft); line-height:1.7; }

/* ══════ THEORY GRID ══════ */
.theory-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; width:100%; max-width:1050px; }
.theory-card {
  background:rgba(255,255,255,.85); border-radius:20px;
  padding:32px 24px; box-shadow:0 6px 20px rgba(0,0,0,.06);
  text-align:center; transition:transform .3s, box-shadow .3s; backdrop-filter:blur(8px);
}
.theory-card:hover { transform:translateY(-6px); box-shadow:0 12px 30px rgba(0,0,0,.12); }
.theory-card .thinker { font-family:'Amiri',serif; font-size:clamp(1.3rem, 1.8vw, 1.6rem); font-weight:800; color:var(--t-dark); margin-bottom:12px; line-height:1.4; }
.theory-card .concept { font-size:clamp(1.15rem, 1.6vw, 1.35rem); font-weight:700; color:var(--t-mid); line-height:1.75; }

/* ══════ TITLE SLIDE ══════ */
#slide-0 .slide-frame { justify-content:center; text-align:center; }
.logo-img { width:clamp(280px, 22vw, 380px); margin-bottom:24px; filter:drop-shadow(0 4px 12px rgba(0,0,0,.08)); position:relative; z-index:2; }
.main-title {
  font-family:'Amiri',serif;
  font-size:clamp(2.4rem, 4.2vw, 3.8rem);
  font-weight:800; color:var(--t-dark); line-height:1.6;
  margin-bottom:32px; max-width:960px; text-align:center; position:relative; z-index:2;
}
.presenter-box {
  background:rgba(255,255,255,.85); border-radius:20px;
  padding:28px 56px; box-shadow:0 6px 24px rgba(0,0,0,.08);
  backdrop-filter:blur(8px); position:relative; z-index:2; text-align:center;
}
.presenter-name { font-weight:700; font-size:clamp(1.2rem, 1.8vw, 1.5rem); color:var(--t-dark); margin-bottom:8px; }
.presenter-sup  { font-size:clamp(1.1rem, 1.6vw, 1.35rem); font-weight:700; color:var(--t-soft); margin-bottom:8px; }
.presenter-date { font-size:clamp(0.95rem, 1.4vw, 1.15rem); font-weight:600; color:var(--t-light); }

/* ══════ INTRO SLIDE (photo BG centered glass) ══════ */
#slide-1 .slide-frame { padding:40px !important; justify-content:center; align-items:center; }
.intro-bg {
  position:absolute; inset:0;
  background-size:cover; background-position:center;
  border-radius:28px; z-index:0;
}
body.fullscreen-active .intro-bg { border-radius:0 !important; }
.intro-bg::after {
  content:''; position:absolute; inset:0;
  background:rgba(0, 0, 0, 0.22); /* Light uniform overlay so photo is clearly visible */
  border-radius:28px;
}
body.fullscreen-active .intro-bg::after { border-radius:0 !important; }

.intro-glass {
  position:relative; z-index:2;
  background:rgba(255, 255, 255, 0.45); backdrop-filter:blur(18px) saturate(1.2);
  border:1px solid rgba(255, 255, 255, 0.5);
  border-radius:24px; padding:48px 60px; width:92%; max-width:960px;
  display:flex; flex-direction:column; align-items:center; gap:20px;
  box-shadow:0 15px 40px rgba(0, 0, 0, 0.15);
}
body.fullscreen-active .intro-glass {
  padding:50px 80px 60px !important;
}
.intro-question {
  font-family:'Amiri',serif;
  font-size:clamp(1.5rem, 2.5vw, 2.1rem);
  font-weight:800; color:var(--t-dark); line-height:1.6;
  text-align:center; padding-bottom:20px;
  border-bottom:2px solid var(--rose-mid); width:100%; max-width:960px;
}
.intro-bullets { list-style:none; display:flex; flex-direction:column; gap:16px; width:100%; max-width:920px; text-align:center; }
.intro-bullets li { font-size:clamp(1.25rem, 1.9vw, 1.6rem); font-weight:700; color:var(--t-dark); line-height:1.75; }

/* ══════ RESULTS TABS ══════ */
#results-tabs {
  display:flex; gap:12px; flex-wrap:wrap;
  justify-content:center; margin-bottom:24px;
  position:relative; z-index:2; width:100%;
}
.tab-btn {
  padding:12px 28px; border:2px solid; border-radius:99px;
  background:rgba(255,255,255,.82); cursor:pointer;
  font-family:'Cairo',sans-serif;
  font-size:clamp(1.05rem, 1.5vw, 1.25rem); font-weight:700; color:var(--t-mid);
  transition:all .3s ease; backdrop-filter:blur(6px);
}
.tab-btn:hover { transform:translateY(-3px); background:white; box-shadow:0 8px 24px rgba(0,0,0,.12); }
.tab-btn.active-tab { color:white !important; box-shadow:0 6px 20px rgba(0,0,0,.18); transform:translateY(-2px); }
.tab-btn-1 { border-color:var(--rose-acc); }
.tab-btn-1.active-tab { background:var(--rose-dk); border-color:var(--rose-dk); }
.tab-btn-2 { border-color:var(--sage-acc); }
.tab-btn-2.active-tab { background:var(--sage-dk); border-color:var(--sage-dk); }
.tab-btn-3 { border-color:var(--lav-acc); }
.tab-btn-3.active-tab { background:var(--lav-dk); border-color:var(--lav-dk); }
.tab-btn-4 { border-color:var(--warm-acc); }
.tab-btn-4.active-tab { background:var(--warm-dk); border-color:var(--warm-dk); }

.tab-content {
  display:none; background:rgba(255,255,255,.85); border-radius:24px;
  padding:36px 44px; box-shadow:0 6px 30px rgba(0,0,0,.08);
  animation:fadeUp .4s ease; min-height:240px;
  width:100%; max-width:1000px; backdrop-filter:blur(8px);
  position:relative; z-index:2; text-align:center;
}
.tab-content.active-content { display:block; }

@keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }

.tab-heading { font-family:'Amiri',serif; font-size:clamp(1.5rem, 2.2vw, 1.9rem); font-weight:800; margin-bottom:18px; text-align:center; }
.tab-body { font-size:clamp(1.2rem, 1.8vw, 1.45rem); font-weight:700; color:var(--t-mid); line-height:1.85; text-align:center; }
.tab-body p { margin-bottom:14px; }
.tab-body p:last-child { margin-bottom:0; }

.pill { display:inline-block; padding:6px 16px; border-radius:99px; font-size:clamp(0.95rem, 1.3vw, 1.15rem); font-weight:700; margin:4px; }
.pill-rose { background:var(--rose-mid); color:var(--rose-dk); }
.pill-sage { background:var(--sage-mid); color:var(--sage-dk); }
.pill-lav  { background:var(--lav-mid);  color:var(--lav-dk); }
.pill-warm { background:var(--warm-mid); color:var(--warm-dk); }

/* ══════ CLOSING SLIDE ══════ */
.closing-points { list-style:none; display:flex; flex-direction:column; gap:16px; width:100%; max-width:960px; align-items:center; }
.closing-points li {
  width: 100%;
  background:rgba(255,255,255,.82); border-radius:18px;
  padding:22px 32px; box-shadow:0 6px 20px rgba(0,0,0,.06);
  font-size:clamp(1.3rem, 2vw, 1.7rem); font-weight:700; color:var(--t-mid);
  line-height:1.7; text-align:center; backdrop-filter:blur(4px);
  transition: transform .3s;
}
.closing-points li:hover { transform: translateY(-3px); }

/* ══════ DEDICATION ══════ */
.dedication-box {
  background:rgba(255,255,255,.85); border-radius:28px;
  padding:72px 90px; text-align:center; max-width:800px;
  box-shadow:0 12px 50px rgba(0,0,0,.12); backdrop-filter:blur(12px);
  border:1px solid rgba(255,255,255,.70); position:relative; z-index:2;
}
.dedication-word {
  font-family:'Amiri',serif;
  font-size:clamp(3.5rem,8vw,6.5rem);
  font-weight:800; color:var(--rose-dk);
  letter-spacing:2px; line-height:1.2;
}

/* ══════ THANK-YOU + VIDEO (Box on the right side) ══════ */
#slide-9 .slide-frame {
  padding:60px 80px !important;
  background:none !important;
  overflow:hidden;
  display:flex;
  flex-direction:row;
  justify-content:flex-start; /* Aligns right in RTL */
  align-items:center;
}
body.fullscreen-active #slide-9 .slide-frame {
  padding:60px 100px 110px !important;
}

#slide-video {
  width:100%; height:100%;
  object-fit:cover; position:absolute; inset:0;
  border-radius:28px; z-index:0;
}
body.fullscreen-active #slide-video { border-radius:0 !important; }
.video-overlay {
  position:absolute; inset:0;
  background:linear-gradient(to left, rgba(14,10,24,.40) 0%, rgba(14,10,24,.10) 50%, rgba(14,10,24,.0) 100%);
  border-radius:28px; z-index:1;
}
body.fullscreen-active .video-overlay { border-radius:0 !important; }

.thankyou-box {
  position:relative; z-index:2;
  background:rgba(255,255,255,.20); backdrop-filter:blur(24px) saturate(1.4);
  border-radius:28px; padding:48px 56px; text-align:center;
  border:1px solid rgba(255,255,255,.30);
  width:100%; max-width:520px;
  box-shadow:0 15px 50px rgba(0,0,0,.30);
  margin-right:40px;
}
.thankyou-title {
  font-family:'Amiri',serif;
  font-size:clamp(2.6rem,5vw,4.2rem);
  font-weight:800; color:#ffffff; margin-bottom:16px; line-height:1.3;
}
.thankyou-subtitle { font-size:clamp(1.3rem,2.2vw,1.75rem); font-weight:700; color:rgba(255,255,255,.95); margin-bottom:24px; line-height:1.6; }
.thankyou-names { font-family:'Amiri',serif; font-size:clamp(1.1rem,1.6vw,1.35rem); font-weight:700; color:rgba(255,255,255,.85); line-height:1.9; }

/* ══════ NAV (Floating hover-reveal in Fullscreen) ══════ */
#nav-trigger {
  display: none;
  position: fixed;
  bottom: 0; left: 0; right: 0;
  height: 20px;
  z-index: 9998;
}
body.fullscreen-active #nav-trigger {
  display: block;
}

#nav {
  position:fixed; bottom:20px; left:50%; transform:translateX(-50%);
  display:flex; align-items:center; gap:14px;
  background:rgba(255,255,255,.12); backdrop-filter:blur(18px);
  border:1px solid rgba(255,255,255,.22); border-radius:50px;
  padding:10px 26px; z-index:9999;
  box-shadow:0 8px 36px rgba(0,0,0,.22);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
}

body.fullscreen-active #nav {
  transform: translateX(-50%) translateY(100px);
  opacity: 0;
  background:rgba(255,255,255,.90) !important;
  border-color:rgba(0,0,0,0.1) !important;
  box-shadow:0 12px 40px rgba(0,0,0,.35) !important;
}

body.fullscreen-active #nav:hover,
body.fullscreen-active #nav-trigger:hover + #nav {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

/* Nav Button text colors inside fullscreen menu */
body.fullscreen-active #nav .nav-btn,
body.fullscreen-active #nav #btn-fs {
  background: rgba(0, 0, 0, 0.06);
  color: var(--t-dark);
}
body.fullscreen-active #nav .nav-btn:hover,
body.fullscreen-active #nav #btn-fs:hover {
  background: rgba(0, 0, 0, 0.12);
}
body.fullscreen-active #nav #slide-counter {
  color: var(--t-dark) !important;
}
body.fullscreen-active #nav .dot {
  background: rgba(0,0,0,0.2) !important;
}
body.fullscreen-active #nav .dot.active-dot {
  background: var(--t-dark) !important;
}

.nav-btn {
  background:rgba(255,255,255,.85); border:none; border-radius:50%;
  width:44px; height:44px; cursor:pointer;
  font-size:1.1rem; display:flex; align-items:center; justify-content:center;
  transition:all .2s; box-shadow:0 2px 10px rgba(0,0,0,.12); color:var(--t-dark);
}
.nav-btn:hover { background:white; transform:scale(1.12); box-shadow:0 4px 16px rgba(0,0,0,.18); }
.nav-btn:disabled { opacity:.22; cursor:not-allowed; transform:none; }

#btn-fs {
  background:rgba(255,255,255,.85); border:none; border-radius:50%;
  width:44px; height:44px; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  transition:all .2s; box-shadow:0 2px 10px rgba(0,0,0,.12); color:var(--t-dark);
}
#btn-fs:hover { background:white; transform:scale(1.12); }

#slide-counter { color:rgba(255,255,255,.90); font-size:.95rem; font-weight:700; min-width:60px; text-align:center; }
#dots { display:flex; gap:8px; align-items:center; }
.dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,.30); cursor:pointer; transition:all .3s; }
.dot.active-dot { background:white; width:22px; border-radius:4px; }

#progress-bar { position:fixed; top:0; left:0; height:5px; background:linear-gradient(90deg,var(--rose-acc),var(--lav-acc)); transition:width .5s ease; z-index:9999; }

#key-hint { position:fixed; bottom:78px; left:50%; transform:translateX(-50%); color:rgba(255,255,255,.35); font-size:.80rem; font-family:'Cairo',sans-serif; pointer-events:none; transition:opacity 1s; white-space:nowrap; }

/* Responsive */
@media (max-width:720px) {
  .slide-frame { padding:28px 24px !important; }
  .participants-grid, .theory-grid { grid-template-columns:1fr 1fr; }
  .two-col { grid-template-columns:1fr; }
  .intro-glass { padding:24px 24px !important; }
  #slide-9 .slide-frame {
    flex-direction: column !important;
    justify-content: center !important;
    padding: 20px !important;
  }
  .thankyou-box {
    margin-right: 0 !important;
    max-width: 90% !important;
  }
}
</style>
</head>
<body>

<div id="progress-bar"></div>
<div id="presentation">

  <!-- ══ SLIDE 0: Title ══ -->
  <div class="slide active" id="slide-0">
    <div class="slide-frame bg-rose">
      <div class="slide-badge">جامعة بيرزيت</div>
      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;flex:1;justify-content:center;gap:18px;position:relative;z-index:2;width:100%;">
        <img src="${logoSrc}" alt="شعار جامعة بيرزيت" class="logo-img">
        <div class="accent-bar bar-rose"></div>
        <span class="section-label" style="color:var(--rose-dk);">بحث التخرج &nbsp;·&nbsp; مرحلة البكالوريوس</span>
        <h1 class="main-title">
          كيف تعرّف النساء النازحات في شمال الضفة الغربية<br>
          هويتهنّ الأمومية في ظل التهجير القسري؟
        </h1>
        <div class="presenter-box">
          <p class="presenter-name">إعداد: يسرى زاهر محروم</p>
          <p class="presenter-sup">تحت إشراف: الدكتورة لينة معاري</p>
          <p class="presenter-date">تاريخ المناقشة: ٢٢ يونيو ٢٠٢٦</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ══ SLIDE 1: Introduction (photo BG centered glass) ══ -->
  <div class="slide" id="slide-1">
    <div class="slide-frame">
      <div class="intro-bg" style="background-image:url('${introSrc}');"></div>
      <div class="intro-glass">
        <p class="intro-question">
          كيف تعرّف النساء النازحات في شمال الضفة الغربية هويتهنّ الأمومية في ظل التهجير القسري؟
        </p>
        <span class="section-label" style="color:var(--rose-dk);margin-top:6px;">المقدمة</span>
        <ul class="intro-bullets">
          <li>شهدت مخيمات شمال الضفة الغربية موجات متكرّرة من التهجير القسري طالت كلّ ما هو حياة.</li>
          <li>لا يقتصر أثر النزوح على فقدان المكان، بل يمتدّ ليُعيد تشكيل الحياة اليومية والعلاقات الإنسانية.</li>
          <li>تسعى هذه الدراسة إلى فهم كيف تُعيد المرأة النازحة تعريف أمومتها داخل واقع جديد لم تختره.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ══ SLIDE 2: Importance ══ -->
  <div class="slide" id="slide-2">
    <div class="slide-frame bg-lav">
      <div class="slide-badge">٢ من ٩</div>
      <div class="content-body">
        <span class="section-label" style="color:var(--lav-dk);">أهمية البحث</span>
        <div class="accent-bar bar-lav"></div>
        <h2 class="slide-title">لماذا هذا البحث الآن؟</h2>
        <ul class="bullet-list" style="align-self:center;">
          <li>ركّزت الأدبيات الفلسطينية على الصدمة والصمود والمعاناة السياسية، وأغفلت الصوت الداخلي للمرأة.</li>
          <li>حضرت الأمّ الفلسطينية في الأدبيات كرمز وطني أو فاعل رعائي، دوماً وبقوة، لكنها لم تكن تتكلم.</li>
          <li>نادراً ما تناولت الدراسات كيف تفهم النساء أنفسهنّ أمومتهنّ وتجربتهنّ المعيشة.</li>
        </ul>
        <div class="divider" style="max-width:960px;"></div>
        <div class="quote-box quote-lav">
          يمنح هذا البحث مساحةً آمنةً لسماع أصوات الأمّهات النازحات، وفهم معاني الأمومة من منظورهنّ هنّ.
        </div>
      </div>
    </div>
  </div>

  <!-- ══ SLIDE 3: Methodology ══ -->
  <div class="slide" id="slide-3">
    <div class="slide-frame bg-warm">
      <div class="slide-badge">٣ من ٩</div>
      <div class="content-body">
        <span class="section-label" style="color:var(--warm-dk);">المنهجية</span>
        <div class="accent-bar bar-warm"></div>
        <h2 class="slide-title">كيف استمعنا؟</h2>
        <div class="two-col" style="align-self:center;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">
            <span class="col-label" style="color:var(--warm-dk);">المنهج البحثي</span>
            <div class="quote-box quote-warm" style="margin:0;text-align:center;border-right:none;border:1.5px solid var(--warm-mid);border-radius:18px;padding:24px 28px;">
              التحليل الظاهراتي التفسيري<br>
              <small style="font-size:1rem;opacity:.65;font-weight:700;">(Interpretative Phenomenological Analysis)</small>
            </div>
            <ul class="bullet-list" style="text-align:center;gap:12px;">
              <li style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);">البحث يهتمّ بفهم المعنى والتجربة المعيشة.</li>
              <li style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);">لا يهدف إلى قياس الانتشار أو اختبار علاقات سببية.</li>
            </ul>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">
            <span class="col-label" style="color:var(--warm-dk);">أدوات جمع البيانات</span>
            <div class="cards-col" style="width:100%;">
              <div class="card" style="border-top:4px solid var(--warm-acc);">
                <p class="card-text">٦ مقابلات معمّقة مع أمّهات نازحات</p>
              </div>
              <div class="card" style="border-top:4px solid var(--warm-acc);">
                <p class="card-text">مخيم جنين &nbsp;&nbsp;&nbsp;&nbsp; مخيم طولكرم &nbsp;&nbsp;&nbsp;&nbsp; مخيم نور شمس</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══ SLIDE 4: Participants ══ -->
  <div class="slide" id="slide-4">
    <div class="slide-frame bg-sky">
      <div class="slide-badge">٤ من ٩</div>
      <div class="content-body">
        <span class="section-label" style="color:var(--sky-dk);">التعريف بالمشاركات</span>
        <div class="accent-bar bar-sky"></div>
        <h2 class="slide-title">ستّ نساء .. ستّ حكايات</h2>
        <div class="participants-grid">
          <div class="participant-card" style="border-color:var(--rose-acc);">
            <p class="participant-name">سلمى</p>
            <p class="participant-detail">٤٤ عاماً · مخيم جنين<br>أمّ لخمسة أبناء</p>
          </div>
          <div class="participant-card" style="border-color:var(--sage-acc);">
            <p class="participant-name">منى</p>
            <p class="participant-detail">٣٨ عاماً · مخيم جنين<br>أمّ لطفلين · تعيل أبناءها بعد طلاقها</p>
          </div>
          <div class="participant-card" style="border-color:var(--lav-acc);">
            <p class="participant-name">نوال</p>
            <p class="participant-detail">منتصف الخمسينات · مخيم نور شمس<br>أمّ لطفلين وربّت أبناء زوجها</p>
          </div>
          <div class="participant-card" style="border-color:var(--warm-acc);">
            <p class="participant-name">رؤى</p>
            <p class="participant-detail">٤١ عاماً · مخيم نور شمس<br>أمّ لخمسة أبناء</p>
          </div>
          <div class="participant-card" style="border-color:var(--sky-acc);">
            <p class="participant-name">ربا</p>
            <p class="participant-detail">٤٥ عاماً · مخيم طولكرم<br>أمّ لخمسة أبناء</p>
          </div>
          <div class="participant-card" style="border-color:#c0a0a0;">
            <p class="participant-name">رنا</p>
            <p class="participant-detail">٢٩ عاماً · مخيم طولكرم<br>أمّ لطفلين · زوجها معتقل</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══ SLIDE 5: Theoretical Framework ══ -->
  <div class="slide" id="slide-5">
    <div class="slide-frame bg-rose">
      <div class="slide-badge">٥ من ٩</div>
      <div class="content-body">
        <span class="section-label" style="color:var(--rose-dk);">الإطار النظري</span>
        <div class="accent-bar bar-rose"></div>
        <h2 class="slide-title">العدسات التي أضاءت المشهد</h2>
        <div class="theory-grid">
          <div class="theory-card" style="border-top:4px solid var(--rose-acc);">
            <p class="thinker">جوليا كريستيفا<br>&amp; إريك فروم</p>
            <div class="divider"></div>
            <p class="concept">لفهم الأمومة كعلاقة تجمع بين الارتباط العميق بالأطفال والحفاظ على الذات في آنٍ واحد.</p>
          </div>
          <div class="theory-card" style="border-top:4px solid var(--sage-acc);">
            <p class="thinker">علم النفس التحرّري<br>مارتن بارو</p>
            <div class="divider"></div>
            <p class="concept">فهم المعاناة ضمن سياقها السياسي والاستعماري، لا كحالة فردية معزولة.</p>
          </div>
          <div class="theory-card" style="border-top:4px solid var(--lav-acc);">
            <p class="thinker">النقد النسوي<br>ليلى أبو لغد</p>
            <div class="divider"></div>
            <p class="concept">رفض اختزال النساء في صورة الضحية أو البطلة، وفهم تعقيد تجاربهنّ الإنسانية.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══ SLIDE 6: Results – Interactive ══ -->
  <div class="slide" id="slide-6">
    <div class="slide-frame bg-lav">
      <div class="slide-badge">٦ من ٩</div>
      <span class="section-label" style="color:var(--lav-dk);">النتائج الرئيسية</span>
      <div class="accent-bar bar-lav" style="margin:8px auto 20px;"></div>
      <h2 class="slide-title" style="font-size:clamp(1.4rem,2.4vw,1.8rem);margin-bottom:20px;">
        كشفت الدراسة عن أربعة محاور — اختر محوراً لاستكشافه
      </h2>

      <div id="results-tabs">
        <button class="tab-btn tab-btn-1 active-tab" onclick="showTab(1)">تهجير الممارسة الأمومية</button>
        <button class="tab-btn tab-btn-2" onclick="showTab(2)">الأمومة العلائقية</button>
        <button class="tab-btn tab-btn-3" onclick="showTab(3)">الوله ونزع الوله</button>
        <button class="tab-btn tab-btn-4" onclick="showTab(4)">القمع المركّب</button>
      </div>

      <!-- TAB 1 -->
      <div id="tab-1" class="tab-content active-content">
        <p class="tab-heading" style="color:var(--rose-dk);">تهجير الممارسة الأمومية</p>
        <div class="tab-body">
          <p>لم تفقد النساء المنزلَ فحسب، بل فقدن <strong>البنية التي كانت تجعل الأمومة أسلس</strong>.</p>
          <p>أدّى النزوح إلى تفكيك الروتين اليومي وشبكات الدعم والمساحات الشخصية التي كانت تُعرّف هويتهنّ.</p>
          <div class="divider"></div>
          <p><strong>المفهوم المقترح:</strong>
            <span class="pill pill-rose">تهجير الممارسة الأمومية</span>
          </p>
          <p style="margin-top:14px;font-style:italic;color:var(--t-light);">
            فقدان البنية المادية والتنظيمية والعلائقية التي تُمكّن المرأة من ممارسة الأمومة والاحتفاظ بذاتها في الوقت نفسه.
          </p>
        </div>
      </div>

      <!-- TAB 2 -->
      <div id="tab-2" class="tab-content">
        <p class="tab-heading" style="color:var(--sage-dk);">الأمومة العلائقية</p>
        <div class="tab-body">
          <p>الأمومة لا تُمارَس بصورة فردية، بل تتشكّل وتنمو <strong>من خلال العلاقات</strong> بالزوج والعائلة والمجتمع.</p>
          <p>اختلفت تجارب الأمّهات اختلافاً جوهرياً بحسب طبيعة حضور الزوج وشبكة الدعم المتاحة.</p>
          <div class="divider"></div>
          <p>أدّى النزوح إلى تفكّك شبكات الدعم التي كانت تجعل الأمومة أكثر قابليةً للعيش.</p>
        </div>
      </div>

      <!-- TAB 3 -->
      <div id="tab-3" class="tab-content">
        <p class="tab-heading" style="color:var(--lav-dk);">الوله ونزع الوله</p>
        <div class="tab-body">
          <p>تفترض النظرية أنّ الوله ونزع الوله مرحلتان متعاقبتان في تطوّر العلاقة بين الأمّ والطفل.</p>
          <div class="divider"></div>
          <p style="font-style:italic;color:var(--lav-dk);font-size:clamp(1.3rem, 2vw, 1.6rem);margin-top:16px;">
            هل يستدعي سياق التهجير القسري إعادة التفكير في هذه الثنائية النظرية برمّتها؟
          </p>
        </div>
      </div>

      <!-- TAB 4 -->
      <div id="tab-4" class="tab-content">
        <p class="tab-heading" style="color:var(--warm-dk);">القمع المركّب</p>
        <div class="tab-body">
          <p>لم تواجه النساء قهراً استعمارياً فحسب، بل أشكالاً متعددةً متداخلةً في وقت واحد.</p>
          <p style="margin-top:14px;">استمرّت الأمّهات في أداء أدوارهنّ رغم الأعباء الجسدية والنفسية الثقيلة.</p>
          <div class="divider"></div>
          <p style="font-style:italic;color:var(--warm-dk);font-size:clamp(1.3rem, 2vw, 1.6rem);margin-top:16px;">
            متى يصبح الصمود ضرورةً؟ ومتى يتحوّل إلى عبء لا يسمح للمرأة حتى بأن تمرض؟
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- ══ SLIDE 7: Conclusion ══ -->
  <div class="slide" id="slide-7">
    <div class="slide-frame bg-sage">
      <div class="slide-badge">٧ من ٩</div>
      <div class="content-body">
        <span class="section-label" style="color:var(--sage-dk);">الخاتمة</span>
        <div class="accent-bar bar-sage"></div>
        <h2 class="slide-title">ليست ضحيةً ولا بطلةً .. هي إنسانة</h2>
        <ul class="closing-points">
          <li>لم تكشف الدراسة عن نموذج واحد للأمومة، بل عن ستّ تجارب مختلفة وستّ طرق لفهم الأمومة تحت التهجير القسري.</li>
          <li>تُعيد النساء تشكيل أمومتهنّ ضمن ظروف بالغة التعقيد لم يخترنها ولم يطلبنها.</li>
          <li>يُقدّم البحث مفهوم «تهجير الممارسة الأمومية» إسهاماً نظرياً في أدبيات التهجير والأمومة.</li>
          <li>تدعو الدراسة إلى فهم النساء كتجارب إنسانية معقدة: لا ضحايا فقط، ولا بطلات فقط.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ══ SLIDE 8: Dedication ══ -->
  <div class="slide" id="slide-8">
    <div class="slide-frame bg-rose" style="justify-content:center;align-items:center;">
      <div class="dedication-box">
        <div class="accent-bar bar-rose" style="margin:0 auto 36px;"></div>
        <p class="dedication-word">الإهداء</p>
      </div>
    </div>
  </div>

  <!-- ══ SLIDE 9: Thank You + VIDEO (moved box to the right side) ══ -->
  <div class="slide" id="slide-9">
    <div class="slide-frame">
      <video id="slide-video" loop playsinline preload="auto">
        <source src="${videoFile}" type="video/mp4">
      </video>
      <div class="video-overlay"></div>
      <div class="thankyou-box">
        <div class="accent-bar" style="background:rgba(255,255,255,.5);margin:0 auto 32px;width:90px;height:6px;"></div>
        <h2 class="thankyou-title">شكراً لكم</h2>
        <p class="thankyou-subtitle">على حضوركم واستماعكم</p>
        <div class="divider" style="background:linear-gradient(90deg,transparent,rgba(255,255,255,.35),transparent);margin:24px 0;"></div>
        <p class="thankyou-names">
          إعداد: يسرى زاهر محروم<br>
          تحت إشراف: الدكتورة لينة معاري<br>
          <span style="opacity:.75;font-size:.95rem;font-weight:600;margin-top:8px;display:inline-block;">جامعة بيرزيت · ٢٠٢٦</span>
        </p>
      </div>
    </div>
  </div>

</div><!-- /presentation -->

<!-- Invisible trigger area at the bottom for fullscreen hover menu -->
<div id="nav-trigger"></div>

<!-- Navigation -->
<nav id="nav">
  <button class="nav-btn" id="btn-prev" onclick="navigate(-1)" title="السابق" disabled>&#x2192;</button>
  <div id="dots"></div>
  <span id="slide-counter">١ / ١٠</span>
  <button class="nav-btn" id="btn-next" onclick="navigate(1)" title="التالي">&#x2190;</button>
  <button id="btn-fs" onclick="toggleFS()" title="شاشة كاملة">
    <svg id="fs-expand" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
      <path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
    </svg>
    <svg id="fs-collapse" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
      <path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/>
      <path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>
    </svg>
  </button>
</nav>

<p id="key-hint">اضغط ← → للتنقل بين الشرائح</p>

<script>
  const AR=['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
  function toAr(n){ return String(n).split('').map(d=>AR[+d]||d).join(''); }

  let current = 0;
  const TOTAL  = ${TOTAL};
  const slides  = document.querySelectorAll('.slide');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const counter = document.getElementById('slide-counter');
  const bar     = document.getElementById('progress-bar');
  const dotsEl  = document.getElementById('dots');
  const hint    = document.getElementById('key-hint');
  const video   = document.getElementById('slide-video');

  // Build dots
  for(let i=0;i<TOTAL;i++){
    const d = document.createElement('span');
    d.className='dot'+(i===0?' active-dot':'');
    d.dataset.i=i;
    d.onclick=()=>goTo(i);
    dotsEl.appendChild(d);
  }

  function updateUI(){
    counter.textContent = toAr(current+1)+' / '+toAr(TOTAL);
    btnPrev.disabled = current===0;
    btnNext.disabled = current===TOTAL-1;
    bar.style.width  = ((current+1)/TOTAL*100)+'%';
    document.querySelectorAll('.dot').forEach((d,i)=>{
      d.classList.toggle('active-dot', i===current);
    });
  }

  function handleVideo(idx){
    if(idx === TOTAL-1){ // last slide = video slide
      video.currentTime = 0;
      video.muted = false; // try playing with sound
      video.play().catch((err)=>{
        console.warn("Audio autoplay blocked by browser policy, fallback to muted play:", err);
        video.muted = true;
        video.play().catch(()=>{});
      });
    } else {
      video.pause();
    }
  }

  function goTo(idx){
    if(idx===current) return;
    const old = slides[current];
    old.classList.remove('active');
    old.classList.add('exit');
    setTimeout(()=> old.classList.remove('exit'), 700);
    current = idx;
    slides[current].classList.add('active');
    updateUI();
    handleVideo(current);
  }

  function navigate(dir){
    goTo(Math.max(0, Math.min(TOTAL-1, current+dir)));
  }

  document.addEventListener('keydown', e=>{
    if(e.key==='ArrowLeft'  || e.key==='ArrowDown')  navigate(1);
    if(e.key==='ArrowRight' || e.key==='ArrowUp')    navigate(-1);
    if(e.key==='Home') goTo(0);
    if(e.key==='End')  goTo(TOTAL-1);
  });

  setTimeout(()=> hint.style.opacity='0', 5000);
  updateUI();

  // Tabs
  function showTab(n){
    document.querySelectorAll('.tab-content').forEach(t=> t.classList.remove('active-content'));
    document.querySelectorAll('.tab-btn').forEach(b=> b.classList.remove('active-tab'));
    document.getElementById('tab-'+n).classList.add('active-content');
    document.querySelectorAll('.tab-btn')[n-1].classList.add('active-tab');
  }

  // Fullscreen
  function toggleFS(){
    if(!document.fullscreenElement){
      document.documentElement.requestFullscreen().catch(()=>{});
    } else {
      document.exitFullscreen();
    }
  }
  document.addEventListener('fullscreenchange', ()=>{
    const expIcon = document.getElementById('fs-expand');
    const colIcon = document.getElementById('fs-collapse');
    const isFS    = !!document.fullscreenElement;
    expIcon.style.display = isFS ? 'none'  : 'block';
    colIcon.style.display = isFS ? 'block' : 'none';
    document.body.classList.toggle('fullscreen-active', isFS);
  });
</script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'presentation.html'), html, 'utf8');
fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('Done! File size:', (html.length/1024).toFixed(1), 'KB');
