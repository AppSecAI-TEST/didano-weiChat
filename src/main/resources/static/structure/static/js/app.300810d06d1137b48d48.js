webpackJsonp([19],{134:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o}),e.d(n,"c",function(){return i});var a={isShow:!0,message:"加载中",state:"loading"},o={isShow:!1,state:"success"},i=function(t){return{isShow:!0,state:"error",message:t.data?t.data.message:"网络错误"}}},181:function(t,n,e){"use strict";var a=e(56),o=e(485),i=e(488),c=e.n(i);a.a.use(o.a),n.a=new o.a({routes:[{path:"/",redirect:"/role"},{path:"/role",name:"role",component:c.a},{path:"/bind",name:"bind",component:function(){return e.e(13).then(e.bind(null,492))}},{path:"/verify",name:"verify",component:function(){return e.e(10).then(e.bind(null,508))}},{path:"/bindChooseRole",name:"verify",component:function(){return e.e(16).then(e.bind(null,493))}},{path:"/userList",name:"userList",component:function(){return e.e(17).then(e.bind(null,491))}},{path:"/parent",name:"parent",component:function(){return e.e(12).then(e.bind(null,495))},children:[{path:"/parent/",redirect:"parentIndex"},{path:"/parent/parentIndex",name:"parentIndex",component:function(){return e.e(7).then(e.bind(null,494))}},{path:"/parent/report",name:"report",component:function(){return e.e(15).then(e.bind(null,496))}}]},{path:"/principal",name:"principal",component:function(){return e.e(11).then(e.bind(null,502))},children:[{path:"/principal/",redirect:"principalIndex"},{path:"/principal/principalIndex",name:"principalIndex",component:function(){return e.e(9).then(e.bind(null,501))}},{path:"/principal/attendance",component:function(){return e.e(1).then(e.bind(null,498))},children:[{path:"",name:"PrincipalAttendance",component:function(){return e.e(2).then(e.bind(null,497))}},{path:"studentList",name:"PrincipalStudentList",component:function(){return e.e(6).then(e.bind(null,499))}},{path:"teacherList",name:"PrincipalTeacherList",component:function(){return e.e(5).then(e.bind(null,500))}}]}]},{path:"/teacher",name:"teacher",component:function(){return e.e(14).then(e.bind(null,507))},children:[{path:"/teacher/",redirect:"teacherIndex"},{path:"/teacher/teacherIndex",name:"teacherIndex",component:function(){return e.e(8).then(e.bind(null,506))}},{path:"/teacher/attendance",component:function(){return e.e(3).then(e.bind(null,504))},children:[{path:"",name:"TeacherAttendance",component:function(){return e.e(0).then(e.bind(null,503))}},{path:"studentList",name:"TeacherStudentList",component:function(){return e.e(4).then(e.bind(null,505))}}]}]}]})},182:function(t,n,e){"use strict";var a=e(56),o=e(487),i=e(223),c=e(218),s=e(222),r=e(220),u=e(219),d=e(221);a.a.use(o.a),n.a=new o.a.Store({state:i.a,getters:c.a,mutations:s.a,modules:{teacher:r.a,principal:u.a,pickertime:d.a}})},187:function(t,n){},191:function(t,n,e){e(474);var a=e(65)(e(225),e(481),null,null);t.exports=a.exports},193:function(t,n,e){e(477);var a=e(65)(e(226),e(484),null,null);t.exports=a.exports},196:function(t,n,e){e(475);var a=e(65)(e(224),e(482),null,null);t.exports=a.exports},215:function(t,n,e){"use strict";var a=e(56);n.a={SchoolAttendanceFindtByschoolId:function(t,n,e){var o=WX_URL+"/base/attendanc/post/schoolAttendance_findtByschoolId/"+t.schoolId+"/"+t.date;a.a.http.post(o).then(function(t){return n(t)}).catch(function(t){return e(t)})},StaffAttendanceFindtBySchool:function(t,n,e){var o=WX_URL+"/base/attendanc/post/staffAttendance_findtBySchool/"+t.schoolId+"/"+t.date;a.a.http.post(o).then(function(t){return n(t)}).catch(function(t){return e(t)})},StudentAttendanceFindtBySchool:function(t,n,e){var o=WX_URL+"/base/attendanc/post/studentAttendance_findtBySchool/"+t.schoolId+"/"+t.date;a.a.http.post(o).then(function(t){return n(t)}).catch(function(t){return e(t)})}}},216:function(t,n,e){"use strict";var a=e(56);n.a={ClassAttendanceFindtByTeacher:function(t,n,e){var o=WX_URL+"/base/attendanc/post/classAttendance_findtByTeacher/"+t.staffId+"/"+t.date;a.a.http.post(o).then(function(t){return n(t)}).catch(function(t){return e(t)})},StudentAttendanceFindtByClass:function(t,n,e){var o=WX_URL+"/base/attendanc/post/studentAttendance_findtByClass/"+t.classId+"/"+t.date;a.a.http.post(o).then(function(t){return n(t)}).catch(function(t){return e(t)})}}},217:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(186),o=e.n(a),i=e(56),c=e(188),s=e.n(c),r=e(191),u=e.n(r),d=e(181),l=e(182),h=e(183),f=e(184),p=e(189),m=e.n(p),g=e(190),v=(e.n(g),e(187)),S=(e.n(v),e(185));e.n(S);i.a.use(m.a,{name:"v-touch"}),i.a.use(h.a),i.a.use(f.a),e.i(g.sync)(l.a,d.a),i.a.http.interceptors.response.use(function(t){return t.data.success?t:o.a.reject(t)},function(t){return o.a.reject(t)}),s.a.attach(document.body),i.a.config.productionTip=!1,new i.a({router:d.a,store:l.a,render:function(t){return t(u.a)}}).$mount("#app-box")},218:function(t,n,e){"use strict";n.a={getLingLoading:function(t){return t.lingLoading}}},219:function(t,n,e){"use strict";var a=e(215),o=e(134),i={schoolAttendance:{},staffAttendance:{},studentAttendance:{},classesShowContent:[],identity:{31:"园长",32:"老师",33:"医生",34:"后勤"}},c={getSchoolAttendance:function(t){return t.schoolAttendance},getStaffAttendance:function(t){return t.staffAttendance},getStudentAttendanceBySchool:function(t){return t.studentAttendance},getClassesShowContent:function(t){return t.classesShowContent},getIdentity:function(t){return t.identity}},s={actionSchoolAttendance:function(t,n){t.commit("changeLingLoading",o.a),a.a.SchoolAttendanceFindtByschoolId(n,function(n){t.commit("changeLingLoading",o.b),t.commit("mutationSchoolAttendance",n.data.data)},function(n){setTimeout(function(){t.commit("changeLingLoading",e.i(o.c)(n))},200)})},actionStaffAttendance:function(t,n){t.commit("changeLingLoading",o.a),a.a.StaffAttendanceFindtBySchool(n,function(n){t.commit("changeLingLoading",o.b),t.commit("mutationStaffAttendance",n.data.data)},function(n){setTimeout(function(){t.commit("changeLingLoading",e.i(o.c)(n))},200)})},actionStudentAttendanceBySchool:function(t,n){t.commit("changeLingLoading",o.a),a.a.StudentAttendanceFindtBySchool(n,function(n){t.commit("changeLingLoading",o.b),t.commit("mutationStudentAttendance",n.data.data)},function(n){setTimeout(function(){t.commit("changeLingLoading",e.i(o.c)(n))},200)})}},r={mutationSchoolAttendance:function(t,n){t.schoolAttendance=n},mutationStaffAttendance:function(t,n){t.staffAttendance=n},mutationClassesShowContent:function(t,n){t.classesShowContent=n},mutationStudentAttendance:function(t,n){t.studentAttendance=n}};n.a={state:i,getters:c,actions:s,mutations:r}},220:function(t,n,e){"use strict";var a=e(216),o=e(134),i={teacherAttendance:{allNum:0,arriveNum:0,classId:0,noArriveNum:0},studentAttendance:{},teacherAttendanceType:[{state:"迟到",color:"#ff0000"},{state:"早退",color:"#00ffff"},{state:"缺勤",color:"#23fe23"}],teacherAttendanceColor:{1:"#ff0000",2:"#00ffff",3:"#23fe23"}},c={getTeacherAttendance:function(t){return t.teacherAttendance},getStudentAttendance:function(t){return t.studentAttendance},getTeacherAttendanceType:function(t){return t.teacherAttendanceType},getTeacherAttendanceColor:function(t){return t.teacherAttendanceColor}},s={actionTeacherAttendance:function(t,n){t.commit("changeLingLoading",o.a),a.a.ClassAttendanceFindtByTeacher(n,function(n){t.commit("changeLingLoading",o.b),t.commit("mutationTeacherAttendance",n.data.data)},function(n){setTimeout(function(){t.commit("changeLingLoading",e.i(o.c)(n))},200)})},actionStudentAttendance:function(t,n){t.commit("changeLingLoading",o.a),a.a.StudentAttendanceFindtByClass(n,function(n){t.commit("changeLingLoading",o.b),t.commit("mutationStudentAttendance",n.data.data)},function(n){setTimeout(function(){t.commit("changeLingLoading",e.i(o.c)(n))},200)})}},r={mutationTeacherAttendance:function(t,n){t.teacherAttendance=n},mutationStudentAttendance:function(t,n){t.studentAttendance=n}};n.a={state:i,getters:c,actions:s,mutations:r}},221:function(t,n,e){"use strict";var a={years:[],months:[],days:[]},o={getYears:function(t){return t.years},getMonths:function(t){return t.months},getDays:function(t){return t.days}},i={},c={mutationYears:function(t,n){t.years=n},mutationMonths:function(t,n){t.months=n},mutationDays:function(t,n){t.days=n}};n.a={state:a,getters:o,actions:i,mutations:c}},222:function(t,n,e){"use strict";var a=e(234),o=e.n(a);n.a={changeLingLoading:function(t,n){t.lingLoading=o()({},t.lingLoading,n)}}},223:function(t,n,e){"use strict";n.a={lingLoading:{isShow:!0,message:"加载中",state:"loading"}}},224:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(229);n.default={name:"toast",mixins:[a.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var n=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){n.show=!1,n.$emit("input",!1),n.$emit("on-hide"),n.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},225:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app"}},226:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{titleContent:{String:String}}}},227:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(230),o=e.n(a),i=e(193),c=e.n(i);n.default={data:function(){return{roleList:[],titleContent:"选择角色"}},created:function(){var t=this;this.classMap=["/super","/org","/school","/parent","/principal","/teacher","/doctor","/service","/assistant"],this.$http.post(WX_URL+"/base/login/post/getRoleSelect/",{mobile:"13699009629",openid:openid}).then(function(n){n=n.data,n.success&&n.code<2e3?(t.roleList=n.data,1===t.roleList.length&&(localStorage.setItem("USERLIST",o()(t.roleList[0])),t.goToIndex(t.roleList[0].roleType))):n.code>2e3&&t.$router.push("/bindChooseRole")})},methods:{goToIndex:function(t){this.$router.push(this.classMap[t-1])},selectRole:function(t){localStorage.setItem("USERLIST",o()(t))}},components:{"v-header":c.a}}},474:function(t,n){},475:function(t,n){},476:function(t,n){},477:function(t,n){},481:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},482:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-toast"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),e("transition",{attrs:{name:t.currentTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[e("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?e("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):e("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},staticRenderFns:[]}},483:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.roleList.length>1,expression:"roleList.length>1"}],staticClass:"role"},[e("v-header",{attrs:{titleContent:t.titleContent}}),t._v(" "),e("div",{staticClass:"role-wrapper"},[e("ul",t._l(t.roleList,function(n,a){return e("router-link",{key:1,attrs:{to:t.classMap[n.roleType-27]}},[e("li",{staticClass:"role-item",on:{click:function(e){t.selectRole(n)}}},[t._v(t._s(n.roleName))])])})),t._v(" "),e("router-view")],1)],1)},staticRenderFns:[]}},484:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"header-title"},[t._v("\n  "+t._s(t.titleContent)+"\n")])},staticRenderFns:[]}},488:function(t,n,e){e(476);var a=e(65)(e(227),e(483),null,null);t.exports=a.exports}},[217]);
//# sourceMappingURL=app.300810d06d1137b48d48.js.map