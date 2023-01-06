"use strict";(self.webpackChunkdocusaurus_2_classic_template=self.webpackChunkdocusaurus_2_classic_template||[]).push([[977],{3905:(e,r,o)=>{o.d(r,{Zo:()=>p,kt:()=>f});var t=o(7294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=t.createContext({}),c=function(e){var r=t.useContext(s),o=r;return e&&(o="function"==typeof e?e(r):a(a({},r),e)),o},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return o?t.createElement(f,a(a({ref:r},p),{},{components:o})):t.createElement(f,a({ref:r},p))}));function f(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4485:(e,r,o)=>{o.r(r),o.d(r,{ColorChip:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=o(7462),n=o(7294),i=o(3905);const a={title:"Design",aliases:["/docs/developing/design"]},l=void 0,s={unversionedId:"reference/design",id:"reference/design",title:"Design",description:"",source:"@site/develop/reference/design.mdx",sourceDirName:"reference",slug:"/reference/design",permalink:"/develop/reference/design",draft:!1,tags:[],version:"current",frontMatter:{title:"Design",aliases:["/docs/developing/design"]},sidebar:"tutorialSidebar",previous:{title:"Addon Manifest",permalink:"/develop/reference/addon-manifest"}},c={},p=[{value:"Icons",id:"icons",level:2},{value:"Colors",id:"colors",level:2},{value:"Logo",id:"logo",level:2}],u=e=>{let{color:r}=e;return(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{backgroundColor:r,borderRadius:"0.4rem 0 0 0.4rem",width:"1.4rem",color:"#fff",padding:"0.2rem",verticalAlign:"middle",display:"inline-block",height:"1.5rem"}}),(0,i.kt)("code",{style:{borderRadius:"0 0.4rem 0.4rem 0rem"}},r))},d={toc:p,ColorChip:u};function m(e){let{components:r,...o}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"icons"},"Icons"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://iconscout.com/unicons"},"Unicons")," by IconScout. See them on ",(0,i.kt)("a",{parentName:"p",href:"https://iconscout.com/unicons/explore/line"},"IconScout's website")," or on ",(0,i.kt)("a",{parentName:"p",href:"https://iconify.design/icon-sets/uil/"},"Iconify"),". Please only use icons from this set unless you have explicit permission to use another set. When adding an icon, download it to ",(0,i.kt)("inlineCode",{parentName:"p"},"/images/icons/iconname.svg"),"."),(0,i.kt)("h2",{id:"colors"},"Colors"),(0,i.kt)("p",null,"Our color theme is orange ",(0,i.kt)(u,{color:"#ff7b26",mdxType:"ColorChip"})," and white ",(0,i.kt)(u,{color:"#fff",mdxType:"ColorChip"}),". These colors make up the top bar on our webpages, as well as some other elements."),(0,i.kt)("p",null,"For our (default) dark theme, our main colors are ",(0,i.kt)(u,{color:"#2a2a2a",mdxType:"ColorChip"}),", ",(0,i.kt)(u,{color:"#222",mdxType:"ColorChip"}),", and ",(0,i.kt)(u,{color:"#000",mdxType:"ColorChip"}),"."),(0,i.kt)("p",null,"For our light theme, our main colors are ",(0,i.kt)(u,{color:"#f0f0f0",mdxType:"ColorChip"}),", ",(0,i.kt)(u,{color:"#aaa",mdxType:"ColorChip"}),", and ",(0,i.kt)(u,{color:"#ddd",mdxType:"ColorChip"}),"."),(0,i.kt)("p",null,"There are of course many other colors we use around our pages, but these colors are most common."),(0,i.kt)("h2",{id:"logo"},"Logo"),(0,i.kt)("p",null,"This is the logo of the project."),(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://raw.githubusercontent.com/ScratchAddons/ScratchAddons/master/images/icon.svg",alt:"Scratch Addons logo",style:{height:"8rem"}})),(0,i.kt)("p",null,"On the extension, use it from the path ",(0,i.kt)("inlineCode",{parentName:"p"},"/images/icon.svg"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"/images/icon.png")," for full scale versions, and ",(0,i.kt)("inlineCode",{parentName:"p"},"/images/extension-icon.svg"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"/images/extension-icon.png")," for smaller scale versions."))}m.isMDXComponent=!0}}]);