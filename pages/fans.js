/*
========================================================================
  HEARMELISSA.COM  ·  FANS & PRESS PAGE  ·  ONE CARRD EMBED, THE WHOLE PAGE
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
    This file lives on GitHub: hearmelissa/pages/fans.js
    Carrd only has a tiny loader for it (in the "fans" section's Embed).
    So to change this page: edit THIS file on GitHub, commit, wait a
    few minutes, refresh the site. No need to touch Carrd at all.

  CARRD SETUP FOR THIS PAGE
    Carrd doesn't do real pages. It does SECTIONS: one site, and each
    "page" is a section that starts with a Section Break named "fans".
    Under that Section Break: one Embed > Type: Code > Style: Inline.
    Paste ALL of this into it. Full width, no padding.
    This page only wakes up when its section is open, so all five can
    live in the same Carrd site without stepping on each other.
    Mobile: nothing to swap. This code already rearranges itself for phones.
========================================================================
*/

(function () {
if (window.__hm_fans_loaded) return; window.__hm_fans_loaded = true;


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
#hm-fans{width:100vw !important;max-width:100vw !important;position:relative !important;left:50% !important;margin-left:-50vw !important;margin-right:0 !important}
html,body{overflow-x:hidden}
/* BIG SCREENS: everything scales up a bit on wide monitors so the
   content isn't a skinny strip in the middle. Bigger zoom = bigger page. */
@media (min-width:1600px){#hm-fans > div{zoom:1.15}}
@media (min-width:1850px){#hm-fans > div{zoom:1.3}}
@media (min-width:2100px){#hm-fans > div{zoom:1.45}}
@media (min-width:2400px){#hm-fans > div{zoom:1.65}}
@media (min-width:2800px){#hm-fans > div{zoom:1.9}}
/* NO INNER SCROLL BOX: the browser page scrolls, not a box inside it. */
#hm-fans .h2m,#hm-fans .inkScroll{height:auto !important;max-height:none !important;overflow:visible !important}

#hm-fans{margin:0;background:#F1E9DC}
#hm-fans img{-webkit-user-drag:none;user-drag:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;pointer-events:none}
#hm-fans a{color:inherit}#hm-fans a:hover{opacity:0.85}
#hm-fans .paper{background-color:#F1E9DC;background-image:url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.35  0 0 0 0 0.28  0 0 0 0 0.2  0 0 0 0.09 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),radial-gradient(ellipse 80% 60% at 20% 10%, rgba(255,252,246,0.7), rgba(255,252,246,0) 70%),radial-gradient(ellipse 70% 60% at 90% 90%, rgba(196,170,140,0.25), rgba(196,170,140,0) 70%)}
#hm-fans .thm{--t0:#F1E9DC;--t1:#4E1F45;--t2:#4E1F45;--t3:#17110F;--t4:rgba(23,17,15,0.25);--t5:rgba(23,17,15,0.6);--t6:rgba(241,233,220,0.46);--t7:rgba(241,233,220,0.33);--t8:rgba(241,233,220,0.55);--t9:rgba(241,233,220,1);--t10:rgba(23,17,15,0.5);--t11:rgba(23,17,15,0.2);--t12:#4E1F45;--t13:rgba(23,17,15,0.35);--t14:rgba(23,17,15,0.3);--t15:#4E3F3A;--t16:rgba(23,17,15,0.45);--t17:brightness(0);--t18:0.82;--t19:#5E4E48;--t20:#17110F;--t21:rgba(23,17,15,0.06);--t22:#F1E9DC;--t23:rgba(241,233,220,0.45);--t24:rgba(241,233,220,0.08);--badgeBg:#F1E9DC;--edge:rgba(196,160,98,0);--badgeSh:rgba(23,17,15,0.18);--disc:#17110F;--badgeInk:#17110F}
#hm-fans .thm.dark{--t0:#120D11;--t1:#EFE4DC;--t2:#C4A062;--t3:#EFE4DC;--t4:rgba(239,228,220,0.25);--t5:rgba(239,228,220,0.6);--t6:rgba(18,13,17,0.5);--t7:rgba(18,13,17,0.37);--t8:rgba(18,13,17,0.58);--t9:rgba(18,13,17,1);--t10:rgba(239,228,220,0.5);--t11:rgba(239,228,220,0.2);--t12:#D9A9CD;--t13:rgba(239,228,220,0.35);--t14:rgba(239,228,220,0.35);--t15:#D8CCD2;--t16:rgba(239,228,220,0.45);--t17:brightness(1.12);--t18:0.9;--t19:#A8979C;--t20:rgba(239,228,220,0.7);--t21:rgba(239,228,220,0.06);--t22:#17110F;--t23:rgba(23,17,15,0.4);--t24:rgba(23,17,15,0.07);--badgeBg:#1B1319;--edge:rgba(196,160,98,0.6);--badgeSh:rgba(0,0,0,0.45);--disc:#120D11;--badgeInk:#EFE4DC}
#hm-fans .thm .onD{display:none!important}
#hm-fans .thm.dark .onL{display:none!important}#hm-fans .thm.dark .onD{display:block!important}
#hm-fans .thm.dark{background-color:#120D11;background-image:url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.85  0 0 0 0 0.9  0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),radial-gradient(ellipse 80% 60% at 20% 10%, rgba(78,31,69,0.35), rgba(78,31,69,0) 70%),radial-gradient(ellipse 70% 60% at 90% 90%, rgba(58,22,52,0.4), rgba(58,22,52,0) 70%)}
@media (prefers-color-scheme: dark){
#hm-fans{background:#120D11}
#hm-fans .thm.auto{--t0:#120D11;--t1:#EFE4DC;--t2:#C4A062;--t3:#EFE4DC;--t4:rgba(239,228,220,0.25);--t5:rgba(239,228,220,0.6);--t6:rgba(18,13,17,0.5);--t7:rgba(18,13,17,0.37);--t8:rgba(18,13,17,0.58);--t9:rgba(18,13,17,1);--t10:rgba(239,228,220,0.5);--t11:rgba(239,228,220,0.2);--t12:#D9A9CD;--t13:rgba(239,228,220,0.35);--t14:rgba(239,228,220,0.35);--t15:#D8CCD2;--t16:rgba(239,228,220,0.45);--t17:brightness(1.12);--t18:0.9;--t19:#A8979C;--t20:rgba(239,228,220,0.7);--t21:rgba(239,228,220,0.06);--t22:#17110F;--t23:rgba(23,17,15,0.4);--t24:rgba(23,17,15,0.07);--badgeBg:#1B1319;--edge:rgba(196,160,98,0.6);--badgeSh:rgba(0,0,0,0.45);--disc:#120D11;--badgeInk:#EFE4DC}
#hm-fans .thm.auto .onL{display:none!important}#hm-fans .thm.auto .onD{display:block!important}
#hm-fans .thm.auto{background-color:#120D11;background-image:url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.85  0 0 0 0 0.9  0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),radial-gradient(ellipse 80% 60% at 20% 10%, rgba(78,31,69,0.35), rgba(78,31,69,0) 70%),radial-gradient(ellipse 70% 60% at 90% 90%, rgba(58,22,52,0.4), rgba(58,22,52,0) 70%)}
}
#hm-fans .fr{font-family:'Fraunces',Georgia,serif;font-variation-settings:'SOFT' 100,'WONK' 0;font-optical-sizing:auto}
#hm-fans .fri{font-family:'Fraunces',Georgia,serif;font-style:italic;font-variation-settings:'SOFT' 100,'WONK' 1;font-optical-sizing:auto}
#hm-fans .tile{transition:transform .5s ease}
#hm-fans .tile:hover{transform:translateY(-5px)}
#hm-fans .tile:hover .go{transform:translateX(6px)}
#hm-fans .go{transition:transform .4s ease}
#hm-fans .nv{position:relative;display:inline-block;height:24px;overflow:hidden;text-decoration:none;padding:0 2px}
#hm-fans .nv span{display:block;height:24px;line-height:24px;transition:transform .5s cubic-bezier(.2,.75,.2,1);text-align:center}
#hm-fans .nv .b{position:absolute;left:0;right:0;top:100%;font-family:'Fraunces',Georgia,serif;font-style:italic;font-variation-settings:'SOFT' 100,'WONK' 1;font-size:20px;letter-spacing:0;text-transform:none;color:var(--t1)}
#hm-fans .nv::after{content:'';position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--t2);transform:scaleX(0);transition:transform .5s cubic-bezier(.2,.75,.2,1)}
#hm-fans .nv:hover span,#hm-fans .nv:focus-visible span{transform:translateY(-100%)}
#hm-fans .nv:hover::after,#hm-fans .nv:focus-visible::after{transform:scaleX(1)}
#hm-fans .nv:hover,#hm-fans .nv:focus-visible{opacity:1;outline:none}
#hm-fans .mq{position:relative;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
#hm-fans .mqTrack{display:flex;align-items:center;width:max-content;animation:mq 60s linear infinite}
#hm-fans .mq:hover .mqTrack{animation-play-state:paused}
@keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes spinSlow{to{transform:rotate(360deg)}}
#hm-fans .badge{animation:spinSlow 22s linear infinite}
#hm-fans .reelBtn:hover .badge{animation-duration:6s}
@media (prefers-reduced-motion: reduce){#hm-fans .mqTrack,#hm-fans .badge,#hm-fans .nv span,#hm-fans .nv::after{animation:none;transition:none}}
@media (max-width: 760px){#hm-fans .bgReel{display:none}}
@media (max-width: 980px){
#hm-fans .mHero{grid-template-columns:minmax(0,1fr)!important;gap:56px!important;padding:40px 24px 20px!important;justify-items:center}
#hm-fans .mRight{height:auto!important;width:100%;max-width:420px;display:flex!important;flex-direction:column;align-items:center;gap:34px}
#hm-fans .mCircle,#hm-fans .mWords,#hm-fans .mGlobe{position:relative!important;left:auto!important;right:auto!important;top:auto!important}
#hm-fans .mWords{width:100%!important;max-width:320px}
#hm-fans .mGlobe{margin-bottom:110px}
#hm-fans .mDoors{grid-template-columns:minmax(0,1fr)!important}
}
@media (max-width: 640px){
#hm-fans .mHdr{grid-template-columns:auto 1fr!important;row-gap:10px;padding:12px 20px!important}
#hm-fans .mNav{grid-column:1 / -1;grid-row:2;justify-content:center;gap:22px!important;font-size:10px!important;letter-spacing:0.2em!important}
#hm-fans .mFig{width:min(300px,74vw)!important;height:min(430px,106vw)!important}
#hm-fans .mBadge{transform:scale(0.78);transform-origin:100% 100%;right:-26px!important;bottom:30px!important}
#hm-fans .mCircle{width:280px!important;height:280px!important}
#hm-fans .mCircle .fr,#hm-fans .mCircle .fri{font-size:60px!important}
#hm-fans .mGlobe{width:250px!important;height:250px!important}
#hm-fans .mPill{white-space:normal!important;width:max-content;max-width:80vw;text-align:center}
#hm-fans .mGlad{padding:40px 22px 6px!important}
#hm-fans .mH2{font-size:36px!important}
#hm-fans .mLede{font-size:18px!important}
#hm-fans .mDoorsS{padding:0 18px 48px!important}
#hm-fans .mDoor{height:110px!important;padding:0 22px 0 16px!important}
#hm-fans .mDoor > span > .fri{font-size:30px!important}
#hm-fans .mFoot{grid-template-columns:minmax(0,1fr)!important;justify-items:center;text-align:center;padding:24px 20px!important}
}

/* ---- PAGE COLORS: light first, dark below ---- */
#hm-fans .thm{--bg:#F1E9DC;--ink:#17110F;--mute:#6A5A54;--soft:#3B302C;--acc:#4E1F45;--rgb:23,17,15;--panel:#E9DFCF;--panel2:#DCCDB8}
#hm-fans .thm.dark{--bg:#120D11;--ink:#EFE4DC;--mute:#A8979C;--soft:#D8CCD2;--acc:#D9A9CD;--rgb:239,228,220;--panel:#1B1319;--panel2:#2A1E27}
@media (prefers-color-scheme: dark){#hm-fans .thm.auto{--bg:#120D11;--ink:#EFE4DC;--mute:#A8979C;--soft:#D8CCD2;--acc:#D9A9CD;--rgb:239,228,220;--panel:#1B1319;--panel2:#2A1E27}}
#hm-fans .thm{font-variation-settings:'SOFT' 100,'WONK' 1}
#hm-fans .fcard{transition:transform .5s ease}
#hm-fans .fcard:hover{transform:translateY(-6px)}

/* ---- PHONES + TABLETS ---- */
@media (max-width: 980px){
#hm-fans .thm section{padding-left:24px!important;padding-right:24px!important}
#hm-fans .fAbout,#hm-fans .fTwo{grid-template-columns:minmax(0,1fr)!important}
#hm-fans .fAbout{padding:0!important}
#hm-fans .fAboutArt{min-height:560px}
#hm-fans .fAboutText{padding:48px 24px 40px!important}
#hm-fans .fTwo > div{border-right:0!important;padding-left:0!important;padding-right:0!important}
#hm-fans .fChars{grid-template-columns:repeat(3,minmax(0,1fr))!important;margin:28px 0 0!important}
#hm-fans .fCharsHd{margin:0!important}
#hm-fans .fTalks{grid-template-columns:minmax(0,1fr)!important}
#hm-fans .fTalks > div{border-right:0!important;padding:26px 0!important;border-bottom:1px solid rgba(var(--rgb),0.2)}
#hm-fans .fPrints{padding:10px 0 40px!important}
}
@media (max-width: 640px){
#hm-fans .thm section{padding-left:18px!important;padding-right:18px!important}
#hm-fans .fAbout{padding:0!important}
#hm-fans .thm h2{font-size:42px!important}
#hm-fans .fCols{columns:1!important;text-align:left!important}
#hm-fans .fChars{grid-template-columns:repeat(2,minmax(0,1fr))!important}
#hm-fans .fGhost{font-size:120px!important}
#hm-fans .hSub{gap:8px 18px!important;font-size:9.5px!important}
}
#hm-fans .slide{transition:opacity .8s ease, transform 1.2s ease}
#hm-fans .thumb{transition:opacity .3s ease}#hm-fans .thumb:hover{opacity:1 !important}
@media (max-width: 980px){#hm-fans .fHello,#hm-fans .fRoleBox{grid-template-columns:minmax(0,1fr)!important}#hm-fans .fRoleSide{border-left:0!important;border-top:1px solid rgba(var(--rgb),0.2)}#hm-fans .fThumbs{grid-template-columns:repeat(4,minmax(0,1fr))!important}}
@media (max-width: 640px){#hm-fans .fHello{padding:56px 20px 40px!important}#hm-fans .fHello h1{font-size:58px!important}#hm-fans .fRoleName{font-size:34px!important}}
@media (prefers-reduced-motion: reduce){#hm-fans .slide{transition:none}}
#hm-fans .ctabs button{transition:color .25s ease,border-color .25s ease}#hm-fans .ctabs button:hover{color:var(--ink)!important;border-color:var(--acc)!important}
@media (max-width: 980px){#hm-fans .fCards{grid-template-columns:repeat(2,minmax(0,1fr))!important}#hm-fans .fTalks{grid-template-columns:minmax(0,1fr)!important}#hm-fans .hSplit,#hm-fans .hTwoVid{grid-template-columns:minmax(0,1fr)!important}#hm-fans .hShows{grid-template-columns:repeat(2,minmax(0,1fr))!important}#hm-fans .hEps{grid-template-columns:minmax(0,1fr)!important}}
#hm-fans .nv[aria-current="page"] span{transform:translateY(-100%)}
#hm-fans .nv[aria-current="page"]::after{transform:scaleX(1);height:2px}
#hm-fans .nv[aria-current="page"] .b{color:var(--t2)}
#hm-fans .jump a{position:relative;z-index:0;padding:8px 14px!important;border:0!important;border-radius:999px;text-decoration:none;transition:color .35s ease}
#hm-fans .jump a::before{content:'';position:absolute;inset:0;z-index:-1;border-radius:999px;background:rgba(243,230,234,0.16);transform:scaleX(0);transform-origin:left center;transition:transform .45s cubic-bezier(.2,.75,.2,1),background-color .35s ease}
#hm-fans .jump a:hover::before,#hm-fans .jump a:focus-visible::before{transform:scaleX(1)}
#hm-fans .jump a.on{color:#4E1F45!important}
#hm-fans .jump a.on::before{background:#F3E6EA;transform:scaleX(1)}
#hm-fans .jump .jPage{display:inline-flex;align-items:center;gap:10px;margin-right:14px;padding-right:18px;border-right:1px solid rgba(243,230,234,0.35);font-family:'Fraunces',Georgia,serif;font-style:italic;font-size:21px;letter-spacing:0;text-transform:none;color:#E7BEDB}
#hm-fans .jump .jPage i{display:block;width:7px;height:7px;background:#E2508C;transform:rotate(45deg)}
@media (max-width: 760px){#hm-fans .jump .jPage{display:none}}
@media (prefers-reduced-motion: reduce){#hm-fans .jump a,#hm-fans .jump a::before{transition:none}}
#hm-fans .thm section[id]{scroll-margin-top:72px}
#hm-fans .pTab{transition:background-color .3s ease,color .3s ease,border-color .3s ease}#hm-fans .pTab:hover{border-color:var(--acc)!important}
#hm-fans .pBuy{transition:background-color .3s ease,color .3s ease}#hm-fans .pBuy:hover{background:var(--ink);color:var(--bg);opacity:1}#hm-fans .pBuy:hover span{color:inherit!important}
@media (max-width: 980px){#hm-fans .fMore{grid-template-columns:repeat(2,minmax(0,1fr))!important}#hm-fans .fPrints{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
@media (max-width: 640px){#hm-fans .fMore,#hm-fans .fPrints{grid-template-columns:minmax(0,1fr)!important}}
#hm-fans .pRow{transition:background-color .3s ease}#hm-fans .pRow:hover{background:rgba(var(--rgb),0.06);opacity:1}#hm-fans .pRow .pGo{transition:background-color .3s ease,color .3s ease}#hm-fans .pRow:hover .pGo{background:var(--ink);color:var(--bg)}#hm-fans .pRow .pShape{transition:background-color .3s ease}#hm-fans .pRow:hover .pShape{background:var(--acc)}
@media (max-width: 980px){#hm-fans .fOrg{grid-template-columns:minmax(0,1fr)!important}#hm-fans .fPrint{grid-template-columns:minmax(0,1fr)!important}}
#hm-fans .nv:hover span,#hm-fans .nv:focus-visible span,#hm-fans .nv[aria-current="page"] span{transform:none!important}
#hm-fans .nv .a{transition:color .35s ease}
#hm-fans .nv:hover .a,#hm-fans .nv:focus-visible .a,#hm-fans .nv[aria-current="page"] .a{color:var(--t2)}
#hm-fans .jump .jPage{font-family:'Jost',sans-serif!important;font-style:normal!important;font-weight:500;font-size:11.5px!important;letter-spacing:0.24em!important;text-transform:uppercase!important}
/* PHONES ONLY: More characters in 3 rows that scroll sideways, with arrows */
#hm-fans .fScrollNav{display:none}
@media (max-width: 640px){
#hm-fans .fScrollNav{display:flex;justify-content:flex-end;gap:6px;margin:14px 0 0}
#hm-fans .fScrollNav button{width:34px;height:34px;padding:0;border-radius:50%;border:1px solid rgba(var(--rgb),0.4);background:transparent;color:var(--ink);font-size:15px;cursor:pointer}
#hm-fans .fScrollNav button:active{background:#B3242F;border-color:#B3242F}
#hm-fans .thm .fMore{grid-template-columns:none!important;grid-template-rows:repeat(3,auto);grid-auto-flow:column;grid-auto-columns:80%;column-gap:20px!important;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}
#hm-fans .thm .fMore::-webkit-scrollbar{display:none}
#hm-fans .thm .fMore > li{scroll-snap-align:start}
}
@font-face{font-family:'Margita';src:url(@@A:fonts/Margita.woff2@@) format('woff2');font-display:swap}
@font-face{font-family:'AnaTwo';src:url(@@A:fonts/AnaTwo.woff2@@) format('woff2');font-display:swap}
@font-face{font-family:'Oldtown';src:url(@@A:fonts/Oldtown.woff2@@) format('woff2');font-display:swap}
@font-face{font-family:'Arlysse';src:url(@@A:fonts/Arlysse.woff2@@) format('woff2');font-display:swap}
#hm-fans{background:#121013}
#hm-fans .inkScroll{height:900px;overflow-y:auto;overflow-x:hidden;background:#121013;position:relative}
/* ===== INK: dark desk, ivory type, one lipstick red ===== */
#hm-fans .ink.ink.thm,#hm-fans .ink.ink.thm.dark,#hm-fans .ink.ink.thm.auto{--t0:#121013;--t1:#EEEAE2;--t2:#B8232F;--t3:#EEEAE2;--t4:rgba(238,234,226,0.12);--t5:rgba(238,234,226,0.6);--t6:rgba(18,16,19,0.5);--t7:rgba(18,16,19,0.37);--t8:rgba(18,16,19,0.58);--t9:#121013;--t10:rgba(238,234,226,0.45);--t11:rgba(238,234,226,0.14);--t12:#B8232F;--t13:rgba(238,234,226,0.3);--t14:rgba(238,234,226,0.3);--t15:#D8D2C8;--t16:rgba(238,234,226,0.45);--t17:brightness(0) invert(1);--t18:0.6;--t19:rgba(238,234,226,0.6);--t20:rgba(238,234,226,0.75);--t21:rgba(238,234,226,0.05);--t22:#121013;--t23:rgba(238,234,226,0.3);--t24:rgba(238,234,226,0.05);--badgeBg:#121013;--edge:transparent;--badgeSh:transparent;--disc:#121013;--badgeInk:#EEEAE2;--ink:#EEEAE2;--bg:#121013;--rgb:238,234,226;--panel:transparent;--soft:rgba(238,234,226,0.62);--acc:#B8232F;--red:#B8232F;background:#121013!important;background-image:none!important;color:#EEEAE2!important;font-family:'Oldtown','Courier New',monospace!important}
#hm-fans .ink.ink .onL{display:none!important}#hm-fans .ink.ink .onD{display:block!important}
/* type: typewriter everywhere, script for titles, red hand for the flavour */
#hm-fans .ink.ink [style*="Fraunces"],#hm-fans .ink.ink [style*="Jost"]{font-family:'Oldtown','Courier New',monospace!important;font-style:normal!important;font-weight:400!important}
#hm-fans .ink.ink [style*="Fraunces"][style*="italic"]{font-family:'AnaTwo',cursive!important;color:#B8232F!important;letter-spacing:0!important;text-transform:none!important}
#hm-fans .ink.ink [style*="Jost"]{letter-spacing:0.08em!important}
#hm-fans .ink.ink h2,#hm-fans .ink.ink h2[style]{font-family:'Margita',cursive!important;font-style:normal!important;font-weight:400!important;text-transform:none!important;letter-spacing:0!important;font-size:64px!important;line-height:1.15!important;color:#EEEAE2!important;-webkit-text-stroke:0.6px currentColor}
#hm-fans .ink.ink h2::after{display:none!important}
#hm-fans .ink.ink h3,#hm-fans .ink.ink h3[style]{font-family:'AnaTwo',cursive!important;font-style:normal!important;font-weight:400!important;text-transform:none!important;letter-spacing:0!important;color:#B8232F!important}
#hm-fans .ink.ink p,#hm-fans .ink.ink li{line-height:1.7}
/* every section after the reel is a white screenplay page on the dark desk */
#hm-fans .ink.ink section:not(#reel),#hm-fans .ink.ink section:not(#reel)[style]{--ink:#1C1B1B;--rgb:28,27,27;--soft:rgba(28,27,27,0.72);--t3:#1C1B1B;--t4:rgba(28,27,27,0.16);--t5:rgba(28,27,27,0.6);--t10:rgba(28,27,27,0.5);--t11:rgba(28,27,27,0.16);--t13:rgba(28,27,27,0.3);--t14:rgba(28,27,27,0.3);--t15:#3A3634;--t16:rgba(28,27,27,0.45);--t17:brightness(0);--t18:0.68;--t19:rgba(28,27,27,0.6);--t20:rgba(28,27,27,0.75);--t21:rgba(28,27,27,0.04);--t23:rgba(28,27,27,0.3);--t24:rgba(28,27,27,0.04);--badgeInk:#1C1B1B;--logoF:brightness(0);--logoO:0.7;
  position:relative;box-sizing:border-box;width:1000px;max-width:calc(100% - 48px);margin:0 auto 64px!important;padding:84px 110px 90px 120px!important;background:#F7F6F2!important;color:#1C1B1B!important;box-shadow:0 28px 50px -28px rgba(0,0,0,0.85),0 2px 0 rgba(0,0,0,0.06)!important;counter-increment:pg}
#hm-fans .ink.ink section:not(#reel):nth-of-type(odd){transform:rotate(-0.3deg)}
#hm-fans .ink.ink section:not(#reel):nth-of-type(even){transform:rotate(0.25deg)}
#hm-fans .ink.ink section:not(#reel)::before{content:counter(pg) '.';position:absolute;right:56px;top:38px;font-family:'Oldtown',monospace;font-size:16px;color:#1C1B1B}
#hm-fans .ink.ink{counter-reset:pg}
#hm-fans .ink.ink section:not(#reel) h2,#hm-fans .ink.ink section:not(#reel) h2[style]{color:#1C1B1B!important}
#hm-fans .ink.ink section:not(#reel) .slug{color:#1C1B1B}
#hm-fans .ink.ink section:not(#reel) .trans{color:#1C1B1B;margin-top:34px}
#hm-fans .ink.ink section:not(#reel) [style*="color: #F3E6EA"],#hm-fans .ink.ink section:not(#reel) [style*="color: rgb(243, 230, 234)"],#hm-fans .ink.ink section:not(#reel) [style*="color: var(--t3)"],#hm-fans .ink.ink section:not(#reel) [style*="color: var(--ink)"]{color:#1C1B1B!important}
#hm-fans .ink.ink section:not(#reel) [style*="color: rgba(243, 230, 234"],.ink.ink section:not(#reel) [style*="color: rgba(243,230,234"]{color:rgba(28,27,27,0.68)!important}
#hm-fans .ink.ink .mFoot [style*="italic"]{font-family:'Margita',cursive!important;font-style:normal!important;font-size:34px!important;color:#B8232F!important}
#hm-fans .ink.ink section:not(#reel) a[style*="min-height"][style*="Jost"],#hm-fans .ink.ink section:not(#reel) button[style*="min-height"][style*="Jost"]{color:#1C1B1B!important}
#hm-fans .ink.ink #audiodramas img,#hm-fans .ink.ink #audiobooks img{background:#fff}
/* taped stills: role art, studio photo, show and book covers get white borders and tape */
#hm-fans .ink.ink .hRoleBox > div:first-child,#hm-fans .ink.ink .hStudio img,#hm-fans .ink.ink #audiodramas img,#hm-fans .ink.ink #music img{box-shadow:0 10px 22px -12px rgba(0,0,0,0.5)}
#hm-fans .ink.ink .hRoleBox > div:first-child{border:10px solid #fff!important;border-bottom-width:14px!important;transform:rotate(-0.8deg)}
#hm-fans .ink.ink .hRoleBox > div:first-child::before{content:'';position:absolute;left:50%;top:-22px;z-index:5;width:110px;height:30px;margin-left:-55px;background:rgba(226,221,203,0.85);transform:rotate(-3deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-fans .ink.ink .coffee{position:absolute;width:260px;height:260px;background:url(@@A:images/coffee.png@@) center/contain no-repeat;mix-blend-mode:multiply;opacity:0.85;pointer-events:none;z-index:0}
#hm-fans .ink.ink .mnote{position:absolute;font-family:'AnaTwo',cursive;color:#B8232F;font-size:30px;line-height:1.05;white-space:nowrap;transform:rotate(-5deg);pointer-events:none;z-index:3}
/* page one: the big line runs full width, with room for the waveform under it */
#hm-fans .ink.ink section.hSplit{grid-template-columns:minmax(0,1fr)!important;gap:30px!important}
#hm-fans .ink.ink.ink .hLede[style]{margin-bottom:110px!important;color:#1C1B1B!important}
/* page one dialogue block, screenplay style */
#hm-fans .ink.ink .dlg2{margin:0 0 10px 150px;max-width:460px}
#hm-fans .ink.ink .dlg2 .cue{margin:0;padding-left:120px;font-size:17px;letter-spacing:0.06em}
#hm-fans .ink.ink .dlg2 .par{margin:0;padding-left:96px;font-size:15px;color:rgba(28,27,27,0.6)}
#hm-fans .ink.ink .dlg2 .line{margin:6px 0 0;font-size:18px;line-height:1.7}
@media (max-width:640px){#hm-fans .ink.ink .dlg2{margin-left:0}#hm-fans .ink.ink .dlg2 .cue{padding-left:90px}#hm-fans .ink.ink .dlg2 .par{padding-left:70px}}
/* (old desk rules below stay for the bar, reel and footer) */
#hm-fans .ink.ink section,#hm-fans .ink.ink section[style]{background:transparent!important;background-image:none!important;color:#EEEAE2!important;box-shadow:none!important}
#hm-fans .ink.ink [style*="background: var(--panel)"],#hm-fans .ink.ink [style*="background: #4E1F45"],#hm-fans .ink.ink [style*="background: rgb(78, 31, 69)"],#hm-fans .ink.ink [style*="background: rgba(243, 230, 234"],.ink.ink [style*="background: rgba(243,230,234"],.ink.ink [style*="background: var(--t21)"],.ink.ink [style*="background: var(--t24)"]{background:transparent!important}
#hm-fans .ink.ink [style*="border: 1px solid"],#hm-fans .ink.ink [style*="border-top: 1px solid"],#hm-fans .ink.ink [style*="border-bottom: 1px solid"],#hm-fans .ink.ink [style*="border-left: 1px solid"]{border-color:rgba(238,234,226,0.11)!important}
#hm-fans .ink.ink [style*="box-shadow"]{box-shadow:none!important}
#hm-fans .ink.ink [style*="color: #F3E6EA"],#hm-fans .ink.ink [style*="color: rgb(243, 230, 234)"],#hm-fans .ink.ink [style*="color: var(--t3)"]{color:#EEEAE2!important}
#hm-fans .ink.ink [style*="color: #E7BEDB"],#hm-fans .ink.ink [style*="color: #D9A9CD"],#hm-fans .ink.ink [style*="color: rgb(231, 190, 219)"],#hm-fans .ink.ink [style*="color: rgb(217, 169, 205)"],#hm-fans .ink.ink [style*="color: #E2508C"],#hm-fans .ink.ink [style*="color: rgb(226, 80, 140)"],#hm-fans .ink.ink [style*="color: #E0263B"],#hm-fans .ink.ink [style*="color: rgb(224, 38, 59)"],#hm-fans .ink.ink [style*="color: var(--t2)"],#hm-fans .ink.ink [style*="color: var(--acc)"],#hm-fans .ink.ink [style*="color: var(--t12)"]{color:#B8232F!important}
/* buttons: no filled slabs; typed caps with a red underline */
#hm-fans .ink.ink button[style*="background: var(--ink)"],#hm-fans .ink.ink a[style*="background: var(--ink)"],#hm-fans .ink.ink button[style*="background: var(--t3)"],#hm-fans .ink.ink a[style*="background: var(--t3)"],#hm-fans .ink.ink button[style*="background: #F3E6EA"],#hm-fans .ink.ink a[style*="background: #F3E6EA"],#hm-fans .ink.ink button[style*="background: rgb(243, 230, 234)"],#hm-fans .ink.ink a[style*="background: rgb(243, 230, 234)"]{background:transparent!important;color:#EEEAE2!important;border:0!important;border-bottom:2px solid #B8232F!important;border-radius:0!important;padding-left:0!important;padding-right:0!important}
#hm-fans .ink.ink button[style*="background: var(--ink)"]:hover,#hm-fans .ink.ink a[style*="background: var(--ink)"]:hover{color:#B8232F!important}
/* top bar: logo only on the left, typed links, red circle on hover */
#hm-fans .ink.ink .mHdr{border-bottom:0!important;padding:14px 44px!important;background:#121013}
#hm-fans .ink.ink .mNav{gap:30px!important;font-size:13px!important;letter-spacing:0.1em!important}
#hm-fans .ink.ink .nv .b{display:none!important}
#hm-fans .ink.ink .nv span{transform:none!important}
#hm-fans .ink.ink .nv{position:relative;display:inline-block;transition:transform .35s cubic-bezier(.2,.7,.2,1),letter-spacing .35s cubic-bezier(.2,.7,.2,1)}
#hm-fans .ink.ink .nv:hover{transform:translateY(-2px);letter-spacing:0.14em}
#hm-fans .ink.ink .nv::after{display:none!important}
#hm-fans .ink.ink .nv svg.circ{position:absolute;left:-14px;top:-9px;width:calc(100% + 28px);height:calc(100% + 18px);overflow:visible;pointer-events:none;clip-path:inset(0 100% 0 0);transition:clip-path .5s ease}
#hm-fans .ink.ink .nv svg.circ path{fill:none;stroke:#B8232F;stroke-width:1.8;stroke-linecap:round}
#hm-fans .ink.ink .nv:hover svg.circ,#hm-fans .ink.ink .nv[aria-current="page"] svg.circ{clip-path:inset(0 0 0 0)}
/* sticky on-this-page bar: typed, red underline for the current section */
#hm-fans .ink.ink .jump{background:rgba(18,16,19,0.94)!important;border-top:1px solid rgba(238,234,226,0.08)!important;border-bottom:1px solid rgba(238,234,226,0.08)!important;color:#EEEAE2!important}
#hm-fans .ink.ink .jump a{font-family:'Oldtown',monospace!important;color:rgba(238,234,226,0.7)!important;letter-spacing:0.08em!important}
#hm-fans .ink.ink .jump a::before{background:transparent!important;border-bottom:2px solid #B8232F;border-radius:0!important;inset:auto 14px 2px 14px!important;height:0}
#hm-fans .ink.ink .jump a.on{color:#EEEAE2!important}
#hm-fans .ink.ink .jump .jPage{display:none!important}
/* the reel: keep the frame, quiet the overlay type */
#hm-fans .ink.ink .hReelWord{font-family:'Arlysse',sans-serif!important;font-style:normal!important;text-transform:uppercase!important;letter-spacing:0.01em!important;font-size:min(220px,17vw)!important;bottom:-0.18em!important;color:#EEEAE2!important;opacity:0.92}
#hm-fans .ink.ink.ink .hLede[style]{font-family:'Margita',cursive!important;color:#EEEAE2!important;font-size:46px!important;line-height:1.2!important;-webkit-text-stroke:0.5px currentColor}
#hm-fans .ink.ink.ink .hLede span{color:#B8232F!important;font-family:inherit!important}
/* every typed button: no slab, no pill, just caps with a red underline */
#hm-fans .ink.ink a[style*="min-height"][style*="Jost"],#hm-fans .ink.ink button[style*="min-height"][style*="Jost"]{background:transparent!important;color:#EEEAE2!important;border:0!important;border-bottom:2px solid #B8232F!important;border-radius:0!important;padding:0 2px!important;min-height:34px!important;box-shadow:none!important}
#hm-fans .ink.ink a[style*="min-height"][style*="Jost"]:hover,#hm-fans .ink.ink button[style*="min-height"][style*="Jost"]:hover{color:#B8232F!important}
#hm-fans .ink.ink a[style*="min-height"][style*="Jost"] svg,#hm-fans .ink.ink button[style*="min-height"][style*="Jost"] svg{color:#B8232F}
/* the cross-sell becomes a script page note, not a box */
#hm-fans .ink.ink a[href*="scarygood"][style*="border"]{border:0!important;border-top:1px solid rgba(238,234,226,0.11)!important;border-bottom:1px solid rgba(238,234,226,0.11)!important;padding:34px 0!important}
#hm-fans .ink.ink a[href*="scarygood"] [style*="italic"]{font-family:'Margita',cursive!important;color:#EEEAE2!important;font-style:normal!important;font-size:58px!important}
/* screenplay scene headings and transitions */
#hm-fans .ink.ink section[id]{position:relative}
#hm-fans .ink.ink .slug{display:block;margin:0 0 6px;font-family:'Oldtown',monospace;font-size:14px;letter-spacing:0.08em;color:rgba(238,234,226,0.6);text-transform:uppercase}
#hm-fans .ink.ink .trans{display:block;margin:18px 0 0;text-align:right;font-family:'Oldtown',monospace;font-size:14px;letter-spacing:0.08em;color:rgba(238,234,226,0.55)}
/* footer */
#hm-fans .ink.ink .mFoot{border-top:1px solid rgba(238,234,226,0.11)!important;font-family:'Oldtown',monospace!important}
/* the red line + reveal */
#hm-fans .inkLine{position:absolute;left:0;top:0;pointer-events:none;z-index:40;overflow:visible}
#hm-fans .inkLine path{fill:none;stroke:#B8232F;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
#hm-fans .inkLine .wf{fill:#B8232F;stroke:none}
#hm-fans .inkDot{position:absolute;left:0;top:0;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#B8232F;z-index:41;pointer-events:none}
#hm-fans .ink.armed .rv{opacity:calc(0.35 + 0.65 * var(--q,1));transition:none}
@media (max-width:640px){#hm-fans .ink.ink section:not(#reel),#hm-fans .ink.ink section:not(#reel)[style]{width:auto;max-width:none;margin:0 10px 34px!important;padding:46px 20px 40px!important}#hm-fans .ink.ink section:not(#reel)::before{right:18px;top:16px;font-size:12px}#hm-fans .ink.ink.ink .hLede[style]{font-size:32px!important;margin-bottom:80px!important}#hm-fans .ink.ink .mnote{display:none}#hm-fans .ink.ink .coffee{width:150px;height:150px}#hm-fans .inkScroll{height:844px}#hm-fans .ink.ink h2,#hm-fans .ink.ink h2[style]{font-size:46px!important}#hm-fans .ink.ink .mHdr{padding:12px 18px!important}#hm-fans .ink.ink .mNav{gap:14px!important;font-size:10px!important}}

@font-face{font-family:'AnaOne';src:url(@@A:fonts/AnaOne.woff2@@) format('woff2');font-display:swap}
/* ===== round 2 ===== */
#hm-fans .ink.ink{--blue:#22365E}
/* titles back to Anastacia One */
#hm-fans .ink.ink h2,#hm-fans .ink.ink h2[style]{font-family:'AnaOne',cursive!important;-webkit-text-stroke:0!important;font-size:68px!important;line-height:1.1!important}
#hm-fans .ink.ink.ink .hLede[style]{font-family:'AnaOne',cursive!important;color:#1C1B1B!important;-webkit-text-stroke:0!important;font-size:50px!important}
#hm-fans .ink.ink.ink.ink .hLede[style]{margin-bottom:60px!important}
#hm-fans .ink.ink.ink section.hSplit:not(#reel)[style]{padding-top:50px!important}
#hm-fans .ink.ink section.hSplit > div:first-child{gap:14px!important}
#hm-fans .ink.ink .dlg2 .line{font-size:16px!important}
#hm-fans .ink.ink .hRange{font-size:16px!important}
#hm-fans .ink.ink.ink .hLede span{color:#B8232F!important}
#hm-fans .ink.ink .mFoot [style*="italic"]{font-family:'AnaOne',cursive!important}
/* one button style everywhere: typed caps, ink outline, red fills in from the left on hover */
#hm-fans .ink.ink.ink.ink.ink .fbtn.fbtn,#hm-fans .ink.ink.ink.ink.ink .fbtn.fbtn[style]{display:inline-flex!important;align-items:center;justify-content:center;gap:8px;min-height:36px!important;padding:0 10px!important;box-sizing:border-box;border:0!important;border-bottom:2px solid #B8232F!important;border-radius:0!important;color:#1C1B1B!important;background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%!important;font-family:'Oldtown',monospace!important;font-size:11px!important;font-weight:400!important;letter-spacing:0.2em!important;text-transform:uppercase!important;text-decoration:none!important;cursor:pointer;white-space:nowrap;transition:background-size .45s cubic-bezier(.2,.75,.2,1),color .3s ease!important}
#hm-fans .ink.ink.ink.ink.ink .fbtn.fbtn:hover,#hm-fans .ink.ink.ink.ink.ink .fbtn.fbtn:focus-visible,#hm-fans .ink.ink.ink.ink.ink a:hover .fbtn.fbtn{background-size:100% 100%!important;color:#fff!important}
#hm-fans .ink.ink .fbtn svg{color:currentColor!important}
/* tab bars (credits, more of my work, demo tracks): same red fill, current one stays filled */
#hm-fans .ink.ink.ink section:not(#reel) .ctabs[style]{gap:12px 18px!important;border-bottom:0!important;padding:0!important}
#hm-fans .ink.ink.ink section:not(#reel) .ctabs button[role="tab"][style]{display:inline-flex!important;align-items:center;gap:6px;min-height:38px!important;margin:0!important;padding:0 8px!important;border:0!important;border-bottom:2px solid #B8232F!important;border-radius:0!important;background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%!important;color:#1C1B1B!important;font-family:'Oldtown',monospace!important;font-weight:400!important;font-size:11px!important;letter-spacing:0.14em!important;text-transform:uppercase!important;box-shadow:none!important;transition:background-size .45s cubic-bezier(.2,.75,.2,1),color .3s ease!important}
#hm-fans .ink.ink.ink section:not(#reel) .ctabs button[role="tab"][style]:hover,#hm-fans .ink.ink.ink section:not(#reel) .ctabs button[role="tab"][aria-selected="true"][style]{background-size:100% 100%!important;color:#fff!important}
#hm-fans .ink.ink.ink section:not(#reel) .ctabs button[role="tab"] span[style]{font-family:'AnaTwo',cursive!important;font-style:normal!important;font-size:21px!important;line-height:1!important;letter-spacing:0!important;text-transform:none!important;color:#B8232F!important;transform:rotate(-4deg) translateY(-2px);display:inline-block;transition:color .3s}
#hm-fans .ink.ink.ink section:not(#reel) .ctabs button[role="tab"]:hover span[style],#hm-fans .ink.ink.ink section:not(#reel) .ctabs button[role="tab"][aria-selected="true"] span[style]{color:#fff!important}
#hm-fans .ink.ink.ink #demos.tPlayer button[role="tab"][style]{background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%!important;transition:background-size .45s cubic-bezier(.2,.75,.2,1)!important}
#hm-fans .ink.ink.ink #demos.tPlayer button[role="tab"][aria-selected="true"][style]{box-shadow:inset 0 -2px 0 #B8232F!important}
#hm-fans .ink.ink.ink #demos.tPlayer button[role="tab"][style]:hover{background-size:100% 100%!important;color:#fff!important}
#hm-fans .ink.ink .notAll{margin:26px 0 0;font-family:'AnaTwo',cursive;font-size:34px;line-height:1.1;color:var(--blue);transform:rotate(-2deg);transform-origin:left}
/* the demo player, taped onto page one: dark card, clear type */
#hm-fans .ink.ink .tPlayer{position:relative;margin:8px 0 18px;padding:30px 34px 28px;background:#141215;color:#EEEAE2;--ink:#EEEAE2;--bg:#141215;--rgb:238,234,226;--mute:rgba(238,234,226,0.6);--soft:rgba(238,234,226,0.75);--acc:#B8232F;transform:rotate(-0.6deg);box-shadow:0 22px 40px -22px rgba(0,0,0,0.7)}
#hm-fans .ink.ink .tPlayer div[style*="padding: 18px 22px"]{border:0!important;background:none!important;padding:0!important}
#hm-fans .ink.ink .tPlayer .tape{position:absolute;left:44px;top:-16px;width:120px;height:30px;background:rgba(226,221,203,0.85);transform:rotate(-4deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-fans .ink.ink .tPlayer .tape.t2{left:auto;right:50px;transform:rotate(5deg);width:96px}
#hm-fans .ink.ink .tPlayer .pnote{position:absolute;right:-24px;top:-46px;font-family:'AnaTwo',cursive;font-size:32px;color:#B8232F;transform:rotate(-6deg);white-space:nowrap}
#hm-fans .ink.ink .tPlayer button[aria-label]:not([role]){background:#B8232F!important;color:#fff!important;width:56px!important;height:56px!important}
#hm-fans .ink.ink .tPlayer span,#hm-fans .ink.ink .tPlayer a{color:#EEEAE2!important}
#hm-fans .ink.ink .tPlayer [style*="Fraunces"]{font-family:'Arlysse',sans-serif!important;color:#EEEAE2!important;font-size:26px!important;letter-spacing:0.02em!important;text-transform:uppercase}
#hm-fans .ink.ink .tPlayer [style*="Jost"]{font-family:'Oldtown',monospace!important;font-size:12px!important;letter-spacing:0.1em!important;color:rgba(238,234,226,0.7)!important}
#hm-fans .ink.ink .tPlayer a[download]{color:#EEEAE2!important;border-bottom:1.5px solid #B8232F!important;min-height:30px!important}
#hm-fans .ink.ink .tPlayer button[role="tab"]{color:#EEEAE2!important}
#hm-fans .ink.ink .tPlayer input[type=range]{opacity:0.9!important}
/* game ticker above "Give me your" */
#hm-fans .ink.ink .gTick{position:relative;margin:26px 0 30px;border-top:1px solid rgba(28,27,27,0.16);border-bottom:1px solid rgba(28,27,27,0.16)}
#hm-fans .ink.ink .gBox{overflow:hidden;padding:16px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)}
#hm-fans .ink.ink .gNudge{transition:transform .5s cubic-bezier(.2,.7,.2,1)}
#hm-fans .ink.ink .gTrack{display:flex;align-items:center;width:max-content;will-change:transform}
@keyframes gtk{from{transform:translateX(0)}to{transform:translateX(-50%)}}
#hm-fans .ink.ink .gTrack img{filter:brightness(0)!important;opacity:0.72!important}
#hm-fans .ink.ink .gBtn{position:absolute;top:50%;z-index:3;width:38px;height:38px;margin-top:-19px;padding:0;border-radius:50%;border:1.5px solid #1C1B1B;background:#F7F6F2;color:#1C1B1B;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .25s,color .25s,border-color .25s}
#hm-fans .ink.ink .gBtn:hover{background:#B8232F;border-color:#B8232F;color:#fff}
#hm-fans .ink.ink .gBtn svg path{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
#hm-fans .ink.ink .gPrev{left:-19px}#hm-fans .ink.ink .gNext{right:-19px}
/* roles: no script name over the art, clear names under the thumbnails */
#hm-fans .ink.ink .hRoleBox .slide p[aria-hidden]{display:none!important}
#hm-fans .ink.ink .thumb span[style*="Fraunces"]{font-family:'Oldtown',monospace!important;color:#1C1B1B!important;font-size:15px!important;letter-spacing:0.02em!important}
#hm-fans .ink.ink .hRoleName,#hm-fans .ink.ink .hRoleName[style]{font-family:'Arlysse',sans-serif!important;color:#1C1B1B!important;font-size:46px!important;letter-spacing:0.01em!important;text-transform:uppercase!important}
/* bio & booking */
#hm-fans .ink.ink .bioH,#hm-fans .ink.ink .bioH[style]{margin:0 0 10px;font-family:'AnaTwo',cursive!important;font-size:40px!important;line-height:1.1!important;letter-spacing:0!important;text-transform:none!important;color:#B8232F!important;font-weight:400!important}
#hm-fans .ink.ink #booking dt,#hm-fans .ink.ink #booking .hSplit span[style*="Jost"],#hm-fans .ink.ink .hReps span[style*="Jost"]{font-family:'Arlysse',sans-serif!important;font-size:14px!important;letter-spacing:0.06em!important;color:var(--blue)!important}
#hm-fans .ink.ink #booking dd{font-size:18px!important}
#hm-fans .ink.ink .hReps div[style*="padding: 20px 22px"]{border:0!important;padding:4px 0 0!important;background:none!important}
#hm-fans .ink.ink .hReps span[style*="font-size: 24px"]{font-family:'Arlysse',sans-serif!important;font-size:30px!important;text-transform:uppercase}
/* commercial: clear brand labels, the client list scrolls sideways in three rows */
#hm-fans .ink.ink .spotBrand{font-family:'Arlysse',sans-serif!important;text-transform:uppercase;letter-spacing:0.03em;color:#fff!important}
#hm-fans .ink.ink .hPol .spotBrand{color:#1C1B1B!important}
#hm-fans .ink.ink .wallNav{display:flex!important;align-items:center;justify-content:flex-end;gap:8px;margin:40px 0 0!important}
#hm-fans .ink.ink .wallNav .wallLbl{margin-right:auto;font-family:'AnaTwo',cursive;font-size:30px;color:#B8232F}
#hm-fans .ink.ink .wallNav button{width:38px!important;height:38px!important;border-radius:50%!important;border:1.5px solid #1C1B1B!important;background:none!important;color:#1C1B1B!important;cursor:pointer;transition:background .25s,color .25s,border-color .25s}
#hm-fans .ink.ink .wallNav button:hover{background:#B8232F!important;border-color:#B8232F!important;color:#fff!important}
#hm-fans .ink.ink .hWall,#hm-fans .ink.ink .hWall[style]{display:grid!important;grid-template-columns:none!important;grid-template-rows:repeat(3,56px);grid-auto-flow:column;grid-auto-columns:max-content;justify-content:start!important;align-items:center!important;gap:10px 46px!important;overflow-x:auto;scroll-behavior:smooth;margin-top:16px!important;padding:6px 4px 14px!important;scrollbar-width:thin;scrollbar-color:#B8232F transparent}
/* direction */
#hm-fans .ink.ink #direction .hSplit{grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important}
#hm-fans .ink.ink .fastLine{margin:0;font-family:'AnaTwo',cursive;font-size:27px;line-height:1.1;white-space:nowrap;color:var(--blue)}
/* more of my work: tabs + shelf are one page */
#hm-fans .ink.ink.ink section#more:not(#reel)[id]{margin-bottom:0!important;padding-bottom:10px!important;transform:none!important;box-shadow:0 -10px 40px -30px rgba(0,0,0,0.8)!important}
#hm-fans .ink.ink.ink section#music:not(#reel)[id],#hm-fans .ink.ink.ink section#audiodramas:not(#reel)[id],#hm-fans .ink.ink.ink section#audiobooks:not(#reel)[id]{transform:none!important;counter-increment:none!important;padding-top:40px!important;margin-top:0!important;box-shadow:0 28px 50px -28px rgba(0,0,0,0.85)!important}
#hm-fans .ink.ink #music::before,#hm-fans .ink.ink #audiodramas::before,#hm-fans .ink.ink #audiobooks::before{content:none!important}
/* demo track tabs: light on the dark card */
#hm-fans .ink.ink #demos.tPlayer button[role="tab"][style]{color:#EEEAE2!important}
#hm-fans .ink.ink #demos.tPlayer button[role="tab"][aria-selected="true"][style],#hm-fans .ink.ink #demos.tPlayer button[role="tab"][style]:hover{color:#fff!important}
/* 3 million views, marked like a highlighter */
#hm-fans .ink.ink .views{display:inline-block;margin-left:8px;padding:3px 10px 2px;background:#B8232F;color:#fff!important;font-family:'Arlysse',sans-serif;font-size:15px;letter-spacing:0.04em;text-transform:uppercase;transform:rotate(-2deg);clip-path:polygon(1% 12%,99% 0,100% 88%,0 100%)}
/* commercial tiles: dark film frames, not grey */
#hm-fans .ink.ink .hSpots button[aria-label],#hm-fans .ink.ink .hPolRow button[aria-label]{background:#141215!important;border:0!important;box-shadow:0 14px 26px -16px rgba(0,0,0,0.6)}
#hm-fans .ink.ink.ink .hSpots button[aria-label][style],#hm-fans .ink.ink.ink .hPolRow button[aria-label][style]{background:linear-gradient(160deg,#2A2329,#141215)!important}
#hm-fans .ink.ink .hSpots button > span[aria-hidden],#hm-fans .ink.ink .hPolRow button > span[aria-hidden]{border:1px solid rgba(238,234,226,0.75)!important;color:#fff!important;background:transparent;transition:background .25s,border-color .25s}
#hm-fans .ink.ink .hSpots button:hover > span[aria-hidden],#hm-fans .ink.ink .hPolRow button:hover > span[aria-hidden]{background:#B8232F;border-color:#B8232F!important}
#hm-fans .ink.ink .hSpots button > span:not([aria-hidden]){background:none!important}
#hm-fans .ink.ink .hSpots [style*="Jost"]{color:rgba(238,234,226,0.65)!important}
#hm-fans .ink.ink.ink .hPol .spotBrand{color:#fff!important}
/* page one: get to the player quickly */
#hm-fans .ink.ink.ink section.hSplit:not(#reel)[style]{padding-top:56px!important}
#hm-fans .ink.ink.ink.ink .hLede[style]{margin-bottom:64px!important}
#hm-fans .ink.ink section.hSplit > div:first-child{gap:16px!important}
#hm-fans .ink.ink .dlg2{margin-bottom:0}
#hm-fans .ink.ink .dlg2 .line{line-height:1.55}
/* game ticker right under Known for, on a dark strip so the logos read white like Home H */
#hm-fans .ink.ink .hStyles{margin-bottom:0!important}
#hm-fans .ink.ink.ink .gTick{margin:14px -30px 26px!important;border:0!important;background:#141215;transform:rotate(0.3deg);box-shadow:0 16px 30px -18px rgba(0,0,0,0.6)}
#hm-fans .ink.ink.ink .gTrack img{filter:brightness(0) invert(1)!important;opacity:0.85!important}
#hm-fans .ink.ink.ink .gBtn{background:#141215;border-color:rgba(238,234,226,0.5);color:#EEEAE2}
#hm-fans .ink.ink.ink .gBtn:hover{background:#B8232F;border-color:#B8232F}
#hm-fans .ink.ink.ink .gPrev{left:8px}#hm-fans .ink.ink.ink .gNext{right:8px}
/* Known for sits close under the player */
#hm-fans .ink.ink.ink section.hSplit:not(#reel)[style]{gap:4px!important}
#hm-fans .ink.ink .tPlayer{margin-bottom:22px!important}
/* Give me your: two rows, then scroll sideways */
#hm-fans .ink.ink.ink .hChipNav{display:inline-flex!important;gap:6px;margin-left:14px;vertical-align:middle}
#hm-fans .ink.ink.ink .hChipNav button{width:30px;height:30px;padding:0;border-radius:50%;border:1.5px solid #1C1B1B;background:none;color:#1C1B1B;cursor:pointer;transition:background .25s,color .25s,border-color .25s}
#hm-fans .ink.ink.ink .hChipNav button:hover{background:#B8232F;border-color:#B8232F;color:#fff}
#hm-fans .ink.ink.ink .hChips[style]{display:grid!important;grid-auto-flow:column;grid-template-rows:repeat(2,auto);grid-auto-columns:max-content;gap:8px 10px!important;overflow-x:auto;scroll-behavior:smooth;padding-bottom:8px;scrollbar-width:thin;scrollbar-color:#B8232F transparent}
/* the download button on the player */
#hm-fans .ink.ink.ink .tPlayer a[download][style]{display:inline-flex!important;align-items:center;gap:8px;padding:0 12px!important;min-height:34px!important;border:0!important;border-bottom:2px solid #B8232F!important;color:#EEEAE2!important;font-size:12px!important;background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%;transition:background-size .45s cubic-bezier(.2,.75,.2,1)}
#hm-fans .ink.ink.ink .tPlayer a[download][style]:hover{background-size:100% 100%;color:#fff!important}
#hm-fans .ink.ink.ink .tPlayer a[download] svg{color:#B8232F}
#hm-fans .ink.ink.ink .tPlayer a[download]:hover svg{color:#fff}
/* bio & booking: all typewriter, bold, tighter, no boxes */
#hm-fans .ink.ink.ink #booking dt,#hm-fans .ink.ink.ink #booking .hSplit span[style*="Jost"],#hm-fans .ink.ink.ink .hReps span[style*="Jost"]{font-family:'Oldtown',monospace!important;font-size:12px!important;letter-spacing:0.12em!important;color:var(--blue)!important;-webkit-text-stroke:0.5px currentColor}
#hm-fans .ink.ink.ink #booking dd,#hm-fans .ink.ink.ink #booking .hSplit span[style*="font-size: 17px"],#hm-fans .ink.ink.ink #booking .hSplit span[style*="italic"]{font-family:'Oldtown',monospace!important;font-style:normal!important;-webkit-text-stroke:0.35px currentColor}
#hm-fans .ink.ink.ink .hReps span[style*="font-size: 24px"]{font-family:'Oldtown',monospace!important;font-size:22px!important;text-transform:none!important;-webkit-text-stroke:0.7px currentColor;display:inline-block;padding-bottom:4px;background:linear-gradient(#B8232F,#B8232F) no-repeat left bottom/46px 2px}
#hm-fans .ink.ink.ink .hReps span[style*="font-size: 17px"]{font-family:'Oldtown',monospace!important;-webkit-text-stroke:0.35px currentColor}
#hm-fans .ink.ink.ink .bioH[style*="margin-top"]{margin-top:22px!important}
#hm-fans .ink.ink.ink #booking .hSplit{margin-top:14px!important}
#hm-fans .ink.ink .repPhoto{position:relative;margin:0;padding:8px 8px 22px;background:#fff;transform:rotate(-3deg);box-shadow:0 12px 24px -14px rgba(0,0,0,0.55)}
#hm-fans .ink.ink .repPhoto img{display:block;width:154px;height:180px;object-fit:cover;object-position:50% 25%}
#hm-fans .ink.ink .repPhoto .tape{position:absolute;left:50%;top:-14px;width:80px;height:24px;margin-left:-40px;background:rgba(226,221,203,0.85);transform:rotate(4deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-fans .ink.ink .coffee.faint{opacity:0.35;width:300px;height:300px}
/* About me slideshow: taped print, crossfades through six photos */
#hm-fans .ink.ink .bioShow{position:relative;width:230px;height:270px;margin:22px 0 0 40px;padding:10px 10px 34px;background:#fff;transform:rotate(-2.5deg);box-shadow:0 16px 30px -16px rgba(0,0,0,0.55)}
#hm-fans .ink.ink .bioShow img{position:absolute;left:10px;top:10px;width:230px;height:270px;object-fit:cover;opacity:0;transition:opacity 1.2s ease;background:#ddd}
#hm-fans .ink.ink .bioShow img.on,#hm-fans .ink.ink .bioShow:not(.run) img:first-of-type{opacity:1}
#hm-fans .ink.ink .bioShow .tape{position:absolute;left:50%;top:-14px;z-index:3;width:90px;height:26px;margin-left:-45px;background:rgba(226,221,203,0.88);transform:rotate(3deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-fans .ink.ink .bioShow .dots{position:absolute;left:0;right:0;bottom:12px;display:flex;justify-content:center;gap:7px}
#hm-fans .ink.ink .bioShow .dots i{width:6px;height:6px;border-radius:50%;background:rgba(28,27,27,0.22);transition:background .4s}
#hm-fans .ink.ink .bioShow .dots i.on{background:#B8232F}
@media (max-width:640px){#hm-fans .ink.ink .bioShow{width:220px;height:264px;margin:26px auto 0}#hm-fans .ink.ink .bioShow img{width:220px;height:264px}}
/* phone: no traveling line, red ovals drawn around the titles instead */
#hm-fans .ink.ink .hcirc{display:none}
@media (max-width:640px){
  #hm-fans .inkLine .live,#hm-fans .inkDot{display:none!important}
  #hm-fans .ink.armed .rv{opacity:1!important}
  #hm-fans .ink.ink.ink section:not(#reel) h2[style]{position:relative!important;display:inline-block!important;align-self:flex-start}
  #hm-fans .ink.ink :is(#music,#audiodramas,#audiobooks,#music-inner) .hcirc{display:none!important}
  #hm-fans .ink.ink .hcirc{display:block;position:absolute;left:-12px;top:-6px;width:calc(100% + 22px);height:calc(100% + 14px);overflow:visible;pointer-events:none}
  #hm-fans .ink.ink .hcirc path{fill:none;stroke:#B8232F;stroke-width:1.6;stroke-linecap:round}
}
@media (max-width:640px){#hm-fans .ink.ink a[href*="scarygood"][style]{display:block!important;padding:22px 0!important}#hm-fans .ink.ink a[href*="scarygood"] > span{gap:10px!important}#hm-fans .ink.ink .sgHead{font-size:38px!important}#hm-fans .ink.ink a[href*="scarygood"] span[style*="font-size: 19px"]{font-size:15px!important;line-height:1.5!important}#hm-fans .ink.ink a[href*="scarygood"] .chip[style]{padding:4px 8px!important;font-size:10px!important;letter-spacing:0.08em!important}#hm-fans .ink.ink .sgBtn{margin-top:14px}}
/* tighter vertical rhythm */
#hm-fans .ink.ink.ink section:not(#reel)[style]{margin-bottom:44px!important;padding-top:64px!important;padding-bottom:62px!important}
#hm-fans .ink.ink section:not(#reel) .trans{margin-top:20px!important}
@media (max-width:640px){
  #hm-fans .ink.ink.ink section:not(#reel)[style]{margin:0 8px 18px!important;padding:30px 18px 26px!important}
  #hm-fans .ink.ink.ink section:not(#reel)::before{top:12px!important}
  #hm-fans .ink.ink.ink.ink .hLede[style]{margin-bottom:44px!important}
  #hm-fans .ink.ink section:not(#reel) .trans{margin-top:12px!important;font-size:12px}
  #hm-fans .ink.ink .slug{font-size:12px;margin-bottom:2px}
  #hm-fans .ink.ink.ink section:not(#reel) h2[style]{font-size:40px!important;margin-bottom:4px!important}
  #hm-fans .ink.ink.ink section:not(#reel) [style*="padding-bottom: 14px"]{padding-bottom:8px!important}
  #hm-fans .ink.ink.ink section:not(#reel) [style*="margin-top: 26px"]{margin-top:14px!important}
  #hm-fans .ink.ink.ink section:not(#reel) [style*="margin-top: 22px"]{margin-top:12px!important}
  #hm-fans .ink.ink.ink section:not(#reel) [style*="margin-top: 34px"],#hm-fans .ink.ink.ink section:not(#reel) [style*="margin-top: 40px"]{margin-top:18px!important}
  #hm-fans .ink.ink.ink section:not(#reel) [style*="gap: 48px"],#hm-fans .ink.ink.ink section:not(#reel) [style*="gap: 56px"]{gap:22px!important}
  #hm-fans .ink.ink p,#hm-fans .ink.ink li{line-height:1.55}
  #hm-fans .ink.ink .tPlayer{margin-bottom:14px!important}
}
/* anything that fills red on hover: white text and icons */
#hm-fans .ink.ink.ink.ink.ink.ink :is(.fbtn,.pTab,.pGo,.hiLinks a,.ctabs button,.tPlayer a[download],.tPlayer button[role="tab"],.chip,.gBtn,.wallNav button,.hChipNav button,.credit a):hover,#hm-fans .ink.ink.ink.ink.ink.ink :is(.fbtn,.pTab,.hiLinks a,.ctabs button,.tPlayer a[download],.tPlayer button[role="tab"]):hover *,#hm-fans .ink.ink.ink.ink.ink.ink .pRow:hover .pGo{color:#fff!important}
#hm-fans .ink.ink.ink.ink.ink.ink .credit a:hover{color:#B8232F!important}
/* compact music shelf */
#hm-fans .ink.ink :is(#music,#music-inner) > p[style]{margin-top:10px!important;font-size:16px!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) div[style*="margin-top: 40px"],#hm-fans .ink.ink.ink :is(#music,#music-inner) div[style*="margin-top: 54px"]{margin-top:26px!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) h3[style*="margin: 54px"]{margin-top:26px!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) h3[style]{font-size:28px!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) .hTwoVid[style]{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:14px!important;max-width:640px;margin-top:10px!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) figcaption span[style*="font-size: 21px"]{font-size:15px!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) ul[style]{margin-top:10px!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) li a[style*="min-height: 58px"]{min-height:40px!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) li span[style*="font-size: 20px"]{font-size:15px!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="0.8fr"]{grid-template-columns:170px minmax(0,1fr)!important;gap:24px!important;margin-top:10px!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="0.8fr"] p[style*="font-size: 21px"]{font-size:16px!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="0.8fr"] > div[style]{gap:10px!important}
#hm-fans .ink.ink.ink.ink.ink :is(#music,#music-inner) a[href*="lunaiirathemusical"][style]{min-height:36px!important;padding:0 8px!important;background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%!important;color:#1C1B1B!important;border-bottom:2px solid #B8232F!important;font-family:'Oldtown',monospace!important;font-size:11px!important;letter-spacing:0.14em!important;transition:background-size .45s cubic-bezier(.2,.75,.2,1),color .3s}
#hm-fans .ink.ink.ink.ink.ink :is(#music,#music-inner) a[href*="lunaiirathemusical"][style]:hover{background-size:100% 100%!important;color:#fff!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="align-items: start"]{grid-template-columns:minmax(0,300px) minmax(0,1fr)!important;gap:28px!important;margin-top:10px!important;align-items:start!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="align-items: start"] > div[style*="flex-direction: column"]{gap:0!important;border-top:1px solid rgba(28,27,27,0.18)}
#hm-fans .ink.ink.ink :is(#music,#music-inner) iframe[title*="SoundCloud"]{height:20px!important;margin:9px 0;filter:grayscale(1) contrast(1.05)}
#hm-fans .ink.ink.ink :is(#music,#music-inner) iframe[title*="SoundCloud"]{border-bottom:0!important}
#hm-fans .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="align-items: start"] > div[style*="flex-direction: column"] iframe + iframe{border-top:1px solid rgba(28,27,27,0.12)!important;padding-top:9px;height:29px!important;margin-top:0}
#hm-fans .ink.ink.ink :is(#music,#music-inner) a[href*="soundcloud.com/mrsmissyms"]{margin-top:12px!important}
@media (max-width:640px){
  #hm-fans .ink.ink.ink :is(#music,#music-inner) .hTwoVid[style]{grid-template-columns:minmax(0,1fr)!important}
  #hm-fans .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="0.8fr"]{grid-template-columns:110px minmax(0,1fr)!important;gap:14px!important;align-items:start!important}
  #hm-fans .ink.ink.ink :is(#music,#music-inner) .hSplit[style*="align-items: start"]{grid-template-columns:minmax(0,1fr)!important}
}
/* phone: a small Scenes button instead of the sticky bar */
#hm-fans .jump .jBtn{display:none}
@media (max-width:640px){
  #hm-fans .ink.ink .jump[style]{position:sticky!important;top:0!important;height:0!important;padding:0!important;margin:0!important;background:none!important;border:0!important;box-shadow:none!important;display:block!important;overflow:visible!important;z-index:40!important}
  #hm-fans .ink.ink .jump .jBtn{display:flex;align-items:center;gap:8px;position:absolute;right:12px;top:10px;height:40px;padding:0 14px 0 11px;border:1px solid rgba(238,234,226,0.35);border-radius:0;background:rgba(18,16,19,0.92);color:#EEEAE2;font-family:'Oldtown',monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;cursor:pointer;box-shadow:0 8px 20px -10px rgba(0,0,0,0.7)}
  #hm-fans .ink.ink .jump .jBtn svg{width:20px;height:20px}
  #hm-fans .ink.ink .jump .jBtn path{fill:none;stroke:#B8232F;stroke-width:2;stroke-linecap:round}
  #hm-fans .ink.ink .jump a{display:none!important}
  #hm-fans .ink.ink .jump.open a{display:block!important;position:relative}
  #hm-fans .ink.ink.ink .jump.open[style]{display:flow-root!important}
  #hm-fans .ink.ink .jump a{border-radius:0!important}
  #hm-fans .ink.ink .jump.open::after{content:'';position:absolute;right:12px;top:56px;width:220px;z-index:-1}
  #hm-fans .ink.ink .jump.open a{margin:0!important;padding:9px 16px!important;width:200px;margin-left:auto!important;margin-right:12px!important;background:#121013;color:#EEEAE2!important;font-size:13px!important;letter-spacing:0.06em!important;text-align:left;border-left:2px solid transparent!important}
  #hm-fans .ink.ink .jump.open a:first-of-type{margin-top:56px!important;padding-top:14px!important}
  #hm-fans .ink.ink .jump.open a:last-of-type{padding-bottom:14px!important;box-shadow:0 16px 30px -12px rgba(0,0,0,0.7)}
  #hm-fans .ink.ink .jump.open a.on{border-left-color:#B8232F!important;color:#fff!important}
  #hm-fans .ink.ink .jump.open a::before{display:none!important}
}
/* scene headings always sit top left of the page */
#hm-fans .ink.ink.ink section:not(#reel) > .slug{position:absolute;left:120px;top:34px;margin:0!important;z-index:2}
#hm-fans .ink.ink.ink :is(#music,#audiodramas,#audiobooks,#music-inner) > .slug{position:static;margin:0 0 6px!important}
@media (max-width:640px){
  #hm-fans .ink.ink.ink section:not(#reel) > .slug{left:18px;top:12px}
  #hm-fans .ink.ink.ink.ink section:not(#reel)[style]{padding-top:40px!important}
}
/* every opening line is all ink */
#hm-fans .ink.ink.ink.ink.ink .hLede span{color:#1C1B1B!important}
/* site credit above the footer */
#hm-fans .ink.ink .credit{margin:0;padding:22px 48px 0;text-align:center;font-family:'Oldtown',monospace;font-size:12px;letter-spacing:0.06em;color:rgba(238,234,226,0.6)}
#hm-fans .ink.ink .credit a{color:#EEEAE2;text-decoration:none;border-bottom:1.5px solid #B8232F;transition:color .2s}
#hm-fans .ink.ink .credit a:hover{color:#B8232F}
@media (max-width:640px){#hm-fans .ink.ink.ink .gTick{margin:12px -14px 22px!important}#hm-fans .ink.ink .hReps[style]{grid-template-columns:minmax(0,1fr)!important}#hm-fans .ink.ink .repPhoto{width:150px;justify-self:center}#hm-fans .ink.ink .repPhoto img{width:134px;height:150px}#hm-fans .ink.ink .credit{padding:18px 20px 0}}
/* footer sign-off */
#hm-fans .ink.ink .mFoot .fri,#hm-fans .ink.ink .mFoot .fri[style]{font-family:'AnaOne',cursive!important;font-style:normal!important;font-size:34px!important;color:#B8232F!important}
/* scary good */
#hm-fans .ink.ink a[href*="scarygood"]{color:#1C1B1B!important}
#hm-fans .ink.ink .sgHead{font-family:'AnaOne',cursive;font-size:64px;line-height:1.05;color:#B8232F}
#hm-fans .ink.ink.ink.ink.ink .sgBtn.fbtn.fbtn{font-size:12px!important;min-height:42px!important;padding:0 14px!important}
#hm-fans .ink.ink a[href*="scarygood"] .chip{font-family:'Oldtown',monospace!important;font-size:12px!important;color:#1C1B1B!important}
#hm-fans .ink.ink .chip:hover{background:#B8232F!important;border-color:#B8232F!important;color:#fff!important}
@media (max-width:640px){#hm-fans .ink.ink.ink #direction .hSplit{grid-template-columns:minmax(0,1fr)!important;gap:30px!important}#hm-fans .ink.ink .hTwoVid{grid-template-columns:minmax(0,1fr)!important;gap:22px!important}#hm-fans .ink.ink.ink .fastLine{font-size:21px;white-space:nowrap}#hm-fans .ink.ink.ink.ink .hLede[style]{margin-bottom:50px!important}#hm-fans .ink.ink h2,#hm-fans .ink.ink h2[style]{font-size:46px!important}#hm-fans .ink.ink.ink .hLede[style]{font-size:36px!important}#hm-fans .ink.ink .tPlayer{padding:24px 18px}#hm-fans .ink.ink .tPlayer .pnote{display:none}#hm-fans .ink.ink .gPrev{left:-8px}#hm-fans .ink.ink .gNext{right:-8px}#hm-fans .ink.ink .sgHead{font-size:44px}#hm-fans .ink.ink .bioH,#hm-fans .ink.ink .bioH[style]{font-size:32px!important}}

/* ===== Fans & press in the screenplay style ===== */
#hm-fans .ink.ink section:not(#reel) [style*="color: #E9D6E2"],#hm-fans .ink.ink section:not(#reel) [style*="color: rgb(233, 214, 226)"]{color:rgba(28,27,27,0.72)!important}
#hm-fans .ink.ink section:not(#reel) [style*="color: #E7BEDB"],#hm-fans .ink.ink section:not(#reel) [style*="color: rgb(231, 190, 219)"]{color:#B8232F!important}
#hm-fans .ink.ink section:not(#reel) [style*="border: 1px solid #F3E6EA"],#hm-fans .ink.ink section:not(#reel) [style*="border-top: 1px solid #F3E6EA"],#hm-fans .ink.ink section:not(#reel) [style*="border-bottom: 1px solid #F3E6EA"]{border-color:rgba(28,27,27,0.25)!important}
#hm-fans .ink.ink section:not(#reel) [style*="1px solid rgb(243, 230, 234)"]{border-color:rgba(28,27,27,0.25)!important}
#hm-fans .ink.ink.ink section#press:not(#reel)[style],#hm-fans .ink.ink.ink section#cons:not(#reel)[style]{background:#F7F6F2!important;color:#1C1B1B!important}
/* page one: hello */
#hm-fans .ink.ink .fHi{position:relative}
#hm-fans .ink.ink.ink section#hello:not(#reel)[style]{display:block!important;padding-top:70px!important}
#hm-fans .ink.ink .hiPhoto{position:absolute;right:70px;top:66px;z-index:2;margin:0;padding:9px 9px 30px;background:#fff;transform:rotate(4deg);box-shadow:0 16px 30px -16px rgba(0,0,0,0.55)}
#hm-fans .ink.ink .hiPhoto img{display:block;width:170px;height:206px;object-fit:cover;object-position:50% 20%}
#hm-fans .ink.ink .hiPhoto .tape{position:absolute;left:50%;top:-14px;width:84px;height:26px;margin-left:-42px;background:rgba(226,221,203,0.88);transform:rotate(-4deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-fans .ink.ink.ink #hello .hLede[style]{max-width:560px}
#hm-fans .ink.ink #hello .dlg2{margin-left:120px;max-width:520px}
#hm-fans .ink.ink .hiLinks{display:flex;flex-wrap:wrap;gap:14px 18px;margin:30px 0 0 120px}
#hm-fans .ink.ink .hiLinks a{display:inline-flex;align-items:center;min-height:34px;padding:0 8px;border-bottom:2px solid #B8232F;color:#1C1B1B;text-decoration:none;font-family:'Oldtown',monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%;transition:background-size .45s cubic-bezier(.2,.75,.2,1),color .3s}
#hm-fans .ink.ink .hiLinks a:hover{background-size:100% 100%;color:#fff}
/* character picker art: no script name over it */
#hm-fans .ink.ink #roles .slide p[aria-hidden]{display:none!important}
/* signed prints: character tabs become typed tabs with a little round portrait */
#hm-fans .ink.ink.ink section:not(#reel) .pTab[style]{min-height:42px!important;padding:4px 12px 4px 4px!important;border:0!important;border-bottom:2px solid #B8232F!important;border-radius:0!important;background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%!important;color:#1C1B1B!important;font-family:'Oldtown',monospace!important;font-style:normal!important;font-size:12px!important;letter-spacing:0.1em!important;text-transform:uppercase;transition:background-size .45s cubic-bezier(.2,.75,.2,1),color .3s!important}
#hm-fans .ink.ink.ink section:not(#reel) .pTab[style]:hover,#hm-fans .ink.ink.ink section:not(#reel) .pTab[aria-selected="true"][style]{background-size:100% 100%!important;color:#fff!important}
#hm-fans .ink.ink .pTab img{border-radius:50%!important;width:32px!important;height:32px!important}
#hm-fans .ink.ink.ink .fPrint[style]{background:transparent!important;border:0!important;padding:0!important}
#hm-fans .ink.ink .fPrint button img,#hm-fans .ink.ink .fPrint span img{border:10px solid #fff;border-bottom-width:14px;box-sizing:border-box;box-shadow:0 14px 26px -16px rgba(0,0,0,0.55);transform:rotate(-0.8deg)}
#hm-fans .ink.ink.ink .pPrice[style]{background:#B8232F!important;color:#fff!important;font-family:'Arlysse',sans-serif!important;font-weight:400!important;font-size:17px!important}
#hm-fans .ink.ink.ink .pGo[style]{border:0!important;border-bottom:2px solid #B8232F!important;font-family:'Oldtown',monospace!important;font-size:11px!important;letter-spacing:0.14em!important;padding:8px!important;background:linear-gradient(#B8232F,#B8232F) no-repeat left center/0% 100%;transition:background-size .45s cubic-bezier(.2,.75,.2,1),color .3s}
#hm-fans .ink.ink .pRow:hover .pGo{background-size:100% 100%;color:#fff!important}
#hm-fans .ink.ink .pShape{border-color:#1C1B1B!important}
/* conventions: steps get hand-drawn numbers, the organizer note becomes a taped dark card */
#hm-fans .ink.ink.ink section#cons:not(#reel)[style]{padding:70px 70px 80px!important}
#hm-fans .ink.ink #cons .fTwo > div,#hm-fans .ink.ink #cons .fTwo div[style*="padding: 70px 48px"]{padding:0 30px 0 0!important;border:0!important}
#hm-fans .ink.ink #cons .fTwo[style]{gap:40px!important}
#hm-fans .ink.ink #cons ol span[style*="font-size: 30px"],#hm-fans .ink.ink .fTalks span[style*="font-size: 44px"]{font-family:'AnaTwo',cursive!important;color:#B8232F!important;font-size:40px!important;transform:rotate(-5deg);display:inline-block}
#hm-fans .ink.ink .conNote{margin:24px 0 0;font-family:'AnaTwo',cursive;font-size:30px;line-height:1.15;color:var(--blue);transform:rotate(-1.5deg)}
#hm-fans .ink.ink.ink .fOrg[style]{position:relative;margin:46px 0 0!important;padding:38px 40px!important;background:#141215!important;color:#EEEAE2!important;transform:rotate(-0.5deg);box-shadow:0 22px 40px -22px rgba(0,0,0,0.7)}
#hm-fans .ink.ink .fOrg::before{content:'';position:absolute;left:60px;top:-15px;width:120px;height:30px;background:rgba(226,221,203,0.88);transform:rotate(-3deg);clip-path:polygon(2% 8%,10% 0,22% 6%,35% 0,50% 5%,64% 0,78% 6%,90% 0,98% 8%,100% 92%,88% 100%,74% 94%,60% 100%,46% 95%,32% 100%,18% 94%,4% 100%,0 88%)}
#hm-fans .ink.ink.ink .fOrg [style]{color:#EEEAE2!important}
#hm-fans .ink.ink.ink .fOrg h3[style]{font-family:'AnaTwo',cursive!important;color:#fff!important;font-size:40px!important}
#hm-fans .ink.ink.ink .fOrg span[style*="Jost"]{color:#B8232F!important}
#hm-fans .ink.ink.ink.ink.ink .fOrg .fbtn.fbtn{color:#EEEAE2!important}
#hm-fans .ink.ink.ink .fOrg a[href*="booking"]{border-bottom:2px solid #B8232F!important}
/* appearances */
#hm-fans .ink.ink.ink .fTalks div[style*="border-right"]{border-color:rgba(28,27,27,0.14)!important}
#hm-fans .ink.ink.ink .fTalks h3[style]{font-family:'Arlysse',sans-serif!important;color:#1C1B1B!important;font-size:30px!important;text-transform:uppercase!important}
/* press kit list numbers */
#hm-fans .ink.ink #press li > span:first-child{font-family:'AnaTwo',cursive!important;color:#B8232F!important;font-size:26px!important}
#hm-fans .ink.ink #press li span[style*="text-transform: uppercase"]{font-family:'Arlysse',sans-serif!important;font-size:24px!important;color:#1C1B1B!important}
#hm-fans .ink.ink.ink #press p[style*="font-size: 22px"]{font-family:'Oldtown',monospace!important;font-size:18px!important;line-height:1.7!important}
/* Other things I'm up to + the shelf it opens read as one page */
#hm-fans .ink.ink.ink section#other:not(#reel)[id]{margin-bottom:0!important;padding-bottom:10px!important;transform:none!important}
#hm-fans .ink.ink.ink section#music-inner:not(#reel)[id],#hm-fans .ink.ink.ink section#audiodramas:not(#reel)[id]{transform:none!important;counter-increment:none!important;padding-top:40px!important;margin-top:0!important}
#hm-fans .ink.ink #music-inner::before,#hm-fans .ink.ink #audiodramas::before{content:none!important}
/* scene heading on its own line above each title */
#hm-fans .ink.ink section:not(#reel) div[style*="space-between"]:has(> .slug){flex-wrap:wrap!important;row-gap:6px!important}
#hm-fans .ink.ink section:not(#reel) div[style*="space-between"]:has(> .slug) > .slug{flex-basis:100%}
/* role name beside the art, same as Hire */
#hm-fans .ink.ink.ink .fRoleName[style]{font-family:'Arlysse',sans-serif!important;font-style:normal!important;color:#1C1B1B!important;font-size:42px!important;letter-spacing:0.01em!important;text-transform:uppercase!important}
/* more characters: clear names, numbers drawn in */
#hm-fans .ink.ink.ink .fMore span[style*="italic"]{font-family:'Oldtown',monospace!important;color:#1C1B1B!important;font-size:17px!important;-webkit-text-stroke:0.35px currentColor}
#hm-fans .ink.ink.ink .fMore li > span:first-child{font-family:'AnaTwo',cursive!important;color:#B8232F!important;font-size:22px!important;padding-top:0!important}
/* organizer card: light type on the dark card */
#hm-fans .ink.ink.ink #cons .fOrg [style]{color:#EEEAE2!important}
#hm-fans .ink.ink.ink #cons .fOrg span[style*="Jost"]{color:#E8707A!important}
#hm-fans .ink.ink.ink.ink.ink #cons .fOrg .fbtn.fbtn[style]{color:#EEEAE2!important}
#hm-fans .ink.ink.ink.ink.ink #cons .fOrg .fbtn.fbtn[style]:hover{color:#fff!important}
/* signing off the letter */
#hm-fans .ink.ink .sig{margin:18px 0 0 360px;display:flex;flex-direction:column;gap:2px;transform:rotate(-3deg)}
#hm-fans .ink.ink .sig .sOff{font-family:'AnaTwo',cursive;font-size:26px;color:#1C1B1B}
#hm-fans .ink.ink .sig .sName{font-family:'AnaOne',cursive;font-size:52px;line-height:1;color:#B8232F;white-space:nowrap}
#hm-fans .ink.ink .sig .heart{display:inline-block;width:24px;height:22px;margin-left:6px;vertical-align:0.7em;transform:rotate(14deg);overflow:visible}
#hm-fans .ink.ink .sig .heart path{fill:none;stroke:#B8232F;stroke-width:3.2;stroke-linecap:round;stroke-linejoin:round}
/* more characters: a compact, scannable cast list, no numbers, no boxes */
#hm-fans .ink.ink.ink .fMore[style]{display:block!important;columns:3;column-gap:40px;margin-top:20px!important}
#hm-fans .ink.ink.ink .fMore li[style]{display:block!important;break-inside:avoid;padding:7px 0 9px!important;border:0!important}
#hm-fans .ink.ink.ink .fMore li > span:first-child{display:none!important}
#hm-fans .ink.ink.ink .fMore li span[style*="flex-direction"]{display:block!important}
#hm-fans .ink.ink.ink .fMore span[style*="italic"]{display:inline!important;font-size:16px!important}
#hm-fans .ink.ink.ink .fMore span[style*="Jost"]{display:block!important;margin-top:1px;font-family:'Oldtown',monospace!important;font-size:10.5px!important;letter-spacing:0.1em!important;color:#B8232F!important}
#hm-fans .ink.ink .fScrollNav{display:none!important}
/* conventions: legible type for the pitch line and the aside */
#hm-fans .ink.ink.ink #cons p[style*="italic"]{font-family:'Oldtown',monospace!important;font-style:normal!important;color:#1C1B1B!important;font-size:21px!important;line-height:1.4!important;-webkit-text-stroke:0.4px currentColor}
#hm-fans .ink.ink .conNote{font-family:'Oldtown',monospace!important;font-size:16px!important;line-height:1.55!important;color:var(--blue)!important;transform:none!important;padding-left:14px;border-left:2px solid #B8232F}
/* icons instead of numbers */
#hm-fans .ink.ink .aIco{display:block;width:34px;height:34px;background:#B8232F;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}
#hm-fans .ink.ink #press .aIco{width:26px;height:26px;margin-top:2px}
#hm-fans .ink.ink .ic-ticket{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3%207h18v3a2%202%200%200%200%200%204v3H3v-3a2%202%200%200%200%200-4z%20M14%207v10%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3%207h18v3a2%202%200%200%200%200%204v3H3v-3a2%202%200%200%200%200-4z%20M14%207v10%22/%3E%3C/svg%3E")}
#hm-fans .ink.ink .ic-star{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M12%203l2.6%205.6%206%20.7-4.5%204.1%201.2%206L12%2016.4%206.7%2019.4l1.2-6L3.4%209.3l6-.7z%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M12%203l2.6%205.6%206%20.7-4.5%204.1%201.2%206L12%2016.4%206.7%2019.4l1.2-6L3.4%209.3l6-.7z%22/%3E%3C/svg%3E")}
#hm-fans .ink.ink .ic-mic{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M12%203a3%203%200%200%200-3%203v5a3%203%200%200%200%206%200V6a3%203%200%200%200-3-3z%20M5.5%2011a6.5%206.5%200%200%200%2013%200%20M12%2017.5V21%20M9%2021h6%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M12%203a3%203%200%200%200-3%203v5a3%203%200%200%200%206%200V6a3%203%200%200%200-3-3z%20M5.5%2011a6.5%206.5%200%200%200%2013%200%20M12%2017.5V21%20M9%2021h6%22/%3E%3C/svg%3E")}
#hm-fans .ink.ink .ic-phones{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M4%2016v-4a8%208%200%200%201%2016%200v4%20M4%2015h3.5v6H4z%20M16.5%2015H20v6h-3.5z%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M4%2016v-4a8%208%200%200%201%2016%200v4%20M4%2015h3.5v6H4z%20M16.5%2015H20v6h-3.5z%22/%3E%3C/svg%3E")}
#hm-fans .ink.ink .ic-doc{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%203h8.5L19%207.5V21H6z%20M14%203v5h5%20M9%2012.5h7%20M9%2016.5h7%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%203h8.5L19%207.5V21H6z%20M14%203v5h5%20M9%2012.5h7%20M9%2016.5h7%22/%3E%3C/svg%3E")}
#hm-fans .ink.ink .ic-camera{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3%208h4l1.8-2.8h6.4L17%208h4v12H3z%20M12%2017.3a3.6%203.6%200%201%200%200-7.2%203.6%203.6%200%200%200%200%207.2z%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3%208h4l1.8-2.8h6.4L17%208h4v12H3z%20M12%2017.3a3.6%203.6%200%201%200%200-7.2%203.6%203.6%200%200%200%200%207.2z%22/%3E%3C/svg%3E")}
#hm-fans .ink.ink .ic-brush{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M19.5%203.5%2010%2013l1%201%209.5-9.5z%20M9.6%2013.6c-2.4%200-3.6%201.6-3.6%203.6%200%201.6-1%202.6-2.5%202.8%201.2%201%202.6%201.3%204%201.2%202.6-.2%204.5-2%204.4-4.6z%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M19.5%203.5%2010%2013l1%201%209.5-9.5z%20M9.6%2013.6c-2.4%200-3.6%201.6-3.6%203.6%200%201.6-1%202.6-2.5%202.8%201.2%201%202.6%201.3%204%201.2%202.6-.2%204.5-2%204.4-4.6z%22/%3E%3C/svg%3E")}
#hm-fans .ink.ink .ic-list{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M9%206h11%20M9%2012h11%20M9%2018h11%20M4.5%206h.5%20M4.5%2012h.5%20M4.5%2018h.5%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M9%206h11%20M9%2012h11%20M9%2018h11%20M4.5%206h.5%20M4.5%2012h.5%20M4.5%2018h.5%22/%3E%3C/svg%3E")}
#hm-fans .ink.ink .ic-tag{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3%203h8l10%2010-8%208L3%2011z%20M7.5%207.5h.5%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3%203h8l10%2010-8%208L3%2011z%20M7.5%207.5h.5%22/%3E%3C/svg%3E")}
#hm-fans .ink.ink .ic-logo{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M12%203a9%209%200%201%200%200%2018%209%209%200%200%200%200-18z%20M8%2016V9l4%204%204-4v7%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M12%203a9%209%200%201%200%200%2018%209%209%200%200%200%200-18z%20M8%2016V9l4%204%204-4v7%22/%3E%3C/svg%3E")}
/* all-ink header and signature */
#hm-fans .ink.ink.ink.ink #hello .hLede span{color:#1C1B1B!important}
#hm-fans .ink.ink.ink .sig .sName{color:#1C1B1B!important}
#hm-fans .ink.ink.ink .sig .heart path{stroke:#1C1B1B!important}
/* conventions, shorter and livelier */
#hm-fans .ink.ink.ink.ink section#cons:not(#reel)[style]{padding:48px 60px 50px!important}
#hm-fans .ink.ink.ink #cons .fTwo div[style*="padding: 70px 48px"]{gap:10px!important}
#hm-fans .ink.ink.ink #cons ol li[style]{grid-template-columns:40px minmax(0,1fr)!important;padding:10px 0!important;align-items:start}
#hm-fans .ink.ink.ink #cons ol li .aIco{width:28px;height:28px;margin-top:2px}
#hm-fans .ink.ink.ink #cons ol span[style*="font-size: 24px"]{font-family:'Oldtown',monospace!important;color:#B8232F!important;font-size:17px!important;letter-spacing:0.04em;-webkit-text-stroke:0.45px currentColor}
#hm-fans .ink.ink.ink #cons ol span[style*="font-size: 18px"]{font-size:14.5px!important;line-height:1.5!important}
#hm-fans .ink.ink.ink #cons .fTwo > div:last-child > span[style*="Jost"]{font-family:'AnaTwo',cursive!important;font-size:34px!important;letter-spacing:0!important;text-transform:none!important;color:#B8232F!important}
#hm-fans .ink.ink.ink #cons ul[style]{border-top:2px solid #B8232F!important}
#hm-fans .ink.ink.ink #cons ul li[style]{grid-template-columns:118px minmax(0,1fr)!important;gap:12px!important;padding:10px 0!important;align-items:baseline}
#hm-fans .ink.ink.ink #cons ul li span[style*="Jost"]{font-family:'Oldtown',monospace!important;font-size:13.5px!important;letter-spacing:0.06em!important;color:#B8232F!important;padding-top:0!important;-webkit-text-stroke:0.35px currentColor}
#hm-fans .ink.ink.ink #cons ul li span[style*="font-size: 26px"]{font-family:'Oldtown',monospace!important;font-size:19px!important;-webkit-text-stroke:0.45px currentColor}
#hm-fans .ink.ink.ink #cons ul li span[style*="font-size: 26px"]::before{content:'';display:inline-block;width:7px;height:7px;margin:0 10px 2px 0;border-radius:50%;background:#B8232F}
#hm-fans .ink.ink.ink.ink .fOrg[style]{margin-top:30px!important;padding:30px 36px!important}
#hm-fans .ink.ink.ink.ink #cons .fOrg span[style*="Jost"]{font-family:'AnaTwo',cursive!important;font-size:38px!important;letter-spacing:0!important;text-transform:none!important;color:#E8707A!important;line-height:1}
#hm-fans .ink.ink.ink.ink #cons .fOrg h3[style]{font-family:'Oldtown',monospace!important;font-style:normal!important;font-size:21px!important;line-height:1.35!important;color:#fff!important;-webkit-text-stroke:0.45px currentColor}
#hm-fans .ink.ink.ink.ink #cons .fOrg p[style]{font-size:15px!important}
#hm-fans .ink.ink .ic-megaphone{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3%2010v4h3l7%204V6l-7%204z%20M16%209.5a3.5%203.5%200%200%201%200%205%20M18.5%207a7%207%200%200%201%200%2010%20M6%2014l1.5%205h2.5l-1-4.5%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3%2010v4h3l7%204V6l-7%204z%20M16%209.5a3.5%203.5%200%200%201%200%205%20M18.5%207a7%207%200%200%201%200%2010%20M6%2014l1.5%205h2.5l-1-4.5%22/%3E%3C/svg%3E")}
#hm-fans .ink.ink .ic-mail{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3%206h18v12H3z%20M3%207l9%206.5L21%207%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3%206h18v12H3z%20M3%207l9%206.5L21%207%22/%3E%3C/svg%3E")}
#hm-fans .ink.ink .ic-check{-webkit-mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M4%2012.5%209.5%2018%2020%206.5%22/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M4%2012.5%209.5%2018%2020%206.5%22/%3E%3C/svg%3E")}
/* prints header: title on its own row */
#hm-fans .ink.ink.ink #prints .fTwo[style*="0.8fr"]{grid-template-columns:minmax(0,1fr)!important;gap:8px!important;align-items:start!important}
/* conventions page has narrower margins */
#hm-fans .ink.ink.ink.ink #cons > .slug{left:60px}
/* smaller signature */
#hm-fans .ink.ink.ink.ink .sig .sOff{font-size:21px!important}
#hm-fans .ink.ink.ink.ink .sig .sName{font-size:38px!important}
#hm-fans .ink.ink.ink.ink .sig .heart{width:18px!important;height:16px!important}
@media (max-width:640px){
  #hm-fans .ink.ink.ink.ink .sig .sOff{font-size:17px!important}
  #hm-fans .ink.ink.ink.ink .sig .sName{font-size:28px!important}
  #hm-fans .ink.ink.ink.ink .sig .heart{width:14px!important;height:13px!important}
}
/* compact hello */
#hm-fans .ink.ink.ink .sig .sName{display:inline-flex!important;align-items:flex-start}
#hm-fans .ink.ink.ink .sig .heart{margin:2px 0 0 4px!important;vertical-align:top!important}
#hm-fans .ink.ink.ink section#hello:not(#reel)[style]{padding-top:46px!important;padding-bottom:40px!important}
#hm-fans .ink.ink.ink.ink.ink #hello .hLede[style]{margin-bottom:64px!important}
#hm-fans .ink.ink #hello .dlg2 .line{margin-top:4px!important}
#hm-fans .ink.ink .sig{flex-direction:row!important;align-items:baseline;gap:12px!important;margin:8px 0 0 330px!important}
#hm-fans .ink.ink .hiLinks{margin-top:14px!important;gap:8px 14px!important}
#hm-fans .ink.ink .hiPhoto{top:44px!important}
#hm-fans .ink.ink .hiPhoto img{width:150px!important;height:182px!important}
/* compact character picker */
#hm-fans .ink.ink.ink section#roles:not(#reel)[style]{padding-top:52px!important}
#hm-fans .ink.ink.ink .fRoleBox[style]{margin-top:16px!important;border:0!important}
#hm-fans .ink.ink.ink .fRoleBox > div:first-child{aspect-ratio:16 / 9!important}
#hm-fans .ink.ink.ink .fRoleSide[style]{padding:14px 0 6px 26px!important;gap:10px!important;border:0!important}
#hm-fans .ink.ink.ink .fRoleSide .fRoleName[style]{font-size:34px!important}
#hm-fans .ink.ink.ink .fRoleSide p[style*="font-size: 19px"]{font-size:15px!important}
#hm-fans .ink.ink.ink .fRoleSide :is(a,button)[style*="min-height: 48px"]{min-height:38px!important}
#hm-fans .ink.ink.ink .fRoleSide button[aria-label][style*="border-radius: 50%"]{width:38px!important;height:38px!important}
#hm-fans .ink.ink.ink .fThumbs[style]{gap:8px!important;margin-top:10px!important}
#hm-fans .ink.ink.ink .fThumbs .thumb span[style*="height: 84px"]{height:58px!important}
#hm-fans .ink.ink.ink .fThumbs .thumb[style]{gap:4px!important}
#hm-fans .ink.ink.ink .fThumbs .thumb span[style*="italic"]{font-family:'Oldtown',monospace!important;font-style:normal!important;color:#1C1B1B!important;font-size:13px!important}
#hm-fans .ink.ink.ink .fThumbs .thumb span[style*="Jost"]{font-size:8.5px!important}
/* compact press kit */
#hm-fans .ink.ink.ink #press .fTwo[style]{gap:30px!important;margin-top:20px!important;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr)!important}
#hm-fans .ink.ink.ink #press p[style*="font-size: 22px"]{font-size:15.5px!important;line-height:1.6!important}
#hm-fans .ink.ink.ink #press p[style*="font-size: 17px"]{font-size:14px!important}
#hm-fans .ink.ink.ink #press ul[style]{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:22px;border:0!important}
#hm-fans .ink.ink.ink #press li[style]{grid-template-columns:30px minmax(0,1fr)!important;padding:8px 0!important;border:0!important}
#hm-fans .ink.ink.ink #press li span[style*="text-transform: uppercase"]{font-size:19px!important}
#hm-fans .ink.ink.ink #press li span[style*="font-size: 16.5px"]{font-size:13.5px!important;line-height:1.4!important}
#hm-fans .ink.ink.ink #press div[style*="margin-top: 30px"]{margin-top:18px!important}
@media (max-width:640px){
  #hm-fans .ink.ink .hiPhoto{position:absolute!important;right:14px!important;top:22px!important;margin:0!important;padding:6px 6px 18px!important}
  #hm-fans .ink.ink .hiPhoto img{width:92px!important;height:112px!important}
  #hm-fans .ink.ink.ink.ink.ink #hello .hLede[style]{max-width:none!important;font-size:27px!important;margin-bottom:54px!important}
  #hm-fans .ink.ink #hello .hLede .nw{white-space:nowrap}
  #hm-fans .ink.ink.ink #hello .hiPhoto img{width:74px!important;height:90px!important}
  #hm-fans .ink.ink.ink section#hello:not(#reel)[style]{padding-top:28px!important}
  #hm-fans .ink.ink .sig{margin:6px 0 0 60px!important}
  #hm-fans .ink.ink.ink .fRoleSide[style]{padding:12px 0 0!important}
  #hm-fans .ink.ink.ink .fThumbs[style]{grid-template-columns:repeat(4,minmax(0,1fr))!important}
  #hm-fans .ink.ink.ink #press ul[style]{grid-template-columns:minmax(0,1fr)}
  #hm-fans .ink.ink.ink #press .fTwo[style]{grid-template-columns:minmax(0,1fr)!important}
}
@media (max-width:640px){
  #hm-fans .ink.ink.ink .fMore[style]{columns:2;column-gap:18px}
  #hm-fans .ink.ink.ink .fMore span[style*="italic"]{font-size:14px!important}
  #hm-fans .ink.ink .sig{margin:14px 0 0 90px}
  #hm-fans .ink.ink .sig .sName{font-size:42px}
  #hm-fans .ink.ink .hiPhoto{position:relative;right:auto;top:auto;display:inline-block;margin:0 0 26px 30px}
  #hm-fans .ink.ink .hiPhoto img{width:140px;height:170px}
  #hm-fans .ink.ink #hello .dlg2,#hm-fans .ink.ink .hiLinks{margin-left:0}
  #hm-fans .ink.ink.ink section#cons:not(#reel)[style]{padding:46px 20px 40px!important}
  #hm-fans .ink.ink #cons .fTwo[style]{grid-template-columns:minmax(0,1fr)!important}
  #hm-fans .ink.ink.ink .fOrg[style]{padding:30px 22px!important;margin-left:-6px!important;margin-right:-6px!important}
  #hm-fans .ink.ink.ink .fOrg h3[style]{font-size:32px!important}
}

/* ==== Legible headings (Nov 27): section titles in Arlysse instead of script ==== */
#hm-fans .ink.ink.ink.ink h2,#hm-fans .ink.ink.ink.ink h2[style]{font-family:'Arlysse',sans-serif!important;text-transform:uppercase!important;letter-spacing:0.01em!important;font-size:66px!important;line-height:1!important;-webkit-text-stroke:0!important}
#hm-fans .ink.ink.ink.ink h3,#hm-fans .ink.ink.ink.ink h3[style],#hm-fans .ink.ink.ink.ink .bioH,#hm-fans .ink.ink.ink.ink .bioH[style]{font-family:'Arlysse',sans-serif!important;text-transform:uppercase!important;letter-spacing:0.02em!important;font-size:30px!important;line-height:1.05!important}
#hm-fans .ink.ink.ink.ink .hLede,#hm-fans .ink.ink.ink.ink .hLede[style]{font-family:'Arlysse',sans-serif!important;text-transform:uppercase!important;letter-spacing:0.01em!important;font-size:42px!important;line-height:1.05!important;-webkit-text-stroke:0!important}
#hm-fans .ink.ink.ink.ink .sgHead{font-family:'Arlysse',sans-serif!important;text-transform:uppercase!important;letter-spacing:0.01em!important}
@media (max-width:820px){#hm-fans .ink.ink.ink.ink h2,#hm-fans .ink.ink.ink.ink h2[style]{font-size:46px!important}#hm-fans .ink.ink.ink.ink .hLede,#hm-fans .ink.ink.ink.ink .hLede[style]{font-size:30px!important}#hm-fans .ink.ink.ink.ink h3,#hm-fans .ink.ink.ink.ink h3[style]{font-size:24px!important}}
/* the one heading that stays in script */
#hm-fans .ink.ink.ink.ink.ink .hLede.hScript,#hm-fans .ink.ink.ink.ink.ink .hLede.hScript[style]{font-family:'AnaOne',cursive!important;text-transform:none!important;letter-spacing:0!important;font-size:50px!important;line-height:1.15!important}
@media (max-width:820px){#hm-fans .ink.ink.ink.ink.ink .hLede.hScript,#hm-fans .ink.ink.ink.ink.ink .hLede.hScript[style]{font-size:36px!important}}
/* blueprint margin notes, like I'm writing in the margins of my script */
#hm-fans .ink.ink .bpNote{position:absolute;z-index:4;max-width:104px;font-family:'AnaTwo',cursive;font-size:25px;line-height:1.02;color:var(--blue);transform:rotate(-7deg);transform-origin:left top;pointer-events:none;white-space:normal}
@media (max-width:1100px){#hm-fans .ink.ink .bpNote{display:none}}

/* back to top: small, quiet, always there */
#hm-fans .toTop,#hm-fans .toTop[style]{position:fixed!important;right:22px!important;bottom:22px!important;z-index:80!important;display:inline-flex!important;align-items:center;gap:6px;font-family:'Oldtown','Courier New',monospace!important;font-size:11px!important;letter-spacing:0.2em!important;text-transform:uppercase!important;color:#EEEAE2!important;background:rgba(20,18,21,0.72)!important;border:1px solid rgba(238,234,226,0.28)!important;border-radius:999px!important;padding:9px 14px!important;text-decoration:none!important;opacity:0.7;transition:opacity .25s,background .25s;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}
#hm-fans .toTop:hover,#hm-fans .toTop:focus-visible{opacity:1;background:#B8232F!important}
@media (max-width:820px){#hm-fans .toTop,#hm-fans .toTop[style]{right:14px!important;bottom:14px!important;padding:8px 12px!important}}
/* download button on the player: light text on the dark player */
#hm-fans .ink.ink.ink.ink.ink.ink.ink.ink section:not(#reel) .tPlayer a[download],#hm-fans .ink.ink.ink.ink.ink.ink.ink.ink section:not(#reel) .tPlayer a[download][style],#hm-fans .ink.ink.ink.ink.ink.ink.ink.ink .tPlayer a[download][style]{color:#EEEAE2!important}
#hm-fans .ink.ink.ink.ink.ink.ink.ink.ink section:not(#reel) .tPlayer a[download][style]:hover{color:#fff!important}
/* footer sign-off stays in script */
#hm-fans .ink.ink.ink.ink.ink.ink .mFoot .fri,#hm-fans .ink.ink.ink.ink.ink.ink .mFoot .fri[style]{font-family:'AnaOne',cursive!important;text-transform:none!important;letter-spacing:0!important}
/* How I teach / How I'm different in the typewriter font */
#hm-fans .ink.ink.ink.ink.ink.ink #start .sIntro > div > span:first-child,#hm-fans .ink.ink.ink.ink.ink.ink #start .sIntro > div > span:first-child[style]{font-family:'Oldtown','Courier New',monospace!important;text-transform:uppercase!important}


/* ---- CARRD FIXES (added for the embed) ----
   In the canvas this page scrolled inside a box. On the real site it scrolls with the page. */
#hm-fans .inkScroll{height:auto!important;overflow:visible!important}
#hm-fans{all:initial;display:block;position:relative;width:100%;min-height:100vh;background:#121013;-webkit-font-smoothing:antialiased;text-align:left}
#hm-fans *{box-sizing:border-box}`;


/* ========================================================================
   3. THE PAGE  (every section in order, each with a note above it)
   Anything in {{double braces}} gets filled in from MY CONTENT below.
   ======================================================================== */
const TPL = `<div class="inkScroll" ref="{{setInk}}"><span id="top" aria-hidden="true"></span><a class="toTop" href="https://hearmelissa.com/#top" aria-label="Back to top">↑ Top</a><svg class="inkLine" aria-hidden="true"><path class="wf" d=""></path><path class="live" d=""></path></svg><div class="inkDot" aria-hidden="true"></div>
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
<a class="nv" href="@@P:hire@@"><span class="a">Hire me</span><span class="b" aria-hidden="true">Hire me</span><svg class="circ" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2.5,13.8 L4.4,11.7 L6.6,9.6 L10.3,7.9 L14.0,6.2 L17.7,4.5 L22.4,3.2 L27.4,2.1 L32.5,1.2 L37.9,0.5 L43.5,0.2 L49.1,-0.3 L54.8,-0.4 L60.5,0.1 L66.0,0.7 L71.1,1.7 L76.3,2.7 L80.7,4.1 L85.7,5.3 L89.1,7.1 L92.5,9.0 L96.3,10.7 L97.8,13.0 L100.4,15.1 L101.0,17.4 L101.6,19.7 L101.2,22.0 L99.7,24.3 L99.0,26.6 L96.3,28.7 L93.8,30.7 L90.2,32.5 L86.4,34.3 L82.5,36.0 L77.5,37.2 L72.8,38.5 L67.7,39.7 L62.1,40.5 L56.2,40.6 L50.4,40.5 L44.6,40.6 L38.9,40.1 L33.3,39.6 L27.6,38.9 L22.4,37.8 L18.1,36.2 L13.2,34.9 L9.3,33.1 L5.9,31.2 L3.3,29.1 L0.7,27.0 L-0.6,24.7 L-2.5,22.4 L-2.9,20.1 L-2.6,17.7 L-1.3,15.4 L-0.5,13.0 L2.5,10.9 L5.6,8.9 L8.7,6.8 L12.1,4.8" vector-effect="non-scaling-stroke"></path></svg></a>
<a class="nv" href="@@P:fans@@" aria-current="page" style="opacity: 1"><span class="a">Fans &amp; press</span><span class="b" aria-hidden="true">Fans &amp; press</span><svg class="circ" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M1.8,13.7 L4.9,11.8 L6.4,9.6 L10.4,7.9 L13.8,6.1 L17.5,4.4 L22.5,3.3 L27.3,2.0 L32.6,1.3 L37.7,0.1 L43.3,-0.3 L49.1,-0.0 L54.7,0.1 L60.4,0.2 L65.9,0.7 L71.4,1.4 L76.2,2.7 L81.1,3.9 L85.1,5.5 L89.0,7.2 L92.2,9.0 L95.7,10.9 L98.1,13.0 L99.9,15.2 L101.4,17.4 L101.0,19.7 L100.8,22.0 L100.1,24.3 L99.3,26.6 L96.3,28.7 L93.6,30.7 L90.6,32.7 L87.1,34.5 L82.4,35.9 L77.7,37.2 L73.0,38.7 L67.6,39.5 L62.0,40.2 L56.1,40.3 L50.4,40.6 L44.6,40.4 L38.8,40.3 L32.9,39.9 L27.4,39.1 L22.2,37.9 L17.8,36.4 L13.1,34.9 L8.8,33.3 L6.0,31.2 L3.0,29.2 L0.2,27.1 L-1.0,24.7 L-2.2,22.4 L-2.4,20.1 L-2.9,17.7 L-1.5,15.3 L0.7,13.1 L3.0,11.0 L5.0,8.7 L9.0,6.9 L12.3,4.9" vector-effect="non-scaling-stroke"></path></svg></a>
<a class="nv" href="@@P:coaching@@"><span class="a">Coaching</span><span class="b" aria-hidden="true">Coaching</span><svg class="circ" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2.5,13.8 L4.7,11.8 L6.5,9.6 L10.2,7.8 L14.2,6.3 L17.6,4.4 L22.7,3.4 L27.5,2.2 L32.7,1.3 L37.8,0.3 L43.3,-0.2 L49.1,-0.3 L54.7,0.0 L60.5,-0.0 L66.1,0.5 L71.1,1.7 L76.1,2.7 L81.2,3.8 L85.9,5.2 L89.8,6.9 L93.2,8.8 L96.0,10.8 L97.6,13.0 L99.9,15.2 L100.7,17.4 L101.5,19.7 L101.0,22.0 L99.8,24.3 L99.3,26.6 L96.0,28.6 L93.7,30.7 L90.4,32.6 L87.4,34.6 L82.2,35.8 L78.0,37.4 L73.2,38.8 L67.6,39.6 L62.1,40.4 L56.2,40.5 L50.4,40.7 L44.6,40.6 L38.8,40.3 L33.2,39.6 L27.9,38.6 L22.1,38.0 L17.4,36.5 L13.0,34.9 L9.2,33.1 L6.1,31.1 L3.2,29.1 L-0.1,27.1 L-1.7,24.8 L-2.2,22.4 L-3.0,20.1 L-3.1,17.7 L-0.8,15.4 L0.3,13.1 L2.5,10.9 L5.4,8.8 L8.5,6.8 L12.7,5.1" vector-effect="non-scaling-stroke"></path></svg></a><a class="nv" href="@@P:contact@@"><span class="a">Contact</span><span class="b" aria-hidden="true">Contact</span><svg class="circ" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2.5,13.8 L4.3,11.7 L7.1,9.7 L9.6,7.7 L14.3,6.3 L17.4,4.3 L22.2,3.1 L27.1,1.9 L32.3,0.9 L37.9,0.6 L43.3,-0.2 L49.1,-0.3 L54.7,0.1 L60.5,-0.0 L65.9,0.8 L71.4,1.4 L76.0,2.8 L81.2,3.8 L84.9,5.6 L88.8,7.2 L92.3,9.0 L95.1,11.0 L98.1,13.0 L99.3,15.2 L100.3,17.5 L101.7,19.7 L101.4,22.1 L100.0,24.3 L98.3,26.5 L96.9,28.8 L94.0,30.8 L90.5,32.6 L86.7,34.4 L82.5,36.0 L77.9,37.4 L72.7,38.4 L67.3,39.2 L62.0,40.2 L56.2,40.4 L50.4,40.5 L44.6,40.6 L38.7,40.4 L33.0,39.9 L28.0,38.6 L22.3,37.9 L17.8,36.3 L12.8,35.0 L8.8,33.3 L6.0,31.2 L2.6,29.2 L0.4,27.0 L-0.8,24.7 L-2.9,22.5 L-2.9,20.1 L-3.1,17.7 L-0.9,15.4 L0.5,13.1 L1.8,10.7 L5.4,8.8 L8.7,6.8 L12.8,5.1" vector-effect="non-scaling-stroke"></path></svg></a>
</nav>
<button type="button" onClick="{{openReel}}" style="justify-self: end; display: inline-flex; align-items: center; gap: 10px; min-height: 40px; padding: 0; border: 0; background: none; color: var(--t3); cursor: pointer; font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase"><span style="width: 26px; height: 26px; border-radius: 50%; border: 1px solid var(--t5); display: flex; align-items: center; justify-content: center"><svg width="8" height="8" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 3 L17 10 L6 17 Z" fill="currentColor"></path></svg></span>Reel</button>
</header>


<!-- ========================================================================
     ROLES  (#roles)
     Same characters as the Hire page, but the fan version. Edit charList()
     in MY CONTENT. Paste a YouTube ID in "clip" to turn on the video.
     ======================================================================== -->
<!-- ========================================================================
     SHORTCUT MENU  (the little sticky bar that jumps around this page)
     Each link points at a section id, like href="https://hearmelissa.com/#roles" goes to id="roles".
     Add a section? Add a link here with its id. Delete one? Delete its link too,
     or it'll jump to nowhere.
     ======================================================================== -->
<nav class="jump hSub" ref="{{setJump}}" aria-label="On this page" style="position: sticky; top: 0; z-index: 30; display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 6px 6px; padding: 12px 48px; background: #4E1F45; box-shadow: 0 8px 24px -14px rgba(0,0,0,0.5); font-family: 'Jost', sans-serif; font-weight: 500; font-size: 11.5px; letter-spacing: 0.24em; text-transform: uppercase; color: #F3E6EA"><button type="button" class="jBtn" aria-label="Menu: sections on this page"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.2h15.5 M4 12.1h11.5 M4 17h14"></path></svg><span>Menu</span></button><span class="jPage" aria-hidden="true"><i></i>Fans &amp; press</span>
<a href="https://hearmelissa.com/#roles" style="text-decoration: none">Characters</a><a href="https://hearmelissa.com/#characters" style="text-decoration: none">More characters</a><a href="https://hearmelissa.com/#prints" style="text-decoration: none">Prints</a><a href="https://hearmelissa.com/#cons" style="text-decoration: none">Conventions</a><a href="https://hearmelissa.com/#appearances" style="text-decoration: none">Appearances</a><a href="https://hearmelissa.com/#other" style="text-decoration: none">Other things</a><a href="https://hearmelissa.com/#press" style="text-decoration: none">Press kit</a>
</nav>


<!-- ========================================================================
     HELLO  (#hello, my note to fans)
     Nothing personal on purpose. The links under my signature are my socials
     and fan wikis. Bluesky still needs my handle.
     ======================================================================== -->
<section id="hello" class="fHello fHi" style="padding: 70px 48px 70px"><figure class="hiPhoto"><span class="tape" aria-hidden="true"></span><img src="@@A:images/headshot-window.jpg@@" alt="Melissa Medína"></figure><p class="hLede hScript" style="margin: 0; font-size: 46px; line-height: 1.15">Hey there!<br><span class="nw">This part's for <span>you</span>.</span></p><div class="dlg2"><p class="cue">MELISSA</p><p class="par">(warmly, to you)</p><p class="line">If a character you love led you here, thank you for following them all the way over. Every one of these roles was made for people like you, so since you're here... I'm glad you're here. Thanks for being curious!</p><p class="line">Come find me at a con, grab a signed print, or just say hi online.</p></div><div class="sig"><span class="sOff">With love,</span><span class="sName">Melissa<svg class="heart" viewBox="0 0 80 72" aria-hidden="true"><path d="M40 66 C 14 46, 2 30, 8 16 C 14 2, 34 4, 40 20 C 46 4, 66 2, 72 16 C 78 30, 64 48, 40 66"></path><path d="M14 18 L30 10 M11 27 L38 14 M13 36 L50 16 M18 44 L62 14 M24 51 L68 22 M30 57 L70 31 M36 62 L64 42"></path></svg></span></div><div class="hiLinks"><a href="https://x.com/melissamedinavo" target="_blank" rel="noopener" style="text-decoration: none">X</a><a href="#bsky" style="text-decoration: none">Bluesky</a><a href="https://www.instagram.com/melissamedinavo/" target="_blank" rel="noopener" style="text-decoration: none">Instagram</a><a href="https://www.imdb.com/name/nm10556515/" target="_blank" rel="noopener" style="text-decoration: none">IMDb</a><a href="https://starwars.fandom.com/wiki/Melissa_Medina" target="_blank" rel="noopener">Wookieepedia</a><a href="https://www.behindthevoiceactors.com/Melissa-Medina/" target="_blank" rel="noopener">Behind The Voice Actors</a></div></section>

<!-- ===== ROLES: same list as the Hire page. Paste a YouTube ID in clip to turn on the video. Edit charList() at the bottom ===== -->
<section id="roles" style="padding: 30px 48px 80px"><span class="slug">INT. GREEN ROOM. LATER.</span>
<div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid rgba(var(--rgb),0.6); padding-bottom: 14px">
<h2 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 400; font-size: 64px; line-height: 1">Characters you might know<svg class="hcirc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2.6,13.8 L3.9,11.6 L7.0,9.7 L10.2,7.8 L14.1,6.2 L17.6,4.4 L22.6,3.3 L26.8,1.7 L32.6,1.3 L37.6,0.0 L43.5,0.3 L49.1,-0.2 L54.8,-0.2 L60.6,-0.2 L66.2,0.4 L71.1,1.7 L76.5,2.5 L81.6,3.6 L85.1,5.5 L90.0,6.8 L93.4,8.7 L96.7,10.7 L97.6,13.0 L100.4,15.1 L100.9,17.4 L102.4,19.7 L101.8,22.1 L99.5,24.3 L99.8,26.7 L97.4,28.9 L93.8,30.7 L91.6,33.0 L86.6,34.3 L83.3,36.4 L78.2,37.6 L72.6,38.3 L67.9,39.8 L62.0,40.2 L56.2,40.4 L50.4,40.6 L44.6,40.5 L38.7,40.4 L33.1,39.7 L27.2,39.3 L22.4,37.8 L17.9,36.3 L13.6,34.7 L8.6,33.3 L6.1,31.1 L1.6,29.4 L-0.4,27.1 L-1.7,24.8 L-2.8,22.4 L-2.7,20.1 L-3.6,17.6 L-1.5,15.3 L0.4,13.1 L1.8,10.7 L4.2,8.5 L7.5,6.4 L12.3,4.9" vector-effect="non-scaling-stroke"></path></svg></h2>
<span style="font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.3em; color: var(--mute)">{{counter}}</span>
</div>
<div class="fRoleBox" style="display: grid; grid-template-columns: minmax(0, 1.75fr) minmax(0, 1fr); margin-top: 26px; border: 1px solid rgba(var(--rgb),0.2)">
<div style="position: relative; aspect-ratio: 16 / 11; overflow: hidden; background: #120D11">
<sc-for list="{{chars}}" as="r" hint-placeholder-count="8">
<div class="slide" aria-hidden="{{r.hidden}}" style="position: absolute; inset: 0; opacity: {{r.op}}; transform: scale({{r.scale}}); background: {{r.bg}}">
<img src="{{r.art}}" alt="{{r.name}}, {{r.game}}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: {{r.fit}}; object-position: {{r.pos}}; display: block">
<span aria-hidden="true" style="position: absolute; left: 0; right: 0; bottom: 0; height: 45%; background: linear-gradient(to top, rgba(10,6,9,0.85), rgba(10,6,9,0))"></span>
<p aria-hidden="true" style="position: absolute; left: 28px; bottom: 14px; margin: 0; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-size: 110px; line-height: 1; white-space: nowrap; color: #F3E6EA">{{r.name}}</p>
</div>
</sc-for>
<sc-if value="{{playing}}" hint-placeholder-val="{{ false }}"><iframe src="{{clipSrc}}" title="{{cur.name}} clip" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen="" style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0; background: #000"></iframe></sc-if>
</div>
<div class="fRoleSide" style="display: flex; flex-direction: column; gap: 16px; padding: 34px 30px; border-left: 1px solid rgba(var(--rgb),0.2)">
<span style="font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--acc)">{{cur.game}}</span>
<h3 class="fRoleName" style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-weight: 400; font-size: 48px; line-height: 1; text-transform: uppercase">{{cur.full}}</h3>
<sc-if value="{{cur.hasNote}}" hint-placeholder-val="{{ true }}"><p style="margin: 0; font-size: 19px; line-height: 1.45; color: var(--soft)">{{cur.note}}</p></sc-if>
<div style="display: flex; flex-direction: column; gap: 10px; margin-top: 4px">
<sc-if value="{{cur.noClip}}" hint-placeholder-val="{{ false }}"><span style="align-self: flex-start; padding: 6px 12px; border: 1px solid rgba(var(--rgb),0.4); font-family: 'Jost', sans-serif; font-size: 9.5px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--mute)">Clip coming soon</span></sc-if>
<sc-if value="{{cur.hasClip}}" hint-placeholder-val="{{ true }}"><button type="button" onClick="{{watch}}" style="display: inline-flex; align-items: center; justify-content: center; width: 100%; min-height: 48px; padding: 0 16px; border: 1px solid var(--ink); background: {{watchBg}}; color: {{watchInk}}; font-family: 'Jost', sans-serif; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; cursor: pointer">{{watchLabel}}</button></sc-if>
<sc-if value="{{cur.hasLink}}" hint-placeholder-val="{{ true }}"><a href="{{cur.link}}" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 16px; border: 1px solid rgba(var(--rgb),0.3); text-decoration: none; font-family: 'Jost', sans-serif; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase">{{cur.linkLabel}}&nbsp;↗</a></sc-if>
</div>
<div style="display: flex; gap: 10px; margin-top: auto">
<button type="button" onClick="{{prev}}" aria-label="Previous role" style="width: 48px; height: 48px; border-radius: 50%; border: 1px solid rgba(var(--rgb),0.4); background: none; color: var(--ink); cursor: pointer; display: flex; align-items: center; justify-content: center"><svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="currentColor" stroke-width="1.4"></path></svg></button>
<button type="button" onClick="{{next}}" aria-label="Next role" style="width: 48px; height: 48px; border-radius: 50%; border: 1px solid rgba(var(--rgb),0.4); background: none; color: var(--ink); cursor: pointer; display: flex; align-items: center; justify-content: center"><svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true"><path d="M7 3 L14 10 L7 17" fill="none" stroke="currentColor" stroke-width="1.4"></path></svg></button>
</div>
</div>
</div>
<div class="fThumbs" role="tablist" aria-label="Characters" style="display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 10px; margin-top: 12px">
<sc-for list="{{chars}}" as="r" hint-placeholder-count="8"><button type="button" role="tab" class="thumb" onClick="{{r.pick}}" aria-selected="{{r.selected}}" style="display: flex; flex-direction: column; gap: 8px; padding: 0; border: 0; background: none; color: var(--ink); text-align: left; cursor: pointer; opacity: {{r.thumbOp}}"><span style="display: block; height: 84px; overflow: hidden; background: {{r.bg}}; border-bottom: 2px solid {{r.line}}"><img src="{{r.art}}" alt="" style="width: 100%; height: 100%; object-fit: cover; object-position: {{r.thumbPos}}; display: block"></span><span style="font-family: 'Fraunces', Georgia, serif; font-style: italic; font-size: 17px; line-height: 1.1">{{r.name}}</span><span style="font-family: 'Jost', sans-serif; font-size: 9.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--mute)">{{r.short}}</span></button></sc-for>
</div>
<span class="trans">CUT TO:</span>
</section>


<!-- ========================================================================
     MORE CHARACTERS  (#characters)
     The smaller list. Edit moreChars() in MY CONTENT. Order there = order here.
     ======================================================================== -->
<section id="characters" style="padding: 20px 48px 90px"><span class="slug">INT. COSTUME DEPARTMENT. LATER.</span>
<div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid rgba(var(--rgb),0.6); padding-bottom: 14px">
<h2 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 400; font-size: 64px; line-height: 1">More characters<svg class="hcirc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M1.6,13.7 L4.4,11.7 L6.9,9.7 L10.2,7.8 L14.2,6.3 L18.4,4.8 L22.5,3.2 L27.2,2.0 L32.2,0.9 L37.9,0.5 L43.3,-0.4 L49.1,0.1 L54.8,-0.3 L60.2,0.5 L65.8,0.9 L71.0,1.8 L76.9,2.2 L81.4,3.7 L85.6,5.3 L90.0,6.8 L93.7,8.7 L95.6,10.9 L98.8,12.9 L99.5,15.2 L101.4,17.4 L102.1,19.7 L101.0,22.0 L100.7,24.4 L99.4,26.6 L96.1,28.6 L94.6,30.9 L90.4,32.6 L86.8,34.4 L82.5,35.9 L77.9,37.4 L73.4,39.0 L67.6,39.6 L62.2,40.6 L56.2,40.4 L50.4,40.7 L44.6,40.4 L38.7,40.4 L32.7,40.2 L27.5,39.0 L22.1,38.0 L17.8,36.3 L13.6,34.7 L9.4,33.1 L4.7,31.5 L2.1,29.3 L-0.7,27.2 L-2.1,24.8 L-2.2,22.4 L-2.5,20.1 L-3.1,17.7 L-1.2,15.4 L-0.3,13.0 L1.9,10.8 L5.2,8.8 L7.5,6.4 L12.8,5.1" vector-effect="non-scaling-stroke"></path></svg></h2>
<a href="@@P:hire@@#credits" style="font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; text-decoration: none; border-bottom: 1px solid var(--acc)">All credits →</a>
</div>
<div class="fScrollNav"><button type="button" data-dir="-1" aria-label="Scroll left" onClick="{{scrollSib}}">←</button><button type="button" data-dir="1" aria-label="Scroll right" onClick="{{scrollSib}}">→</button></div><ol class="fMore" style="list-style: none; margin: 8px 0 0; padding: 0; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); column-gap: 28px">
<sc-for list="{{more}}" as="m" hint-placeholder-count="20"><li style="display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 8px; padding: 18px 0; border-bottom: 1px solid rgba(var(--rgb),0.18)"><span style="font-family: 'Fraunces', Georgia, serif; font-size: 15px; color: var(--acc); padding-top: 4px">{{m.n}}</span><span style="display: flex; flex-direction: column; gap: 4px"><span style="font-family: 'Fraunces', Georgia, serif; font-style: italic; font-size: 21px; line-height: 1.15">{{m.c}}</span><span style="font-family: 'Jost', sans-serif; font-size: 9.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--mute)">{{m.g}}</span></span></li></sc-for>
</ol>
<span class="trans">SMASH CUT TO:</span>
</section>


<!-- ========================================================================
     SIGNED PRINTS  (#prints)
     One tab per character. Prints, art and Stripe links are in printList().
     A size with a Stripe link shows the price + Buy. No link = it says Soon.
     Prices are in the "price" line right under printList, by size.
     ======================================================================== -->
<section id="prints" style="padding: 80px 48px; background: var(--panel)"><span class="bpNote" aria-hidden="true" style="top: 170px; left: 14px">I sign every single one myself ♡</span><span class="coffee" style="right:-70px;top:-60px"></span><span class="slug">EXT. PRINT SHOP. NIGHT.</span>
<div class="fTwo" style="display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr); gap: 48px; align-items: end; border-bottom: 1px solid rgba(var(--rgb),0.6); padding-bottom: 20px">
<div style="display: flex; flex-direction: column; gap: 12px">
<h2 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-weight: 400; font-size: 64px; line-height: 1; text-transform: uppercase">Autographed prints<svg class="hcirc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M3.3,13.9 L3.6,11.6 L7.5,9.8 L9.3,7.6 L13.1,5.8 L18.2,4.7 L22.3,3.2 L27.3,2.1 L32.5,1.1 L37.7,0.2 L43.3,-0.3 L49.1,-0.1 L54.8,-0.2 L60.5,-0.0 L66.0,0.6 L71.0,1.8 L76.3,2.6 L81.1,3.9 L86.1,5.1 L90.0,6.8 L93.2,8.8 L95.4,10.9 L99.0,12.8 L99.4,15.2 L100.7,17.4 L100.8,19.7 L101.4,22.1 L101.0,24.4 L99.3,26.6 L97.4,28.9 L94.5,30.9 L91.1,32.8 L86.7,34.4 L83.4,36.4 L78.6,37.8 L73.2,38.8 L68.0,40.0 L62.2,40.6 L56.4,41.0 L50.4,41.1 L44.5,41.1 L38.6,40.6 L33.3,39.6 L27.2,39.2 L22.5,37.8 L17.2,36.6 L12.4,35.2 L8.9,33.2 L5.8,31.2 L2.4,29.3 L-0.6,27.2 L-2.3,24.8 L-3.7,22.5 L-3.9,20.1 L-3.4,17.6 L-1.9,15.3 L0.3,13.1 L1.1,10.6 L5.6,8.8 L7.5,6.5 L12.0,4.8" vector-effect="non-scaling-stroke"></path></svg></h2>
</div>
<p style="margin: 0; font-size: 19px; line-height: 1.55; color: var(--soft)">For everyone who can't make it to a con. Pick a character, pick a print and a size. I sign every one and mail it myself, with free shipping.</p>
</div>
<div class="fPrintTabs" role="tablist" aria-label="Characters" style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px">
<sc-for list="{{printTabs}}" as="p" hint-placeholder-count="8"><button type="button" role="tab" onClick="{{p.pick}}" aria-selected="{{p.selected}}" class="pTab" style="display: inline-flex; align-items: center; gap: 10px; min-height: 48px; padding: 5px 18px 5px 5px; border: 1px solid {{p.line}}; border-radius: 999px; background: {{p.bg}}; color: {{p.ink}}; cursor: pointer; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-size: 18px"><img src="{{p.art}}" alt="" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; object-position: {{p.pos}}; display: block">{{p.name}}</button></sc-for>
</div>
<div class="fPrints" style="display: flex; flex-direction: column; gap: 26px; margin-top: 30px">
<sc-for list="{{curPrints}}" as="q" hint-placeholder-count="1"><article class="fPrint" style="display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(0, 1fr); gap: 34px; align-items: start; padding: 18px; background: var(--bg); border: 1px solid rgba(var(--rgb),0.2)">
<div>
<sc-if value="{{q.real}}" hint-placeholder-val="{{ true }}"><button type="button" onClick="{{q.zoom}}" aria-label="Enlarge {{q.title}} print" style="display: block; width: 100%; padding: 0; border: 0; background: none; cursor: zoom-in"><img src="{{q.art}}" alt="{{q.title}} print" style="width: 100%; height: auto; display: block"></button></sc-if>
<sc-if value="{{q.stand}}" hint-placeholder-val="{{ false }}"><span style="display: block; aspect-ratio: 4 / 3; overflow: hidden; background: #120D11"><img src="{{q.art}}" alt="{{q.title}}" style="width: 100%; height: 100%; object-fit: cover; object-position: {{q.pos}}; display: block"></span></sc-if>
</div>
<div style="display: flex; flex-direction: column; gap: 6px; padding-top: 4px">
<span style="font-family: 'Jost', sans-serif; font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--acc)">Autographed print</span>
<span style="font-family: 'Fraunces', Georgia, serif; font-style: italic; font-size: 36px; line-height: 1.05">{{q.title}}</span>
<span style="margin-top: 14px; font-family: 'Jost', sans-serif; font-size: 9.5px; letter-spacing: 0.26em; text-transform: uppercase; color: var(--mute)">Choose a size</span>
<ul style="list-style: none; margin: 4px 0 0; padding: 0; border-top: 1px solid rgba(var(--rgb),0.25)">
<sc-for list="{{q.sizes}}" as="s" hint-placeholder-count="4"><li style="border-bottom: 1px solid rgba(var(--rgb),0.18)">
<sc-if value="{{s.live}}" hint-placeholder-val="{{ true }}"><a href="{{s.link}}" target="_blank" rel="noopener" class="pRow" style="display: grid; grid-template-columns: 52px minmax(0, 1fr) auto; gap: 14px; align-items: center; min-height: 72px; padding: 8px 6px; text-decoration: none"><span style="display: flex; align-items: flex-end; justify-content: center; height: 56px"><span class="pShape" style="display: block; width: {{s.w}}px; height: {{s.h}}px; border: 1.5px solid var(--ink); background: rgba(var(--rgb),0.06)"></span></span><span style="display: flex; flex-direction: column; gap: 3px"><span style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap"><span style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; line-height: 1">{{s.size}} <span style="font-size: 15px; color: var(--mute)">in</span></span><sc-if value="{{s.hasPrice}}" hint-placeholder-val="{{ true }}"><span class="pPrice" style="padding: 6px 11px; background: #B3242F; color: #F7EFE6; font-family: 'Jost', sans-serif; font-weight: 600; font-size: 15px; letter-spacing: 0.06em; line-height: 1">{{s.price}}</span><span style="font-family: 'Jost', sans-serif; font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: #E5484D">Free shipping</span></sc-if></span><sc-if value="{{s.hasNote}}" hint-placeholder-val="{{ false }}"><span style="font-family: 'Jost', sans-serif; font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: #E2508C">{{s.note}}</span></sc-if></span><span style="display: flex; align-items: center; gap: 16px"><span class="pGo" style="font-family: 'Jost', sans-serif; font-weight: 500; font-size: 10.5px; letter-spacing: 0.26em; text-transform: uppercase; padding: 10px 14px; border: 1px solid var(--ink)">Buy ↗</span></span></a></sc-if>
<sc-if value="{{s.off}}" hint-placeholder-val="{{ false }}"><div style="display: grid; grid-template-columns: 52px minmax(0, 1fr) auto; gap: 14px; align-items: center; min-height: 72px; padding: 8px 6px; color: var(--mute)"><span style="display: flex; align-items: flex-end; justify-content: center; height: 56px"><span style="display: block; width: {{s.w}}px; height: {{s.h}}px; border: 1.5px dashed rgba(var(--rgb),0.4)"></span></span><span style="display: flex; flex-direction: column; gap: 3px"><span style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap"><span style="font-family: 'Fraunces', Georgia, serif; font-size: 22px; line-height: 1">{{s.size}} <span style="font-size: 15px">in</span></span><sc-if value="{{s.hasPrice}}" hint-placeholder-val="{{ true }}"><span class="pPrice" style="padding: 6px 11px; background: #B3242F; color: #F7EFE6; font-family: 'Jost', sans-serif; font-weight: 600; font-size: 15px; letter-spacing: 0.06em; line-height: 1">{{s.price}}</span><span style="font-family: 'Jost', sans-serif; font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: #E5484D">Free shipping</span></sc-if></span><sc-if value="{{s.hasNote}}" hint-placeholder-val="{{ false }}"><span style="font-family: 'Jost', sans-serif; font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase">{{s.note}}</span></sc-if></span><span style="font-family: 'Jost', sans-serif; font-size: 10px; letter-spacing: 0.26em; text-transform: uppercase">Soon</span></div></sc-if>
</li></sc-for>
</ul>
</div>
</article></sc-for>
</div>
<p style="margin: 22px 0 0; font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--mute)">Every print is signed by hand and shipped by me, and shipping is free. Checkout is handled by Stripe.</p>
<span class="trans">DISSOLVE TO:</span>
</section>
<sc-if value="{{hasZoom}}" hint-placeholder-val="{{ false }}"><div role="dialog" aria-label="Print preview" onClick="{{closeZoom}}" style="position: fixed; inset: 0; z-index: 60; display: flex; align-items: center; justify-content: center; background: rgba(10,6,9,0.85); cursor: zoom-out"><img src="{{zoomSrc}}" alt="Print preview" style="max-width: 80vw; max-height: 86vh; width: auto; height: auto; display: block; box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7)"></div></sc-if>


<!-- ========================================================================
     CONVENTIONS  (#cons)
     How fans can request me, upcoming cons, and a line for organizers.
     ======================================================================== -->
<section id="cons" style="border-top: 1px solid rgba(var(--rgb),0.25)"><span class="bpNote" aria-hidden="true" style="top: 160px; left: 14px">come say hi. I don’t bite (much)</span><span class="slug">EXT. CON FLOOR. DAY.</span>
<div class="fTwo" style="display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr)">
<div style="padding: 70px 48px; border-right: 1px solid rgba(var(--rgb),0.25); display: flex; flex-direction: column; gap: 16px">
<h2 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-weight: 400; font-size: 64px; line-height: 1; text-transform: uppercase">Conventions<svg class="hcirc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M3.1,13.9 L4.6,11.7 L6.4,9.6 L10.2,7.8 L14.1,6.2 L17.6,4.4 L22.6,3.3 L27.2,2.0 L32.6,1.3 L37.7,0.2 L43.5,0.3 L49.1,-0.1 L54.9,-0.5 L60.3,0.5 L65.9,0.8 L71.0,1.7 L76.3,2.7 L81.2,3.8 L86.2,5.1 L90.2,6.8 L92.6,8.9 L96.3,10.7 L98.1,13.0 L99.1,15.2 L100.5,17.4 L101.1,19.7 L101.1,22.0 L101.4,24.4 L99.5,26.7 L96.1,28.6 L94.3,30.8 L90.5,32.6 L86.7,34.4 L83.3,36.3 L77.6,37.2 L73.2,38.8 L67.9,39.9 L61.8,39.9 L56.2,40.6 L50.4,41.1 L44.6,40.5 L38.8,40.4 L33.2,39.6 L27.2,39.3 L22.0,38.1 L17.1,36.7 L13.3,34.9 L9.5,33.0 L4.7,31.5 L3.0,29.2 L0.7,27.0 L-0.8,24.7 L-3.3,22.5 L-3.0,20.1 L-2.2,17.7 L-1.0,15.4 L-0.2,13.0 L2.8,10.9 L5.6,8.9 L8.2,6.7 L12.1,4.8" vector-effect="non-scaling-stroke"></path></svg></h2>
<p style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-size: 28px; line-height: 1.2">Want me at your next con? You have all the power.</p>
<ol style="list-style: none; margin: 6px 0 0; padding: 0; border-top: 1px solid var(--ink)">
<li style="display: grid; grid-template-columns: 54px minmax(0, 1fr); gap: 10px; padding: 16px 0; border-bottom: 1px solid rgba(var(--rgb),0.2)"><span class="aIco ic-megaphone" aria-hidden="true"></span><span style="display: flex; flex-direction: column; gap: 4px"><span style="font-family: 'Fraunces', Georgia, serif; font-size: 24px; line-height: 1.1">Post about it</span><span style="font-size: 18px; line-height: 1.5; color: var(--soft)">Share on socials that you want me there. Tag the convention and tag me, @melissamedinavo, so we both see it.</span></span></li>
<li style="display: grid; grid-template-columns: 54px minmax(0, 1fr); gap: 10px; padding: 16px 0; border-bottom: 1px solid rgba(var(--rgb),0.2)"><span class="aIco ic-mail" aria-hidden="true"></span><span style="display: flex; flex-direction: column; gap: 4px"><span style="font-family: 'Fraunces', Georgia, serif; font-size: 24px; line-height: 1.1">Ask the con directly</span><span style="font-size: 18px; line-height: 1.5; color: var(--soft)">Most conventions have a guest request form on their website. You can also email them and ask for me by name.</span></span></li>
<li style="display: grid; grid-template-columns: 54px minmax(0, 1fr); gap: 10px; padding: 16px 0; border-bottom: 1px solid rgba(var(--rgb),0.2)"><span class="aIco ic-check" aria-hidden="true"></span><span style="display: flex; flex-direction: column; gap: 4px"><span style="font-family: 'Fraunces', Georgia, serif; font-size: 24px; line-height: 1.1">That's it</span><span style="font-size: 18px; line-height: 1.5; color: var(--soft)">It really is that easy. If enough of you ask, I'll be there.</span></span></li>
</ol>
</div>
<div style="padding: 70px 48px; display: flex; flex-direction: column; gap: 14px">
<span style="font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--mute)">Where I'll be</span>
<ul style="list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--ink)">
<sc-for list="{{cons}}" as="k" hint-placeholder-count="5"><li style="display: grid; grid-template-columns: 150px minmax(0, 1fr); gap: 16px; padding: 15px 0; border-bottom: 1px solid rgba(var(--rgb),0.2)"><span style="font-family: 'Jost', sans-serif; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--mute); padding-top: 6px">{{k.when}}</span><span style="font-family: 'Fraunces', Georgia, serif; font-size: 26px; line-height: 1.1">{{k.name}}</span></li></sc-for>
</ul><p class="conNote">Don't see your con? Ask them for me, and tag @melissamedinavo so I see it too.</p>
</div>
</div>
<div class="fOrg" style="display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 30px 48px; align-items: center; padding: 50px 48px; background: #4E1F45; color: #F3E6EA">
<div style="display: flex; flex-direction: column; gap: 12px; max-width: 760px">
<span style="font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.32em; text-transform: uppercase; color: #E7BEDB">For organizers</span>
<h3 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 400; font-size: 40px; line-height: 1.1">Your attendees asked for me? Let's make it happen.</h3>
<p style="margin: 0; font-size: 19px; line-height: 1.55; color: #E9D6E2">I'm easy to work with and easy to host. I travel light, keep my needs simple, and show up ready to give your attendees something to remember, from panels and signings to prints and workshops.</p>
</div>
<div style="display: flex; flex-direction: column; gap: 12px; align-items: stretch">
<button type="button" class="fbtn" onClick="{{copyEmail}}" style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px; padding: 0 26px; border: 0; background: #F3E6EA; color: #4E1F45; font-family: 'Jost', sans-serif; font-weight: 500; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; cursor: pointer"><svg width="13" height="13" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 6 H16 V18 H6 Z M4 14 V2 H13" fill="none" stroke="currentColor" stroke-width="1.5"></path></svg>{{copyLabel}}</button>
<a href="@@P:hire@@#booking" style="text-align: center; font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.26em; text-transform: uppercase; text-decoration: none; border-bottom: 1px solid #E7BEDB; padding-bottom: 4px; align-self: center">Or reach my reps →</a>
</div>
</div>
<span class="trans">CUT TO:</span>
</section>


<!-- ========================================================================
     APPEARANCES  (#appearances, talks + panels)
     Edit the text right here.
     ======================================================================== -->
<section id="appearances" style="padding: 80px 48px"><span class="coffee faint" style="left:-80px;bottom:-80px;transform:rotate(30deg)"></span><span class="slug">EXT. MAIN STAGE. NIGHT.</span>
<div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid rgba(var(--rgb),0.6); padding-bottom: 14px">
<h2 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-weight: 400; font-size: 64px; line-height: 1; text-transform: uppercase">Appearances<svg class="hcirc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M3.1,13.9 L4.3,11.7 L6.8,9.7 L10.5,7.9 L14.2,6.3 L17.5,4.4 L22.2,3.1 L27.5,2.2 L32.4,1.0 L37.7,0.2 L43.3,-0.2 L49.1,-0.5 L54.9,-0.6 L60.5,-0.0 L66.3,0.3 L71.3,1.5 L76.1,2.7 L81.7,3.6 L85.2,5.5 L88.9,7.2 L92.3,9.0 L95.9,10.8 L98.9,12.8 L99.6,15.2 L101.9,17.4 L102.2,19.7 L100.8,22.0 L100.4,24.3 L99.1,26.6 L97.1,28.8 L94.4,30.9 L90.2,32.5 L87.3,34.6 L82.4,35.9 L78.1,37.5 L73.0,38.7 L67.4,39.3 L62.1,40.4 L56.3,40.8 L50.4,40.7 L44.5,41.0 L38.9,40.2 L32.7,40.2 L27.9,38.7 L22.0,38.1 L17.4,36.6 L13.4,34.8 L9.3,33.1 L4.6,31.5 L2.2,29.3 L-0.1,27.1 L-2.0,24.8 L-2.0,22.4 L-3.2,20.1 L-3.6,17.6 L-1.5,15.3 L-0.2,13.0 L1.0,10.6 L4.1,8.5 L8.5,6.8 L11.6,4.6" vector-effect="non-scaling-stroke"></path></svg></h2>
<span style="font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--mute)">Cons · events · talks · podcasts</span>
</div>
<div class="fTalks" style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0">
<sc-for list="{{appear}}" as="a" hint-placeholder-count="4"><div style="padding: 30px 26px 30px 0; display: flex; flex-direction: column; gap: 12px; border-right: {{a.rule}}; padding-left: {{a.padL}}"><span class="aIco ic-{{a.ic}}" aria-hidden="true"></span><h3 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-weight: 400; font-size: 30px; line-height: 1; text-transform: uppercase">{{a.t}}</h3><p style="margin: 0; font-size: 18.5px; line-height: 1.55; color: var(--soft)">{{a.l}}</p><sc-if value="{{a.soon}}" hint-placeholder-val="{{ false }}"><span style="align-self: flex-start; padding: 5px 10px; border: 1px solid rgba(var(--rgb),0.5); font-family: 'Jost', sans-serif; font-size: 9.5px; letter-spacing: 0.24em; text-transform: uppercase">Coming soon</span></sc-if></div></sc-for>
</div>
<span class="trans">MATCH CUT TO:</span>
</section>


<!-- ========================================================================
     OTHER THINGS I'M UP TO  (#other)
     Music + audio dramas, same data as the Hire page.
     ======================================================================== -->
<section id="other" style="padding: 80px 48px 0"><span class="slug">INT. MELISSA'S STUDIO. AFTER HOURS.</span>
<div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid rgba(var(--rgb),0.6); padding-bottom: 14px">
<h2 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 400; font-size: 64px; line-height: 1">Other things I'm up to<svg class="hcirc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2.6,13.8 L4.4,11.7 L7.5,9.8 L9.7,7.7 L14.2,6.3 L17.6,4.4 L22.5,3.2 L27.1,1.9 L32.2,0.9 L38.0,0.7 L43.3,-0.4 L49.1,0.1 L54.8,-0.5 L60.2,0.5 L66.2,0.4 L71.4,1.5 L76.5,2.5 L81.3,3.8 L86.2,5.1 L89.3,7.1 L93.6,8.7 L95.0,11.0 L97.7,13.0 L100.1,15.1 L101.2,17.4 L102.1,19.7 L101.8,22.1 L100.0,24.3 L98.6,26.5 L96.6,28.7 L93.7,30.7 L91.5,32.9 L87.6,34.7 L82.8,36.1 L78.1,37.5 L72.6,38.3 L67.9,39.9 L62.1,40.3 L56.2,40.5 L50.4,41.2 L44.5,40.9 L38.9,40.1 L33.0,39.9 L27.8,38.8 L22.8,37.6 L17.7,36.4 L12.8,35.0 L8.4,33.4 L6.0,31.2 L2.7,29.2 L-0.3,27.1 L-1.0,24.7 L-3.5,22.5 L-3.1,20.1 L-3.2,17.7 L-1.0,15.4 L-0.4,13.0 L2.4,10.9 L5.4,8.8 L8.2,6.7 L11.7,4.7" vector-effect="non-scaling-stroke"></path></svg></h2>
</div>
<div class="ctabs" role="tablist" aria-label="Other things I'm up to" style="display: flex; flex-wrap: wrap; gap: 4px 30px; margin-top: 22px; padding: 6px 0 2px; border-bottom: 1px solid rgba(var(--rgb),0.15)">
<sc-for list="{{otherTabs}}" as="m" hint-placeholder-count="2"><button type="button" role="tab" onClick="{{m.pick}}" aria-selected="{{m.selected}}" style="min-height: 46px; padding: 0; margin-bottom: -1px; border: 0; border-bottom: 2px solid {{m.line}}; background: none; color: {{m.ink}}; font-family: 'Jost', sans-serif; font-weight: 500; font-size: 11.5px; letter-spacing: 0.24em; text-transform: uppercase; cursor: pointer">{{m.label}}</button></sc-for>
</div>
</section>
<div style="display: {{showMusic}}">


<!-- ========================================================================
     MUSIC  (#music-inner)
     Bslick, Lunaiira, my originals.
     ======================================================================== -->
<section id="music-inner" style="position: relative; padding: 80px 48px 70px"><span class="slug">INT. RECORDING STUDIO. NIGHT.</span>
<div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid rgba(var(--rgb),0.6); padding-bottom: 14px">
<h2 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 400; font-size: 64px; line-height: 1">Music<svg class="hcirc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2.2,13.8 L4.8,11.8 L6.7,9.6 L10.1,7.8 L13.9,6.1 L18.5,4.8 L22.5,3.2 L27.1,1.9 L32.6,1.3 L37.9,0.5 L43.5,0.2 L49.1,-0.5 L54.8,-0.4 L60.6,-0.1 L66.2,0.4 L71.5,1.4 L76.8,2.3 L80.6,4.1 L85.3,5.4 L89.1,7.1 L92.5,9.0 L95.6,10.9 L98.2,12.9 L100.6,15.1 L100.6,17.4 L101.2,19.7 L102.0,22.1 L99.5,24.3 L98.0,26.5 L96.0,28.6 L94.6,30.9 L91.3,32.9 L87.2,34.6 L82.4,35.9 L78.3,37.7 L72.7,38.4 L67.8,39.8 L62.3,40.7 L56.3,41.0 L50.4,40.6 L44.6,40.7 L38.8,40.3 L32.7,40.2 L27.3,39.2 L22.4,37.8 L17.7,36.4 L13.5,34.7 L8.6,33.3 L5.8,31.2 L2.2,29.3 L0.0,27.1 L-1.7,24.8 L-3.6,22.5 L-2.2,20.1 L-2.2,17.7 L-2.1,15.3 L0.6,13.1 L1.2,10.6 L5.5,8.8 L7.4,6.4 L11.8,4.7" vector-effect="non-scaling-stroke"></path></svg></h2>
</div>
<p style="margin: 18px 0 0; max-width: 760px; font-size: 19px; line-height: 1.55; color: var(--soft)">I'm not a touring singer anymore, but I still sing &amp; collaborate with composers for games &amp; animation. Opera, musical theater, pop and folk, in English, Spanish and other languages, including fantasy languages and cinematic vocalise.</p>

<!-- with Bslick -->
<div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px; margin-top: 40px">
<h3 style="margin: 0; font-weight: 400; font-style: italic; font-size: 34px">Melissa Medína x <a href="https://www.youtube.com/channel/UCT15Whb1wFyd4g4qrQ_3s6Q" target="_blank" rel="noopener" style="text-decoration: none; border-bottom: 1px solid var(--acc)">Bslick</a></h3>
<a href="{{spotifyBslick}}" target="_blank" rel="noopener" style="font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; text-decoration: none; border-bottom: 1px solid var(--acc)">Stream on Spotify ↗</a>
</div>
<div class="hTwoVid" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; margin-top: 16px">
<sc-for list="{{piggyVids}}" as="v" hint-placeholder-count="2"><figure style="margin: 0; display: flex; flex-direction: column; gap: 10px"><span style="position: relative; display: block; aspect-ratio: 16 / 9; background: #120D11"><iframe src="{{v.src}}" title="{{v.t}}" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen="" style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0"></iframe></span><figcaption style="display: flex; flex-direction: column; gap: 3px"><span style="font-weight: 400; font-size: 21px; line-height: 1.15">{{v.t}}</span><span style="font-family: 'Jost', sans-serif; font-size: 9.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--mute)">{{v.by}}<sc-if value="{{v.hasViews}}" hint-placeholder-val="{{ true }}"> <span class="views">{{v.views}}</span></sc-if></span></figcaption></figure></sc-for>
</div>
<ul style="list-style: none; margin: 18px 0 0; padding: 0; border-top: 1px solid rgba(var(--rgb),0.3)">
<sc-for list="{{piggyMore}}" as="s" hint-placeholder-count="2"><li style="border-bottom: 1px solid rgba(var(--rgb),0.2)"><a href="{{s.href}}" target="_blank" rel="noopener" style="display: flex; justify-content: space-between; align-items: center; gap: 16px; min-height: 58px; text-decoration: none"><span style="display: flex; flex-direction: column; gap: 2px"><span style="font-weight: 400; font-size: 20px">{{s.t}}</span><span style="font-family: 'Jost', sans-serif; font-size: 9.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--mute)">{{s.by}}</span></span><span style="font-family: 'Jost', sans-serif; font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase">Watch ↗</span></a></li></sc-for>
</ul>

<!-- with Lunaiira: art goes in LUNAIIRA_ART at the bottom -->
<div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px; margin-top: 54px">
<h3 style="margin: 0; font-weight: 400; font-style: italic; font-size: 34px">Melissa Medína x Lunaiira</h3>
<a href="https://www.youtube.com/@LUNAIIRA" target="_blank" rel="noopener" style="font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; text-decoration: none; border-bottom: 1px solid var(--acc)">Watch on YouTube ↗</a>
</div>
<div class="hSplit" style="display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr); gap: 36px; margin-top: 16px; align-items: center">
<a href="https://www.youtube.com/@LUNAIIRA" target="_blank" rel="noopener" style="display: block; text-decoration: none">
<sc-if value="{{hasLunArt}}" hint-placeholder-val="{{ false }}"><img src="{{lunArt}}" alt="Lunaiira" style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block"></sc-if>
<sc-if value="{{noLunArt}}" hint-placeholder-val="{{ true }}"><span style="width: 100%; aspect-ratio: 1 / 1; display: flex; align-items: center; justify-content: center; background: #2A1426; color: #F3E6EA; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-size: 58px">Lunaiira</span></sc-if>
</a>
<div style="display: flex; flex-direction: column; gap: 18px">
<p style="margin: 0; font-size: 21px; line-height: 1.5; color: var(--soft)">An audio drama musical, told in story and song.</p>
<p style="margin: 0; font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--mute); line-height: 2">Created by Morgan Clae · <a href="https://www.youtube.com/channel/UCZIcdn_SJHx2Kn_vS9lUD1A/videos" target="_blank" rel="noopener" style="color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--acc)">YouTube</a> · <a href="https://www.instagram.com/morganclae/?hl=en" target="_blank" rel="noopener" style="color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--acc)">Instagram</a></p>
<a href="https://www.instagram.com/lunaiirathemusical/?hl=en" target="_blank" rel="noopener" style="display: inline-flex; align-self: flex-start; align-items: center; gap: 14px; min-height: 64px; padding: 0 34px; background: var(--ink); color: var(--bg); text-decoration: none; font-family: 'Jost', sans-serif; font-weight: 500; font-size: 13px; letter-spacing: 0.26em; text-transform: uppercase">Follow Lunaiira on Instagram <span style="font-size: 18px; letter-spacing: 0">↗</span></a>
</div>
</div>

<!-- my originals -->
<h3 style="margin: 54px 0 0; font-weight: 400; font-style: italic; font-size: 34px">Original music</h3>
<div class="hSplit" style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 24px; margin-top: 16px; align-items: start">
<figure style="margin: 0; display: flex; flex-direction: column; gap: 10px"><span style="position: relative; display: block; aspect-ratio: 16 / 9; background: #120D11"><iframe src="{{hollowSrc}}" title="Hollow" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen="" style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0"></iframe></span><figcaption style="display: flex; justify-content: space-between; align-items: baseline; gap: 12px"><span style="font-weight: 400; font-size: 21px">Hollow</span><span style="font-family: 'Jost', sans-serif; font-size: 9.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--mute)">Original · 10.31.25</span></figcaption></figure>
<div style="display: flex; flex-direction: column; gap: 10px">
<sc-for list="{{scTracks}}" as="s" hint-placeholder-count="5"><iframe src="{{s.src}}" title="{{s.t}} on SoundCloud" loading="lazy" allow="autoplay" style="display: block; width: 100%; height: 116px; border: 0"></iframe></sc-for>
<a href="https://soundcloud.com/mrsmissyms" target="_blank" rel="noopener" style="font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; text-decoration: none; border-bottom: 1px solid var(--acc); align-self: flex-start; margin-top: 4px">More on SoundCloud ↗</a>
</div>
</div>
<span class="trans">SMASH CUT TO:</span>
</section>
</div>
<div style="display: {{showDramas}}">


<!-- ========================================================================
     AUDIO DRAMAS  (#audiodramas)
     Edit dramaList() in MY CONTENT.
     ======================================================================== -->
<section id="audiodramas" style="padding: 70px 48px 80px; background: var(--panel)"><span class="coffee" style="right:-50px;bottom:-70px;transform:rotate(-20deg)"></span><span class="slug">INT. RADIO PLAY. MIDNIGHT.</span>
<div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid rgba(var(--rgb),0.6); padding-bottom: 14px">
<h2 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 400; font-size: 64px; line-height: 1">Audio dramas<svg class="hcirc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M3.0,13.9 L3.6,11.6 L7.2,9.8 L9.6,7.7 L14.1,6.2 L17.9,4.6 L22.0,2.9 L26.9,1.7 L32.1,0.8 L37.9,0.4 L43.5,0.2 L49.1,-0.3 L54.7,0.1 L60.2,0.5 L65.8,0.9 L71.4,1.4 L76.6,2.4 L81.1,3.9 L85.7,5.3 L89.3,7.1 L93.6,8.7 L95.8,10.9 L98.3,12.9 L99.4,15.2 L100.8,17.4 L102.0,19.7 L101.3,22.0 L100.0,24.3 L98.3,26.5 L97.6,28.9 L94.0,30.8 L90.6,32.7 L87.1,34.5 L83.0,36.2 L78.1,37.5 L72.8,38.5 L67.5,39.5 L61.9,40.0 L56.3,40.8 L50.4,41.0 L44.5,41.1 L38.8,40.3 L33.2,39.6 L27.2,39.3 L22.0,38.1 L17.8,36.3 L12.9,35.0 L9.5,33.0 L5.1,31.4 L2.5,29.2 L0.9,27.0 L-2.5,24.9 L-3.0,22.5 L-4.1,20.1 L-2.5,17.7 L-2.7,15.2 L-0.5,13.0 L2.4,10.8 L4.6,8.6 L8.0,6.6 L12.8,5.1" vector-effect="non-scaling-stroke"></path></svg></h2>
<span style="font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--mute)">Horror · thriller · dark fiction</span>
</div>
<div class="hShows" role="tablist" aria-label="Shows" style="display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; margin-top: 28px">
<sc-for list="{{shows}}" as="s" hint-placeholder-count="4"><button type="button" role="tab" aria-selected="{{s.selected}}" onClick="{{s.pick}}" style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px; padding: 12px 12px 14px; border: 1px solid {{s.line}}; background: {{s.bg}}; color: {{s.ink}}; text-align: left; cursor: pointer">
<sc-if value="{{s.hasArt}}" hint-placeholder-val="{{ true }}"><img src="{{s.art}}" alt="" style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block"></sc-if>
<sc-if value="{{s.noArt}}" hint-placeholder-val="{{ false }}"><span style="width: 100%; aspect-ratio: 1 / 1; display: flex; align-items: center; justify-content: center; border: 1px solid currentColor; font-family: 'Fraunces', Georgia, serif; font-style: italic; font-size: 54px; opacity: 0.7">{{s.more}}</span></sc-if>
<span style="font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 400; font-size: 21px; line-height: 1.05">{{s.show}}</span>
<span style="margin-top: auto; font-family: 'Jost', sans-serif; font-size: 9.5px; letter-spacing: 0.22em; text-transform: uppercase; opacity: 0.75">{{s.count}}</span>
</button></sc-for>
</div>
<p style="margin: 26px 0 0; max-width: 760px; font-size: 18px; line-height: 1.5; color: var(--soft)">{{curShow.blurb}}</p>
<ul class="hEps" style="list-style: none; margin: 18px 0 0; padding: 0; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px">
<sc-for list="{{curShow.eps}}" as="e" hint-placeholder-count="6"><li><a href="{{e.href}}" target="_blank" rel="noopener" style="display: flex; flex-direction: column; gap: 6px; height: 100%; box-sizing: border-box; padding: 16px 18px; background: var(--bg); border-left: 3px solid var(--acc); text-decoration: none">
<sc-if value="{{e.hasArt}}" hint-placeholder-val="{{ true }}"><img src="{{e.art}}" alt="" style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block; margin-bottom: 8px"></sc-if>
<span style="display: flex; flex-direction: column; gap: 6px; min-width: 0; flex: 1">
<span style="font-weight: 400; font-size: 20px; line-height: 1.15">{{e.t}}</span>
<sc-if value="{{e.hasRole}}" hint-placeholder-val="{{ true }}"><span style="font-style: italic; font-size: 15px; line-height: 1.3; color: var(--soft)">{{e.roleTxt}}</span></sc-if>
<span style="margin-top: auto; display: flex; justify-content: space-between; gap: 10px; padding-top: 6px; font-family: 'Jost', sans-serif; font-size: 9.5px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--mute)"><span>{{e.date}}</span><span style="color: var(--ink)">Listen ↗</span></span>
</span>
</a></li></sc-for>
</ul>
<span class="trans">CUT TO:</span>
</section>
</div>


<!-- ========================================================================
     PRESS KIT  (#press)
     Short bio + what's in the kit. When the download is ready, swap the
     "Download · coming soon" tag for a real link.
     ======================================================================== -->
<section id="press" style="background: #4E1F45; color: #F3E6EA; padding: 80px 48px 90px"><span class="slug">INT. PRESS ROOM. DAY.</span>
<div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid #F3E6EA; padding-bottom: 14px">
<h2 style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-weight: 400; font-size: 70px; line-height: 0.95; text-transform: uppercase">Press kit<svg class="hcirc" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M3.3,13.9 L5.3,11.9 L7.5,9.8 L9.5,7.6 L14.2,6.3 L17.5,4.4 L22.1,3.0 L27.2,2.0 L32.6,1.3 L37.7,0.1 L43.3,-0.4 L49.1,-0.2 L54.8,-0.2 L60.3,0.4 L66.1,0.6 L71.4,1.4 L75.9,2.9 L81.5,3.7 L85.7,5.3 L88.8,7.2 L92.1,9.1 L94.9,11.0 L99.0,12.8 L100.5,15.1 L101.6,17.4 L101.5,19.7 L100.6,22.0 L99.6,24.3 L98.9,26.6 L97.3,28.9 L93.9,30.8 L90.3,32.6 L87.0,34.5 L82.8,36.1 L78.5,37.8 L72.7,38.4 L67.6,39.6 L62.0,40.2 L56.3,41.0 L50.4,40.7 L44.5,41.0 L38.6,40.7 L33.0,39.8 L27.5,39.0 L21.8,38.2 L17.9,36.3 L13.6,34.7 L9.2,33.2 L5.3,31.3 L2.4,29.3 L0.9,27.0 L-0.7,24.7 L-3.5,22.5 L-3.7,20.1 L-2.3,17.7 L-1.2,15.4 L-0.6,13.0 L2.3,10.8 L5.0,8.7 L9.0,6.9 L11.5,4.6" vector-effect="non-scaling-stroke"></path></svg></h2>
<span style="padding: 8px 14px; border: 1px solid #F3E6EA; font-family: 'Jost', sans-serif; font-size: 10px; letter-spacing: 0.26em; text-transform: uppercase">Download · coming soon</span>
</div>
<div class="fTwo" style="display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: 56px; margin-top: 34px">
<div style="display: flex; flex-direction: column; gap: 14px">
<span style="font-family: 'Jost', sans-serif; font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; color: #E7BEDB">Short bio</span>
<p style="margin: 0; font-family: 'Fraunces', Georgia, serif; font-size: 22px; line-height: 1.45">Melissa Medína is a voice, mocap and singing actor known for Callis in Borderlands 4, which won Best Female Video Game Performance at the One Voice Awards, plus Warframe: 1999, Starfield and Star Wars: The Old Republic. Based in Minnesota, they work with studios in 23 countries.</p>
<p style="margin: 6px 0 0; font-size: 17px; line-height: 1.55; color: #E9D6E2">Please use the headshots and art in this kit. They're protected against AI use, so use these instead of any other pictures.</p>
</div>
<ul style="list-style: none; margin: 0; padding: 0; border-top: 1px solid #F3E6EA">
<sc-for list="{{kit}}" as="k" hint-placeholder-count="6"><li style="display: grid; grid-template-columns: 40px minmax(0, 1fr); gap: 12px; padding: 13px 0; border-bottom: 1px solid rgba(243,230,234,0.25)"><span class="aIco ic-{{k.ic}}" aria-hidden="true"></span><span style="display: flex; flex-direction: column; gap: 2px"><span style="font-family: 'Fraunces', Georgia, serif; font-size: 24px; line-height: 1.05; text-transform: uppercase">{{k.t}}</span><span style="font-size: 16.5px; line-height: 1.4; color: #E9D6E2">{{k.l}}</span></span></li></sc-for>
</ul>
</div>
<div style="display: flex; align-items: center; gap: 18px; flex-wrap: wrap; margin-top: 30px"><span style="font-size: 18px; color: #E9D6E2">Press &amp; interview requests</span><button type="button" class="fbtn" onClick="{{copyEmail}}" style="display: inline-flex; align-items: center; gap: 10px; min-height: 46px; padding: 0 20px; border: 1px solid #F3E6EA; background: none; color: #F3E6EA; font-family: 'Jost', sans-serif; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; cursor: pointer"><svg width="13" height="13" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 6 H16 V18 H6 Z M4 14 V2 H13" fill="none" stroke="currentColor" stroke-width="1.5"></path></svg>{{copyLabel}}</button></div>
<span class="trans">FADE OUT.</span>
</section>

<!-- ===== FOOTER: socials, logo, sign-off ===== -->
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
  const tp = document.createElement('template'); tp.id = 'hm-tpl-fans'; tp.innerHTML = fix(TPL); document.body.appendChild(tp);
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
  const a = e.target.closest && e.target.closest('#hm-fans a[data-jump]'); if (!a) return;
  e.preventDefault(); e.stopPropagation();
  const id = a.dataset.jump; if (!id) return;
  const el = document.getElementById('hm-fans').querySelector('#' + CSS.escape(id));
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}, true);
window.__hmBoot_fans = (Component) => {
  const tpl = document.getElementById('hm-tpl-fans').content;
  const root = document.getElementById('hm-fans');
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
// ----------------------------------------------------------------------
// AUDIO DRAMAS: one block per show, episodes inside. role '' hides the role line.
// ----------------------------------------------------------------------
function dramaList() {
  // AUDIO DRAMAS: one block per show. art = show cover ('' for none). Each episode: title, role ('' hides it), date, link, art ('' for none)
  return [
    { show: "Campfire Radio Theater", art: "@@A:images/drama-show-campfire-radio-theater.jpg@@", blurb: "Full-cast horror in the tradition of classic radio drama, written and directed by John Ballentine.", eps: [
      { t: "Blood Drive", role: "", date: "Apr 2025", href: "https://campfireradiotheater.podbean.com/e/blood-drive/", art: "@@A:images/drama-campfire-blood-drive.jpg@@" },
      { t: "West Palm Readers", role: "Mary", date: "2024", href: "https://campfireradiotheater.podbean.com/", art: "@@A:images/drama-campfire-west-palm-readers.jpg@@" },
      { t: "Desecrate", role: "Holly", date: "Oct 2023", href: "https://campfireradiotheater.podbean.com/e/desecrate/", art: "@@A:images/drama-campfire-desecrate.jpg@@" },
      { t: "The Dreams of Wolves", role: "Callie. Also sings \"All the Pretty Little Horses\" & \"Wayfaring Stranger\"", date: "Oct 2022", href: "https://campfireradiotheater.podbean.com/e/the-dreams-of-wolves/", art: "@@A:images/drama-campfire-dreams-of-wolves.jpg@@" },
      { t: "The Bones of Saint Nicholas", role: "", date: "Dec 2021", href: "https://campfireradiotheater.podbean.com/e/the-bones-of-saint-nicholas/", art: "@@A:images/drama-campfire-bones-of-saint-nicholas.jpg@@" }
    ] },
    { show: "The Antiquarium of Sinister Happenings", art: "@@A:images/drama-antiquarium.jpg@@", blurb: "Every relic in this shop has a sordid tale. A weekly full-cast horror anthology from Bloody FM.", eps: [
      { t: "Lot 149: I Work In A Store That Sells Haunted Objects", role: "Narrator", date: "Sep 2026", href: "https://podcasts.apple.com/us/podcast/the-antiquarium-of-sinister-happenings/id1697653759", art: "@@A:images/drama-antiquarium.jpg@@" },
      { t: "Lot 108: Simon Says", role: "Narrator", date: "Jan 2026", href: "https://podcasts.apple.com/us/podcast/the-antiquarium-of-sinister-happenings/id1697653759", art: "@@A:images/drama-antiquarium.jpg@@" },
      { t: "Lot 099: #magicmurderbear", role: "Jess", date: "Oct 2025", href: "https://podcasts.apple.com/us/podcast/the-antiquarium-of-sinister-happenings/id1697653759", art: "@@A:images/drama-antiquarium.jpg@@" },
      { t: "Lot 093: Keep The Lights On", role: "SD", date: "Sep 2025", href: "https://podcasts.apple.com/us/podcast/the-antiquarium-of-sinister-happenings/id1697653759", art: "@@A:images/drama-antiquarium.jpg@@" },
      { t: "Lot 088: I Worked As A Topless Maid For One Day (Part 2)", role: "Alice", date: "Jul 2025", href: "https://the-antiquarium-of-sinister-happenings.simplecast.com/episodes/lots-088-i-worked-as-a-topless-maid-for-one-daypart-2-MiqcYOht", art: "@@A:images/drama-antiquarium.jpg@@" },
      { t: "Lot 087: I Worked As A Topless Maid For One Day (Part 1)", role: "Alice", date: "Jul 2025", href: "https://podcasts.apple.com/us/podcast/the-antiquarium-of-sinister-happenings/id1697653759", art: "@@A:images/drama-antiquarium.jpg@@" },
      { t: "Lot 086: Third Watch", role: "Officer Bowan", date: "Jun 2025", href: "https://the-antiquarium-of-sinister-happenings.simplecast.com/episodes/lot-086-third-watch-mdXR03ul", art: "@@A:images/drama-antiquarium.jpg@@" },
      { t: "Lot 079: The Woman at the Bar", role: "The Woman", date: "Apr 2025", href: "https://the-antiquarium-of-sinister-happenings.simplecast.com/episodes/lot-079-the-woman-at-the-bar-fldhym9Q", art: "@@A:images/drama-antiquarium.jpg@@" },
      { t: "On My First Day Back, I Discovered Something Horrifying", role: "Ava", date: "2025", href: "https://podcasts.apple.com/us/podcast/the-antiquarium-of-sinister-happenings/id1697653759", art: "@@A:images/drama-antiquarium.jpg@@" },
      { t: "Lot 057: The Funeral: Finale", role: "Emma", date: "Sep 2024", href: "https://the-antiquarium-of-sinister-happenings.simplecast.com/episodes/lot-057-the-funeral-finale-a-triology-in-two-parts-ggRxRQ_M", art: "@@A:images/drama-antiquarium.jpg@@" },
      { t: "Lot 056: The Funeral", role: "Emma", date: "Sep 2024", href: "https://the-antiquarium-of-sinister-happenings.simplecast.com/episodes/lot-056-the-funeral-a-trilogy-in-two-parts-kD25Kepr", art: "@@A:images/drama-antiquarium.jpg@@" }
    ] },
    { show: "Ominous Thrill", art: "@@A:images/drama-show-ominous-thrill.jpg@@", blurb: "Black Mirror meets Silent Hill meets American Horror Story, created by sound designer Jeff Schmidt and built in Dolby Atmos.", eps: [
      { t: "Stress Kills", role: "Violet", date: "Feb 2025", href: "https://podcasts.apple.com/us/podcast/stress-kills/id1726990321?i=1000691759223", art: "@@A:images/drama-ominous-stress-kills.jpg@@" },
      { t: "Her Horrorween: The Solitude of Birds", role: "Narrator", date: "By Sandra Becerril", href: "https://podcasts.apple.com/us/podcast/ominous-thrill/id1726990321", art: "@@A:images/drama-ominous-solitude-of-birds.jpg@@" }
    ] },
    { show: "Cold Open Stories", art: "@@A:images/drama-show-cold-open-stories.jpg@@", blurb: "Short fiction and pulp stories turned into award-winning full-cast audio dramas, from original worlds to the grimdark 41st millennium.", eps: [
      { t: "Invasive Affairs: Belladonna", role: "Meriza & Orchid", date: "Apr 2024", href: "https://coldopenstories.podbean.com/e/invasive-affairs-belladonna-original-full-cast-audio-drama", art: "@@A:images/drama-coldopen-belladonna.jpg@@" },
      { t: "On The Hunter's Watch", role: "Marlene O'Serra Barcov", date: "2021", href: "https://www.coldopenstories.com/podcast/on-the-hunters-watch/", art: "@@A:images/drama-coldopen-on-the-hunters-watch.jpg@@" }
    ] },
    { show: "More shows", art: "", blurb: "Narration, true horror and anthology work across a handful of other shows.", eps: [
      { t: "Disturbed: True Horror Stories", role: "\"My Sleep Paralysis Demon is Actually a Pretty Chill Guy\"", date: "Oct 2023", href: "https://www.youtube.com/watch?v=rUU-uHgUfd8", art: "" },
      { t: "The Invenios Expeditions", role: "Narrator", date: "2025", href: "https://plinkhq.com/i/304481704/e/1000716303034", art: "" },
      { t: "Parcast", role: "29 episodes, in one playlist", date: "", href: "https://open.spotify.com/playlist/3hvZxX7Xpwr7FPHgt51ybm", art: "" },
      { t: "Silent Key", role: "", date: "", href: "https://www.playpodcast.net/podcast/silent-key/", art: "" },
      { t: "Chilling Tales for Dark Nights", role: "", date: "", href: "https://www.chillingtalesfordarknights.com/", art: "" },
      { t: "Your Horror Show", role: "", date: "", href: "https://www.yourhorrorshow.com/", art: "" }
    ] }
  ];
}
// Lunaiira art: paste the image link between the quotes
const LUNAIIRA_ART = '@@A:images/music-lunaiira.jpg@@';

// ----------------------------------------------------------------------
// MORE CHARACTERS: c = character, g = game. Order here is the order on the page.
// ----------------------------------------------------------------------
function moreChars() {
  // MORE CHARACTERS: c = character, g = game. Order is the order on the page.
  return [
    { c: "Zanuhali, Nitowikwe & Mahuwsa", g: "Final Fantasy XIV" },
    { c: "Sara & the Trackers Alliance Agent", g: "Starfield" },
    { c: "Beastmaster Lina & Hanna", g: "Fallout 76" },
    { c: "Fracture AI", g: "Valorant" },
    { c: "Seekxilts", g: "The Elder Scrolls Online" },
    { c: "Elsa", g: "Frozen x Honor of Kings" },
    { c: "Rebecca", g: "The Mortuary Assistant" },
    { c: "SSGT Alejandra Herrera", g: "Aliens: Fireteam" },
    { c: "Bridget Ardeo", g: "Punishing: Gray Raven" },
    { c: "Tulip", g: "Arknights" },
    { c: "Cardinal Rain & The Empress", g: "Hunt: Showdown" },
    { c: "Anat", g: "Dying Light" },
    { c: "Dawn", g: "SELACO" },
    { c: "Allira, Cuckoo & Despair", g: "Duskfade" }
  ];
}

// ----------------------------------------------------------------------
// PRINTS: paste a Stripe link next to a size to put it on sale. '' = Soon, no price.
// ----------------------------------------------------------------------
function printList() {
  // SIGNED PRINTS: one block per character (same order as charList). Each print has its own image and title.
  // Paste each Stripe payment link next to its size. Leave '' and that size shows as "Soon".
  // To add another print for a character, copy a { title ... } block inside that character's prints.
  const blank = () => ({ '4x6': '', '8x10': '', '11x17': '', '18x24': '' });
  return [
    { char: 'Callis', prints: [{ title: 'Callis', art: '', sizes: blank() }] },
    { char: 'Heta Kol', prints: [{ title: 'Heta Kol', art: '', sizes: blank() }] },
    { char: 'Gala', prints: [{ title: 'Gala', art: '', sizes: blank() }] },
    { char: 'Lettie', prints: [{ title: 'Lettie', art: '@@A:images/print-lettie-01.jpg@@', sizes: { '4x6': '', '8x10': '', '11x17': 'https://buy.stripe.com/cNi3cu8aD7AE6G08JNbAs00', '18x24': '' } }] },
    { char: 'Santos', prints: [{ title: 'Adelina Santos', art: '', sizes: blank() }] },
    { char: 'Deadeye', prints: [{ title: 'Deadeye', art: '', sizes: blank() }] },
    { char: 'Putra', prints: [{ title: 'Putra', art: '', sizes: blank() }] },
    { char: 'Yuel', prints: [{ title: 'Yuel', art: '', sizes: blank() }] }
  ];
}

// ----------------------------------------------------------------------
// FAN ROLES: same characters as Hire. link '' hides the wiki button.
// ----------------------------------------------------------------------
function charList() {
  // CHARACTERS: art = image link, fit 'cover' fills the frame / 'contain' shows the whole image on bg.
  // clip = YouTube ID ('' hides the watch button). link '' hides the link button. note '' hides the line.
  return [
    { name: 'Callis', full: 'Ripper Queen Callis', short: 'Borderlands 4', game: 'Borderlands 4', art: '@@A:images/char-callis.jpg@@', fit: 'cover', pos: '50% 30%', bg: '#120D11', clip: '', note: '', link: '', linkLabel: 'Fandom wiki' },
    { name: 'Heta Kol', full: 'Heta Kol', short: 'SWTOR', game: 'Star Wars: The Old Republic', art: '@@A:images/char-heta-kol.jpg@@', fit: 'cover', pos: '40% 35%', bg: '#120D11', clip: '', note: '', link: '', linkLabel: 'Fandom wiki' },
    { name: 'Gala', full: 'Gala', short: 'AFK Journey', game: 'AFK Journey', art: '@@A:images/char-gala.jpg@@', fit: 'contain', pos: '50% 50%', bg: '#3A0E12', clip: '', note: '', link: '', linkLabel: 'Fandom wiki' },
    { name: 'Lettie', full: 'Lettie', short: 'Warframe: 1999', game: 'Warframe: 1999', art: '@@A:images/char-lettie.jpg@@', fit: 'cover', pos: '50% 22%', bg: '#5E6268', clip: '', note: '', link: '', linkLabel: 'Fandom wiki' },
    { name: 'Santos', full: 'Adelina Santos', short: 'Ace Combat 8', game: 'Ace Combat 8: Wings of Theve', art: '@@A:images/char-adelina-santos.jpg@@', fit: 'contain', pos: '50% 50%', bg: '#2A2228', clip: '', note: '', link: '', linkLabel: 'Fandom wiki' },
    { name: 'Deadeye', full: 'Olivia, aka Deadeye', short: 'Black Desert', game: 'Black Desert Online', art: '@@A:images/char-deadeye.jpg@@', fit: 'cover', pos: '60% 40%', bg: '#120D11', clip: '', note: '', link: '', linkLabel: 'Fandom wiki' },
    { name: 'Putra', full: 'Putra', short: 'Monkey Island', game: 'Return to Monkey Island', art: '@@A:images/char-putra.jpg@@', fit: 'contain', pos: '50% 50%', bg: '#1C2B45', clip: '', note: '', link: '', linkLabel: 'Fandom wiki' },
    { name: 'Yuel', full: 'Yuel', short: 'Granblue Fantasy', game: 'Granblue Fantasy', art: '@@A:images/char-yuel.jpg@@', fit: 'cover', pos: '55% 30%', bg: '#120D11', clip: '', note: '', link: '', linkLabel: 'Fandom wiki' }
  ];
}
const REEL_ID = 'F93S3Hjf6zQ'; // REEL: just the YouTube ID (the part after watch?v=)
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
    this.state = { reelOpen: false, copied: false, ci: 0, playing: false, pc: 0, zoom: '', other: 'music', show: 0 };
  }
  renderVals() {
    return {
      setJump: this.setJump,
      setInk: this.setInk,
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
      copyLabel: this.state.copied ? 'Copied' : 'Copy email',
      copyEmail: () => { sgCopy('melissamedinavo@gmail.com'); this.setState({ copied: true }); clearTimeout(this.ct); this.ct = setTimeout(() => this.setState({ copied: false }), 2200); },
      // MUSIC
      spotifyBslick: 'https://open.spotify.com/search/Bslick',
      // views: rough YouTube count, leave '' to hide
      piggyVids: [
        { t: 'The Untold Story (Willow Wolf) · Piggy: Book 2', views: '3 million+ views', by: 'Bslick & Melissa Medína', src: 'https://www.youtube-nocookie.com/embed/p9KCTErGtBE?rel=0' },
        { t: 'When Did I Grow Up', views: '', by: 'Bslick & Melissa Medína', src: 'https://www.youtube-nocookie.com/embed/xtZ6UTHUWzw?rel=0' }
      ].map((v) => ({ ...v, hasViews: !!v.views })),
      piggyMore: [
        { t: 'Out of Time · Piggy: Intercity', by: 'Bslick, Melissa Medína & Matt Curtis', href: 'https://www.youtube.com/watch?v=Wny9oMafyr4' },
        { t: 'Willow Wolf: Yet to Die · Piggy', by: 'Bslick & Melissa Medína', href: 'https://www.youtube.com/watch?v=CVK_740CoMY' }
      ],
      hollowSrc: 'https://www.youtube-nocookie.com/embed/FLZXeghzH6k?rel=0',
      scTracks: ['trollabundin', 'good-enough', 'la-llorona', 'is-there-life-on-mars', 'dlnbtb'].map((s) => ({ t: s, src: 'https://w.soundcloud.com/player/?url=' + encodeURIComponent('https://soundcloud.com/mrsmissyms/' + s) + '&color=%234e1f45&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false&show_artwork=false&color=%23b8232f' })),
            shows: dramaList().map((d, i) => { const on = i === this.state.show; return { show: d.show, art: d.art, hasArt: !!d.art, noArt: !d.art, more: '+' + d.eps.length, count: d.eps.length + (d.eps.length === 1 ? ' episode' : (d.art ? ' episodes' : ' shows')), selected: on ? 'true' : 'false', bg: on ? 'var(--ink)' : 'var(--bg)', ink: on ? 'var(--bg)' : 'var(--ink)', line: on ? 'var(--ink)' : 'rgba(var(--rgb),0.25)', pick: () => this.setState({ show: i }) }; }),
      curShow: (() => { const d = dramaList()[this.state.show]; return { blurb: d.blurb, eps: d.eps.map((e) => ({ t: e.t, art: e.art, hasArt: !!e.art, role: e.role, hasRole: !!e.role, roleTxt: /^(Also|My|")/.test(e.role) || e.role === 'Narrator' ? e.role : 'as ' + e.role, date: e.date || '', href: e.href || '#audiodramas' })) }; })(),
      otherTabs: [['music', 'Music'], ['dramas', 'Audio dramas']].map(([k, label]) => { const on = k === this.state.other; return { label, selected: on ? 'true' : 'false', ink: on ? 'var(--ink)' : 'var(--soft)', line: on ? 'var(--acc)' : 'transparent', pick: () => this.setState({ other: k }) }; }),
      showMusic: this.state.other === 'music' ? 'block' : 'none',
      showDramas: this.state.other === 'dramas' ? 'block' : 'none',
      lunArt: LUNAIIRA_ART, hasLunArt: !!LUNAIIRA_ART, noLunArt: !LUNAIIRA_ART,
      hasZoom: !!this.state.zoom, zoomSrc: this.state.zoom || '', closeZoom: () => this.setState({ zoom: '' }),
      more: moreChars().map((m, i) => ({ ...m, n: String(i + 1).padStart(2, '0') })),
      ...(() => {
        const chars = charList(); const pl = printList(); const pc = this.state.pc;
        const look = (name) => chars.find((c) => c.name === name) || chars[0];
        const note = { '18x24': 'Special order · ships later' };
const price = { '11x17': '$35' }; // PRINT PRICES: add a size here, like '8x10': '$25', and it shows next to that size for every character
        const label = (k) => k.replace('x', ' × ');
        return {
          printTabs: pl.map((p, i) => { const c = look(p.char); const on = i === pc; return { name: p.char, art: c.art, pos: c.fit === 'contain' ? '50% 15%' : c.pos, selected: on ? 'true' : 'false', bg: on ? 'var(--ink)' : 'var(--bg)', ink: on ? 'var(--bg)' : 'var(--ink)', line: on ? 'var(--ink)' : 'rgba(var(--rgb),0.25)', pick: () => this.setState({ pc: i }) }; }),
          curPrints: pl[pc].prints.map((q) => { const c = look(pl[pc].char); const dims = { '4x6': [4, 6], '8x10': [8, 10], '11x17': [11, 17], '18x24': [18, 24] }; return { title: q.title, art: q.art || c.art, zoom: () => this.setState({ zoom: q.art }), real: !!q.art, stand: !q.art, pos: c.fit === 'contain' ? '50% 15%' : c.pos, sizes: Object.keys(q.sizes).map((k) => { const d = dims[k] || [8, 10]; return { size: label(k), note: note[k] || '', hasNote: !!note[k], w: Math.round(d[0] * 2.2), h: Math.round(d[1] * 2.2), link: q.sizes[k], live: !!q.sizes[k], off: !q.sizes[k], price: q.sizes[k] ? (price[k] || '') : '', hasPrice: !!price[k] && !!q.sizes[k], soonTxt: 'Soon' }; }) }; })
        };
      })(),
      cards: charList().map((r) => ({ name: r.full, game: r.short, art: r.art, bg: r.bg, cardPos: r.fit === 'contain' ? '50% 18%' : r.pos })),
      appear: [
        { t: 'Conventions', l: 'Panels, signings, autographs & prints. I love to travel.', soon: false },
        { t: 'Special events', l: 'Libraries, schools & online events. Last up: ToshoCon, talking voice acting with kids.', soon: false },
        { t: 'Public talks', l: 'How I came to voice acting, and why you should make something too.', soon: true },
        { t: 'Podcasts & interviews', l: 'Horror, sci-fi, true crime, AI in entertainment, Latino culture in media & more.', soon: false }
      ].map((a, i, all) => ({ ...a, ic: ['ticket', 'star', 'mic', 'phones'][i] || 'star', n: String(i + 1).padStart(2, '0') + '.', rule: i < all.length - 1 ? '1px solid rgba(var(--rgb),0.2)' : '0', padL: i ? '26px' : '0' })),
      ...(() => {
        const list = charList(); const n = list.length; const ci = this.state.ci; const c = list[ci];
        const go = (i) => this.setState({ ci: (i + n) % n, playing: false });
        const thumbPos = (r) => (r.fit === 'contain' ? '50% 20%' : r.pos);
        return {
          chars: list.map((r, i) => ({ name: r.name, short: r.short, game: r.game, art: r.art, fit: r.fit, pos: r.pos, thumbPos: thumbPos(r), bg: r.bg, op: i === ci ? 1 : 0, scale: i === ci ? 1 : 1.04, hidden: i === ci ? 'false' : 'true', selected: i === ci ? 'true' : 'false', thumbOp: i === ci ? 1 : 0.55, line: i === ci ? 'var(--acc)' : 'transparent', pick: () => go(i) })),
          cur: { name: c.name, full: c.full, game: c.game, note: c.note, hasNote: !!c.note, hasClip: !!c.clip, noClip: !c.clip, link: c.link, hasLink: !!c.link, linkLabel: c.linkLabel },
          counter: String(ci + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0'),
          playing: this.state.playing && !!c.clip,
          clipSrc: c.clip ? 'https://www.youtube-nocookie.com/embed/' + c.clip + '?autoplay=1&rel=0&modestbranding=1&playsinline=1' : '',
          watchLabel: this.state.playing ? 'Close' : 'Watch ' + c.name,
          watchBg: this.state.playing ? 'var(--ink)' : 'transparent',
          watchInk: this.state.playing ? 'var(--bg)' : 'var(--ink)',
          watch: () => this.setState({ playing: !this.state.playing }),
          prev: () => go(ci - 1),
          next: () => go(ci + 1)
        };
      })(),
      cons: [
        { when: 'Mar 9–13', name: 'GDC' },
        { when: 'Mar 26–29', name: 'VO Atlanta' },
        { when: 'Aug 15–19', name: 'ExcaliburCon' }
      ],
      topics: ['Horror movies', 'Sci-fi movies', 'True horror', 'True crime', 'Food', 'AI in entertainment', 'Data science', 'VO when you don’t live in LA', 'Strong women in media', 'Latino culture in entertainment', 'VO in games', 'VO in commercials', 'Social media for VOs', 'Self-care for VOs'],
      prints: [
        { bg: 'linear-gradient(170deg, var(--panel2), var(--panel))', tilt: -2 },
        { bg: 'linear-gradient(170deg, var(--panel2), var(--panel))', tilt: 1.5 },
        { bg: 'linear-gradient(170deg, var(--panel2), var(--panel))', tilt: -1 }
      ],
      songs: [
        { n: '01', t: 'Hollow', where: 'Listen' },
        { n: '02', t: 'Piggy', where: 'Roblox' },
        { n: '03', t: 'More on SoundCloud', where: 'SoundCloud' }
      ],
      kit: [
        { ic: 'doc', n: 'i.', t: 'Bios', l: 'Short and long, written in third person, ready to paste.' },
        { ic: 'camera', n: 'ii.', t: 'Headshots', l: 'High resolution, color and black & white, protected against AI use.' },
        { ic: 'brush', n: 'iii.', t: 'Character art', l: 'Approved images with credit lines for each studio.' },
        { ic: 'list', n: 'iv.', t: 'Fact sheet', l: 'Notable credits, awards, languages, based in, socials.' },
        { ic: 'tag', n: 'v.', t: 'Name & pronouns', l: 'Melissa Medína, spelled with the accent. They.' },
        { ic: 'logo', n: 'vi.', t: 'Logos', l: 'Wordmark for event posters and lineups.' }
      ]
    };
  }
}

window.__hmBoot_fans(Component);


/* ========================================================================
   6. LINK CLEANER  (keeps every link a full, clean address)
   Page links become https://hearmelissa.com/#hire etc. (Home is just
   https://hearmelissa.com/). Jump-down-the-page links point at this
   page's full address and remember where to jump in data-jump, so
   nothing ever links to a bare #section or to hearmelissa.com/#.
   ======================================================================== */
(function () {
  const SITE = 'https://hearmelissa.com/', KEY = 'fans';
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
  // deep links from anywhere: https://hearmelissa.com/?go=groups#coaching
  // opens the Coaching page and scrolls to the spot with id="groups"
  if (!window.__hmGoUsed) { window.__hmGoUsed = true; const q = new URLSearchParams(location.search).get('go'); if (q) window.__hmGo = q; }
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
    const seo = document.getElementById('hm-' + KEY + '-seo'); if (seo) seo.remove();
    const root = document.getElementById('hm-' + KEY); if (!root) return setTimeout(start, 200);
    setInterval(() => goTo(root), 250);
    clean(root);
    new MutationObserver(() => clean(root)).observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
  };
  start();
})();

})();
