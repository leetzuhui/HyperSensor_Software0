(function(){"use strict";var e={1589:function(e,t,o){var n=o(5130),r=o(6768);function a(e,t,o,n,a,s){const i=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(i)}var s={name:"App"},i=o(1241);const l=(0,i.A)(s,[["render",a]]);var d=l,u=o(1387);const c={class:"version-history"},v=["innerHTML"],p={key:1};function h(e,t,o,n,a,s){const i=(0,r.g2)("Header"),l=(0,r.g2)("LatestVersion"),d=(0,r.g2)("VersionItem"),u=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(i),(0,r.Lk)("div",c,[t[0]||(t[0]=(0,r.Lk)("h1",null,"HyperSensor Software Version History",-1)),a.loading?((0,r.uX)(),(0,r.CE)("div",{key:0,class:"loading",innerHTML:a.loadingHTMLContent},null,8,v)):((0,r.uX)(),(0,r.CE)("div",p,[(0,r.bF)(l,{latestVersion:a.latestVersion},null,8,["latestVersion"]),(0,r.bF)(d,{versions:a.versions},null,8,["versions"])]))]),(0,r.bF)(u)],64)}var f=o.p+"img/logo.320916c4.png";const g={ref:"header"},k={class:"nav-links"};function b(e,t,o,n,a,s){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",g,[(0,r.bF)(i,{to:"/version-history",class:"logo"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.Lk)("img",{src:f},null,-1)]))),_:1}),(0,r.Lk)("nav",k,[(0,r.bF)(i,{to:"/version-history"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("Software Version History")]))),_:1}),(0,r.bF)(i,{to:"/version-history/user-manual"},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("User Manual")]))),_:1}),(0,r.bF)(i,{to:"/version-history/contact-us"},{default:(0,r.k6)((()=>t[3]||(t[3]=[(0,r.eW)("Contact Us")]))),_:1})])],512)}var L=o(4968),y={name:"PageWithHeader",data(){return{lastScrollTop:0}},methods:{handleScroll(){const e=window.pageYOffset||document.documentElement.scrollTop,t=this.$refs.header;e>this.lastScrollTop&&e>10?L.Ay.to(t,{height:60,backgroundColor:"rgba(255, 255, 255, 1)",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",duration:.3,ease:"power3.out"}):e<this.lastScrollTop&&(L.Ay.to(t,{height:100,backgroundColor:"rgba(255, 255, 255, 1)",boxShadow:"0 0 0 rgba(0, 0, 0, 0)",duration:.3,ease:"power3.out"}),0==e&&L.Ay.to(t,{height:100,backgroundColor:"rgba(255, 255, 255, 0)",boxShadow:"0 0 0 rgba(0, 0, 0, 0)",duration:.3,ease:"power3.out"})),this.lastScrollTop=e}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}};const m=(0,i.A)(y,[["render",b],["__scopeId","data-v-2de16255"]]);var _=m,w=o(4232);const F={class:"previous-version-wrapper"},S={class:"version-box"},C=["onClick"],x={class:"header"};function A(e,t,o,n,a,s){return(0,r.uX)(),(0,r.CE)("div",F,[t[1]||(t[1]=(0,r.Lk)("div",{class:"section-title"},"Previous Versions",-1)),(0,r.Lk)("div",S,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.versions,((e,o)=>((0,r.uX)(),(0,r.CE)("div",{class:(0,w.C4)(["previous-version-item",{open:a.isOpen[e.id]}]),key:e.id,onClick:t=>s.toggle(e.id,o)},[(0,r.Lk)("div",x,[(0,r.Lk)("h3",null,(0,w.v_)(e.version),1),t[0]||(t[0]=(0,r.Lk)("span",{class:"accordion-icon"},[(0,r.Lk)("svg",{t:"1728872339944",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4236",width:"20px",height:"20px"},[(0,r.Lk)("path",{d:"M948.82895 361.713158c14.389732 18.446118 15.597233 41.568744 2.694365 51.643194L530.687618 741.618655c-2.910283 2.28095-12.262278 7.896854-13.852496 9.662057-15.679098 17.331737-38.223556 22.534226-50.383504 11.56029L70.112847 405.439032c-12.159948-10.984169-9.351995-33.961486 6.328126-51.333132 15.680121-17.362436 38.223556-22.545482 50.424436-11.571546l360.707248 325.258898 411.822416-321.244468C912.338874 336.474334 934.470941 343.277274 948.82895 361.713158L948.82895 361.713158z","p-id":"4237"})])],-1))]),(0,r.Lk)("div",{class:"detail",ref_for:!0,ref:e=>a.detailsRefs[o]=e},[(0,r.Lk)("p",null,"Release DateTime: "+(0,w.v_)(e.datetime),1),(0,r.Lk)("p",null,"Descriptions: "+(0,w.v_)(e.descriptions),1),(0,r.Lk)("p",null,"Id: "+(0,w.v_)(e.id),1)],512)],10,C)))),128))])])}var H={props:{versions:{type:Array,required:!0}},data(){return{isOpen:{},detailsRefs:[]}},methods:{toggle(e,t){this.isOpen[e]?this.close(e,t):this.open(e,t)},open(e,t){this.isOpen[e]=!0,L.Ay.to(this.detailsRefs[t],{height:"auto",duration:.5,opacity:1})},close(e,t){this.isOpen[e]=!1,L.Ay.to(this.detailsRefs[t],{height:0,duration:.5,opacity:0})}}};const E=(0,i.A)(H,[["render",A],["__scopeId","data-v-11d3613b"]]);var T=E;const V={class:"latest-version-wrapper"};function M(e,t,o,n,a,s){return(0,r.uX)(),(0,r.CE)("div",V,[t[2]||(t[2]=(0,r.Lk)("div",{class:"section-title"},"Latest Version",-1)),(0,r.Lk)("div",{class:"latest-version-item",onMouseenter:t[0]||(t[0]=e=>s.hoverIn(e)),onMouseleave:t[1]||(t[1]=e=>s.hoverOut(e))},[(0,r.Lk)("h2",null,(0,w.v_)(o.latestVersion.version),1),(0,r.Lk)("p",null,"Release DateTime: "+(0,w.v_)(o.latestVersion.datetime),1),(0,r.Lk)("p",null,"Descriptions: "+(0,w.v_)(o.latestVersion.descriptions),1),(0,r.Lk)("p",null,"Id: "+(0,w.v_)(o.latestVersion.id),1)],32)])}var O={name:"LatestVersion",props:{latestVersion:{type:Object,required:!0}},methods:{hoverIn(e){const t=e.currentTarget;L.Ay.to(t,{scale:1.02,boxShadow:"0 8px 20px rgba(0, 0, 0, 0.45)",background:"linear-gradient(135deg, rgba(0, 140, 255, 1) 0%, rgba(0, 160, 255, 1) 25%, rgba(0, 180, 255, 1) 50%, rgba(0, 200, 255, 1) 75%, rgba(0, 122, 255, 1) 100%)",duration:1,ease:"power3.out"})},hoverOut(e){const t=e.currentTarget;L.Ay.to(t,{scale:1,boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3)",background:"linear-gradient(135deg, rgba(0, 122, 255, 1) 0%, rgba(0, 140, 255, 1) 25%, rgba(0, 160, 255, 1) 50%, rgba(0, 180, 255, 1) 75%, rgba(0, 200, 255, 1) 100%)",duration:1,ease:"power3.out"})}}};const I=(0,i.A)(O,[["render",M],["__scopeId","data-v-fe2c2062"]]);var X=I;const U={class:"footer"};function P(e,t,o,n,a,s){return(0,r.uX)(),(0,r.CE)("footer",U,t[0]||(t[0]=[(0,r.Fv)('<div class="footer-content" data-v-a7a4744a><div class="author-info" data-v-a7a4744a><p data-v-a7a4744a>Author: Lee Tzu-Hui</p><p data-v-a7a4744a>All rights reserved.</p></div><div class="legal-links" data-v-a7a4744a><a href="/version-history/privacy-policy" data-v-a7a4744a>Privacy Policy</a><a href="/version-history/terms-of-service" data-v-a7a4744a>Terms of Service</a></div></div>',1)]))}var j={name:"PageWithFooter"};const R=(0,i.A)(j,[["render",P],["__scopeId","data-v-a7a4744a"]]);var D=R,N={components:{Header:_,VersionItem:T,LatestVersion:X,Footer:D},data(){return{versions:[],loading:!0,latestVersion:null,loadingHTMLContent:"Loading version history..."}},created(){this.fetchVersionHistory()},methods:{async fetchVersionHistory(){try{const e=await fetch("https://leetzuhui.github.io/HyperSensor_Software/version_history.json",{cache:"no-store"}),t=await e.json();this.latestVersion=t.versions[0],this.versions=t.versions.slice(1).map((e=>({...e,open:!1}))),this.loading=!1}catch(e){console.error("Error loading version history:",e),this.loadingHTMLContent="Failed to load version history. Refresh to retry."}}}};const W=(0,i.A)(N,[["render",h],["__scopeId","data-v-5aa36f94"]]);var z=W;const G={class:"user-manual-page"};function Q(e,t,o,n,a,s){const i=(0,r.g2)("Header"),l=(0,r.g2)("UserManualTable"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",G,[(0,r.bF)(i),t[0]||(t[0]=(0,r.Lk)("h1",null,"User Manual",-1)),(0,r.bF)(l),(0,r.bF)(d)])}const K={class:"user-manual-page"},q={class:"manual-table"},B={class:"download-buttons"},Y=["href"],$=["href"];function J(e,t,o,n,a,s){return(0,r.uX)(),(0,r.CE)("div",K,[t[1]||(t[1]=(0,r.Lk)("header",{class:"header"},[(0,r.Lk)("h3",null,"User Manual Downloads"),(0,r.Lk)("p",null,"Access the user manuals for our software below. Click to download.")],-1)),(0,r.Lk)("table",q,[t[0]||(t[0]=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"Manual Title"),(0,r.Lk)("th",null,"Description"),(0,r.Lk)("th",null,"Download")])],-1)),(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.manuals,(e=>((0,r.uX)(),(0,r.CE)("tr",{key:e.id},[(0,r.Lk)("td",null,(0,w.v_)(e.title),1),(0,r.Lk)("td",null,(0,w.v_)(e.description),1),(0,r.Lk)("td",B,[(0,r.Lk)("a",{href:e.links.first.herf,class:"download-button",target:"_blank"},(0,w.v_)(e.links.first.text),9,Y),(0,r.Lk)("a",{href:e.links.last.herf,class:"download-button",target:"_blank"},(0,w.v_)(e.links.last.text),9,$)])])))),128))])])])}var Z={name:"UserManualPage",data(){return{manuals:[{id:1,title:"Quick Start Guide",description:"Quickly set up and start using HyperSensor Software with step-by-step instructions.",links:{first:{herf:"https://leetzuhui.github.io/HyperSensor_Software/downloads/Quick_Start_Guide_CN_v2.1.0.pdf",text:"Quick_Start_Guide_CN_v2.1.0.pdf"},last:{herf:"https://leetzuhui.github.io/HyperSensor_Software/downloads/Quick_Start_Guide_EN_v2.1.0.pdf",text:"Quick_Start_Guide_EN_v2.1.0.pdf"}}},{id:2,title:"User Manual",description:"A comprehensive guide to using HyperSensor Software.",links:{first:{herf:"/version-history/not-available",text:"Not Available"},last:{herf:"/version-history/not-available",text:"Not Available"}}}]}}};const ee=(0,i.A)(Z,[["render",J],["__scopeId","data-v-3d3009fd"]]);var te=ee,oe={components:{Header:_,UserManualTable:te,Footer:D}};const ne=(0,i.A)(oe,[["render",Q],["__scopeId","data-v-3d00ff71"]]);var re=ne;const ae={class:"contact-page"},se={class:"contact-info"},ie={class:"info-item"},le={class:"info-link"};function de(e,t,o,n,a,s){const i=(0,r.g2)("Header"),l=(0,r.g2)("router-link"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(i),(0,r.Lk)("div",ae,[t[4]||(t[4]=(0,r.Lk)("h1",{class:"contact-title"},"Contact Us",-1)),(0,r.Lk)("div",se,[t[2]||(t[2]=(0,r.Lk)("div",{class:"info-item"},[(0,r.Lk)("div",{class:"info-text"},[(0,r.Lk)("h3",null,"Email"),(0,r.Lk)("p",null,"For software support and inquiries.")]),(0,r.Lk)("div",{class:"info-link"},[(0,r.Lk)("a",{href:"mailto:tzuhui.lee@icloud.com"},"tzuhui.lee@icloud.com")])],-1)),(0,r.Lk)("div",ie,[t[1]||(t[1]=(0,r.Lk)("div",{class:"info-text"},[(0,r.Lk)("h3",null,"User Manual"),(0,r.Lk)("p",null,"Access our software comprehensive guide.")],-1)),(0,r.Lk)("div",le,[(0,r.bF)(l,{to:"/version-history/user_manual"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("User Manual")]))),_:1})])]),t[3]||(t[3]=(0,r.Fv)('<div class="info-item" data-v-382b193e><div class="info-text" data-v-382b193e><h3 data-v-382b193e>Address (Hefei)</h3><p data-v-382b193e>Visit us for in-person assistance.</p></div><div class="info-link" data-v-382b193e><p data-v-382b193e>CG PARK, Qingtan Rd, Shushan District, Hefei, Anhui</p></div></div><div class="info-item last" data-v-382b193e><div class="info-text" data-v-382b193e><h3 data-v-382b193e>Address (Tianjin)</h3><p data-v-382b193e>Visit us for in-person assistance.</p></div><div class="info-link" data-v-382b193e><p data-v-382b193e>Haitai W Rd, Xiqing District, Tianjin</p></div></div>',2))])]),(0,r.bF)(d)],64)}var ue={name:"ContactPage",components:{Header:_,Footer:D}};const ce=(0,i.A)(ue,[["render",de],["__scopeId","data-v-382b193e"]]);var ve=ce;const pe={class:"not-found"};function he(e,t,o,n,a,s){const i=(0,r.g2)("Header"),l=(0,r.g2)("router-link"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(i),(0,r.Lk)("div",pe,[t[1]||(t[1]=(0,r.Lk)("h1",null,"404 - Page Not Found",-1)),t[2]||(t[2]=(0,r.Lk)("p",null,"Oops! The page you're looking for doesn't exist.",-1)),(0,r.bF)(l,{to:"/version-history"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Go back to Home")]))),_:1})]),(0,r.bF)(d)],64)}var fe={name:"NotFoundPage",components:{Header:_,Footer:D}};const ge=(0,i.A)(fe,[["render",he],["__scopeId","data-v-78014686"]]);var ke=ge;const be=[{path:"/HyperSensor_Software",redirect:"/version-history"},{path:"/version-history",name:"SoftwareVersion",component:z},{path:"/version-history/user-manual",name:"UserManual",component:re},{path:"/version-history/contact-us",name:"ContactUs",component:ve},{path:"/version-history/:pathMatch(.*)*",name:"404NotFound",component:ke}],Le=(0,u.aE)({history:(0,u.LA)(),routes:be});var ye=Le;(0,n.Ef)(d).use(ye).mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(u--,1);var d=r();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/HyperSensor_Software/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,s=n[0],i=n[1],l=n[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var u=l(o)}for(t&&t(n);d<s.length;d++)a=s[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self["webpackChunkversion_history_app"]=self["webpackChunkversion_history_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(1589)}));n=o.O(n)})();
//# sourceMappingURL=app.a138e708.js.map