(this["webpackJsonpdennisabramsson.se"]=this["webpackJsonpdennisabramsson.se"]||[]).push([[7],{42:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o})),a.d(t,"mapBlogs",(function(){return u}));var n=a(40),l=a(0),c=a.n(l),r=a(2),m=a(37),i=a(13),s=a(18);function o(e){var t=Object(l.useContext)(i.a),a=Object(l.useState)({}),m=Object(n.a)(a,2),o=m[0],u=m[1],p=Object(l.useState)(!1),b=Object(n.a)(p,2),f=b[0],h=b[1],E=Object(l.useState)(!1),g=Object(n.a)(E,2),v=g[0],N=g[1];Object(l.useEffect)((function(){t.projects&&t.projects.forEach((function(e){window.location.hash.includes(e.path)?(u(e),h(!0)):t.projects&&t.projects.indexOf(e)===t.projects.length&&N(!0)}))}),[t]);var x=function(){return c.a.createElement(l.Suspense,{fallback:c.a.createElement(s.a,null)},c.a.createElement(r.d,null,c.a.createElement(r.b,{path:e.match.url,render:function(){return c.a.createElement(d,o)}})))};return v?c.a.createElement(r.a,{to:"/NotFound"}):f?c.a.createElement(x,null):c.a.createElement(l.Fragment,null)}var d=function(e){var t,a=null!==e.iframe||null!==e.thumbnailFile,n=function(){return c.a.createElement(l.Fragment,null,e.iframe&&c.a.createElement("div",{className:"IFrame card box-shadow-2 overflow-hidden"},c.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},c.a.createElement("iframe",{className:"embed-responsive-item",src:e.iframe.src,title:"YouTube video",allowFullScreen:!0}))))};return c.a.createElement("div",{className:"ProjectContent bg-light"},c.a.createElement(m.a,null,c.a.createElement("meta",{property:"og:url",content:window.location.href}),c.a.createElement("meta",{property:"og:title",content:e.name}),c.a.createElement("meta",{property:"og:description",content:e.description})),c.a.createElement("div",{className:"container p-3"},c.a.createElement("h1",{className:"display-1 my-4 text-center"},e.name),c.a.createElement("div",{className:"row"},a&&c.a.createElement(l.Fragment,null,c.a.createElement("div",{className:"".concat(e.fullWidth?"col-12":"col-lg-8")},e.iframe&&c.a.createElement(n,null),!e.iframe&&e.thumbnailFile&&c.a.createElement("img",{src:"".concat("","/").concat(e.thumbnailFile.name,".").concat(null===(t=e.thumbnailFile)||void 0===t?void 0:t.type),alt:e.thumbnailFile.alt,className:"card-img-top"})),e.asides&&c.a.createElement("div",{className:"".concat(e.fullWidth?"col-lg-6 py-4":"col-lg-4")},u(e.asides,!0))),e.blogs&&c.a.createElement("div",{className:"p-3 ".concat(e.fullWidth?"col-lg-6 py-4":"col-12"," ").concat(!e.asides&&e.fullWidth?"col-lg-12":"")},c.a.createElement("div",{className:"card box-shadow-2 ".concat(e.fullWidth?"":"mt-4")},e.blogs&&u(e.blogs))))))},u=function(e,t){return e.map((function(a){var n,r,m,i=0===e.indexOf(a),s=(a.title||a.paragraphs||a.links)&&a.chatBubble,o=!t,d=o&&e.indexOf(a)===e.length-1;return c.a.createElement(l.Fragment,{key:e.indexOf(a)},o&&!i&&c.a.createElement("hr",null),c.a.createElement("article",{className:"mt-4 ".concat(a.chatBubble?"card box-shadow-2":""," ").concat(i||o?"mt-lg-0":"")},a.thumbnailFile&&c.a.createElement("img",{src:"".concat("","/").concat(a.thumbnailFile.name,".").concat(null===(n=a.thumbnailFile)||void 0===n?void 0:n.type),className:"card-img-top",alt:a.thumbnailFile.alt}),c.a.createElement("div",{className:"".concat(o||s?"card-body":""," ").concat(o&&i?"mt-2":"")},a.title&&o&&c.a.createElement("h3",{className:"card-title"},a.title),a.title&&!o&&c.a.createElement("h5",{className:"card-title"},a.title),a.paragraphs&&(m=a.paragraphs).map((function(e){return c.a.createElement("p",{key:m.indexOf(e),className:"card-text"},e)})),a.links&&(r=a.links).map((function(e){var t=0!==r.indexOf(e);return c.a.createElement("a",{key:r.indexOf(e),href:e.href,className:"btn btn-primary ".concat(t?"ml-2":""),target:"_blank",rel:"noopener noreferrer"},e.btnText)})),(a.createdAt||a.updatedAt)&&c.a.createElement("div",{className:"row"},a.updatedAt&&c.a.createElement("small",{className:"card-text text-muted mt-2 col-auto"},"Last updated: ",a.updatedAt),a.createdAt&&c.a.createElement("small",{className:"card-text text-muted mt-2 col-auto"},"Created: ",a.createdAt)))),d&&c.a.createElement("br",null))}))}}}]);
//# sourceMappingURL=7.73d765b6.chunk.js.map