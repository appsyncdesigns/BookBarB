"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[683],{5683:(Q,p,l)=>{l.r(p),l.d(p,{OffersModule:()=>k});var h=l(6895),g=l(9455),Z=l(5226),x=l.n(Z),f=l(5439),t=l(4650),C=l(7241),y=l(5830),u=l(4006),m=l(8423),c=l(4333),_=l(502),v=l(388);const T=["myModal2"];function M(n,a){if(1&n&&(t.TgZ(0,"div",36)(1,"label"),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.util.translate("No Data Found.."))}}function O(n,a){1&n&&(t.TgZ(0,"td"),t._UZ(1,"ngx-skeleton-loader",37),t.qZA())}const A=function(){return[1,2,3,4,5,6,7,8,9]};function b(n,a){1&n&&(t.TgZ(0,"tr"),t.YNc(1,O,2,0,"td",12),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,A)))}function U(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1,"\u20b9"),t.qZA())}function q(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1,"%"),t.qZA())}function J(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"label")(5,"span",38),t._uU(6),t.qZA(),t._UZ(7,"br"),t.qZA()(),t.TgZ(8,"td")(9,"label"),t.YNc(10,U,2,0,"span",13),t._uU(11),t.YNc(12,q,2,0,"span",13),t.qZA()(),t.TgZ(13,"td")(14,"label"),t._uU(15),t.qZA()(),t.TgZ(16,"td")(17,"label",39),t._uU(18),t.qZA()(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td")(22,"c-badge",40),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.changeStatus(s))}),t._uU(23),t.qZA(),t.TgZ(24,"c-badge",41),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.openOffers(s))}),t._uU(25),t.qZA()()()}if(2&n){const e=a.$implicit,i=t.oxw();t.xp6(2),t.hij(" ",e.id," "),t.xp6(4),t.hij(" ",e.name,""),t.xp6(4),t.Q6J("ngIf",1==e.type),t.xp6(1),t.hij(" ",e.discount," "),t.xp6(1),t.Q6J("ngIf",0==e.type),t.xp6(3),t.hij(" ",e.expire," "),t.xp6(3),t.hij(" ",e.short_descriptions," "),t.xp6(2),t.hij(" ",i.util.translate(e&&e.validations&&0==e.validations?"Store":"Admin")," "),t.xp6(2),t.Tol(1==e.status?"me-1 badge bg-success":"me-1 badge bg-dark"),t.Q6J("color",1==e.status?"success":"dark"),t.xp6(1),t.hij(" ",i.util.translate(1==e.status?"Active":"Deactived")," "),t.xp6(2),t.hij(" ",i.util.translate("View")," ")}}function E(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"pagination-controls",42),t.NdJ("pageChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.page=o)}),t.qZA()()}}function j(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.saveChanges())}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.util.translate("Save Changes"),"")}}function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateChanges())}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.util.translate("Edit Changes"),"")}}const F=function(n){return{id:"pagin1",itemsPerPage:10,currentPage:n}},d=function(){return{standalone:!0}},w=[{path:"",component:(()=>{class n{constructor(e,i){this.util=e,this.api=i,this.dummy=[],this.list=[],this.dummyList=[],this.page=1,this.value="",this.name="",this.off="",this.type="",this.date_time="",this.descriptions="",this.upto="",this.status=1,this.max_usage="",this.min_cart_value="",this.user_limit_validation="",this.action="",this.expire="",this.offerId="",this.freelancers=[],this.dropdownMultiSettings={singleSelection:!1,idField:"id",textField:"name",selectAllText:"Select All",unSelectAllText:"UnSelect All",allowSearchFilter:!0,itemsShowLimit:3},this.getList(),this.getStores()}getStores(){this.api.get_private("v1/salon/getListForOffers").then(e=>{console.log(e),e&&e.status&&200==e.status&&e.data&&e.data.length&&(this.freelancers=e.data)},e=>{console.log(e),this.util.apiErrorHandler(e)}).catch(e=>{console.log(e),this.util.apiErrorHandler(e)})}getList(){this.dummy=Array(5),this.list=[],this.dummyList=[],this.api.get_private("v1/offers/getAll").then(e=>{console.log(e),this.dummy=[],e&&e.status&&200==e.status&&e.data&&e.data.length&&(this.list=e.data,this.dummyList=e.data,console.log(Object.keys(this.list[0])))},e=>{console.log(e),this.dummy=[],this.util.apiErrorHandler(e)}).catch(e=>{console.log(e),this.dummy=[],this.util.apiErrorHandler(e)})}getDate(e){return f(e).format("lll")}ngOnInit(){}changeStatus(e){console.log(e),x().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To update this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(i=>{if(i&&i.value){console.log("update it");const o={id:e.id,status:0==e.status?1:0};console.log("======",o),this.util.show(),this.api.post_private("v1/offers/updateStatus",o).then(s=>{this.util.hide(),console.log("+++++++++++++++",s),s&&s.status&&200==s.status&&s.success&&(this.util.success(this.util.translate("Status Updated !")),this.getList())},s=>{this.util.hide(),console.log("Error",s),this.util.apiErrorHandler(s)}).catch(s=>{this.util.hide(),console.log("Err",s),this.util.apiErrorHandler(s)})}})}addNew(){this.action="create",this.clearData(),this.myModal2.show()}clearData(){this.name="",this.off="",this.min_cart_value="",this.upto="",this.type="",this.descriptions="",this.expire="",this.action="create"}saveChanges(){if(console.log(this.value),""==this.name||null==this.name||""==this.off||null==this.off||""==this.type||null==this.type||null==this.descriptions||""==this.descriptions||""==this.expire||null==this.expire)return this.util.error(this.util.translate("All Fields are required")),!1;let e="";const i=this.value.map(s=>s.id);console.log("ids",i),i&&i.length&&(e=i.join());const o={name:this.name,freelancer_ids:e,code:this.name,discount:this.off,max_usage:this.max_usage,min_cart_value:this.min_cart_value,validations:1,user_limit_validation:this.user_limit_validation,type:this.type,expire:this.expire,manage:0,short_descriptions:this.descriptions,status:1,upto:this.upto,for:1};this.util.show(),this.api.post_private("v1/offers/create",o).then(s=>{console.log("+++++++++++++++",s),this.util.hide(),s&&s.status&&200==s.status&&s.success&&(this.clearData(),this.myModal2.hide(),this.util.success(this.util.translate("Added !")),this.getList())},s=>{this.util.hide(),console.log("Error",s),this.util.apiErrorHandler(s)}).catch(s=>{this.util.hide(),console.log("Err",s),this.util.apiErrorHandler(s)})}updateChanges(){if(console.log("update"),console.log(this.name),console.log(this.off),console.log(this.upto),console.log(this.descriptions),console.log(this.expire),console.log(this.max_usage),console.log(this.min_cart_value),console.log(this.user_limit_validation),console.log(this.value),""==this.name||null==this.name||""==this.off||null==this.off||""==this.type||null==this.type||null==this.descriptions||""==this.descriptions||""==this.expire||null==this.expire)return this.util.error(this.util.translate("All Fields are required")),!1;let e="";const i=this.value.map(s=>s.id);console.log("ids",i),i&&i.length&&(e=i.join());const o={name:this.name,freelancer_ids:e,code:this.name,discount:this.off,max_usage:this.max_usage,min_cart_value:this.min_cart_value,validations:1,user_limit_validation:this.user_limit_validation,type:this.type,expire:this.expire,manage:0,short_descriptions:this.descriptions,status:1,upto:this.upto,id:this.offerId};this.util.show(),this.api.post_private("v1/offers/update",o).then(s=>{console.log("+++++++++++++++",s),this.util.hide(),s&&s.status&&200==s.status&&s.success&&(this.clearData(),this.myModal2.hide(),this.util.success(this.util.translate("Updated !")),this.getList())},s=>{this.util.hide(),console.log("Error",s),this.util.apiErrorHandler(s)}).catch(s=>{this.util.hide(),console.log("Err",s),this.util.apiErrorHandler(s)})}openOffers(e){this.offerId=e.id,this.util.show(),this.api.post_private("v1/offers/getById",e).then(i=>{if(this.util.hide(),console.log("+++++++++++++++",i),i&&i.status&&200==i.status&&i.success){this.action="edit";const o=i.data;this.name=o.name,this.off=o.discount,this.upto=o.upto,this.type=o.type,this.descriptions=o.short_descriptions,this.max_usage=o.max_usage,this.min_cart_value=o.min_cart_value,this.user_limit_validation=o.user_limit_validation,this.expire=f(o.expire).format("dd/mm/yyyy"),this.value=o.freelancers,this.myModal2.show()}},i=>{this.util.hide(),console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{this.util.hide(),console.log("Err",i),this.util.apiErrorHandler(i)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.f),t.Y36(y.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-offers"]],viewQuery:function(e,i){if(1&e&&t.Gf(T,5),2&e){let o;t.iGM(o=t.CRH())&&(i.myModal2=o.first)}},decls:81,vars:48,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-header-actions"],["type","submit",1,"btn","btn-sm","btn-primary",2,"float","right","margin","0px 5px",3,"click"],[1,"card-body"],["class","error_div",4,"ngIf"],[1,"table","table-responsive-sm","table-hover","mb-0"],[1,"thead-light"],[4,"ngFor","ngForOf"],[4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["myModal2","bs-modal"],["role","document",1,"modal-dialog","modal-primary","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"col-sm-6"],[1,"form-group"],["type","text",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],["type","number",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],[1,"form-control",3,"ngModelOptions","ngModel","ngModelChange"],["value","0"],["value","1"],[1,"col-sm-12"],["type","number","rows","4",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],["type","date",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],[1,"error_div"],["animation","progress"],[2,"font-size","14px"],[2,"width","200px"],[3,"color","click"],["color","info",1,"me-1","badge","bg-info",3,"click"],["id","pagin1",3,"pageChange"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,i){if(1&e){const o=t.EpF();t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.TgZ(7,"div",6)(8,"button",7),t.NdJ("click",function(){return i.addNew()}),t._uU(9),t.qZA(),t._uU(10," \xa0 "),t.qZA()(),t.TgZ(11,"div",8),t.YNc(12,M,3,1,"div",9),t.TgZ(13,"table",10)(14,"thead",11)(15,"tr")(16,"th"),t._uU(17),t.qZA(),t.TgZ(18,"th"),t._uU(19),t.qZA(),t.TgZ(20,"th"),t._uU(21),t.qZA(),t.TgZ(22,"th"),t._uU(23),t.qZA(),t.TgZ(24,"th"),t._uU(25),t.qZA(),t.TgZ(26,"th"),t._uU(27),t.qZA(),t.TgZ(28,"th"),t._uU(29),t.qZA()()(),t.TgZ(30,"tbody"),t.YNc(31,b,2,2,"tr",12),t.YNc(32,J,26,13,"tr",12),t.ALo(33,"paginate"),t.qZA()(),t.YNc(34,E,2,0,"div",13),t.qZA()()()()(),t.TgZ(35,"div",14,15)(37,"div",16)(38,"div",17)(39,"div",18)(40,"h5",19),t._uU(41),t.qZA(),t.TgZ(42,"button",20),t.NdJ("click",function(){t.CHM(o);const r=t.MAs(36);return t.KtG(r.hide())}),t.TgZ(43,"span",21),t._uU(44,"\xd7"),t.qZA()()(),t.TgZ(45,"div",22)(46,"div",2)(47,"div",23)(48,"div",24)(49,"label"),t._uU(50),t.qZA(),t.TgZ(51,"input",25),t.NdJ("ngModelChange",function(r){return i.name=r}),t.qZA()()(),t.TgZ(52,"div",23)(53,"div",24)(54,"label"),t._uU(55),t.qZA(),t.TgZ(56,"input",26),t.NdJ("ngModelChange",function(r){return i.off=r}),t.qZA()()(),t.TgZ(57,"div",23)(58,"div",24)(59,"label"),t._uU(60),t.qZA(),t.TgZ(61,"select",27),t.NdJ("ngModelChange",function(r){return i.type=r}),t.TgZ(62,"option",28),t._uU(63),t.qZA(),t.TgZ(64,"option",29),t._uU(65),t.qZA()()()(),t.TgZ(66,"div",30)(67,"div",24)(68,"label"),t._uU(69),t.qZA(),t.TgZ(70,"textarea",31),t.NdJ("ngModelChange",function(r){return i.descriptions=r}),t.qZA()()(),t.TgZ(71,"div",23)(72,"div",24)(73,"label"),t._uU(74),t.qZA(),t.TgZ(75,"input",32),t.NdJ("ngModelChange",function(r){return i.expire=r}),t.qZA()()()()(),t.TgZ(76,"div",33)(77,"button",34),t.NdJ("click",function(){t.CHM(o);const r=t.MAs(36);return t.KtG(r.hide())}),t._uU(78),t.qZA(),t.YNc(79,j,2,1,"button",35),t.YNc(80,N,2,1,"button",35),t.qZA()()()()}2&e&&(t.xp6(6),t.hij(" ",i.util.translate("All Offers")," "),t.xp6(3),t.hij(" ",i.util.translate("Add New")," "),t.xp6(3),t.Q6J("ngIf",(null==i.list?null:i.list.length)<=0&&(null==i.dummy?null:i.dummy.length)<=0),t.xp6(5),t.hij(" ",i.util.translate("Id"),""),t.xp6(2),t.hij(" ",i.util.translate("Coupon code"),""),t.xp6(2),t.hij(" ",i.util.translate("Discount")," "),t.xp6(2),t.hij(" ",i.util.translate("Expire")," "),t.xp6(2),t.hij(" ",i.util.translate("Short Description")," "),t.xp6(2),t.hij(" ",i.util.translate("Manage By")," "),t.xp6(2),t.hij(" ",i.util.translate("Actions")," "),t.xp6(2),t.Q6J("ngForOf",i.dummy),t.xp6(1),t.Q6J("ngForOf",t.xi3(33,38,i.list,t.VKq(41,F,i.page))),t.xp6(2),t.Q6J("ngIf",(null==i.list?null:i.list.length)>0),t.xp6(7),t.hij("",i.util.translate("Manage Offer")," "),t.xp6(9),t.Oqu(i.util.translate("Coupon code")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(43,d))("ngModel",i.name)("placeholder",i.util.translate("Coupon code")),t.xp6(4),t.Oqu(i.util.translate("Discount")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(44,d))("ngModel",i.off)("placeholder",i.util.translate("Discount")),t.xp6(4),t.Oqu(i.util.translate("Type")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(45,d))("ngModel",i.type),t.xp6(2),t.hij("",i.util.translate("%")," "),t.xp6(2),t.hij(" ",i.util.translate("Flat"),""),t.xp6(4),t.Oqu(i.util.translate("Short Description")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(46,d))("ngModel",i.descriptions)("placeholder",i.util.translate("Short Description")),t.xp6(4),t.Oqu(i.util.translate("Expire Date")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(47,d))("ngModel",i.expire)("placeholder",i.util.translate("Expire Date")),t.xp6(3),t.Oqu(i.util.translate("Close")),t.xp6(1),t.Q6J("ngIf","create"==i.action),t.xp6(1),t.Q6J("ngIf","edit"==i.action))},dependencies:[h.sg,h.O5,u.YN,u.Kr,u.Fj,u.wV,u.EJ,u.JJ,u.On,m.Ro,c.LS,_.xr,v.oB,c._s],styles:['@charset "UTF-8";']}),n})()}];let D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(w),g.Bz]}),n})();var S=l(9241),H=l(324);let k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.ez,D,u.u5,m.ef,c.JX,_.hx.forRoot({animation:"progress-dark"}),S.P4,v.zk,H.Z.forRoot()]}),n})()}}]);