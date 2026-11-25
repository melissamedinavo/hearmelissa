/*
========================================================================
  HEARMELISSA.COM  ·  HOME PAGE  ·  ONE CARRD EMBED, THE WHOLE PAGE
========================================================================
  Hey me. This entire page lives in this one Embed element. Here's the map
  so future-me doesn't panic.

  TOP TO BOTTOM
    1. SETTINGS     where my images + fonts live, and my Carrd page links.
                    If something's broken after hosting, check here first.
    2. STYLES       all the CSS. Colors, fonts, spacing, mobile tweaks.
    3. THE PAGE     every section, in order, each one labeled with a note.
    4. THE ENGINE   Preact + the little runtime that fills the page in.
                    Don't touch. Seriously.
    5. MY CONTENT   the lists and links (roles, credits, demos, classes...).
                    Most of my edits happen down here.

  QUICK RULES
    - Plain words on the page? Ctrl+F them in THE PAGE and edit in place.
    - Anything that looks like {{something}} gets filled in from MY CONTENT,
      so change it down there, not in the page.
    - Never paste an email address into the page. Copy buttons only.
    - No em dashes. Ever.

  WHERE THIS LIVES
    This file lives on GitHub: hearmelissa/pages/home.js
    Carrd only has a tiny loader for it (in the "home" section's Embed).
    So to change this page: edit THIS file on GitHub, commit, wait a
    few minutes, refresh the site. No need to touch Carrd at all.

  CARRD SETUP FOR THIS PAGE
    Carrd doesn't do real pages. It does SECTIONS: one site, and each
    "page" is a section that starts with a Section Break named home (Carrd makes this one for me, it's the first section).
    Under that Section Break: one Embed > Type: Code > Style: Inline.
    Paste ALL of this into it. Full width, no padding.
    This page only wakes up when its section is open, so all five can
    live in the same Carrd site without stepping on each other.
    Mobile: nothing to swap. This code already rearranges itself for phones.
========================================================================
*/

(function () {
if (window.__hm_home_loaded) return; window.__hm_home_loaded = true;


/* ========================================================================
   1. SETTINGS
   ASSETS = where my images + fonts folders live (this same GitHub site).
   LINKS  = only if one file lives somewhere else.
   PAGES  = my Carrd section names, with the #.
   ======================================================================== */
window.HM = {
  ASSETS: 'https://melissamedinavo.github.io/hearmelissa/',
  LINKS: {
    // 'images/char-callis.jpg': 'https://...'
  },
  PAGES: { home: '#home', hire: '#hire', fans: '#fans', coaching: '#coaching', contact: '#contact' }
};


/* ========================================================================
   2. STYLES  (all the CSS for this page)
   ======================================================================== */
const HM_CSS = `/* FULL WIDTH: breaks my page out of Carrd's narrow center column
   so it fills the whole browser window, edge to edge. */
#hm-home{width:100vw !important;max-width:100vw !important;position:relative !important;left:50% !important;margin-left:-50vw !important;margin-right:0 !important}
html,body{overflow-x:hidden}

@font-face{font-family:'Anastacia';src:url(@@A:fonts/Anastacia.woff2@@) format('woff2');font-display:swap}
@font-face{font-family:'AnaOne';src:url(@@A:fonts/AnaOne.woff2@@) format('woff2');font-display:swap}
@font-face{font-family:'Margita';src:url(@@A:fonts/Margita.woff2@@) format('woff2');font-display:swap}
@font-face{font-family:'Oldtown';src:url(@@A:fonts/Oldtown.woff2@@) format('woff2');font-display:swap}
@font-face{font-family:'Arlysse';src:url(@@A:fonts/Arlysse.woff2@@) format('woff2');font-display:swap}
#hm-home{margin:0;background:#121013}
#hm-home .h2m{--bg:#121013;--ivory:#EEEAE2;--dim:rgba(238,234,226,0.58);--rule:rgba(238,234,226,0.11);--red:#B8232F;--redL:#B8232F;height:900px;overflow-y:auto;overflow-x:hidden;background:var(--bg);color:var(--ivory);font-family:'Oldtown','Courier New',monospace}
#hm-home .h2m p,#hm-home .h2m h1,#hm-home .h2m h2,#hm-home .h2m figure{margin:0}
#hm-home .h2m a{color:inherit;text-decoration:none}
#hm-home .disp{font-family:'Arlysse',sans-serif;font-weight:400;text-transform:uppercase;letter-spacing:0.01em}
#hm-home .hand{font-family:'Anastacia',cursive;font-weight:400}

/* top bar */
#hm-home .bar{position:absolute;left:0;right:0;top:0;z-index:5;display:flex;justify-content:space-between;align-items:center;height:76px;padding:0 48px}
#hm-home .bar{gap:0}
#hm-home .bar .me + .me{margin-right:auto;margin-left:14px}
#hm-home .bar .me{font-family:'Margita',cursive;font-size:40px}
#hm-home .bar nav{display:flex;gap:34px;font-family:'Oldtown',monospace;font-size:14px;letter-spacing:0.1em;text-transform:uppercase}
#hm-home .bar nav a{position:relative;opacity:0.85;transition:opacity .2s}
#hm-home .bar nav a svg{position:absolute;left:-14px;top:-9px;width:calc(100% + 28px);height:calc(100% + 18px);overflow:visible;pointer-events:none;clip-path:inset(0 100% 0 0);transition:clip-path .5s ease}
#hm-home .bar nav a svg path{fill:none;stroke:var(--redL);stroke-width:1.8;stroke-linecap:round}
#hm-home .bar nav a:hover svg{clip-path:inset(0 0 0 0)}
#hm-home .bar nav a:hover{opacity:1}

/* the reel, playing behind the title */
#hm-home .frame{position:relative;height:520px;overflow:hidden;background:#000}
#hm-home .frame iframe{position:absolute;top:50%;left:50%;width:100%;aspect-ratio:16/9;min-height:100%;transform:translate(-50%,-50%) scale(1.04);border:0;pointer-events:none;filter:grayscale(0.35) contrast(1.05)}
#hm-home .frame .shade{position:absolute;inset:0;background:rgba(10,8,11,0.58)}
#hm-home .frame .lb{position:absolute;left:0;right:0;height:44px;background:#000;z-index:2}
#hm-home .frame .lb.t{top:0}
#hm-home .frame .lb.b{bottom:0}
#hm-home .slate{position:absolute;left:48px;top:84px;z-index:3;font-size:15px;letter-spacing:0.08em;color:var(--dim)}
#hm-home .tc{position:absolute;right:48px;top:84px;z-index:3;font-size:15px;letter-spacing:0.08em;color:var(--dim)}
#hm-home .tc b{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--redL);margin-right:8px;vertical-align:1px;animation:rec 1.2s steps(1) infinite}
@keyframes rec{50%{opacity:0.15}}
#hm-home .title{position:absolute;left:28px;bottom:88px;z-index:3}
#hm-home .title h1{font-family:'AnaOne',cursive;font-weight:400;font-size:108px;line-height:0.98;margin-left:-6px !important;letter-spacing:0;white-space:nowrap}
#hm-home .title h1 .l1,#hm-home .title h1 .l2{display:block}
#hm-home .title h1 .l2{padding-left:0;margin-top:-4px}
#hm-home .title .heart{display:inline-block;width:30px;height:27px;margin-left:8px;vertical-align:0.6em;transform:rotate(14deg);overflow:visible}
#hm-home .title .scrib{display:block;width:620px;height:34px;margin:-22px 0 0 16px;overflow:visible}
#hm-home .title .scrib path{fill:none;stroke:var(--redL);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
#hm-home .title .heart path{fill:none;stroke:var(--redL);stroke-width:3.2;stroke-linecap:round;stroke-linejoin:round;}
@keyframes draw{to{stroke-dashoffset:0}}
#hm-home .title .script{display:block;margin:2px 0 0 120px;font-family:'Anastacia',cursive;font-size:38px;line-height:1;color:var(--redL);white-space:nowrap;transform:rotate(-3deg);transform-origin:left}
#hm-home .title .sub{display:block;margin:16px 0 0 8px;font-family:'Oldtown',monospace;font-size:16px;letter-spacing:0.12em;text-transform:uppercase;color:var(--dim);}
#hm-home .title .sub b{font-weight:400;color:var(--redL)}
@keyframes up{to{opacity:1;transform:none}}
@keyframes write{to{clip-path:inset(0 0 0 0)}}
#hm-home .sound{position:absolute;right:56px;bottom:39px;z-index:4;display:flex;align-items:center;gap:14px;background:none;border:0;padding:0;color:var(--ivory);cursor:pointer;font-family:'Oldtown',monospace;font-size:15px;letter-spacing:0.1em;text-transform:uppercase}
#hm-home .aside{position:absolute;z-index:3;font-family:'Anastacia',cursive;color:var(--redL);font-size:30px;line-height:1;white-space:nowrap;pointer-events:none}
#hm-home .aside svg{position:absolute;overflow:visible}
#hm-home .aside svg path{fill:none;stroke:var(--redL);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
#hm-home .inkin{clip-path:inset(0 100% 0 0);animation:write 1.4s ease forwards}
#hm-home .sound i{width:64px;height:64px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;transition:transform .25s}
#hm-home .sound:hover i{transform:scale(1.08)}
#hm-home .scrub{position:absolute;left:0;right:0;bottom:44px;height:54px;z-index:3}
#hm-home .scrub svg{display:block;width:100%;height:54px}
#hm-home .scrub .dim{fill:rgba(238,234,226,0.22)}
#hm-home .scrub .lit{fill:var(--redL)}

/* doors: three columns on a ruled grid, no boxes */
#hm-home .doors{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--rule)}
#hm-home .door{position:relative;display:block;padding:24px 48px 58px;border-left:1px solid var(--rule);transition:background .3s}
#hm-home .door:first-child{border-left:0}
#hm-home .door:hover{background:rgba(238,234,226,0.035)}
#hm-home .door .lab{font-size:14px;letter-spacing:0.08em;color:var(--dim)}
#hm-home .door h2{position:relative;display:inline-block;white-space:nowrap;margin-top:14px !important;font-family:'Margita',cursive;font-weight:400;font-size:58px;-webkit-text-stroke:0.6px currentColor;line-height:1.1}
#hm-home .door h2 svg{position:absolute;left:-22px;top:-12px;width:calc(100% + 44px);height:calc(100% + 22px);overflow:visible;pointer-events:none}
#hm-home .door h2 svg{clip-path:inset(0 100% 0 0);transition:clip-path .6s ease}
#hm-home .door h2 svg path{fill:none;stroke:var(--redL);stroke-width:2.4;stroke-linecap:round}
#hm-home .door:hover h2 svg{clip-path:inset(0 0 0 0)}
#hm-home .door .k{font-size:13px;letter-spacing:0.1em;color:var(--dim);margin-bottom:6px !important}
#hm-home .door .in{margin-top:14px !important;font-size:16px;line-height:1.7;color:var(--dim);max-width:300px}
#hm-home .door .go{position:absolute;right:44px;bottom:18px;font-family:'Anastacia',cursive;font-size:36px;color:var(--redL);opacity:0;transform:translateX(-10px);transition:opacity .3s,transform .3s}
#hm-home .door:hover .go{opacity:1;transform:none}

/* intro row */
#hm-home .intro{display:grid;grid-template-columns:230px minmax(0,1fr) 320px;gap:48px;padding:40px 48px 48px;border-bottom:1px solid var(--rule);align-items:start}
#hm-home .intro figure img{display:block;width:100%;aspect-ratio:4/5;object-fit:cover;object-position:50% 22%;filter:grayscale(0.15)}
#hm-home .intro figure figcaption{margin-top:10px;font-size:13px;letter-spacing:0.06em;color:var(--dim)}
#hm-home .dlg{position:relative;background:#F7F6F2;color:#1C1B1B;padding:30px 40px 26px;box-shadow:0 24px 44px -26px rgba(0,0,0,0.9)}
#hm-home .dlg .ring{position:absolute;right:-70px;top:-80px;width:220px;height:220px;background:url(@@A:images/coffee.png@@) center/contain no-repeat;mix-blend-mode:multiply;opacity:0.9;pointer-events:none}
#hm-home .dlg .act{margin-top:16px !important;font-size:16px;line-height:1.6}
#hm-home .dlg .pg{position:absolute;right:26px;top:20px;font-size:14px}
#hm-home .dlg .k{font-size:15px;letter-spacing:0.05em}
#hm-home .dlg .cue{margin-top:6px !important;text-align:center;font-size:17px;letter-spacing:0.08em;padding-right:40px}
#hm-home .dlg .par{text-align:center;font-size:15px;color:rgba(28,27,27,0.6);padding-right:40px}
#hm-home .dlg .line{margin:10px auto 0 !important;max-width:430px;font-size:18px;line-height:1.6}
#hm-home .dlg .tone{margin-top:26px !important;display:flex;flex-wrap:nowrap;justify-content:space-between;gap:10px;font-family:'Anastacia',cursive;font-size:22px;white-space:nowrap;padding:0 30px;opacity:0.9}
#hm-home .dlg .tone .ic{position:static;display:block;width:16px;height:17px;margin:0 auto 4px;overflow:visible;clip-path:none !important}
#hm-home .dlg .tone .ic path{fill:none;stroke:#1C1B1B;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
#hm-home .dlg .tone span.on .ic path{stroke:var(--red)}
#hm-home .dlg .tone span{position:relative;opacity:0.4;transition:opacity .4s}
#hm-home .dlg .tone span.on{opacity:1}
#hm-home .dlg .tone svg:not(.ic){position:absolute;left:-12px;bottom:-5px;top:auto;width:calc(100% + 24px);height:30px;overflow:visible;pointer-events:none}
#hm-home .dlg .tone svg{clip-path:inset(0 100% 0 0);transition:clip-path 0s}
#hm-home .dlg .tone svg path{fill:none;stroke:var(--red);stroke-width:2;stroke-linecap:round}
#hm-home .dlg .tone span.on svg{clip-path:inset(0 0 0 0);transition:clip-path .8s ease}
#hm-home .where{position:relative;padding-top:4px;border-left:1px solid var(--rule);padding-left:40px}
#hm-home .where .k{font-size:14px;letter-spacing:0.08em;color:var(--dim)}
#hm-home .where .n{font-family:'Arlysse',sans-serif;font-size:150px;line-height:0.8;margin-top:14px !important;color:var(--ivory)}
#hm-home .where .n span{display:block;font-family:'Anastacia',cursive;font-size:40px;color:var(--redL);line-height:1;margin-top:2px}
#hm-home .where .u{font-family:'Arlysse',sans-serif;font-size:40px;text-transform:uppercase;letter-spacing:0.02em;margin-top:6px !important}
#hm-home .where .typed{margin-top:16px !important;font-size:17px;letter-spacing:0.05em;text-transform:uppercase}
#hm-home .where .typed .k2{color:var(--dim)}
#hm-home .where .caret{display:inline-block;width:10px;height:18px;margin-left:2px;background:var(--redL);vertical-align:-3px;animation:blink 1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}

#hm-home .tickWrap{position:relative}
#hm-home .tkBtn{position:absolute;top:50%;z-index:3;width:40px;height:40px;margin-top:-20px;border-radius:50%;border:1px solid var(--rule);background:rgba(18,16,19,0.85);color:var(--ivory);display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0.75;transition:opacity .2s,border-color .2s}
#hm-home .tkBtn:hover{opacity:1;border-color:var(--redL)}
#hm-home .tkBtn svg path{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
#hm-home .tkBtn.prev{left:14px}#hm-home .tkBtn.next{right:14px}
#hm-home .tNudge{transition:transform .5s cubic-bezier(.2,.7,.2,1)}
#hm-home .tick{position:relative;overflow:hidden;border-bottom:1px solid var(--rule);padding:16px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}
#hm-home .tTrack{display:flex;align-items:center;width:max-content;animation:tk 70s linear infinite}
#hm-home .tick:hover .tTrack{animation-play-state:paused}
@keyframes tk{from{transform:translateX(0)}to{transform:translateX(-50%)}}
#hm-home .lg{flex:0 0 auto;display:flex;align-items:center;padding:0 40px}
#hm-home .lg img{filter:brightness(0) invert(1);opacity:0.6;transition:opacity .2s}
#hm-home .lg img:hover{opacity:1}
@media (prefers-reduced-motion: reduce){#hm-home .tTrack{animation:none}}
#hm-home .trans{margin:0;padding:12px 48px 8px;text-align:right;font-size:15px;letter-spacing:0.08em;color:var(--dim)}
#hm-home .foot{display:flex;justify-content:space-between;align-items:center;padding:24px 48px 20px}
#hm-home .foot .sign{font-family:'Margita',cursive;font-size:64px;white-space:nowrap;color:var(--redL)}
#hm-home .foot .r{font-size:13px;letter-spacing:0.06em;color:var(--dim);text-align:right;line-height:1.8}
#hm-home .h2m .exp{padding:0 48px 40px;font-size:13px;color:rgba(238,234,226,0.38)}
#hm-home .bar nav a{display:inline-block;transition:transform .35s cubic-bezier(.2,.7,.2,1),letter-spacing .35s cubic-bezier(.2,.7,.2,1),opacity .2s}
#hm-home .bar nav a:hover{transform:translateY(-2px);letter-spacing:0.14em}
#hm-home .acc{position:relative;display:inline-block;font-style:normal}
#hm-home .acc::after{content:'';position:absolute;left:0.16em;top:0.18em;width:0.2em;height:0.06em;background:currentColor;border-radius:1em;transform:rotate(-38deg)}

@media (max-width:640px){
#hm-home .h2m{height:844px}
#hm-home .bar{height:58px;padding:0 18px}
#hm-home .bar nav{gap:14px;font-size:10px;letter-spacing:0.06em}
#hm-home .bar .me img{width:30px !important;height:30px !important}
#hm-home .bar .me + .me{display:none}
#hm-home .frame{height:470px}
#hm-home .frame .lb{height:30px}
#hm-home .slate,#hm-home .tc{top:62px;font-size:10px}
#hm-home .slate{left:18px}#hm-home .tc{right:18px}
#hm-home .title{left:12px;bottom:96px}
#hm-home .title h1{font-size:62px}
#hm-home .title h1 .l2{padding-left:0}
#hm-home .title .heart{width:18px;height:16px}
#hm-home .title .script{margin:4px 0 0 70px;font-size:24px}
#hm-home .title .sub{font-size:10px;margin-top:12px}
#hm-home .aside{right:30px !important;bottom:88px !important;top:auto !important;font-size:20px}
#hm-home .aside svg{transform:scale(0.55);transform-origin:top right}
#hm-home .sound{right:18px;bottom:24px}
#hm-home .sound .lab{display:none}
#hm-home .sound i{width:52px;height:52px}
#hm-home .scrub{bottom:30px;height:40px}
#hm-home .scrub svg{height:40px}
#hm-home .tick{padding:10px 0}
#hm-home .lg{padding:0 20px}
#hm-home .lg img{transform:scale(0.7)}
#hm-home .trans{padding:10px 18px 6px;font-size:11px}
#hm-home .doors{grid-template-columns:1fr}
#hm-home .door{border-left:0;border-top:1px solid var(--rule);padding:18px 20px 46px}
#hm-home .door:first-child{border-top:0}
#hm-home .door h2{font-size:46px}
#hm-home .door .in{font-size:14px;margin-top:8px !important}
#hm-home .door .go{right:20px;bottom:12px;opacity:1;transform:none;font-size:22px}
#hm-home .intro{grid-template-columns:1fr;gap:28px;padding:26px 20px 34px}
#hm-home .intro figure{width:72%;margin:0 auto}
#hm-home .dlg{padding:24px 20px 22px}
#hm-home .dlg .ring{width:150px;height:150px;right:-40px;top:-50px}
#hm-home .dlg .line{font-size:16px}
#hm-home .dlg .tone{font-size:18px;gap:4px;padding:0}
#hm-home .where{border-left:0;padding-left:0;border-top:1px solid var(--rule);padding-top:22px}
#hm-home .where .n{font-size:120px}
#hm-home .where .u{font-size:32px}
#hm-home .foot{flex-direction:column;align-items:flex-start;gap:14px;padding:22px 20px 26px}
#hm-home .foot .sign{font-size:38px;white-space:normal}
#hm-home .foot .r{text-align:left}
}


/* ---- CARRD FIXES (added for the embed) ----
   In the canvas this page scrolled inside a box. On the real site it scrolls with the page. */
#hm-home .inkScroll{height:auto!important;overflow:visible!important}
#hm-home{all:initial;display:block;position:relative;width:100%;min-height:100vh;background:#121013;-webkit-font-smoothing:antialiased;text-align:left}
#hm-home *{box-sizing:border-box}`;


/* ========================================================================
   3. THE PAGE  (every section in order, each with a note above it)
   Anything in {{double braces}} gets filled in from MY CONTENT below.
   ======================================================================== */
const TPL = `<div class="h2m" ref="{{setRoot}}">


<!-- ========================================================================
     HOME  (the whole thing lives in this frame)
     Background reel, top bar, the doors, and the typing line at the bottom.
     The reel video is the YouTube ID inside the iframe right below. Swap the ID
     in BOTH spots in that link (the "F93S3Hjf6zQ" bits) if I ever change reels.
     ======================================================================== -->
<section class="frame">
<iframe src="https://www.youtube-nocookie.com/embed/F93S3Hjf6zQ?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=F93S3Hjf6zQ&amp;controls=0&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;disablekb=1" title="Reel background" tabindex="-1" aria-hidden="true" allow="autoplay; encrypted-media"></iframe>
<div class="shade"></div><div class="lb t"></div><div class="lb b"></div>


<!-- ========================================================================
     TOP BAR
     Logo on the left, menu on the right. Links come from PAGES in SETTINGS.
     ======================================================================== -->
<header class="bar"><a class="me" href="#" aria-label="Melissa Medína, home" style="display:flex;align-items:center;gap:14px;margin-right:auto"><img src="@@A:images/logo-white.png@@" alt="" width="40" height="40" style="width:40px;height:40px"></a><nav><a href="@@P:hire@@">Hire me<svg viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2.5,13.8 L4.8,11.8 L6.8,9.7 L10.4,7.9 L13.8,6.1 L17.4,4.3 L22.7,3.4 L27.4,2.1 L32.3,1.0 L38.0,0.7 L43.5,0.2 L49.1,-0.4 L54.8,-0.4 L60.3,0.3 L65.8,0.9 L71.5,1.3 L76.2,2.7 L81.2,3.8 L85.5,5.3 L89.5,7.0 L93.3,8.8 L96.3,10.7 L98.3,12.9 L100.2,15.1 L101.2,17.4 L101.5,19.7 L100.9,22.0 L99.8,24.3 L98.4,26.5 L97.2,28.8 L94.2,30.8 L90.2,32.5 L87.3,34.6 L82.4,35.9 L78.1,37.5 L72.9,38.5 L67.4,39.4 L61.9,40.0 L56.2,40.7 L50.4,40.7 L44.5,40.8 L38.7,40.4 L33.0,39.9 L27.4,39.0 L22.4,37.8 L17.2,36.6 L13.2,34.9 L8.8,33.3 L5.4,31.3 L2.4,29.3 L1.0,26.9 L-1.3,24.8 L-2.3,22.4 L-2.0,20.1 L-2.2,17.7 L-1.5,15.3 L0.8,13.2 L3.0,11.0 L5.1,8.7 L8.7,6.8 L12.0,4.8" vector-effect="non-scaling-stroke"></path></svg></a><a href="@@P:fans@@">Fans &amp; press<svg viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2.8,13.9 L4.4,11.7 L7.4,9.8 L9.8,7.7 L14.1,6.2 L17.8,4.5 L22.0,3.0 L27.3,2.1 L32.2,0.8 L37.8,0.3 L43.4,-0.1 L49.1,-0.3 L54.8,-0.2 L60.4,0.3 L66.2,0.5 L71.2,1.6 L76.7,2.4 L81.4,3.7 L84.9,5.6 L89.1,7.1 L92.7,8.9 L96.1,10.8 L97.5,13.0 L99.9,15.2 L100.6,17.4 L101.7,19.7 L101.7,22.1 L100.6,24.4 L98.3,26.5 L97.0,28.8 L93.8,30.7 L91.0,32.8 L86.8,34.4 L83.0,36.2 L78.3,37.6 L73.1,38.7 L67.7,39.7 L62.1,40.4 L56.3,40.7 L50.4,40.6 L44.5,41.0 L38.8,40.3 L33.4,39.4 L27.7,38.8 L22.6,37.7 L17.9,36.3 L12.7,35.1 L9.7,33.0 L5.2,31.4 L2.8,29.2 L1.0,26.9 L-1.0,24.7 L-2.2,22.4 L-2.1,20.1 L-2.8,17.7 L-1.7,15.3 L-0.5,13.0 L1.9,10.8 L4.8,8.7 L8.0,6.6 L12.1,4.8" vector-effect="non-scaling-stroke"></path></svg></a><a href="@@P:coaching@@">Coaching<svg viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M1.8,13.7 L5.0,11.8 L6.7,9.6 L10.2,7.8 L13.3,5.9 L18.0,4.6 L22.0,3.0 L27.5,2.2 L32.2,0.8 L37.9,0.5 L43.5,0.2 L49.1,-0.1 L54.8,-0.2 L60.3,0.4 L65.9,0.8 L70.9,1.8 L76.0,2.8 L80.8,4.1 L85.1,5.5 L89.1,7.1 L93.1,8.8 L95.6,10.9 L98.5,12.9 L100.3,15.1 L101.4,17.4 L101.9,19.7 L101.2,22.0 L100.5,24.3 L99.3,26.6 L96.7,28.7 L93.5,30.7 L90.7,32.7 L86.9,34.5 L82.3,35.9 L77.6,37.2 L72.7,38.4 L67.6,39.6 L62.1,40.4 L56.3,40.7 L50.4,40.7 L44.6,40.4 L38.9,40.0 L33.0,39.8 L27.7,38.9 L22.5,37.7 L18.0,36.3 L13.6,34.7 L9.6,33.0 L6.2,31.1 L2.7,29.2 L0.8,27.0 L-1.3,24.8 L-2.1,22.4 L-2.7,20.1 L-2.7,17.7 L-1.9,15.3 L0.6,13.1 L1.7,10.7 L4.7,8.6 L8.2,6.7 L12.6,5.0" vector-effect="non-scaling-stroke"></path></svg></a><a href="@@P:contact@@">Contact<svg viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M1.8,13.7 L5.0,11.8 L6.7,9.6 L10.2,7.8 L13.3,5.9 L18.0,4.6 L22.0,3.0 L27.5,2.2 L32.2,0.8 L37.9,0.5 L43.5,0.2 L49.1,-0.1 L54.8,-0.2 L60.3,0.4 L65.9,0.8 L70.9,1.8 L76.0,2.8 L80.8,4.1 L85.1,5.5 L89.1,7.1 L93.1,8.8 L95.6,10.9 L98.5,12.9 L100.3,15.1 L101.4,17.4 L101.9,19.7 L101.2,22.0 L100.5,24.3 L99.3,26.6 L96.7,28.7 L93.5,30.7 L90.7,32.7 L86.9,34.5 L82.3,35.9 L77.6,37.2 L72.7,38.4 L67.6,39.6 L62.1,40.4 L56.3,40.7 L50.4,40.7 L44.6,40.4 L38.9,40.0 L33.0,39.8 L27.7,38.9 L22.5,37.7 L18.0,36.3 L13.6,34.7 L9.6,33.0 L6.2,31.1 L2.7,29.2 L0.8,27.0 L-1.3,24.8 L-2.1,22.4 L-2.7,20.1 L-2.7,17.7 L-1.9,15.3 L0.6,13.1 L1.7,10.7 L4.7,8.6 L8.2,6.7 L12.6,5.0" vector-effect="non-scaling-stroke"></path></svg></a></nav></header>
<p class="slate">FADE IN:</p>
<p class="tc">FINAL DRAFT</p>
<div class="title"><h1 aria-label="Melissa Medína"><span class="l1">Melissa</span><span class="l2">Medína<svg class="heart" viewBox="0 0 80 72" aria-hidden="true"><path class="o" d="M40 66 C 14 46, 2 30, 8 16 C 14 2, 34 4, 40 20 C 46 4, 66 2, 72 16 C 78 30, 64 48, 40 66"></path><path class="f" d="M14 18 L30 10 M11 27 L38 14 M13 36 L50 16 M18 44 L62 14 M24 51 L68 22 M30 57 L70 31 M36 62 L64 42"></path></svg></span></h1><span class="script">global voice actor</span><span class="sub">Also: VO director <b>·</b> Singer</span></div>
<button class="sound" type="button" onClick="{{openReel}}"><i><svg width="18" height="20" viewBox="0 0 18 20"><path d="M2 1 L17 10 L2 19 Z" fill="#fff"></path></svg></i><span class="lab">Watch with sound</span></button>
<span class="aside" style="right:70px;bottom:120px;transform:rotate(-5deg)">bespoke voice acting<svg width="34" height="40" style="right:-26px;top:22px"><path d="M4 4 C 20 10, 26 22, 22 36 M22 36 L15 29 M22 36 L29 30"></path></svg></span>
<div class="scrub"><svg viewBox="0 0 1280 54" preserveAspectRatio="none" aria-hidden="true"><defs><clipPath id="h2Clip"><rect class="clip" x="0" y="0" width="0" height="54"></rect></clipPath></defs><path class="dim" d=""></path><path class="lit" d="" clip-path="url(#h2Clip)"></path></svg></div>
</section>
<div class="tickWrap"><button type="button" class="tkBtn prev" aria-label="Scroll games left"><svg width="14" height="14" viewBox="0 0 20 20"><path d="M12.5 4 L6.5 10 L12.5 16"></path></svg></button><div class="tick" aria-label="Games I've voiced in"><div class="tNudge"><div class="tTrack"><span class="lg"><img src="@@A:images/logo-acecombat.png@@" alt="Ace Combat" width="188" height="28" style="width:188px;height:28px"></span><span class="lg"><img src="@@A:images/logo-borderlands4.png@@" alt="Borderlands 4" width="138" height="39" style="width:138px;height:39px"></span><span class="lg"><img src="@@A:images/logo-swtor.png@@" alt="Star Wars: The Old Republic" width="148" height="36" style="width:148px;height:36px"></span><span class="lg"><img src="@@A:images/logo-warframe.png@@" alt="Warframe" width="188" height="24" style="width:188px;height:24px"></span><span class="lg"><img src="@@A:images/logo-starfield.png@@" alt="Starfield" width="88" height="60" style="width:88px;height:60px"></span><span class="lg"><img src="@@A:images/logo-valorant.png@@" alt="Valorant" width="90" height="59" style="width:90px;height:59px"></span><span class="lg"><img src="@@A:images/logo-eso.png@@" alt="The Elder Scrolls Online" width="164" height="32" style="width:164px;height:32px"></span><span class="lg"><img src="@@A:images/logo-white-fatalfury.png@@" alt="Fatal Fury: City of the Wolves" width="90" height="59" style="width:90px;height:59px"></span><span class="lg"><img src="@@A:images/logo-ffxiv.png@@" alt="Final Fantasy XIV" width="146" height="36" style="width:146px;height:36px"></span><span class="lg"><img src="@@A:images/logo-white-duskfade.png@@" alt="Duskfade" width="118" height="45" style="width:118px;height:45px"></span><span class="lg"><img src="@@A:images/logo-white-gbfrelink.png@@" alt="Granblue Fantasy: Relink" width="151" height="35" style="width:151px;height:35px"></span><span class="lg"><img src="@@A:images/logo-white-gbvsrising.png@@" alt="Granblue Fantasy Versus: Rising" width="145" height="36" style="width:145px;height:36px"></span><span class="lg"><img src="@@A:images/logo-white-halloween.png@@" alt="Halloween" width="152" height="35" style="width:152px;height:35px"></span><span class="lg"><img src="@@A:images/logo-mortuary.png@@" alt="The Mortuary Assistant" width="145" height="36" style="width:145px;height:36px"></span><span class="lg"><img src="@@A:images/logo-white-selaco.png@@" alt="Selaco" width="159" height="33" style="width:159px;height:33px"></span><span class="lg"><img src="@@A:images/logo-white-wwz.png@@" alt="World War Z" width="120" height="44" style="width:120px;height:44px"></span><span class="lg"><img src="@@A:images/logo-fallout76.png@@" alt="Fallout 76" width="125" height="42" style="width:125px;height:42px"></span><span class="lg"><img src="@@A:images/logo-white-monkeyisland.png@@" alt="Return to Monkey Island" width="97" height="54" style="width:97px;height:54px"></span><span class="lg"><img src="@@A:images/logo-pgr.png@@" alt="Punishing: Gray Raven" width="176" height="30" style="width:176px;height:30px"></span><span class="lg"><img src="@@A:images/logo-white-afkjourney.png@@" alt="AFK Journey" width="109" height="48" style="width:109px;height:48px"></span><span class="lg"><img src="@@A:images/logo-white-dyinglight.png@@" alt="Dying Light" width="114" height="46" style="width:114px;height:46px"></span><span class="lg"><img src="@@A:images/logo-white-mtgarena.png@@" alt="Magic: The Gathering Arena" width="125" height="42" style="width:125px;height:42px"></span><span class="lg"><img src="@@A:images/logo-white-minecraftdungeons.png@@" alt="Minecraft Dungeons" width="145" height="36" style="width:145px;height:36px"></span><span class="lg"><img src="@@A:images/logo-white-trolls.png@@" alt="DreamWorks Trolls Remix Rescue" width="91" height="58" style="width:91px;height:58px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-acecombat.png@@" alt="" width="188" height="28" style="width:188px;height:28px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-borderlands4.png@@" alt="" width="138" height="39" style="width:138px;height:39px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-swtor.png@@" alt="" width="148" height="36" style="width:148px;height:36px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-warframe.png@@" alt="" width="188" height="24" style="width:188px;height:24px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-starfield.png@@" alt="" width="88" height="60" style="width:88px;height:60px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-valorant.png@@" alt="" width="90" height="59" style="width:90px;height:59px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-eso.png@@" alt="" width="164" height="32" style="width:164px;height:32px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-fatalfury.png@@" alt="" width="90" height="59" style="width:90px;height:59px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-ffxiv.png@@" alt="" width="146" height="36" style="width:146px;height:36px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-duskfade.png@@" alt="" width="118" height="45" style="width:118px;height:45px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-gbfrelink.png@@" alt="" width="151" height="35" style="width:151px;height:35px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-gbvsrising.png@@" alt="" width="145" height="36" style="width:145px;height:36px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-halloween.png@@" alt="" width="152" height="35" style="width:152px;height:35px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-mortuary.png@@" alt="" width="145" height="36" style="width:145px;height:36px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-selaco.png@@" alt="" width="159" height="33" style="width:159px;height:33px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-wwz.png@@" alt="" width="120" height="44" style="width:120px;height:44px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-fallout76.png@@" alt="" width="125" height="42" style="width:125px;height:42px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-monkeyisland.png@@" alt="" width="97" height="54" style="width:97px;height:54px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-pgr.png@@" alt="" width="176" height="30" style="width:176px;height:30px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-afkjourney.png@@" alt="" width="109" height="48" style="width:109px;height:48px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-dyinglight.png@@" alt="" width="114" height="46" style="width:114px;height:46px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-mtgarena.png@@" alt="" width="125" height="42" style="width:125px;height:42px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-minecraftdungeons.png@@" alt="" width="145" height="36" style="width:145px;height:36px"></span><span class="lg" aria-hidden="true"><img src="@@A:images/logo-white-trolls.png@@" alt="" width="91" height="58" style="width:91px;height:58px"></span></div></div></div><button type="button" class="tkBtn next" aria-label="Scroll games right"><svg width="14" height="14" viewBox="0 0 20 20"><path d="M7.5 4 L13.5 10 L7.5 16"></path></svg></button></div>
<p class="trans">SMASH CUT TO:</p>


<!-- ========================================================================
     THE DOORS  (Hire me / Fans & press / Coaching / Contact)
     Each door is one <a class="door">. The little line under the title is the
     "scene heading". Change the words, keep the classes.
     ======================================================================== -->
<nav class="doors">
<a class="door" href="@@P:hire@@"><p class="k">INT. VO BOOTH. NIGHT.</p><h2>Hire me<svg viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M2.4,13.8 L4.7,11.8 L7.6,9.9 L10.0,7.8 L14.1,6.2 L18.1,4.7 L22.5,3.2 L27.2,2.0 L32.2,0.8 L37.9,0.4 L43.3,-0.3 L49.1,-0.5 L54.7,0.0 L60.3,0.4 L65.8,0.9 L71.5,1.4 L76.4,2.6 L81.4,3.7 L85.9,5.2 L89.5,7.0 L92.8,8.9 L95.1,11.0 L97.3,13.1 L100.2,15.1 L101.1,17.4 L101.6,19.7 L101.1,22.0 L100.5,24.3 L98.9,26.6 L97.1,28.8 L93.4,30.6 L90.6,32.7 L86.7,34.4 L82.9,36.2 L78.2,37.6 L72.7,38.4 L67.3,39.3 L61.9,40.0 L56.2,40.5 L50.4,40.9 L44.6,40.6 L38.7,40.5 L33.2,39.6 L27.7,38.9 L22.7,37.6 L17.5,36.5 L13.2,34.9 L8.8,33.3 L5.2,31.4 L2.8,29.2 L1.1,26.9 L-1.8,24.8 L-2.9,22.4 L-2.6,20.1 L-2.4,17.7 L-2.1,15.3 L0.5,13.1 L2.7,10.9 L4.9,8.7 L8.4,6.7 L12.3,4.9" vector-effect="non-scaling-stroke"></path></svg></h2><p class="in">Reel, demos, roles, credits, studio and booking.</p><span class="go">this way →</span></a>
<a class="door" href="@@P:fans@@"><p class="k">EXT. CON FLOOR. DAY.</p><h2>Fans &amp; press<svg viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M3.1,13.9 L5.0,11.8 L7.1,9.7 L9.9,7.8 L14.2,6.3 L18.2,4.7 L22.6,3.3 L27.1,1.9 L32.6,1.3 L37.8,0.3 L43.4,-0.1 L49.1,0.0 L54.8,-0.2 L60.4,0.2 L65.9,0.8 L71.6,1.3 L76.0,2.8 L80.6,4.1 L85.9,5.2 L89.2,7.1 L92.4,9.0 L95.4,10.9 L97.8,13.0 L100.4,15.1 L100.4,17.5 L100.8,19.7 L101.2,22.0 L100.3,24.3 L99.4,26.6 L97.1,28.8 L93.7,30.7 L90.3,32.6 L87.2,34.6 L83.1,36.2 L77.5,37.2 L73.0,38.7 L67.7,39.7 L62.0,40.3 L56.2,40.4 L50.4,41.0 L44.5,40.8 L38.9,40.2 L33.1,39.8 L27.9,38.7 L22.9,37.5 L17.8,36.3 L13.4,34.8 L9.4,33.1 L5.6,31.3 L2.4,29.3 L-0.1,27.1 L-1.9,24.8 L-3.0,22.5 L-3.1,20.1 L-2.1,17.7 L-1.0,15.4 L-0.0,13.0 L2.3,10.8 L5.0,8.7 L9.1,7.0 L12.8,5.1" vector-effect="non-scaling-stroke"></path></svg></h2><p class="in">Characters, conventions, talks, signed prints and the press kit.</p><span class="go">this way →</span></a>
<a class="door" href="@@P:coaching@@"><p class="k">INT. CLASSROOM. LATER.</p><h2>Coaching<svg viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M3.1,13.9 L4.8,11.8 L7.3,9.8 L9.7,7.7 L13.8,6.1 L17.7,4.4 L22.7,3.4 L27.3,2.0 L32.3,0.9 L37.8,0.4 L43.3,-0.3 L49.1,-0.4 L54.7,-0.1 L60.2,0.5 L66.0,0.6 L71.0,1.8 L75.9,2.9 L81.3,3.8 L85.8,5.2 L89.7,6.9 L93.3,8.7 L95.3,11.0 L97.4,13.1 L99.2,15.2 L101.5,17.4 L100.7,19.7 L100.5,22.0 L99.5,24.3 L98.1,26.5 L96.0,28.6 L93.7,30.7 L90.3,32.6 L86.7,34.4 L83.0,36.2 L77.7,37.2 L73.1,38.7 L67.7,39.6 L62.0,40.2 L56.2,40.7 L50.4,40.9 L44.6,40.7 L38.9,40.2 L33.2,39.6 L27.8,38.7 L22.6,37.7 L17.2,36.6 L13.3,34.8 L9.7,33.0 L5.8,31.2 L2.4,29.3 L0.6,27.0 L-1.5,24.8 L-1.6,22.4 L-2.0,20.1 L-2.6,17.7 L-0.8,15.4 L0.4,13.1 L2.5,10.9 L5.6,8.9 L9.1,7.0 L13.0,5.2" vector-effect="non-scaling-stroke"></path></svg></h2><p class="in">One-on-ones, career therapy and small group classes.</p><span class="go">this way →</span></a>
</nav>
<p class="trans">DISSOLVE TO:</p>


<!-- ========================================================================
     NOW PLAYING IN...  (the typing line with countries)
     The country list is in the script at the bottom (look for "ctry" or the
     country array). Add a country there and it types it out automatically.
     ======================================================================== -->
<section class="intro">
<figure><img src="@@A:images/photo-web01.jpg@@" alt="Melissa Medína in a tweed blazer by a sunlit window"></figure>
<div class="dlg"><span class="ring"></span><span class="pg">1.</span><p class="cue">MELISSA (V.O.)</p><p class="par">(CM reax, warmly, to you)</p><p class="line">¡Hola, qué tranza! Glad you stopped by. Grounded, cinematic VO performances &amp; mocap are what I book most, but I've got range, for real. I'm just somebody who loves stories and found a home after a lot of wandering and a lot of jobs. Say hi!</p><div class="tone"><span data-tone="0"><svg class="ic" viewBox="0 0 26 27" aria-hidden="true"><path d="M14 2 L6 15 L12 15 L8 26 L19 11 L13 11 L17 2 Z"></path></svg>Badassery<svg viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M2.8,13.9 L4.4,11.7 L7.2,9.7 L10.0,7.8 L13.6,6.0 L18.3,4.7 L22.8,3.4 L27.0,1.9 L32.6,1.2 L37.9,0.6 L43.3,-0.3 L49.1,-0.2 L54.8,-0.4 L60.4,0.2 L66.0,0.7 L71.0,1.8 L76.4,2.5 L81.4,3.7 L85.4,5.4 L89.6,7.0 L93.0,8.8 L95.1,11.0 L98.4,12.9 L99.8,15.2 L100.5,17.4 L100.5,19.7 L101.6,22.1 L100.2,24.3 L99.0,26.6 L97.1,28.8 L94.2,30.8 L91.1,32.8 L86.8,34.4 L82.9,36.2 L77.9,37.4 L73.2,38.8 L67.7,39.7 L61.8,39.9 L56.2,40.4 L50.4,40.6 L44.5,41.0 L38.8,40.3 L33.1,39.8 L27.8,38.7 L22.5,37.7 L17.8,36.4 L13.4,34.8 L9.1,33.2 L5.7,31.3 L2.3,29.3 L0.3,27.0 L-1.8,24.8 L-2.8,22.4 L-3.4,20.1 L-2.6,17.7 L-1.0,15.4 L-0.4,13.0 L1.7,10.7 L4.7,8.6 L8.5,6.8 L12.3,4.9" vector-effect="non-scaling-stroke"></path></svg></span><span data-tone="1"><svg class="ic" viewBox="0 0 26 27" aria-hidden="true"><path d="M13 24 C 5 18, 1 12, 3 7 C 5 2, 11 2, 13 8 C 15 2, 21 2, 23 7 C 25 12, 21 18, 13 24"></path></svg>Heart<svg viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M2.8,13.9 L5.0,11.8 L7.1,9.7 L10.5,8.0 L14.2,6.3 L18.0,4.6 L22.0,3.0 L27.1,1.9 L32.3,1.0 L37.9,0.6 L43.4,-0.0 L49.1,-0.1 L54.7,0.0 L60.3,0.4 L65.8,0.9 L71.5,1.3 L76.6,2.5 L81.3,3.7 L85.7,5.2 L89.0,7.2 L92.5,9.0 L95.8,10.8 L98.3,12.9 L100.2,15.1 L101.4,17.4 L100.6,19.7 L101.2,22.0 L100.5,24.3 L98.7,26.6 L96.2,28.6 L93.9,30.8 L90.2,32.5 L87.3,34.6 L83.0,36.2 L78.0,37.4 L72.8,38.5 L67.8,39.7 L62.0,40.2 L56.3,40.8 L50.4,41.0 L44.6,40.7 L38.8,40.3 L33.1,39.8 L27.7,38.8 L22.8,37.6 L17.8,36.3 L12.9,35.0 L9.8,33.0 L6.3,31.1 L2.7,29.2 L0.8,27.0 L-1.2,24.8 L-2.2,22.4 L-2.4,20.1 L-3.1,17.7 L-1.0,15.4 L0.3,13.1 L2.8,10.9 L5.0,8.7 L8.9,6.9 L12.7,5.1" vector-effect="non-scaling-stroke"></path></svg></span><span data-tone="2"><svg class="ic" viewBox="0 0 26 27" aria-hidden="true"><path d="M13 2 C 6 2, 2 7, 2 13 C 2 20, 7 25, 13 25 C 20 25, 24 20, 24 13 C 24 7, 20 2, 13 2 M8 10 L9 11 M17 10 L18 11 M7 15 C 9 20, 17 20, 19 15"></path></svg>Humor<svg viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M2.3,13.8 L4.1,11.7 L6.6,9.6 L9.6,7.7 L13.5,6.0 L17.5,4.4 L22.8,3.4 L27.3,2.0 L32.2,0.9 L37.8,0.3 L43.3,-0.3 L49.1,0.0 L54.8,-0.1 L60.3,0.3 L65.9,0.7 L71.3,1.5 L75.9,2.9 L80.8,4.0 L85.2,5.5 L89.8,6.9 L93.1,8.8 L95.2,11.0 L98.4,12.9 L99.2,15.2 L101.0,17.4 L100.7,19.7 L100.3,22.0 L100.7,24.4 L98.3,26.5 L96.2,28.6 L94.5,30.9 L91.1,32.8 L86.6,34.4 L83.0,36.2 L78.0,37.4 L73.0,38.7 L67.4,39.3 L62.1,40.4 L56.3,40.7 L50.4,41.1 L44.5,40.9 L38.8,40.2 L33.2,39.6 L27.9,38.7 L22.8,37.6 L18.1,36.2 L13.4,34.8 L9.1,33.2 L6.4,31.1 L2.6,29.2 L0.7,27.0 L-0.9,24.7 L-2.7,22.4 L-2.6,20.1 L-2.1,17.7 L-1.4,15.3 L-0.2,13.0 L3.0,11.0 L4.6,8.6 L9.1,7.0 L12.3,4.9" vector-effect="non-scaling-stroke"></path></svg></span><span data-tone="3"><svg class="ic" viewBox="0 0 26 27" aria-hidden="true"><path d="M13 1 L15.5 5 L15.5 15 L10.5 15 L10.5 5 Z M6 15 L20 15 M13 15 L13 21 M11 21 L15 21 L15 25 L11 25 Z"></path></svg>Villainy<svg viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M2.0,13.8 L4.0,11.6 L7.0,9.7 L10.4,7.9 L14.3,6.3 L17.7,4.5 L22.4,3.2 L27.1,1.9 L32.5,1.2 L37.7,0.3 L43.5,0.1 L49.1,-0.4 L54.8,-0.3 L60.4,0.2 L65.9,0.7 L71.4,1.5 L76.1,2.8 L81.1,3.9 L85.7,5.2 L89.1,7.1 L93.2,8.8 L95.9,10.8 L98.5,12.9 L99.5,15.2 L100.2,17.5 L101.7,19.7 L101.5,22.1 L100.1,24.3 L98.1,26.5 L96.2,28.6 L94.1,30.8 L90.4,32.6 L87.4,34.6 L82.7,36.1 L77.7,37.3 L73.0,38.6 L67.5,39.4 L62.1,40.4 L56.3,40.9 L50.4,40.8 L44.5,40.8 L38.7,40.4 L33.0,39.9 L27.4,39.1 L22.9,37.5 L17.8,36.3 L13.1,34.9 L9.5,33.1 L5.6,31.3 L3.4,29.1 L-0.0,27.1 L-1.2,24.7 L-1.7,22.4 L-2.9,20.1 L-2.1,17.7 L-1.0,15.4 L0.2,13.1 L2.8,10.9 L5.6,8.8 L8.2,6.7 L12.3,4.9" vector-effect="non-scaling-stroke"></path></svg></span></div></div>
<div class="where"><p class="hand" style="font-size:30px;white-space:nowrap;line-height:1.1;color:var(--ivory)">Working with creators in</p><svg width="56" height="56" style="position:absolute;margin:30px 0 0 170px;overflow:visible" aria-hidden="true"><path d="M28 4 L33 21 L51 21 L36 31 L42 49 L28 38 L14 49 L20 31 L5 21 L23 21 Z" fill="none" stroke="#B8232F" stroke-width="2" stroke-linejoin="round" transform="rotate(8 28 28)"></path></svg><p class="n">23</p><p class="u">countries</p><p class="n"><span>&amp; counting</span></p><p class="typed"><span class="k2">(cont'd) Now playing in: </span><span class="ctry"></span><span class="caret"></span></p></div>
</section>


<!-- ========================================================================
     FOOTER
     Sign-off on the left, credit line on the right.
     ======================================================================== -->
<footer class="foot"><span class="sign">Let's make something badass!</span><span class="r">FADE OUT.<br>© 2026 Melissa Medína<br>No AI used. Website lovingly developed by Melissa Medína and <a href="https://dirtylinestudio.com" target="_blank" rel="noopener" style="color: inherit; text-decoration: none; border-bottom: 1px solid #B8232F">Dirtyline Studio</a>, with assets from <a href="https://envato.com" target="_blank" rel="noopener" style="color: inherit; text-decoration: none; border-bottom: 1px solid #B8232F">Envato</a>.</span></footer>
<sc-if value="{{reelOpen}}" hint-placeholder-val="{{ false }}"><div style="position:fixed;inset:0;z-index:50;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center" onClick="{{closeReel}}"><iframe src="https://www.youtube.com/embed/F93S3Hjf6zQ?autoplay=1&amp;rel=0" title="Melissa Medína reel" allow="autoplay; encrypted-media; fullscreen" allowfullscreen="" style="width:960px;aspect-ratio:16/9;border:0"></iframe></div></sc-if>
</div>`;


/* ========================================================================
   4. THE ENGINE  (Preact + the little runtime). Don't touch.
   ======================================================================== */
!function(){var n,l,t,u,i,o,r,e,f,c,s,a,h,p=65536,v=1<<17,d={},y=[],w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_=Array.isArray;function g(n,l){for(var t in l)n[t]=l[t];return n}function m(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function b(l,t,u){var i,o,r,e={};for(r in t)"key"==r?i=t[r]:"ref"==r?o=t[r]:e[r]=t[r];if(arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):u),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===e[r]&&(e[r]=l.defaultProps[r]);return k(l,e,i,o,null)}function k(n,u,i,o,r){var e={type:n,props:u,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++t:r,__i:-1,__u:0};return null==r&&null!=l.vnode&&l.vnode(e),e}function C(n){return n.children}function x(n,l){this.props=n,this.context=l}function S(n,l){if(null==l)return n.__?S(n.__,n.__i+1):null;for(var t;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e)return t.__e;return"function"==typeof n.type?S(n):null}function M(n){var l,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return M(n)}}function P(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!$.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)($)}function $(){var n,t,u,o,r,f,c,s;for(i.sort(e);n=i.shift();)n.__d&&(t=i.length,o=void 0,f=(r=(u=n).__v).__e,c=[],s=[],u.__P&&((o=g({},r)).__v=r.__v+1,l.vnode&&l.vnode(o),O(u.__P,o,r,u.__n,u.__P.namespaceURI,32&r.__u?[f]:null,c,null==f?S(r):f,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,V(c,o,s),o.__e!=f&&M(o)),i.length>t&&i.sort(e));$.__r=0}function I(n,l,t,u,i,o,r,e,f,c,s){var a,h,v,w,_,g=u&&u.__k||y,m=l.length;for(t.__d=f,A(t,l,g),f=t.__d,a=0;a<m;a++)null!=(v=t.__k[a])&&(h=-1===v.__i?d:g[v.__i]||d,v.__i=a,O(n,v,h,i,o,r,e,f,c,s),w=v.__e,v.ref&&h.ref!=v.ref&&(h.ref&&z(h.ref,null,v),s.push(v.ref,v.__c||w,v)),null==_&&null!=w&&(_=w),v.__u&p||h.__k===v.__k?f=E(v,f,n):"function"==typeof v.type&&void 0!==v.__d?f=v.__d:w&&(f=w.nextSibling),v.__d=void 0,v.__u&=-196609);t.__d=f,t.__e=_}function A(n,l,t){var u,i,o,r,e,f=l.length,c=t.length,s=c,a=0;for(n.__k=[],u=0;u<f;u++)null!=(i=l[u])&&"boolean"!=typeof i&&"function"!=typeof i?(r=u+a,(i=n.__k[u]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?k(null,i,null,null,null):_(i)?k(C,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?k(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=n,i.__b=n.__b+1,o=null,-1!==(e=i.__i=F(i,t,r,s))&&(s--,(o=t[e])&&(o.__u|=v)),null==o||null===o.__v?(-1==e&&a--,"function"!=typeof i.type&&(i.__u|=p)):e!==r&&(e==r-1?a--:e==r+1?a++:(e>r?a--:a++,i.__u|=p))):i=n.__k[u]=null;if(s)for(u=0;u<c;u++)null!=(o=t[u])&&0==(o.__u&v)&&(o.__e==n.__d&&(n.__d=S(o)),N(o,o))}function E(n,l,t){var u,i;if("function"==typeof n.type){for(u=n.__k,i=0;u&&i<u.length;i++)u[i]&&(u[i].__=n,l=E(u[i],l,t));return l}n.__e!=l&&(l&&n.type&&!t.contains(l)&&(l=S(n)),t.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function F(n,l,t,u){var i=n.key,o=n.type,r=t-1,e=t+1,f=l[t];if(null===f||f&&i==f.key&&o===f.type&&0==(f.__u&v))return t;if(u>(null!=f&&0==(f.__u&v)?1:0))for(;r>=0||e<l.length;){if(r>=0){if((f=l[r])&&0==(f.__u&v)&&i==f.key&&o===f.type)return r;r--}if(e<l.length){if((f=l[e])&&0==(f.__u&v)&&i==f.key&&o===f.type)return e;e++}}return-1}function H(n,l,t){"-"===l[0]?n.setProperty(l,null==t?"":t):n[l]=null==t?"":"number"!=typeof t||w.test(l)?t:t+"px"}function L(n,l,t,u,i){var o;n:if("style"===l)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof u&&(n.style.cssText=u=""),u)for(l in u)t&&l in t||H(n.style,l,"");if(t)for(l in t)u&&t[l]===u[l]||H(n.style,l,t[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=t,t?u?t.t=u.t:(t.t=f,n.addEventListener(l,o?s:c,o)):n.removeEventListener(l,o?s:c,o);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||!1===t&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==t?"":t))}}function T(n){return function(t){if(this.l){var u=this.l[t.type+n];if(null==t.u)t.u=f++;else if(t.u<u.t)return;return u(l.event?l.event(t):t)}}}function O(n,t,u,i,o,r,e,f,c,s){var a,h,p,v,d,y,w,m,b,k,S,M,P,$,A,E,F=t.type;if(void 0!==t.constructor)return null;128&u.__u&&(c=!!(32&u.__u),r=[f=t.__e=u.__e]),(a=l.__b)&&a(t);n:if("function"==typeof F)try{if(m=t.props,b="prototype"in F&&F.prototype.render,k=(a=F.contextType)&&i[a.__c],S=a?k?k.props.value:a.__:i,u.__c?w=(h=t.__c=u.__c).__=h.__E:(b?t.__c=h=new F(m,S):(t.__c=h=new x(m,S),h.constructor=F,h.render=R),k&&k.sub(h),h.props=m,h.state||(h.state={}),h.context=S,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),b&&null==h.__s&&(h.__s=h.state),b&&null!=F.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=g({},h.__s)),g(h.__s,F.getDerivedStateFromProps(m,h.__s))),v=h.props,d=h.state,h.__v=t,p)b&&null==F.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),b&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(b&&null==F.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,S),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,S)||t.__v===u.__v)){for(t.__v!==u.__v&&(h.props=m,h.state=h.__s,h.__d=!1),t.__e=u.__e,t.__k=u.__k,t.__k.some(function(n){n&&(n.__=t)}),M=0;M<h._sb.length;M++)h.__h.push(h._sb[M]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,S),b&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,d,y)})}if(h.context=S,h.props=m,h.__P=n,h.__e=!1,P=l.__r,$=0,b){for(h.state=h.__s,h.__d=!1,P&&P(t),a=h.render(h.props,h.state,h.context),A=0;A<h._sb.length;A++)h.__h.push(h._sb[A]);h._sb=[]}else do{h.__d=!1,P&&P(t),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(i=g(g({},i),h.getChildContext())),b&&!p&&null!=h.getSnapshotBeforeUpdate&&(y=h.getSnapshotBeforeUpdate(v,d)),I(n,_(E=null!=a&&a.type===C&&null==a.key?a.props.children:a)?E:[E],t,u,i,o,r,e,f,c,s),h.base=t.__e,t.__u&=-161,h.__h.length&&e.push(h),w&&(h.__E=h.__=null)}catch(n){if(t.__v=null,c||null!=r){for(t.__u|=c?160:128;f&&8===f.nodeType&&f.nextSibling;)f=f.nextSibling;r[r.indexOf(f)]=null,t.__e=f}else t.__e=u.__e,t.__k=u.__k;l.__e(n,t,u)}else null==r&&t.__v===u.__v?(t.__k=u.__k,t.__e=u.__e):t.__e=j(u.__e,t,u,i,o,r,e,c,s);(a=l.diffed)&&a(t)}function V(n,t,u){t.__d=void 0;for(var i=0;i<u.length;i++)z(u[i],u[++i],u[++i]);l.__c&&l.__c(t,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(n){n.call(t)})}catch(n){l.__e(n,t.__v)}})}function j(t,u,i,o,r,e,f,c,s){var a,h,p,v,y,w,g,b=i.props,k=u.props,C=u.type;if("svg"===C?r="http://www.w3.org/2000/svg":"math"===C?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((y=e[a])&&"setAttribute"in y==!!C&&(C?y.localName===C:3===y.nodeType)){t=y,e[a]=null;break}if(null==t){if(null===C)return document.createTextNode(k);t=document.createElementNS(r,C,k.is&&k),c&&(l.__m&&l.__m(u,e),c=!1),e=null}if(null===C)b===k||c&&t.data===k||(t.data=k);else{if(e=e&&n.call(t.childNodes),b=i.props||d,!c&&null!=e)for(b={},a=0;a<t.attributes.length;a++)b[(y=t.attributes[a]).name]=y.value;for(a in b)if(y=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)p=y;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;L(t,a,null,y,r)}for(a in k)y=k[a],"children"==a?v=y:"dangerouslySetInnerHTML"==a?h=y:"value"==a?w=y:"checked"==a?g=y:c&&"function"!=typeof y||b[a]===y||L(t,a,y,b[a],r);if(h)c||p&&(h.__html===p.__html||h.__html===t.innerHTML)||(t.innerHTML=h.__html),u.__k=[];else if(p&&(t.innerHTML=""),I(t,_(v)?v:[v],u,i,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":r,e,f,e?e[0]:i.__k&&S(i,0),c,s),null!=e)for(a=e.length;a--;)m(e[a]);c||(a="value","progress"===C&&null==w?t.removeAttribute("value"):void 0!==w&&(w!==t[a]||"progress"===C&&!w||"option"===C&&w!==b[a])&&L(t,a,w,b[a],r),a="checked",void 0!==g&&g!==t[a]&&L(t,a,g,b[a],r))}return t}function z(n,t,u){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==t||(n.__u=n(t))}else n.current=t}catch(n){l.__e(n,u)}}function N(n,t,u){var i,o;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||z(i,null,t)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,t)}i.base=i.__P=null}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&N(i[o],t,u||"function"!=typeof n.type);u||m(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function R(n,l,t){return this.constructor(n,t)}function q(t,u,i){var o,r,e,f;l.__&&l.__(t,u),r=(o="function"==typeof i)?null:i&&i.__k||u.__k,e=[],f=[],O(u,t=(!o&&i||u).__k=b(C,null,[t]),r||d,d,u.namespaceURI,!o&&i?[i]:r?null:u.firstChild?n.call(u.childNodes):null,e,!o&&i?i:r?r.__e:u.firstChild,o,f),V(e,t,f)}n=y.slice,l={__e:function(n,l,t,u){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,u||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},t=0,u=function(n){return null!=n&&null==n.constructor},x.prototype.setState=function(n,l){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=g({},this.state),"function"==typeof n&&(n=n(g({},t),this.props)),n&&g(t,n),null!=n&&this.__v&&(l&&this._sb.push(l),P(this))},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),P(this))},x.prototype.render=C,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e=function(n,l){return n.__v.__b-l.__v.__b},$.__r=0,f=0,c=T(!1),s=T(!0),a=0,h={__proto__:null,render:q,hydrate:function n(l,t){q(l,t,n)},createElement:b,h:b,Fragment:C,createRef:function(){return{current:null}},isValidElement:u,Component:x,cloneElement:function(l,t,u){var i,o,r,e,f=g({},l.props);for(r in l.type&&l.type.defaultProps&&(e=l.type.defaultProps),t)"key"==r?i=t[r]:"ref"==r?o=t[r]:f[r]=void 0===t[r]&&void 0!==e?e[r]:t[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):u),k(l.type,f,i||l.key,o||l.ref,null)},createContext:function(n,l){var t={__c:l="__cC"+a++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,u;return this.getChildContext||(t=new Set,(u={})[l]=this,this.getChildContext=function(){return u},this.componentWillUnmount=function(){t=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&t.forEach(function(n){n.__e=!0,P(n)})},this.sub=function(n){t.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t&&t.delete(n),l&&l.call(n)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t},toChildArray:function n(l,t){return t=t||[],null==l||"boolean"==typeof l||(_(l)?l.some(function(l){n(l,t)}):t.push(l)),t},options:l},typeof module<"u"?module.exports=h:self.preact=h}();
//# sourceMappingURL=preact.min.js.map

const HM = window.HM || { ASSETS: '', LINKS: {}, PAGES: {} };
const fix = (s) => s
  .replace(/@@A:([^@]+)@@/g, (_, n) => (HM.LINKS && HM.LINKS[n]) || (HM.ASSETS || '') + n)
  .replace(/@@P:([a-z]+)@@/g, (_, k) => (HM.PAGES && HM.PAGES[k]) || '/');
(() => {
  const st = document.createElement('style');
  st.textContent = fix(HM_CSS);
  document.head.appendChild(st);
  const tp = document.createElement('template'); tp.id = 'hm-tpl-home'; tp.innerHTML = fix(TPL); document.body.appendChild(tp);
})();
const { h, render, Component: PC } = window.preact;
class DCLogic {
  constructor(props) { this.props = props || {}; this.state = {}; }
  setState(p, cb) { const s = typeof p === 'function' ? p(this.state) : p; this.state = Object.assign({}, this.state, s); if (this.__host) this.__host.forceUpdate(cb); else if (cb) cb(); }
}
window.DCLogic = DCLogic;
const HOLE = /\{\{\s*([^}]*?)\s*\}\}/g;
function look(expr, scope) {
  if (expr === 'true') return true; if (expr === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(expr)) return Number(expr);
  const parts = expr.split('.'); let v;
  for (let i = scope.length - 1; i >= 0; i--) { if (scope[i] && parts[0] in scope[i]) { v = scope[i][parts[0]]; break; } }
  for (let k = 1; k < parts.length && v != null; k++) v = v[parts[k]];
  return typeof v === 'string' && v.includes('@@') ? fix(v) : v;
}
function interp(str, scope) {
  const whole = str.match(/^\{\{\s*([^}]*?)\s*\}\}$/);
  if (whole) return look(whole[1], scope);
  return str.replace(HOLE, (_, e) => { const v = look(e, scope); return v == null ? '' : String(v); });
}
function kids(node, scope) { const out = []; node.childNodes.forEach((c) => { const r = build(c, scope); if (Array.isArray(r)) out.push(...r); else if (r != null) out.push(r); }); return out; }
function build(node, scope) {
  if (node.nodeType === 3) { const s = node.nodeValue; if (!s.includes('{{')) return s; const v = interp(s, scope); return v == null || v === false ? null : String(v); }
  if (node.nodeType !== 1) return null;
  const tag = node.tagName.toLowerCase();
  if (tag === 'sc-for') { const list = interp(node.getAttribute('list'), scope) || []; const as = node.getAttribute('as'); return list.flatMap((item) => kids(node, scope.concat([{ [as]: item }]))); }
  if (tag === 'sc-if') { return interp(node.getAttribute('value'), scope) ? kids(node, scope) : null; }
  const props = {};
  for (const a of node.attributes) {
    let n = a.name; if (n.startsWith('hint-')) continue;
    let v = a.value.includes('{{') ? interp(a.value, scope) : a.value;
    if (n === 'onchange' && tag === 'input') n = 'oninput';
    if (n.startsWith('on') && typeof v !== 'function') continue;
    props[n] = v;
  }
  const isSvg = node.namespaceURI === 'http://www.w3.org/2000/svg';
  return h(isSvg ? node.tagName : tag, props, ...(tag === 'template' ? [] : kids(node, scope)));
}
// #links: scroll to the section ourselves so Carrd doesn't hijack them
document.addEventListener('click', (e) => {
  const a = e.target.closest && e.target.closest('#hm-home a[href^="#"]');
  if (!a) return; const id = a.getAttribute('href').slice(1); if (!id) { e.preventDefault(); return; }
  const el = document.getElementById('hm-home').querySelector('#' + CSS.escape(id)); if (!el) return;
  e.preventDefault(); e.stopPropagation();
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}, true);
window.__hmBoot_home = (Component) => {
  const tpl = document.getElementById('hm-tpl-home').content;
  const root = document.getElementById('hm-home');
  class Host extends PC {
    constructor(p) { super(p); this.logic = new Component({ theme: 'auto' }); this.logic.__host = this; }
    componentDidMount() { this.logic.componentDidMount && this.logic.componentDidMount(); }
    componentWillUnmount() { this.logic.componentWillUnmount && this.logic.componentWillUnmount(); }
    render() { return h('div', null, ...kids(tpl, [this.logic.renderVals()])); }
  }
  // Carrd hides the sections I'm not on. Only start this page once its section is showing.
  const go = () => { if (root.getClientRects().length) { clearInterval(t); render(h(Host), root); } };
  const t = setInterval(go, 300); go();
};



/* ========================================================================
   5. MY CONTENT  (the lists, links and switches for this page)
   Change the stuff in quotes. Keep commas and brackets where they are.
   If the page goes blank after an edit: undo, look for a missing comma.
   ======================================================================== */
function rnd(seed) { let s = seed; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }
const COUNTRIES = ['the United States', 'Canada', 'Mexico', 'England', 'Ireland', 'Scotland', 'Poland', 'Russia', 'the Netherlands', 'Italy', 'France', 'New Zealand', 'Australia', 'China', 'Japan', 'South Korea', 'Sweden', 'Switzerland', 'Germany', 'Brazil', 'Spain', 'Argentina', 'India'];
function setupHome(root) {
  if (root.__h2) return; root.__h2 = true;
  // the reel's waveform runs along the bottom of the frame like a timeline and plays through
  const r = rnd(9); let d = ''; let env = 0, left = 0, tgt = 0;
  for (let x = 0; x < 1280; x += 3) {
    if (left <= 0) { const quiet = r() < 0.22; left = quiet ? 5 + Math.floor(r() * 12) : 16 + Math.floor(r() * 44); tgt = quiet ? 1 : 6 + r() * 19; } left--;
    env += (tgt - env) * 0.16; const a = Math.max(0.8, env * (0.45 + 0.55 * r()));
    d += 'M' + x + ',' + (27 - a).toFixed(1) + 'h2v' + (2 * a).toFixed(1) + 'h-2z';
  }
  root.querySelector('.scrub .dim').setAttribute('d', d); root.querySelector('.scrub .lit').setAttribute('d', d);
  const clip = root.querySelector('.scrub .clip'); const clock = root.querySelector('.clock'); const t0 = performance.now(); const LEN = 96000;
  const pad = (n) => String(n).padStart(2, '0');
  const run = (t) => { const el = t - t0; const p = (el % LEN) / LEN; clip.setAttribute('width', (1280 * p).toFixed(1));
    const s = Math.floor(el / 1000) % 3600; if (clock) clock.textContent = '00:' + pad(Math.floor(s / 60)) + ':' + pad(s % 60) + ':' + pad(Math.floor((el % 1000) / 41.7));
    root.__raf = requestAnimationFrame(run); };
  root.__raf = requestAnimationFrame(run);
  const tones = Array.prototype.slice.call(root.querySelectorAll('[data-tone]')); let ti = 0;
  const hop = () => { tones.forEach((t, i) => t.classList.toggle('on', i === ti)); ti = (ti + 1) % tones.length; };
  setTimeout(hop, 1200); root.__toneTimer = setInterval(hop, 2400);
  const nud = root.querySelector('.tNudge'); let nx = 0;
  const nudge = (d) => { const half = nud.scrollWidth / 2 || 2000; nx += d * 320; if (nx > 0) nx -= half; if (nx < -half) nx += half; nud.style.transform = 'translateX(' + nx + 'px)'; };
  root.querySelector('.tkBtn.prev').addEventListener('click', () => nudge(1));
  root.querySelector('.tkBtn.next').addEventListener('click', () => nudge(-1));
  const out = root.querySelector('.ctry'); let ci = 14, ch = 0, dir = 1, wait = 0;
  root.__typeTimer = setInterval(() => {
    const word = COUNTRIES[ci];
    if (wait > 0) wait--; else if (dir > 0) { ch++; if (ch >= word.length) { dir = -1; wait = 18; } } else { ch--; if (ch <= 0) { dir = 1; ci = (ci + 1 + Math.floor(Math.random() * 3)) % COUNTRIES.length; wait = 4; } }
    out.textContent = word.slice(0, ch);
  }, 85);
}
function sgCopy(t) {
  const fb = () => { try { const a = document.createElement('textarea'); a.value = t; a.setAttribute('readonly', ''); a.style.position = 'fixed'; a.style.top = '0'; a.style.opacity = '0'; document.body.appendChild(a); a.select(); a.setSelectionRange(0, t.length); document.execCommand('copy'); a.remove(); } catch (e) {} };
  try { if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(t).catch(fb); else fb(); } catch (e) { fb(); }
}

// ----------------------------------------------------------------------
// THE PAGE BRAIN: renderVals() hands the page everything it shows. Links like resumePdf, specsPdf, rawSrc, ongoing, faq and reps are in here. Edit the values, not the plumbing.
// ----------------------------------------------------------------------
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { reelOpen: false };
    this.setRoot = (el) => { if (el) { this.root = el; setupHome(el); } };
  }
  componentWillUnmount() { if (this.root) { clearInterval(this.root.__toneTimer); clearInterval(this.root.__typeTimer); cancelAnimationFrame(this.root.__raf); } }
  renderVals() {
    return { setRoot: this.setRoot, reelOpen: !!this.state.reelOpen, openReel: () => this.setState({ reelOpen: true }), closeReel: () => this.setState({ reelOpen: false }) };
  }
}

window.__hmBoot_home(Component);

})();
