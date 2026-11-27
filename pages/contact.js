/*
========================================================================
  HEARMELISSA.COM  ·  CONTACT PAGE  ·  ONE CARRD EMBED, THE WHOLE PAGE
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
    This file lives on GitHub: hearmelissa/pages/contact.js
    Carrd only has a tiny loader for it (in the "contact" section's Embed).
    So to change this page: edit THIS file on GitHub, commit, wait a
    few minutes, refresh the site. No need to touch Carrd at all.

  CARRD SETUP FOR THIS PAGE
    Carrd doesn't do real pages. It does SECTIONS: one site, and each
    "page" is a section that starts with a Section Break named "contact".
    Under that Section Break: one Embed > Type: Code > Style: Inline.
    Paste ALL of this into it. Full width, no padding.
    This page only wakes up when its section is open, so all five can
    live in the same Carrd site without stepping on each other.
    Mobile: nothing to swap. This code already rearranges itself for phones.
========================================================================
*/

(function () {
if (window.__hm_contact_loaded) return; window.__hm_contact_loaded = true;


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
  PAGES: { home: 'https://hearmelissa.com/', hire: 'https://hearmelissa.com/#hire', fans: 'https://hearmelissa.com/#fans', coaching: 'https://hearmelissa.com/#coaching', contact: 'https://hearmelissa.com/#contact' }
};


/* ========================================================================
   2. STYLES  (all the CSS for this page)
   ======================================================================== */
const HM_CSS = `/* FULL WIDTH: breaks my page out of Carrd's narrow center column
   so it fills the whole browser window, edge to edge. */
#hm-contact{width:100vw !important;max-width:100vw !important;position:relative !important;left:50% !important;margin-left:-50vw !important;margin-right:0 !important}
html,body{overflow-x:hidden}
/* BIG SCREENS: everything scales up a bit on wide monitors so the
   content isn't a skinny strip in the middle. Bigger zoom = bigger page. */
@media (min-width:1600px){#hm-contact > div{zoom:1.15}}
@media (min-width:1850px){#hm-contact > div{zoom:1.3}}
@media (min-width:2100px){#hm-contact > div{zoom:1.45}}
@media (min-width:2400px){#hm-contact > div{zoom:1.65}}
@media (min-width:2800px){#hm-contact > div{zoom:1.9}}
/* NO INNER SCROLL BOX: the browser page scrolls, not a box inside it. */
#hm-contact .h2m,#hm-contact .inkScroll{height:auto !important;max-height:none !important;overflow:visible !important}

#hm-contact{margin:0;background:#F1E9DC}
#hm-contact img{-webkit-user-drag:none;user-drag:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;pointer-events:none}
#hm-contact a{color:inherit}#hm-contact a:hover{opacity:0.85}
#hm-contact .paper{background-color:#F1E9DC;background-image:url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.35  0 0 0 0 0.28  0 0 0 0 0.2  0 0 0 0.09 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),radial-gradient(ellipse 80% 60% at 20% 10%, rgba(255,252,246,0.7), rgba(255,252,246,0) 70%),radial-gradient(ellipse 70% 60% at 90% 90%, rgba(196,170,140,0.25), rgba(196,170,140,0) 70%)}
#hm-contact .thm{--t0:#F1E9DC;--t1:#4E1F45;--t2:#4E1F45;--t3:#17110F;--t4:rgba(23,17,15,0.25);--t5:rgba(23,17,15,0.6);--t6:rgba(241,233,220,0.46);--t7:rgba(241,233,220,0.33);--t8:rgba(241,233,220,0.55);--t9:rgba(241,233,220,1);--t10:rgba(23,17,15,0.5);--t11:rgba(23,17,15,0.2);--t12:#4E1F45;--t13:rgba(23,17,15,0.35);--t14:rgba(23,17,15,0.3);--t15:#4E3F3A;--t16:rgba(23,17,15,0.45);--t17:brightness(0);--t18:0.82;--t19:#5E4E48;--t20:#17110F;--t21:rgba(23,17,15,0.06);--t22:#F1E9DC;--t23:rgba(241,233,220,0.45);--t24:rgba(241,233,220,0.08);--badgeBg:#F1E9DC;--edge:rgba(196,160,98,0);--badgeSh:rgba(23,17,15,0.18);--disc:#17110F;--badgeInk:#17110F}
#hm-contact .thm.dark{--t0:#120D11;--t1:#EFE4DC;--t2:#C4A062;--t3:#EFE4DC;--t4:rgba(239,228,220,0.25);--t5:rgba(239,228,220,0.6);--t6:rgba(18,13,17,0.5);--t7:rgba(18,13,17,0.37);--t8:rgba(18,13,17,0.58);--t9:rgba(18,13,17,1);--t10:rgba(239,228,220,0.5);--t11:rgba(239,228,220,0.2);--t12:#D9A9CD;--t13:rgba(239,228,220,0.35);--t14:rgba(239,228,220,0.35);--t15:#D8CCD2;--t16:rgba(239,228,220,0.45);--t17:brightness(1.12);--t18:0.9;--t19:#A8979C;--t20:rgba(239,228,220,0.7);--t21:rgba(239,228,220,0.06);--t22:#17110F;--t23:rgba(23,17,15,0.4);--t24:rgba(23,17,15,0.07);--badgeBg:#1B1319;--edge:rgba(196,160,98,0.6);--badgeSh:rgba(0,0,0,0.45);--disc:#120D11;--badgeInk:#EFE4DC}
#hm-contact .thm .onD{display:none!important}
#hm-contact .thm.dark .onL{display:none!important}#hm-contact .thm.dark .onD{display:block!important}
#hm-contact .thm.dark{background-color:#120D11;background-image:url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.85  0 0 0 0 0.9  0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),radial-gradient(ellipse 80% 60% at 20% 10%, rgba(78,31,69,0.35), rgba(78,31,69,0) 70%),radial-gradient(ellipse 70% 60% at 90% 90%, rgba(58,22,52,0.4), rgba(58,22,52,0) 70%)}
@media (prefers-color-scheme: dark){
#hm-contact{background:#120D11}
#hm-contact .thm.auto{--t0:#120D11;--t1:#EFE4DC;--t2:#C4A062;--t3:#EFE4DC;--t4:rgba(239,228,220,0.25);--t5:rgba(239,228,220,0.6);--t6:rgba(18,13,17,0.5);--t7:rgba(18,13,17,0.37);--t8:rgba(18,13,17,0.58);--t9:rgba(18,13,17,1);--t10:rgba(239,228,220,0.5);--t11:rgba(239,228,220,0.2);--t12:#D9A9CD;--t13:rgba(239,228,220,0.35);--t14:rgba(239,228,220,0.35);--t15:#D8CCD2;--t16:rgba(239,228,220,0.45);--t17:brightness(1.12);--t18:0.9;--t19:#A8979C;--t20:rgba(239,228,220,0.7);--t21:rgba(239,228,220,0.06);--t22:#17110F;--t23:rgba(23,17,15,0.4);--t24:rgba(23,17,15,0.07);--badgeBg:#1B1319;--edge:rgba(196,160,98,0.6);--badgeSh:rgba(0,0,0,0.45);--disc:#120D11;--badgeInk:#EFE4DC}
#hm-contact .thm.auto .onL{display:none!important}#hm-contact .thm.auto .onD{display:block!important}
#hm-contact .thm.auto{background-color:#120D11;background-image:url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.85  0 0 0 0 0.9  0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),radial-gradient(ellipse 80% 60% at 20% 10%, rgba(78,31,69,0.35), rgba(78,31,69,0) 70%),radial-gradient(ellipse 70% 60% at 90% 90%, rgba(58,22,52,0.4), rgba(58,22,52,0) 70%)}
}
#hm-contact .fr{font-family:'Fraunces',Georgia,serif;font-variation-settings:'SOFT' 100,'WONK' 0;font-optical-sizing:auto}
#hm-contact .fri{font-family:'Fraunces',Georgia,serif;font-style:italic;font-variation-settings:'SOFT' 100,'WONK' 1;font-optical-sizing:auto}
#hm-contact .tile{transition:transform .5s ease}
#hm-contact .tile:hover{transform:translateY(-5px)}
#hm-contact .tile:hover .go{transform:translateX(6px)}
#hm-contact .go{transition:transform .4s ease}
#hm-contact .nv{position:relative;display:inline-block;height:24px;overflow:hidden;text-decoration:none;padding:0 2px}
#hm-contact .nv span{display:block;height:24px;line-height:24px;transition:transform .5s cubic-bezier(.2,.75,.2,1);text-align:center}
#hm-contact .nv .b{position:absolute;left:0;right:0;top:100%;font-family:'Fraunces',Georgia,serif;font-style:italic;font-variation-settings:'SOFT' 100,'WONK' 1;font-size:20px;letter-spacing:0;text-transform:none;color:var(--t1)}
#hm-contact .nv::after{content:'';position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--t2);transform:scaleX(0);transition:transform .5s cubic-bezier(.2,.75,.2,1)}
#hm-contact .nv:hover span,#hm-contact .nv:focus-visible span{transform:translateY(-100%)}
#hm-contact .nv:hover::after,#hm-contact .nv:focus-visible::after{transform:scaleX(1)}
#hm-contact .nv:hover,#hm-contact .nv:focus-visible{opacity:1;outline:none}
#hm-contact .mq{position:relative;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
#hm-contact .mqTrack{display:flex;align-items:center;width:max-content;animation:mq 60s linear infinite}
#hm-contact .mq:hover .mqTrack{animation-play-state:paused}
@keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes spinSlow{to{transform:rotate(360deg)}}
#hm-contact .badge{animation:spinSlow 22s linear infinite}
#hm-contact .reelBtn:hover .badge{animation-duration:6s}
@media (prefers-reduced-motion: reduce){#hm-contact .mqTrack,#hm-contact .badge,#hm-contact .nv span,#hm-contact .nv::after{animation:none;transition:none}}
@media (max-width: 760px){#hm-contact .bgReel{display:none}}
@media (max-width: 980px){
#hm-contact .mHero{grid-template-columns:minmax(0,1fr)!important;gap:56px!important;padding:40px 24px 20px!important;justify-items:center}
#hm-contact .mRight{height:auto!important;width:100%;max-width:420px;display:flex!important;flex-direction:column;align-items:center;gap:34px}
#hm-contact .mCircle,#hm-contact .mWords,#hm-contact .mGlobe{position:relative!important;left:auto!important;right:auto!important;top:auto!important}
#hm-contact .mWords{width:100%!important;max-width:320px}
#hm-contact .mGlobe{margin-bottom:110px}
#hm-contact .mDoors{grid-template-columns:minmax(0,1fr)!important}
}
@media (max-width: 640px){
#hm-contact .mHdr{grid-template-columns:auto 1fr!important;row-gap:10px;padding:12px 20px!important}
#hm-contact .mNav{grid-column:1 / -1;grid-row:2;justify-content:center;gap:22px!important;font-size:10px!important;letter-spacing:0.2em!important}
#hm-contact .mFig{width:min(300px,74vw)!important;height:min(430px,106vw)!important}
#hm-contact .mBadge{transform:scale(0.78);transform-origin:100% 100%;right:-26px!important;bottom:30px!important}
#hm-contact .mCircle{width:280px!important;height:280px!important}
#hm-contact .mCircle .fr,#hm-contact .mCircle .fri{font-size:60px!important}
#hm-contact .mGlobe{width:250px!important;height:250px!important}
#hm-contact .mPill{white-space:normal!important;width:max-content;max-width:80vw;text-align:center}
#hm-contact .mGlad{padding:40px 22px 6px!important}
#hm-contact .mH2{font-size:36px!important}
#hm-contact .mLede{font-size:18px!important}
#hm-contact .mDoorsS{padding:0 18px 48px!important}
#hm-contact .mDoor{height:110px!important;padding:0 22px 0 16px!important}
#hm-contact .mDoor > span > .fri{font-size:30px!important}
#hm-contact .mFoot{grid-template-columns:minmax(0,1fr)!important;justify-items:center;text-align:center;padding:24px 20px!important}
}

/* ---- PAGE COLORS: light first, dark below ---- */
#hm-contact .thm{--bg:#F1E9DC;--ink:#17110F;--mute:#6A5A54;--soft:#3B302C;--acc:#4E1F45;--rgb:23,17,15;--panel:#E9DFCF;--panel2:#DCCDB8}
#hm-contact .thm.dark{--bg:#120D11;--ink:#EFE4DC;--mute:#A8979C;--soft:#D8CCD2;--acc:#D9A9CD;--rgb:239,228,220;--panel:#1B1319;--panel2:#2A1E27}
@media (prefers-color-scheme: dark){#hm-contact .thm.auto{--bg:#120D11;--ink:#EFE4DC;--mute:#A8979C;--soft:#D8CCD2;--acc:#D9A9CD;--rgb:239,228,220;--panel:#1B1319;--panel2:#2A1E27}}
#hm-contact .thm{font-variation-settings:'SOFT' 100,'WONK' 1}

/* ---- PHONES + TABLETS ---- */
@media (max-width: 980px){
#hm-contact .thm section{padding-left:24px!important;padding-right:24px!important}
#hm-contact .lOne{grid-template-columns:minmax(0,1fr)!important}
#hm-contact .lOffer{padding-right:0!important}
#hm-contact .lTwo{grid-template-columns:minmax(0,1fr)!important}
#hm-contact .lTwo > div{border-right:0!important;padding:48px 0!important}
#hm-contact .lWord{font-size:200px!important}
}
@media (max-width: 640px){
#hm-contact .thm section{padding-left:18px!important;padding-right:18px!important}
#hm-contact .thm h2{font-size:30px!important}
#hm-contact .lTwo h2{font-size:42px!important}
#hm-contact .lBig{font-size:30px!important;letter-spacing:0.1em!important}
#hm-contact .lBand{height:200px!important}
#hm-contact .lWord{font-size:110px!important;top:10px!important}
#hm-contact .lQuote{top:56px!important;height:auto!important;padding:12px 0;flex-direction:column;align-items:flex-start!important;gap:6px!important}
#hm-contact .lQuote p{font-size:20px!important}
#hm-contact .lQuote span{text-align:left!important}
#hm-contact .lOne{text-align:left!important}
#hm-contact .lOffer{grid-template-columns:96px minmax(0,1fr)!important;gap:16px!important}
}
#hm-contact .nv[aria-current="page"] span{transform:translateY(-100%)}
#hm-contact .nv[aria-current="page"]::after{transform:scaleX(1);height:2px}
#hm-contact .nv[aria-current="page"] .b{color:var(--t2)}
#hm-contact .jump a{position:relative;z-index:0;padding:8px 14px!important;border:0!important;border-radius:999px;text-decoration:none;transition:color .35s ease}
#hm-contact .jump a::before{content:'';position:absolute;inset:0;z-index:-1;border-radius:999px;background:rgba(243,230,234,0.16);transform:scaleX(0);transform-origin:left center;transition:transform .45s cubic-bezier(.2,.75,.2,1),background-color .35s ease}
#hm-contact .jump a:hover::before,#hm-contact .jump a:focus-visible::before{transform:scaleX(1)}
#hm-contact .jump a.on{color:#4E1F45!important}
#hm-contact .jump a.on::before{background:#F3E6EA;transform:scaleX(1)}
#hm-contact .jump .jPage{display:inline-flex;align-items:center;gap:10px;margin-right:14px;padding-right:18px;border-right:1px solid rgba(243,230,234,0.35);font-family:'Fraunces',Georgia,serif;font-style:italic;font-size:21px;letter-spacing:0;text-transform:none;color:#E7BEDB}
#hm-contact .jump .jPage i{display:block;width:7px;height:7px;background:#E2508C;transform:rotate(45deg)}
@media (max-width: 760px){#hm-contact .jump .jPage{display:none}}
@media (prefers-reduced-motion: reduce){#hm-contact .jump a,#hm-contact .jump a::before{transition:none}}
#hm-contact .thm section[id]{scroll-margin-top:72px}
#hm-contact .thm [id]{scroll-margin-top:72px}
#hm-contact .nv:hover span,#hm-contact .nv:focus-visible span,#hm-contact .nv[aria-current="page"] span{transform:none!important}
#hm-contact .nv .a{transition:color .35s ease}
#hm-contact .nv:hover .a,#hm-contact .nv:focus-visible .a,#hm-contact .nv[aria-current="page"] .a{color:var(--t2)}
#hm-contact .jump .jPage{font-family:'Jost',sans-serif!important;font-style:normal!important;font-weight:500;font-size:11.5px!important;letter-spacing:0.24em!important;text-transform:uppercase!important}
#hm-contact .lBook2{transition:background-color .3s ease,color .3s ease}#hm-contact .lBook2:hover{background:var(--ink);color:var(--bg);opacity:1}
#hm-contact .lBook{transition:background-color .3s ease,color .3s ease}#hm-contact .lBook:hover{background:#F3E6EA;color:#4E1F45;opacity:1}
@media (max-width: 980px){#hm-contact .lGuide,#hm-contact .lGroups{grid-template-columns:minmax(0,1fr)!important}#hm-contact .lGuide > div{border-right:0!important;border-bottom:1px solid rgba(243,230,234,0.3)}}
#hm-contact .xBtn{position:relative;z-index:0;overflow:hidden;display:inline-flex;align-items:center;gap:10px;min-height:44px;padding:0 18px;border:1px solid currentColor;background:none;color:inherit;font-size:10.5px;font-weight:500;letter-spacing:0.28em;text-transform:uppercase;text-decoration:none;cursor:pointer;transition:color .4s ease}
#hm-contact .xBtn::before{content:'';position:absolute;inset:0;z-index:-1;transform:translateY(101%);transition:transform .45s cubic-bezier(.2,.75,.2,1)}
#hm-contact .xBtn:hover::before,#hm-contact .xBtn:focus-visible::before{transform:translateY(0)}
#hm-contact .xBtn .xArr{transition:transform .4s cubic-bezier(.2,.75,.2,1)}#hm-contact .xBtn:hover .xArr{transform:translate(3px,-3px)}
#hm-contact .xBtn .xPlus{transition:transform .4s cubic-bezier(.2,.75,.2,1)}#hm-contact .xBtn:hover .xPlus{transform:rotate(90deg)}
#hm-contact .xLight{color:#F3E6EA}#hm-contact .xLight::before{background:#F3E6EA}#hm-contact .xLight:hover,#hm-contact .xLight:focus-visible{color:#4E1F45;opacity:1}
#hm-contact .xLight.xSolid{background:#F3E6EA;color:#4E1F45;border-color:#F3E6EA}#hm-contact .xLight.xSolid::before{background:#E2508C}#hm-contact .xLight.xSolid:hover{color:#F3E6EA;border-color:#E2508C}
#hm-contact .xDark{color:var(--ink)}#hm-contact .xDark::before{background:var(--ink)}#hm-contact .xDark:hover,#hm-contact .xDark:focus-visible{color:var(--bg);opacity:1}
#hm-contact .xDark.xSolid{background:var(--ink);color:var(--bg);border-color:var(--ink)}#hm-contact .xDark.xSolid::before{background:#E2508C}#hm-contact .xDark.xSolid:hover{color:#F3E6EA;border-color:#E2508C}
#hm-contact .xNote{display:inline-flex;align-items:center;min-height:44px;font-size:10px;letter-spacing:0.24em;text-transform:uppercase;color:#E7BEDB}
@media (prefers-reduced-motion: reduce){#hm-contact .xBtn::before,#hm-contact .xBtn .xArr,#hm-contact .xBtn .xPlus{transition:none}}
#hm-contact .xFull{gap:9px;min-height:38px!important;padding:0 16px 0 14px;border-radius:999px;background:#E2508C;color:#F3E6EA!important;font-weight:500;letter-spacing:0.2em!important}
#hm-contact .xFull::before{content:"";width:7px;height:7px;border-radius:50%;background:#F3E6EA;animation:xPulse 1.8s ease-in-out infinite}
@keyframes xPulse{0%,100%{opacity:1}50%{opacity:.35}}
@media (prefers-reduced-motion: reduce){#hm-contact .xFull::before{animation:none}}
#hm-contact .oRing{position:absolute;inset:0;width:100%;height:100%;animation:oSpin 18s linear infinite}
@keyframes oSpin{to{transform:rotate(360deg)}}
#hm-contact .oCore{animation:oGlow 2.2s ease-in-out infinite}
@keyframes oGlow{0%{box-shadow:0 0 0 0 rgba(226,80,140,0.55)}70%{box-shadow:0 0 0 18px rgba(226,80,140,0)}100%{box-shadow:0 0 0 0 rgba(226,80,140,0)}}
@media (prefers-reduced-motion: reduce){#hm-contact .oRing,#hm-contact .oCore{animation:none}}
@media (max-width: 980px){#hm-contact .oHero,#hm-contact .oText,#hm-contact .oMember{grid-template-columns:minmax(0,1fr)!important}#hm-contact .oBadge{right:10px!important}#hm-contact .oSec h2{font-size:52px!important}}
@media (max-width: 980px){#hm-contact .oDyk{grid-template-columns:minmax(0,1fr)!important}#hm-contact .oDiff{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
@media (max-width: 640px){#hm-contact .oDiff,#hm-contact .oPlans,#hm-contact .oFeat{grid-template-columns:minmax(0,1fr)!important}#hm-contact .oSec{padding:60px 20px!important}}
#hm-contact .gIc{width:58px;height:58px;transition:transform .35s ease}
#hm-contact .gTile{transition:background .25s ease,border-color .25s ease}
#hm-contact .gCard:hover .gTile{background:#E2508C!important;border-color:#E2508C!important}
#hm-contact .gCard:hover .gIc{transform:scale(1.1) rotate(-6deg)}
@media (prefers-reduced-motion: reduce){#hm-contact .gIc{transition:none}}
#hm-contact .gRow .gIc{width:36px;height:36px}
@media (max-width: 1100px){#hm-contact .gRow{grid-template-columns:52px minmax(0,1fr) 96px 92px 52px!important}#hm-contact .gNext,#hm-contact .gBtns{grid-column:2 / -1}}
@media (max-width: 640px){#hm-contact .gRow{grid-template-columns:52px minmax(0,1fr)!important}#hm-contact .gC,#hm-contact .gBtns{grid-column:2}}
#hm-contact .oShot img{transition:transform .35s ease}#hm-contact .oShot:hover img{transform:scale(1.05)}

#hm-contact .sIntro{}
@media (max-width: 980px){#hm-contact .sIntro{grid-template-columns:minmax(0,1fr)!important}}
@media (max-width: 640px){#hm-contact .sDiff{grid-template-columns:minmax(0,1fr)!important}}
#hm-contact .fItem summary::-webkit-details-marker{display:none}#hm-contact .fPlus{transition:transform .25s ease}#hm-contact .fItem[open] .fPlus{transform:rotate(45deg)}#hm-contact .fItem summary:hover{color:var(--acc)}
@media (max-width: 980px){#hm-contact .fGrid,#hm-contact .kWords{grid-template-columns:minmax(0,1fr)!important}}
#hm-contact .gC{white-space:nowrap}#hm-contact .gBtns .xNote{white-space:nowrap}
@media (max-width: 980px){#hm-contact .oText{grid-template-columns:minmax(0,1fr)!important}}
/* older palette, overridden by the PALETTE block further down */
#hm-contact .thm{--t1:#1E3A2E;--t2:#1E3A2E;--acc:#1E3A2E}
#hm-contact .thm.dark{--t0:#0F0E0E;--bg:#0F0E0E;--panel:#171615;--panel2:#22201E;--acc:#9CC7A8;--mute:#A39C92;--soft:#D6CFC4;background-color:#0F0E0E}
@media (prefers-color-scheme: dark){#hm-contact .thm.auto{--t0:#0F0E0E;--bg:#0F0E0E;--panel:#171615;--panel2:#22201E;--acc:#9CC7A8;--mute:#A39C92;--soft:#D6CFC4;background-color:#0F0E0E}}
#hm-contact .jump.hSub{background:linear-gradient(90deg,#0F0E0E,#1C1A19 50%,#0F0E0E)!important}
#hm-contact .jump a.on{color:#0F0E0E!important}
#hm-contact .jump a.on::before{background:#F2ECE2}
#hm-contact .jump .jPage i{background:#C9384F}
#hm-contact [style*="background: #4E1F45"],#hm-contact [style*="background: rgb(78, 31, 69)"]{background:radial-gradient(ellipse at 88% 0%,rgba(201,56,79,0.16),rgba(201,56,79,0) 45%),linear-gradient(165deg,#24452F 0%,#1A3326 45%,#102019 100%)!important}
#hm-contact [style*="background: #17110F"],#hm-contact [style*="background: rgb(23, 17, 15)"]{background:linear-gradient(180deg,#1A1412 0%,#0D0B0A 100%)!important}
#hm-contact [style*="background: #E2508C"],#hm-contact [style*="background: rgb(226, 80, 140)"]{background:linear-gradient(110deg,#A8293F 0%,#7A1F30 100%)!important;color:#F2ECE2!important}
#hm-contact [style*="color: #E7BEDB"],#hm-contact [style*="color: rgb(231, 190, 219)"]{color:#E3D9C6!important}
#hm-contact [style*="color: #E9D6E2"],#hm-contact [style*="color: rgb(233, 214, 226)"]{color:#E6DFD3!important}
#hm-contact [style*="color: #F3E6EA"],#hm-contact [style*="color: rgb(243, 230, 234)"],#hm-contact [style*="color: #F0D4E6"],#hm-contact [style*="color: rgb(240, 212, 230)"]{color:#F2ECE2!important}
#hm-contact [style*="color: #E2508C"],#hm-contact [style*="color: rgb(226, 80, 140)"]{color:#E05A70!important}
#hm-contact .xFull{background:linear-gradient(110deg,#B8324A,#8E2236)!important}
#hm-contact .xLight.xSolid::before,#hm-contact .xDark.xSolid::before{background:#C9384F}
#hm-contact .xLight.xSolid:hover,#hm-contact .xDark.xSolid:hover{border-color:#C9384F}
#hm-contact .xLight:hover,#hm-contact .xLight:focus-visible,#hm-contact .xLight.xSolid,#hm-contact .lBook:hover{color:#17110F}
/* PALETTE · Coaching: forest. The whole page sits on its own color, with cream editorial sections and black accent sections. Same look in light and dark mode. Change the colors here. */
#hm-contact .thm.thm.thm{--t0:#16291F;--t1:#A9D0B4;--t2:#A9D0B4;--t3:#F2ECE2;--t4:rgba(242,236,226,0.25);--t5:rgba(242,236,226,0.6);--t6:rgba(22,41,31,0.5);--t7:rgba(22,41,31,0.37);--t8:rgba(22,41,31,0.58);--t9:#16291F;--t10:rgba(242,236,226,0.5);--t11:rgba(242,236,226,0.2);--t12:#A9D0B4;--t13:rgba(242,236,226,0.35);--t14:rgba(242,236,226,0.35);--t15:#DCD5CA;--t16:rgba(242,236,226,0.45);--t17:brightness(1.12);--t18:0.9;--t19:#B0A89C;--t20:rgba(242,236,226,0.7);--t21:rgba(242,236,226,0.06);--t22:#17110F;--t23:rgba(23,17,15,0.4);--t24:rgba(23,17,15,0.07);--badgeBg:#1F3528;--badgeSh:rgba(0,0,0,0.45);--disc:#16291F;--badgeInk:#F2ECE2;--bg:#16291F;--ink:#F2ECE2;--mute:#B0A89C;--soft:#DCD5CA;--acc:#A9D0B4;--rgb:242,236,226;--panel:#1F3528;--panel2:#284433;--logoF:brightness(0) invert(1);--logoO:0.9;color:#F2ECE2;background:radial-gradient(ellipse 70% 40% at 15% 0%,rgba(140,190,150,0.15),rgba(140,190,150,0) 70%),linear-gradient(175deg,#24452F 0%,#1A3326 35%,#14281E 70%,#0E1D15 100%)!important}
#hm-contact .thm.thm.thm .onL{display:none!important}#hm-contact .thm.thm.thm .onD{display:block!important}
#hm-contact .thm #start,#hm-contact .thm #sessions,#hm-contact .thm #ready,#hm-contact .thm #words{--t0:#F3EDE3;--t1:#1E3A2E;--t2:#1E3A2E;--t3:#17110F;--t4:rgba(23,17,15,0.25);--t5:rgba(23,17,15,0.6);--t6:rgba(243,237,227,0.46);--t7:rgba(243,237,227,0.33);--t8:rgba(243,237,227,0.55);--t9:#F3EDE3;--t10:rgba(23,17,15,0.5);--t11:rgba(23,17,15,0.2);--t12:#1E3A2E;--t13:rgba(23,17,15,0.35);--t14:rgba(23,17,15,0.3);--t15:#4E3F3A;--t16:rgba(23,17,15,0.45);--t17:brightness(0);--t18:0.82;--t19:#5E4E48;--t20:#17110F;--t21:rgba(23,17,15,0.06);--t22:#F3EDE3;--t23:rgba(243,237,227,0.45);--t24:rgba(243,237,227,0.08);--badgeBg:#F3EDE3;--badgeSh:rgba(23,17,15,0.18);--disc:#17110F;--badgeInk:#17110F;--bg:#F3EDE3;--ink:#17110F;--mute:#6A5A54;--soft:#3B302C;--acc:#1E3A2E;--rgb:23,17,15;--panel:#EAE1D2;--panel2:#DCCDB8;--logoF:brightness(0);--logoO:0.8;color:#17110F;background:linear-gradient(180deg,#F5F0E7 0%,#ECE3D4 100%)!important}
#hm-contact .thm #start .onD,#hm-contact .thm #sessions .onD,#hm-contact .thm #ready .onD,#hm-contact .thm #words .onD{display:none!important}#hm-contact .thm #start .onL,#hm-contact .thm #sessions .onL,#hm-contact .thm #ready .onL,#hm-contact .thm #words .onL{display:block!important}
#hm-contact .thm #ongoing{--t0:#141110;--t1:#A9D0B4;--t2:#A9D0B4;--t3:#F2ECE2;--t4:rgba(242,236,226,0.25);--t5:rgba(242,236,226,0.6);--t6:rgba(20,17,16,0.5);--t7:rgba(20,17,16,0.37);--t8:rgba(20,17,16,0.58);--t9:#141110;--t10:rgba(242,236,226,0.5);--t11:rgba(242,236,226,0.2);--t12:#A9D0B4;--t13:rgba(242,236,226,0.35);--t14:rgba(242,236,226,0.35);--t15:#DCD5CA;--t16:rgba(242,236,226,0.45);--t17:brightness(1.12);--t18:0.9;--t19:#B0A89C;--t20:rgba(242,236,226,0.7);--t21:rgba(242,236,226,0.06);--t22:#17110F;--t23:rgba(23,17,15,0.4);--t24:rgba(23,17,15,0.07);--badgeBg:#1F1C1B;--badgeSh:rgba(0,0,0,0.45);--disc:#141110;--badgeInk:#F2ECE2;--bg:#141110;--ink:#F2ECE2;--mute:#B0A89C;--soft:#DCD5CA;--acc:#A9D0B4;--rgb:242,236,226;--panel:#1F1C1B;--panel2:#2A2624;--logoF:brightness(0) invert(1);--logoO:0.9;color:#F2ECE2;background:radial-gradient(ellipse at 12% 0%,rgba(242,236,226,0.05),rgba(242,236,226,0) 50%),linear-gradient(180deg,#1A1614 0%,#0D0B0A 100%)!important}
#hm-contact [style*="background: #4E1F45"],#hm-contact [style*="background: rgb(78, 31, 69)"]{background:radial-gradient(ellipse at 88% 0%,rgba(201,56,79,0.12),rgba(201,56,79,0) 45%),linear-gradient(165deg,#2A5038 0%,#1C3829 50%,#10221A 100%)!important}
#hm-contact .thm #groups{background:radial-gradient(ellipse at 88% 0%,rgba(201,56,79,0.12),rgba(201,56,79,0) 45%),linear-gradient(165deg,#2A5038 0%,#1C3829 50%,#10221A 100%)!important}
#hm-contact [style*="background: #17110F"],#hm-contact [style*="background: rgb(23, 17, 15)"]{background:linear-gradient(180deg,#1A1412 0%,#0D0B0A 100%)!important}
#hm-contact [style*="background: #E2508C"],#hm-contact [style*="background: rgb(226, 80, 140)"]{background:linear-gradient(110deg,#A8293F 0%,#7A1F30 100%)!important;color:#F2ECE2!important}
#hm-contact [style*="color: #E7BEDB"],#hm-contact [style*="color: rgb(231, 190, 219)"]{color:#E3D9C6!important}
#hm-contact [style*="color: #E9D6E2"],#hm-contact [style*="color: rgb(233, 214, 226)"]{color:#E6DFD3!important}
#hm-contact [style*="color: #F3E6EA"],#hm-contact [style*="color: rgb(243, 230, 234)"],#hm-contact [style*="color: #F0D4E6"],#hm-contact [style*="color: rgb(240, 212, 230)"]{color:#F2ECE2!important}
#hm-contact [style*="color: #E2508C"],#hm-contact [style*="color: rgb(226, 80, 140)"]{color:#E05A70!important}
#hm-contact .jump.hSub{background:linear-gradient(90deg,#0F0E0E,#1C1A19 50%,#0F0E0E)!important}
#hm-contact .jump a.on{color:#0F0E0E!important}
#hm-contact .jump a.on::before{background:#F2ECE2}
#hm-contact .jump .jPage i{background:#C9384F}
#hm-contact .xFull{background:linear-gradient(110deg,#B8324A,#8E2236)!important}
#hm-contact .xLight.xSolid::before,#hm-contact .xDark.xSolid::before{background:#C9384F}
#hm-contact .xLight.xSolid:hover,#hm-contact .xDark.xSolid:hover{border-color:#C9384F}
#hm-contact .xLight:hover,#hm-contact .xLight:focus-visible,#hm-contact .xLight.xSolid,#hm-contact .lBook:hover{color:#17110F}
/* POPS · Coaching: warm dark green up top, a cream "Online group classes" section with green and red accents, the rest as before. Change the colors here. */
#hm-contact .thm.thm.thm #start{--t0:#16291F;--t1:#A9D0B4;--t2:#A9D0B4;--t3:#F2ECE2;--t4:rgba(242,236,226,0.25);--t5:rgba(242,236,226,0.6);--t6:rgba(22,41,31,0.5);--t7:rgba(22,41,31,0.37);--t8:rgba(22,41,31,0.58);--t9:#16291F;--t10:rgba(242,236,226,0.5);--t11:rgba(242,236,226,0.2);--t12:#A9D0B4;--t13:rgba(242,236,226,0.35);--t14:rgba(242,236,226,0.35);--t15:#DCD5CA;--t16:rgba(242,236,226,0.45);--t17:brightness(1.12);--t18:0.9;--t19:#B0A89C;--t20:rgba(242,236,226,0.7);--t21:rgba(242,236,226,0.06);--t22:#17110F;--t23:rgba(23,17,15,0.4);--t24:rgba(23,17,15,0.07);--badgeBg:#1F3528;--badgeSh:rgba(0,0,0,0.45);--disc:#16291F;--badgeInk:#F2ECE2;--bg:#16291F;--ink:#F2ECE2;--mute:#B0A89C;--soft:#DCD5CA;--acc:#A9D0B4;--rgb:242,236,226;--panel:#1F3528;--panel2:#284433;--logoF:brightness(0) invert(1);--logoO:0.9;color:#F2ECE2;background:transparent!important}
#hm-contact .thm.thm.thm #start .onL{display:none!important}#hm-contact .thm.thm.thm #start .onD{display:block!important}
#hm-contact .thm.thm.thm #groups{--t0:#F3EDE3;--t1:#1F4A33;--t2:#1F4A33;--t3:#17110F;--t4:rgba(23,17,15,0.25);--t5:rgba(23,17,15,0.6);--t6:rgba(243,237,227,0.46);--t7:rgba(243,237,227,0.33);--t8:rgba(243,237,227,0.55);--t9:#F3EDE3;--t10:rgba(23,17,15,0.5);--t11:rgba(23,17,15,0.2);--t12:#1F4A33;--t13:rgba(23,17,15,0.35);--t14:rgba(23,17,15,0.3);--t15:#4E3F3A;--t16:rgba(23,17,15,0.45);--t17:brightness(0);--t18:0.82;--t19:#5E4E48;--t20:#17110F;--t21:rgba(23,17,15,0.06);--t22:#F3EDE3;--t23:rgba(243,237,227,0.45);--t24:rgba(243,237,227,0.08);--badgeBg:#F3EDE3;--badgeSh:rgba(23,17,15,0.18);--disc:#17110F;--badgeInk:#17110F;--bg:#F3EDE3;--ink:#17110F;--mute:#6A5A54;--soft:#3B302C;--acc:#1F4A33;--rgb:23,17,15;--panel:#EAE1D2;--panel2:#DCCDB8;--logoF:brightness(0);--logoO:0.8;color:#17110F;background:radial-gradient(ellipse 50% 40% at 100% 0%,rgba(31,74,51,0.10),rgba(31,74,51,0) 70%),linear-gradient(180deg,#F6F1E8 0%,#EDE5D6 100%)!important;color:#1C1A17!important}
#hm-contact .thm.thm #groups h2{color:#1F4A33}
#hm-contact .thm.thm #groups [style*="color: #F3E6EA"],#hm-contact .thm.thm #groups [style*="color: rgb(243, 230, 234)"]{color:#1C1A17!important}
#hm-contact .thm.thm #groups [style*="color: #E7BEDB"],#hm-contact .thm.thm #groups [style*="color: rgb(231, 190, 219)"],#hm-contact .thm.thm #groups [style*="color: #E9D6E2"],#hm-contact .thm.thm #groups [style*="color: rgb(233, 214, 226)"]{color:#5B564D!important}
#hm-contact .thm.thm #groups [style*="rgba(243,230,234"],.thm.thm #groups [style*="rgba(243, 230, 234"]{border-color:rgba(28,26,23,0.16)!important}
#hm-contact .thm.thm #groups .gNext [style*="color"]{color:#B3242F!important}
#hm-contact .thm.thm #groups > div:first-child > span{color:#1F4A33!important}
/* class icons: green tiles */
#hm-contact .thm.thm #groups .gTile{color:#1F4A33!important;border-color:rgba(31,74,51,0.35)!important;background:rgba(31,74,51,0.07)!important}
/* class-type tags: green lecture, red workout, plum workshop */
#hm-contact .thm.thm #groups span[style*="text-transform: uppercase"][style*="background: transparent"]{background:#1F4A33!important;border-color:#1F4A33!important;color:#F6F1E8!important}
#hm-contact .thm.thm #groups span[style*="background: #E2508C"],#hm-contact .thm.thm #groups span[style*="background: rgb(226, 80, 140)"]{background:#B3242F!important;border-color:#B3242F!important;color:#F6F1E8!important}
#hm-contact .thm.thm #groups span[style*="background: #7A3A6E"],#hm-contact .thm.thm #groups span[style*="background: rgb(122, 58, 110)"]{background:#5E2756!important;border-color:#5E2756!important;color:#F6F1E8!important}
/* buttons: green outline fills green, Book is solid green and fills red */
#hm-contact .thm.thm #groups .xLight{color:#1F4A33!important;border-color:#1F4A33}
#hm-contact .thm.thm #groups .xLight::before{background:#1F4A33}
#hm-contact .thm.thm #groups .xLight:is(:hover,:focus-visible){color:#F6F1E8!important}
#hm-contact .thm.thm #groups .xLight.xSolid{background:#1F4A33!important;color:#F6F1E8!important;border-color:#1F4A33!important}
#hm-contact .thm.thm #groups .xLight.xSolid::before{background:#B3242F}
#hm-contact .thm.thm #groups .xLight.xSolid:is(:hover,:focus-visible){border-color:#B3242F!important}
#hm-contact .thm.thm #groups .xNote{color:#B3242F!important}
/* TOP GREEN PANEL · color variety: antique gold for the big words, labels and main button; each "How I'm different" card gets its own color (gold, plum, blue, red) */
#hm-contact .thm.thm.thm.thm #start{--acc:#D9B36A}
#hm-contact .thm.thm #start .lBig{color:#D9B36A}
#hm-contact .thm.thm #start .lQuote span{color:#D9B36A!important}
#hm-contact .thm.thm #start .sDiff > div{background:rgba(242,236,226,0.05)!important}
#hm-contact .thm.thm #start .sDiff > div:nth-child(4n+1){border-top-color:#D9B36A!important;background:linear-gradient(160deg,rgba(217,179,106,0.16),rgba(217,179,106,0.03))!important}
#hm-contact .thm.thm #start .sDiff > div:nth-child(4n+2){border-top-color:#C0303F!important;background:linear-gradient(160deg,rgba(150,30,45,0.40),rgba(150,30,45,0.10))!important}
#hm-contact .thm.thm #start .sDiff > div:nth-child(4n+3){border-top-color:#D9B36A!important;background:linear-gradient(160deg,rgba(217,179,106,0.16),rgba(217,179,106,0.03))!important}
#hm-contact .thm.thm #start .sDiff > div:nth-child(4n+4){border-top-color:#C0303F!important;background:linear-gradient(160deg,rgba(150,30,45,0.40),rgba(150,30,45,0.10))!important}
#hm-contact .thm.thm #start [style*="border: 1px dashed"]{border-color:#D9B36A!important;background:rgba(217,179,106,0.07)}
#hm-contact .thm.thm #start [style*="border: 1px dashed"] > span{color:#D9B36A}
#hm-contact .thm.thm #start .xDark:first-child{background:linear-gradient(110deg,#E0BC74,#B98F45)!important;border-color:#D9B36A!important;color:#14261C!important}
#hm-contact .thm.thm #start .xDark:first-child:is(:hover,:focus-visible){color:#14261C!important}
/* all four "How I'm different" cards gold; labels and Did you know red */
#hm-contact .thm.thm.thm #start .sDiff > div{border-top-color:#D9B36A!important;background:linear-gradient(160deg,rgba(217,179,106,0.16),rgba(217,179,106,0.03))!important}
#hm-contact .thm.thm.thm #start .sIntro > div > span:first-child{color:#E0263B!important}
#hm-contact .thm.thm.thm #start [style*="border: 1px dashed"]{border-color:#E0263B!important;background:rgba(170,30,45,0.14)!important}
#hm-contact .thm.thm.thm #start [style*="border: 1px dashed"] > span{color:#E0263B}
/* bigger, easier to read labels for How I teach / How I'm different */
#hm-contact .thm.thm.thm #start .sIntro > div > span:first-child{font-size:17px!important;font-weight:500;letter-spacing:0.18em!important;padding-bottom:8px;border-bottom:2px solid #E0263B;align-self:flex-start}
@media (max-width: 640px){#hm-contact .thm.thm.thm #start .sIntro > div > span:first-child{font-size:15px!important}}
/* ARE YOU READY: two columns on desktop so it's half as tall */
#hm-contact .thm #ready > div{max-width:1180px!important}
#hm-contact .thm .rList{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:44px}
#hm-contact .sHow{display:contents}
#hm-contact .lScrollNav{display:none}
/* PHONES ONLY: How I'm different first, then How I teach and Are you ready as sideways cards with arrows */
@media (max-width: 640px){
#hm-contact .thm .sIntro{display:flex!important;flex-direction:column}
#hm-contact .thm .sIntro > div:first-child{order:2}
#hm-contact .lScrollNav{display:flex;justify-content:flex-end;gap:6px;margin:4px 0 -2px}
#hm-contact .lScrollNav button{width:34px;height:34px;padding:0;border-radius:50%;border:1px solid rgba(var(--rgb),0.4);background:transparent;color:var(--ink);font-size:15px;cursor:pointer}
#hm-contact .lScrollNav button:active{background:#B3242F;border-color:#B3242F}
#hm-contact .thm .sHow{display:grid;grid-auto-flow:column;grid-auto-columns:88%;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}
#hm-contact .thm .sHow > p{scroll-snap-align:start;padding:16px 16px 18px;background:rgba(242,236,226,0.06);border-top:2px solid #E0263B;font-size:16px!important}
#hm-contact .thm .rList{grid-template-columns:none;grid-template-rows:none;grid-auto-flow:column;grid-auto-columns:72%;column-gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;border-top:0!important;margin-top:14px!important;align-items:start}
#hm-contact .thm .rList > li{scroll-snap-align:start;grid-template-columns:30px minmax(0,1fr)!important;gap:6px!important;padding:14px 14px 16px!important;border:1px solid rgba(28,26,23,0.16)!important;border-top:2px solid #B3242F!important;font-size:16px!important;line-height:1.4!important}
#hm-contact .thm .sHow::-webkit-scrollbar,#hm-contact .thm .rList::-webkit-scrollbar{display:none}
}
/* PHONES ONLY: group classes condensed. Class types and the classes themselves become sideways cards with arrows */
@media (max-width: 640px){
#hm-contact .thm #groups > p{font-size:17px!important;margin-top:14px!important}
#hm-contact .thm #groups h2{font-size:38px!important}
#hm-contact .thm #groups .lGuide{display:grid!important;grid-template-columns:none!important;grid-auto-flow:column;grid-auto-columns:70%;gap:10px!important;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;border:0!important;margin-top:10px!important}
#hm-contact .thm #groups .lGuide > div{scroll-snap-align:start;border:1px solid rgba(28,26,23,0.16)!important;padding:12px 14px!important}
#hm-contact .thm #groups .lGuide > div > span:last-child{font-size:15px!important}
#hm-contact .thm #groups .gList{display:grid!important;grid-auto-flow:column;grid-auto-columns:84%;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;border-top:0!important;margin-top:10px!important}
#hm-contact .thm #groups .gList > article{scroll-snap-align:start;border:1px solid rgba(28,26,23,0.16)!important;padding:14px!important;align-content:start;background:rgba(255,255,255,0.35)}
#hm-contact .thm #groups .lGuide::-webkit-scrollbar,#hm-contact .thm #groups .gList::-webkit-scrollbar{display:none}
#hm-contact .thm #groups .gBtns{flex-direction:column!important;flex-wrap:nowrap!important;align-items:flex-start!important;gap:10px!important;width:100%}
#hm-contact .thm #groups .gBtns > *{flex:0 0 auto!important;white-space:nowrap}
#hm-contact .thm #groups .gBtns .xBtn{min-width:120px}
}
/* current page marker: red, not pink */
#hm-contact .thm .jPage{color:#E0263B!important}#hm-contact .thm .jump .jPage i{background:#E0263B!important}
#hm-contact .thm .nv[aria-current="page"] .b{color:#E0263B!important}#hm-contact .thm .nv[aria-current="page"]::after{background:#E0263B!important}
@font-face{font-family:'Margita';src:url(@@A:fonts/Margita.woff2@@) format('woff2');font-display:swap}
@font-face{font-family:'AnaTwo';src:url(@@A:fonts/AnaTwo.woff2@@) format('woff2');font-display:swap}
@font-face{font-family:'Oldtown';src:url(@@A:fonts/Oldtown.woff2@@) format('woff2');font-display:swap}
@font-face{font-family:'Arlysse';src:url(@@A:fonts/Arlysse.woff2@@) format('woff2');font-display:swap}
#hm-contact{background:#121013}
#hm-contact .inkScroll{height:900px;overflow-y:auto;overflow-x:hidden;background:#121013;position:relative}
/* ===== INK: dark desk, ivory type, one lipstick red ===== */
#hm-contact .ink.ink.thm,#hm-contact .ink.ink.thm.dark,#hm-contact .ink.ink.thm.auto{--t0:#121013;--t1:#EEEAE2;--t2:#B8232F;--t3:#EEEAE2;--t4:rgba(238,234,226,0.12);--t5:rgba(238,234,226,0.6);--t6:rgba(18,16,19,0.5);--t7:rgba(18,16,19,0.37);--t8:rgba(18,16,19,0.58);--t9:#121013;--t10:rgba(238,234,226,0.45);--t11:rgba(238,234,226,0.14);--t12:#B8232F;--t13:rgba(238,234,226,0.3);--t14:rgba(238,234,226,0.3);--t15:#D8D2C8;--t16:rgba(238,234,226,0.45);--t17:brightness(0) invert(1);--t18:0.6;--t19:rgba(238,234,226,0.6);--t20:rgba(238,234,226,0.75);--t21:rgba(238,234,226,0.05);--t22:#121013;--t23:rgba(238,234,226,0.3);--t24:rgba(238,234,226,0.05);--badgeBg:#121013;--edge:transparent;--badgeSh:transparent;--disc:#121013;--badgeInk:#EEEAE2;--ink:#EEEAE2;--bg:#121013;--rgb:238,234,226;--panel:transparent;--soft:rgba(238,234,226,0.62);--acc:#B8232F;--red:#B8232F;background:#121013!important;background-image:none!important;color:#EEEAE2!important;font-family:'Oldtown','Courier New',monospace!important}
#hm-contact .ink.ink .onL{display:none!important}#hm-contact .ink.ink .onD{display:block!important}
/* type: typewriter everywhere, script for titles, red hand for the flavour */
#hm-contact .ink.ink [style*="Fraunces"],#hm-contact .ink.ink [style*="Jost"]{font-family:'Oldtown','Courier New',monospace!important;font-style:normal!important;font-weight:400!important}
#hm-contact .ink.ink [style*="Fraunces"][style*="italic"]{font-family:'AnaTwo',cursive!important;color:#B8232F!important;letter-spacing:0!important;text-transform:none!important}
#hm-contact .ink.ink [style*="Jost"]{letter-spacing:0.08em!important}
#hm-contact .ink.ink h2,#hm-contact .ink.ink h2[style]{font-family:'Margita',cursive!important;font-style:normal!important;font-weight:400!important;text-transform:none!important;letter-spacing:0!important;font-size:64px!important;line-height:1.15!important;color:#EEEAE2!important;-webkit-text-stroke:0.6px currentColor}
#hm-contact .ink.ink h2::after{display:none!important}
#hm-contact .ink.ink h3,#hm-contact .ink.ink h3[style]{font-family:'AnaTwo',cursive!important;font-style:normal!important;font-weight:400!important;text-transform:none!important;letter-spacing:0!important;color:#B8232F!important}
#hm-contact .ink.ink p,#hm-contact .ink.ink li{line-height:1.7}
/* every section after the reel is a white screenplay page on the dark desk */
#hm-contact .ink.ink section:not(#reel),#hm-contact .ink.ink section:not(#reel)[style]{--ink:#1C1B1B;--rgb:28,27,27;--soft:rgba(28,27,27,0.72);--t3:#1C1B1B;--t4:rgba(28,27,27,0.16);--t5:rgba(28,27,27,0.6);--t10:rgba(28,27,27,0.5);--t11:rgba(28,27,27,0.16);--t13:rgba(28,27,27,0.3);--t14:rgba(28,27,27,0.3);--t15:#3A3634;--t16:rgba(28,27,27,0.45);--t17:brightness(0);--t18:0.68;--t19:rgba(28,27,27,0.6);--t20:rgba(28,27,27,0.75);--t21:rgba(28,27,27,0.04);--t23:rgba(28,27,27,0.3);--t24:rgba(28,27,27,0.04);--badgeInk:#1C1B1B;--logoF:brightness(0);--logoO:0.7;
  position:relative;box-sizing:border-box;width:1000px;max-width:calc(100% - 48px);margin:0 auto 64px!important;padding:84px 110px 90px 120px!important;background:#F7F6F2!important;color:#1C1B1B!important;box-shadow:0 28px 50px -28px rgba(0,0,0,0.85),0 2px 0 rgba(0,0,0,0.06)!important;counter-increment:pg}
#hm-contact .ink.ink section:not(#reel):nth-of-type(odd){transform:rotate(-0.3deg)}
#hm-contact .ink.ink section:not(#reel):nth-of-type(even){transform:rotate(0.25deg)}
#hm-contact .ink.ink section:not(#reel)::before{content:counter(pg) '.';position:absolute;right:56px;top:38px;font-family:'Oldtown',monospace;font-size:16px;color:#1C1B1B}
#hm-contact .ink.ink{counter-reset:pg}
#hm-contact .ink.ink section:not(#reel) h2,#hm-contact .ink.ink section:not(#reel) h2[style]{color:#1C1B1B!important}
#hm-contact .ink.ink section:not(#reel) .slug{color:#1C1B1B}
#hm-contact .ink.ink section:not(#reel) .trans{color:#1C1B1B;margin-top:34px}
#hm-contact .ink.ink section:not(#reel) [style*="color: #F3E6EA"],#hm-contact .ink.ink section:not(#reel) [style*="color: rgb(243, 230, 234)"],#hm-contact .ink.ink section:not(#reel) [style*="color: var(--t3)"],#hm-contact .ink.ink section:not(#reel) [style*="color: var(--ink)"]{color:#1C1B1B!important}
#hm-contact .ink.ink section:not(#reel) [style*="color: rgba(243, 230, 234"],.ink.ink section:not(#reel) [style*="color: rgba(243,230,234"]{color:rgba(28,27,27,0.68)!important}
#hm-contact .ink.ink .mFoot [style*="italic"]{font-family:'Margita',cursive!important;font-style:normal!important;font-size:34px!important;color:#B8232F!important}
#hm-contact .ink.ink section:not(#reel) a[style*="min-height"][style*="Jost"],#hm-contact .ink.ink section:not(#reel) button[style*="min-height"][style*="Jost"]{color:#1C1B1B!important}
#hm-contact .ink.ink #audiodramas img,#hm-contact .ink.ink #audiobooks img{background:#fff}
/* taped stills: role art, studio photo, show and book covers get white borders and tape */
#hm-contact .ink.ink .hRoleBox > div:first-child,#hm-contact .ink.ink .hStudio img,#hm-contact .ink.ink #audiodramas img,#hm-contact .ink.ink #music img{box-shadow:0 10px 22px -12px rgba(0,0,0,0.5)}
#hm-contact .ink.ink .hRoleBox > div:first-child{border:10px solid #fff!important;border-bottom-width:14px!important;transform:rotate(-0.8deg)}
#hm-contact .ink.ink .hRoleBox > div:first-child::before{content:'';position:absolute;left:50%;top:-22px;z-index:5;width:110px;height:30px;margin-left:-55px;background:rgba(226,221,203,0.85);transform:rotate(-3deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-contact .ink.ink .coffee{position:absolute;width:260px;height:260px;background:url(@@A:images/coffee.png@@) center/contain no-repeat;mix-blend-mode:multiply;opacity:0.85;pointer-events:none;z-index:0}
#hm-contact .ink.ink .mnote{position:absolute;font-family:'AnaTwo',cursive;color:#B8232F;font-size:30px;line-height:1.05;white-space:nowrap;transform:rotate(-5deg);pointer-events:none;z-index:3}
/* page one: the big line runs full width, with room for the waveform under it */
#hm-contact .ink.ink section.hSplit{grid-template-columns:minmax(0,1fr)!important;gap:30px!important}
#hm-contact .ink.ink.ink .hLede[style]{margin-bottom:110px!important;color:#1C1B1B!important}
/* page one dialogue block, screenplay style */
#hm-contact .ink.ink .dlg2{margin:0 0 10px 150px;max-width:460px}
#hm-contact .ink.ink .dlg2 .cue{margin:0;padding-left:120px;font-size:17px;letter-spacing:0.06em}
#hm-contact .ink.ink .dlg2 .par{margin:0;padding-left:96px;font-size:15px;color:rgba(28,27,27,0.6)}
#hm-contact .ink.ink .dlg2 .line{margin:6px 0 0;font-size:18px;line-height:1.7}
@media (max-width:640px){#hm-contact .ink.ink .dlg2{margin-left:0}#hm-contact .ink.ink .dlg2 .cue{padding-left:90px}#hm-contact .ink.ink .dlg2 .par{padding-left:70px}}
/* (old desk rules below stay for the bar, reel and footer) */
#hm-contact .ink.ink section,#hm-contact .ink.ink section[style]{background:transparent!important;background-image:none!important;color:#EEEAE2!important;box-shadow:none!important}
#hm-contact .ink.ink [style*="background: var(--panel)"],#hm-contact .ink.ink [style*="background: #4E1F45"],#hm-contact .ink.ink [style*="background: rgb(78, 31, 69)"],#hm-contact .ink.ink [style*="background: rgba(243, 230, 234"],.ink.ink [style*="background: rgba(243,230,234"],.ink.ink [style*="background: var(--t21)"],.ink.ink [style*="background: var(--t24)"]{background:transparent!important}
#hm-contact .ink.ink [style*="border: 1px solid"],#hm-contact .ink.ink [style*="border-top: 1px solid"],#hm-contact .ink.ink [style*="border-bottom: 1px solid"],#hm-contact .ink.ink [style*="border-left: 1px solid"]{border-color:rgba(238,234,226,0.11)!important}
#hm-contact .ink.ink [style*="box-shadow"]{box-shadow:none!important}
#hm-contact .ink.ink [style*="color: #F3E6EA"],#hm-contact .ink.ink [style*="color: rgb(243, 230, 234)"],#hm-contact .ink.ink [style*="color: var(--t3)"]{color:#EEEAE2!important}
#hm-contact .ink.ink [style*="color: #E7BEDB"],#hm-contact .ink.ink [style*="color: #D9A9CD"],#hm-contact .ink.ink [style*="color: rgb(231, 190, 219)"],#hm-contact .ink.ink [style*="color: rgb(217, 169, 205)"],#hm-contact .ink.ink [style*="color: #E2508C"],#hm-contact .ink.ink [style*="color: rgb(226, 80, 140)"],#hm-contact .ink.ink [style*="color: #E0263B"],#hm-contact .ink.ink [style*="color: rgb(224, 38, 59)"],#hm-contact .ink.ink [style*="color: var(--t2)"],#hm-contact .ink.ink [style*="color: var(--acc)"],#hm-contact .ink.ink [style*="color: var(--t12)"]{color:#B8232F!important}
/* buttons: no filled slabs; typed caps with a red underline */
#hm-contact .ink.ink button[style*="background: var(--ink)"],#hm-contact .ink.ink a[style*="background: var(--ink)"],#hm-contact .ink.ink button[style*="background: var(--t3)"],#hm-contact .ink.ink a[style*="background: var(--t3)"],#hm-contact .ink.ink button[style*="background: #F3E6EA"],#hm-contact .ink.ink a[style*="background: #F3E6EA"],#hm-contact .ink.ink button[style*="background: rgb(243, 230, 234)"],#hm-contact .ink.ink a[style*="background: rgb(243, 230, 234)"]{background:transparent!important;color:#EEEAE2!important;border:0!important;border-bottom:2px solid #B8232F!important;border-radius:0!important;padding-left:0!important;padding-right:0!important}
#hm-contact .ink.ink button[style*="background: var(--ink)"]:hover,#hm-contact .ink.ink a[style*="background: var(--ink)"]:hover{color:#B8232F!important}
/* top bar: logo only on the left, typed links, red circle on hover */
#hm-contact .ink.ink .mHdr{border-bottom:0!important;padding:14px 44px!important;background:#121013}
#hm-contact .ink.ink .mNav{gap:30px!important;font-size:13px!important;letter-spacing:0.1em!important}
#hm-contact .ink.ink .nv .b{display:none!important}
#hm-contact .ink.ink .nv span{transform:none!important}
#hm-contact .ink.ink .nv{position:relative;display:inline-block;transition:transform .35s cubic-bezier(.2,.7,.2,1),letter-spacing .35s cubic-bezier(.2,.7,.2,1)}
#hm-contact .ink.ink .nv:hover{transform:translateY(-2px);letter-spacing:0.14em}
#hm-contact .ink.ink .nv::after{display:none!important}
#hm-contact .ink.ink .nv svg.circ{position:absolute;left:-14px;top:-9px;width:calc(100% + 28px);height:calc(100% + 18px);overflow:visible;pointer-events:none;clip-path:inset(0 100% 0 0);transition:clip-path .5s ease}
#hm-contact .ink.ink .nv svg.circ path{fill:none;stroke:#B8232F;stroke-width:1.8;stroke-linecap:round}
#hm-contact .ink.ink .nv:hover svg.circ,#hm-contact .ink.ink .nv[aria-current="page"] svg.circ{clip-path:inset(0 0 0 0)}
/* sticky on-this-page bar: typed, red underline for the current section */
#hm-contact .ink.ink .jump{background:rgba(18,16,19,0.94)!important;border-top:1px solid rgba(238,234,226,0.08)!important;border-bottom:1px solid rgba(238,234,226,0.08)!important;color:#EEEAE2!important}
#hm-contact .ink.ink .jump a{font-family:'Oldtown',monospace!important;color:rgba(238,234,226,0.7)!important;letter-spacing:0.08em!important}
#hm-contact .ink.ink .jump a::before{background:transparent!important;border-bottom:2px solid #B8232F;border-radius:0!important;inset:auto 14px 2px 14px!important;height:0}
#hm-contact .ink.ink .jump a.on{color:#EEEAE2!important}
#hm-contact .ink.ink .jump .jPage{display:none!important}
/* the reel: keep the frame, quiet the overlay type */
#hm-contact .ink.ink .hReelWord{font-family:'Arlysse',sans-serif!important;font-style:normal!important;text-transform:uppercase!important;letter-spacing:0.01em!important;font-size:min(220px,17vw)!important;bottom:-0.18em!important;color:#EEEAE2!important;opacity:0.92}
#hm-contact .ink.ink.ink .hLede[style]{font-family:'Margita',cursive!important;color:#EEEAE2!important;font-size:46px!important;line-height:1.2!important;-webkit-text-stroke:0.5px currentColor}
#hm-contact .ink.ink.ink .hLede span{color:#B8232F!important;font-family:inherit!important}
/* every typed button: no slab, no pill, just caps with a red underline */
#hm-contact .ink.ink a[style*="min-height"][style*="Jost"],#hm-contact .ink.ink button[style*="min-height"][style*="Jost"]{background:transparent!important;color:#EEEAE2!important;border:0!important;border-bottom:2px solid #B8232F!important;border-radius:0!important;padding:0 2px!important;min-height:34px!important;box-shadow:none!important}
#hm-contact .ink.ink a[style*="min-height"][style*="Jost"]:hover,#hm-contact .ink.ink button[style*="min-height"][style*="Jost"]:hover{color:#B8232F!important}
#hm-contact .ink.ink a[style*="min-height"][style*="Jost"] svg,#hm-contact .ink.ink button[style*="min-height"][style*="Jost"] svg{color:#B8232F}
/* the cross-sell becomes a script page note, not a box */
#hm-contact .ink.ink a[href*="scarygood"][style*="border"]{border:0!important;border-top:1px solid rgba(238,234,226,0.11)!important;border-bottom:1px solid rgba(238,234,226,0.11)!important;padding:34px 0!important}
#hm-contact .ink.ink a[href*="scarygood"] [style*="italic"]{font-family:'Margita',cursive!important;color:#EEEAE2!important;font-style:normal!important;font-size:58px!important}
/* screenplay scene headings and transitions */
#hm-contact .ink.ink section[id]{position:relative}
#hm-contact .ink.ink .slug{display:block;margin:0 0 6px;font-family:'Oldtown',monospace;font-size:14px;letter-spacing:0.08em;color:rgba(238,234,226,0.6);text-transform:uppercase}
#hm-contact .ink.ink .trans{display:block;margin:18px 0 0;text-align:right;font-family:'Oldtown',monospace;font-size:14px;letter-spacing:0.08em;color:rgba(238,234,226,0.55)}
/* footer */
#hm-contact .ink.ink .mFoot{border-top:1px solid rgba(238,234,226,0.11)!important;font-family:'Oldtown',monospace!important}
/* the red line + reveal */
#hm-contact .inkLine{position:absolute;left:0;top:0;pointer-events:none;z-index:40;overflow:visible}
#hm-contact .inkLine path{fill:none;stroke:#B8232F;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
#hm-contact .inkLine .wf{fill:#B8232F;stroke:none}
#hm-contact .inkDot{position:absolute;left:0;top:0;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#B8232F;z-index:41;pointer-events:none}
#hm-contact .ink.armed .rv{opacity:calc(0.35 + 0.65 * var(--q,1));transition:none}
@media (max-width:640px){#hm-contact .ink.ink section:not(#reel),#hm-contact .ink.ink section:not(#reel)[style]{width:auto;max-width:none;margin:0 10px 34px!important;padding:46px 20px 40px!important}#hm-contact .ink.ink section:not(#reel)::before{right:18px;top:16px;font-size:12px}#hm-contact .ink.ink.ink .hLede[style]{font-size:32px!important;margin-bottom:80px!important}#hm-contact .ink.ink .mnote{display:none}#hm-contact .ink.ink .coffee{width:150px;height:150px}#hm-contact .inkScroll{height:844px}#hm-contact .ink.ink h2,#hm-contact .ink.ink h2[style]{font-size:46px!important}#hm-contact .ink.ink .mHdr{padding:12px 18px!important}#hm-contact .ink.ink .mNav{gap:14px!important;font-size:10px!important}}

@font-face{font-family:'AnaOne';src:url(@@A:fonts/AnaOne.woff2@@) format('woff2');font-display:swap}
/* ===== round 2 ===== */
#hm-contact .ink.ink{--blue:#22365E}
/* titles back to Anastacia One */
#hm-contact .ink.ink h2,#hm-contact .ink.ink h2[style]{font-family:'AnaOne',cursive!important;-webkit-text-stroke:0!important;font-size:68px!important;line-height:1.1!important}
#hm-contact .ink.ink.ink .hLede[style]{font-family:'AnaOne',cursive!important;color:#1C1B1B!important;-webkit-text-stroke:0!important;font-size:50px!important}
#hm-contact .ink.ink.ink.ink .hLede[style]{margin-bottom:60px!important}
#hm-contact .ink.ink.ink section.hSplit:not(#reel)[style]{padding-top:50px!important}
#hm-contact .ink.ink section.hSplit > div:first-child{gap:14px!important}
#hm-contact .ink.ink .dlg2 .line{font-size:16px!important}
#hm-contact .ink.ink .hRange{font-size:16px!important}
#hm-contact .ink.ink.ink .hLede span{color:#B8232F!important}
#hm-contact .ink.ink .mFoot [style*="italic"]{font-family:'AnaOne',cursive!important}
/* one button style everywhere: typed caps, ink outline, red fills in from the left on hover */
#hm-contact .ink.ink.ink.ink.ink .fbtn.fbtn,#hm-contact .ink.ink.ink.ink.ink .fbtn.fbtn[style]{display:inline-flex!important;align-items:center;justify-content:center;gap:8px;min-height:36px!important;padding:0 10px!important;box-sizing:border-box;border:0!important;border-bottom:2px solid #B8232F!important;border-radius:0!important;color:#1C1B1B!important;background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%!important;font-family:'Oldtown',monospace!important;font-size:11px!important;font-weight:400!important;letter-spacing:0.2em!important;text-transform:uppercase!important;text-decoration:none!important;cursor:pointer;white-space:nowrap;transition:background-size .45s cubic-bezier(.2,.75,.2,1),color .3s ease!important}
#hm-contact .ink.ink.ink.ink.ink .fbtn.fbtn:hover,#hm-contact .ink.ink.ink.ink.ink .fbtn.fbtn:focus-visible,#hm-contact .ink.ink.ink.ink.ink a:hover .fbtn.fbtn{background-size:100% 100%!important;color:#fff!important}
#hm-contact .ink.ink .fbtn svg{color:currentColor!important}
/* tab bars (credits, more of my work, demo tracks): same red fill, current one stays filled */
#hm-contact .ink.ink.ink section:not(#reel) .ctabs[style]{gap:12px 18px!important;border-bottom:0!important;padding:0!important}
#hm-contact .ink.ink.ink section:not(#reel) .ctabs button[role="tab"][style]{display:inline-flex!important;align-items:center;gap:6px;min-height:38px!important;margin:0!important;padding:0 8px!important;border:0!important;border-bottom:2px solid #B8232F!important;border-radius:0!important;background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%!important;color:#1C1B1B!important;font-family:'Oldtown',monospace!important;font-weight:400!important;font-size:11px!important;letter-spacing:0.14em!important;text-transform:uppercase!important;box-shadow:none!important;transition:background-size .45s cubic-bezier(.2,.75,.2,1),color .3s ease!important}
#hm-contact .ink.ink.ink section:not(#reel) .ctabs button[role="tab"][style]:hover,#hm-contact .ink.ink.ink section:not(#reel) .ctabs button[role="tab"][aria-selected="true"][style]{background-size:100% 100%!important;color:#fff!important}
#hm-contact .ink.ink.ink section:not(#reel) .ctabs button[role="tab"] span[style]{font-family:'AnaTwo',cursive!important;font-style:normal!important;font-size:21px!important;line-height:1!important;letter-spacing:0!important;text-transform:none!important;color:#B8232F!important;transform:rotate(-4deg) translateY(-2px);display:inline-block;transition:color .3s}
#hm-contact .ink.ink.ink section:not(#reel) .ctabs button[role="tab"]:hover span[style],#hm-contact .ink.ink.ink section:not(#reel) .ctabs button[role="tab"][aria-selected="true"] span[style]{color:#fff!important}
#hm-contact .ink.ink.ink #demos.tPlayer button[role="tab"][style]{background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%!important;transition:background-size .45s cubic-bezier(.2,.75,.2,1)!important}
#hm-contact .ink.ink.ink #demos.tPlayer button[role="tab"][aria-selected="true"][style]{box-shadow:inset 0 -2px 0 #B8232F!important}
#hm-contact .ink.ink.ink #demos.tPlayer button[role="tab"][style]:hover{background-size:100% 100%!important;color:#fff!important}
#hm-contact .ink.ink .notAll{margin:26px 0 0;font-family:'AnaTwo',cursive;font-size:34px;line-height:1.1;color:var(--blue);transform:rotate(-2deg);transform-origin:left}
/* the demo player, taped onto page one: dark card, clear type */
#hm-contact .ink.ink .tPlayer{position:relative;margin:8px 0 18px;padding:30px 34px 28px;background:#141215;color:#EEEAE2;--ink:#EEEAE2;--bg:#141215;--rgb:238,234,226;--mute:rgba(238,234,226,0.6);--soft:rgba(238,234,226,0.75);--acc:#B8232F;transform:rotate(-0.6deg);box-shadow:0 22px 40px -22px rgba(0,0,0,0.7)}
#hm-contact .ink.ink .tPlayer div[style*="padding: 18px 22px"]{border:0!important;background:none!important;padding:0!important}
#hm-contact .ink.ink .tPlayer .tape{position:absolute;left:44px;top:-16px;width:120px;height:30px;background:rgba(226,221,203,0.85);transform:rotate(-4deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-contact .ink.ink .tPlayer .tape.t2{left:auto;right:50px;transform:rotate(5deg);width:96px}
#hm-contact .ink.ink .tPlayer .pnote{position:absolute;right:-24px;top:-46px;font-family:'AnaTwo',cursive;font-size:32px;color:#B8232F;transform:rotate(-6deg);white-space:nowrap}
#hm-contact .ink.ink .tPlayer button[aria-label]:not([role]){background:#B8232F!important;color:#fff!important;width:56px!important;height:56px!important}
#hm-contact .ink.ink .tPlayer span,#hm-contact .ink.ink .tPlayer a{color:#EEEAE2!important}
#hm-contact .ink.ink .tPlayer [style*="Fraunces"]{font-family:'Arlysse',sans-serif!important;color:#EEEAE2!important;font-size:26px!important;letter-spacing:0.02em!important;text-transform:uppercase}
#hm-contact .ink.ink .tPlayer [style*="Jost"]{font-family:'Oldtown',monospace!important;font-size:12px!important;letter-spacing:0.1em!important;color:rgba(238,234,226,0.7)!important}
#hm-contact .ink.ink .tPlayer a[download]{color:#EEEAE2!important;border-bottom:1.5px solid #B8232F!important;min-height:30px!important}
#hm-contact .ink.ink .tPlayer button[role="tab"]{color:#EEEAE2!important}
#hm-contact .ink.ink .tPlayer input[type=range]{opacity:0.9!important}
/* game ticker above "Give me your" */
#hm-contact .ink.ink .gTick{position:relative;margin:26px 0 30px;border-top:1px solid rgba(28,27,27,0.16);border-bottom:1px solid rgba(28,27,27,0.16)}
#hm-contact .ink.ink .gBox{overflow:hidden;padding:16px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)}
#hm-contact .ink.ink .gNudge{transition:transform .5s cubic-bezier(.2,.7,.2,1)}
#hm-contact .ink.ink .gTrack{display:flex;align-items:center;width:max-content;will-change:transform}
@keyframes gtk{from{transform:translateX(0)}to{transform:translateX(-50%)}}
#hm-contact .ink.ink .gTrack img{filter:brightness(0)!important;opacity:0.72!important}
#hm-contact .ink.ink .gBtn{position:absolute;top:50%;z-index:3;width:38px;height:38px;margin-top:-19px;padding:0;border-radius:50%;border:1.5px solid #1C1B1B;background:#F7F6F2;color:#1C1B1B;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .25s,color .25s,border-color .25s}
#hm-contact .ink.ink .gBtn:hover{background:#B8232F;border-color:#B8232F;color:#fff}
#hm-contact .ink.ink .gBtn svg path{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
#hm-contact .ink.ink .gPrev{left:-19px}#hm-contact .ink.ink .gNext{right:-19px}
/* roles: no script name over the art, clear names under the thumbnails */
#hm-contact .ink.ink .hRoleBox .slide p[aria-hidden]{display:none!important}
#hm-contact .ink.ink .thumb span[style*="Fraunces"]{font-family:'Oldtown',monospace!important;color:#1C1B1B!important;font-size:15px!important;letter-spacing:0.02em!important}
#hm-contact .ink.ink .hRoleName,#hm-contact .ink.ink .hRoleName[style]{font-family:'Arlysse',sans-serif!important;color:#1C1B1B!important;font-size:46px!important;letter-spacing:0.01em!important;text-transform:uppercase!important}
/* bio & booking */
#hm-contact .ink.ink .bioH,#hm-contact .ink.ink .bioH[style]{margin:0 0 10px;font-family:'AnaTwo',cursive!important;font-size:40px!important;line-height:1.1!important;letter-spacing:0!important;text-transform:none!important;color:#B8232F!important;font-weight:400!important}
#hm-contact .ink.ink #booking dt,#hm-contact .ink.ink #booking .hSplit span[style*="Jost"],#hm-contact .ink.ink .hReps span[style*="Jost"]{font-family:'Arlysse',sans-serif!important;font-size:14px!important;letter-spacing:0.06em!important;color:var(--blue)!important}
#hm-contact .ink.ink #booking dd{font-size:18px!important}
#hm-contact .ink.ink .hReps div[style*="padding: 20px 22px"]{border:0!important;padding:4px 0 0!important;background:none!important}
#hm-contact .ink.ink .hReps span[style*="font-size: 24px"]{font-family:'Arlysse',sans-serif!important;font-size:30px!important;text-transform:uppercase}
/* commercial: clear brand labels, the client list scrolls sideways in three rows */
#hm-contact .ink.ink .spotBrand{font-family:'Arlysse',sans-serif!important;text-transform:uppercase;letter-spacing:0.03em;color:#fff!important}
#hm-contact .ink.ink .hPol .spotBrand{color:#1C1B1B!important}
#hm-contact .ink.ink .wallNav{display:flex!important;align-items:center;justify-content:flex-end;gap:8px;margin:40px 0 0!important}
#hm-contact .ink.ink .wallNav .wallLbl{margin-right:auto;font-family:'AnaTwo',cursive;font-size:30px;color:#B8232F}
#hm-contact .ink.ink .wallNav button{width:38px!important;height:38px!important;border-radius:50%!important;border:1.5px solid #1C1B1B!important;background:none!important;color:#1C1B1B!important;cursor:pointer;transition:background .25s,color .25s,border-color .25s}
#hm-contact .ink.ink .wallNav button:hover{background:#B8232F!important;border-color:#B8232F!important;color:#fff!important}
#hm-contact .ink.ink .hWall,#hm-contact .ink.ink .hWall[style]{display:grid!important;grid-template-columns:none!important;grid-template-rows:repeat(3,56px);grid-auto-flow:column;grid-auto-columns:max-content;justify-content:start!important;align-items:center!important;gap:10px 46px!important;overflow-x:auto;scroll-behavior:smooth;margin-top:16px!important;padding:6px 4px 14px!important;scrollbar-width:thin;scrollbar-color:#B8232F transparent}
/* direction */
#hm-contact .ink.ink #direction .hSplit{grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important}
#hm-contact .ink.ink .fastLine{margin:0;font-family:'AnaTwo',cursive;font-size:27px;line-height:1.1;white-space:nowrap;color:var(--blue)}
/* more of my work: tabs + shelf are one page */
#hm-contact .ink.ink.ink section#more:not(#reel)[id]{margin-bottom:0!important;padding-bottom:10px!important;transform:none!important;box-shadow:0 -10px 40px -30px rgba(0,0,0,0.8)!important}
#hm-contact .ink.ink.ink section#music:not(#reel)[id],#hm-contact .ink.ink.ink section#audiodramas:not(#reel)[id],#hm-contact .ink.ink.ink section#audiobooks:not(#reel)[id]{transform:none!important;counter-increment:none!important;padding-top:40px!important;margin-top:0!important;box-shadow:0 28px 50px -28px rgba(0,0,0,0.85)!important}
#hm-contact .ink.ink #music::before,#hm-contact .ink.ink #audiodramas::before,#hm-contact .ink.ink #audiobooks::before{content:none!important}
/* demo track tabs: light on the dark card */
#hm-contact .ink.ink #demos.tPlayer button[role="tab"][style]{color:#EEEAE2!important}
#hm-contact .ink.ink #demos.tPlayer button[role="tab"][aria-selected="true"][style],#hm-contact .ink.ink #demos.tPlayer button[role="tab"][style]:hover{color:#fff!important}
/* 3 million views, marked like a highlighter */
#hm-contact .ink.ink .views{display:inline-block;margin-left:8px;padding:3px 10px 2px;background:#B8232F;color:#fff!important;font-family:'Arlysse',sans-serif;font-size:15px;letter-spacing:0.04em;text-transform:uppercase;transform:rotate(-2deg);clip-path:polygon(1% 12%,99% 0,100% 88%,0 100%)}
/* commercial tiles: dark film frames, not grey */
#hm-contact .ink.ink .hSpots button[aria-label],#hm-contact .ink.ink .hPolRow button[aria-label]{background:#141215!important;border:0!important;box-shadow:0 14px 26px -16px rgba(0,0,0,0.6)}
#hm-contact .ink.ink.ink .hSpots button[aria-label][style],#hm-contact .ink.ink.ink .hPolRow button[aria-label][style]{background:linear-gradient(160deg,#2A2329,#141215)!important}
#hm-contact .ink.ink .hSpots button > span[aria-hidden],#hm-contact .ink.ink .hPolRow button > span[aria-hidden]{border:1px solid rgba(238,234,226,0.75)!important;color:#fff!important;background:transparent;transition:background .25s,border-color .25s}
#hm-contact .ink.ink .hSpots button:hover > span[aria-hidden],#hm-contact .ink.ink .hPolRow button:hover > span[aria-hidden]{background:#B8232F;border-color:#B8232F!important}
#hm-contact .ink.ink .hSpots button > span:not([aria-hidden]){background:none!important}
#hm-contact .ink.ink .hSpots [style*="Jost"]{color:rgba(238,234,226,0.65)!important}
#hm-contact .ink.ink.ink .hPol .spotBrand{color:#fff!important}
/* page one: get to the player quickly */
#hm-contact .ink.ink.ink section.hSplit:not(#reel)[style]{padding-top:56px!important}
#hm-contact .ink.ink.ink.ink .hLede[style]{margin-bottom:64px!important}
#hm-contact .ink.ink section.hSplit > div:first-child{gap:16px!important}
#hm-contact .ink.ink .dlg2{margin-bottom:0}
#hm-contact .ink.ink .dlg2 .line{line-height:1.55}
/* game ticker right under Known for, on a dark strip so the logos read white like Home H */
#hm-contact .ink.ink .hStyles{margin-bottom:0!important}
#hm-contact .ink.ink.ink .gTick{margin:14px -30px 26px!important;border:0!important;background:#141215;transform:rotate(0.3deg);box-shadow:0 16px 30px -18px rgba(0,0,0,0.6)}
#hm-contact .ink.ink.ink .gTrack img{filter:brightness(0) invert(1)!important;opacity:0.85!important}
#hm-contact .ink.ink.ink .gBtn{background:#141215;border-color:rgba(238,234,226,0.5);color:#EEEAE2}
#hm-contact .ink.ink.ink .gBtn:hover{background:#B8232F;border-color:#B8232F}
#hm-contact .ink.ink.ink .gPrev{left:8px}#hm-contact .ink.ink.ink .gNext{right:8px}
/* Known for sits close under the player */
#hm-contact .ink.ink.ink section.hSplit:not(#reel)[style]{gap:4px!important}
#hm-contact .ink.ink .tPlayer{margin-bottom:22px!important}
/* Give me your: two rows, then scroll sideways */
#hm-contact .ink.ink.ink .hChipNav{display:inline-flex!important;gap:6px;margin-left:14px;vertical-align:middle}
#hm-contact .ink.ink.ink .hChipNav button{width:30px;height:30px;padding:0;border-radius:50%;border:1.5px solid #1C1B1B;background:none;color:#1C1B1B;cursor:pointer;transition:background .25s,color .25s,border-color .25s}
#hm-contact .ink.ink.ink .hChipNav button:hover{background:#B8232F;border-color:#B8232F;color:#fff}
#hm-contact .ink.ink.ink .hChips[style]{display:grid!important;grid-auto-flow:column;grid-template-rows:repeat(2,auto);grid-auto-columns:max-content;gap:8px 10px!important;overflow-x:auto;scroll-behavior:smooth;padding-bottom:8px;scrollbar-width:thin;scrollbar-color:#B8232F transparent}
/* the download button on the player */
#hm-contact .ink.ink.ink .tPlayer a[download][style]{display:inline-flex!important;align-items:center;gap:8px;padding:0 12px!important;min-height:34px!important;border:0!important;border-bottom:2px solid #B8232F!important;color:#EEEAE2!important;font-size:12px!important;background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%;transition:background-size .45s cubic-bezier(.2,.75,.2,1)}
#hm-contact .ink.ink.ink .tPlayer a[download][style]:hover{background-size:100% 100%;color:#fff!important}
#hm-contact .ink.ink.ink .tPlayer a[download] svg{color:#B8232F}
#hm-contact .ink.ink.ink .tPlayer a[download]:hover svg{color:#fff}
/* bio & booking: all typewriter, bold, tighter, no boxes */
#hm-contact .ink.ink.ink #booking dt,#hm-contact .ink.ink.ink #booking .hSplit span[style*="Jost"],#hm-contact .ink.ink.ink .hReps span[style*="Jost"]{font-family:'Oldtown',monospace!important;font-size:12px!important;letter-spacing:0.12em!important;color:var(--blue)!important;-webkit-text-stroke:0.5px currentColor}
#hm-contact .ink.ink.ink #booking dd,#hm-contact .ink.ink.ink #booking .hSplit span[style*="font-size: 17px"],#hm-contact .ink.ink.ink #booking .hSplit span[style*="italic"]{font-family:'Oldtown',monospace!important;font-style:normal!important;-webkit-text-stroke:0.35px currentColor}
#hm-contact .ink.ink.ink .hReps span[style*="font-size: 24px"]{font-family:'Oldtown',monospace!important;font-size:22px!important;text-transform:none!important;-webkit-text-stroke:0.7px currentColor;display:inline-block;padding-bottom:4px;background:linear-gradient(#B8232F,#B8232F) no-repeat left bottom/46px 2px}
#hm-contact .ink.ink.ink .hReps span[style*="font-size: 17px"]{font-family:'Oldtown',monospace!important;-webkit-text-stroke:0.35px currentColor}
#hm-contact .ink.ink.ink .bioH[style*="margin-top"]{margin-top:22px!important}
#hm-contact .ink.ink.ink #booking .hSplit{margin-top:14px!important}
#hm-contact .ink.ink .repPhoto{position:relative;margin:0;padding:8px 8px 22px;background:#fff;transform:rotate(-3deg);box-shadow:0 12px 24px -14px rgba(0,0,0,0.55)}
#hm-contact .ink.ink .repPhoto img{display:block;width:154px;height:180px;object-fit:cover;object-position:50% 25%}
#hm-contact .ink.ink .repPhoto .tape{position:absolute;left:50%;top:-14px;width:80px;height:24px;margin-left:-40px;background:rgba(226,221,203,0.85);transform:rotate(4deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-contact .ink.ink .coffee.faint{opacity:0.35;width:300px;height:300px}
/* About me slideshow: taped print, crossfades through six photos */
#hm-contact .ink.ink .bioShow{position:relative;width:230px;height:270px;margin:22px 0 0 40px;padding:10px 10px 34px;background:#fff;transform:rotate(-2.5deg);box-shadow:0 16px 30px -16px rgba(0,0,0,0.55)}
#hm-contact .ink.ink .bioShow img{position:absolute;left:10px;top:10px;width:230px;height:270px;object-fit:cover;opacity:0;transition:opacity 1.2s ease;background:#ddd}
#hm-contact .ink.ink .bioShow img.on,#hm-contact .ink.ink .bioShow:not(.run) img:first-of-type{opacity:1}
#hm-contact .ink.ink .bioShow .tape{position:absolute;left:50%;top:-14px;z-index:3;width:90px;height:26px;margin-left:-45px;background:rgba(226,221,203,0.88);transform:rotate(3deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-contact .ink.ink .bioShow .dots{position:absolute;left:0;right:0;bottom:12px;display:flex;justify-content:center;gap:7px}
#hm-contact .ink.ink .bioShow .dots i{width:6px;height:6px;border-radius:50%;background:rgba(28,27,27,0.22);transition:background .4s}
#hm-contact .ink.ink .bioShow .dots i.on{background:#B8232F}
@media (max-width:640px){#hm-contact .ink.ink .bioShow{width:220px;height:264px;margin:26px auto 0}#hm-contact .ink.ink .bioShow img{width:220px;height:264px}}
/* phone: no traveling line, red ovals drawn around the titles instead */
#hm-contact .ink.ink .hcirc{display:none}
@media (max-width:640px){
  #hm-contact .inkLine .live,#hm-contact .inkDot{display:none!important}
  #hm-contact .ink.armed .rv{opacity:1!important}
  #hm-contact .ink.ink.ink section:not(#reel) h2[style]{position:relative!important;display:inline-block!important;align-self:flex-start}
  #hm-contact .ink.ink :is(#music,#audiodramas,#audiobooks,#music-inner) .hcirc{display:none!important}
  #hm-contact .ink.ink .hcirc{display:block;position:absolute;left:-12px;top:-6px;width:calc(100% + 22px);height:calc(100% + 14px);overflow:visible;pointer-events:none}
  #hm-contact .ink.ink .hcirc path{fill:none;stroke:#B8232F;stroke-width:1.6;stroke-linecap:round}
}
@media (max-width:640px){#hm-contact .ink.ink a[href*="scarygood"][style]{display:block!important;padding:22px 0!important}#hm-contact .ink.ink a[href*="scarygood"] > span{gap:10px!important}#hm-contact .ink.ink .sgHead{font-size:38px!important}#hm-contact .ink.ink a[href*="scarygood"] span[style*="font-size: 19px"]{font-size:15px!important;line-height:1.5!important}#hm-contact .ink.ink a[href*="scarygood"] .chip[style]{padding:4px 8px!important;font-size:10px!important;letter-spacing:0.08em!important}#hm-contact .ink.ink .sgBtn{margin-top:14px}}
/* tighter vertical rhythm */
#hm-contact .ink.ink.ink section:not(#reel)[style]{margin-bottom:44px!important;padding-top:64px!important;padding-bottom:62px!important}
#hm-contact .ink.ink section:not(#reel) .trans{margin-top:20px!important}
@media (max-width:640px){
  #hm-contact .ink.ink.ink section:not(#reel)[style]{margin:0 8px 18px!important;padding:30px 18px 26px!important}
  #hm-contact .ink.ink.ink section:not(#reel)::before{top:12px!important}
  #hm-contact .ink.ink.ink.ink .hLede[style]{margin-bottom:44px!important}
  #hm-contact .ink.ink section:not(#reel) .trans{margin-top:12px!important;font-size:12px}
  #hm-contact .ink.ink .slug{font-size:12px;margin-bottom:2px}
  #hm-contact .ink.ink.ink section:not(#reel) h2[style]{font-size:40px!important;margin-bottom:4px!important}
  #hm-contact .ink.ink.ink section:not(#reel) [style*="padding-bottom: 14px"]{padding-bottom:8px!important}
  #hm-contact .ink.ink.ink section:not(#reel) [style*="margin-top: 26px"]{margin-top:14px!important}
  #hm-contact .ink.ink.ink section:not(#reel) [style*="margin-top: 22px"]{margin-top:12px!important}
  #hm-contact .ink.ink.ink section:not(#reel) [style*="margin-top: 34px"],#hm-contact .ink.ink.ink section:not(#reel) [style*="margin-top: 40px"]{margin-top:18px!important}
  #hm-contact .ink.ink.ink section:not(#reel) [style*="gap: 48px"],#hm-contact .ink.ink.ink section:not(#reel) [style*="gap: 56px"]{gap:22px!important}
  #hm-contact .ink.ink p,#hm-contact .ink.ink li{line-height:1.55}
  #hm-contact .ink.ink .tPlayer{margin-bottom:14px!important}
}
/* anything that fills red on hover: white text and icons */
#hm-contact .ink.ink.ink.ink.ink.ink :is(.fbtn,.pTab,.pGo,.hiLinks a,.ctabs button,.tPlayer a[download],.tPlayer button[role="tab"],.chip,.gBtn,.wallNav button,.hChipNav button,.credit a):hover,#hm-contact .ink.ink.ink.ink.ink.ink :is(.fbtn,.pTab,.hiLinks a,.ctabs button,.tPlayer a[download],.tPlayer button[role="tab"]):hover *,#hm-contact .ink.ink.ink.ink.ink.ink .pRow:hover .pGo{color:#fff!important}
#hm-contact .ink.ink.ink.ink.ink.ink .credit a:hover{color:#B8232F!important}
/* compact music shelf */
#hm-contact .ink.ink :is(#music,#music-inner) > p[style]{margin-top:10px!important;font-size:16px!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) div[style*="margin-top: 40px"],#hm-contact .ink.ink.ink :is(#music,#music-inner) div[style*="margin-top: 54px"]{margin-top:26px!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) h3[style*="margin: 54px"]{margin-top:26px!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) h3[style]{font-size:28px!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) .hTwoVid[style]{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:14px!important;max-width:640px;margin-top:10px!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) figcaption span[style*="font-size: 21px"]{font-size:15px!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) ul[style]{margin-top:10px!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) li a[style*="min-height: 58px"]{min-height:40px!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) li span[style*="font-size: 20px"]{font-size:15px!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="0.8fr"]{grid-template-columns:170px minmax(0,1fr)!important;gap:24px!important;margin-top:10px!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="0.8fr"] p[style*="font-size: 21px"]{font-size:16px!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="0.8fr"] > div[style]{gap:10px!important}
#hm-contact .ink.ink.ink.ink.ink :is(#music,#music-inner) a[href*="lunaiirathemusical"][style]{min-height:36px!important;padding:0 8px!important;background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%!important;color:#1C1B1B!important;border-bottom:2px solid #B8232F!important;font-family:'Oldtown',monospace!important;font-size:11px!important;letter-spacing:0.14em!important;transition:background-size .45s cubic-bezier(.2,.75,.2,1),color .3s}
#hm-contact .ink.ink.ink.ink.ink :is(#music,#music-inner) a[href*="lunaiirathemusical"][style]:hover{background-size:100% 100%!important;color:#fff!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="align-items: start"]{grid-template-columns:minmax(0,300px) minmax(0,1fr)!important;gap:28px!important;margin-top:10px!important;align-items:start!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="align-items: start"] > div[style*="flex-direction: column"]{gap:0!important;border-top:1px solid rgba(28,27,27,0.18)}
#hm-contact .ink.ink.ink :is(#music,#music-inner) iframe[title*="SoundCloud"]{height:20px!important;margin:9px 0;filter:grayscale(1) contrast(1.05)}
#hm-contact .ink.ink.ink :is(#music,#music-inner) iframe[title*="SoundCloud"]{border-bottom:0!important}
#hm-contact .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="align-items: start"] > div[style*="flex-direction: column"] iframe + iframe{border-top:1px solid rgba(28,27,27,0.12)!important;padding-top:9px;height:29px!important;margin-top:0}
#hm-contact .ink.ink.ink :is(#music,#music-inner) a[href*="soundcloud.com/mrsmissyms"]{margin-top:12px!important}
@media (max-width:640px){
  #hm-contact .ink.ink.ink :is(#music,#music-inner) .hTwoVid[style]{grid-template-columns:minmax(0,1fr)!important}
  #hm-contact .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="0.8fr"]{grid-template-columns:110px minmax(0,1fr)!important;gap:14px!important;align-items:start!important}
  #hm-contact .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="align-items: start"]{grid-template-columns:minmax(0,1fr)!important}
}
/* phone: a small Scenes button instead of the sticky bar */
#hm-contact .jump .jBtn{display:none}
@media (max-width:640px){
  #hm-contact .ink.ink .jump[style]{position:sticky!important;top:0!important;height:0!important;padding:0!important;margin:0!important;background:none!important;border:0!important;box-shadow:none!important;display:block!important;overflow:visible!important;z-index:40!important}
  #hm-contact .ink.ink .jump .jBtn{display:flex;align-items:center;gap:8px;position:absolute;right:12px;top:10px;height:40px;padding:0 14px 0 11px;border:1px solid rgba(238,234,226,0.35);border-radius:0;background:rgba(18,16,19,0.92);color:#EEEAE2;font-family:'Oldtown',monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;cursor:pointer;box-shadow:0 8px 20px -10px rgba(0,0,0,0.7)}
  #hm-contact .ink.ink .jump .jBtn svg{width:20px;height:20px}
  #hm-contact .ink.ink .jump .jBtn path{fill:none;stroke:#B8232F;stroke-width:2;stroke-linecap:round}
  #hm-contact .ink.ink .jump a{display:none!important}
  #hm-contact .ink.ink .jump.open a{display:block!important;position:relative}
  #hm-contact .ink.ink.ink .jump.open[style]{display:flow-root!important}
  #hm-contact .ink.ink .jump a{border-radius:0!important}
  #hm-contact .ink.ink .jump.open::after{content:'';position:absolute;right:12px;top:56px;width:220px;z-index:-1}
  #hm-contact .ink.ink .jump.open a{margin:0!important;padding:9px 16px!important;width:200px;margin-left:auto!important;margin-right:12px!important;background:#121013;color:#EEEAE2!important;font-size:13px!important;letter-spacing:0.06em!important;text-align:left;border-left:2px solid transparent!important}
  #hm-contact .ink.ink .jump.open a:first-of-type{margin-top:56px!important;padding-top:14px!important}
  #hm-contact .ink.ink .jump.open a:last-of-type{padding-bottom:14px!important;box-shadow:0 16px 30px -12px rgba(0,0,0,0.7)}
  #hm-contact .ink.ink .jump.open a.on{border-left-color:#B8232F!important;color:#fff!important}
  #hm-contact .ink.ink .jump.open a::before{display:none!important}
}
/* scene headings always sit top left of the page */
#hm-contact .ink.ink.ink section:not(#reel) > .slug{position:absolute;left:120px;top:34px;margin:0!important;z-index:2}
#hm-contact .ink.ink.ink :is(#music,#audiodramas,#audiobooks,#music-inner) > .slug{position:static;margin:0 0 6px!important}
@media (max-width:640px){
  #hm-contact .ink.ink.ink section:not(#reel) > .slug{left:18px;top:12px}
  #hm-contact .ink.ink.ink.ink section:not(#reel)[style]{padding-top:40px!important}
}
/* every opening line is all ink */
#hm-contact .ink.ink.ink.ink.ink .hLede span{color:#1C1B1B!important}
/* site credit above the footer */
#hm-contact .ink.ink .credit{margin:0;padding:22px 48px 0;text-align:center;font-family:'Oldtown',monospace;font-size:12px;letter-spacing:0.06em;color:rgba(238,234,226,0.6)}
#hm-contact .ink.ink .credit a{color:#EEEAE2;text-decoration:none;border-bottom:1.5px solid #B8232F;transition:color .2s}
#hm-contact .ink.ink .credit a:hover{color:#B8232F}
@media (max-width:640px){#hm-contact .ink.ink.ink .gTick{margin:12px -14px 22px!important}#hm-contact .ink.ink .hReps[style]{grid-template-columns:minmax(0,1fr)!important}#hm-contact .ink.ink .repPhoto{width:150px;justify-self:center}#hm-contact .ink.ink .repPhoto img{width:134px;height:150px}#hm-contact .ink.ink .credit{padding:18px 20px 0}}
/* footer sign-off */
#hm-contact .ink.ink .mFoot .fri,#hm-contact .ink.ink .mFoot .fri[style]{font-family:'AnaOne',cursive!important;font-style:normal!important;font-size:34px!important;color:#B8232F!important}
/* scary good */
#hm-contact .ink.ink a[href*="scarygood"]{color:#1C1B1B!important}
#hm-contact .ink.ink .sgHead{font-family:'AnaOne',cursive;font-size:64px;line-height:1.05;color:#B8232F}
#hm-contact .ink.ink.ink.ink.ink .sgBtn.fbtn.fbtn{font-size:12px!important;min-height:42px!important;padding:0 14px!important}
#hm-contact .ink.ink a[href*="scarygood"] .chip{font-family:'Oldtown',monospace!important;font-size:12px!important;color:#1C1B1B!important}
#hm-contact .ink.ink .chip:hover{background:#B8232F!important;border-color:#B8232F!important;color:#fff!important}
@media (max-width:640px){#hm-contact .ink.ink.ink #direction .hSplit{grid-template-columns:minmax(0,1fr)!important;gap:30px!important}#hm-contact .ink.ink .hTwoVid{grid-template-columns:minmax(0,1fr)!important;gap:22px!important}#hm-contact .ink.ink.ink .fastLine{font-size:21px;white-space:nowrap}#hm-contact .ink.ink.ink.ink .hLede[style]{margin-bottom:50px!important}#hm-contact .ink.ink h2,#hm-contact .ink.ink h2[style]{font-size:46px!important}#hm-contact .ink.ink.ink .hLede[style]{font-size:36px!important}#hm-contact .ink.ink .tPlayer{padding:24px 18px}#hm-contact .ink.ink .tPlayer .pnote{display:none}#hm-contact .ink.ink .gPrev{left:-8px}#hm-contact .ink.ink .gNext{right:-8px}#hm-contact .ink.ink .sgHead{font-size:44px}#hm-contact .ink.ink .bioH,#hm-contact .ink.ink .bioH[style]{font-size:32px!important}}

/* ===== Fans & press in the screenplay style ===== */
#hm-contact .ink.ink section:not(#reel) [style*="color: #E9D6E2"],#hm-contact .ink.ink section:not(#reel) [style*="color: rgb(233, 214, 226)"]{color:rgba(28,27,27,0.72)!important}
#hm-contact .ink.ink section:not(#reel) [style*="color: #E7BEDB"],#hm-contact .ink.ink section:not(#reel) [style*="color: rgb(231, 190, 219)"]{color:#B8232F!important}
#hm-contact .ink.ink section:not(#reel) [style*="border: 1px solid #F3E6EA"],#hm-contact .ink.ink section:not(#reel) [style*="border-top: 1px solid #F3E6EA"],#hm-contact .ink.ink section:not(#reel) [style*="border-bottom: 1px solid #F3E6EA"]{border-color:rgba(28,27,27,0.25)!important}
#hm-contact .ink.ink section:not(#reel) [style*="1px solid rgb(243, 230, 234)"]{border-color:rgba(28,27,27,0.25)!important}
#hm-contact .ink.ink.ink section#press:not(#reel)[style],#hm-contact .ink.ink.ink section#cons:not(#reel)[style]{background:#F7F6F2!important;color:#1C1B1B!important}

/* ===== Coaching in the screenplay style ===== */
#hm-contact .ink.ink.ink section:not(#reel)[style*="background"]{background:#F7F6F2!important;color:#1C1B1B!important}
#hm-contact .ink.ink.ink section:not(#reel) [style*="color: #F3E6EA"],#hm-contact .ink.ink.ink section:not(#reel) [style*="color: rgb(243, 230, 234)"]{color:#1C1B1B!important}
#hm-contact .ink.ink.ink section:not(#reel) [style*="color: #E2508C"],#hm-contact .ink.ink.ink section:not(#reel) [style*="color: rgb(226, 80, 140)"]{color:#B8232F!important}
#hm-contact .ink.ink.ink section:not(#reel) [style*="rgba(243,230,234"],.ink.ink.ink section:not(#reel) [style*="rgba(243, 230, 234"]{border-color:rgba(28,27,27,0.2)!important}
#hm-contact .ink.ink.ink section:not(#reel) [style*="background: #2A1F22"],#hm-contact .ink.ink.ink section:not(#reel) [style*="background: rgb(42, 31, 34)"]{background:#ddd!important}
#hm-contact .ink.ink.ink section:not(#reel) span[aria-hidden="true"][style*="position: absolute"][style*="inset"]{display:none!important}
/* every class button uses the typed red-strip button */
#hm-contact .ink.ink.ink.ink.ink .xBtn.fbtn{gap:8px!important}
#hm-contact .ink.ink .xBtn svg{width:14px;height:14px}
#hm-contact .ink.ink.ink .xNote,#hm-contact .ink.ink.ink [class*="xNote"]{font-family:'Oldtown',monospace!important;font-size:11px!important;letter-spacing:0.12em!important;color:#B8232F!important;background:none!important;border:1px solid #B8232F!important;padding:6px 10px!important;border-radius:0!important}
/* page one: the pitch */
#hm-contact .ink.ink.ink section#start:not(#reel)[style]{padding-top:56px!important}
#hm-contact .ink.ink.ink.ink #start .hLede[style]{font-size:58px!important;margin-bottom:62px!important}
#hm-contact .ink.ink #start .dlg2{margin-left:130px;max-width:560px}
#hm-contact .ink.ink.ink #start .sIntro[style]{margin-top:30px!important;gap:40px!important}
#hm-contact .ink.ink.ink #start span[style*="Jost"][style*="color: var(--acc)"]{font-family:'AnaTwo',cursive!important;font-size:32px!important;letter-spacing:0!important;text-transform:none!important;color:#B8232F!important}
#hm-contact .ink.ink.ink #start .sHow p[style]{font-size:15.5px!important;line-height:1.65!important;color:#1C1B1B!important}
#hm-contact .ink.ink.ink #start .sDiff[style]{gap:14px 20px!important}
#hm-contact .ink.ink.ink #start .sDiff > div,#hm-contact .ink.ink.ink #start .sDiff div[style*="padding"]{background:none!important;border:0!important;border-left:2px solid #B8232F!important;padding:2px 0 2px 12px!important;border-radius:0!important}
#hm-contact .ink.ink.ink #start .sDiff span[style*="italic"]{font-family:'Oldtown',monospace!important;font-style:normal!important;font-size:15px!important;color:#1C1B1B!important;-webkit-text-stroke:0.4px currentColor}
#hm-contact .ink.ink.ink #start .sDiff span[style*="font-size: 15px"]{font-size:13.5px!important}
#hm-contact .ink.ink.ink #start div[style*="dashed"]{border:0!important;padding:0!important;transform:rotate(-1deg)}
#hm-contact .ink.ink.ink #start div[style*="dashed"] > span{font-family:'AnaTwo',cursive!important;font-size:28px!important;letter-spacing:0!important;text-transform:none!important;color:var(--blue)!important}
#hm-contact .ink.ink.ink #start div[style*="dashed"] p{font-family:'Oldtown',monospace!important;color:var(--blue)!important;font-size:14px!important}
/* group classes: a typed class list with red icons */
#hm-contact .ink.ink.ink #groups > p[style]{font-family:'Oldtown',monospace!important;font-size:16px!important;line-height:1.65!important;color:#1C1B1B!important}
#hm-contact .ink.ink.ink #groups .lGuide[style]{border:0!important;background:none!important;margin-top:20px!important}
#hm-contact .ink.ink.ink #groups .lGuide div[style*="padding: 20px 22px"]{border:0!important;border-left:2px solid #B8232F!important;padding:2px 18px 2px 12px!important}
#hm-contact .ink.ink.ink #groups .lGuide span[style*="font-size: 21px"]{font-family:'Oldtown',monospace!important;font-size:15px!important;line-height:1.5!important;color:#1C1B1B!important}
#hm-contact .ink.ink.ink #groups .gList[style]{border-top:2px solid #B8232F!important}
#hm-contact .ink.ink.ink #groups .gRow[style]{background:none!important;border-color:rgba(28,27,27,0.14)!important}
#hm-contact .ink.ink.ink .gTile[style]{background:none!important;border:0!important;box-shadow:none!important}
#hm-contact .ink.ink.ink .gTile svg{color:#B8232F!important;stroke:#B8232F}
#hm-contact .ink.ink.ink .gTile span[style*="bottom: 0"]{display:none}
#hm-contact .ink.ink.ink #groups h3[style]{font-family:'Arlysse',sans-serif!important;font-style:normal!important;font-size:24px!important;text-transform:uppercase!important;color:#1C1B1B!important}
#hm-contact .ink.ink.ink #groups .gRow p[style]{font-size:14.5px!important;color:rgba(28,27,27,0.75)!important}
#hm-contact .ink.ink.ink #groups .gC,#hm-contact .ink.ink.ink #groups .gC[style]{font-family:'Oldtown',monospace!important;color:#1C1B1B!important;letter-spacing:0.06em!important}
#hm-contact .ink.ink.ink #groups .gType span[style]{background:none!important;border:0!important;color:#B8232F!important;font-family:'AnaTwo',cursive!important;font-size:22px!important;letter-spacing:0!important;text-transform:none!important;padding:0!important}
/* ongoing coaching */
#hm-contact .ink.ink.ink section#ongoing:not(#reel)[style]{padding:60px 110px 60px 120px!important}
#hm-contact .ink.ink.ink #ongoing .oHero[style]{gap:40px!important;align-items:start!important}
#hm-contact .ink.ink.ink #ongoing .oHero div[style*="aspect-ratio: 4 / 5"]{border-radius:0!important;border:10px solid #fff;border-bottom-width:30px;box-shadow:0 16px 30px -16px rgba(0,0,0,0.55);transform:rotate(-2deg)}
#hm-contact .ink.ink .oBadge{transform:rotate(12deg)}
#hm-contact .ink.ink .oBadge svg{color:#B8232F!important}
#hm-contact .ink.ink .oBadge .oCore[style]{background:#B8232F!important;color:#fff!important}
#hm-contact .ink.ink.ink #ongoing span[style*="Jost"][style*="letter-spacing: 0.32em"],#hm-contact .ink.ink.ink #ongoing .oText span[style*="Jost"]{font-family:'AnaTwo',cursive!important;font-size:30px!important;letter-spacing:0!important;text-transform:none!important;color:#B8232F!important}
#hm-contact .ink.ink.ink #ongoing p[style*="font-size: 24px"]{font-family:'Oldtown',monospace!important;font-size:17px!important;line-height:1.6!important}
#hm-contact .ink.ink.ink #ongoing .oPlans[style]{gap:0 22px!important}
#hm-contact .ink.ink.ink #ongoing .oPlans div[style]{border:0!important;border-left:2px solid #B8232F!important;padding:2px 0 2px 12px!important}
#hm-contact .ink.ink.ink #ongoing .oPlans span[style*="font-size: 24px"]{font-family:'Arlysse',sans-serif!important;font-size:24px!important}
#hm-contact .ink.ink.ink #ongoing .oText[style]{margin-top:30px!important;border-color:rgba(28,27,27,0.15)!important;background:none!important}
#hm-contact .ink.ink.ink #ongoing .oWhat li[style]{border-color:rgba(28,27,27,0.12)!important}
#hm-contact .ink.ink.ink #ongoing .oWhat b{color:#1C1B1B!important}
/* one-on-ones */
#hm-contact .ink.ink.ink #sessions h3[style]{font-family:'Arlysse',sans-serif!important;font-style:normal!important;font-size:26px!important;text-transform:uppercase!important;color:#1C1B1B!important}
#hm-contact .ink.ink.ink #sessions p[style*="italic"]{font-family:'Oldtown',monospace!important;font-style:normal!important;font-size:15px!important;color:#1C1B1B!important}
#hm-contact .ink.ink.ink #sessions span[style*="italic"][style*="22px"]{font-family:'AnaTwo',cursive!important;color:var(--blue)!important;font-size:28px!important}
#hm-contact .ink.ink.ink #sessions article[style]{padding:18px 0!important;border-color:rgba(28,27,27,0.14)!important}
/* 25% off: a taped dark card */
#hm-contact .ink.ink.ink section.oPromo:not(#reel)[style]{position:relative;width:900px;max-width:calc(100% - 40px);margin:0 auto 44px!important;padding:30px 40px!important;background:#141215!important;color:#EEEAE2!important;transform:rotate(-0.6deg);box-shadow:0 22px 40px -22px rgba(0,0,0,0.7);counter-increment:none!important}
#hm-contact .ink.ink section.oPromo::before{content:''!important;position:absolute;left:60px!important;top:-15px!important;right:auto!important;width:120px;height:30px;background:rgba(226,221,203,0.88);transform:rotate(-3deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-contact .ink.ink.ink section.oPromo [style]{color:#EEEAE2!important}
#hm-contact .ink.ink.ink section.oPromo span[style*="54px"]{font-family:'Arlysse',sans-serif!important;font-style:normal!important;color:#B8232F!important;font-size:58px!important}
#hm-contact .ink.ink.ink section.oPromo p[style]{font-family:'Oldtown',monospace!important;font-size:15px!important}
#hm-contact .ink.ink.ink.ink.ink.ink section.oPromo .fbtn.fbtn{color:#EEEAE2!important}
#hm-contact .ink.ink.ink.ink.ink.ink section.oPromo .fbtn.fbtn:hover{color:#fff!important}
/* questions */
#hm-contact .ink.ink.ink #faq summary[style]{font-family:'Oldtown',monospace!important;font-style:normal!important;font-size:16px!important;color:#1C1B1B!important;-webkit-text-stroke:0.35px currentColor}
#hm-contact .ink.ink.ink #faq summary svg{color:#B8232F!important}
#hm-contact .ink.ink.ink #faq .fItem p[style]{font-size:14.5px!important;color:rgba(28,27,27,0.78)!important}
/* are you ready */
#hm-contact .ink.ink.ink #ready div[style*="padding: 70px 48px"]{padding:0!important;max-width:none!important}
#hm-contact .ink.ink.ink #ready span[style*="Jost"]{font-family:'AnaTwo',cursive!important;font-size:30px!important;letter-spacing:0!important;text-transform:none!important;color:#B8232F!important}
#hm-contact .ink.ink.ink #ready .rList[style]{border-top:2px solid #B8232F!important}
#hm-contact .ink.ink.ink #ready .rList li[style]{font-family:'Oldtown',monospace!important;font-size:15px!important;border-color:rgba(28,27,27,0.14)!important}
#hm-contact .ink.ink.ink #ready .rList li > span:first-child{font-family:'AnaTwo',cursive!important;color:#B8232F!important;font-size:24px!important}
/* the class details pop-up: a script page */
#hm-contact .ink.ink.ink .lModal[style]{background:#F7F6F2!important;color:#1C1B1B!important;border-radius:0!important;border:0!important;box-shadow:0 30px 60px -20px rgba(0,0,0,0.8)!important;--ink:#1C1B1B;--rgb:28,27,27;--soft:rgba(28,27,27,0.78);--mute:rgba(28,27,27,0.55)}
#hm-contact .ink.ink.ink .lModal h3[style]{font-family:'AnaOne',cursive!important;font-style:normal!important;font-size:48px!important;color:#1C1B1B!important;text-transform:none!important}
#hm-contact .ink.ink.ink .lModal [style*="Fraunces"]{font-family:'Oldtown',monospace!important;font-style:normal!important}
#hm-contact .ink.ink.ink .lModal [style*="Jost"]{font-family:'Oldtown',monospace!important}
#hm-contact .ink.ink.ink .lModal p[style]{color:#1C1B1B!important}
#hm-contact .ink.ink.ink.ink.ink.ink .lModal .fbtn.fbtn{color:#1C1B1B!important}
#hm-contact .ink.ink.ink.ink.ink.ink .lModal .fbtn.fbtn:hover{color:#fff!important}
/* page one header: big typewriter, then the script */
#hm-contact .ink.ink.ink.ink #start .hLede[style]{font-size:60px!important;line-height:1.05!important}
#hm-contact .ink.ink.ink.ink.ink #start .hLede .tw{display:block!important;margin-bottom:4px;font-family:'Oldtown',monospace!important;font-size:52px!important;line-height:1.1!important;letter-spacing:0.04em!important;text-transform:uppercase!important;color:#1C1B1B!important;-webkit-text-stroke:1px currentColor}
/* How I teach stays on the script page; How I'm different + Did you know get a taped-on dark card */
#hm-contact .ink.ink.ink.ink #start .sIntro[style]{margin-top:30px!important;gap:44px!important;align-items:start!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important}
#hm-contact .ink.ink.ink.ink #start .sDiff[style]{grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:16px 22px!important}
#hm-contact .ink.ink.ink.ink #start .sIntro span[style*="Jost"][style*="color: var(--acc)"]{font-size:36px!important}
#hm-contact .ink.ink.ink.ink #start .sHow p[style]{font-size:17px!important;line-height:1.75!important;color:#1C1B1B!important}
#hm-contact .ink.ink.ink.ink #start .sIntro > div:last-child{position:relative;padding:36px 32px 30px;background:#141215;color:#EEEAE2;transform:rotate(1deg);box-shadow:0 22px 40px -22px rgba(0,0,0,0.7)}
#hm-contact .ink.ink #start .sIntro > div:last-child::before{content:'';position:absolute;right:46px;top:-15px;width:110px;height:30px;background:rgba(226,221,203,0.9);transform:rotate(4deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-contact .ink.ink.ink.ink #start .sIntro > div:last-child span[style*="Jost"][style*="color: var(--acc)"]{color:#E8707A!important}
#hm-contact .ink.ink.ink.ink #start .sDiff > div,#hm-contact .ink.ink.ink.ink #start .sDiff div[style*="padding"]{border:0!important;padding:0!important;background:none!important}
#hm-contact .ink.ink.ink.ink #start .sDiff span[style*="italic"]{font-size:17px!important;color:#fff!important}
#hm-contact .ink.ink.ink.ink #start .sDiff span[style*="font-size: 15px"]{font-size:15px!important;color:rgba(238,234,226,0.85)!important}
#hm-contact .ink.ink.ink.ink #start .sIntro div[style*="dashed"] > span{color:#E8707A!important}
#hm-contact .ink.ink.ink.ink #start .sIntro div[style*="dashed"] p{color:rgba(238,234,226,0.85)!important;font-size:15px!important}
#hm-contact .ink.ink.ink.ink.ink.ink.ink #start .sIntro > div:last-child .fbtn.fbtn{color:#EEEAE2!important}
#hm-contact .ink.ink.ink.ink.ink.ink.ink #start .sIntro > div:last-child .fbtn.fbtn:hover{color:#fff!important}
/* group classes: no script, tighter */
#hm-contact .ink.ink.ink.ink #groups .gRow .gType span[style],#hm-contact .ink.ink.ink.ink.ink section#groups span[style*="background"][style*="Jost"]{font-family:'Oldtown',monospace!important;font-size:11px!important;letter-spacing:0.12em!important;text-transform:uppercase!important;color:#B8232F!important;-webkit-text-stroke:0.4px currentColor}
#hm-contact .ink.ink.ink.ink #groups .gRow[style]{padding:9px 0!important;gap:2px 12px!important}
#hm-contact .ink.ink.ink.ink #groups h3[style]{font-size:18px!important}
#hm-contact .ink.ink.ink.ink #groups .gRow p[style]{font-size:13.5px!important;line-height:1.35!important}
#hm-contact .ink.ink.ink.ink #groups .gRow .gC{font-size:10.5px!important}
#hm-contact .ink.ink.ink.ink #groups .gRow .gTile[style]{width:30px!important;height:30px!important;flex-basis:30px}
#hm-contact .ink.ink.ink.ink #groups .gRow .gType{margin-left:42px}
#hm-contact .ink.ink.ink.ink.ink.ink.ink #groups .gBtns .fbtn.fbtn{min-height:30px!important;font-size:10px!important}
#hm-contact .ink.ink.ink.ink #groups > p[style]{font-size:15px!important;margin-top:12px!important}
#hm-contact .ink.ink.ink.ink #groups .lGuide[style]{margin-top:12px!important}
#hm-contact .ink.ink.ink.ink #groups .lGuide span[style*="font-size: 21px"]{font-size:13.5px!important}
/* what we work on: a taped-on dark card */
#hm-contact .ink.ink.ink.ink #ongoing .oText[style]{position:relative;margin-top:40px!important;padding:38px 40px 30px!important;border:0!important;background:#141215!important;color:#EEEAE2;transform:rotate(0.4deg);box-shadow:0 22px 40px -22px rgba(0,0,0,0.7)}
#hm-contact .ink.ink #ongoing .oText::before{content:'';position:absolute;right:80px;top:-15px;width:120px;height:30px;background:rgba(226,221,203,0.9);transform:rotate(3deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-contact .ink.ink.ink.ink #ongoing .oText [style]{color:#EEEAE2!important}
#hm-contact .ink.ink.ink.ink #ongoing .oText span[style*="Jost"]{color:#E8707A!important}
#hm-contact .ink.ink.ink.ink #ongoing .oWhat b{color:#fff!important}
#hm-contact .ink.ink.ink.ink #ongoing .oWhat li[style]{border-color:rgba(238,234,226,0.14)!important}
#hm-contact .ink.ink.ink.ink #ongoing .oWhat li span[style*="color: #E2508C"]{color:#E8707A!important}
/* 25% off: a taped paper coupon on the desk */
#hm-contact .ink.ink.ink.ink section.oPromo:not(#reel)[style]{background:#F7F6F2!important;color:#1C1B1B!important;width:760px;transform:rotate(-1.2deg)}
#hm-contact .ink.ink.ink.ink section.oPromo [style]{color:#1C1B1B!important}
#hm-contact .ink.ink.ink.ink section.oPromo span[style*="54px"]{color:#B8232F!important}
#hm-contact .ink.ink.ink.ink.ink.ink.ink section.oPromo .fbtn.fbtn{color:#1C1B1B!important}
#hm-contact .ink.ink.ink.ink.ink.ink.ink section.oPromo .fbtn.fbtn:hover{color:#fff!important}
#hm-contact .ink.ink section.oPromo{outline:1.5px dashed rgba(28,27,27,0.3);outline-offset:-10px}
/* before you book / are you ready */
#hm-contact .ink.ink #ready .sub2{margin:8px 0 0;font-family:'AnaTwo',cursive;font-size:34px;color:#B8232F;transform:rotate(-1.5deg);transform-origin:left}
/* a smiling headshot paper-clipped to page one, like a casting pick */
#hm-contact .ink.ink .clipShot{position:absolute;right:100px;top:34px;z-index:3;margin:0;padding:8px;background:#fff;transform:rotate(-3deg);box-shadow:0 14px 26px -14px rgba(0,0,0,0.55)}
#hm-contact .ink.ink .clipShot img{display:block;width:140px;height:164px;object-fit:cover;object-position:50% 20%}
#hm-contact .ink.ink .clipShot .clip{position:absolute;left:22px;top:-26px;width:18px;height:52px;overflow:visible}
#hm-contact .ink.ink .clipShot .clip path{fill:none;stroke:#8a8a8a;stroke-width:2.6;stroke-linecap:round}
#hm-contact .ink.ink .clipShot figcaption{position:absolute;left:-96px;top:56px;font-family:'AnaTwo',cursive;font-size:30px;color:#B8232F;transform:rotate(-10deg);white-space:nowrap}
#hm-contact .ink.ink .clipShot .mark{position:absolute;left:-98px;top:92px;width:84px;height:18px;overflow:visible}
#hm-contact .ink.ink .clipShot .mark path{fill:none;stroke:#B8232F;stroke-width:1.8;stroke-linecap:round}
/* what we work on: the list scrolls sideways, two rows at a time */
#hm-contact .ink.ink.ink.ink #ongoing .oWhat[style]{display:grid!important;grid-auto-flow:column;grid-template-rows:repeat(2,auto);grid-template-columns:none!important;grid-auto-columns:minmax(260px,320px);gap:0 34px!important;overflow-x:auto;scroll-behavior:smooth;padding-bottom:10px;scrollbar-width:thin;scrollbar-color:#B8232F transparent}
/* what we work on: bigger type, subtle arrows */
#hm-contact .ink.ink.ink.ink #ongoing .oText p[style]{font-size:17px!important;line-height:1.65!important}
#hm-contact .ink.ink.ink.ink #ongoing .oText span[style*="Jost"]{font-size:38px!important}
#hm-contact .ink.ink.ink.ink #ongoing .oWhat[style]{grid-auto-columns:minmax(300px,360px)!important}
#hm-contact .ink.ink.ink.ink #ongoing .oWhat li[style]{font-size:16.5px!important;line-height:1.55!important;padding:12px 0!important}
#hm-contact .ink.ink #ongoing .oText > div:last-child{position:relative}
#hm-contact .ink.ink.ink #ongoing .wNav{display:flex!important;position:absolute;right:0;top:-48px;gap:8px;margin:0!important}
#hm-contact .ink.ink.ink #ongoing .wNav button{width:32px!important;height:32px!important;padding:0!important;border-radius:50%!important;border:1px solid rgba(238,234,226,0.35)!important;background:none!important;color:rgba(238,234,226,0.8)!important;font-size:14px!important;cursor:pointer;transition:background .25s,border-color .25s,color .25s}
#hm-contact .ink.ink.ink #ongoing .wNav button:hover{background:#B8232F!important;border-color:#B8232F!important;color:#fff!important}
/* fixes */
#hm-contact .ink.ink.ink section:not(#reel) > span[aria-hidden="true"][style*="radial-gradient"]{display:none!important}
#hm-contact .ink.ink.ink #start div[style*="dashed"]{background:none!important}
#hm-contact .ink.ink .xBtn::before{display:none!important}
#hm-contact .ink.ink.ink.ink.ink.ink #start .fbtn.fbtn,#hm-contact .ink.ink.ink.ink.ink.ink #groups .fbtn.fbtn,#hm-contact .ink.ink.ink.ink.ink.ink #sessions .fbtn.fbtn,#hm-contact .ink.ink.ink.ink.ink.ink #ongoing .fbtn.fbtn{background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%!important;color:#1C1B1B!important;border:0!important;border-bottom:2px solid #B8232F!important}
#hm-contact .ink.ink.ink.ink.ink.ink #start .fbtn.fbtn:hover,#hm-contact .ink.ink.ink.ink.ink.ink #groups .fbtn.fbtn:hover,#hm-contact .ink.ink.ink.ink.ink.ink #sessions .fbtn.fbtn:hover,#hm-contact .ink.ink.ink.ink.ink.ink #ongoing .fbtn.fbtn:hover{background-size:100% 100%!important;color:#fff!important}
#hm-contact .ink.ink.ink.ink.ink.ink #groups .gBtns .fbtn.fbtn{min-width:0!important}
#hm-contact .ink.ink.ink.ink section:not(#reel) span[style*="background"][style*="Jost"]{background:none!important;border:0!important;padding:0!important;font-family:'AnaTwo',cursive!important;font-size:24px!important;letter-spacing:0!important;text-transform:none!important;color:#B8232F!important}
#hm-contact .ink.ink.ink.ink section:not(#reel) span[style*="background"][style*="Jost"] svg{display:none}
#hm-contact .ink.ink.ink.ink #ready .rList li > span:first-child{font-size:0!important;width:18px;height:18px;margin-top:3px;background:#B8232F;-webkit-mask:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M4%2012.5%209.5%2018%2020%206.5%22/%3E%3C/svg%3E") center/contain no-repeat;mask:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M4%2012.5%209.5%2018%2020%206.5%22/%3E%3C/svg%3E") center/contain no-repeat}
/* each class: icon, name + blurb, buttons; length, price and type on a second line */
#hm-contact .ink.ink.ink.ink #groups .gRow[style]{display:flex!important;flex-wrap:wrap;align-items:center;gap:4px 14px!important;padding:14px 0!important}
#hm-contact .ink.ink.ink.ink #groups .gRow .gTile[style]{width:36px!important;height:36px!important;flex:0 0 36px;align-self:flex-start}
#hm-contact .ink.ink.ink.ink #groups .gRow > div:nth-child(2){flex:1 1 300px}
#hm-contact .ink.ink.ink.ink #groups .gRow .gBtns{order:2;margin-left:auto}
#hm-contact .ink.ink.ink.ink #groups .gRow::after{content:'';flex-basis:100%;order:3;height:0}
#hm-contact .ink.ink.ink.ink #groups .gRow .gC{order:4;font-size:11px!important}
#hm-contact .ink.ink.ink.ink #groups .gRow .gType{margin-left:50px}
#hm-contact .ink.ink.ink.ink #groups .gRow .gType span[style]{font-size:20px!important}
#hm-contact .ink.ink.ink.ink #groups .gRow .gC:empty{display:none}
#hm-contact .ink.ink.ink.ink #groups h3[style]{font-size:21px!important;white-space:normal}
@media (max-width:640px){
  #hm-contact .ink.ink.ink.ink #groups .gRow .gBtns{order:5;margin-left:50px;width:100%}
  #hm-contact .ink.ink.ink.ink #groups .gRow .gType{margin-left:50px}
}
@media (max-width:640px){
  #hm-contact .ink.ink .clipShot{right:16px;top:84px;padding:4px}
  #hm-contact .ink.ink .clipShot img{width:66px;height:82px}
  #hm-contact .ink.ink .clipShot figcaption,#hm-contact .ink.ink .clipShot .mark{display:none}
  #hm-contact .ink.ink .clipShot .clip{left:12px;top:-18px;width:12px;height:36px}
  #hm-contact .ink.ink .clipShot figcaption{font-size:22px;left:-58px;bottom:6px}
  #hm-contact .ink.ink .clipShot .mark{left:-60px;bottom:-4px;width:60px}
  #hm-contact .ink.ink.ink.ink #ongoing .oWhat[style]{grid-template-rows:repeat(3,auto);grid-auto-columns:78%}
  #hm-contact .ink.ink .oBadge svg{display:none!important}
  #hm-contact .ink.ink .oBadge{width:auto!important;height:auto!important;right:-6px!important;bottom:22px!important}
  #hm-contact .ink.ink .oBadge .oCore[style]{position:static!important;display:flex!important;flex-direction:row!important;gap:6px;align-items:baseline;width:auto!important;height:auto!important;padding:8px 12px!important;border-radius:0!important;inset:auto!important;transform:none!important}
  #hm-contact .ink.ink.ink.ink .oBadge .oCore span{font-size:16px!important;color:#fff!important;font-family:'Oldtown',monospace!important;font-style:normal!important;text-transform:uppercase;letter-spacing:0.1em}
  #hm-contact .ink.ink .oBadge .oCore span + span{margin-left:6px}
}
@media (max-width:640px){
  #hm-contact .ink.ink.ink.ink.ink #start .hLede[style]{font-size:40px!important;margin-bottom:52px!important}
  #hm-contact .ink.ink.ink.ink.ink #start .hLede .tw{font-size:30px!important}
  #hm-contact .ink.ink.ink.ink #start .sIntro > div:last-child{padding:30px 20px 24px;margin:0 -6px}
  #hm-contact .ink.ink.ink #ongoing .wNav{top:-40px}
  #hm-contact .ink.ink.ink.ink #ongoing .oText[style]{padding:30px 20px 24px!important}
  #hm-contact .ink.ink.ink.ink section.oPromo:not(#reel)[style]{width:auto}
  #hm-contact .ink.ink #start .dlg2{margin-left:0}
  #hm-contact .ink.ink.ink section#ongoing:not(#reel)[style]{padding:30px 18px 26px!important}
  #hm-contact .ink.ink.ink #ongoing .oHero[style]{grid-template-columns:minmax(0,1fr)!important}
  #hm-contact .ink.ink.ink #ongoing .oHero div[style*="aspect-ratio: 4 / 5"]{max-width:220px}
  #hm-contact .ink.ink.ink section.oPromo:not(#reel)[style]{padding:26px 20px!important}
  #hm-contact .ink.ink.ink section.oPromo span[style*="54px"]{font-size:42px!important}
}

#hm-contact .ink.ink.ink.ink.ink section#start[style]{padding-top:122px!important}
@media (max-width:640px){#hm-contact .ink.ink.ink.ink.ink section#start[style]{padding-top:88px!important}}

/* ===== Contact ===== */
#hm-contact .ink.ink.ink.ink #hello .hLede[style]{font-size:60px!important;line-height:1.05!important;margin-bottom:62px!important}
#hm-contact .ink.ink.ink.ink.ink #hello .hLede .tw{display:block!important;margin-bottom:4px;font-family:'Oldtown',monospace!important;font-size:52px!important;line-height:1.1!important;letter-spacing:0.04em!important;text-transform:uppercase!important;color:#1C1B1B!important;-webkit-text-stroke:1px currentColor}
#hm-contact .ink.ink.ink.ink.ink section#hello[style]{padding-top:128px!important}
#hm-contact .ink.ink .cHi{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:40px;align-items:center}
#hm-contact .ink.ink.ink.ink.ink.ink #hello .hLede[style]{margin-bottom:56px!important;white-space:nowrap!important}
#hm-contact .ink.ink .cWhere{margin:0;font-family:'Oldtown',monospace;font-size:19px;letter-spacing:0.02em;color:#1C1B1B;-webkit-text-stroke:0.6px currentColor}
#hm-contact .ink.ink .cFort{margin:10px 0 0;max-width:520px;font-family:'Oldtown',monospace;font-size:16px;line-height:1.6;color:#1C1B1B}
#hm-contact .ink.ink .cWave{display:inline-block;vertical-align:middle;margin-left:8px;color:#B8232F}
#hm-contact .ink.ink .cMain{display:flex;flex-direction:column;align-items:flex-start;gap:10px;margin:30px 0 0}
#hm-contact .ink.ink .cMap{position:relative;z-index:45;margin:0;align-self:end;padding:22px 20px 14px;background:#FBFAF6;transform:rotate(1.6deg);box-shadow:0 18px 34px -20px rgba(0,0,0,0.55),0 0 0 1px rgba(28,27,27,0.08)}
#hm-contact .ink.ink .cMap::before{content:'';position:absolute;left:50%;top:-14px;width:110px;height:28px;margin-left:-55px;background:rgba(226,221,203,0.9);transform:rotate(-4deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-contact .ink.ink .cMap svg{display:block;width:100%;height:auto;overflow:visible}
#hm-contact .ink.ink .cMap .mState{fill:rgba(184,35,47,0.82);stroke:#8E1A24;stroke-width:1.2;stroke-linejoin:round}
#hm-contact .ink.ink .cMap .mOther{fill:#F1EEE6;stroke:rgba(28,27,27,0.45);stroke-width:0.8;stroke-linejoin:round}
#hm-contact .ink.ink .cMap .mLake{fill:url(#lkw);stroke:#22365E;stroke-width:0.8;stroke-linejoin:round;opacity:0.9}
#hm-contact .ink.ink .cMap .mAb{font-family:'Oldtown',monospace;font-size:8px;letter-spacing:0.18em;fill:#1C1B1B;opacity:0.45}
#hm-contact .ink.ink .cMap .mCan{font-family:'Oldtown',monospace;font-size:7px;letter-spacing:0.4em;fill:#1C1B1B;opacity:0.35}
#hm-contact .ink.ink .cMap .mMN{font-family:'AnaTwo',cursive;font-size:14px;fill:#FFFFFF}
#hm-contact .ink.ink .cMap .mLk{font-family:'AnaTwo',cursive;font-size:12px;fill:#22365E}
#hm-contact .ink.ink .cMap figcaption{margin-top:6px;text-align:right;font-family:'Oldtown',monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#1C1B1B;opacity:0.6}
#hm-contact .ink.ink.ink.ink.ink.ink.ink .cBig.fbtn{min-height:52px!important;padding:0 18px!important;font-size:14px!important;letter-spacing:0.16em!important;border-bottom-width:3px!important}
#hm-contact .ink.ink .cNote{margin:0;font-family:'AnaTwo',cursive;font-size:26px;color:var(--blue);transform:rotate(-1.5deg);transform-origin:left}
#hm-contact .ink.ink .cWho{list-style:none;margin:26px 0 0;padding:0;border-top:2px solid #B8232F}
#hm-contact .ink.ink .cWho li{display:grid;grid-template-columns:220px minmax(0,1fr) auto;gap:6px 24px;align-items:center;padding:14px 0;border-bottom:1px solid rgba(28,27,27,0.14)}
#hm-contact .ink.ink .cK{font-family:'Oldtown',monospace;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;color:#B8232F;-webkit-text-stroke:0.4px currentColor}
#hm-contact .ink.ink .cV{font-family:'Oldtown',monospace;font-size:15px;line-height:1.55;color:#1C1B1B}
#hm-contact .ink.ink .cReps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:30px;margin-top:26px}
#hm-contact .ink.ink .cRep{display:flex;flex-direction:column;align-items:flex-start;gap:6px}
#hm-contact .ink.ink .cAg{font-family:'Oldtown',monospace;font-size:22px;color:#1C1B1B;-webkit-text-stroke:0.7px currentColor;padding-bottom:4px;background:linear-gradient(#B8232F,#B8232F) no-repeat left bottom/46px 2px}
#hm-contact .ink.ink .cNm{font-family:'Oldtown',monospace;font-size:16px;color:#1C1B1B;-webkit-text-stroke:0.35px currentColor;margin-bottom:6px}
#hm-contact .ink.ink .cCard{position:relative;margin-top:26px;padding:36px 40px 30px;background:#141215;color:#EEEAE2;transform:rotate(-0.5deg);box-shadow:0 22px 40px -22px rgba(0,0,0,0.7)}
#hm-contact .ink.ink .cCard::before{content:'';position:absolute;left:70px;top:-15px;width:120px;height:30px;background:rgba(226,221,203,0.9);transform:rotate(-3deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-contact .ink.ink .cCardLead{margin:0;font-family:'Oldtown',monospace;font-size:15.5px;line-height:1.6;color:#EEEAE2}
#hm-contact .ink.ink .cList{margin:14px 0 18px;padding:0;list-style:none;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 30px}
#hm-contact .ink.ink .cList li{position:relative;padding-left:22px;font-family:'Oldtown',monospace;font-size:15px;line-height:1.5;color:#EEEAE2}
#hm-contact .ink.ink .cList li::before{content:'';position:absolute;left:0;top:6px;width:12px;height:12px;background:#E8707A;-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 12.5 9.5 18 20 6.5'/%3E%3C/svg%3E") center/contain no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 12.5 9.5 18 20 6.5'/%3E%3C/svg%3E") center/contain no-repeat}
#hm-contact .ink.ink #before .sub2{margin:8px 0 0;font-family:'AnaTwo',cursive;font-size:32px;color:#B8232F;transform:rotate(-1.5deg);transform-origin:left}
@media (max-width:640px){
  #hm-contact .ink.ink.ink.ink #hello .hLede[style]{font-size:40px!important;margin-bottom:52px!important}
  #hm-contact .ink.ink.ink.ink.ink #hello .hLede .tw{font-size:30px!important}
  #hm-contact .ink.ink.ink.ink.ink section#hello[style]{padding-top:92px!important}
  #hm-contact .ink.ink .cHi{grid-template-columns:minmax(0,1fr);gap:34px}
  #hm-contact .ink.ink .cFort{font-size:15px}
  #hm-contact .ink.ink.ink.ink.ink.ink #hello .hLede[style]{white-space:normal!important}
  #hm-contact .ink.ink .cMap{max-width:340px;margin:6px auto 0}
  #hm-contact .ink.ink .cWho li{grid-template-columns:minmax(0,1fr);gap:4px}
  #hm-contact .ink.ink .cWho li .fbtn{justify-self:start}
  #hm-contact .ink.ink .cReps{grid-template-columns:minmax(0,1fr);gap:22px}
  #hm-contact .ink.ink .cCard{padding:30px 20px 24px;margin-left:-6px;margin-right:-6px}
  #hm-contact .ink.ink .cList{grid-template-columns:minmax(0,1fr)}
}
#hm-contact .cMap .mWater{fill:#D9E1E6}#hm-contact .cMap .mCanL{fill:#ECE9E1;stroke:rgba(28,27,27,0.28);stroke-width:0.5;stroke-linejoin:round}#hm-contact .cMap .mOther{fill:#F6F3EC;stroke:rgba(28,27,27,0.38);stroke-width:0.6;stroke-linejoin:round}#hm-contact .cMap .mState{fill:#B8232F;stroke:#7E1720;stroke-width:0.9;stroke-linejoin:round}#hm-contact .cMap .mGrat{fill:none;stroke:#22365E;stroke-width:0.3;stroke-dasharray:1.5 2;opacity:0.35}#hm-contact .cMap .mFrame{fill:none;stroke:#1C1B1B;stroke-width:1}#hm-contact .cMap .mAb{font-family:'Oldtown',monospace;font-size:7px;letter-spacing:0.2em;fill:#1C1B1B;opacity:0.5}#hm-contact .cMap .mCan{font-family:'Oldtown',monospace;font-size:6.5px;letter-spacing:0.5em;fill:#1C1B1B;opacity:0.4}#hm-contact .cMap .mMN{font-family:'AnaTwo',cursive;font-size:15px;fill:#FFFFFF}#hm-contact .cMap .mLk{font-family:'AnaTwo',cursive;font-size:12.5px;fill:#22365E}#hm-contact .cMap .mNorth path{fill:#1C1B1B}#hm-contact .cMap .mNorth text{font-family:'Oldtown',monospace;font-size:6px;fill:#1C1B1B}#hm-contact .cMap figcaption{display:flex;justify-content:space-between;gap:10px}#hm-contact .cMap .mCoord{opacity:0.7}#hm-contact .cMap{max-width:360px!important}

/* ==== Legible headings (Nov 27): section titles in Arlysse instead of script ==== */
#hm-contact .ink.ink.ink.ink h2,#hm-contact .ink.ink.ink.ink h2[style]{font-family:'Arlysse',sans-serif!important;text-transform:uppercase!important;letter-spacing:0.01em!important;font-size:66px!important;line-height:1!important;-webkit-text-stroke:0!important}
#hm-contact .ink.ink.ink.ink h3,#hm-contact .ink.ink.ink.ink h3[style],#hm-contact .ink.ink.ink.ink .bioH,#hm-contact .ink.ink.ink.ink .bioH[style]{font-family:'Arlysse',sans-serif!important;text-transform:uppercase!important;letter-spacing:0.02em!important;font-size:30px!important;line-height:1.05!important}
#hm-contact .ink.ink.ink.ink .hLede,#hm-contact .ink.ink.ink.ink .hLede[style]{font-family:'Arlysse',sans-serif!important;text-transform:uppercase!important;letter-spacing:0.01em!important;font-size:42px!important;line-height:1.05!important;-webkit-text-stroke:0!important}
#hm-contact .ink.ink.ink.ink .sgHead{font-family:'Arlysse',sans-serif!important;text-transform:uppercase!important;letter-spacing:0.01em!important}
@media (max-width:820px){#hm-contact .ink.ink.ink.ink h2,#hm-contact .ink.ink.ink.ink h2[style]{font-size:46px!important}#hm-contact .ink.ink.ink.ink .hLede,#hm-contact .ink.ink.ink.ink .hLede[style]{font-size:30px!important}#hm-contact .ink.ink.ink.ink h3,#hm-contact .ink.ink.ink.ink h3[style]{font-size:24px!important}}
/* blueprint margin notes, like I'm writing in the margins of my script */
#hm-contact .ink.ink .bpNote{position:absolute;z-index:4;max-width:104px;font-family:'AnaTwo',cursive;font-size:25px;line-height:1.02;color:var(--blue);transform:rotate(-7deg);transform-origin:left top;pointer-events:none;white-space:normal}
@media (max-width:1100px){#hm-contact .ink.ink .bpNote{display:none}}


/* ---- CARRD FIXES (added for the embed) ----
   In the canvas this page scrolled inside a box. On the real site it scrolls with the page. */
#hm-contact .inkScroll{height:auto!important;overflow:visible!important}
#hm-contact{all:initial;display:block;position:relative;width:100%;min-height:100vh;background:#121013;-webkit-font-smoothing:antialiased;text-align:left}
#hm-contact *{box-sizing:border-box}`;


/* ========================================================================
   3. THE PAGE  (every section in order, each with a note above it)
   Anything in {{double braces}} gets filled in from MY CONTENT below.
   ======================================================================== */
const TPL = `<div class="inkScroll" ref="{{setInk}}"><svg class="inkLine" aria-hidden="true"><path class="wf" d=""></path><path class="live" d=""></path></svg><div class="inkDot" aria-hidden="true"></div>
<div class="paper thm dark ink" style="width: 100%; color: var(--ink); font-family: 'Fraunces', Georgia, serif; font-weight: 300; overflow-x: clip">


<!-- ========================================================================
     TOP BAR  (logo, main menu, reel button)
     The logo goes home. The menu links come from PAGES up in SETTINGS,
     so if a page URL changes in Carrd, change it there, not here.
     Two logos on purpose: one for light mode, one for dark. Leave both.
     ======================================================================== -->
<header class="mHdr" style="display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 16px 48px; border-bottom: 1px solid var(--t4)">
<a href="@@P:home@@" aria-label="Melissa Medína, home" style="display: inline-flex; align-items: center; gap: 14px; text-decoration: none; justify-self: start"><img class="onL" src="@@A:images/logo-black.png@@" alt="" width="46" height="46" style="width: 46px; height: 46px; display: block"><img class="onD" src="@@A:images/logo-white.png@@" alt="" width="46" height="46" style="width: 46px; height: 46px; display: block"></a>
<nav class="mNav" aria-label="Main" style="display: flex; gap: 44px; font-size: 12px; letter-spacing: 0.32em; text-transform: uppercase">
<a class="nv" href="@@P:hire@@"><span class="a">Hire me</span><span class="b" aria-hidden="true">Hire me</span><svg class="circ" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2.4,13.8 L4.5,11.7 L6.9,9.7 L10.3,7.9 L13.4,6.0 L18.2,4.7 L22.4,3.2 L27.1,1.9 L32.4,1.0 L37.7,0.2 L43.4,0.1 L49.1,-0.1 L54.7,-0.0 L60.3,0.4 L65.7,1.0 L71.3,1.6 L76.2,2.7 L81.1,3.9 L85.9,5.2 L89.9,6.9 L93.1,8.8 L95.4,10.9 L97.8,13.0 L100.3,15.1 L100.4,17.5 L101.7,19.7 L100.7,22.0 L100.1,24.3 L98.8,26.6 L97.2,28.8 L94.2,30.8 L91.1,32.8 L86.7,34.4 L82.5,36.0 L78.2,37.6 L72.9,38.6 L67.7,39.6 L61.8,39.9 L56.2,40.3 L50.4,40.7 L44.6,40.6 L38.9,40.2 L33.0,39.9 L27.4,39.1 L22.7,37.6 L18.0,36.2 L13.5,34.7 L9.6,33.0 L5.5,31.3 L3.0,29.1 L-0.2,27.1 L-0.5,24.7 L-2.3,22.4 L-2.1,20.1 L-2.9,17.7 L-1.3,15.4 L0.5,13.1 L2.2,10.8 L4.7,8.6 L9.2,7.0 L12.8,5.1" vector-effect="non-scaling-stroke"></path></svg></a>
<a class="nv" href="@@P:fans@@"><span class="a">Fans &amp; press</span><span class="b" aria-hidden="true">Fans &amp; press</span><svg class="circ" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M3.0,13.9 L4.5,11.7 L7.0,9.7 L9.6,7.7 L13.4,6.0 L17.6,4.4 L22.2,3.1 L27.5,2.2 L32.2,0.9 L37.9,0.5 L43.4,-0.1 L49.1,0.0 L54.7,-0.0 L60.5,-0.0 L65.7,1.0 L71.0,1.8 L76.2,2.7 L80.9,4.0 L85.4,5.4 L89.3,7.1 L92.4,9.0 L95.0,11.0 L97.8,13.0 L99.4,15.2 L100.9,17.4 L101.3,19.7 L101.4,22.1 L100.1,24.3 L98.6,26.5 L96.8,28.8 L94.4,30.9 L90.8,32.7 L86.4,34.2 L82.4,35.9 L78.3,37.6 L73.2,38.8 L67.4,39.4 L61.9,40.0 L56.1,40.3 L50.4,40.6 L44.6,40.4 L38.6,40.6 L32.9,40.0 L27.8,38.8 L22.9,37.5 L17.3,36.6 L13.1,34.9 L8.8,33.3 L6.0,31.2 L2.4,29.3 L0.1,27.1 L-1.4,24.8 L-2.5,22.4 L-3.0,20.1 L-2.3,17.7 L-2.1,15.3 L0.7,13.1 L2.5,10.9 L5.4,8.8 L8.6,6.8 L12.2,4.9" vector-effect="non-scaling-stroke"></path></svg></a>
<a class="nv" href="@@P:coaching@@"><span class="a">Coaching</span><span class="b" aria-hidden="true">Coaching</span><svg class="circ" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2.5,13.8 L4.0,11.6 L7.5,9.8 L10.3,7.9 L14.3,6.3 L17.7,4.5 L22.6,3.3 L27.4,2.1 L32.3,0.9 L38.0,0.7 L43.5,0.2 L49.1,-0.1 L54.8,-0.3 L60.4,0.2 L66.0,0.7 L71.5,1.3 L76.1,2.8 L81.0,3.9 L85.1,5.5 L89.7,6.9 L92.2,9.0 L96.0,10.8 L97.8,13.0 L99.8,15.2 L100.3,17.5 L101.9,19.7 L100.8,22.0 L100.1,24.3 L99.3,26.6 L96.7,28.7 L93.7,30.7 L90.3,32.6 L87.3,34.6 L82.8,36.1 L78.0,37.5 L72.9,38.6 L67.8,39.7 L61.8,40.0 L56.2,40.5 L50.4,41.0 L44.5,40.8 L38.7,40.4 L33.0,39.8 L27.7,38.8 L22.4,37.8 L17.7,36.4 L12.7,35.1 L9.5,33.0 L6.1,31.2 L3.1,29.1 L1.0,26.9 L-1.4,24.8 L-2.4,22.4 L-2.0,20.1 L-2.0,17.7 L-2.0,15.3 L0.5,13.1 L2.1,10.8 L5.3,8.8 L9.0,6.9 L12.0,4.8" vector-effect="non-scaling-stroke"></path></svg></a><a class="nv" href="@@P:contact@@" aria-current="page" style="opacity: 1"><span class="a">Contact</span><span class="b" aria-hidden="true">Contact</span><svg class="circ" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2.1,13.8 L3.9,11.6 L7.6,9.9 L10.7,8.0 L13.2,5.9 L18.0,4.6 L22.6,3.3 L27.3,2.0 L32.4,1.1 L37.8,0.3 L43.4,-0.1 L49.1,-0.2 L54.8,-0.3 L60.3,0.3 L65.9,0.8 L71.5,1.4 L76.5,2.5 L81.2,3.8 L85.0,5.5 L89.9,6.9 L92.2,9.0 L96.1,10.8 L97.5,13.0 L99.7,15.2 L101.1,17.4 L101.3,19.7 L100.3,22.0 L99.8,24.3 L98.6,26.5 L96.3,28.7 L93.4,30.6 L90.2,32.5 L87.1,34.5 L82.7,36.0 L77.9,37.4 L72.6,38.3 L67.7,39.6 L62.1,40.5 L56.3,40.7 L50.4,40.8 L44.5,40.8 L38.7,40.4 L33.3,39.5 L27.6,38.9 L22.4,37.8 L17.9,36.3 L13.5,34.8 L9.4,33.1 L5.9,31.2 L3.1,29.1 L-0.1,27.1 L-1.8,24.8 L-2.2,22.4 L-2.2,20.1 L-3.0,17.7 L-2.0,15.3 L0.8,13.1 L1.9,10.8 L5.8,8.9 L8.2,6.7 L12.4,5.0" vector-effect="non-scaling-stroke"></path></svg></a>
</nav>
<button type="button" onClick="{{openReel}}" style="justify-self: end; display: inline-flex; align-items: center; gap: 10px; min-height: 40px; padding: 0; border: 0; background: none; color: var(--t3); cursor: pointer; font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase"><span style="width: 26px; height: 26px; border-radius: 50%; border: 1px solid var(--t5); display: flex; align-items: center; justify-content: center"><svg width="8" height="8" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 3 L17 10 L6 17 Z" fill="currentColor"></path></svg></span>Reel</button>
</header>


<!-- ========================================================================
     SHORTCUT MENU  (the little sticky bar that jumps around this page)
     Each link points at a section id, like href="https://hearmelissa.com/#roles" goes to id="roles".
     Add a section? Add a link here with its id. Delete one? Delete its link too,
     or it'll jump to nowhere.
     ======================================================================== -->
<nav class="jump hSub" ref="{{setJump}}" aria-label="On this page" style="position: sticky; top: 0; z-index: 30; display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 6px 6px; padding: 12px 48px; background: #4E1F45; box-shadow: 0 8px 24px -14px rgba(0,0,0,0.5); font-family: 'Jost', sans-serif; font-weight: 500; font-size: 11.5px; letter-spacing: 0.24em; text-transform: uppercase; color: #F3E6EA"><button type="button" class="jBtn" aria-label="Menu: sections on this page"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.2h15.5 M4 12.1h11.5 M4 17h14"></path></svg><span>Menu</span></button><span class="jPage" aria-hidden="true"><i></i>Contact</span><a href="https://hearmelissa.com/#hello" style="text-decoration: none">Say hi</a><a href="https://hearmelissa.com/#who" style="text-decoration: none">Who to contact</a><a href="https://hearmelissa.com/#reps" style="text-decoration: none">Representation</a><a href="https://hearmelissa.com/#before" style="text-decoration: none">Before you write</a></nav>


<!-- ========================================================================
     SAY HI  (#hello, with the map)
     The map is a real map drawn in code. Minnesota is the red one, Lake Superior
     is labeled. Don't edit the giant path numbers, they ARE the map.
     ======================================================================== -->
<section id="hello" style="padding: 56px 48px 50px">
<span class="slug">FADE IN: &nbsp; INT. MELISSA'S BOOTH. DAY.</span>
<div class="cHi">
<div class="cHiL">
<p class="hLede" style="margin: 0; font-size: 46px; line-height: 1.15"><span class="tw">Let's make</span>something together.</p>
<p class="cWhere">Global voice actor, based in the Midwest.</p>
<p class="cFort">Working with studios and creators all over the world from my frozen fortress on Lake Superior<svg class="cWave" width="22" height="14" viewBox="0 0 24 16" aria-hidden="true"><path d="M2 5c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 -0.5 M2 11c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6-0.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></p>
<div class="cMain">
<button type="button" class="fbtn cBig" onClick="{{copyEmail}}" aria-label="Copy my email address"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.6"></rect><path d="M16 8V4H4v12h4" fill="none" stroke="currentColor" stroke-width="1.6"></path></svg><span>{{copyLabel}}</span></button>
<p class="cNote">My email isn't listed anywhere on the site. Tap to copy it.</p>
</div>
</div>
<figure class="cMap" aria-label="Map of the Upper Midwest with Minnesota highlighted and Lake Superior marked"><svg viewBox="0 0 300 200" aria-hidden="true"><defs><clipPath id="mClip"><rect width="300" height="200"></rect></clipPath><pattern id="mWave" width="10" height="6" patternUnits="userSpaceOnUse"><path d="M0 3.5 q2.5 -2 5 0 t5 0" fill="none" stroke="#5B7590" stroke-width="0.5" opacity="0.35"></path></pattern></defs><g clip-path="url(#mClip)"><rect class="mWater" width="300" height="200"></rect><rect width="300" height="200" fill="url(#mWave)"></rect><path class="mCanL" d="M304,101.3L303.7,100.5L300.6,99.0L298.3,97.9L294.5,96.2L291.4,94.8L288.6,93.5L289.8,89.9L289.5,89.3L288.8,88.7L287.5,87.8L286.8,87.8L285.6,88.2L283.7,89.1L282.8,89.0L281.9,87.9L281.0,86.5L280.5,85.3L280.3,83.8L279.7,82.4L279.9,81.6L279.9,81.2L279.8,80.8L279.4,80.5L278.8,80.5L277.0,81.3L276.2,81.5L275.7,81.9L275.0,82.6L274.2,82.8L272.6,81.3L270.9,79.7L270.0,77.3L269.1,74.8L266.4,73.6L263.7,72.3L261.0,71.1L258.3,69.8L255.6,68.5L252.9,67.3L250.3,66.0L247.6,64.7L246.7,64.2L244.3,63.1L240.9,61.5L237.0,59.7L233.1,57.8L229.7,56.1L227.4,55.0L226.5,54.5L224.2,53.4L221.3,52.1L218.3,53.0L214.8,55.4L212.8,56.7L211.2,57.7L210.2,58.3L207.8,58.9L206.6,58.9L203.7,58.7L202.1,59.2L200.9,58.9L200.2,57.7L199.5,57.0L196.6,57.5L192.9,57.4L191.1,57.6L190.4,57.1L189.8,55.8L188.8,55.6L187.2,56.0L185.0,57.8L182.9,58.8L181.2,58.8L179.5,58.0L176.8,56.3L174.8,54.3L172.6,53.7L171.0,53.9L170.4,54.9L169.6,54.9L168.9,53.2L168.4,51.9L167.3,51.3L165.4,50.0L164.1,49.4L162.0,48.6L161.3,48.4L160.0,48.3L158.7,48.3L157.1,48.5L156.1,49.6L154.8,50.1L153.0,50.3L151.7,49.8L151.1,48.7L148.5,47.7L144.0,46.8L141.3,46.1L140.6,45.5L140.3,44.8L140.2,43.8L140.2,43.7L139.0,41.0L138.6,38.8L138.4,36.1L138.5,35.2L138.2,34.9L137.4,34.3L134.7,33.9L134.6,37.1L134.5,41.2L131.5,41.1L126.1,41.0L120.7,40.9L115.3,40.7L110.0,40.5L104.5,40.3L99.2,40.1L93.8,39.8L88.4,39.5L83.0,39.1L77.6,38.8L72.2,38.4L66.8,38.0L61.5,37.5L56.1,37.0L50.7,36.5L45.3,36.0L40.0,35.4L34.6,34.8L29.2,34.2L23.9,33.5L18.5,32.9L13.2,32.2L7.8,31.4L2.5,30.7L-2.8,29.9L-4,29.7L-4,-4L304,-4Z"></path><path class="mOther" d="M244.5,204L244.3,201.9L242.7,182.1L242.5,177.9L242.5,177.9L243.3,178.6L243.9,178.2L244.3,178.4L244.0,179.1L245.4,179.3L246.9,179.2L248.3,178.7L250.9,177.2L252.4,176.1L257.1,175.7L267.2,174.7L276.8,173.6L281.3,173.1L281.5,174.4L282.0,178.3L284.6,201.1L284.8,204L244.5,204Z"></path><path class="mState" d="M108.4,40.3L112.1,40.5L124.2,40.8L134.6,41.1L134.7,33.6L135.9,34.3L137.2,33.9L138.5,34.8L138.9,35.4L139.5,38.8L139.8,39.2L140.6,43.4L140.3,44.5L140.4,45.4L141.1,46.1L142.4,46.9L143.5,47.1L143.9,46.8L145.9,47.0L146.4,47.9L149.2,48.0L151.4,48.4L151.7,49.5L151.6,50.3L151.9,50.5L153.8,50.4L154.0,50.2L155.0,50.2L156.1,49.9L156.0,49.1L157.5,48.3L159.3,48.0L159.7,48.4L162.2,48.3L165.5,49.9L166.7,49.8L166.7,50.6L165.9,50.8L165.7,51.4L166.4,51.9L168.3,51.6L169.0,52.5L168.7,53.1L169.0,53.9L170.2,56.0L171.3,55.5L170.9,54.1L171.5,53.4L172.2,53.5L174.1,53.2L174.9,53.9L174.8,55.0L175.6,55.7L176.3,55.5L176.7,56.1L178.6,56.2L178.8,57.3L178.7,57.8L179.6,58.1L180.7,57.9L180.6,59.1L181.6,58.6L182.2,59.0L183.1,58.5L184.7,58.2L186.7,56.3L187.5,56.0L188.1,55.5L189.2,54.9L189.9,55.1L189.9,56.2L190.7,56.5L190.4,56.9L190.9,57.7L191.7,57.7L193.3,57.2L193.6,57.6L194.7,57.3L195.9,57.6L196.8,57.3L199.0,57.1L200.4,57.5L200.8,58.6L202.4,59.4L203.1,58.7L204.0,58.5L204.6,58.8L205.7,58.7L206.2,59.0L207.4,58.5L206.2,59.5L205.7,59.2L205.5,59.8L204.8,60.1L203.6,61.1L201.9,61.8L201.3,62.4L198.9,63.2L196.7,64.2L196.0,64.4L194.1,65.2L193.9,65.4L191.6,66.8L189.9,68.2L186.7,71.3L185.9,72.5L183.5,75.5L182.3,76.8L181.1,77.5L179.9,79.0L179.4,79.2L178.1,80.6L177.6,80.8L174.8,83.1L174.4,83.5L174.8,84.3L175.5,85.1L174.5,84.2L173.8,84.4L173.7,84.9L172.9,85.2L173.3,85.5L172.8,86.2L171.8,86.0L172.0,97.3L171.6,97.5L171.3,98.5L170.1,98.4L169.7,99.3L169.0,99.1L168.6,99.7L167.4,100.1L166.5,100.9L165.6,103.4L164.5,104.2L164.2,106.1L164.2,107.0L165.3,107.3L165.8,107.2L166.4,107.7L166.4,108.2L167.5,109.6L167.5,110.4L166.8,111.2L166.8,111.7L166.0,112.5L166.1,114.0L166.0,114.5L166.3,116.0L165.5,117.0L166.1,117.6L166.0,118.6L166.3,119.3L165.9,120.0L166.1,121.3L165.5,122.6L165.8,123.2L166.6,123.6L168.1,125.0L168.1,125.4L168.8,125.7L169.2,126.4L171.7,126.5L172.3,126.8L172.8,128.0L173.5,128.7L176.0,129.4L177.1,130.1L177.8,130.7L177.9,131.6L178.3,131.8L178.5,133.2L179.4,133.9L180.8,134.6L180.9,135.0L182.8,136.5L184.7,136.9L185.5,137.8L187.1,140.0L187.5,141.2L187.2,143.1L187.4,144.3L187.9,144.9L187.7,145.6L188.1,146.5L177.9,146.8L166.7,147.0L160.8,147.1L149.7,147.2L140.6,147.1L124.9,146.9L114.9,146.6L115.5,126.5L115.6,124.8L115.8,119.8L116.0,111.9L115.5,110.8L113.8,109.8L113.0,109.7L112.3,108.8L111.9,107.6L110.7,105.9L111.0,105.1L112.2,104.2L113.3,103.5L113.9,102.5L114.6,101.8L114.9,99.7L114.7,97.9L115.0,97.3L114.6,94.2L114.6,92.0L114.0,91.6L113.1,89.9L112.9,89.1L112.8,87.1L112.3,86.2L112.2,85.5L112.5,84.4L112.3,82.5L112.5,82.3L112.9,80.3L112.6,80.5L112.1,79.7L112.3,76.8L112.1,75.3L112.1,73.4L112.2,72.6L112.0,70.9L112.1,67.3L111.9,67.2L111.6,65.7L111.2,64.2L110.8,63.9L110.4,62.2L110.3,61.3L109.8,60.7L109.6,58.7L108.9,57.0L108.9,55.1L109.2,54.3L108.9,52.7L109.1,51.9L109.1,50.1L108.8,49.1L109.2,47.8L109.6,47.5L109.8,46.4L109.2,45.1L108.9,43.0L108.6,42.6L108.2,41.0Z"></path><path class="mOther" d="M22.3,33.2L30.8,34.3L45.4,35.9L55.0,36.8L59.1,37.2L67.9,37.9L75.1,38.5L81.2,38.9L87.6,39.3L99.2,39.9L108.4,40.3L108.2,41.0L108.6,42.6L108.9,43.0L109.2,45.1L109.8,46.4L109.6,47.5L109.2,47.8L108.8,49.1L109.1,50.1L109.1,51.9L108.9,52.7L109.2,54.3L108.9,55.1L108.9,57.0L109.6,58.7L109.8,60.7L110.3,61.3L110.4,62.2L110.8,63.9L111.2,64.2L111.6,65.7L111.9,67.2L112.1,67.3L112.0,70.9L112.2,72.6L112.1,73.4L112.1,75.3L112.3,76.8L112.1,79.7L112.6,80.5L112.9,80.3L112.5,82.3L112.3,82.5L112.5,84.4L112.2,85.5L112.3,86.2L112.8,87.1L112.9,89.1L113.1,89.9L114.0,91.6L114.6,92.0L114.6,94.2L115.0,97.3L114.7,97.9L114.9,99.7L104.8,99.3L95.9,98.9L90.1,98.6L78.1,97.8L68.8,97.1L60.3,96.4L48.2,95.3L42.3,94.7L28.3,93.2L20.1,92.2L15.0,91.6L20.9,45.2L20.9,44.9Z"></path><path class="mOther" d="M12.6,109.7L12.8,109.7L14.6,95.4L15.0,91.6L20.1,92.2L28.3,93.2L42.3,94.7L48.2,95.3L60.3,96.4L68.8,97.1L78.1,97.8L90.1,98.6L95.9,98.9L104.8,99.3L114.9,99.7L114.6,101.8L113.9,102.5L113.3,103.5L112.2,104.2L111.0,105.1L110.7,105.9L111.9,107.6L112.3,108.8L113.0,109.7L113.8,109.8L115.5,110.8L116.0,111.9L115.8,119.8L115.6,124.8L115.5,126.5L114.9,146.6L112.9,146.5L113.2,146.9L112.8,147.5L113.9,148.6L113.8,150.4L113.1,150.5L113.4,151.4L113.3,151.9L114.5,152.0L114.5,153.3L115.0,153.9L114.6,155.0L113.9,155.3L114.1,156.2L113.7,156.6L114.0,157.0L113.3,157.7L113.3,159.1L112.7,159.3L112.5,160.2L112.0,160.6L112.0,161.8L112.7,162.3L113.6,163.3L114.0,164.8L113.8,165.5L114.4,166.1L113.6,166.2L113.3,165.7L112.1,165.7L111.8,164.8L110.7,163.7L111.1,162.8L110.6,162.5L109.5,162.5L109.5,161.8L108.1,161.2L107.5,161.4L107.1,160.6L104.9,160.3L104.7,159.8L103.8,159.5L103.7,158.8L102.5,158.4L101.7,158.6L101.0,158.3L100.6,158.7L99.7,158.4L98.9,158.6L98.1,158.4L97.2,158.6L95.9,158.4L94.9,158.0L94.5,158.2L94.0,159.4L93.3,159.8L92.4,159.9L90.8,158.7L89.1,157.6L86.2,156.0L85.8,155.0L80.2,154.7L70.8,154.1L63.0,153.5L52.2,152.7L41.9,151.8L38.7,151.4L29.8,150.5L22.6,149.7L7.9,147.9L8.6,142.2L8.5,142.1L12.3,112.1Z"></path><path class="mOther" d="M187.7,204L187.3,203.6L188.0,202.4L189.6,201.7L190.5,201.7L191.4,200.9L191.5,199.9L191.7,199.1L191.8,198.0L192.3,197.5L193.0,196.4L193.5,196.1L193.8,194.3L193.7,192.7L192.9,191.4L192.2,191.4L191.2,190.0L191.7,188.7L191.7,187.5L192.0,186.6L193.0,186.2L193.7,186.4L194.8,185.7L196.5,185.7L197.7,185.4L198.5,184.4L199.0,184.2L200.3,184.1L201.2,183.2L202.0,182.8L201.9,181.7L202.4,180.7L202.3,179.8L202.8,179.3L204.2,178.4L204.1,177.8L204.4,176.5L204.2,175.6L204.6,174.6L204.2,174.0L204.1,172.5L203.4,171.8L201.0,170.7L200.2,169.6L200.3,168.6L199.4,167.6L198.3,167.0L198.1,166.6L197.0,166.0L197.0,165.3L199.2,165.2L210.8,164.7L213.4,164.6L223.3,164.2L225.4,164.0L233.1,163.4L237.3,163.2L237.4,165.2L237.1,166.9L237.7,168.6L239.0,170.5L239.6,171.0L239.9,171.9L240.7,174.2L241.0,175.4L241.9,176.9L242.3,177.2L242.5,177.9L242.7,182.1L244.3,201.9L244.5,204L187.7,204Z"></path><path class="mOther" d="M184.2,204L184.2,203.7L183.3,203.5L183.2,203.0L182.5,202.4L177.2,202.7L169.2,203.1L158.8,203.4L155.6,203.5L148.7,203.6L140.5,203.6L132.1,203.4L123.3,203.1L123.5,202.6L123.0,201.7L122.4,201.4L121.6,200.4L121.7,199.8L122.4,199.3L122.2,197.9L122.8,197.0L122.4,196.6L122.6,195.5L122.1,195.2L122.2,194.5L121.8,194.0L122.1,193.5L121.9,192.0L122.5,191.7L121.2,191.3L121.5,190.7L121.2,189.6L121.9,188.9L120.9,188.5L121.3,188.0L121.3,186.1L120.2,185.9L120.4,184.6L119.9,184.6L119.8,185.2L119.0,184.7L119.2,183.8L118.6,183.1L119.0,182.5L118.6,181.8L119.2,181.5L118.9,180.6L119.3,180.3L119.5,179.5L118.9,179.1L118.9,178.5L118.2,177.5L118.5,177.3L118.7,176.2L117.8,176.1L117.9,175.6L117.1,175.4L117.4,175.1L116.6,174.7L116.7,173.3L115.6,172.4L115.5,171.6L116.0,171.2L115.4,169.4L114.8,168.9L114.9,167.7L115.3,167.0L115.2,166.2L114.4,166.1L113.8,165.5L114.0,164.8L113.6,163.3L112.7,162.3L112.0,161.8L112.0,160.6L112.5,160.2L112.7,159.3L113.3,159.1L113.3,157.7L114.0,157.0L113.7,156.6L114.1,156.2L113.9,155.3L114.6,155.0L115.0,153.9L114.5,153.3L114.5,152.0L113.3,151.9L113.4,151.4L113.1,150.5L113.8,150.4L113.9,148.6L112.8,147.5L113.2,146.9L112.9,146.5L114.9,146.6L114.9,146.6L124.9,146.9L140.6,147.1L149.7,147.2L160.8,147.1L166.7,147.0L177.9,146.8L188.1,146.5L187.9,147.3L188.4,148.1L188.4,149.4L189.8,150.0L190.5,151.2L189.6,152.3L189.4,153.1L188.9,153.5L189.0,155.3L189.5,156.8L189.5,157.9L190.2,158.3L190.9,161.1L192.6,162.1L195.1,162.6L195.9,162.9L196.9,164.6L197.0,165.3L197.0,166.0L198.1,166.6L198.3,167.0L199.4,167.6L200.3,168.6L200.2,169.6L201.0,170.7L203.4,171.8L204.1,172.5L204.2,174.0L204.6,174.6L204.2,175.6L204.4,176.5L204.1,177.8L204.2,178.4L202.8,179.3L202.3,179.8L202.4,180.7L201.9,181.7L202.0,182.8L201.2,183.2L200.3,184.1L199.0,184.2L198.5,184.4L197.7,185.4L196.5,185.7L194.8,185.7L193.7,186.4L193.0,186.2L192.0,186.6L191.7,187.5L191.7,188.7L191.2,190.0L192.2,191.4L192.9,191.4L193.7,192.7L193.8,194.3L193.5,196.1L193.0,196.4L192.3,197.5L191.8,198.0L191.7,199.1L191.5,199.9L191.4,200.9L190.5,201.7L189.6,201.7L188.0,202.4L187.3,203.6L187.7,204L184.2,204Z"></path><path class="mOther" d="M274.3,94.3L274.7,94.0L275.2,94.9L278.5,95.6L277.8,96.7L276.6,96.5L275.8,95.6ZM264.6,97.1L264.8,96.4L265.1,96.7ZM262.8,96.3L263.8,96.8L263.7,97.4L262.7,96.9ZM261.8,100.8L262.1,100.0L262.1,98.9L262.4,98.6L262.3,97.6L263.2,97.7L263.3,99.1L263.7,100.4L262.8,101.2ZM260.6,98.3L261.2,98.1L261.1,99.0L260.7,99.0ZM258.7,104.2L259.4,104.4L259.5,105.3ZM256.8,110.2L257.1,109.8L258.1,110.1L257.9,111.7L257.0,111.0ZM255.9,112.8L256.3,112.0L256.7,112.8ZM247.6,101.9L248.6,102.8L248.3,103.2L248.0,102.7L247.3,102.0ZM304,164.2L303.6,164.4L303.8,165.5L303.0,166.3L302.8,167.0L302.1,167.1L301.9,168.2L301.4,168.5L300.7,169.8L301.1,171.1L300.7,171.3L296.3,172.0L287.8,173.4L281.5,174.4L281.3,173.1L276.8,173.6L267.2,174.7L257.1,175.7L252.4,176.1L252.4,176.1L253.9,174.8L255.1,173.2L256.6,168.8L258.1,166.2L258.9,163.9L259.2,162.2L259.5,159.3L259.3,158.3L259.5,156.8L259.2,154.2L258.6,151.2L257.8,149.3L255.7,145.6L255.0,144.1L254.2,141.9L253.2,140.0L253.1,139.2L254.0,137.5L254.3,136.6L254.2,135.3L253.6,133.2L252.7,131.7L252.9,131.2L253.8,130.3L254.7,127.7L255.6,125.7L255.6,123.7L255.8,121.4L255.1,119.6L255.1,119.1L256.4,118.2L257.3,117.9L257.5,116.3L257.2,115.1L257.7,114.5L258.3,114.7L259.0,113.3L259.9,113.8L260.7,113.5L261.1,112.9L261.3,111.5L261.8,111.2L262.4,109.5L262.8,108.7L263.3,108.8L263.8,108.1L264.0,108.8L263.1,109.4L263.1,110.1L263.8,111.4L262.8,112.8L263.4,112.4L263.5,113.7L263.3,113.8L263.0,115.2L263.5,116.8L263.9,116.8L264.6,114.3L264.6,112.6L265.2,112.2L265.0,114.9L264.4,115.7L264.2,116.8L264.9,117.0L265.2,115.9L265.5,115.6L266.4,113.3L266.5,112.0L266.3,111.1L266.4,109.7L265.9,108.3L266.0,106.7L266.7,105.8L267.2,105.7L268.0,104.9L268.8,104.5L270.0,104.5L271.3,104.1L271.8,103.7L271.7,103.2L270.1,103.1L269.3,102.4L268.7,100.6L269.4,99.2L270.0,98.9L270.8,97.7L270.6,97.2L269.7,96.8L272.6,96.8L272.9,95.9L276.0,97.3L277.3,98.1L277.9,97.7L278.5,97.9L279.1,97.6L280.7,98.0L282.0,99.2L282.3,100.2L283.2,100.5L284.7,100.2L285.1,100.3L286.7,101.4L287.8,101.4L289.6,102.3L291.0,102.1L292.2,103.2L292.8,103.6L292.4,104.1L293.3,105.5L293.9,106.0L294.9,108.0L293.9,107.8L293.0,107.4L292.4,108.1L292.8,109.9L293.5,110.6L294.6,110.9L294.9,111.8L295.2,113.4L295.6,114.0L295.6,115.1L295.3,116.3L295.6,117.3L295.6,119.2L295.8,121.2L295.2,121.5L294.7,122.7L293.5,122.8L293.2,123.3L293.0,125.2L293.1,127.1L292.1,127.3L291.8,127.6L291.9,128.4L289.8,128.8L289.3,129.5L289.0,130.8L289.0,132.8L288.7,133.6L289.5,135.0L290.4,135.4L290.8,134.8L291.1,135.4L292.1,135.6L292.8,136.2L293.3,135.8L294.4,133.7L295.1,133.6L295.4,133.1L295.0,132.3L295.3,131.6L295.6,130.1L295.9,130.9L296.8,130.2L296.9,129.7L295.8,129.4L297.0,129.2L297.5,128.8L297.7,128.1L298.8,127.8L300.4,127.1L300.7,126.3L302.2,125.6L302.8,126.0L304,126.2L304,164.2ZM210.6,61.0L211.5,59.8L215.7,57.2L216.0,57.2L217.9,55.5L219.3,54.7L219.6,54.8L220.8,54.3L220.8,54.7L220.3,55.0L219.0,56.5L219.0,57.0L217.9,57.9L215.6,59.0L213.8,60.2L213.9,60.5L214.9,60.4L212.3,61.8L211.5,61.8ZM196.7,87.0L197.5,86.3L198.1,86.2L199.9,85.3L201.7,84.7L203.1,83.3L204.0,82.2L204.7,81.8L206.2,81.4L207.0,81.6L208.3,81.1L209.3,81.1L211.7,79.7L213.0,78.1L214.1,77.9L215.4,77.5L215.8,76.8L216.0,75.9L217.1,74.8L217.8,74.5L219.1,73.0L220.1,72.6L221.1,71.6L221.5,70.7L222.4,69.7L225.0,68.1L227.6,67.5L229.9,67.5L231.0,68.0L231.1,68.8L230.6,68.7L229.9,69.2L229.0,69.0L228.0,69.3L228.3,70.0L226.9,71.1L225.6,72.8L224.7,73.2L224.6,74.4L224.2,74.3L223.9,75.2L223.3,75.6L223.2,76.8L222.7,77.6L222.2,77.7L221.9,80.5L222.2,81.3L221.8,81.9L222.3,81.8L223.2,80.3L223.3,79.6L223.6,79.8L224.9,78.4L226.2,77.6L225.7,78.5L225.1,78.9L224.5,80.3L225.8,78.8L227.0,78.4L227.7,78.6L229.4,78.4L230.2,78.8L230.5,78.7L231.4,79.2L231.8,79.8L232.5,79.6L233.6,80.5L233.9,81.5L234.7,82.3L235.1,83.0L235.8,83.8L236.7,84.0L236.7,85.3L237.3,85.7L238.5,85.8L240.5,85.5L241.7,84.7L242.2,84.8L243.0,85.9L243.6,86.3L244.5,86.3L244.8,85.5L245.5,85.5L246.0,86.1L246.1,85.0L245.7,84.1L246.4,83.7L246.8,84.2L246.6,85.2L247.5,85.5L248.6,84.2L250.4,83.0L253.0,80.9L253.5,81.2L256.4,80.3L258.6,80.3L260.2,80.2L261.6,79.9L264.4,78.2L265.5,77.9L266.9,77.8L268.4,77.4L267.5,78.9L267.7,81.2L267.9,81.9L267.5,82.2L268.0,83.0L268.8,83.1L269.2,82.8L269.5,83.2L270.2,83.0L271.1,83.4L272.6,82.4L273.2,82.4L273.8,83.1L273.9,83.7L275.0,83.1L275.3,83.2L275.7,82.0L276.5,81.5L277.7,81.7L278.2,81.5L278.5,80.8L279.7,80.7L280.0,81.2L279.8,82.9L280.3,84.8L280.6,86.4L279.2,86.6L279.0,87.7L279.7,87.8L279.9,87.4L280.6,87.4L281.1,88.0L282.0,88.2L281.5,88.9L282.8,90.0L283.3,90.0L284.4,90.6L284.7,89.9L285.4,90.4L285.8,89.9L284.8,88.4L285.5,88.5L287.4,88.1L288.0,88.2L288.9,89.6L289.7,90.1L289.4,91.2L288.7,91.6L287.4,91.1L285.9,91.6L284.4,91.1L283.9,91.3L282.6,91.5L281.2,91.3L278.4,92.0L277.9,92.6L276.0,91.6L275.1,90.9L274.5,91.1L273.9,90.7L273.5,91.4L273.7,92.3L273.0,92.9L273.1,93.6L273.7,94.6L273.2,95.0L271.9,94.4L271.7,93.9L270.6,93.4L270.4,93.0L269.2,92.0L267.3,91.5L266.7,91.7L265.0,91.0L264.2,91.2L263.5,90.9L263.3,91.3L262.4,91.2L261.3,92.5L260.6,93.8L260.2,94.0L258.6,93.8L257.6,94.1L257.2,94.5L257.4,95.1L256.2,94.6L255.2,94.4L254.1,94.7L253.6,94.6L252.5,95.1L251.9,95.9L251.9,96.9L251.6,98.1L251.0,98.1L250.7,98.8L249.6,99.2L249.4,99.9L248.8,100.1L248.9,100.8L248.3,101.0L248.6,102.0L247.6,101.5L247.1,100.9L247.6,100.4L247.6,99.9L248.1,99.3L248.1,98.6L248.7,98.6L249.3,97.1L249.1,96.5L248.5,96.3L247.8,97.7L245.9,97.4L246.1,98.3L245.6,99.1L245.4,100.0L244.0,100.7L243.8,101.1L243.5,100.5L243.5,99.6L243.2,98.5L242.8,98.0L242.4,98.4L242.3,100.4L242.5,100.6L241.0,101.6L240.0,103.8L239.3,106.3L238.5,107.4L237.7,109.4L235.9,112.4L236.3,112.9L235.3,112.8L234.9,112.0L234.2,111.6L234.1,111.1L234.7,109.1L235.1,108.3L235.0,107.8L234.4,107.4L233.7,108.2L232.4,108.5L232.4,108.5L232.0,107.7L232.3,107.3L232.1,106.7L232.7,106.1L233,105.4L232.7,104.6L233.0,103.5L232.3,102.3L232.8,102.0L232.4,101.3L231.7,101.1L231.4,100.6L230.3,100.6L229.8,99.9L228.8,100.3L227.9,99.6L228.6,98.7L228.3,98.4L228.2,97.6L226.2,96.9L225.6,97.2L224.4,96.5L223.8,96.8L222.8,96.5L222.6,96.1L221.4,96.2L221.2,96.8L220.6,96.8L220.4,96.4L219.5,96.1L219.0,96.4L214.7,94.3L200.8,91.2L200.8,90.8L199.3,88.1L198.1,87.9L197.6,87.5L197.6,87.5L197.0,87.6Z"></path><path class="mOther" d="M-4,29.5L-3.4,29.6L9.7,31.5L14.8,32.2L22.3,33.2L20.9,44.9L20.9,45.2L15.0,91.6L14.6,95.4L12.8,109.7L12.6,109.7L7.0,109.0L-4,107.4L-4,29.5Z"></path><path class="mOther" d="M284.8,204L284.6,201.1L282.0,178.3L281.5,174.4L281.5,174.4L287.8,173.4L296.3,172.0L300.7,171.3L300.8,171.7L302.0,172.0L302.6,171.6L304,172.3L304,204Z"></path><path class="mOther" d="M244.4,107.3L244.6,105.9L246.1,106.1L245.2,108.3ZM239.0,110.7L239.6,110.4L239.8,111.4L239.1,111.1ZM195.6,78.6L196.0,77.3L196.5,77.2L196.3,78.4ZM195.0,81.1L196.0,80.5L195.3,81.3ZM193.3,80.2L193.5,79.9L194.9,79.3L195.1,79.5L194.6,80.4L193.5,80.6ZM191.9,81.9L192.0,81.5L192.9,80.8L193.0,81.1ZM192.1,79.5L192.8,80.4L192.2,80.5L191.8,79.9ZM191.6,78.4L193.2,77.7L193.8,78.6L194.4,78.0L194.5,78.8L193.8,78.9L193.0,79.8L192.5,79.1L191.7,78.8ZM191.5,83.0L192.3,82.7L193.8,81.2L194.5,81.7L193.1,82.3L193.3,82.9L192.5,83.0L191.6,83.6ZM188.9,79.2L189.6,78.9L189.5,79.7ZM175.5,85.1L176.4,85.5L178.0,85.3L180.3,84.4L181.2,83.9L182.1,83.9L184.3,82.6L185.5,82.2L185.7,81.7L186.6,82.1L186.9,81.5L188.0,81.3L189.0,80.1L189.7,80.3L190.3,79.7L190.8,79.7L192.0,81.0L191.4,82.3L190.3,83.6L190.8,84.8L190.1,85.4L189.6,86.7L190.2,87.0L192.2,85.7L192.4,84.8L194.4,86.5L195.1,86.8L195.5,86.6L196.7,87.0L197.0,87.6L197.6,87.5L197.6,87.5L198.1,87.9L199.3,88.1L200.8,90.8L200.8,91.2L214.7,94.3L219.0,96.4L219.5,96.1L220.4,96.4L220.6,96.8L221.2,96.8L221.4,96.2L222.6,96.1L222.8,96.5L223.8,96.8L224.4,96.5L225.6,97.2L226.2,96.9L228.2,97.6L228.3,98.4L228.6,98.7L227.9,99.6L228.8,100.3L229.8,99.9L230.3,100.6L231.4,100.6L231.7,101.1L232.4,101.3L232.8,102.0L232.3,102.3L233.0,103.5L232.7,104.6L233,105.4L232.7,106.1L232.1,106.7L232.3,107.3L232.0,107.7L232.4,108.5L232.4,108.5L233.7,108.2L234.4,107.4L235.0,107.8L235.1,108.3L234.7,109.1L234.1,111.1L234.2,111.6L234.9,112.0L235.3,112.8L236.3,112.9L235.9,113.9L235.9,115.2L234.1,115.6L233.2,116.3L233.4,117.1L232.9,118.1L232.5,118.4L232.0,119.8L231.5,120.5L231.3,122.3L231.5,122.7L230.9,123.6L231.9,124.2L232.5,124.0L232.8,123.1L234.0,122.0L234.5,121.9L235.1,120.8L235.1,120.2L236.4,117.9L237.6,117.2L238.2,117.3L238.7,116.6L239.5,117.1L239.1,116.4L239.6,114.7L240.7,112.8L240.9,111.1L241.5,111.2L242.5,110.6L242.5,109.6L243.2,108.5L244.3,108.5L244.3,109.9L243.5,110.1L243.6,112.4L243.1,113.1L242.7,113.1L242.5,114.0L241.9,114.9L242.2,115.6L241.7,116.3L241.9,116.7L241.1,117.3L240.5,118.4L240.2,119.9L239.5,121.7L239.1,122.2L238.8,123.2L238.1,127.7L238.7,129.3L238.7,130.4L238.1,131.2L237.1,132.0L237.0,133.0L236.6,133.7L236.2,136.4L236.4,137.8L236.8,138.5L236.9,140.2L236.0,142.3L235.8,144.5L234.9,146.4L234.7,149.0L235.2,150.2L235.0,150.9L235.5,152.2L235.2,153.2L236.0,154.2L236.1,155.6L236.5,156.6L237.3,157.5L237.3,159.0L236.8,160.8L237.3,163.2L233.1,163.4L225.4,164.0L223.3,164.2L213.4,164.6L210.8,164.7L199.2,165.2L197.0,165.3L196.9,164.6L195.9,162.9L195.1,162.6L192.6,162.1L190.9,161.1L190.2,158.3L189.5,157.9L189.5,156.8L189.0,155.3L188.9,153.5L189.4,153.1L189.6,152.3L190.5,151.2L189.8,150.0L188.4,149.4L188.4,148.1L187.9,147.3L188.1,146.5L187.7,145.6L187.9,144.9L187.4,144.3L187.2,143.1L187.5,141.2L187.1,140.0L185.5,137.8L184.7,136.9L182.8,136.5L180.9,135.0L180.8,134.6L179.4,133.9L178.5,133.2L178.3,131.8L177.9,131.6L177.8,130.7L177.1,130.1L176.0,129.4L173.5,128.7L172.8,128.0L172.3,126.8L171.7,126.5L169.2,126.4L168.8,125.7L168.1,125.4L168.1,125.0L166.6,123.6L165.8,123.2L165.5,122.6L166.1,121.3L165.9,120.0L166.3,119.3L166.0,118.6L166.1,117.6L165.5,117.0L166.3,116.0L166.0,114.5L166.1,114.0L166.0,112.5L166.8,111.7L166.8,111.2L167.5,110.4L167.5,109.6L166.4,108.2L166.4,107.7L165.8,107.2L165.3,107.3L164.2,107.0L164.2,106.1L164.5,104.2L165.6,103.4L166.5,100.9L167.4,100.1L168.6,99.7L169.0,99.1L169.7,99.3L170.1,98.4L171.3,98.5L171.6,97.5L172.0,97.3L171.8,86.0L172.8,86.2L173.3,85.5L172.9,85.2L173.7,84.9L173.8,84.4L174.5,84.2Z"></path><path class="mOther" d="M124.3,204L124.4,203.7L124.9,204L124.3,204ZM30.6,204L32.0,189.5L24.7,188.7L17.7,187.9L3.0,186.2L7.9,147.9L7.9,147.9L22.6,149.7L29.8,150.5L38.7,151.4L41.9,151.8L52.2,152.7L63.0,153.5L70.8,154.1L80.2,154.7L85.8,155.0L86.2,156.0L89.1,157.6L90.8,158.7L92.4,159.9L93.3,159.8L94.0,159.4L94.5,158.2L94.9,158.0L95.9,158.4L97.2,158.6L98.1,158.4L98.9,158.6L99.7,158.4L100.6,158.7L101.0,158.3L101.7,158.6L102.5,158.4L103.7,158.8L103.8,159.5L104.7,159.8L104.9,160.3L107.1,160.6L107.5,161.4L108.1,161.2L109.5,161.8L109.5,162.5L110.6,162.5L111.1,162.8L110.7,163.7L111.8,164.8L112.1,165.7L113.3,165.7L113.6,166.2L114.4,166.1L115.2,166.2L115.3,167.0L114.9,167.7L114.8,168.9L115.4,169.4L116.0,171.2L115.5,171.6L115.6,172.4L116.7,173.3L116.6,174.7L117.4,175.1L117.1,175.4L117.9,175.6L117.8,176.1L118.7,176.2L118.5,177.3L118.2,177.5L118.9,178.5L118.9,179.1L119.5,179.5L119.3,180.3L118.9,180.6L119.2,181.5L118.6,181.8L119.0,182.5L118.6,183.1L119.2,183.8L119.0,184.7L119.8,185.2L119.9,184.6L120.4,184.6L120.2,185.9L121.3,186.1L121.3,188.0L120.9,188.5L121.9,188.9L121.2,189.6L121.5,190.7L121.2,191.3L122.5,191.7L121.9,192.0L122.1,193.5L121.8,194.0L122.2,194.5L122.1,195.2L122.6,195.5L122.4,196.6L122.8,197.0L122.2,197.9L122.4,199.3L121.7,199.8L121.6,200.4L122.4,201.4L123.0,201.7L123.5,202.6L123.3,203.1L123.3,204L30.6,204Z"></path><path class="mGrat" d="M1.6,204L27.6,-4M60.9,204L76.5,-4M119.8,204L125.0,-4M178.6,204L173.4,-4M237.5,204L221.9,-4M296.9,204L270.8,-4M-4,165.8L27.6,169.6L63.3,172.9L99.1,175.0L134.9,176.0L170.7,175.9L206.6,174.6L242.3,172.3L278.0,168.8L304,165.5M-4,126.9L-2.7,127.1L31.6,131.3L66.1,134.4L100.7,136.4L135.4,137.4L170.0,137.3L204.6,136.1L239.2,133.9L273.7,130.5L304,126.6M-4,87.9L2.5,88.9L35.7,93.0L69.0,96.0L102.4,98.0L135.8,98.9L169.3,98.8L202.7,97.6L236.1,95.5L269.4,92.2L302.6,88.0L304,87.8M-4,48.9L7.8,50.7L39.8,54.6L71.9,57.6L104.1,59.5L136.3,60.4L168.6,60.3L200.8,59.2L233.0,57.0L265.1,53.9L297.1,49.8L304,48.7M-4,9.9L13.0,12.5L43.9,16.3L74.8,19.1L105.8,20.9L136.8,21.8L167.9,21.7L198.9,20.6L229.9,18.6L260.8,15.6L291.6,11.6L304,9.6"></path></g><rect class="mFrame" x="0.5" y="0.5" width="299" height="199"></rect><text class="mAb" x="65.1" y="70.7" text-anchor="middle">ND</text><text class="mAb" x="63.7" y="128.7" text-anchor="middle">SD</text><text class="mAb" x="219.5" y="188.8" text-anchor="middle">IL</text><text class="mAb" x="156.5" y="177.6" text-anchor="middle">IA</text><text class="mAb" x="266.4" y="127.3" text-anchor="middle">MI</text><text class="mAb" x="204.2" y="127.1" text-anchor="middle">WI</text><text class="mAb" x="62.8" y="181" text-anchor="middle">NE</text><text class="mMN" x="141.2" y="99.6" text-anchor="middle">Minnesota</text><text class="mLk" x="232.4" y="67.9" text-anchor="middle">Lake Superior</text><text class="mCan" x="184.4" y="31.200000000000003" text-anchor="middle">CANADA</text><g class="mNorth" transform="translate(284 176)"><path d="M0 -9 L4 4 L0 1.5 L-4 4 Z"></path><text x="0" y="13" text-anchor="middle">N</text></g></svg><figcaption><span>Midwest HQ</span><span class="mCoord">Minnesota · USA</span></figcaption></figure>
</div>
<span class="trans">CUT TO:</span>
</section>


<!-- ========================================================================
     WHO TO CONTACT  (#who)
     One row per kind of request. Copy buttons copy, they never show the email.
     Scary Good email lives in copySG in the script. Mine lives in copyEmail.
     ======================================================================== -->
<section id="who" style="padding: 60px 48px"><span class="bpNote" aria-hidden="true" style="top: 160px; left: 14px">I read every message myself</span>
<span class="slug">INT. FRONT DESK. DAY.</span>
<h2 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 400; font-size: 64px; line-height: 1">Who to contact<svg class="hcirc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2.6,13.8 L4.8,11.8 L6.9,9.7 L10.3,7.9 L13.4,5.9 L18.1,4.7 L22.1,3.0 L26.8,1.7 L32.5,1.2 L37.8,0.3 L43.4,0.0 L49.1,-0.2 L54.8,-0.3 L60.5,0.1 L66.1,0.6 L71.3,1.5 L76.0,2.8 L81.0,3.9 L85.0,5.6 L89.2,7.1 L92.2,9.0 L95.0,11.0 L98.8,12.9 L100.0,15.1 L101.1,17.4 L101.0,19.7 L101.7,22.1 L100.3,24.3 L99.8,26.7 L96.6,28.7 L94.7,31.0 L90.1,32.5 L87.2,34.6 L83.0,36.2 L78.2,37.6 L72.7,38.4 L67.8,39.8 L62.3,40.7 L56.3,40.9 L50.4,40.9 L44.6,40.7 L38.6,40.6 L33.1,39.8 L27.1,39.3 L22.5,37.7 L17.4,36.5 L12.6,35.1 L8.2,33.5 L5.4,31.3 L2.2,29.3 L-0.4,27.1 L-2.2,24.8 L-3.1,22.5 L-3.5,20.1 L-2.0,17.7 L-1.3,15.4 L-0.1,13.0 L2.8,10.9 L4.7,8.6 L8.8,6.9 L12.1,4.8" vector-effect="non-scaling-stroke"></path></svg></h2>
<ul class="cWho">
<li><span class="cK">Booking me for a role</span><span class="cV">Reach my agents below for the right market, or email me directly and I'll loop them in.</span><a class="fbtn" href="https://hearmelissa.com/#reps"><span>See my reps</span></a></li>
<li><span class="cK">Directing, casting &amp; post</span><span class="cV">That's my studio, Scary Good. We cast, record, direct, edit, mix and score, and deliver finished audio.</span><span class="cBtns" style="display: flex; flex-wrap: wrap; gap: 10px"><a class="fbtn" href="https://scarygood.studio" target="_blank" rel="noopener"><span>scarygood.studio</span><svg width="12" height="12" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 14 L14 6 M8 6 H14 V12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></a><button type="button" class="fbtn" onClick="{{copySG}}" aria-label="Copy the Scary Good email address"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.6"></rect><path d="M16 8V4H4v12h4" fill="none" stroke="currentColor" stroke-width="1.6"></path></svg><span>{{copySGLabel}}</span></button></span></li>
<li><span class="cK">Coaching &amp; classes</span><span class="cV">Everything is booked online, straight from the coaching page.</span><a class="fbtn" href="@@P:coaching@@"><span>Coaching</span></a></li>
<li><span class="cK">Conventions &amp; appearances</span><span class="cV">Organizers can email me directly. Fans, ask your con to invite me and tag @melissamedinavo.</span><button type="button" class="fbtn" onClick="{{copyEmail}}" aria-label="Copy my email address"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.6"></rect><path d="M16 8V4H4v12h4" fill="none" stroke="currentColor" stroke-width="1.6"></path></svg><span>{{copyLabel}}</span></button></li>
<li><span class="cK">Press &amp; interviews</span><span class="cV">Bios, headshots and character art are in the press kit, ready to use. For interviews, email me directly.</span><span class="cBtns" style="display: flex; flex-wrap: wrap; gap: 10px"><a class="fbtn" href="@@P:fans@@#press"><span>Press kit</span></a><button type="button" class="fbtn" onClick="{{copyEmail}}" aria-label="Copy my email address"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.6"></rect><path d="M16 8V4H4v12h4" fill="none" stroke="currentColor" stroke-width="1.6"></path></svg><span>{{copyLabel}}</span></button></span></li>
</ul>
<span class="trans">DISSOLVE TO:</span>
</section>


<!-- ========================================================================
     REPRESENTATION  (#reps)
     Agents come from the reps list in renderVals. Each one has a copy button.
     ======================================================================== -->
<section id="reps" style="padding: 60px 48px">
<span class="slug">EXT. AGENT'S OFFICE. DAY.</span>
<h2 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 400; font-size: 64px; line-height: 1">Representation<svg class="hcirc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M1.5,13.7 L4.2,11.7 L7.2,9.7 L10.8,8.0 L13.1,5.9 L17.6,4.4 L22.3,3.1 L27.5,2.2 L32.4,1.1 L37.8,0.4 L43.3,-0.3 L49.1,-0.3 L54.8,-0.3 L60.4,0.2 L66.1,0.5 L71.4,1.4 L76.0,2.8 L80.9,4.0 L85.8,5.2 L89.9,6.9 L92.5,9.0 L95.3,10.9 L98.8,12.9 L99.3,15.2 L101.7,17.4 L101.4,19.7 L100.6,22.0 L100.3,24.3 L98.6,26.5 L97.0,28.8 L94.3,30.8 L90.6,32.7 L87.3,34.6 L82.7,36.0 L77.8,37.3 L72.6,38.4 L67.7,39.6 L61.8,39.9 L56.3,40.9 L50.4,41.3 L44.6,40.6 L38.9,40.1 L32.7,40.2 L27.8,38.8 L22.0,38.0 L17.6,36.4 L12.8,35.0 L9.0,33.2 L5.4,31.3 L2.9,29.2 L0.9,27.0 L-0.8,24.7 L-2.2,22.4 L-2.2,20.1 L-3.7,17.6 L-2.1,15.3 L-0.7,12.9 L2.4,10.8 L4.5,8.6 L8.8,6.9 L12.4,5.0" vector-effect="non-scaling-stroke"></path></svg></h2>
<div class="cReps">
<sc-for list="{{reps}}" as="p" hint-placeholder-count="3"><div class="cRep"><span class="cK">{{p.k}}</span><span class="cAg">{{p.agency}}</span><span class="cNm">{{p.name}}</span><button type="button" class="fbtn" onClick="{{p.copy}}" aria-label="Copy {{p.agency}} email"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.6"></rect><path d="M16 8V4H4v12h4" fill="none" stroke="currentColor" stroke-width="1.6"></path></svg><span>{{p.copyLabel}}</span></button></div></sc-for>
</div>
<span class="trans">MATCH CUT TO:</span>
</section>


<!-- ========================================================================
     BEFORE YOU WRITE  (#before)
     The "save us both a few emails" list. Edit right here.
     ======================================================================== -->
<section id="before" style="padding: 60px 48px">
<span class="slug">INT. MELISSA'S BOOTH. LATER.</span>
<h2 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 400; font-size: 64px; line-height: 1">Before you write<svg class="hcirc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M3.3,13.9 L4.2,11.7 L7.4,9.8 L10.6,8.0 L14.2,6.3 L18.0,4.6 L22.8,3.4 L27.5,2.2 L32.6,1.3 L37.6,0.1 L43.4,0.0 L49.1,0.1 L54.8,-0.4 L60.3,0.3 L66.3,0.3 L70.9,1.8 L76.8,2.3 L80.6,4.1 L85.9,5.2 L89.4,7.0 L93.2,8.8 L96.5,10.7 L98.6,12.9 L100.4,15.1 L101.9,17.4 L102.4,19.7 L101.0,22.0 L99.9,24.3 L99.0,26.6 L97.3,28.8 L94.8,31.0 L90.4,32.6 L86.6,34.3 L83.3,36.4 L78.0,37.4 L72.8,38.5 L67.5,39.5 L62.1,40.4 L56.3,40.7 L50.4,40.8 L44.5,41.1 L38.9,40.1 L33.2,39.6 L27.1,39.3 L22.8,37.5 L17.4,36.6 L13.5,34.7 L8.7,33.3 L5.0,31.4 L1.6,29.4 L0.2,27.1 L-2.1,24.8 L-2.9,22.4 L-3.6,20.1 L-2.7,17.7 L-1.8,15.3 L-0.6,13.0 L1.7,10.7 L4.0,8.5 L7.5,6.5 L11.6,4.6" vector-effect="non-scaling-stroke"></path></svg></h2>
<p class="sub2">Save us both a few emails</p>
<div class="cCard">
<p class="cCardLead">For a booking, a few details help me answer fast:</p>
<ul class="cList">
<li>What the project is</li>
<li>A link to your website and/or portfolio</li>
<li>Info on the role</li>
<li>Your budget or rate range</li>
</ul>
<p class="cCardLead">I record in my own booth with Source-Connect, the usual live remote tools and mocap, so we can record from anywhere.</p>
</div>
<span class="trans">FADE OUT.</span>
</section>

<p class="credit">No AI used. Website lovingly developed by Melissa Medína, <a href="https://dirtylinestudio.com" target="_blank" rel="noopener">Dirtyline Studio</a> and <a href="https://envato.com" target="_blank" rel="noopener">Envato</a>.</p>


<!-- ========================================================================
     FOOTER  (credit line, socials, logo, sign-off)
     Social links are the little icons. Bluesky still needs my handle (href="#bsky").
     The credit line is the "No AI used" sentence right above.
     ======================================================================== -->
<footer class="mFoot" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: end; gap: 20px; padding: 24px 48px 28px; border-top: 1px solid var(--t4); font-size: 10.5px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--t19)">
<nav aria-label="Social links" style="display: flex; gap: 6px; flex-wrap: wrap"><a href="https://x.com/melissamedinavo" target="_blank" rel="noopener" aria-label="X (formerly Twitter)" title="X (formerly Twitter)" style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; color: var(--t3); text-decoration: none"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 4h4.6l11.4 16h-4.6z M19.6 4l-6.1 6.9 M4.4 20l6.1-6.9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a><a href="https://www.imdb.com/name/nm10556515/" target="_blank" rel="noopener" aria-label="IMDb" title="IMDb" style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; color: var(--t3); text-decoration: none"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="1.5" y="6" width="21" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.4"></rect><text x="12" y="14.6" text-anchor="middle" fill="currentColor" style="font-family: Arial, sans-serif; font-weight: 700; font-size: 7.6px">IMDb</text></svg></a><a href="#bsky" aria-label="Bluesky" title="Bluesky" style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; color: var(--t3); text-decoration: none"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 11.2C10.6 8.4 7.2 5 4.8 5 3.4 5 3.3 6.8 3.3 7.8c0 1.2.6 4.2 3.4 4.7-2.4.5-3.8 2-1.9 3.9 2.1 2.1 4.3.9 7.2-3.3 2.9 4.2 5.1 5.4 7.2 3.3 1.9-1.9.5-3.4-1.9-3.9 2.8-.5 3.4-3.5 3.4-4.7 0-1 -.1-2.8-1.5-2.8-2.4 0-5.8 3.4-7.2 6.2z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"></path></svg></a><a href="https://www.instagram.com/melissamedinavo/" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram" style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; color: var(--t3); text-decoration: none"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"></rect><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.5"></circle><circle cx="17.4" cy="6.6" r="1" fill="currentColor"></circle></svg></a><a href="https://www.linkedin.com/in/melissa-medina-5040001b3/" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn" style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; color: var(--t3); text-decoration: none"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="3.5" fill="none" stroke="currentColor" stroke-width="1.5"></rect><path d="M8 10.5v6 M8 7.6v.01 M11.7 16.5v-3.6a2.1 2.1 0 0 1 4.2 0v3.6 M11.7 10.5v6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></a></nav>
<span style="display: flex; flex-direction: column; align-items: center; gap: 10px"><img class="onL" src="@@A:images/logo-black.png@@" alt="" width="34" height="34" style="width: 34px; height: 34px"><img class="onD" src="@@A:images/logo-white.png@@" alt="" width="34" height="34" style="width: 34px; height: 34px"><span class="fri" style="font-size: 23px; letter-spacing: 0; text-transform: none; color: var(--badgeInk)">Let's make something badass!</span></span>
<span style="text-align: right">© 2026</span>
</footer>


<!-- ===== REEL POP-UP (sound on) ===== -->
<sc-if value="{{reelOpen}}" hint-placeholder-val="{{ false }}">
<div role="dialog" aria-modal="true" aria-label="Melissa Medína reel" onClick="{{closeReel}}" style="position: fixed; inset: 0; z-index: 50; background: rgba(12,8,11,0.88); display: flex; align-items: center; justify-content: center; padding: 48px">
<div onClick="{{stop}}" style="position: relative; width: 100%; max-width: 980px; aspect-ratio: 16 / 9; background: #000; box-shadow: 0 30px 80px rgba(0,0,0,0.6)">
<sc-if value="{{hasReel}}" hint-placeholder-val="{{ false }}"><iframe src="{{reelPop}}" title="Melissa Medína reel" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen="" style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0"></iframe></sc-if>
<button type="button" onClick="{{closeReel}}" aria-label="Close the reel" style="position: absolute; top: -46px; right: 0; width: 40px; height: 40px; padding: 0; border: 1px solid rgba(243,230,234,0.5); border-radius: 50%; background: none; color: #F3E6EA; cursor: pointer; display: flex; align-items: center; justify-content: center"><svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 4 L16 16 M16 4 L4 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button>
</div>
</div>
</sc-if>

</div>
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
  const tp = document.createElement('template'); tp.id = 'hm-tpl-contact'; tp.innerHTML = fix(TPL); document.body.appendChild(tp);
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
// JUMP LINKS: links with data-jump scroll down this page; the address never changes
document.addEventListener('click', (e) => {
  const a = e.target.closest && e.target.closest('#hm-contact a[data-jump]'); if (!a) return;
  e.preventDefault(); e.stopPropagation();
  const id = a.dataset.jump; if (!id) return;
  const el = document.getElementById('hm-contact').querySelector('#' + CSS.escape(id));
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}, true);
window.__hmBoot_contact = (Component) => {
  const tpl = document.getElementById('hm-tpl-contact').content;
  const root = document.getElementById('hm-contact');
  class Host extends PC {
    constructor(p) { super(p); this.logic = new Component({ theme: 'auto' }); this.logic.__host = this; }
    componentDidMount() { this.logic.componentDidMount && this.logic.componentDidMount(); }
    componentWillUnmount() { this.logic.componentWillUnmount && this.logic.componentWillUnmount(); }
    render() { return h('div', null, ...kids(tpl, [this.logic.renderVals()])); }
  }
  // Carrd hides the sections I'm not on. Only start this page once its section is showing.
  let on = false;
  const go = () => {
    const vis = root.getClientRects().length > 0;
    if (vis && !on) { on = true; render(h(Host), root); }
    else if (!vis && on) { on = false; render(null, root); root.innerHTML = ''; }
  };
  setInterval(go, 250); go();
};



/* ========================================================================
   5. MY CONTENT  (the lists, links and switches for this page)
   Change the stuff in quotes. Keep commas and brackets where they are.
   If the page goes blank after an edit: undo, look for a missing comma.
   ======================================================================== */
const REEL_ID = 'F93S3Hjf6zQ'; // REEL: just the YouTube ID (the part after watch?v=)

// ----------------------------------------------------------------------
// ONE-ON-ONES: status open / full / hidden. href = my TidyCal link for that session.
// ----------------------------------------------------------------------
function oneOnOne() {
  // ONE-ON-ONE: status 'open' shows Book, 'full' shows "Full right now", 'hidden' takes it off the page.
  // len / price / seats / freq show with little icons; leave '' to hide one. paras = the Details pop-up text.
  const T = 'https://tidycal.com/melissamedinavo/';
  return [
    { title: "Coaching consultation", type: "Consultation", len: "30 min", price: "Free", seats: "", freq: "", best: "figuring out if ongoing coaching is the right fit.", href: T + 'coaching-consult', status: "full", fullLabel: "Slots full · check later", paras: [
        "A planning conversation. We get to know each other, talk through your VO goals, and figure out whether my strengths line up with what you're trying to do. I teach every genre I've worked in, and I'm strongest with people aiming at games, commercial and animation.",
        "It's also for you to assess me. Ongoing coaching is weekly, bi-weekly or monthly, fully customized to you and your goals: deep, focused work that's also actually fun. Worth being sure we're a fit before either of us commits.",
        "It's not a coaching session, so we won't be doing rapid-fire Q&A, working scripts or handing out free tips. Come with your goals and questions about coaching with me, and you'll get the most out of it."
      ] },
    { title: "Commercial solo workout", type: "Workout", len: "1 hour", price: "$100", seats: "", freq: "", best: "reps on commercial scripts, one-on-one.", href: T + 'commercial-workout-solo', status: "open", paras: [
        "Chasing that unicorn called the \"conversational read\"? Let's work!",
        "This is one hour, just you and me: reps, pointers, and real, specific, actionable feedback on what's working and what's getting in your way. No group, no waiting your turn, no going first in front of strangers.",
        "I've read for Google, McDonald's, JC Penney and dozens more, so I've got a few tricks up my sleeve. But the thing I actually care about is helping you bring yourself to your commercial reads. I built my career on it, and I know how hard it is to hear yourself objectively.",
        "Nothing but scripts here. I'll bring plenty; bring your own if you'd rather.",
        "Best if you've done a few group workouts and know the basics, but I teach all skill levels!"
      ] },
    { title: "Audition booth direction", type: "Direction", len: "1 hour", price: "$50", seats: "", freq: "", best: "an audition you want to nail before it's due.", href: T, status: "open", paras: [
        "Got a kickass audition you want to workshop ASAP? Bring the sides and I'll direct you through them like a real session, so you send your strongest take."
      ] },
    { title: "Career \"therapy\"", type: "Career coaching", len: "90 min", price: "$100", seats: "", freq: "", best: "the business and life side. No scripts.", href: T + 'career-therapy', status: "open", paras: [
        "My most popular request. Think of it like a creative therapy session! Everyone talks about technique, but nobody talks about the roadblocks and struggles of life as a creative. Cool, so you got your first agent. Now how do you process that, and what is expected of you?",
        "I support myself entirely with VO, and it's not easy for anyone. There's no roadmap for success, and it's scary! Taking care of your mental health and building sustainable habits for a self-driven creative life is the key to making sure your ups are up and your downs aren't too down.",
        "If you're dealing with new agency overwhelm, struggling with time management, feel stuck, unsure where to go, or just want to vent and leave with a plan, let's talk it out.",
        "I used to do these for free and realized it would be all I'd do if I didn't limit it, so thank you for understanding if there are no slots left. I post new times periodically, so check back if it's full!"
      ] }
  ];
}

// ----------------------------------------------------------------------
// GROUP CLASSES: status open / soon / soldout / hidden. dates soonest first.
// ----------------------------------------------------------------------
function groupClasses() {
  // GROUP CLASSES: type 'Lecture', 'Workout' or 'Workshop' (a workshop is a lecture and a workout, and runs longer). status 'open' shows Book, 'soon' shows Dates coming soon, 'soldout' shows Sold out, 'hidden' takes it off.
  // dates: upcoming sessions, soonest first, e.g. ['Sat, Jan 17 · 12pm CT', 'Sat, Feb 7 · 12pm CT']. The card shows the next one; Details lists them all.
  // icon: mask | wave | gauge | anchor | knife | book | mic. Leave it off and the card picks one from the type.
  const T = 'https://tidycal.com/melissamedinavo/';
  return [
    { t: "Evil, Explained: Why We Root for the Bad Guy", icon: "knife", type: "Workshop", len: "2.5 hours", price: "$75", seats: "", short: "The psychology behind unforgettable bad guys, and how to play one.", href: T + 'evil-explained', status: "open", dates: ['Sat, Dec 5 · 12pm CT', 'Thu, Dec 10 · 6pm CT'], paras: ["Ever wonder why audiences secretly root for the villain, or why some bad guys steal the whole show while others fall flat? Join actor and VO director Melissa Medina (Queen Callis in Borderlands 4, GTA 6, Fallout, Star Wars, Ace Combat, Warframe) for Evil, Explained: Why We Root for the Bad Guy. Drawing from years of voicing and directing antagonists across games and stories big and small, Melissa breaks down the psychology behind unforgettable bad guys so you can move past one-note cliches. You'll unpack what drives an antagonist, decode what a story needs from a villain, calibrate your reads across worlds and genres, and plant subtle character tells that turn even a thin side or combat bark into a scene-stealer.", "This workshop mixes lecture with putting the frameworks into practice through reads directed by Melissa, and you don't have to read if you're not ready to yet. Whether you want to test your villain chops on the mic or observe until you're ready, you're in good company. Offered at a holiday discount, classes usually sell out. This is an online-only class and is not recorded; for the privacy of our attendees, we do not allow recording or AI assistants."] },
    { t: "Commercial group workout", icon: "wave", type: "Workout", len: "2 hours", price: "$100", seats: "6 seats", short: "Everyone reads, everyone gets detailed notes.", href: T + 'commercial-workout-group', status: "open", dates: ['Tue, Dec 8 · 6pm CT', 'Fri, Dec 11 · 11am CT'], paras: [
        "Chasing that unicorn called the \"conversational read\"? I can help. My work with clients from Google to McDonald's to JC Penney and dozens more has given me a few tricks to share. More importantly, I'm here to help you bring yourself to your commercial reads.",
        "We focus on practice with commercial scripts. You'll read, I'll give detailed feedback, and we'll try different directions to find your cozy spot.",
        "You'll be reading in front of others, but the atmosphere is always supportive and kind, and I keep a close eye on that for your comfort. Prefer to read solo? Book the one-on-one workout."
      ] },
    { t: "Mic Voice Must Die! A Physicality Masterclass", icon: "nomic", type: "Workshop", len: "2.5 hours", price: "$75", seats: "", short: "Variety, nuance and acting through your efforts, barks and physicality.", href: T + 'mic-voice-must-die', status: "open", dates: ['Sat, Dec 12 · 12pm CT', 'Wed, Dec 16 · 6pm CT'], paras: ["If you struggle to find variety in your efforts and your reads sound a little too \"polished,\" it's time to ditch the act for authenticity. Join actor and VO director Melissa Medina (Borderlands 4, Granblue Fantasy, Fatal Fury, Aliens, Warframe) for Mic Voice Must Die!. After years on both sides of the glass in action, combat, and narrative sessions, Melissa built this class to share what actually works in the booth when a spreadsheet calls for hits, barks, traversal, and physical shifts. Using breathing techniques, script analysis, and practical booth tools, you'll learn how to bring nuance, depth, variety that gets you called back, and how to act through your efforts (because it's physicality WHILE acting) to deliver reads that pop.", "Each session blends focused lecture with putting the tools into practice through live reads directed by Melissa, and you don't have to read if you're not ready to yet. You can hop on the mic when you feel good or hang back, listen, and take notes at your own pace. Offered at a holiday discount, classes usually sell out. This is an online-only class and is not recorded; for the privacy of our attendees, we do not allow recording or AI assistants."] },
    { t: "Grounded, Not Boring", icon: "anchor", type: "Workshop", len: "", price: "", seats: "", short: "Script analysis for game scripts and audition sides.", href: '', status: "soon", dates: [], paras: [
        "Script analysis for game scripts and audition sides. Full details coming soon."
      ] }
  ];
}
// KIND WORDS: add student quotes here and the section appears, e.g. { quote: 'Signed with my first agent after three months.', who: 'Name · VO actor' }

// ----------------------------------------------------------------------
// KIND WORDS: add { quote: '...', who: 'Name · VO actor' } and the section appears.
// ----------------------------------------------------------------------
function kindWords() {
  return [];
}
function withShots(c, m) {
  return { ...m, shots: m.shots.map((s) => ({ ...s, open: () => c.setState({ shot: s }) })) };
}
function spy(nav) {
  if (!nav || nav.__spy) return;
  nav.__spy = true;
  const links = Array.from(nav.querySelectorAll('a[href*="#"]'));
  const pairs = links.map((a) => [a, (nav.closest('.hmRoot') || document).querySelector('#' + CSS.escape((a.dataset.jump || a.getAttribute('href').split('#').pop())))]).filter((p) => p[1]);
  const mark = (a) => links.forEach((l) => l.classList.toggle('on', l === a));
  let raf = 0;
  const check = () => {
    raf = 0;
    const line = nav.getBoundingClientRect().bottom + 40;
    let cur = null;
    pairs.forEach(([a, s]) => { if (s.offsetParent !== null && s.getBoundingClientRect().top <= line) cur = a; });
    mark(cur);
  };
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('scroll', onScroll, { passive: true, capture: true });
  links.forEach((a) => a.addEventListener('click', () => { mark(a); setTimeout(check, 900); }));
  check();
}
function inkRnd(seed) { let s = seed; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }
function inkSetup(sc) {
  if (sc.__ink) return; sc.__ink = true;
  const NSv = 'http://www.w3.org/2000/svg';
  const page = sc.querySelector('.ink');
  const svg = sc.querySelector('.inkLine'); const live = svg.querySelector('.live'); const wf = svg.querySelector('.wf');
  const dot = sc.querySelector('.inkDot');
  const tmp = document.createElementNS(NSv, 'path'); tmp.style.display = 'none'; svg.appendChild(tmp);
  let total = 0, shown = 0, target = 0, raf = 0, stops = [], reveals = [], wx0 = 0, wx1 = 0, wLen = 0;
  const Zf = () => (page.getBoundingClientRect().width / (page.offsetWidth || 1)) || 1;
  const rel = (el) => { const r = el.getBoundingClientRect(), b = page.getBoundingClientRect(), z = Zf(); return { L: (r.left - b.left) / z, T: (r.top - b.top) / z, R: (r.right - b.left) / z, B: (r.bottom - b.top) / z, W: r.width / z, H: r.height / z }; };
  const build = () => {
    const W = page.offsetWidth, H = page.offsetHeight;
    svg.setAttribute('width', W); svg.setAttribute('height', H); svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    const pg = page.querySelector('section:not(#reel)'); const lane = pg ? rel(pg).R - 46 : W - 22;
    const lede = page.querySelector('.hLede') || page.querySelector('#reel');
    const pg1 = rel(lede.closest('section')); const rb = rel(lede); const wy = rb.B + 46; wx0 = pg1.L + 120; wx1 = lane - 40;
    // the take: a filled voice waveform across the page under the reel
    const r = inkRnd(11); let d = ''; let env = 0, left = 0, tg = 0;
    for (let x = wx0; x < wx1; x += 3) {
      if (left <= 0) { const q = r() < 0.2; left = q ? 5 + Math.floor(r() * 10) : 16 + Math.floor(r() * 40); tg = q ? 1 : 5 + r() * 16; } left--;
      env += (tg - env) * 0.18; const a = Math.max(0.8, env * (0.45 + 0.55 * r()) * Math.min(1, (x - wx0) / 40, (wx1 - x) / 80));
      d += 'M' + x.toFixed(1) + ',' + (wy - a).toFixed(1) + 'h2v' + (2 * a).toFixed(1) + 'h-2z';
    }
    wf.setAttribute('d', d);
    let p = 'M' + wx0 + ',' + wy + ' L' + wx1 + ',' + wy + ' C' + (lane - 10) + ',' + wy + ' ' + lane + ',' + (wy + 10) + ' ' + lane + ',' + (wy + 50);
    wLen = wx1 - wx0;
    // every section title gets a hand-drawn oval on the way down
    const heads = Array.prototype.slice.call(page.querySelectorAll('section h2, .sgHead')).filter((h) => h.offsetParent && !h.closest('#music, #audiodramas, #audiobooks, #music-inner'));
    heads.forEach((h, i) => {
      const b = rel(h); if (b.T < wy) return;
      const cy = b.T + b.H * 0.55, cx = (b.L + b.R) / 2, rx = b.W / 2 + 26, ry = b.H / 2 + 6;
      const ay = b.T - 22;
      p += ' L' + lane + ',' + (ay - 40) + ' C' + lane + ',' + ay + ' ' + lane + ',' + ay + ' ' + (lane - 30) + ',' + ay + ' L' + (cx + rx + 30) + ',' + ay + ' C' + (cx + rx) + ',' + ay + ' ' + (cx + rx) + ',' + ay + ' ' + (cx + rx) + ',' + cy;
      const rr = inkRnd(40 + i); const tilt = (rr() - 0.5) * 0.08;
      for (let k = 1; k <= 70; k++) { const a = (k / 70) * Math.PI * 2.12; const w = 1 + (rr() - 0.5) * 0.02 + (k / 70) * 0.06;
        const x = Math.cos(a) * rx * w, y = Math.sin(a) * ry * w; p += ' L' + (cx + x * Math.cos(tilt) - y * Math.sin(tilt)).toFixed(1) + ',' + (cy + x * Math.sin(tilt) + y * Math.cos(tilt)).toFixed(1); }
      const ey = b.T - 32;
      p += ' C' + (cx + rx + 6) + ',' + (cy - 20) + ' ' + (cx + rx + 10) + ',' + ey + ' ' + (cx + rx + 40) + ',' + ey + ' L' + (lane - 30) + ',' + ey + ' C' + lane + ',' + ey + ' ' + lane + ',' + ey + ' ' + lane + ',' + (ey + 40);
    });
    p += ' L' + lane + ',' + (H - 40);
    live.setAttribute('d', p); total = live.getTotalLength();
    stops = []; for (let l = 0; l <= total; l += 36) stops.push([l, live.getPointAtLength(l).y]);
    live.style.strokeDasharray = (total + 2) + ' ' + (total + 2); live.style.strokeDashoffset = total + 2 - shown;
    // content waits for the dot: every block inside every section after the reel
    reveals.forEach((x) => x.el.classList.remove('rv'));
    page.classList.add('armed');
    reveals = [];
    Array.prototype.forEach.call(page.querySelectorAll('section'), (sec) => {
      if (sec.id === 'reel') return;
      Array.prototype.forEach.call(sec.children, (el) => { const t = rel(el).T; if (t > wy) { el.classList.add('rv'); reveals.push({ el: el, top: t }); } });
    });
  };
  const lenAtY = (y) => { let best = 0; for (let i = 0; i < stops.length; i++) if (stops[i][1] <= y) best = stops[i][0]; return best; };
  const measure = () => {
    const rb = sc.getBoundingClientRect(), vh = window.innerHeight; const y = (-rb.top + vh * 0.78) / Zf();
    target = rb.bottom <= vh + 4 ? total : Math.min(total, Math.max(lenAtY(y), wLen + 60));
    if (!raf) raf = requestAnimationFrame(tick);
  };
  const tick = () => {
    raf = 0; shown += (target - shown) * 0.08; if (Math.abs(target - shown) < 0.5) shown = target;
    live.style.strokeDashoffset = total + 2 - shown;
    let ty = 0, tx = 0; if (shown > 0) { const pt = live.getPointAtLength(Math.min(shown, total)); ty = pt.y; tx = pt.x; dot.style.transform = 'translate(' + tx + 'px,' + ty + 'px)'; }
    wf.style.clipPath = 'inset(0 ' + Math.max(0, (svg.clientWidth || 1280) - (shown < wLen ? tx : wx1) - 2) + 'px 0 0)';
    reveals.forEach((x) => { const q = Math.max(0, Math.min(1, (ty - x.top + 60) / 160)); x.el.style.setProperty('--q', q.toFixed(3)); });
    if (shown !== target) raf = requestAnimationFrame(tick);
  };
  window.addEventListener('scroll', measure, { passive: true });
  let rbT = 0; const rebuild = () => { clearTimeout(rbT); rbT = setTimeout(() => { build(); measure(); }, 220); };
  let lastW = window.innerWidth, rzT = 0; window.addEventListener('resize', () => { if (window.innerWidth === lastW) return; lastW = window.innerWidth; clearTimeout(rzT); rzT = setTimeout(rebuild, 150); });
  Array.prototype.forEach.call(sc.querySelectorAll('img'), (im) => { if (!im.complete) im.addEventListener('load', rebuild, { once: true }); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(rebuild);
  setTimeout(rebuild, 400); setTimeout(rebuild, 1600);
  sc.__inkRebuild = rebuild;
  if (!sc.__show) {
    let si = 0;
    sc.__show = setInterval(() => {
      const box = sc.querySelector('.bioShow'); if (!box) return;
      const ims = box.querySelectorAll('img'), ds = box.querySelectorAll('.dots i'); if (!ims.length) return;
      si = (si + 1) % ims.length; box.classList.add('run');
      ims.forEach((im, k) => im.classList.toggle('on', k === si)); ds.forEach((d, k) => d.classList.toggle('on', k === si));
    }, 3600);
  }
  if (!sc.__gt) {
    const g = sc.__gt = { x: 0, tx: 0, hover: false, last: 0 };
    sc.addEventListener('click', (e) => { const btn = e.target.closest && e.target.closest('.gBtn'); if (!btn) return; g.tx += btn.classList.contains('gPrev') ? 300 : -300; });
    sc.addEventListener('mouseover', (e) => { g.hover = !!(e.target.closest && e.target.closest('.gBox')); });
    const step = (now) => {
      const dt = g.last ? Math.min(64, now - g.last) : 16; g.last = now;
      const t = sc.querySelector('.gTrack'); const h = t ? t.scrollWidth / 2 : 0;
      if (h && !g.init && t.children.length > 6) { const k = t.children, m = Math.floor(k.length / 2); let off = 0; for (let j = m - 3; j < m; j++) off += k[j].offsetWidth; if (off > 0) { g.x = g.tx = -(h - off); g.init = true; } }
      if (h) {
        if (!g.hover) g.tx -= dt * 0.035;
        g.x += (g.tx - g.x) * 0.12;
        if (g.x < -h) { g.x += h; g.tx += h; } if (g.x > 0) { g.x -= h; g.tx -= h; }
        t.style.transform = 'translateX(' + g.x.toFixed(1) + 'px)';
      }
      const nv = sc.querySelector('.jump'); const jo = !!sc.__jOpen; if (nv && nv.classList.contains('open') !== jo) { nv.classList.toggle('open', jo); const b = nv.querySelector('.jBtn'); if (b) b.setAttribute('aria-expanded', jo ? 'true' : 'false'); }
      requestAnimationFrame(step);
    };
    sc.addEventListener('click', (e) => { const t = e.target; if (!t.closest) return; if (t.closest('.jBtn')) { sc.__jOpen = !sc.__jOpen; return; } if (t.closest('.jump a') || !t.closest('.jump')) sc.__jOpen = false; });
    requestAnimationFrame(step);
  }
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
    this.setJump = (el) => { if (el) spy(el); };
    this.setInk = (el) => { if (el) inkSetup(el); };
    this.state = { reelOpen: false, more: null, shot: null };
  }
  // ONGOING COACHING + MEMBERSHIP live in renderVals below as ongoing / member. ongoing.full: false hides the slots-full badge.
  renderVals() {
    const shots = [['@@A:images/headshot-window.jpg@@', '50% 12%'], ['@@A:images/headshot-oval.jpg@@', '50% 16%'], ['@@A:images/headshot-smile.jpg@@', '40% 30%']];
    const tagColors = { Workout: ['#E2508C', '#E2508C', '#F3E6EA'], Coaching: ['#4E1F45', '#4E1F45', '#F3E6EA'], 'Career coaching': ['#7A3A6E', '#7A3A6E', '#F3E6EA'], Workshop: ['#7A3A6E', '#7A3A6E', '#F3E6EA'] };
    const decorate = (x, kind, i) => {
      const s = shots[i % shots.length];
      const c = tagColors[x.type] || ['transparent', kind === 'g' ? '#F3E6EA' : 'var(--ink)', kind === 'g' ? '#F3E6EA' : 'var(--ink)'];
      const open = x.status === 'open' && !!x.href;
      const closedLabel = x.status === 'full' ? (x.fullLabel || 'Full right now · check back soon') : (x.status === 'soldout' ? 'Sold out · join the waitlist' : 'Dates coming soon');
      const icn = x.icon || ({ Lecture: 'book', Workout: 'wave', Workshop: 'gauge' })[x.type] || 'mic'; const dts = x.dates || []; const d = { ...x, ['ic_' + icn]: true, dates: dts, hasDates: dts.length > 0, hasNext: dts.length > 0, next: dts[0] || '', hasTag: kind === 'g', noteCls: x.status === 'full' || x.status === 'soldout' ? 'xNote xFull' : 'xNote', title: x.title || x.t, n: String(i + 1).padStart(2, '0'), img: x.img || s[0], pos: x.pos || s[1], hasLen: !!x.len, hasPrice: !!x.price, hasSeats: false, hasFreq: !!x.freq, hasBest: !!x.best, open, closed: !open, closedLabel, tagBg: c[0], tagLine: c[1], tagInk: c[2] };
      d.more = () => this.setState({ more: { ...d, tagInk: c[0] === 'transparent' ? 'var(--ink)' : c[2], tagLine: c[0] === 'transparent' ? 'var(--ink)' : c[1] } });
      return d;
    };
    return {
      setJump: this.setJump,
      setInk: this.setInk,
      copyLabel: this.state.copied ? 'Copied!' : 'Copy my email',
      copySGLabel: this.state.copiedSG ? 'Copied!' : 'Copy studio email',
      copySG: () => { sgCopy('scarygoodstudio@gmail.com'); this.setState({ copiedSG: true }); clearTimeout(this.sgt); this.sgt = setTimeout(() => this.setState({ copiedSG: false }), 2200); },
      copyEmail: () => { sgCopy('melissamedinavo@gmail.com'); this.setState({ copied: true }); clearTimeout(this.ct); this.ct = setTimeout(() => this.setState({ copied: false }), 2200); },
      reps: [
        { k: 'Union games', agency: 'SBV Talent', name: 'Michael Clifford', email: 'mclifford@sbvtalent.com' },
        { k: 'Indies & all other VO', agency: 'ACM Talent', name: 'Melanie Thomas', email: 'mthomas@acmtalent.com' },
        { k: 'International projects', agency: 'Voice Fox UK', name: 'Emily Dean', email: 'info@voicefox.co.uk' }
      ].map((p) => ({ ...p, copyLabel: this.state.copiedRep === p.email ? 'Copied!' : 'Copy email', copy: () => { sgCopy(p.email); this.setState({ copiedRep: p.email }); clearTimeout(this.rt); this.rt = setTimeout(() => this.setState({ copiedRep: null }), 2200); } })),
      scrollSib: (e) => { const t = e && (e.currentTarget || e.target); const btn = t && t.closest ? t.closest('button') : null; if (!btn) return; const box = btn.parentElement && btn.parentElement.nextElementSibling; if (box) box.scrollBy({ left: (btn.getAttribute('data-dir') === '-1' ? -1 : 1) * box.clientWidth * 0.85, behavior: 'smooth' }); },
      themeCls: ['light','dark'].includes(this.props.theme) ? this.props.theme : 'auto',
      hasReel: !!REEL_ID,
      noReel: !REEL_ID,
      reelBg: REEL_ID ? 'https://www.youtube-nocookie.com/embed/' + REEL_ID + '?autoplay=1&mute=1&loop=1&playlist=' + REEL_ID + '&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1' : null,
      reelPop: REEL_ID ? 'https://www.youtube-nocookie.com/embed/' + REEL_ID + '?autoplay=1&rel=0&modestbranding=1&playsinline=1' : null,
      reelOpen: !!this.state.reelOpen,
      openReel: () => this.setState({ reelOpen: true }),
      closeReel: () => this.setState({ reelOpen: false }),
      stop: (e) => { if (e && e.stopPropagation) e.stopPropagation(); },
      // OFFER PHOTOS: img = headshot link, pos = which part of the photo shows
      guide: [
        { k: 'Lecture', v: 'I teach, you take notes and ask questions.', bg: 'transparent', line: '#F3E6EA' },
        { k: 'Workout', v: 'Everyone reads real scripts and gets specific notes. This is doing, not teaching: no lecture, just feedback.', bg: '#E2508C', line: '#E2508C' },
        { k: 'Workshop', v: 'Both: a lecture, then a workout. Usually the longest.', bg: '#7A3A6E', line: '#7A3A6E' }
      ].map((g, i, all) => ({ ...g, rule: i < all.length - 1 ? '1px solid rgba(243,230,234,0.3)' : '0' })),
      ongoing: {"img": "@@A:images/headshot-smile.jpg@@", "full": true, "fullLabel": "Slots full · check back later", "lede": "One-on-one coaching. Deep, focused work that's also fun, with scripts I write myself to work out your acting chops.", "plans": [{"k": "Weekly", "v": "$100 / session"}, {"k": "Bi-weekly", "v": "$100 / session"}, {"k": "Monthly", "v": "$100 / session"}], "how": ["I teach voice acting the way I wish someone had taught me: generously, honestly, with depth, and with the reasons why. Simple advice often sounds the best, but nuance and a deep understanding of how this all works last the rest of your career.", "I work full-time on AAA games, commercials and more for clients in 23 countries, all from Minnesota. Sure, living in a hub like LA might make things easier (sort of), but there are always trade-offs, and remote voice acting didn't appear with Covid. It's been around a long time and isn't going anywhere, if my resume is any proof. What you need to work remotely is hard work, something unique to offer, and someone to help keep you sane.", "My coaching is best for actors already working and booking regularly. I make a “good” VA f*cking great. I love new talent, but between a full-time VO career and running a post-production studio, I rarely have the time beginners deserve, and the foundations shouldn't be rushed. If you need a coach who can take their time, my coaching referral list on the Scary Good site is a great place to start. I'm here for actors who are used to taking feedback and ready to run with it.", "I care a lot about the people I coach. I'm honest, I'm kind about it, and I'm in your corner the whole way. I don't puke sunshine and rainbows. You get specific feedback instead of “great job, next” or “that's not competitive, try again in six months,” and in this industry, that's rare."], "what": [{"k": "Sessions.", "v": "How they really run, and how to be the actor a director asks for again."}, {"k": "Markets.", "v": "Why the same read lands differently depending on the client and who's on the other side of the glass."}, {"k": "Commercial vs. character.", "v": "Where they split, how they're similar, and what that means for your style and rate."}, {"k": "How spots get made.", "v": "Once you know what a commercial is built to do, you stop guessing."}, {"k": "More you in the read.", "v": "Your timing, your sass, your instincts. It's what makes a take sound like a person, it's what books, and it's what I'm best at."}, {"k": "Script analysis.", "v": "My other specialty. When you truly understand what's happening around your character and trust your imagination, you stop performing emotions and start reacting honestly."}], "diff": [{"k": "Still in the booth", "v": "I'm booking games, animation, commercials and trailers right now, so what you learn is current."}, {"k": "Plain language", "v": "No word salad and no name-dropping. You get ideas you can remember and use mid-session."}, {"k": "Every genre", "v": "I work across nearly all of them, so I can show you how styles connect and where yours fits."}, {"k": "Honest and on your side", "v": "I'm analytical and direct, and I'm rooting for you every step. You'll always know what to try next."}], "whatIntro": "Workouts give you reps. Ongoing coaching gives you detailed feedback customized to you and only you, with your specific goals in mind, to get you where you want to go. That's the difference between coaching and workouts, workshops and the rest. I coach as much for the industry as I do for the skill, and for your mind and heart as much as your talent. Some of what we cover:", "whatOutro": "We meet over time because this is a habit you build. You'll leave with a method you can use on your own. Pats on the back are included too.", "didYouKnow": "Remote VO is decades older than Covid. By the early 2000s, Hal Douglas, one of the most famous movie trailer voices ever, was recording from a small studio on his farm in rural Virginia, sometimes in his pajamas.", "referralHref": "https://scarygood.studio", "waitHref": "mailto:melissamedinavo@gmail.com?subject=Coaching%20waitlist&body=Hi%20Melissa%2C%20please%20add%20me%20to%20the%20coaching%20waitlist.", "payNote": "Pay per session, no packages. Go weekly for a while, monthly when times are hard, or take a break when you need one. All of that is fine.", "still": "I don't always have openings, because my focus is on my own VO career. That's what keeps my coaching current: I've actually been where you're trying to go, which is what I hope you have from any coach."},
      promoHref: "mailto:melissamedinavo@gmail.com?subject=Mailing%20list&body=Hi%20Melissa%2C%20please%20add%20me%20to%20your%20mailing%20list.", // one signup form for everything
      member: withShots(this, {"show": false, "eyebrow": "New · monthly membership", "name": "Callback Club", "price": "$10", "per": "/ month", "cta": "Join the app waitlist", "href": "mailto:melissamedinavo@gmail.com?subject=Mailing%20list&body=Hi%20Melissa%2C%20please%20add%20me%20to%20your%20mailing%20list.", "perks": ["Full access to my VO web app, built for working actors", "First dibs on workshop seats before they open to everyone", "A live monthly Q&A with me, recorded if you can't make it", "New practice scripts added every month"], "story": "This is early days, so the price is low while I find out if anyone really wants it. If that's you, let me know you're interested.", "features": [{"t": "Audition tracker", "l": "Due dates, 7, 3 and 1-day reminders, submitted and booked toggles, and your booking rate."}, {"t": "Payments & invoices", "l": "Send invoices, track agency jobs with agent and manager cuts, and flag late payments at 45, 60 and 90 days."}, {"t": "Script library + the chaos button", "l": "Character and commercial sides to practice with. And the chaos button is back: one click, one random script, no overthinking."}, {"t": "Emotions wheel", "l": "80 emotions with how each one lives in your body and voice, and what's under the surface."}, {"t": "To-do lists", "l": "Sections, cards and subtasks for everything your career throws at you."}, {"t": "Focus timer", "l": "Sit down, start the clock, get the auditions out."}, {"t": "Journal", "l": "A private place to collect notes, wins and thoughts."}, {"t": "World clocks", "l": "Know what time it is for that studio in Tokyo before you reply."}], "storyTop": ["Honestly? I'm not sure anyone else will want this. One of my first real jobs was web design, building sites in Dreamweaver in high school, and I never stopped loving it. This app started as something I made for myself, because nothing like it existed and I was tired of handing Google all my stuff. I shared it with a few friends, and they loved it."], "libA": "It's built with love and lots and lots of help from free, public JavaScript, the kind of prebuilt scripts I used to find all over the web on sites like ", "libB": ", then modified by me to work (sorta). It's a web app, so it runs right in your browser on any device. There's nothing to download from an app store, and your data stays on your own device.", "shots": [{"src": "@@A:images/app-emo.webp@@", "alt": "Emotions wheel", "pos": "40% 50%"}, {"src": "@@A:images/app-aud.webp@@", "alt": "Audition tracker", "pos": "0% 30%"}, {"src": "@@A:images/app-todo.webp@@", "alt": "To-do board", "pos": "0% 50%"}, {"src": "@@A:images/app-home.webp@@", "alt": "World clocks and daily inspiration", "pos": "0% 0%"}]}),
      newHere: "New here? Start with a group class. It’s the easiest way to work with me while ongoing coaching is full.",
      faq: [{"q": "I'm new here. Where should I start?", "a": "A group class is the best way in. My ongoing coaching and consultations fill up, so classes and career “therapy” sessions are the easiest way to work with me."}, {"q": "Where do sessions happen?", "a": "Everything happens online over Google Meet. All times on this page are Central."}, {"q": "When do you coach?", "a": "Mostly evenings, Central time. I can sometimes do daytime sessions when needed. No weekends, unless we talk about an exception."}, {"q": "Do I need a fancy setup?", "a": "Nope. Some of my students practice on their phone in the backyard. Do what works for you. You do need to be able to read at full voice and yell when a script calls for it (commercial is the exception)."}, {"q": "Are sessions recorded?", "a": "I don't record sessions, but I encourage you to record yourself and your reads. Please don't record me, our screen, or my teaching materials, since those are copyrighted. If you need to record because of a disability, for assistive tech, just let me know and we'll make it work. No AI assistants or note-takers in workshops, workouts, lectures or coaching, please."}, {"q": "Do I have to buy a package?", "a": "In THIS economy?! No. Ongoing coaching is paid per session. Go weekly for a while, monthly when times are hard, or take a break when you need one."}, {"q": "What if I need to cancel?", "a": "Cancellations are fine up to 24 hours before your session. You can always reschedule a paid session through your confirmation link, so you don't lose it. Last-minute cancellations aren't refundable."}, {"q": "Do you ever offer discounts?", "a": "Yes! I send out 25% off promo codes for coaching pretty often. Join my mailing list so you don't miss them."}, {"q": "I'm a beginner. Can I still work with you?", "a": "I love new talent, but I rarely have the time beginners deserve, and the foundations shouldn't be rushed. Check my coaching referral list for great coaches who can take their time with you."}, {"q": "Do you ever turn down students?", "a": "Short answer: yes. Longer answer: sometimes I can tell we won't be a good fit, and I'm half of the equation. I reserve the right to decline coaching to anyone, no explanation needed."}],
      offers: oneOnOne().filter((o) => o.status !== 'hidden').map((o, i) => decorate(o, 'o', i)),
      groups: groupClasses().filter((w) => w.status !== 'hidden').map((w, i) => decorate(w, 'g', i)),
      hasShot: !!this.state.shot, testimonials: kindWords(), hasWords: kindWords().length > 0, shot: this.state.shot || {}, closeShot: () => this.setState({ shot: null }), hasMore: !!this.state.more, closeMore: () => this.setState({ more: null }), stop: (e) => { if (e && e.stopPropagation) e.stopPropagation(); },
      m: this.state.more || { paras: [] },
      ready: [
        { n: "i.", t: "You can take constructive feedback that isn’t glowing praise." },
        { n: "ii.", t: "You can own a mistake and try again." },
        { n: "iii.", t: "You have specific goals, and questions." },
        { n: "iv.", t: "You’re willing to go there emotionally and get vulnerable. You don’t grow until you admit there’s growing to do." },
        { n: "v.", t: "You’re already working in VO (indie counts), and you can record and send files from home." },
        { n: "vi.", t: "You’ll do the work between sessions and practice what we cover. You’re on your own in real sessions, so coaching is the place to get it wrong and learn." },
        { n: "vii.", t: "You want to build a career from wherever you live. What I teach works for everyone, and I’m especially good at coaching actors who work remotely." },
        { n: "viii.", t: "You want a practical, instinct-first approach. If you’re after a formal acting technique, I’ll happily point you to coaches who teach it." },
        { n: "ix.", t: "You’ll respect the time and the boundaries. Sessions start and end on time, and coaching happens in sessions, not in DMs or email." },
        { n: "x.", t: "You know career “therapy” isn’t therapy. I’m here to help you make a plan, not to replace a therapist." }
      ]
    };
  }
}

window.__hmBoot_contact(Component);


/* ========================================================================
   6. LINK CLEANER  (keeps every link a full, clean address)
   Page links become https://hearmelissa.com/#hire etc. (Home is just
   https://hearmelissa.com/). Jump-down-the-page links point at this
   page's full address and remember where to jump in data-jump, so
   nothing ever links to a bare #section or to hearmelissa.com/#.
   ======================================================================== */
(function () {
  const SITE = 'https://hearmelissa.com/', KEY = 'contact';
  const PAGES = ['home', 'hire', 'fans', 'coaching', 'contact'];
  const pageUrl = (k) => (k === 'home' ? SITE : SITE + '#' + k);
  const own = pageUrl(KEY);
  const clean = (root) => {
    root.querySelectorAll('a[href]').forEach((a) => {
      let h = a.getAttribute('href');
      if (a.dataset.hmClean === h) return;
      let hash = null;
      if (h === '' || h.charAt(0) === '#') hash = h.slice(1);
      else if (h.indexOf(SITE + '#') === 0) hash = h.slice(SITE.length + 1);
      else if (h === 'https://hearmelissa.com') h = SITE;
      if (hash !== null) {
        if (hash === '' || hash === 'home') h = SITE;
        else if (PAGES.indexOf(hash) > -1) h = pageUrl(hash);
        else if (hash.indexOf('#') > -1) { const pr = hash.split('#'); h = pageUrl(pr[0]); a.dataset.go = pr[1]; }
        else if (hash === 'bsky') { a.style.display = 'none'; h = own; a.dataset.jump = ''; }
        else { a.dataset.jump = hash; h = own; }
      }
      if (h !== a.getAttribute('href')) a.setAttribute('href', h);
      a.dataset.hmClean = h;
    });
  };
  // links to a spot on ANOTHER page: switch pages, then scroll to the spot
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('#hm-' + KEY + ' a[data-go]'); if (a) window.__hmGo = a.dataset.go;
  }, true);
  const goTo = (root) => {
    const id = window.__hmGo; if (!id || !root.getClientRects().length) return;
    const el = root.querySelector('#' + CSS.escape(id)); if (!el) return;
    window.__hmGo = null; setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 450);
  };
  const start = () => {
    const root = document.getElementById('hm-' + KEY); if (!root) return setTimeout(start, 200);
    setInterval(() => goTo(root), 250);
    clean(root);
    new MutationObserver(() => clean(root)).observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
  };
  start();
})();

})();
