(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{274:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("86e7231a",content,!0,{sourceMap:!1})},278:function(t,e,n){"use strict";var r=n(6),o=n(102)(6),l="findIndex",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),r(r.P+r.F*c,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(87)(l)},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));n(13),n(7),n(23),n(24);var r=n(2),o=(n(84),n(16),n(40),n(34),n(28),n(86),n(278),n(309),n(298)),l=n(62),c=n(61),d=n(14);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m=Object(c.a)(o.a,l.a).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(d.c)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,i){return null==t.value||""===t.value?i:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(n)<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var n=e.find((function(t){return!t.disabled}));if(n){var r=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,r))}}},updateMultiple:function(t){var e=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),n=e.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&e.length-1<1||null!=this.max&&n<0&&e.length+1>this.max||(n>-1?e.splice(n,1):e.push(t),this.internalValue=e)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});m.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},295:function(t,e,n){"use strict";n(274)},296:function(t,e,n){var r=n(44)(!1);r.push([t.i,".v-input[data-v-e569e1f2]{margin-top:-8px;padding:4px;background-color:rgba(0,0,0,.5)}.video-play[data-v-e569e1f2]{background-color:rgba(0,0,0,.9);cursor:default}",""]),t.exports=r},309:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("73707fd0",content,!0,{sourceMap:!1})},310:function(t,e,n){var r=n(44)(!1);r.push([t.i,".v-item-group{flex:0 1 auto;position:relative;max-width:100%;transition:.3s cubic-bezier(.25,.8,.5,1)}",""]),t.exports=r},334:function(t,e,n){"use strict";n.r(e);n(16);var r=n(264),o={props:{project:{type:Object,default:null},show:{type:Boolean,default:!1}},data:function(){return{mdiPlay:r.g,mdiPause:r.f,mdiClose:r.b,isPlaying:!1,isDragging:!1,enableTimeControl:!1,drag:0,currentTime:0,timebar:0,muted:!0}},computed:{currentTimestamp:function(){var t=this;if(this.project){var a=this.project.demo.timestamps.filter((function(e){return t.currentTime>=e.when})).pop();return this.project.demo.timestamps.indexOf(a)}return 0},currentPlayerTime:function(){var t=this.isDragging?this.computeRatio(this.drag):this.currentTime,e=this.formatSeconds(~~t),n=this.formatSeconds(this.$refs.video?~~this.$refs.video.duration:0);return"".concat(e," / ").concat(n)}},watch:{show:function(t){t?this.playVideo():this.pauseVideo()}},mounted:function(){this.playVideo()},beforeDestroy:function(){this.pauseVideo()},methods:{closeSelf:function(){this.$emit("close")},playVideo:function(){this.$refs.video&&this.$refs.video.play()},pauseVideo:function(){this.$refs.video&&this.$refs.video.pause()},toggleVideo:function(){this.isPlaying?this.pauseVideo():this.playVideo()},updateTime:function(){if(this.$refs.video&&!this.isDragging){var t=~~this.$refs.video.duration;this.timebar=~~(100/t*this.currentTime),this.currentTime=this.$refs.video.currentTime}},goTo:function(time){this.$refs.video&&(this.$refs.video.currentTime=time,this.updateTime()),this.playVideo()},computeRatio:function(t){return this.$refs.video?~~(~~this.$refs.video.duration*(t/100)):0},formatSeconds:function(s){return(s-(s%=60))/60+(9<s?":":":0")+s}}},l=(n(295),n(63)),c=n(128),d=n.n(c),f=n(391),m=n(332),h=n(261),v=n(381),y=n(333),V=n(277),x=n(268),_=n(279),O=n(263),j=n(280),w=n(311),I=n(382),$=n(265),T=n(356),P=n(383),S=n(273),C=n.n(S),k=n(262),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.project?n("v-card",[n("v-card-title",[n("div",{staticStyle:{"max-width":"90%"}},[t.$vuetify.breakpoint.mobile?n("div",[t._v("\n        "+t._s(t.project.name)+"\n      ")]):n("h2",{staticClass:"mb-n1"},[t._v("\n        "+t._s(t.project.name)+"\n      ")]),t._v(" "),t.$vuetify.breakpoint.mobile?t._e():n("div",{staticClass:"text-overline text--disabled"},[t._v("\n        "+t._s(t.$t(t.project.subtitle))+"\n      ")])]),t._v(" "),n("v-spacer"),t._v(" "),t.$vuetify.breakpoint.mobile?n("v-btn",{attrs:{icon:"",large:""},on:{click:function(e){return t.closeSelf()}}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.mdiClose)+" ")])],1):t._e()],1),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mt-1 mt-sm-4",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mx-auto",staticStyle:{width:"260px"}},[n("div",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"primary--text"},expression:"{ class: 'primary--text' }"}],staticStyle:{position:"relative"}},[n("video",{ref:"video",staticClass:"mx-auto ml-md-auto mr-md-0",attrs:{src:t.project.demo.video,type:"video/mp4",height:"540",width:"260",autoplay:"",muted:""},domProps:{muted:!0},on:{play:function(e){t.isPlaying=!0},pause:function(e){t.isPlaying=!1},loadeddata:function(e){t.enableTimeControl=!0},timeupdate:function(e){return t.updateTime()},click:function(e){return t.toggleVideo()}}},[t._v("\n              "+t._s(t.$t("demo__no_video"))+"\n            ")]),t._v(" "),n("v-slide-y-transition",[t.isPlaying?t._e():n("v-overlay",{attrs:{opacity:"0",absolute:""},nativeOn:{click:function(e){return t.playVideo()}}},[n("v-btn",{staticClass:"video-play mx-auto my-auto",attrs:{icon:"","x-large":""}},[n("v-icon",{attrs:{"x-large":""}},[t._v(t._s(t.mdiPlay))])],1)],1)],1)],1),t._v(" "),n("v-slider",{attrs:{color:"primary",min:"0",max:"100",disabled:!t.enableTimeControl,value:t.timebar,"prepend-icon":t.isPlaying?t.mdiPause:t.mdiPlay,hint:t.currentPlayerTime,"persistent-hint":""},on:{start:function(e){t.isDragging=!0},end:function(e){t.isDragging=!1},input:function(e){t.drag=e},change:function(e){t.goTo(t.$refs.video.duration*(e/100))},"click:prepend":function(e){return t.toggleVideo()}}})],1)]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-list",{attrs:{rounded:"",dense:"",outlined:""}},[n("v-list-item-group",{attrs:{value:t.currentTimestamp,mandatory:""}},t._l(t.project.demo.timestamps,(function(e){return n("v-list-item",{key:e.when,attrs:{color:"primary"},on:{click:function(n){return t.goTo(e.when)}}},[n("v-list-item-action",[n("span",[t._v("\n                  "+t._s(t.formatSeconds(e.when))+"\n                ")])]),t._v(" "),n("v-list-item-content",[t._v("\n                "+t._s(t.$t(e.desc))+"\n              ")])],1)})),1)],1)],1)],1)],1)],1):t._e()}),[],!1,null,"e569e1f2",null);e.default=component.exports;d()(component,{VBtn:f.a,VCard:m.a,VCardText:h.a,VCardTitle:h.b,VCol:v.a,VIcon:y.a,VList:V.a,VListItem:x.a,VListItemAction:_.a,VListItemContent:O.a,VListItemGroup:j.a,VOverlay:w.a,VRow:I.a,VSlideYTransition:$.f,VSlider:T.a,VSpacer:P.a}),C()(component,{Ripple:k.a})}}]);