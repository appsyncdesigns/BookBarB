"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[683],{5683:(k,g,a)=>{a.r(g),a.d(g,{OffersModule:()=>H});var h=a(6895),c=a(9455),M=a(5226),T=a.n(M),f=a(5439),t=a(4650),C=a(7241),O=a(5830),d=a(4006),_=a(8423),p=a(4333),m=a(502),v=a(388),Z=a(324);const x=["myModal2"];function A(l,r){if(1&l&&(t.TgZ(0,"div",38)(1,"label"),t._uU(2),t.qZA()()),2&l){const i=t.oxw();t.xp6(2),t.Oqu(i.util.translate("No Data Found.."))}}function y(l,r){1&l&&(t.TgZ(0,"td"),t._UZ(1,"ngx-skeleton-loader",39),t.qZA())}const b=function(){return[1,2,3,4,5,6,7,8,9]};function U(l,r){1&l&&(t.TgZ(0,"tr"),t.YNc(1,y,2,0,"td",12),t.qZA()),2&l&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,b)))}function q(l,r){1&l&&(t.TgZ(0,"span"),t._uU(1,"%"),t.qZA())}function J(l,r){1&l&&(t.TgZ(0,"span"),t._uU(1,"$"),t.qZA())}function j(l,r){if(1&l){const i=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"label")(5,"span",40),t._uU(6),t.qZA(),t._UZ(7,"br"),t.qZA()(),t.TgZ(8,"td")(9,"label"),t._uU(10),t.YNc(11,q,2,0,"span",13),t.YNc(12,J,2,0,"span",13),t.qZA()(),t.TgZ(13,"td")(14,"label"),t._uU(15),t.qZA()(),t.TgZ(16,"td")(17,"label",41),t._uU(18),t.qZA()(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA(),t.TgZ(25,"td")(26,"c-badge",42),t.NdJ("click",function(){const n=t.CHM(i).$implicit,o=t.oxw();return t.KtG(o.changeStatus(n))}),t._uU(27),t.qZA(),t.TgZ(28,"c-badge",43),t.NdJ("click",function(){const n=t.CHM(i).$implicit,o=t.oxw();return t.KtG(o.openOffers(n))}),t._uU(29),t.qZA()()()}if(2&l){const i=r.$implicit,e=t.oxw();t.xp6(2),t.hij(" ",i.id," "),t.xp6(4),t.hij(" ",i.name,""),t.xp6(4),t.hij(" ",i.discount," "),t.xp6(1),t.Q6J("ngIf",0==i.type),t.xp6(1),t.Q6J("ngIf",1==i.type),t.xp6(3),t.hij(" ",e.getDate(i.date_time)," "),t.xp6(3),t.hij(" ",i.short_descriptions," "),t.xp6(2),t.hij(" ",i.min_cart_value," "),t.xp6(2),t.hij(" ",i.upto," "),t.xp6(2),t.hij(" ",e.util.translate(i&&i.validations&&0==i.validations?"Store":"Admin")," "),t.xp6(2),t.Tol(1==i.status?"me-1 badge bg-success":"me-1 badge bg-dark"),t.Q6J("color",1==i.status?"success":"dark"),t.xp6(1),t.hij(" ",e.util.translate(1==i.status?"Active":"Deactived")," "),t.xp6(2),t.hij(" ",e.util.translate("View")," ")}}function N(l,r){if(1&l){const i=t.EpF();t.TgZ(0,"div")(1,"pagination-controls",44),t.NdJ("pageChange",function(s){t.CHM(i);const n=t.oxw();return t.KtG(n.page=s)}),t.qZA()()}}function E(l,r){if(1&l){const i=t.EpF();t.TgZ(0,"button",45),t.NdJ("click",function(){t.CHM(i);const s=t.oxw();return t.KtG(s.saveChanges())}),t._uU(1),t.qZA()}if(2&l){const i=t.oxw();t.xp6(1),t.hij(" ",i.util.translate("Save Changes"),"")}}function D(l,r){if(1&l){const i=t.EpF();t.TgZ(0,"button",45),t.NdJ("click",function(){t.CHM(i);const s=t.oxw();return t.KtG(s.updateChanges())}),t._uU(1),t.qZA()}if(2&l){const i=t.oxw();t.xp6(1),t.hij(" ",i.util.translate("Edit Changes"),"")}}const F=function(l){return{id:"pagin1",itemsPerPage:10,currentPage:l}},u=function(){return{standalone:!0}},S=[{path:"",component:(()=>{class l{constructor(i,e){this.util=i,this.api=e,this.dummy=[],this.list=[],this.dummyList=[],this.page=1,this.value="",this.name="",this.off="",this.type="",this.date_time="",this.descriptions="",this.upto="",this.status=1,this.max_usage="",this.min_cart_value="",this.user_limit_validation="",this.action="",this.expire="",this.offerId="",this.freelancers=[],this.dropdownMultiSettings={singleSelection:!1,idField:"id",textField:"name",selectAllText:"Select All",unSelectAllText:"UnSelect All",allowSearchFilter:!0,itemsShowLimit:3},this.getList(),this.getStores()}getStores(){this.api.get_private("v1/salon/getListForOffers").then(i=>{console.log(i),i&&i.status&&200==i.status&&i.data&&i.data.length&&(this.freelancers=i.data)},i=>{console.log(i),this.util.apiErrorHandler(i)}).catch(i=>{console.log(i),this.util.apiErrorHandler(i)})}getList(){this.dummy=Array(5),this.list=[],this.dummyList=[],this.api.get_private("v1/offers/getAll").then(i=>{console.log(i),this.dummy=[],i&&i.status&&200==i.status&&i.data&&i.data.length&&(this.list=i.data,this.dummyList=i.data,console.log(Object.keys(this.list[0])))},i=>{console.log(i),this.dummy=[],this.util.apiErrorHandler(i)}).catch(i=>{console.log(i),this.dummy=[],this.util.apiErrorHandler(i)})}getDate(i){return f(i).format("lll")}ngOnInit(){}changeStatus(i){console.log(i),T().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To update this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(e=>{if(e&&e.value){console.log("update it");const s={id:i.id,status:0==i.status?1:0};console.log("======",s),this.util.show(),this.api.post_private("v1/offers/updateStatus",s).then(n=>{this.util.hide(),console.log("+++++++++++++++",n),n&&n.status&&200==n.status&&n.success&&(this.util.success(this.util.translate("Status Updated !")),this.getList())},n=>{this.util.hide(),console.log("Error",n),this.util.apiErrorHandler(n)}).catch(n=>{this.util.hide(),console.log("Err",n),this.util.apiErrorHandler(n)})}})}addNew(){this.action="create",this.clearData(),this.myModal2.show()}clearData(){this.name="",this.off="",this.min_cart_value="",this.upto="",this.type="",this.descriptions="",this.expire="",this.action="create"}saveChanges(){if(console.log(this.value),""==this.name||null==this.name||""==this.off||null==this.off||""==this.upto||null==this.upto||""==this.type||null==this.type||null==this.descriptions||""==this.descriptions||""==this.expire||null==this.expire||""==this.max_usage||null==this.max_usage||""==this.min_cart_value||null==this.min_cart_value||""==this.user_limit_validation||null==this.user_limit_validation)return this.util.error(this.util.translate("All Fields are required")),!1;if(""==this.value||null==this.value||this.value.length<=0)return this.util.error(this.util.translate("Please select Freelancers")),!1;let i="";const e=this.value.map(n=>n.id);console.log("ids",e),e&&e.length&&(i=e.join());const s={name:this.name,freelancer_ids:i,code:this.name,discount:this.off,max_usage:this.max_usage,min_cart_value:this.min_cart_value,validations:1,user_limit_validation:this.user_limit_validation,type:this.type,expire:this.expire,manage:0,short_descriptions:this.descriptions,status:1,upto:this.upto,for:1};this.util.show(),this.api.post_private("v1/offers/create",s).then(n=>{console.log("+++++++++++++++",n),this.util.hide(),n&&n.status&&200==n.status&&n.success&&(this.clearData(),this.myModal2.hide(),this.util.success(this.util.translate("Added !")),this.getList())},n=>{this.util.hide(),console.log("Error",n),this.util.apiErrorHandler(n)}).catch(n=>{this.util.hide(),console.log("Err",n),this.util.apiErrorHandler(n)})}updateChanges(){if(console.log("update"),console.log(this.name),console.log(this.off),console.log(this.upto),console.log(this.descriptions),console.log(this.expire),console.log(this.max_usage),console.log(this.min_cart_value),console.log(this.user_limit_validation),console.log(this.value),""==this.name||null==this.name||""==this.off||null==this.off||""==this.upto||null==this.upto||null==this.descriptions||""==this.descriptions||""==this.expire||null==this.expire||""==this.max_usage||null==this.max_usage||""==this.min_cart_value||null==this.min_cart_value||""==this.user_limit_validation||null==this.user_limit_validation)return this.util.error(this.util.translate("All Fields are required")),!1;if(""==this.value||null==this.value||this.value.length<=0)return this.util.error(this.util.translate("Please select Freelancers")),!1;let i="";const e=this.value.map(n=>n.id);console.log("ids",e),e&&e.length&&(i=e.join());const s={name:this.name,freelancer_ids:i,code:this.name,discount:this.off,max_usage:this.max_usage,min_cart_value:this.min_cart_value,validations:1,user_limit_validation:this.user_limit_validation,type:this.type,expire:this.expire,manage:0,short_descriptions:this.descriptions,status:1,upto:this.upto,id:this.offerId};this.util.show(),this.api.post_private("v1/offers/update",s).then(n=>{console.log("+++++++++++++++",n),this.util.hide(),n&&n.status&&200==n.status&&n.success&&(this.clearData(),this.myModal2.hide(),this.util.success(this.util.translate("Updated !")),this.getList())},n=>{this.util.hide(),console.log("Error",n),this.util.apiErrorHandler(n)}).catch(n=>{this.util.hide(),console.log("Err",n),this.util.apiErrorHandler(n)})}openOffers(i){this.offerId=i.id,this.util.show(),this.api.post_private("v1/offers/getById",i).then(e=>{if(this.util.hide(),console.log("+++++++++++++++",e),e&&e.status&&200==e.status&&e.success){this.action="edit";const s=e.data;this.name=s.name,this.off=s.discount,this.upto=s.upto,this.type=s.type,this.descriptions=s.short_descriptions,this.max_usage=s.max_usage,this.min_cart_value=s.min_cart_value,this.user_limit_validation=s.user_limit_validation,this.expire=f(s.expire).format("dd/mm/yyyy"),this.value=s.freelancers,this.myModal2.show()}},e=>{this.util.hide(),console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{this.util.hide(),console.log("Err",e),this.util.apiErrorHandler(e)})}}return l.\u0275fac=function(i){return new(i||l)(t.Y36(C.f),t.Y36(O.s))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-offers"]],viewQuery:function(i,e){if(1&i&&t.Gf(x,5),2&i){let s;t.iGM(s=t.CRH())&&(e.myModal2=s.first)}},decls:112,vars:77,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-header-actions"],["type","submit",1,"btn","btn-sm","btn-primary",2,"float","right","margin","0px 5px",3,"click"],[1,"card-body"],["class","error_div",4,"ngIf"],[1,"table","table-responsive-sm","table-hover","mb-0"],[1,"thead-light"],[4,"ngFor","ngForOf"],[4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["myModal2","bs-modal"],["role","document",1,"modal-dialog","modal-primary","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"col-sm-6"],[1,"form-group"],["type","text",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],["type","number",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],[1,"form-control",3,"ngModelOptions","ngModel","ngModelChange"],["value","0"],["value","1"],[1,"col-sm-12"],["type","number","rows","4",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],[2,"color","red"],[3,"placeholder","settings","data","ngModel","ngModelOptions","ngModelChange"],["type","date",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],[1,"error_div"],["animation","progress"],[2,"font-size","14px"],[2,"width","200px"],[3,"color","click"],["color","info",1,"me-1","badge","bg-info",3,"click"],["id","pagin1",3,"pageChange"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(i,e){if(1&i){const s=t.EpF();t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.TgZ(7,"div",6)(8,"button",7),t.NdJ("click",function(){return e.addNew()}),t._uU(9),t.qZA(),t._uU(10," \xa0 "),t.qZA()(),t.TgZ(11,"div",8),t.YNc(12,A,3,1,"div",9),t.TgZ(13,"table",10)(14,"thead",11)(15,"tr")(16,"th"),t._uU(17),t.qZA(),t.TgZ(18,"th"),t._uU(19),t.qZA(),t.TgZ(20,"th"),t._uU(21),t.qZA(),t.TgZ(22,"th"),t._uU(23),t.qZA(),t.TgZ(24,"th"),t._uU(25),t.qZA(),t.TgZ(26,"th"),t._uU(27),t.qZA(),t.TgZ(28,"th"),t._uU(29),t.qZA(),t.TgZ(30,"th"),t._uU(31),t.qZA(),t.TgZ(32,"th"),t._uU(33),t.qZA()()(),t.TgZ(34,"tbody"),t.YNc(35,U,2,2,"tr",12),t.YNc(36,j,30,15,"tr",12),t.ALo(37,"paginate"),t.qZA()(),t.YNc(38,N,2,0,"div",13),t.qZA()()()()(),t.TgZ(39,"div",14,15)(41,"div",16)(42,"div",17)(43,"div",18)(44,"h5",19),t._uU(45),t.qZA(),t.TgZ(46,"button",20),t.NdJ("click",function(){t.CHM(s);const o=t.MAs(40);return t.KtG(o.hide())}),t.TgZ(47,"span",21),t._uU(48,"\xd7"),t.qZA()()(),t.TgZ(49,"div",22)(50,"div",2)(51,"div",23)(52,"div",24)(53,"label"),t._uU(54),t.qZA(),t.TgZ(55,"input",25),t.NdJ("ngModelChange",function(o){return e.name=o}),t.qZA()()(),t.TgZ(56,"div",23)(57,"div",24)(58,"label"),t._uU(59),t.qZA(),t.TgZ(60,"input",26),t.NdJ("ngModelChange",function(o){return e.off=o}),t.qZA()()(),t.TgZ(61,"div",23)(62,"div",24)(63,"label"),t._uU(64),t.qZA(),t.TgZ(65,"input",26),t.NdJ("ngModelChange",function(o){return e.upto=o}),t.qZA()()(),t.TgZ(66,"div",23)(67,"div",24)(68,"label"),t._uU(69),t.qZA(),t.TgZ(70,"select",27),t.NdJ("ngModelChange",function(o){return e.type=o}),t.TgZ(71,"option",28),t._uU(72),t.qZA(),t.TgZ(73,"option",29),t._uU(74),t.qZA()()()(),t.TgZ(75,"div",30)(76,"div",24)(77,"label"),t._uU(78),t.qZA(),t.TgZ(79,"textarea",31),t.NdJ("ngModelChange",function(o){return e.descriptions=o}),t.qZA()()(),t.TgZ(80,"div",30)(81,"div",24)(82,"label"),t._uU(83),t.TgZ(84,"span",32),t._uU(85,"*"),t.qZA()(),t.TgZ(86,"ng-multiselect-dropdown",33),t.NdJ("ngModelChange",function(o){return e.value=o}),t.qZA()()(),t.TgZ(87,"div",23)(88,"div",24)(89,"label"),t._uU(90),t.qZA(),t.TgZ(91,"input",26),t.NdJ("ngModelChange",function(o){return e.max_usage=o}),t.qZA()()(),t.TgZ(92,"div",23)(93,"div",24)(94,"label"),t._uU(95),t.qZA(),t.TgZ(96,"input",26),t.NdJ("ngModelChange",function(o){return e.min_cart_value=o}),t.qZA()()(),t.TgZ(97,"div",23)(98,"div",24)(99,"label"),t._uU(100),t.qZA(),t.TgZ(101,"input",26),t.NdJ("ngModelChange",function(o){return e.user_limit_validation=o}),t.qZA()()(),t.TgZ(102,"div",23)(103,"div",24)(104,"label"),t._uU(105),t.qZA(),t.TgZ(106,"input",34),t.NdJ("ngModelChange",function(o){return e.expire=o}),t.qZA()()()()(),t.TgZ(107,"div",35)(108,"button",36),t.NdJ("click",function(){t.CHM(s);const o=t.MAs(40);return t.KtG(o.hide())}),t._uU(109),t.qZA(),t.YNc(110,E,2,1,"button",37),t.YNc(111,D,2,1,"button",37),t.qZA()()()()}2&i&&(t.xp6(6),t.hij(" ",e.util.translate("All Offers")," "),t.xp6(3),t.hij(" ",e.util.translate("Add New")," "),t.xp6(3),t.Q6J("ngIf",(null==e.list?null:e.list.length)<=0&&(null==e.dummy?null:e.dummy.length)<=0),t.xp6(5),t.hij(" ",e.util.translate("Id"),""),t.xp6(2),t.hij(" ",e.util.translate("Coupon code"),""),t.xp6(2),t.hij(" ",e.util.translate("Discount")," "),t.xp6(2),t.hij(" ",e.util.translate("Expire")," "),t.xp6(2),t.hij(" ",e.util.translate("Short Description")," "),t.xp6(2),t.hij(" ",e.util.translate("Min")," "),t.xp6(2),t.hij(" ",e.util.translate("Upto")," "),t.xp6(2),t.hij(" ",e.util.translate("Manage By")," "),t.xp6(2),t.hij(" ",e.util.translate("Actions")," "),t.xp6(2),t.Q6J("ngForOf",e.dummy),t.xp6(1),t.Q6J("ngForOf",t.xi3(37,62,e.list,t.VKq(65,F,e.page))),t.xp6(2),t.Q6J("ngIf",(null==e.list?null:e.list.length)>0),t.xp6(7),t.hij("",e.util.translate("Manage Offer")," "),t.xp6(9),t.Oqu(e.util.translate("Coupon code")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(67,u))("ngModel",e.name)("placeholder",e.util.translate("Coupon code")),t.xp6(4),t.Oqu(e.util.translate("Discount")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(68,u))("ngModel",e.off)("placeholder",e.util.translate("Discount")),t.xp6(4),t.Oqu(e.util.translate("Upto")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(69,u))("ngModel",e.upto)("placeholder",e.util.translate("Upto")),t.xp6(4),t.Oqu(e.util.translate("Type")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(70,u))("ngModel",e.type),t.xp6(2),t.hij("",e.util.translate("%")," "),t.xp6(2),t.hij(" ",e.util.translate("Flat"),""),t.xp6(4),t.Oqu(e.util.translate("Short Description")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(71,u))("ngModel",e.descriptions)("placeholder",e.util.translate("Short Description")),t.xp6(4),t.hij("",e.util.translate("Select Salon or Freelancers")," : "),t.xp6(3),t.Q6J("placeholder","Select Salon or Freelancers")("settings",e.dropdownMultiSettings)("data",e.freelancers)("ngModel",e.value)("ngModelOptions",t.DdM(72,u)),t.xp6(4),t.Oqu(e.util.translate("Max Usage")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(73,u))("ngModel",e.max_usage)("placeholder",e.util.translate("Max Usage")),t.xp6(4),t.Oqu(e.util.translate("Minimum Cart Value")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(74,u))("ngModel",e.min_cart_value)("placeholder",e.util.translate("Minimum Cart Value")),t.xp6(4),t.Oqu(e.util.translate("User Limit")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(75,u))("ngModel",e.user_limit_validation)("placeholder",e.util.translate("User Limit")),t.xp6(4),t.Oqu(e.util.translate("Expire Date")),t.xp6(1),t.Q6J("ngModelOptions",t.DdM(76,u))("ngModel",e.expire)("placeholder",e.util.translate("Expire Date")),t.xp6(3),t.Oqu(e.util.translate("Close")),t.xp6(1),t.Q6J("ngIf","create"==e.action),t.xp6(1),t.Q6J("ngIf","edit"==e.action))},dependencies:[h.sg,h.O5,d.YN,d.Kr,d.Fj,d.wV,d.EJ,d.JJ,d.On,_.Ro,p.LS,m.xr,v.oB,Z.O,p._s],styles:['@charset "UTF-8";']}),l})()}];let w=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[c.Bz.forChild(S),c.Bz]}),l})();var Q=a(9241);let H=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[h.ez,w,d.u5,_.ef,p.JX,m.hx.forRoot({animation:"progress-dark"}),Q.P4,v.zk,Z.Z.forRoot()]}),l})()}}]);