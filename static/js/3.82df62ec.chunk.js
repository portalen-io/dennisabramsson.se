(this["webpackJsonpdennisabramsson.se"]=this["webpackJsonpdennisabramsson.se"]||[]).push([[3],{36:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a(0),r=a.n(n),c=a(5),s=a(13),l=function(){var e=Object(n.useContext)(s.a),t=parseInt("3",10);return r.a.createElement("section",{className:"FeaturedProjects"},r.a.createElement("div",{className:"container p-3"},r.a.createElement("div",{className:"d-flex justify-content-center mb-5"},r.a.createElement("div",{className:"triangle-bottomrightx"}),r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("h1",{className:"display-3 text-center m-0 px-4 mt-5"},"Featured projects")),r.a.createElement("div",{className:"triangle-topleftx"})),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("div",{className:"row justify-content-center"},e.projects&&o(e.projects,t)),r.a.createElement(c.b,{to:"/projects",className:"btn btn-lg btn-primary my-5 mx-auto font-weight-bold"},"Browse all"))))},o=function(e,t){return e.map((function(a){for(var n=a.id,s=a.path,l=a.name,o=a.description,i=a.thumbnailFile;e.indexOf(a)<(t||e.length);)return r.a.createElement("div",{key:n,className:"col-xl-4 col-lg-6 mb-4"},r.a.createElement("article",{className:"card"},i&&r.a.createElement("img",{src:"".concat("/dennisabramsson.se","/").concat(i.name,".").concat(null===i||void 0===i?void 0:i.type),className:"card-img-top",alt:l}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},l),o&&r.a.createElement("p",{className:"card-text"},o),r.a.createElement(c.b,{to:s,className:"btn btn-primary stretched-link"},"Full details"))))}))}},37:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(o){r=!0,c=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},38:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a(37),r=a(0),c=a.n(r),s=a(13),l=a(36);function o(){var e=Object(r.useContext)(s.a),t=Object(r.useState)([]),a=Object(n.a)(t,2),o=(a[0],a[1]);return Object(r.useEffect)((function(){e.projects&&o(e.projects)}),[e]),c.a.createElement("div",{id:"Projects"},c.a.createElement("div",{className:"container p-3"},c.a.createElement("h1",{className:"display-1 my-4 text-center"},"Projects"),c.a.createElement("div",{className:"row"},e.projects&&Object(l.b)(e.projects))))}}}]);
//# sourceMappingURL=3.82df62ec.chunk.js.map