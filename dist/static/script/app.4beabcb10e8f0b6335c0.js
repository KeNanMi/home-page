webpackJsonp([2,0],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=n(11),i=a(o),r=n(154),s=a(r),u=n(75),c=n(97),l=a(c),d=n(12),f=a(d);(0,u.sync)(f.default,l.default);var p=new i.default({template:"<App/>",components:{App:s.default},router:l.default,store:f.default});p.$mount("#app")},12:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),i=a(o),r=n(29),s=a(r),u=n(32),c=a(u);i.default.use(s.default),e.default=new s.default.Store({modules:{global:c.default}})},20:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t){return 200===t.status||304===t.status?t=t.data:{data:{code:-400,message:t.statusText||"服务起发生错误~"}}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(21),r=a(i),s=n(57),u=a(s),c=n(34),l=a(c),d=n(50),f=a(d),p=n(73),v=a(p),m=n(12),_=a(m),h=n(28);f.default.defaults.baseURL="//www.codoon.com/activity/v1/swisse-vip",f.default.defaults.withCredentials=!0,f.default.defaults.crossDomain=!0,f.default.interceptors.request.use(function(t){var e=t.method.toUpperCase(),n=!1;return"GET"===e?(n=t.params&&t.params.isIntercept,t.params&&delete t.params.isIntercept):n=t.data&&v.default.parse(t.data).isIntercept,n&&h.Indicator.open({spinnerType:"fading-circle"}),t},function(t){return l.default.reject(t)}),f.default.interceptors.response.use(function(t){return h.Indicator.close(),t},function(t){return"object"===("undefined"==typeof t?"undefined":(0,u.default)(t))&&(t=t.toString()),_.default.dispatch("globalToast",t),h.Indicator.close(),l.default.reject(t)});var g=function(t,e){return(0,f.default)({method:"post",url:t,data:v.default.stringify(e),timeout:3e3,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(o)},L=function(t,e){return(0,f.default)({method:"get",url:t,params:e,timeout:3e3,headers:{"X-Requested-With":"XMLHttpRequest"}}).then(o)},b=function(t){return L("/user/info",(0,r.default)({},{isIntercept:!1},t))},I=function(t){return g("/luck",(0,r.default)({},{isIntercept:!1},t))};e.default={post:g,get:L,getUserInfo:b,luck:I}},31:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{},ready:function(){}}},32:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,i=n(56),r=a(i),s=n(21),u=a(s),c=n(20),l=a(c),d=n(28),f=n(33),p={loading:!0,indicatorTime:null,toastMsg:"",userInfo:{}},v={loadHide:function(t,e){var n=t.commit;n(f.GLOBAL_LOADING,e)},globalToast:function(t,e){var n=t.commit;n(f.GLOBAL_TOAST,e)},getUserInfoFromSever:function(t,e){var n=t.commit;l.default.getUserInfo(e).then(function(t){n("CHANGE_USERINFO",t)})}},m=(o={},(0,r.default)(o,f.GLOBAL_LOADING,function(t,e){t.loading=e}),(0,r.default)(o,f.GLOBAL_TOAST,function(t,e){return!("string"!=typeof e||e.length<1)&&(t.toastMsg=e,void(0,d.Toast)({message:e,duration:2e3}))}),(0,r.default)(o,f.CHANGE_USERINFO,function(t,e){t.userInfo=(0,u.default)({},t.userInfo,e&&e.data)}),o),_={loadStatus:function(t){return t.loading},indicatorTime:function(t){return t.indicatorTime},userInfo:function(t){return t.userInfo}};e.default={state:p,actions:v,mutations:m,getters:_}},33:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GLOBAL_LOADING="GLOBAL_LOADING",e.GLOBAL_INDICATOR="GLOBAL_INDICATOR",e.GLOBAL_TOAST="GLOBAL_TOAST",e.CHANGE_USERINFO="CHANGE_USERINFO"},46:function(t,e){},47:function(t,e,n){n(46);var a=n(19)(n(31),n(48),"data-v-0597f7e3",null);t.exports=a.exports},48:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"mypage"},[n("a",{staticClass:"btn",attrs:{href:"http://a.app.qq.com/o/simple.jsp?pkgname=com.codoon.gps&g_f=992971"}})])])}]}},94:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(103),i=a(o),r=n(102),s=a(r);n(142);var u=n(20);a(u),n(29),function(){var t=(0,s.default)(i.default.mark(function t(e){var n;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={isIntercept:!0},t.next=3,e.dispatch("getUserInfoFromSever",n);case 3:case"end":return t.stop()}},t,void 0)}));return function(e){return t.apply(this,arguments)}}();e.default={}},95:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(98);e.default={data:function(){return{show:!0,nav:"nav",isTop:!0,isVisible:!0,headlineFinal:"",mark:0,timer:null,img:["http://activity-codoon.b0.upaiyun.com/123/upload/loan_one.png","http://activity-codoon.b0.upaiyun.com/123/upload/loan_two.png","http://activity-codoon.b0.upaiyun.com/123/upload/loan_three.png","http://activity-codoon.b0.upaiyun.com/123/upload/loan_four.png"],list:["1. Open Google Play and download Cash Lending","2. Choose loan amount and term","3. Spend 5 minutes to fill in application information","4. Loan disbursement within 5 seconds"]}},vuex:{getters:{headline:a.headline}},watch:{headline:function(t,e){var n=this;this.show=!1,setTimeout(function(){n.show=!0,n.headlineFinal=t},400)}},mounted:function(){this.play()},methods:{scroll:function(t){var e=document.getElementById(t);e.scrollIntoView(),e.scrollIntoView(!1),e.scrollIntoView({block:"end"}),e.scrollIntoView({block:"end",behavior:"smooth"})},change:function(t){this.mark=t},autoPlay:function(){if(this.mark++,4===this.mark)return void(this.mark=0)},play:function(){setInterval(this.autoPlay,3e3)}}}},96:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"hello vue"}},methods:{goTest:function(t){t.preventDefault();var e=this.$route.path.split("test/")[1];console.log(e),"456"==e?this.$router.push({name:"test",params:{id:123}}):this.$router.push({name:"test",params:{id:456}})},fetchData:function(){}},watch:{$route:function(t,e){console.log(t,e)}},components:{}}},97:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),i=a(o),r=n(49),s=a(r),u=n(155),c=a(u),l=n(156),d=a(l),f=n(47),p=a(f);i.default.use(s.default);var v=new s.default({routes:[{name:"index",path:"/",component:c.default},{name:"test",path:"/test/:id",component:d.default},{name:"share",path:"/share",component:p.default}]});e.default=v},98:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.contentList=function t(e){var t=e.contentList;return t.contentList},e.headline=function t(e){var t=e.headline;return t.headline},e.article=function t(e){var t=e.article;return t},e.tags=function t(e){var t=e.tags;return t.tagSet},e.tagContentList=function t(e){var t=e.tagContentList;return t.tagContentList},e.tagContentListId=function(t){var e=t.tagContentList;return e.tagId},e.commentsList=function t(e){var t=e.commentsList;return t.commentsList}},142:function(t,e){},143:function(t,e){},144:function(t,e){},145:function(t,e){},152:function(t,e,n){t.exports=n.p+"static/images/advantage.bf3673b448.png"},154:function(t,e,n){n(145);var a=n(19)(n(94),n(159),null,null);t.exports=a.exports},155:function(t,e,n){n(143);var a=n(19)(n(95),n(157),"data-v-33c21f56",null);t.exports=a.exports},156:function(t,e,n){n(144);var a=n(19)(n(96),n(158),null,null);t.exports=a.exports},157:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header-background",attrs:{id:"home"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"loan-background",attrs:{id:"loan"}},[n("div",{staticClass:"carousel"},[n("transition-group",{staticClass:"clearfix slide",attrs:{tag:"ul",name:"image"}},t._l(t.img,function(e,a){return n("li",{directives:[{name:"show",rawName:"v-show",value:a===t.mark,expression:"index===mark"}],key:a},[n("a",[n("img",{attrs:{src:e}})])])})),t._v(" "),n("div",{staticClass:"bullet"},t._l(t.list,function(e,a){return n("span",{class:{active:a===t.mark},on:{click:function(e){t.change(a)}}},[t._v(t._s(e))])}))],1)]),t._v(" "),n("div",{staticClass:"about-background",attrs:{id:"about"}}),t._v(" "),n("ul",{class:["nav",{"nav-fixed":!t.isTop,"nav-invisible":!t.isVisible}]},[n("li",[n("a",{on:{click:function(e){t.scroll("home")}}},[t._v("Home")])]),t._v(" "),n("li",[n("a",{on:{click:function(e){t.scroll("ad")}}},[t._v("Our Advantage")])]),t._v(" "),n("li",[n("a",{on:{click:function(e){t.scroll("loan")}}},[t._v("Loan Guide")])]),t._v(" "),n("li",[n("a",{on:{click:function(e){t.scroll("about")}}},[t._v("About Us")])])]),t._v(" "),n("div",{staticClass:"header-title"},[t.show?n("h1",{attrs:{transition:"fade"}},[t._v(t._s(t.headlineFinal))]):t._e()])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"advantage-background",attrs:{id:"ad"}},[a("img",{attrs:{src:n(152)}})])}]}},158:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    模版\n    "),n("a",{attrs:{href:""},on:{click:t.goTest}},[t._v("跳转")])])},staticRenderFns:[]}},159:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"scale"}},[n("router-view")],1)],1)},staticRenderFns:[]}}});