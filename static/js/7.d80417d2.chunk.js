(this["webpackJsonpdennisabramsson.se"]=this["webpackJsonpdennisabramsson.se"]||[]).push([[7],{41:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s})),t.d(a,"mapBlogs",(function(){return u}));var l=t(39),n=t(0),c=t.n(n),r=t(2),m=t(36),o=t(13),i=t(18);function s(e){var a=Object(n.useContext)(o.a),t=Object(n.useState)({}),m=Object(l.a)(t,2),s=m[0],u=m[1],b=Object(n.useState)(!1),h=Object(l.a)(b,2),p=h[0],E=h[1],g=Object(n.useState)(!1),f=Object(l.a)(g,2),N=f[0],v=f[1];Object(n.useEffect)((function(){a.projects&&a.projects.forEach((function(e){window.location.pathname===e.path?(u(e),E(!0)):a.projects&&a.projects.indexOf(e)===a.projects.length&&v(!0)}))}),[a]);var x=function(){return c.a.createElement(n.Suspense,{fallback:c.a.createElement(i.a,null)},c.a.createElement(r.d,null,c.a.createElement(r.b,{path:e.match.url,render:function(){return c.a.createElement(d,s)}})))};return N?c.a.createElement(r.a,{to:"/NotFound"}):p?c.a.createElement(x,null):c.a.createElement(n.Fragment,null)}var d=function(e){var a,t=null!==e.iframe||null!==e.thumbnailFile,l=function(){return c.a.createElement(n.Fragment,null,e.iframe&&c.a.createElement("div",{className:"IFrame card box-shadow-2 overflow-hidden"},c.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},c.a.createElement("iframe",{className:"embed-responsive-item",src:e.iframe.src,title:"YouTube video",allowFullScreen:!0}))))};return c.a.createElement("div",{className:"ProjectContent bg-light"},c.a.createElement(m.a,null,c.a.createElement("meta",{property:"og:url",content:window.location.href}),c.a.createElement("meta",{property:"og:title",content:e.name}),c.a.createElement("meta",{property:"og:description",content:e.description})),c.a.createElement("div",{className:"container p-3"},c.a.createElement("h1",{className:"display-1 my-4 text-center"},e.name),c.a.createElement("div",{className:"row"},t&&c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"".concat(e.fullWidth?"col-12":"col-lg-8")},e.iframe&&c.a.createElement(l,null),!e.iframe&&e.thumbnailFile&&c.a.createElement("img",{src:"".concat("","/").concat(e.thumbnailFile.name,".").concat(null===(a=e.thumbnailFile)||void 0===a?void 0:a.type),alt:e.thumbnailFile.alt,className:"card-img-top"})),e.asides&&c.a.createElement("div",{className:"".concat(e.fullWidth?"col-lg-6 py-4":"col-lg-4")},u(e.asides,!0))),e.blogs&&c.a.createElement("div",{className:"p-3 ".concat(e.fullWidth?"col-lg-6 py-4":"col-12"," ").concat(!e.asides&&e.fullWidth?"col-lg-12":"")},c.a.createElement("div",{className:"card box-shadow-2 bg-light ".concat(e.fullWidth?"":"mt-4")},e.blogs&&u(e.blogs))))))},u=function(e,a){return e.map((function(t){var l,r,m,o,i=0===e.indexOf(t),s=(t.title||t.paragraphs||t.links)&&t.chatBubble,d=!a,u=d&&e.indexOf(t)===e.length-1;return c.a.createElement(n.Fragment,{key:e.indexOf(t)},d&&!i&&c.a.createElement("hr",null),c.a.createElement("article",{className:"mt-4 ".concat(t.chatBubble?"card box-shadow-2":""," ").concat(i||d?"mt-lg-0":"")},c.a.createElement("div",{className:"".concat(d||s?"card-body ":""," ").concat(d&&i?"mt-2":"")},t.title&&d&&c.a.createElement("h3",{className:"card-title"},t.title),t.title&&!d&&c.a.createElement("h5",{className:"card-title"},t.title),t.thumbnailFile&&c.a.createElement("img",{src:"".concat(""," /").concat(t.thumbnailFile.name,".").concat(null===(l=t.thumbnailFile)||void 0===l?void 0:l.type),className:"card-img-top",alt:t.thumbnailFile.alt}),t.paragraphs&&(o=t.paragraphs).map((function(e){return c.a.createElement("p",{key:o.indexOf(e),className:"card-text"},e)})),t.links&&(m=t.links).map((function(e){var a=0!==m.indexOf(e);return c.a.createElement("a",{key:m.indexOf(e),href:e.href,className:"btn btn-primary ".concat(a?"ml-2":""),target:"_blank",rel:"noopener noreferrer"},e.btnText)})),(t.createdAt||t.updatedAt)&&c.a.createElement("div",{className:"row"},t.updatedAt&&c.a.createElement("small",{className:"card-text text-muted mt-2 col-auto"},"Last updated: ",t.updatedAt),t.createdAt&&c.a.createElement("small",{className:"card-text text-muted mt-2 col-auto"},"Created: ",t.createdAt)),!a&&t.hiddenParagraphs&&t.buttonName&&c.a.createElement("div",{id:"accordion"},c.a.createElement("div",{className:"card box-shadow-2"},c.a.createElement("div",{className:"card-header",id:"headingOne"},c.a.createElement("h3",{className:"mb-0"},c.a.createElement("button",{className:"btn font-weight-bold text-black","data-toggle":"collapse","data-target":"#".concat(t.buttonName),"aria-controls":"collapseTwo"},"".concat(t.buttonName),c.a.createElement("small",{className:"text-muted"}," Show more")))),c.a.createElement("div",{id:"".concat(t.buttonName),className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},c.a.createElement("div",{className:"card-body"},t.hiddenParagraphs)))),!a&&t.hiddenIMG&&c.a.createElement("div",{id:"accordion"},c.a.createElement("div",{className:"card box-shadow-2"},c.a.createElement("div",{className:"card-header bg-white",id:"headingOne"},c.a.createElement("h3",{className:"mb-0"},c.a.createElement("button",{className:"btn font-weight-bold text-primary","data-toggle":"collapse","data-target":"#".concat(t.hiddenIMG.alt),"aria-controls":"collapseTwo"},"".concat(t.hiddenIMG.alt)))),c.a.createElement("div",{id:"".concat(t.hiddenIMG.alt),className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},c.a.createElement("div",{className:"card-body"},c.a.createElement("img",{src:"".concat("","/").concat(t.hiddenIMG.name,".").concat(null===(r=t.hiddenIMG)||void 0===r?void 0:r.type),className:"card-img-top",alt:t.hiddenIMG.alt}))))))),u&&c.a.createElement("br",null))}))}}}]);
//# sourceMappingURL=7.d80417d2.chunk.js.map