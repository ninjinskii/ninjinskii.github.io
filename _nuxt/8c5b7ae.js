(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{268:function(t,e,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("7132a15d",content,!0,{sourceMap:!1})},269:function(t,e,r){var n=r(44)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},271:function(t,e,r){"use strict";e.a=[{shortname:"grtw",name:"Ginko Real Time Widget",subtitle:"grtw__subtitle",thumbnail:"/images/logo-grtw.png",technos:["Android","Kotlin","SQLite","XML"],story:"grtw__story",code:"https://github.com/ninjinskii/GinkoRealTimeWidget",demo:{video:"https://user-images.githubusercontent.com/31962617/133438216-aeb103ca-983a-4808-90c2-166db4ea4e04.mp4",timestamps:[{when:0,desc:"demo__add_path"},{when:23,desc:"demo__choose_path"},{when:31,desc:"demo__add_widget"},{when:47,desc:"demo__update_times"},{when:54,desc:"demo__switch_directions"},{when:64,desc:"demo__add_new_path"},{when:70,desc:"demo__fill_stops"},{when:81,desc:"demo__change_path"},{when:98,desc:"demo__delete_path"}]}},{shortname:"cavity",name:"Cavity",subtitle:"cavity__subtitle",thumbnail:"/images/logo-cavity.png",technos:["Android","Java","SQLite","XML"],story:"cavity__story",code:"https://github.com/ninjinskii/JavaCavity",demo:{video:"https://user-images.githubusercontent.com/31962617/133339957-7a56500a-65b1-4343-999f-ad7c653cf391.mp4",timestamps:[{when:0,desc:"demo__display_wines"},{when:9,desc:"demo__delete_wine"},{when:12,desc:"demo__add_wine"},{when:46,desc:"demo__search_wine"},{when:57,desc:"demo__add_bottle"},{when:115,desc:"demo__display_bottle"},{when:134,desc:"demo__consume_bottle"},{when:159,desc:"demo__delete_bottle"}]}}]},290:function(t,e,r){"use strict";r.r(e);var n=r(264),o={props:{project:{type:Object,default:function(){return{}}},last:{type:Boolean,default:!1}},data:function(){return{mdiOpenInNew:n.e}}},c=r(63),d=r(128),l=r.n(d),h=r(389),v=r(382),_=r(388),m=r(379),w=r(376),f=r(315),x=r(329),j=r(390),y=r(380),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","px-0":""}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"3",lg:"2"}},[r("v-img",{staticClass:"rounded-circle mx-auto mx-md-0",attrs:{src:t.project.thumbnail,"aspect-ratio":"1","max-width":"196px",width:"100%"}})],1),t._v(" "),r("v-col",[r("h2",{staticClass:"mb-n3 text-center text-md-left",staticStyle:{width:"100%"}},[t._v("\n        "+t._s(t.project.name)+"\n      ")]),t._v(" "),r("div",{staticClass:"text-overline text--disabled text-center text-md-left"},[t._v("\n        "+t._s(t.$t(t.project.subtitle))+"\n      ")]),t._v(" "),r("v-chip-group",{attrs:{column:""}},t._l(t.project.technos,(function(e,n){return r("v-chip",{key:n,attrs:{ripple:!1}},[t._v("\n          "+t._s(e)+"\n        ")])})),1),t._v(" "),r("p",{staticClass:"text--medium text-justify text-sm-left"},[t._v("\n        "+t._s(t.$t(t.project.story))+"\n      ")]),t._v(" "),r("v-btn",{staticClass:"mt-4",attrs:{outlined:"",href:t.project.code,target:"blank"}},[t._v("\n        "+t._s(t.$t("show__code"))+"\n        "),r("v-icon",{attrs:{right:""}},[t._v("\n          "+t._s(t.mdiOpenInNew)+"\n        ")])],1),t._v(" "),r("v-btn",{staticClass:"mt-4 ml-sm-4",attrs:{outlined:""},on:{click:function(e){return t.$emit("show-project")}}},[t._v("\n        "+t._s(t.$t("show__demo"))+"\n      ")]),t._v(" "),t.last?t._e():r("v-divider",{staticClass:"mt-16"})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VChip:v.a,VChipGroup:_.a,VCol:m.a,VContainer:w.a,VDivider:f.a,VIcon:x.a,VImg:j.a,VRow:y.a})},315:function(t,e,r){"use strict";r(13),r(7),r(16),r(23),r(24);var n=r(2),o=(r(268),r(62));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:d({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:d({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},333:function(t,e,r){"use strict";r.r(e);var n=r(271),o={data:function(){return{projects:n.a}}},c=r(63),d=r(128),l=r.n(d),h=r(379),v=r(376),_=r(380),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("h2",{staticClass:"my-8 my-md-16 d-block text-truncate"},[t._v("\n    "+t._s(t.$t("home__projects"))+"\n  ")]),t._v(" "),r("v-row",t._l(t.projects,(function(e,n){return r("v-col",{key:n,attrs:{cols:"12"}},[r("project-item",{attrs:{project:e,last:n===t.projects.length-1},on:{"show-project":function(r){return t.$emit("show-project",e)}}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{ProjectItem:r(290).default}),l()(component,{VCol:h.a,VContainer:v.a,VRow:_.a})}}]);