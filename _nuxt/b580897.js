(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,4,6,7,8],{211:function(t,e,o){"use strict";e.a=[{shortname:"grtw",name:"Ginko Real Time Widget",subtitle:"grtw__subtitle",thumbnail:"/images/logo-grtw.png",technos:["Android","Kotlin","SQLite","XML"],story:"grtw__story",code:"https://github.com/ninjinskii/GinkoRealTimeWidget",demo:{video:"https://user-images.githubusercontent.com/31962617/133438216-aeb103ca-983a-4808-90c2-166db4ea4e04.mp4",timestamps:[{when:0,desc:"demo__add_path"},{when:23,desc:"demo__choose_path"},{when:31,desc:"demo__add_widget"},{when:47,desc:"demo__update_times"},{when:54,desc:"demo__switch_directions"},{when:64,desc:"demo__add_new_path"},{when:70,desc:"demo__fill_stops"},{when:81,desc:"demo__change_path"},{when:98,desc:"demo__delete_path"}]}},{shortname:"cavity",name:"Cavity",subtitle:"cavity__subtitle",thumbnail:"/images/logo-cavity.png",technos:["Android","Java","SQLite","XML"],story:"cavity__story",code:"https://github.com/ninjinskii/JavaCavity",demo:{video:"https://user-images.githubusercontent.com/31962617/133339957-7a56500a-65b1-4343-999f-ad7c653cf391.mp4",timestamps:[{when:0,desc:"demo__display_wines"},{when:9,desc:"demo__delete_wine"},{when:12,desc:"demo__add_wine"},{when:46,desc:"demo__search_wine"},{when:57,desc:"demo__add_bottle"},{when:115,desc:"demo__display_bottle"},{when:134,desc:"demo__consume_bottle"},{when:159,desc:"demo__delete_bottle"}]}}]},212:function(t,e,o){var content=o(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("4d9f619d",content,!1,{sourceMap:!1})},213:function(t,e,o){"use strict";o.r(e);var r=o(210),n={props:{project:{type:Object,default:function(){return{}}},last:{type:Boolean,default:!1}},data:function(){return{mdiOpenInNew:r.e}}},c=o(42),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"","px-0":""}},[o("v-row",[o("v-col",{attrs:{cols:"12",md:"3",lg:"2"}},[o("v-img",{staticClass:"rounded-circle mx-auto mx-md-0",attrs:{src:t.project.thumbnail,"aspect-ratio":"1","max-width":"196px",width:"100%"}})],1),t._v(" "),o("v-col",[o("h2",{staticClass:"mb-n3 text-center text-md-left",staticStyle:{width:"100%"}},[t._v("\n        "+t._s(t.project.name)+"\n      ")]),t._v(" "),o("div",{staticClass:"text-overline text--disabled text-center text-md-left"},[t._v("\n        "+t._s(t.$t(t.project.subtitle))+"\n      ")]),t._v(" "),o("v-chip-group",{attrs:{column:""}},t._l(t.project.technos,(function(e,r){return o("v-chip",{key:r,attrs:{ripple:!1}},[t._v("\n          "+t._s(e)+"\n        ")])})),1),t._v(" "),o("p",{staticClass:"text--medium text-justify text-sm-left"},[t._v("\n        "+t._s(t.$t(t.project.story))+"\n      ")]),t._v(" "),o("v-btn",{staticClass:"mt-4",attrs:{outlined:"",href:t.project.code,target:"blank"}},[t._v("\n        "+t._s(t.$t("show__code"))+"\n        "),o("v-icon",{attrs:{right:""}},[t._v("\n          "+t._s(t.mdiOpenInNew)+"\n        ")])],1),t._v(" "),o("v-btn",{staticClass:"mt-4 ml-sm-4",attrs:{outlined:""},on:{click:function(e){return t.$emit("show-project")}}},[t._v("\n        "+t._s(t.$t("show__demo"))+"\n      ")]),t._v(" "),t.last?t._e():o("v-divider",{staticClass:"mt-16"})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,o){"use strict";o(212)},215:function(t,e,o){var r=o(60)(!1);r.push([t.i,".v-input[data-v-5f5f583c]{margin-top:-8px;padding:4px;background-color:rgba(0,0,0,.5)}",""]),t.exports=r},216:function(t,e,o){"use strict";o.r(e);o(21);var r=o(210),n={props:{project:{type:Object,default:null},show:{type:Boolean,default:!1}},data:function(){return{mdiPlay:r.g,mdiPause:r.f,mdiClose:r.b,isPlaying:!1,isDragging:!1,drag:0,currentTime:0,timebar:0,muted:!0}},computed:{currentTimestamp:function(){var t=this;if(this.project){var a=this.project.demo.timestamps.filter((function(e){return t.currentTime>=e.when})).pop();return this.project.demo.timestamps.indexOf(a)}return 0},currentPlayerTime:function(){var t=this.isDragging?this.computeRatio(this.drag):this.currentTime,e=this.formatSeconds(~~t),o=this.formatSeconds(this.$refs.video?~~this.$refs.video.duration:0);return"".concat(e," / ").concat(o)}},watch:{show:function(t){t?this.playVideo():this.pauseVideo()}},mounted:function(){this.playVideo()},beforeDestroy:function(){this.pauseVideo()},methods:{closeSelf:function(){this.$emit("close")},playVideo:function(){this.$refs.video&&this.$refs.video.play()},pauseVideo:function(){this.$refs.video&&this.$refs.video.pause()},toggleVideo:function(){this.isPlaying?this.pauseVideo():this.playVideo()},updateTime:function(){if(this.$refs.video&&!this.isDragging){var t=~~this.$refs.video.duration;this.timebar=~~(100/t*this.currentTime),this.currentTime=this.$refs.video.currentTime}},goTo:function(time){this.$refs.video&&(this.$refs.video.currentTime=time,this.updateTime()),this.playVideo()},computeRatio:function(t){return this.$refs.video?~~(~~this.$refs.video.duration*(t/100)):0},formatSeconds:function(s){return(s-(s%=60))/60+(9<s?":":":0")+s}}},c=(o(214),o(42)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.project?o("v-card",[o("v-card-title",[o("div",{staticStyle:{"max-width":"90%"}},[t.$vuetify.breakpoint.mobile?o("div",[t._v("\n        "+t._s(t.project.name)+"\n      ")]):o("h2",{staticClass:"mb-n1"},[t._v("\n        "+t._s(t.project.name)+"\n      ")]),t._v(" "),t.$vuetify.breakpoint.mobile?t._e():o("div",{staticClass:"text-overline text--disabled"},[t._v("\n        "+t._s(t.$t(t.project.subtitle))+"\n      ")])]),t._v(" "),o("v-spacer"),t._v(" "),t.$vuetify.breakpoint.mobile?o("v-btn",{attrs:{icon:"",large:""},on:{click:function(e){return t.closeSelf()}}},[o("v-icon",{attrs:{large:""}},[t._v(t._s(t.mdiClose)+" ")])],1):t._e()],1),t._v(" "),o("v-card-text",[o("v-row",{staticClass:"mt-1 mt-sm-4",attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12",md:"6"}},[o("div",{staticClass:"mx-auto",staticStyle:{width:"260px"}},[o("div",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"primary--text"},expression:"{ class: 'primary--text' }"}]},[o("video",{ref:"video",staticClass:"mx-auto ml-md-auto mr-md-0",attrs:{src:t.project.demo.video,type:"video/mp4",height:"540",width:"260",autoplay:"",muted:""},domProps:{muted:!0},on:{play:function(e){t.isPlaying=!0},pause:function(e){t.isPlaying=!1},timeupdate:function(e){return t.updateTime()},click:function(e){return t.toggleVideo()}}})]),t._v(" "),o("v-slider",{attrs:{color:"primary",min:"0",max:"100",value:t.timebar,"prepend-icon":t.isPlaying?t.mdiPause:t.mdiPlay,hint:t.currentPlayerTime,"persistent-hint":""},on:{start:function(e){t.isDragging=!0},end:function(e){t.isDragging=!1},input:function(e){t.drag=e},change:function(e){t.goTo(t.$refs.video.duration*(e/100))},"click:prepend":function(e){return t.toggleVideo()}}})],1)]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-list",{attrs:{rounded:"",dense:"",outlined:""}},[o("v-list-item-group",{attrs:{value:t.currentTimestamp,mandatory:""}},t._l(t.project.demo.timestamps,(function(e){return o("v-list-item",{key:e.when,attrs:{color:"primary"},on:{click:function(o){return t.goTo(e.when)}}},[o("v-list-item-action",[o("span",[t._v("\n                  "+t._s(t.formatSeconds(e.when))+"\n                ")])]),t._v(" "),o("v-list-item-content",[t._v("\n                "+t._s(t.$t(e.desc))+"\n              ")])],1)})),1)],1)],1)],1)],1)],1):t._e()}),[],!1,null,"5f5f583c",null);e.default=component.exports},217:function(t,e,o){"use strict";o.r(e);var r=o(2),n=(o(32),o(210)),c={data:function(){var t=this;return{mdiSend:n.h,mdiClose:n.b,valid:!1,fullName:"",email:"",message:"",rules:{required:function(e){return!!e||t.$t("form__required_field")},email:function(e){return/\S+@\S+\.\S+/.test(e)||t.$t("form__invalid_email")}}}},methods:{closeSelf:function(){this.$emit("close"),this.$refs.form.resetValidation()},onSubmit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("https://formspree.io/f/mzbyodbp",{fullName:t.fullName,email:t.email,message:t.message});case 3:if(!0!==e.sent.ok){e.next=10;break}t.$nuxt.$emit("form-success"),t.$refs.form.reset(),t.closeSelf(),e.next=11;break;case 10:throw new Error;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t.$nuxt.$emit("form-error");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}}},l=o(42),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-card-title",[o("h2",[t._v("\n        "+t._s(t.$t("home__contact"))+"\n      ")]),t._v(" "),o("v-spacer"),t._v(" "),t.$vuetify.breakpoint.mobile?o("v-btn",{attrs:{icon:"",large:""},on:{click:function(e){return t.closeSelf()}}},[o("v-icon",{attrs:{large:""}},[t._v(t._s(t.mdiClose)+" ")])],1):t._e()],1),t._v(" "),o("v-card-text",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-text-field",{attrs:{label:t.$t("form__full_name"),rules:[t.rules.required],"hide-details":"auto",filled:""},model:{value:t.fullName,callback:function(e){t.fullName=e},expression:"fullName"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-text-field",{attrs:{label:t.$t("form__email_address"),rules:[t.rules.required,t.rules.email],type:"email",name:"email","hide-details":"auto",filled:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{rows:"3",label:t.$t("form__message"),rules:[t.rules.required],"hide-details":"auto",filled:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-btn",{staticClass:"float-right",attrs:{outlined:"",large:"",disabled:!t.valid},on:{click:function(e){return t.onSubmit()}}},[t._v("\n            "+t._s(t.$t("form__submit"))+"\n            "),o("v-icon",{attrs:{right:""}},[t._v("\n              "+t._s(t.mdiSend)+"\n            ")])],1)],1)],1),t._v(" "),o("v-row",{staticClass:"mt-8"},[o("v-col",{attrs:{cols:"4",sm:"5"}},[o("v-divider")],1),t._v(" "),o("v-col",{staticClass:"text-center",attrs:{cols:"4",sm:"2"}},[o("h2",[t._v("OU")])]),t._v(" "),o("v-col",{attrs:{cols:"4",sm:"5"}},[o("v-divider")],1),t._v(" "),o("v-col",[o("p",[t._v("\n            Envoyez-moi un mail à\n            "),o("a",{attrs:{href:"mailto:louis.bailly.pro@gmail.com"}},[t._v("louis.bailly.pro@gmail.com")])])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},218:function(t,e,o){"use strict";o.r(e);var r=o(210),n={data:function(){return{mdiGithub:r.d,mdiFileOutline:r.c,mdiSend:r.h}}},c=o(42),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"8"}},[o("h1",[t._v("Bailly Louis")]),t._v(" "),o("h3",{staticClass:"text--disabled"},[t._v(t._s(t.$t("home__title")))])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-row",[o("v-col",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{cols:"4"}},[o("a",{staticClass:"text--primary",attrs:{href:"https://github.com/ninjinskii",target:"blank"}},[o("v-icon",{staticClass:"d-block mx-auto",attrs:{"x-large":""}},[t._v(t._s(t.mdiGithub))]),t._v(" "),o("p",{staticClass:"text-center text-overline"},[t._v(t._s(t.$t("home__github")))])],1)]),t._v(" "),o("v-col",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{cols:"4"}},[o("a",{staticClass:"text--primary",attrs:{href:"/resume/resume.html"}},[o("v-icon",{staticClass:"d-block mx-auto",attrs:{"x-large":""}},[t._v(t._s(t.mdiFileOutline))]),t._v(" "),o("p",{staticClass:"text-center text-overline"},[t._v(t._s(t.$t("home__resume")))])],1)]),t._v(" "),o("v-col",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"text--primary",staticStyle:{cursor:"pointer"},attrs:{cols:"4"},on:{click:function(e){return t.$emit("open-contact")}}},[o("v-icon",{staticClass:"d-block mx-auto",attrs:{"x-large":""}},[t._v(t._s(t.mdiSend))]),t._v(" "),o("p",{staticClass:"text-center text-overline"},[t._v(t._s(t.$t("home__contact")))])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},219:function(t,e,o){"use strict";o.r(e);var r=o(211),n={data:function(){return{projects:r.a}}},c=o(42),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("h2",{staticClass:"my-8 my-md-16 d-block text-truncate"},[t._v("\n    "+t._s(t.$t("home__projects"))+"\n  ")]),t._v(" "),o("v-row",t._l(t.projects,(function(e,r){return o("v-col",{key:r,attrs:{cols:"12"}},[o("project-item",{attrs:{project:e,last:r===t.projects.length-1},on:{"show-project":function(o){return t.$emit("show-project",e)}}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectItem:o(213).default})},223:function(t,e,o){"use strict";o.r(e);o(78);var r=o(211),n={transition:{name:"shared-reverse",mode:""},data:function(){return{projectDialog:{show:!1,project:null},contactDialog:!1}},computed:{goFullscreen:function(){return this.$vuetify.breakpoint.mobile}},created:function(){var t=this.$route.query.project;if(t){var e=r.a.find((function(e){return e.shortname.toLowerCase()===t}));e&&this.showProject(e)}},methods:{showProject:function(t){this.projectDialog.project=t,this.projectDialog.show=!0},closeProject:function(){this.projectDialog.show=!1},controlVideo:function(t){this.$refs.demo&&(t?this.$refs.demo.playVideo():this.$refs.demo.pauseVideo())}}},c=o(42),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-dialog",{attrs:{fullscreen:t.goFullscreen,"max-width":"850px"},on:{input:function(e){return t.controlVideo(e)}},model:{value:t.projectDialog.show,callback:function(e){t.$set(t.projectDialog,"show",e)},expression:"projectDialog.show"}},[o("project-demo",{ref:"demo",attrs:{project:t.projectDialog.project,show:t.projectDialog.show},on:{close:function(e){return t.closeProject()}}})],1),t._v(" "),o("v-dialog",{attrs:{fullscreen:t.goFullscreen,"max-width":"600px"},model:{value:t.contactDialog,callback:function(e){t.contactDialog=e},expression:"contactDialog"}},[o("contact-form",{on:{close:function(e){t.contactDialog=!1}}})],1),t._v(" "),o("top-header",{on:{"open-contact":function(e){t.contactDialog=!0}}}),t._v(" "),o("project-list",{on:{"show-project":function(e){return t.showProject(e)}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectDemo:o(216).default,ContactForm:o(217).default,TopHeader:o(218).default,ProjectList:o(219).default})}}]);