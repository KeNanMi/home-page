webpackJsonp([2,0],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(11),o=a(i),s=n(158),r=a(s),u=n(75),c=n(97),l=a(c),d=n(12),f=a(d);(0,u.sync)(f.default,l.default);var m=new o.default({template:"<App/>",components:{App:r.default},router:l.default,store:f.default});m.$mount("#app")},12:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),o=a(i),s=n(29),r=a(s),u=n(32),c=a(u);o.default.use(r.default),e.default=new r.default.Store({modules:{global:c.default}})},20:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t){return 200===t.status||304===t.status?t=t.data:{data:{code:-400,message:t.statusText||"服务起发生错误~"}}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(21),s=a(o),r=n(57),u=a(r),c=n(34),l=a(c),d=n(50),f=a(d),m=n(73),p=a(m),v=n(12),h=a(v),g=n(28);f.default.defaults.baseURL="//www.codoon.com/activity/v1/swisse-vip",f.default.defaults.withCredentials=!0,f.default.defaults.crossDomain=!0,f.default.interceptors.request.use(function(t){var e=t.method.toUpperCase(),n=!1;return"GET"===e?(n=t.params&&t.params.isIntercept,t.params&&delete t.params.isIntercept):n=t.data&&p.default.parse(t.data).isIntercept,n&&g.Indicator.open({spinnerType:"fading-circle"}),t},function(t){return l.default.reject(t)}),f.default.interceptors.response.use(function(t){return g.Indicator.close(),t},function(t){return"object"===("undefined"==typeof t?"undefined":(0,u.default)(t))&&(t=t.toString()),h.default.dispatch("globalToast",t),g.Indicator.close(),l.default.reject(t)});var I=function(t,e){return(0,f.default)({method:"post",url:t,data:p.default.stringify(e),timeout:3e3,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(i)},C=function(t,e){return(0,f.default)({method:"get",url:t,params:e,timeout:3e3,headers:{"X-Requested-With":"XMLHttpRequest"}}).then(i)},M=function(t){return C("/user/info",(0,s.default)({},{isIntercept:!1},t))},b=function(t){return I("/luck",(0,s.default)({},{isIntercept:!1},t))};e.default={post:I,get:C,getUserInfo:M,luck:b}},31:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{},ready:function(){}}},32:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i,o=n(56),s=a(o),r=n(21),u=a(r),c=n(20),l=a(c),d=n(28),f=n(33),m={loading:!0,indicatorTime:null,toastMsg:"",userInfo:{}},p={loadHide:function(t,e){var n=t.commit;n(f.GLOBAL_LOADING,e)},globalToast:function(t,e){var n=t.commit;n(f.GLOBAL_TOAST,e)},getUserInfoFromSever:function(t,e){var n=t.commit;l.default.getUserInfo(e).then(function(t){n("CHANGE_USERINFO",t)})}},v=(i={},(0,s.default)(i,f.GLOBAL_LOADING,function(t,e){t.loading=e}),(0,s.default)(i,f.GLOBAL_TOAST,function(t,e){return!("string"!=typeof e||e.length<1)&&(t.toastMsg=e,void(0,d.Toast)({message:e,duration:2e3}))}),(0,s.default)(i,f.CHANGE_USERINFO,function(t,e){t.userInfo=(0,u.default)({},t.userInfo,e&&e.data)}),i),h={loadStatus:function(t){return t.loading},indicatorTime:function(t){return t.indicatorTime},userInfo:function(t){return t.userInfo}};e.default={state:m,actions:p,mutations:v,getters:h}},33:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GLOBAL_LOADING="GLOBAL_LOADING",e.GLOBAL_INDICATOR="GLOBAL_INDICATOR",e.GLOBAL_TOAST="GLOBAL_TOAST",e.CHANGE_USERINFO="CHANGE_USERINFO"},46:function(t,e){},47:function(t,e,n){n(46);var a=n(19)(n(31),n(48),"data-v-0597f7e3",null);t.exports=a.exports},48:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"mypage"},[n("a",{staticClass:"btn",attrs:{href:"http://a.app.qq.com/o/simple.jsp?pkgname=com.codoon.gps&g_f=992971"}})])])}]}},94:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(103),o=a(i),s=n(102),r=a(s);n(142);var u=n(20);a(u),n(29),function(){var t=(0,r.default)(o.default.mark(function t(e){var n;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={isIntercept:!0},t.next=3,e.dispatch("getUserInfoFromSever",n);case 3:case"end":return t.stop()}},t,void 0)}));return function(e){return t.apply(this,arguments)}}();e.default={}},95:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(98);e.default={data:function(){return{show:!0,nav:"nav",isTop:!0,isVisible:!0,headlineFinal:"",mark:0,timer:null,img:["/static/loan_one.png","/static/loan_two.png","/static/loan_three.png","/static/loan_four.png"],list:["1. Open Google Play and download Cash Lending","2. Choose loan amount and payment term","3. Spend 5 minutes to fill in application information","4. Loan disbursement within 5 seconds"]}},vuex:{getters:{headline:a.headline}},watch:{headline:function(t,e){var n=this;this.show=!1,setTimeout(function(){n.show=!0,n.headlineFinal=t},400)}},mounted:function(){this.play()},methods:{scroll:function(t){var e=document.getElementById(t);e.scrollIntoView(),e.scrollIntoView(!1),e.scrollIntoView({block:"end"}),e.scrollIntoView({block:"end",behavior:"smooth"})},change:function(t){this.mark=t},autoPlay:function(){if(this.mark++,4===this.mark)return void(this.mark=0)},play:function(){setInterval(this.autoPlay,3e3)},toDown:function(){console.log(1),window.open("https://play.google.com/store/apps/details?id=com.unipeso.phone")}}}},96:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"hello vue"}},methods:{goTest:function(t){t.preventDefault();var e=this.$route.path.split("test/")[1];console.log(e),"456"==e?this.$router.push({name:"test",params:{id:123}}):this.$router.push({name:"test",params:{id:456}})},fetchData:function(){}},watch:{$route:function(t,e){console.log(t,e)}},components:{}}},97:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),o=a(i),s=n(49),r=a(s),u=n(159),c=a(u),l=n(160),d=a(l),f=n(47),m=a(f);o.default.use(r.default);var p=new r.default({routes:[{name:"index",path:"/",component:c.default},{name:"test",path:"/test/:id",component:d.default},{name:"share",path:"/share",component:m.default}]});e.default=p},98:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.contentList=function t(e){var t=e.contentList;return t.contentList},e.headline=function t(e){var t=e.headline;return t.headline},e.article=function t(e){var t=e.article;return t},e.tags=function t(e){var t=e.tags;return t.tagSet},e.tagContentList=function t(e){var t=e.tagContentList;return t.tagContentList},e.tagContentListId=function(t){var e=t.tagContentList;return e.tagId},e.commentsList=function t(e){var t=e.commentsList;return t.commentsList}},142:function(t,e){},143:function(t,e){},144:function(t,e){},145:function(t,e){},152:function(t,e,n){t.exports=n.p+"static/images/about_bg.d6f056a8a5.png"},153:function(t,e,n){t.exports=n.p+"static/images/advantage_bg.c72322c008.png"},154:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeMAAAAwCAIAAACtyIVaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNWVjNTVmOC1kYjQ5LWEyNDQtOGMxMC03ZWM4YTM5YTI3NDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDY3RUIzM0Q5MDkxMTFFN0FCNkNBQTVCQTRCQkU4NzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDY3RUIzM0M5MDkxMTFFN0FCNkNBQTVCQTRCQkU4NzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTI3ZmRkZGItOWU0OS0zMzRkLWJhNGItMjgyNDEzZWUyMTY0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmI1ZWM1NWY4LWRiNDktYTI0NC04YzEwLTdlYzhhMzlhMjc0MSIv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"},155:function(t,e,n){t.exports=n.p+"static/images/down_btn.e21a235140.png"},156:function(t,e,n){t.exports=n.p+"static/images/phone.6e4dd41305.png"},158:function(t,e,n){n(145);var a=n(19)(n(94),n(163),null,null);t.exports=a.exports},159:function(t,e,n){n(143);var a=n(19)(n(95),n(161),"data-v-33c21f56",null);t.exports=a.exports},160:function(t,e,n){n(144);var a=n(19)(n(96),n(162),null,null);t.exports=a.exports},161:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header-background",attrs:{id:"home"}},[a("img",{staticClass:"phone",attrs:{src:n(156)}}),t._v(" "),a("div",{staticClass:"download-btn",on:{click:function(e){t.toDown()}}},[a("img",{attrs:{src:n(155)}})])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"loan-background",attrs:{id:"loan"}},[a("div",{staticClass:"carousel"},[a("transition-group",{staticClass:"clearfix slide",attrs:{tag:"ul",name:"image"}},t._l(t.img,function(e,n){return a("li",{directives:[{name:"show",rawName:"v-show",value:n===t.mark,expression:"index===mark"}],key:n},[a("a",[a("img",{attrs:{src:e}})])])})),t._v(" "),a("div",{staticClass:"bullet"},t._l(t.list,function(e,n){return a("span",{class:{active:n===t.mark},on:{click:function(e){t.change(n)}}},[t._v(t._s(e))])}))],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("ul",{class:["nav",{"nav-fixed":!t.isTop,"nav-invisible":!t.isVisible}]},[a("li",[a("a",{on:{click:function(e){t.scroll("home")}}},[t._v("Home")])]),t._v(" "),a("li",[a("a",{on:{click:function(e){t.scroll("ad")}}},[t._v("Our Advantage")])]),t._v(" "),a("li",[a("a",{on:{click:function(e){t.scroll("loan")}}},[t._v("Loan Guide")])]),t._v(" "),a("li",[a("a",{on:{click:function(e){t.scroll("about")}}},[t._v("About Us")])])]),t._v(" "),a("div",{staticClass:"header-title"},[t.show?a("h1",{attrs:{transition:"fade"}},[t._v(t._s(t.headlineFinal))]):t._e()])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"advantage-background",attrs:{id:"ad"}},[a("img",{staticClass:"advantage",attrs:{src:n(153)}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-background",attrs:{id:"about"}},[a("img",{staticClass:"about-bg",attrs:{src:n(152)}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom"},[a("img",{staticClass:"bottom-bg",attrs:{src:n(154)}})])}]}},162:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    模版\n    "),n("a",{attrs:{href:""},on:{click:t.goTest}},[t._v("跳转")])])},staticRenderFns:[]}},163:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"scale"}},[n("router-view")],1)],1)},staticRenderFns:[]}}});