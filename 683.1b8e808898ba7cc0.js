"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[683],{5683:(Q,c,l)=>{l.r(c),l.d(c,{OffersModule:()=>k});var p=l(6895),f=l(9455),v=l(5226),C=l.n(v),g=l(5439),t=l(4650),x=l(7241),y=l(5830),u=l(4006),m=l(8423),h=l(4333),_=l(502),Z=l(388);const T=["myModal2"];function M(n,r){if(1&n&&(t.TgZ(0,"div",36)(1,"label"),t._uU(2),t.qZA()()),2&n){const i=t.oxw();t.xp6(2),t.Oqu(i.util.translate("No Data Found.."))}}function O(n,r){1&n&&(t.TgZ(0,"td"),t._UZ(1,"ngx-skeleton-loader",37),t.qZA())}const A=function(){return[1,2,3,4,5,6,7,8,9]};function b(n,r){1&n&&(t.TgZ(0,"tr"),t.YNc(1,O,2,0,"td",12),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,A)))}function U(n,r){1&n&&(t.TgZ(0,"span"),t._uU(1,"\u20b9"),t.qZA())}function q(n,r){1&n&&(t.TgZ(0,"span"),t._uU(1,"%"),t.qZA())}function J(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"label")(5,"span",38),t._uU(6),t.qZA(),t._UZ(7,"br"),t.qZA()(),t.TgZ(8,"td")(9,"label"),t.YNc(10,U,2,0,"span",13),t._uU(11),t.YNc(12,q,2,0,"span",13),t.qZA()(),t.TgZ(13,"td")(14,"label"),t._uU(15),t.qZA()(),t.TgZ(16,"td")(17,"label",39),t._uU(18),t.qZA()(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td")(22,"c-badge",40),t.NdJ("click",function(){const s=t.CHM(i).$implicit,a=t.oxw();return t.KtG(a.changeStatus(s))}),t._uU(23),t.qZA(),t.TgZ(24,"c-badge",41),t.NdJ("click",function(){const s=t.CHM(i).$implicit,a=t.oxw();return t.KtG(a.openOffers(s))}),t._uU(25),t.qZA()()()}if(2&n){const i=r.$implicit,e=t.oxw();t.xp6(2),t.hij(" ",i.id," "),t.xp6(4),t.hij(" ",i.name,""),t.xp6(4),t.Q6J("ngIf",1==i.type),t.xp6(1),t.hij(" ",i.discount," "),t.xp6(1),t.Q6J("ngIf",0==i.type),t.xp6(3),t.hij(" ",i.expire," "),t.xp6(3),t.hij(" ",i.short_descriptions," "),t.xp6(2),t.hij(" ",e.util.translate(i&&i.validations&&0==i.validations?"Store":"Admin")," "),t.xp6(2),t.Tol(1==i.status?"me-1 badge bg-success":"me-1 badge bg-dark"),t.Q6J("color",1==i.status?"success":"dark"),t.xp6(1),t.hij(" ",e.util.translate(1==i.status?"Active":"Deactived")," "),t.xp6(2),t.hij(" ",e.util.translate("View")," ")}}function E(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"div")(1,"pagination-controls",42),t.NdJ("pageChange",function(o){t.CHM(i);const s=t.oxw();return t.KtG(s.page=o)}),t.qZA()()}}function N(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.saveChanges())}),t._uU(1),t.qZA()}if(2&n){const i=t.oxw();t.xp6(1),t.hij(" ",i.util.translate("Save Changes"),"")}}function j(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.updateChanges())}),t._uU(1),t.qZA()}if(2&n){const i=t.oxw();t.xp6(1),t.hij(" ",i.util.translate("Edit Changes"),"")}}const F=function(n){return{id:"pagin1",itemsPerPage:10,currentPage:n}},d=function(){return{standalone:!0}},w=[{path:"",component:(()=>{class n{constructor(i,e){this.util=i,this.api=e,this.dummy=[],this.list=[],this.dummyList=[],this.page=1,this.value="",this.name="",this.off="",this.type="",this.date_time="",this.descriptions="",this.upto="",this.status=1,this.max_usage="",this.min_cart_value="",this.user_limit_validation="",this.action="",this.expire="",this.offerId="",this.freelancers=[],this.dropdownMultiSettings={singleSelection:!1,idField:"id",textField:"name",selectAllText:"Select All",unSelectAllText:"UnSelect All",allowSearchFilter:!0,itemsShowLimit:3},this.getList(),this.getStores()}getStores(){this.api.get_private("v1/salon/getListForOffers").then(i=>{console.log(i),i&&i.status&&200==i.status&&i.data&&i.data.length&&(this.freelancers=i.data)},i=>{console.log(i),this.util.apiErrorHandler(i)}).catch(i=>{console.log(i),this.util.apiErrorHandler(i)})}getList(){this.dummy=Array(5),this.list=[],this.dummyList=[],this.api.get_private("v1/offers/getAll").then(i=>{console.log(i),this.dummy=[],i&&i.status&&200==i.status&&i.data&&i.data.length&&(this.list=i.data,this.dummyList=i.data,console.log(Object.keys(this.list[0])))},i=>{console.log(i),this.dummy=[],this.util.apiErrorHandler(i)}).catch(i=>{console.log(i),this.dummy=[],this.util.apiErrorHandler(i)})}getDate(i){return g(i).format("lll")}ngOnInit(){}changeStatus(i){console.log(i),C().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To update this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(e=>{if(e&&e.value){console.log("update it");const o={id:i.id,status:0==i.status?1:0};console.log("======",o),this.util.show(),this.api.post_private("v1/offers/updateStatus",o).then(s=>{this.util.hide(),console.log("+++++++++++++++",s),s&&s.status&&200==s.status&&s.success&&(this.util.success(this.util.translate("Status Updated !")),this.getList())},s=>{this.util.hide(),console.log("Error",s),this.util.apiErrorHandler(s)}).catch(s=>{this.util.hide(),console.log("Err",s),this.util.apiErrorHandler(s)})}})}addNew(){this.action="create",this.clearData(),this.myModal2.show()}clearData(){this.name="",this.off="",this.type="",this.descriptions="",this.expire="",this.action="create"}saveChanges(){if(console.log(this.value),""==this.name||null==this.name||""==this.off||null==this.off||""==this.type||null==this.type||null==this.descriptions||""==this.descriptions||""==this.expire||null==this.expire)return this.util.error(this.util.translate("All Fields are required")),!1;const i={name:this.name,code:this.name,discount:this.off,validations:1,type:this.type,expire:this.expire,manage:0,short_descriptions:this.descriptions,status:1,for:1};this.util.show(),this.api.post_private("v1/offers/create",i).then(e=>{console.log("+++++++++++++++",e),this.util.hide(),e&&e.status&&200==e.status&&e.success&&(this.clearData(),this.myModal2.hide(),this.util.success(this.util.translate("Added !")),this.getList())},e=>{this.util.hide(),console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{this.util.hide(),console.log("Err",e),this.util.apiErrorHandler(e)})}updateChanges(){if(console.log("update"),console.log(this.name),console.log(this.off),console.log(this.upto),console.log(this.descriptions),console.log(this.expire),""==this.name||null==this.name||""==this.off||null==this.off||""==this.type||null==this.type||null==this.descriptions||""==this.descriptions||""==this.expire||null==this.expire)return this.util.error(this.util.translate("All Fields are required")),!1;const i={name:this.name,code:this.name,discount:this.off,validations:1,type:this.type,expire:this.expire,manage:0,short_descriptions:this.descriptions,status:1,id:this.offerId};this.util.show(),this.api.post_private("v1/offers/update",i).then(e=>{console.log("+++++++++++++++",e),this.util.hide(),e&&e.status&&200==e.status&&e.success&&(this.clearData(),this.myModal2.hide(),this.util.success(this.util.translate("Updated !")),this.getList())},e=>{this.util.hide(),console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{this.util.hide(),console.log("Err",e),this.util.apiErrorHandler(e)})}openOffers(i){this.offerId=i.id,this.util.show(),this.api.post_private("v1/offers/getById",i).then(e=>{if(this.util.hide(),console.log("+++++++++++++++",e),e&&e.status&&200==e.status&&e.success){this.action="edit";const o=e.data;this.name=o.name,this.off=o.discount,this.type=o.type,this.descriptions=o.short_descriptions,this.expire=g(o.expire).format("dd/mm/yyyy"),this.myModal2.show()}},e=>{this.util.hide(),console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{this.util.hide(),console.log("Err",e),this.util.apiErrorHandler(e)})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(x.f),t.Y36(y.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-offers"]],viewQuery:function(i,e){if(1&i&&t.Gf(T,5),2&i){let o;t.iGM(o=t.CRH())&&(e.myModal2=o.first)}},decls:81,vars:48,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-header-actions"],["type","submit",1,"btn","btn-sm","btn-primary",2,"float","right","margin","0px 5px",3,"click"],[1,"card-body"],["class","error_div",4,"ngIf"],[1,"table","table-responsive-sm","table-hover","mb-0"],[1,"thead-light"],[4,"ngFor","ngForOf"],[4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["myModal2","bs-modal"],["role","document",1,"modal-dialog","modal-primary","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"col-sm-6"],[1,"form-group"],["type","text",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],["type","number",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],[1,"form-control",3,"ngModelOptions","ngModel","ngModelChange"],["value","0"],["value","1"],[1,"col-sm-12"],["type","number","rows","4",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],["type","date",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],[1,"error_div"],["animation","progress"],[2,"font-size","14px"],[2,"width","200px"],[3,"color","click"],["color","info",1,"me-1","badge","bg-info",3,"click"],["id","pagin1",3,"pageChange"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(i,e){if(1&i){const o=t.EpF();t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.TgZ(7,"div",6)(8,"button",7),t.NdJ("click",function(){return e.addNew()}),t._uU(9),t.qZA(),t._uU(10," \xa0 "),t.qZA()(),t.TgZ(11,"div",8),t.YNc(12,M,3,1,"div",9),t.TgZ(13,"table",10)(14,"thead",11)(15,"tr")(16,"th"),t._uU(17),t.qZA(),t.TgZ(18,"th"),t._uU(19),t.qZA(),t.TgZ(20,"th"),t._uU(21),t.qZA(),t.TgZ(22,"th"),t._uU(23),t.qZA(),t.TgZ(24,"th"),t._uU(25),t.qZA(),t.TgZ(26,"th"),t._uU(27),t.qZA(),t.TgZ(28,"th"),t._uU(29),t.qZA()()(),t.TgZ(30,"tbody"),t.YNc(31,b,2,2,"tr",12),t.YNc(32,J,26,13,"tr",12),t.ALo(33,"paginate"),t.qZA()(),t.YNc(34,E,2,0,"div",13),t.qZA()()()()(),t.TgZ(35,"div",14,15)(37,"div",16)(38,"div",17)(39,"div",18)(40,"h5",19),t._uU(41),t.qZA(),t.TgZ(42,"button",20),t.NdJ("click",function(){t.CHM(o);const a=t.MAs(36);return t.KtG(a.hide())}),t.TgZ(43,"span",21),t._uU(44,"\xd7"),t.qZA()()(),t.TgZ(45,"div",22)(46,"div",2)(47,"div",23)(48,"div",24)(49,"label"),t._uU(50),t.qZA(),t.TgZ(51,"input",25),t.NdJ("ngModelChange",function(a){return e.name=a}),t.qZA()()(),t.TgZ(52,"div",23)(53,"div",24)(54,"label"),t._uU(55),t.qZA(),t.TgZ(56,"input",26),t.NdJ("ngModelChange",function(a){return e.off=a}),t.qZA()()(),t.TgZ(57,"div",23)(58,"div",24)(59,"label"),t._uU(60),t.qZA(),t.TgZ(61,"select",27),t.NdJ("ngModelChange",function(a){return e.type=a}),t.TgZ(62,"option",28),t._uU(63),t.qZA(),t.TgZ(64,"option",29),t._uU(65),t.qZA()()()(),t.TgZ(66,"div",30)(67,"div",24)(68,"label"),t._uU(69),t.qZA(),t.TgZ(70,"textarea",31),t.NdJ("ngModelChange",function(a){return e.descriptions=a}),t.qZA()()(),t.TgZ(71,"div",23)(72,"div",24)(73,"label"),t._uU(74),t.qZA(),t.TgZ(75,"input",32),t.NdJ("ngModelChange",function(a){return e.expire=a}),t.qZA()()()()(),t.TgZ(76,"div",33)(77,"button",34),t.NdJ("click",function(){t.CHM(o);const a=t.MAs(36);return t.KtG(a.hide())}),t._uU(78),t.qZA(),t.YNc(79,N,2,1,"button",35),t.YNc(80,j,2,1,"button",35),t.qZA()()()()}2&i&&(t.xp6(6),t.hij(" ",e.util.translate("All Offers")," "),t.xp6(3),t.hij(" ",e.util.translate("Add New")," "),t.xp6(3),t.Q6J("ngIf",(null==e.list?null:e.list.length)<=0&&(null==e.dummy?null:e.dummy.length)<=0),t.xp6(5),t.hij(" ",e.util.translate("Id"),""),t.xp6(2),t.hij(" ",e.util.translate("Coupon code"),""),t.xp6(2),t.hij(" ",e.util.translate("Discount")," "),t.xp6(2),t.hij(" ",e.util.translate("Expire")," "),t.xp6(2),t.hij(" ",e.util.translate("Short Description")," "),t.xp6(2),t.hij(" ",e.util.translate("Manage By")," "),t.xp6(2),t.hij(" ",e.util.translate("Actions")," "),t.xp6(2),t.Q6J("ngForOf",e.dummy),t.xp6(1),t.Q6J("ngForOf",t.xi3(33,38,e.list,t.VKq(41,F,e.page))),t.xp6(2),t.Q6J("ngIf",(null==e.list?null:e.list.length)>0),t.xp6(7),t.hij("",e.util.translate("Manage Offer")," "),t.xp6(9),t.Oqu(e.util.translate("Coupon code")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(43,d))("ngModel",e.name)("placeholder",e.util.translate("Coupon code")),t.xp6(4),t.Oqu(e.util.translate("Discount")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(44,d))("ngModel",e.off)("placeholder",e.util.translate("Discount")),t.xp6(4),t.Oqu(e.util.translate("Type")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(45,d))("ngModel",e.type),t.xp6(2),t.hij("",e.util.translate("%")," "),t.xp6(2),t.hij(" ",e.util.translate("Flat"),""),t.xp6(4),t.Oqu(e.util.translate("Short Description")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(46,d))("ngModel",e.descriptions)("placeholder",e.util.translate("Short Description")),t.xp6(4),t.Oqu(e.util.translate("Expire Date")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(47,d))("ngModel",e.expire)("placeholder",e.util.translate("Expire Date")),t.xp6(3),t.Oqu(e.util.translate("Close")),t.xp6(1),t.Q6J("ngIf","create"==e.action),t.xp6(1),t.Q6J("ngIf","edit"==e.action))},dependencies:[p.sg,p.O5,u.YN,u.Kr,u.Fj,u.wV,u.EJ,u.JJ,u.On,m.Ro,h.LS,_.xr,Z.oB,h._s],styles:['@charset "UTF-8";']}),n})()}];let D=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[f.Bz.forChild(w),f.Bz]}),n})();var S=l(9241),H=l(324);let k=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,D,u.u5,m.ef,h.JX,_.hx.forRoot({animation:"progress-dark"}),S.P4,Z.zk,H.Z.forRoot()]}),n})()}}]);