(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6874)}])},3703:function(n,e,t){"use strict";t.r(e),t.d(e,{CircleBounce:function(){return f}});var i=t(7297),s=t(5893),a=t(7294),r=t(990),o=t(6546),l=t(6403),c=t(9664);class d{}d.initialize=void(r.ZP.registerPlugin(o.ScrollTrigger),r.ZP.registerPlugin(c.ScrollToPlugin),r.ZP.registerPlugin(l.TextPlugin),d.appGsap=r.ZP);let h=(n,e)=>{let t=n.to("#".concat(e),{autoAlpha:1,duration:2,y:0,ease:"bounce",repeat:-1,repeatDelay:3});return t},p=(n,e,t)=>n.set(e,{autoAlpha:0,...t});var x=t(9521);function u(){let n=(0,i.Z)(["\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-color: red;\n"]);return u=function(){return n},n}let m=x.ZP.div.withConfig({componentId:"sc-214c2ceb-0"})(u()),f=n=>{let{id:e,className:t=""}=n;return(0,a.useEffect)(()=>{p(d.appGsap,"#".concat(e),{y:-200}),h(d.appGsap,e).play()},[]),(0,s.jsx)(m,{id:e,className:t})}},9505:function(n,e,t){"use strict";t.r(e),t.d(e,{Cube:function(){return o},TopSection:function(){return x}});var i=t(5893),s=t(5152),a=t.n(s);let r=a()(()=>t.e(257).then(t.t.bind(t,4210,23)).then(n=>(t(2778),n.default)),{loadableGenerated:{webpack:()=>[4210]},ssr:!1}),o=n=>{let{className:e=" "}=n,t=n=>{},s=(n,e)=>{n.createCanvas(n.windowWidth,n.windowHeight,n.WEBGL).parent(e)},a=n=>{n.background(0);for(var e=0;e<=1e3;e+=500)for(var t=0;t<=1e3;t+=500)n.noFill(),n.stroke(255,147,206),n.rotateX(.01*n.frameCount),n.rotateY(.01*n.frameCount),n.box(200,200,200)},o=n=>{n.resizeCanvas(n.windowWidth,n.windowHeight)};return(0,i.jsx)(r,{className:e,preload:t,setup:s,draw:a,windowResized:o})};var l=t(7297),c=t(9521),d=t(5537);function h(){let n=(0,l.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n\n  .top-wrap {\n    ",";\n    height: 100%;\n\n    .top-title {\n      ",";\n      height: 100%;\n      text-transform: uppercase;\n\n      .title {\n        font-size: 3rem;\n        font-weight: bold;\n      }\n\n      .desc {\n        line-height: 1;\n        display: block;\n        font-size: 1.5rem;\n        font-weight: bold;\n      }\n    }\n\n    .border {\n      border-bottom: 1px solid #fff;\n      display: block;\n      height: 1px;\n      width: 70%;\n      margin: 15px 0;\n    }\n  }\n\n  .scroll-down {\n    position: absolute;\n    left: 50%;\n    bottom: 10px;\n    height: 50px;\n\n    span {\n      position: absolute;\n      left: -20px;\n      top: -50px;\n      color: #eee;\n      font-size: 0.7rem;\n      letter-spacing: 0.05em;\n    }\n\n    &::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      width: 1px;\n      height: 50px;\n      background: #eee;\n      animation: path-move 1.4s ease-in-out infinite;\n      opacity: 0;\n    }\n  }\n\n  @keyframes path-move {\n    0% {\n      height: 0;\n      top: 0;\n      opacity: 0;\n    }\n    30% {\n      height: 50px;\n      opacity: 1;\n    }\n    100% {\n      height: 0;\n      top: 50px;\n      opacity: 0;\n    }\n  }\n"]);return h=function(){return n},n}let p=c.ZP.section.withConfig({componentId:"sc-5f05e10a-0"})(h(),(0,d.j2)({}),(0,d.j2)({alignItems:"flex-start"})),x=n=>{let{className:e}=n;return(0,i.jsxs)(p,{className:e,"data-testid":"top-section",children:[(0,i.jsx)("div",{className:"top-wrap",children:(0,i.jsxs)("div",{className:"top-title",children:[(0,i.jsx)("h2",{className:"title",children:"naohito-T.github.io"}),(0,i.jsx)("p",{className:"desc",children:"Code as you design."}),(0,i.jsx)("p",{className:"desc",children:"Software Engineer"}),(0,i.jsx)("span",{className:"border"})]})}),(0,i.jsx)("div",{className:"scroll-down",children:(0,i.jsx)("span",{children:"Scroll"})})]})}},6874:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return W},default:function(){return F}});var i,s,a,r,o=t(5893),l=t(1163),c=t(7297),d=t(5152),h=t.n(d),p=t(9008),x=t.n(p);class u{}i="production",u.RUN_ENV=void 0!==i?i:"development";class m extends u{}m.PAGE_TITLE="NAOHITO-T.GITHUB.IO",m.PAGE_DESCRIPTION="千葉出身。都内（銀座）での美容師経験があるソフトウェアエンジニア。モデル撮影のために購入したmacを使っていたらPCの仕組みが気になり始め、気づいたらエンジニアに。人生まるごとクリエイティブだと思っている。人の髪をデザインしていた経験をIT業界へ活かせることはないか日々模索中。",m.PAGE_URL="development"===m.RUN_ENV?"http://localhost:3000/":"https://moderato.vercel.app/",m.PAGE_OG_IMAGE="/images/about_me.jpg",m.COPYRIGHT="\xa9NAOHITO-T.GITHUB.IO";class f extends u{}f.MEDIA_PC="(min-width: 769px)",f.MEDIA_SP="(max-width: 768px)",f.MEDIA_SMALL_SP="(max-width: 375px)";var g=t(3454);class w extends u{}w.MICRO_CMS_DOMAIN=null!==(s=g.env.MICRO_CMS_DOMAIN)&&void 0!==s?s:"",w.MICRO_CMS_API_KEY=null!==(a=g.env.MICRO_CMS_API_KEY)&&void 0!==a?a:"",w.PUBLIC_URL=null!==(r=g.env.PUBLIC_URL)&&void 0!==r?r:"http://localhost:3000";let j=n=>{let{pageFullPath:e,pageAsPath:t,pageTitle:i,pageDesc:s,ogpImage:a,noIndex:r=!1}=n,l=null!=i?i:m.PAGE_TITLE,c=null!=s?s:m.PAGE_DESCRIPTION,d=null!=e?e:m.PAGE_URL,h=m.PAGE_TITLE,p=null!=a?a:m.PAGE_OG_IMAGE;return(0,o.jsxs)(x(),{children:[(0,o.jsx)("title",{children:l}),(0,o.jsx)("meta",{name:"description",content:c}),(0,o.jsx)("meta",{property:"og:title",content:l}),(0,o.jsx)("meta",{property:"og:description",content:c}),(0,o.jsx)("meta",{property:"og:type",content:"/"===t?"blog":"article"}),(0,o.jsx)("meta",{property:"og:url",content:d}),(0,o.jsx)("meta",{property:"og:site_name",content:h}),(0,o.jsx)("meta",{property:"og:image",content:p}),(0,o.jsx)("meta",{property:"og:locale",content:"ja_JP"}),(0,o.jsx)("meta",{property:"fb:app_id",content:""}),r&&(0,o.jsx)("meta",{name:"robots",content:"noindex"})]})};var b=t(9521),v=t(5537);function N(){let n=(0,c.Z)(["\n  ","\n  background: transparent;\n  z-index: 10;\n  user-select: none;\n  height: 80px;\n\n  .timeline-wrapper {\n    position: relative;\n    padding: 0 2rem;\n\n    .timeline {\n      position: absolute;\n\n      .circle {\n      }\n    }\n  }\n\n  .title {\n    height: 100%;\n    line-height: 80px;\n  }\n"]);return N=function(){return n},n}let _=h()(()=>Promise.resolve().then(t.bind(t,3703)).then(n=>n.CircleBounce),{loadableGenerated:{webpack:()=>[3703]},loading:()=>(0,o.jsx)(o.Fragment,{}),ssr:!1}),P=b.ZP.header.withConfig({componentId:"sc-4c510791-0"})(N(),(0,v.j2)({alignItems:"center",flexDirection:"row",justifyContent:"flex-start"})),I=n=>{let{className:e=""}=n;return(0,o.jsxs)(P,{className:e,"data-testid":"header",children:[(0,o.jsx)("div",{className:"timeline-wrapper",children:(0,o.jsx)(_,{id:"circle-bounce"})}),(0,o.jsx)("h1",{className:"title",children:m.PAGE_TITLE})]})};function C(){let n=(0,c.Z)(["\n  font-size: ",";\n  letter-spacing: 0.05rem;\n"]);return C=function(){return n},n}let y=b.ZP.p.withConfig({componentId:"sc-89fb79d6-0"})(C(),n=>n.size),G=n=>{let{className:e="",size:t}=n;return(0,o.jsx)(y,{className:e,size:t,children:(0,o.jsx)("small",{children:m.COPYRIGHT})})};function E(){let n=(0,c.Z)(["\n        font-size: 1.5rem;\n      "]);return E=function(){return n},n}function A(){let n=(0,c.Z)(["\n  height: 100vh;\n  width: 100%;\n\n  .footer-inner {\n    ",";\n    height: 90%;\n  }\n\n  .footer-mail {\n    ",";\n    width: 100%;\n    overflow: hidden;\n\n    .mail-text {\n      font-size: 2rem;\n      overflow: hidden;\n      ","\n    }\n  }\n\n  .footer-copyright {\n    height: 10%;\n    text-align: center;\n  }\n"]);return A=function(){return n},n}let T=b.ZP.footer.withConfig({componentId:"sc-e0b2a830-0"})(A(),(0,v.j2)({justifyContent:"space-evenly",alignItems:"center",flexDirection:"row"}),(0,v.j2)({}),(0,v.tL)(E())),M=n=>{let{className:e=""}=n;return(0,o.jsxs)(T,{className:e,"data-testid":"footer",children:[(0,o.jsx)("div",{className:"footer-inner",children:(0,o.jsxs)("div",{className:"footer-mail",children:[(0,o.jsx)("h2",{className:"mail-text",children:"WORK CONTACT"}),(0,o.jsx)("h2",{className:"mail-text",children:"NAOHITO-T"})]})}),(0,o.jsx)(G,{className:"footer-copyright",size:"1rem"})]})};function O(){let n=(0,c.Z)(["\n  width: 100%;\n\n  .header {\n    position: fixed;\n    width: 100%;\n    height: 80px;\n  }\n\n  .cube {\n    position: absolute;\n    z-index: -10;\n  }\n\n  .main {\n    padding-top: 80px;\n    width: 100%;\n  }\n"]);return O=function(){return n},n}t(3703);let H=h()(()=>Promise.resolve().then(t.bind(t,9505)).then(n=>n.Cube),{loadableGenerated:{webpack:()=>[9505]},ssr:!1}),R=b.ZP.div.withConfig({componentId:"sc-ccff19c4-0"})(O()),D=n=>{let{disableRightClick:e=!1,children:t}=n;return(0,o.jsxs)(R,{className:"layout",onContextMenu:n=>e&&n.preventDefault(),"data-testid":"layout",children:[(0,o.jsx)(I,{className:"header"}),(0,o.jsx)(H,{className:"cube"}),t]})};var Z=t(9505);function k(){let n=(0,c.Z)(["\n  width: 100%;\n  ","\n  .top {\n    height: 100%;\n  }\n\n  .content {\n    width: 100%;\n    padding: 10vw 5% 5vw;\n  }\n\n  .item {\n    display: flex;\n    flex-wrap: nowrap;\n    margin-bottom: 10vw;\n  }\n\n  .item:nth-child(odd) {\n    flex-direction: row-reverse;\n  }\n\n  .item .image {\n    width: 35%;\n    max-height: 300px;\n    height: 15vw;\n    overflow: visible;\n  }\n\n  .item .image img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 8px;\n  }\n\n  .item .text {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    width: 50%;\n    margin: 0 5%;\n    background: rgb(32 32 32 / 75%);\n    border-radius: 8px;\n  }\n"]);return k=function(){return n},n}let S=b.ZP.div.withConfig({componentId:"sc-f9edcded-0"})(k(),(0,v.j2)({})),B=n=>{let{className:e}=n;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(S,{className:e,"data-testid":"top-tpl",children:[(0,o.jsx)(Z.TopSection,{}),(0,o.jsxs)("div",{className:"content",children:[(0,o.jsxs)("div",{className:"item",children:[(0,o.jsx)("div",{className:"image","data-scroll-speed":"-2",children:(0,o.jsx)("img",{src:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:""})}),(0,o.jsx)("div",{className:"text","data-y":"-8rem","data-scroll-speed":"-1",children:(0,o.jsx)("p",{children:"Fashion"})})]}),(0,o.jsxs)("div",{className:"item",children:[(0,o.jsx)("div",{className:"image",children:(0,o.jsx)("img",{src:"https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:""})}),(0,o.jsx)("div",{className:"text","data-y":"-50",children:(0,o.jsx)("p",{children:"Nature"})})]}),(0,o.jsxs)("div",{className:"item",children:[(0,o.jsx)("div",{className:"image","data-y":"-100",children:(0,o.jsx)("img",{src:"https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:""})}),(0,o.jsx)("div",{className:"text",children:(0,o.jsx)("p",{children:"Fashion"})})]})]}),(0,o.jsx)("div",{className:"separate",children:(0,o.jsx)("img",{className:"","data-y":"-20vw",src:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"})}),(0,o.jsx)(M,{className:"footer"})]})})};var z=t(7294),L=t(8075);let U=n=>{let{children:e}=n,t=(0,z.useRef)(null);return(0,o.jsx)(L.a5,{options:{smooth:!0},watch:[],containerRef:t,children:e})},Y=n=>{let{}=n,{pathname:e,asPath:t}=(0,l.useRouter)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{pageFullPath:e,pageAsPath:t}),(0,o.jsx)(D,{disableRightClick:!0,children:(0,o.jsx)(U,{children:(0,o.jsx)("div",{"data-scroll-container":!0,children:(0,o.jsx)(B,{})})})})]})};var W=!0,F=Y}},function(n){n.O(0,[727,802,531,774,888,179],function(){return n(n.s=9208)}),_N_E=n.O()}]);