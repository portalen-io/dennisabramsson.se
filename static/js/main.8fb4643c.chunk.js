(this["webpackJsonpdennisabramsson.se"]=this["webpackJsonpdennisabramsson.se"]||[]).push([[0],{13:function(e,a,n){"use strict";n.d(a,"a",(function(){return g}));var t=n(0),o=n.n(t),r=n(2),c=n(5),l=function(){return o.a.createElement("header",{className:"Header"},o.a.createElement("div",{className:"container py-2"},o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},o.a.createElement(c.b,{to:"/",className:"navbar-brand"},"Dennis Abramsson"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},o.a.createElement("div",{className:"navbar-nav"},o.a.createElement(c.b,{to:"/",className:"nav-link active ml-3","aria-current":"page"},"Home"),o.a.createElement(c.b,{to:"/projects",className:"nav-link ml-3"},"Projects"),o.a.createElement(c.b,{to:"#",className:"nav-link ml-3"},"Contacts"))))))},i=function(){return o.a.createElement("footer",{className:"Footer bg-light p-4"},o.a.createElement("div",{className:"container p-3"},"footer",o.a.createElement("a",{href:"mailto:kontakt@dennisabramsson.se"},"kontakt@dennisabramsson.se")))},s=n(18),m=Object(t.lazy)((function(){return n.e(5).then(n.bind(null,40))})),d=Object(t.lazy)((function(){return n.e(4).then(n.bind(null,37))})),u=Object(t.lazy)((function(){return n.e(3).then(n.bind(null,38))})),p=Object(t.lazy)((function(){return n.e(6).then(n.bind(null,39))})),g=o.a.createContext({projects:[{id:"2cbdb7fb-4404-424c-858e-7706796b9ba3",path:"/project/spel-1",name:"Spel 1",description:"Det handlar om 1",iframeSrc:"https://www.youtube.com/embed/GQ3cTuSH9zM",blogs:[{title:"Du 1",paragraphs:["Vet att vi kan g\xf6ra m\xe5nga blog inl\xe4gg! 1"]},{title:"Ganska coolt 11",paragraphs:["Vet att vi kan g\xf6ra m\xe5nga blog inl\xe4gg! 11"]}]},{id:"842d1d8d-5fef-49d5-a8a9-794b61f7d35e",path:"/project/spel-2",name:"Spel 2",description:"Det handlar om 2",iframeSrc:"https://www.youtube.com/embed/GQ3cTuSH9zM",blogs:[{title:"Du 2",paragraphs:["Vet att vi kan g\xf6ra m\xe5nga blog inl\xe4gg! 2"]},{title:"Ganska coolt 22",paragraphs:["Vet att vi kan g\xf6ra m\xe5nga blog inl\xe4gg! 22"]},{title:"Ganska coolt 222",paragraphs:["Vet att vi kan g\xf6ra m\xe5nga blog inl\xe4gg! 222"]}]},{id:"677d7fd1-5928-453a-a3cc-79d015ec294c",path:"/project/spel-3",name:"Spel 3",description:"Det handlar om 3",iframeSrc:"https://www.youtube.com/embed/GQ3cTuSH9zM",blogs:[{title:"Du 3",paragraphs:["Vet att vi kan g\xf6ra m\xe5nga blog inl\xe4gg! 3"]},{title:"Ganska coolt 33",paragraphs:["Vet att vi kan g\xf6ra m\xe5nga blog inl\xe4gg! 33"]},{title:"Ganska coolt 333",paragraphs:["Vet att vi kan g\xf6ra m\xe5nga blog inl\xe4gg! 333"]}]},{id:"94170ad9-63c8-4513-b48c-1b19efc2c74a",path:"/project/spel-4",name:"Spel 4",description:"Det handlar om 4",iframeSrc:"https://www.youtube.com/embed/GQ3cTuSH9zM"}]});a.b=function(){return o.a.createElement(t.Fragment,null,o.a.createElement(l,null),o.a.createElement("main",{className:"flex-grow-1 container p-3"},o.a.createElement(t.Suspense,{fallback:o.a.createElement(s.a,null)},o.a.createElement(r.d,null,o.a.createElement(r.b,{exact:!0,path:"/",component:m}),o.a.createElement(r.b,{path:"/projects",component:d}),o.a.createElement(r.b,{path:"/project/:projectName",component:u}),o.a.createElement(r.b,{path:"*",component:p})))),o.a.createElement(i,null))}},18:function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));var t=n(0),o=n.n(t),r=function(){return o.a.createElement("div",{className:"Spinner"},o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("div",{className:"spinner-border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading..."))))}},22:function(e,a,n){e.exports=n(35)},29:function(e,a,n){},35:function(e,a,n){"use strict";n.r(a);var t,o=n(0),r=n.n(o),c=n(19),l=n.n(c),i=n(5),s=n(2),m=n(20),d=(n(29),n(13));!function(e){e.Development="development",e.Production="production"}(t||(t={}));var u=t,p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){if("serviceWorker"in navigator){if(new URL("/dennisabramsson.se",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/dennisabramsson.se","/service-worker.js");p?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(a,e)}))}}function b(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}window.ENV_PRODUCTION="production"===u.Production,window.ENV_DEVELOPMENT="production"===u.Development,window.NEW_GUID=function(){return Object(m.v4)()},l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(s.b,{component:d.b}))),document.getElementById("App")),window.ENV_PRODUCTION?(g(),console.log("%cDennisAbramsson.se","color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 3px black;font-weight:bold")):window.ENV_DEVELOPMENT&&("serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),console.log("%cprocess.env.REACT_APP_FEATURED_PROJECTS_QUANTITY:","font-family:system-ui;font-size:1rem;font-weight:bold"),console.log("3"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8fb4643c.chunk.js.map