(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{347:function(t,e,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("390e8196",content,!0,{sourceMap:!1})},348:function(t,e,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("cf752706",content,!0,{sourceMap:!1})},350:function(t,e,n){"use strict";n(347)},351:function(t,e,n){var o=n(16)(!1);o.push([t.i,".title[data-v-5119a988]{margin:20px 0}a.icon[data-v-5119a988]{text-decoration:none;margin:0 5px}.icon:hover>button[data-v-5119a988],.icon:hover>i[data-v-5119a988]{color:#f50057}.icon:hover>i[data-v-5119a988]{transform:scale(1.2) rotate(-10deg)}.header[data-v-5119a988]{font-size:1.1rem}.header-title a[data-v-5119a988]{text-decoration:none}.header-subtitle[data-v-5119a988]{font-style:italic}.header-icon[data-v-5119a988]{text-decoration:none}.content-body[data-v-5119a988],.content-dates[data-v-5119a988]{font-size:.95rem;padding:4px}.content-body[data-v-5119a988] a{color:#f50057;text-decoration:none}.content-icons-row[data-v-5119a988]{text-align:center}.content-icon[data-v-5119a988]{margin:0 10px;text-decoration:none;color:#fff}.content-dates[data-v-5119a988]{font-style:italic;text-align:right;color:#a7a7a7;margin-bottom:0}",""]),t.exports=o},353:function(t,e,n){"use strict";n(348)},354:function(t,e,n){var o=n(16)(!1);o.push([t.i,".content[data-v-96207d1e]{max-width:900px}.content p[data-v-96207d1e]{margin-top:16px}",""]),t.exports=o},355:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0cd63bd9",content,!0,{sourceMap:!1})},356:function(t,e,n){var o=n(16)(!1);o.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=o},357:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{name:"Rishi Keshav Pradeep",description:"I'm a 12th-grade high-school student at Lynbrook High School with a strong interest in ML. I'm a quick learner, and I'm always happy to connect with new people and collaborate on projects. In my free time, I enjoy listening to music, learning online, and competing in hackathons."}}},r=(n(353),n(42)),c=n(43),l=n.n(c),d=n(389),h=(n(30),n(355),n(0).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),m=n(15),f=Object(m.a)(h).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{attrs:{id:"intro-component",dark:"",src:"/img/intro-bg.png",height:"350"}},[n("v-container",{staticClass:"content"},[n("h1",[t._v("Hi, I'm "+t._s(t.name)+" 👋")]),t._v(" "),n("p",[t._v(t._s(t.description))])])],1)}),[],!1,null,"96207d1e",null);e.default=component.exports;l()(component,{VContainer:d.a,VParallax:f})},358:function(t,e,n){"use strict";n.r(e);var o=n(151),r={components:{showAt:o.showAt,hideAt:o.hideAt},props:{title:{type:String,default:function(){return""}},data:{type:Array,default:function(){return[]}}}},c=(n(350),n(42)),l=n(43),d=n.n(l),h=n(342),m=n(104),f=n(389),v=n(340),w=n(390),x=n(395),y=n(391),k=n(396),_=n(335),A=n(392),C=n(341),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("v-expansion-panels",{attrs:{popout:""}},t._l(t.data,(function(e,i){return n("v-expansion-panel",{key:i,attrs:{"hide-actions":""}},[n("v-expansion-panel-header",[n("v-row",{staticClass:"spacer",attrs:{align:"center","no-gutters":""}},[n("span",{staticClass:"header-title"},[n("strong",[t._v(t._s(e.header.title)+" ")])]),t._v(" "),e.header.subtitle?n("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[n("span",{staticClass:"header-subtitle"},[t._v("\n                - "+t._s(e.header.subtitle)+"\n              ")])]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),e.header.links&&e.header.links.length>0?n("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[n("span",t._l(e.header.links,(function(link,e){return n("a",{key:e,staticClass:"icon",attrs:{href:link.href}},[link.icon?n("v-icon",{attrs:{dense:""},domProps:{textContent:t._s(link.icon)}}):link.iconText?n("v-btn",{attrs:{text:"",small:""},domProps:{textContent:t._s(link.iconText)}}):t._e()],1)})),0)]):t._e()],1)],1),t._v(" "),n("v-expansion-panel-content",{staticClass:"content"},[n("v-divider"),t._v(" "),e.header.subtitle?n("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[n("v-card-text",{staticClass:"content-body"},[n("strong",[t._v(t._s(e.header.subtitle))])])],1):t._e(),t._v(" "),t._l(e.content.body,(function(p,e){return n("v-card-text",{key:e,staticClass:"content-body",domProps:{innerHTML:t._s(p)}})})),t._v(" "),e.content.dates?n("p",{staticClass:"content-dates"},[t._v("\n            ("+t._s(e.content.dates)+")\n          ")]):t._e(),t._v(" "),e.content.icons&&e.content.icons.length>0?n("v-card-text",{staticClass:"content-icons-row"},t._l(e.content.icons,(function(e,o){return n("a",{key:o,staticClass:"icon",attrs:{href:e.link}},[e.icon?n("v-icon",{domProps:{textContent:t._s(e.icon)}}):e.iconText?n("v-btn",{attrs:{text:""},domProps:{textContent:t._s(e.iconText)}}):t._e()],1)})),0):t._e(),t._v(" "),e.header.links&&e.header.links.length>0?n("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[n("v-card-text",{staticClass:"content-icons-row"},t._l(e.header.links,(function(link,e){return n("a",{key:e,staticClass:"icon",attrs:{href:link.href}},[link.icon?n("v-icon",{domProps:{textContent:t._s(link.icon)}}):link.iconText?n("v-btn",{attrs:{text:""},domProps:{textContent:t._s(link.iconText)}}):t._e()],1)})),0)],1):t._e()],2)],1)})),1)],1)],1)}),[],!1,null,"5119a988",null);e.default=component.exports;d()(component,{VBtn:h.a,VCardText:m.a,VContainer:f.a,VDivider:v.a,VExpansionPanel:w.a,VExpansionPanelContent:x.a,VExpansionPanelHeader:y.a,VExpansionPanels:k.a,VIcon:_.a,VRow:A.a,VSpacer:C.a})},360:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("43b4209a",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";n(360)},388:function(t,e,n){var o=n(16)(!1);o.push([t.i,".content[data-v-a284c25a]{max-width:1000px;margin-bottom:50px}#footer[data-v-a284c25a]{margin-top:50px}",""]),t.exports=o},394:function(t,e,n){"use strict";n.r(e);var o=n(358),r=n(357),c={components:{Accordion:o.default,Intro:r.default},data:function(){return{projects:{title:"Projects",data:[{header:{title:"YouTube Mentions",subtitle:"2nd Place Media Track @ PickHacks 2021",links:[{icon:"mdi-github",href:"https://github.com/keshprad/youtube-mentions"},{iconText:"Devpost",href:"https://devpost.com/software/youtube-mentions"},{icon:"mdi-youtube",href:"https://www.youtube.com/watch?v=O9BwcoK1fEM"}]},content:{body:["This application analyzes the given YouTube video, retrieves quick snippets of relevant information about people, songs, games, etc. mentioned in the video, and displays them side-by-side."]}},{header:{title:"Autoscriber",links:[{icon:"mdi-github",href:"https://github.com/autoscriber-app"},{icon:"mdi-link-variant",href:"https://autoscriber-app.github.io/"}]},content:{body:["Autoscriber is a progressive web app (PWA) that listens to your microphone audio, transcribes your speech, and summarizes your meeting in bullet point format. During the meeting, participants simply open a session link and turn on their microphone. Once the meeting is over, Autoscriber will use AI language models to analyze the conversation and jot down important sentences automatically.","<strong>tldr: PWA for automatic online meeting notes using speech recognition and NLP.</strong>"]}},{header:{title:"Algorithms",links:[{icon:"mdi-github",href:"https://github.com/keshprad/Algorithms"}]},content:{body:["A repository full of various algorithms and data structures that I find interesting."]}},{header:{title:"competitive programming",links:[{icon:"mdi-github",href:"https://github.com/keshprad/competitive-programming"}]},content:{body:["competitive programming practice solutions"]}},{header:{title:"best-comeback",links:[{icon:"mdi-github",href:"https://github.com/keshprad/best-comeback"},{icon:"mdi-image",href:"https://github.com/keshprad/best-comeback/blob/main/README.md#examples"}]},content:{body:['Want to end an argument with a win? This repo creates an automatic "Deal With It" gif.']}},{header:{title:"my-portfolio",links:[{icon:"mdi-github",href:"https://github.com/keshprad/my-portfolio"},{icon:"mdi-link-variant",href:"https://keshprad.ml/"}]},content:{body:["Repo for my personal portfolio site"]}},{header:{title:"leftovers",links:[{icon:"mdi-github",href:"https://github.com/ddanj/leftovers"}]},content:{body:["The application detects the foods in pictures the user takes and finds recipes for dishes that can be made from those foods. [Built for Los Altos Hacks]"]}},{header:{title:"CloseCans",links:[{icon:"mdi-github",href:"https://github.com/keshprad/CloseCans"}]},content:{body:["A react-native application that finds trash, recycling, and compost bins near to the user. [Built for LA Hacks]"]}}]},workExperience:{title:"Work Experience",data:[{header:{title:"dsapps",subtitle:"Software Engineering Intern"},content:{body:["At dsapps I worked on an AML project to assist in forecasting resource requirements for new tasks based on past historical data and patterns from other tasks. I worked on k-means clustering algorithms, as well as text cleaning."],dates:"Jun 2020 - Sept 2020"}},{header:{title:"Elevate the Future",subtitle:"Director of Project Falcon, VP of San Jose, Founding Member"},content:{body:['I founded and directed <a href="https://www.elevatethefuture.org/projectfalcon/" target="_blank">Project Falcon</a> — one of our most effective programs. I lead our officer team and managed a team of 30+ volunteers. I managed communications with clients and other businesses making sure everything went smoothly on both sides. I also helped build multiple websites for our clients. Besides this, I also created the course curriculum in use.','Additionally, as part of the <a href="https://www.elevatethefuture.org" target="_blank">ETF</a>\'s founding team, I advised on executive decisions and worked to expand our influence to over 40+ chapters around the world. Also, we are constantly working on implementing new events. Besides this, I help update/design our website.'],dates:"Jul 2019 - Present"}},{header:{title:"Zamono",subtitle:"Data Research Intern"},content:{body:["Designed DB tables to store different disease information which formed part of Zamono’s diagnostic systems."],dates:"Jun 2016 - Aug 2016"}}]},awards:{title:"Awards & Certifications",data:[{header:{title:"2nd Place Media Track",subtitle:"PickHacks 2021"},content:{body:["YouTube Mentions: This application analyzes the given YouTube video, retrieves quick snippets of relevant information about people, songs, games, etc. mentioned in the video, and displays them side-by-side."],icons:[{icon:"mdi-github",link:"https://github.com/keshprad/youtube-mentions"},{iconText:"Devpost",link:"https://devpost.com/software/youtube-mentions"},{icon:"mdi-youtube",link:"https://www.youtube.com/watch?v=O9BwcoK1fEM"}],dates:"Apr 2021"}},{header:{title:"Stanford Algorithms Specialization"},content:{body:["&bull; Divide and Conquer, Sorting and Searching, and Randomized Algorithms","&bull; Graph Search, Shortest Paths, and Data Structures","&bull; Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming","&bull; Shortest Paths Revisited, NP-Complete Problems and What To Do About Them"],icons:[{iconText:"Coursera",link:"https://www.coursera.org/account/accomplishments/specialization/JGJD68YT52NQ"}]}},{header:{title:"Google IT Support Specialization"},content:{body:["&bull; The Bits and Bytes of Computer Networking","&bull; IT Security: Defense against the digital dark arts","&bull; System Administration and IT Infrastructure Services","&bull; Technical Support Fundamentals","&bull; Operating Systems and You: Becoming a Power User"],icons:[{iconText:"Coursera",link:"https://www.coursera.org/account/accomplishments/specialization/KF6RGBL6NLTW/"}]}}]},education:{title:"Education",data:[{header:{title:"Lynbrook High School"},content:{body:['Head of Front End @ <a href="https://lhswebdev.github.io/">Lynbrook WebDev</a>: WebDev is a student interest club where we present about hundreds of topics including Networking, HTML/CSS/JS, frameworks, etc.',"Vice-President @ Lynbrook Me to We: Me to We is a club at Lynbrook affiliated with the WE Charity. Our club conducts campaigns to raise funding for a school in Totoras, Ecuador. I lead member meetings, guide our officer team, organize events, and maintain communications with affiliated organizations."],dates:"2017 - 2021"}}]}}},head:function(){return{title:"Portfolio"}}},l=(n(387),n(42)),d=n(43),h=n.n(d),m=n(389),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"portfolio"}},[n("Intro"),t._v(" "),n("v-container",{staticClass:"content"},[n("Accordion",{attrs:{id:"projects",title:t.projects.title,data:t.projects.data}}),t._v(" "),n("Accordion",{attrs:{id:"work-experience",title:t.workExperience.title,data:t.workExperience.data}}),t._v(" "),n("Accordion",{attrs:{id:"awards",title:t.awards.title,data:t.awards.data}}),t._v(" "),n("Accordion",{attrs:{id:"education",title:t.education.title,data:t.education.data}})],1)],1)}),[],!1,null,"a284c25a",null);e.default=component.exports;h()(component,{Intro:n(357).default,Accordion:n(358).default}),h()(component,{VContainer:m.a})}}]);