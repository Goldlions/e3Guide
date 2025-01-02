"use strict";(self.webpackChunke_3_guide=self.webpackChunke_3_guide||[]).push([[3249,7643,8401],{5124:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});l(6540);var s=l(4164),a=l(4586),i=l(1213),n=l(7559),r=l(8027),o=l(7713),c=l(1463),d=l(3892),h=l(5260),x=l(4096),p=l(4848);function m(e){const t=(0,x.kJ)(e);return(0,p.jsx)(h.A,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function f(e){const{metadata:t}=e,{siteConfig:{title:l}}=(0,a.A)(),{blogDescription:s,blogTitle:n,permalink:r}=t,o="/"===r?l:n;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:o,description:s}),(0,p.jsx)(c.A,{tag:"blog_posts_list"})]})}function j(e){const{metadata:t,items:l,sidebar:s}=e;return(0,p.jsxs)(r.A,{sidebar:s,children:[(0,p.jsx)(d.A,{items:l}),(0,p.jsx)(o.A,{metadata:t})]})}function u(e){return(0,p.jsxs)(i.e3,{className:(0,s.A)(n.G.wrapper.blogPages,n.G.page.blogListPage),children:[(0,p.jsx)(f,{...e}),(0,p.jsx)(m,{...e}),(0,p.jsx)(j,{...e})]})}},7713:(e,t,l)=>{l.d(t,{A:()=>n});l(6540);var s=l(1312),a=l(9022),i=l(4848);function n(e){const{metadata:t}=e,{previousPage:l,nextPage:n}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[l&&(0,i.jsx)(a.A,{permalink:l,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),n&&(0,i.jsx)(a.A,{permalink:n,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},2907:(e,t,l)=>{l.d(t,{A:()=>H});l(6540);var s=l(4164),a=l(4096),i=l(4848);function n(e){let{children:t,className:l}=e;return(0,i.jsx)("article",{className:l,children:t})}var r=l(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:l,isBlogPostPage:n}=(0,a.e7)(),{permalink:c,title:d}=l,h=n?"h1":"h2";return(0,i.jsx)(h,{className:(0,s.A)(o.title,t),children:n?d:(0,i.jsx)(r.A,{to:c,children:d})})}var d=l(1312),h=l(5846),x=l(6266);const p={container:"container_mt6G"};function m(e){let{readingTime:t}=e;const l=function(){const{selectMessage:e}=(0,h.W)();return t=>{const l=Math.ceil(t);return e(l,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:l}))}}();return(0,i.jsx)(i.Fragment,{children:l(t)})}function f(e){let{date:t,formattedDate:l}=e;return(0,i.jsx)("time",{dateTime:t,children:l})}function j(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function u(e){let{className:t}=e;const{metadata:l}=(0,a.e7)(),{date:n,readingTime:r}=l,o=(0,x.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,s.A)(p.container,"margin-vert--md",t),children:[(0,i.jsx)(f,{date:n,formattedDate:(c=n,o.format(new Date(c)))}),void 0!==r&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{}),(0,i.jsx)(m,{readingTime:r})]})]});var c}var g=l(6913);const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function w(e){let{className:t}=e;const{metadata:{authors:l},assets:n}=(0,a.e7)();if(0===l.length)return null;const r=l.every((e=>{let{name:t}=e;return!t})),o=1===l.length;return(0,i.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",r?v.imageOnlyAuthorRow:"row",t),children:l.map(((e,t)=>(0,i.jsx)("div",{className:(0,s.A)(!r&&(o?"col col--12":"col col--6"),r?v.imageOnlyAuthorCol:v.authorCol),children:(0,i.jsx)(g.A,{author:{...e,imageURL:n.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(c,{}),(0,i.jsx)(u,{}),(0,i.jsx)(w,{})]})}var _=l(440),M=l(7910);function z(e){let{children:t,className:l}=e;const{isBlogPostPage:n}=(0,a.e7)();return(0,i.jsx)("div",{id:n?_.LU:void 0,className:(0,s.A)("markdown",l),children:(0,i.jsx)(M.A,{children:t})})}var b=l(7559),N=l(4336),F=l(4434);function y(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){const{blogPostTitle:t,...l}=e;return(0,i.jsx)(r.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...l,children:(0,i.jsx)(y,{})})}function B(){const{metadata:e,isBlogPostPage:t}=(0,a.e7)(),{tags:l,title:n,editUrl:r,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,h=!t&&o,x=l.length>0;if(!(x||h||r))return null;if(t){const e=!!(r||d||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[x&&(0,i.jsx)("div",{className:(0,s.A)("row","margin-top--sm",b.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(F.A,{tags:l})})}),e&&(0,i.jsx)(N.A,{className:(0,s.A)("margin-top--sm",b.G.blog.blogFooterEditMetaRow),editUrl:r,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[x&&(0,i.jsx)("div",{className:(0,s.A)("col",{"col--9":h}),children:(0,i.jsx)(F.A,{tags:l})}),h&&(0,i.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":x}),children:(0,i.jsx)(C,{blogPostTitle:n,to:e.permalink})})]})}function H(e){let{children:t,className:l}=e;const r=function(){const{isBlogPostPage:e}=(0,a.e7)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(n,{className:(0,s.A)(r,l),children:[(0,i.jsx)(A,{}),(0,i.jsx)(z,{children:t}),(0,i.jsx)(B,{})]})}},3892:(e,t,l)=>{l.d(t,{A:()=>n});l(6540);var s=l(4096),a=l(2907),i=l(4848);function n(e){let{items:t,component:l=a.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.in,{content:t,children:(0,i.jsx)(l,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},5969:(e,t,l)=>{l.d(t,{A:()=>B});var s={};l.r(s),l.d(s,{APIIcon:()=>w,AndroidIcon:()=>u,AngularIcon:()=>g,AppleIcon:()=>v,DyteAISearchIcon:()=>C,ElectronIcon:()=>A,FlutterIcon:()=>_,HTMLIcon:()=>M,JSIcon:()=>z,KotlinIcon:()=>b,ReactIcon:()=>N,SwiftIcon:()=>F,XIcon:()=>y});var a=l(3384),i=l(1470),n=l(9365),r=l(8774);l(6540);const o="grid_ywne",c="section_IlLm",d="card_eF6A",h="imageContainer_qYw4",x="image_iZ6r";var p=l(4848);function m(e){let{item:t,basePath:l}=e;return(0,p.jsxs)(r.A,{className:d,to:`./components/${t.component}`,children:[(0,p.jsx)("div",{className:h,children:(0,p.jsx)("img",{src:`${l}/${t.component}.svg`,alt:"",className:x})}),(0,p.jsx)("div",{children:t.name})]},t.component)}var f=l(4694),j=l(4164);function u(e){return(0,p.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",style:{color:"var(--docs-color-android)"},...e,children:(0,p.jsx)("path",{d:"M18.344 8.71c-.707 0-1.279.572-1.279 1.278v4.53a1.278 1.278 0 102.558 0v-4.53c0-.706-.572-1.278-1.279-1.278zm-12.688 0c-.707 0-1.279.572-1.279 1.278v4.53a1.278 1.278 0 102.558 0v-4.53A1.277 1.277 0 005.656 8.71zm8.889-3.809l.768-1.388a.343.343 0 00-.133-.47.344.344 0 00-.471.135l-.789 1.42c-.588-.235-1.236-.368-1.92-.368s-1.332.132-1.92.367l-.789-1.418a.344.344 0 00-.471-.135.345.345 0 00-.133.47l.768 1.388C8.072 5.69 7.148 7.099 7.148 8.71c0 .011 0 .021.002.034-.002.006-.002.013-.002.019v.001h9.703V8.71c.001-1.611-.923-3.019-2.306-3.809zM9.76 6.869a.346.346 0 11.005-.693.346.346 0 01-.005.693zm4.48 0a.347.347 0 010-.692.346.346 0 010 .692zM7.148 16.12c0 .646.525 1.171 1.174 1.171h.586v2.401a1.279 1.279 0 002.558 0v-2.401h1.066v2.401c0 .707.572 1.278 1.277 1.278.709 0 1.281-.571 1.281-1.278v-2.401h.586c.648 0 1.174-.524 1.174-1.171V9.028H7.148v7.092z"})})}function g(e){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",fill:"none",...e,children:[(0,p.jsx)("rect",{width:64,height:64,rx:10,fill:"#262626"}),(0,p.jsxs)("g",{clipPath:"url(#clip0_5634_80959)",children:[(0,p.jsx)("path",{d:"M9.018 16.033l22.201-7.91 22.8 7.77-3.692 29.373L31.219 55.85 12.41 45.407 9.018 16.033z",fill:"#E23237"}),(0,p.jsx)("path",{d:"M54.018 15.893L31.22 8.123v47.726l19.108-10.565 3.691-29.391z",fill:"#B52E31"}),(0,p.jsx)("path",{d:"M31.254 13.695L17.42 44.475l5.168-.088 2.777-6.943h12.41l3.042 7.031 4.94.088-14.503-30.868zm.035 9.862l4.676 9.773h-8.79l4.114-9.773z",fill:"#fff"})]}),(0,p.jsx)("defs",{children:(0,p.jsx)("clipPath",{id:"clip0_5634_80959",children:(0,p.jsx)("path",{fill:"#fff",transform:"translate(9 8)",d:"M0 0H45.1765V48H0z"})})})]})}function v(e){return(0,p.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,p.jsx)("path",{d:"M19.665 16.811a10.316 10.316 0 01-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 011.73-1.751 4.65 4.65 0 012.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 001.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 01-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"})})}function w(e){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",fill:"none",...e,children:[(0,p.jsx)("rect",{width:28,height:28,fill:"#2160FD",rx:4}),(0,p.jsxs)("g",{stroke:"#fff",clipPath:"url(#api-svg-icon)",children:[(0,p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 15.875h1.25m2.5 0H19"}),(0,p.jsx)("path",{d:"M9.625 16.188a.312.312 0 110-.625m0 .625a.312.312 0 100-.625m0 5.625a.312.312 0 110-.625m0 .625a.312.312 0 100-.625"}),(0,p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 20.875h1.25m2.5 0H19m2.5-5a2.5 2.5 0 01-2.5 2.5H9a2.5 2.5 0 110-5h10a2.5 2.5 0 012.5 2.5z"}),(0,p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.5 20.875a2.5 2.5 0 01-2.5 2.5H9a2.5 2.5 0 110-5h10a2.5 2.5 0 012.5 2.5zm1.767-6.855a4.065 4.065 0 00-3.952-4.995 4.03 4.03 0 00-2.301.72 6.245 6.245 0 10-11.855 3.652"})]}),(0,p.jsx)("defs",{children:(0,p.jsx)("clipPath",{id:"api-svg-icon",children:(0,p.jsx)("path",{fill:"#fff",d:"M4 4h20v20H4z"})})})]})}function A(e){return(0,p.jsxs)("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,p.jsx)("rect",{width:28,height:28,rx:3,fill:"#2B2E3A"}),(0,p.jsx)("path",{d:"M6.067 13.953a.464.464 0 00.444-.34.46.46 0 00-.045-.35c-.771-1.339-.835-2.443-.349-3.281.668-1.152 2.513-1.577 4.935-1.139a.462.462 0 00.462-.715.463.463 0 00-.297-.191c-1.369-.248-2.625-.243-3.628.014-1.045.267-1.828.81-2.271 1.57-.656 1.133-.595 2.565.348 4.2a.461.461 0 00.4.232zM18.95 8.737c1.51.02 2.466.437 2.943 1.26.666 1.147.118 2.944-1.466 4.805a.46.46 0 00.546.716.463.463 0 00.159-.12c.896-1.053 1.516-2.134 1.793-3.127.287-1.031.207-1.978-.235-2.736-.647-1.115-1.881-1.695-3.73-1.72h-.007a.461.461 0 00-.006.922h.003zm-1.648 12.711a.463.463 0 00-.633.157c-.769 1.273-1.714 1.973-2.66 1.973-1.336 0-2.626-1.373-3.457-3.675a.463.463 0 00-.871.312c.469 1.301 1.1 2.379 1.828 3.115.755.766 1.62 1.172 2.5 1.172 1.283 0 2.51-.86 3.452-2.42a.459.459 0 00-.159-.632v-.002zm4.933-3.579a1.507 1.507 0 00-1.402 2.078c-1.959.914-5.615.225-8.993-1.716-1.543-.887-2.914-1.963-3.966-3.113a.464.464 0 00-.803.29.46.46 0 00.12.332c1.116 1.218 2.563 2.356 4.188 3.29 1.888 1.083 3.856 1.81 5.692 2.1.542.088 1.09.133 1.64.136 1.084 0 2.016-.201 2.743-.6a1.51 1.51 0 10.783-2.797h-.002zm0 2.093a.59.59 0 01-.367-.127.467.467 0 00-.103-.104.59.59 0 11.469.231h.001z",fill:"#9FEAF9"}),(0,p.jsx)("path",{d:"M5.848 17.871c.027-.996.582-2.203 1.579-3.429 1.087-1.334 2.657-2.625 4.422-3.64 1.559-.895 3.056-1.495 4.597-1.824a.462.462 0 10-.193-.9c-1.634.348-3.224.984-4.865 1.925-3.946 2.267-6.58 5.585-6.46 8.117a1.515 1.515 0 10.92-.249zm-.084 2.091a.586.586 0 11.008-1.17.586.586 0 01-.008 1.17z",fill:"#9FEAF9"}),(0,p.jsx)("path",{d:"M14.01 6.515a1.51 1.51 0 001.243-.647c.838.548 1.594 1.64 2.147 3.099.61 1.612.93 3.534.93 5.557 0 1.742-.243 3.391-.703 4.856a.456.456 0 00.303.578.464.464 0 00.578-.302c.489-1.553.747-3.297.747-5.132 0-2.211-.364-4.302-1.053-6.047-.676-1.71-1.6-2.925-2.679-3.523a1.514 1.514 0 10-1.514 1.561zm0-2.093A.586.586 0 1114 5.592a.586.586 0 01.008-1.17zm-.244 8.986a1.142 1.142 0 10.483 2.231 1.14 1.14 0 00.89-1.36 1.144 1.144 0 00-1.373-.871z",fill:"#9FEAF9"})]})}function _(e){return(0,p.jsxs)("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",...e,children:[(0,p.jsx)("rect",{width:48,height:48,rx:10,fill:"#262626"}),(0,p.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,p.jsx)("path",{d:"M27.226 5.908L8.86 24.272l5.684 5.684 24.05-24.048h-11.37zM27.098 22.843l-9.832 9.833 5.705 5.79 5.674-5.673 9.95-9.95H27.098z",fill:"#47C5FB"}),(0,p.jsx)("path",{d:"M22.97 38.467l4.32 4.319h11.304l-9.95-9.993-5.673 5.674z",fill:"#00569E"}),(0,p.jsx)("path",{d:"M17.201 32.74l5.684-5.685 5.76 5.738-5.674 5.674-5.77-5.727z",fill:"#00B5F8"}),(0,p.jsx)("path",{d:"M22.97 38.467l4.725-1.568.47-3.626-5.194 5.194z",fill:"url(#paint0_linear)",fillOpacity:.8})]}),(0,p.jsxs)("defs",{children:[(0,p.jsxs)("linearGradient",{id:"paint0_linear",x1:23.176,y1:34.6749,x2:26.9125,y2:36.0213,gradientUnits:"userSpaceOnUse",children:[(0,p.jsx)("stop",{}),(0,p.jsx)("stop",{offset:1,stopOpacity:0})]}),(0,p.jsx)("clipPath",{id:"clip0",children:(0,p.jsx)("path",{fill:"#fff",d:"M8.86133 5.90771H38.67933V42.83081H8.86133z"})})]})]})}function M(e){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:100,height:100,fill:"none",viewBox:"0 0 100 100",...e,children:[(0,p.jsx)("rect",{width:100,height:100,fill:"#262626",rx:20}),(0,p.jsxs)("g",{clipPath:"url(#a)",children:[(0,p.jsx)("path",{fill:"#fff",d:"M25.42 6h3.908v3.874h3.602V6h3.908v11.725H32.93v-3.909h-3.568v3.909h-3.943m16.585-7.817h-3.45V6h10.824v3.908h-3.466v7.817h-3.908M51.094 6h4.096l2.515 4.13L60.219 6h4.095v11.725h-3.908v-5.812l-2.735 4.214-2.736-4.214v5.812h-3.84M66.252 6h3.908v7.85h5.54v3.875h-9.448"}),(0,p.jsx)("path",{fill:"#E44D26",d:"M25.284 86.033l-5.608-62.939h61.648L75.716 86 50.45 93"}),(0,p.jsx)("path",{fill:"#F16529",d:"M50.5 87.647V28.26h25.2l-4.81 53.695"}),(0,p.jsx)("path",{fill:"#EBEBEB",d:"M31.129 35.957H50.5v7.715H39.591l.714 7.901H50.5v7.697H33.236m.34 3.875h7.748l.544 6.168 8.632 2.31v8.055L34.663 75.26"}),(0,p.jsx)("path",{fill:"#fff",d:"M69.803 35.957H50.466v7.715H69.09m-.696 7.901H50.466v7.715h9.516l-.9 10.025-8.616 2.31v8.021L66.27 75.26"})]}),(0,p.jsx)("defs",{children:(0,p.jsx)("clipPath",{id:"a",children:(0,p.jsx)("path",{fill:"#fff",d:"M7 6h87v87H7z"})})})]})}function z(e){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",fill:"none",...e,children:[(0,p.jsxs)("g",{clipPath:"url(#clip0_2502_4649)",children:[(0,p.jsx)("g",{filter:"url(#filter0_d_2502_4649)",children:(0,p.jsx)("path",{d:"M0 0h28v28H0V0z",fill:"#F5DE19"})}),(0,p.jsx)("path",{d:"M18.894 21.981a2.88 2.88 0 002.61 1.606c1.095 0 1.795-.547 1.795-1.305 0-.903-.72-1.227-1.924-1.754l-.66-.283c-1.908-.812-3.173-1.829-3.173-3.98 0-1.98 1.506-3.49 3.868-3.49a3.904 3.904 0 013.757 2.116l-2.065 1.32a1.795 1.795 0 00-1.696-1.132 1.148 1.148 0 00-1.264 1.132c0 .793.491 1.114 1.625 1.607l.66.283c2.245.963 3.514 1.944 3.514 4.15 0 2.378-1.868 3.68-4.377 3.68a5.075 5.075 0 01-4.814-2.7l2.144-1.25zm-9.332.23c.415.735.792 1.358 1.7 1.358.867 0 1.416-.34 1.416-1.66v-8.983h2.641v9.018c0 2.735-1.606 3.98-3.945 3.98a4.1 4.1 0 01-3.962-2.41l2.15-1.304z",fill:"#000"})]}),(0,p.jsxs)("defs",{children:[(0,p.jsxs)("filter",{id:"filter0_d_2502_4649",x:-4,y:0,width:36,height:36,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,p.jsx)("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),(0,p.jsx)("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,p.jsx)("feOffset",{dy:4}),(0,p.jsx)("feGaussianBlur",{stdDeviation:2}),(0,p.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,p.jsx)("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),(0,p.jsx)("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_2502_4649"}),(0,p.jsx)("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow_2502_4649",result:"shape"})]}),(0,p.jsx)("clipPath",{id:"clip0_2502_4649",children:(0,p.jsx)("rect",{width:28,height:28,rx:4,fill:"#fff"})})]})]})}function b(e){return(0,p.jsxs)("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,p.jsx)("rect",{width:28,height:28,rx:4,fill:"#262626"}),(0,p.jsx)("path",{d:"M6.344 6.344v15.312h15.312v-.025l-3.8-3.829-3.801-3.832 3.8-3.834 3.767-3.792H6.344z",fill:"url(#paint0_linear_2615_19807)"}),(0,p.jsx)("path",{d:"M14.174 6.344l-7.83 7.83v7.482h.068l7.66-7.66-.017-.017 3.8-3.834 3.767-3.801h-7.448z",fill:"url(#paint1_linear_2615_19807)"}),(0,p.jsxs)("defs",{children:[(0,p.jsxs)("linearGradient",{id:"paint0_linear_2615_19807",x1:6.17291,y1:21.8071,x2:21.6725,y2:6.13466,gradientUnits:"userSpaceOnUse",children:[(0,p.jsx)("stop",{stopColor:"#0296D8"}),(0,p.jsx)("stop",{offset:1,stopColor:"#8371D9"})]}),(0,p.jsxs)("linearGradient",{id:"paint1_linear_2615_19807",x1:4.26782,y1:19.3653,x2:20.1229,y2:4.96797,gradientUnits:"userSpaceOnUse",children:[(0,p.jsx)("stop",{stopColor:"#CB55C0"}),(0,p.jsx)("stop",{offset:1,stopColor:"#F28E0E"})]})]})]})}function N(e){return(0,p.jsxs)("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",...e,children:[(0,p.jsx)("rect",{width:48,height:48,rx:10,fill:"#262626"}),(0,p.jsx)("path",{d:"M23.676 26.874a3.23 3.23 0 100-6.461 3.23 3.23 0 000 6.461z",fill:"#00D8FF"}),(0,p.jsx)("path",{d:"M23.676 31.05a36.682 36.682 0 01-11.475-1.55 14.602 14.602 0 01-4.726-2.53 4.578 4.578 0 01-1.891-3.327c0-2.136 2.347-4.23 6.278-5.6a37.161 37.161 0 0111.814-1.741 37.054 37.054 0 0111.66 1.71 14.7 14.7 0 014.572 2.412 4.382 4.382 0 011.86 3.22c0 2.22-2.623 4.47-6.849 5.868a37.219 37.219 0 01-11.243 1.539zm0-13.203a36.116 36.116 0 00-11.306 1.657c-3.619 1.262-5.24 2.989-5.24 4.135 0 1.2 1.743 3.085 5.57 4.394a35.16 35.16 0 0010.976 1.472c3.64.065 7.268-.427 10.759-1.46 3.974-1.317 5.783-3.205 5.783-4.402a3.007 3.007 0 00-1.305-2.033 13.174 13.174 0 00-4.085-2.137 35.49 35.49 0 00-11.152-1.626z",fill:"#00D8FF"}),(0,p.jsx)("path",{d:"M16.337 39.757a3.41 3.41 0 01-1.726-.424c-1.85-1.067-2.492-4.145-1.715-8.236a37.16 37.16 0 014.394-11.104 37.055 37.055 0 017.305-9.246 14.7 14.7 0 014.373-2.756 4.382 4.382 0 013.72 0c1.924 1.109 2.56 4.505 1.663 8.864a37.226 37.226 0 01-4.286 10.51 36.679 36.679 0 01-7.076 9.167 14.602 14.602 0 01-4.553 2.828 6.366 6.366 0 01-2.099.397zm2.291-18.997a36.118 36.118 0 00-4.212 10.622c-.715 3.767-.029 6.032.969 6.609 1.034.598 3.543.03 6.59-2.632 2.701-2.55 4.981-5.511 6.755-8.774a35.672 35.672 0 004.111-10.05c.846-4.102.115-6.615-.921-7.212a3.007 3.007 0 00-2.414.115 13.173 13.173 0 00-3.89 2.479 35.491 35.491 0 00-6.979 8.851l-.009-.008z",fill:"#00D8FF"}),(0,p.jsx)("path",{d:"M31.013 39.774c-1.752 0-3.976-1.06-6.291-3.051a37.161 37.161 0 01-7.427-9.353 37.06 37.06 0 01-4.36-10.947 14.701 14.701 0 01-.205-5.169 4.383 4.383 0 011.854-3.214c1.921-1.113 5.182.031 8.51 2.985a37.22 37.22 0 016.965 8.961 36.68 36.68 0 014.407 10.71c.389 1.76.449 3.576.177 5.357a4.579 4.579 0 01-1.931 3.302 3.347 3.347 0 01-1.7.419zm-12.38-13.182a36.118 36.118 0 007.097 8.955c2.906 2.5 5.212 3.038 6.203 2.455 1.034-.6 1.796-3.053 1.01-7.022a35.166 35.166 0 00-4.227-10.224 35.668 35.668 0 00-6.649-8.58c-3.132-2.782-5.673-3.403-6.708-2.804a3.007 3.007 0 00-1.105 2.148 13.172 13.172 0 00.198 4.607 35.491 35.491 0 004.182 10.468l-.002-.003z",fill:"#00D8FF"})]})}function F(e){return(0,p.jsxs)("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,p.jsxs)("g",{clipPath:"url(#clip0_2539_63566)",children:[(0,p.jsx)("path",{fill:"url(#paint0_linear_2539_63566)",d:"M0 0H28V28H0z"}),(0,p.jsx)("path",{d:"M23.662 22.737a4.329 4.329 0 00-.337-.457 4.75 4.75 0 00-.965-.869c-.449-.3-.977-.49-1.515-.512a2.762 2.762 0 00-1.123.178c-.359.123-.707.3-1.044.48-.393.2-.786.4-1.2.567-.495.2-1.011.356-1.539.468-.662.122-1.335.167-1.998.156a13.602 13.602 0 01-3.547-.535 13.47 13.47 0 01-2.884-1.236 14.87 14.87 0 01-2.234-1.57c-.573-.49-1.1-1.014-1.594-1.57-.337-.39-.662-.802-.965-1.226a5.193 5.193 0 01-.337-.523l-2.963-3.174V5.73c0-3.486 2.84-6.315 6.353-6.315h5.668l4.198 4.232c9.474 6.393 6.41 13.442 6.41 13.442s2.694 3.007 1.616 5.647z",fill:"url(#paint1_linear_2539_63566)"}),(0,p.jsx)("path",{d:"M15.827 4.156c9.231 6.278 6.245 13.202 6.245 13.202s2.625 2.964 1.564 5.556c0 0-1.083-1.816-2.898-1.816-1.75 0-2.778 1.816-6.3 1.816-7.842 0-11.55-6.552-11.55-6.552 7.065 4.649 11.889 1.357 11.889 1.357C11.594 15.87 4.824 7.033 4.824 7.033c5.895 5.02 8.443 6.344 8.443 6.344-1.52-1.258-5.786-7.405-5.786-7.405 3.413 3.456 10.194 8.28 10.194 8.28C19.6 8.914 15.827 4.156 15.827 4.156z",fill:"#fff"})]}),(0,p.jsxs)("defs",{children:[(0,p.jsxs)("linearGradient",{id:"paint0_linear_2539_63566",x1:16.6332,y1:-.99914,x2:11.3486,y2:29.0045,gradientUnits:"userSpaceOnUse",children:[(0,p.jsx)("stop",{stopColor:"#FAAE42"}),(0,p.jsx)("stop",{offset:1,stopColor:"#EF3E31"})]}),(0,p.jsxs)("linearGradient",{id:"paint1_linear_2539_63566",x1:14.0774,y1:-.123364,x2:10.1642,y2:22.2452,gradientUnits:"userSpaceOnUse",children:[(0,p.jsx)("stop",{stopColor:"#E39F3A"}),(0,p.jsx)("stop",{offset:1,stopColor:"#D33929"})]}),(0,p.jsx)("clipPath",{id:"clip0_2539_63566",children:(0,p.jsx)("rect",{width:28,height:28,rx:4,fill:"#fff"})})]})]})}function y(e){return(0,p.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,p.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",fill:"currentColor"})})}function C(e){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",...e,children:[(0,p.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.25 10a7.25 7.25 0 10-8.04 7.207 1.302 1.302 0 01.06-1.503 5.751 5.751 0 114.575-1.429l.123.378a.576.576 0 00.362.362l.729.236.027.007.045.016a1.301 1.301 0 01.78 1.699l3.559 3.557.084.073a.75.75 0 00.976-1.133l-4.9-4.901A7.22 7.22 0 0017.25 10z",clipRule:"evenodd"}),(0,p.jsx)("path",{fill:"#F13E1B",d:"M13.653 9.541l.024.006a.483.483 0 010 .912l-1.224.398a2.523 2.523 0 00-1.599 1.597l-.398 1.223a.49.49 0 01-.177.234.484.484 0 01-.273.089H10a.484.484 0 01-.456-.323l-.398-1.223a2.518 2.518 0 00-1.598-1.604l-1.225-.397a.484.484 0 010-.912l1.225-.398A2.523 2.523 0 009.12 7.546l.398-1.223a.483.483 0 01.913 0l.398 1.223a2.52 2.52 0 001.598 1.597l1.225.398z"}),(0,p.jsx)("path",{fill:"#2160FD",d:"M14.783 16.213l-.765-.248a1.578 1.578 0 01-1-.998l-.248-.765a.302.302 0 00-.57 0l-.25.764a1.576 1.576 0 01-.983.999l-.765.248a.302.302 0 000 .57l.765.249a1.578 1.578 0 011 1.002l.248.764a.302.302 0 00.57 0l.249-.764a1.576 1.576 0 01.999-.999l.765-.248a.302.302 0 000-.57l-.015-.004z"})]})}const B={...a.A,...s,Tabs:i.A,TabItem:n.A,ComponentsGrid:function(e){let{items:t,basePath:l="/"}=e;return t.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0)),(0,p.jsx)("div",{className:c,children:(0,p.jsx)("div",{className:o,children:t.map((e=>(0,p.jsx)(m,{item:e,basePath:l},e.component)))})})},CardSection:function(e){let{title:t,children:l,description:s,className:a}=e;return(0,p.jsxs)("div",{className:(0,j.A)("homepage-section",a),children:[(0,p.jsx)("h3",{id:(0,f.c)(t),children:t}),s&&(0,p.jsx)("p",{className:"section-description",children:s}),(0,p.jsx)("div",{className:"section-content",children:l})]})},Card:function(e){let{title:t,description:l,to:s,icon:a,tag:i,className:n}=e;return(0,p.jsxs)(r.A,{to:s,className:(0,j.A)("homepage-card",n),children:[a&&(0,p.jsx)("div",{className:"icon",children:a}),(0,p.jsxs)("div",{className:"card-content",children:[(0,p.jsx)("div",{className:"title",children:t}),l&&(0,p.jsx)("div",{className:"description",children:l})]}),i&&(0,p.jsx)("div",{className:"tag absolute right-0 top-0 h-16 w-16",children:(0,p.jsx)("span",{className:"absolute right-[-28px] top-[-2px] w-[80px] rotate-45 transform py-1 text-center font-semibold text-white",style:{backgroundColor:i.color},title:i.description,children:i.label})})]})}}}}]);