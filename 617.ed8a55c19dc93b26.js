"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[617],{1617:(K,p,r)=>{r.r(p),r.d(p,{SalonsModule:()=>G});var u=r(6895),g=r(9455),Z=r(5226),_=r.n(Z),t=r(4650),T=r(5830),y=r(7241),c=r(4006),m=r(8423),d=r(4333),v=r(502),f=r(388),C=r(324),h=r(4980);const S=["myModal2"];function A(n,a){if(1&n&&(t.TgZ(0,"div",55)(1,"label"),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.util.translate("No Data Found.."))}}function M(n,a){1&n&&(t.TgZ(0,"td"),t._UZ(1,"ngx-skeleton-loader",56),t.qZA())}const b=function(){return[1,2,3,4,1,2,3,4,5,5,6,1]};function x(n,a){1&n&&(t.TgZ(0,"tr"),t.YNc(1,M,2,0,"td",13),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,b)))}function w(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1,","),t.qZA())}function J(n,a){if(1&n&&(t.TgZ(0,"span")(1,"p",65),t._uU(2),t.YNc(3,w,2,0,"span",14),t.qZA()()),2&n){const e=a.$implicit,i=a.index,o=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.name," "),t.xp6(1),t.Q6J("ngIf",i!=o.web_cates_data.length-1)}}function U(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"th",57),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"img",58),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",59),t.YNc(11,J,4,2,"span",13),t.qZA()(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"c-form-check",50)(16,"input",60),t.NdJ("change",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changeShop(s))}),t.qZA()()(),t.TgZ(17,"td")(18,"c-form-check",50)(19,"input",60),t.NdJ("change",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changeStylist(s))}),t.qZA()()(),t.TgZ(20,"td")(21,"c-form-check",50)(22,"input",60),t.NdJ("change",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changeServiceAtHome(s))}),t.qZA()()(),t.TgZ(23,"td")(24,"c-form-check",50)(25,"input",60),t.NdJ("change",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changeHome(s))}),t.qZA()()(),t.TgZ(26,"td")(27,"c-form-check",50)(28,"input",60),t.NdJ("change",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changePopular(s))}),t.qZA()()(),t.TgZ(29,"td")(30,"div",61)(31,"c-badge",62),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.statusUpdate(s))}),t._uU(32),t.qZA(),t.TgZ(33,"c-badge",63),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.updateInfo(s.id,s.uid))}),t._uU(34),t.qZA(),t.TgZ(35,"c-badge",64),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.deleteItem(s))}),t._uU(36),t.qZA()()()()}if(2&n){const e=a.$implicit,i=t.oxw();t.xp6(2),t.hij(" ",e.data_id," "),t.xp6(2),t.Q6J("src",i.api.imageUrl+e.cover,t.LSH),t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e&&e.city_data&&e.city_data.name&&null!=e.city_data.name?e.city_data.name:""," "),t.xp6(3),t.Q6J("ngForOf",e.web_cates_data),t.xp6(2),t.AsE(" ",e.rating," / ",e.total_rating," "),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.have_shop),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.have_stylist),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.service_at_home),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.in_home),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.popular),t.xp6(3),t.Tol(1==e.status?"me-1 badge bg-success":"me-1 badge bg-dark"),t.Q6J("color",1==e.status?"success":"dark"),t.xp6(1),t.hij(" ",i.util.translate(1==e.status?"Active":"Deactived")," "),t.xp6(2),t.hij(" ",i.util.translate("Edit")," "),t.xp6(2),t.hij(" ",i.util.translate("Delete")," ")}}function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"pagination-controls",66),t.NdJ("pageChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.page=o)}),t.qZA()()}}function E(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",32)(1,"div",33)(2,"div",34)(3,"input",67),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.password=o)}),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("placeholder",e.util.translate("Password"))("ngModel",e.password)}}function q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",32)(1,"div",33)(2,"div",34)(3,"input",35),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.country_code=o)}),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("placeholder",e.util.translate("Country Code"))("ngModel",e.country_code)}}function H(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",32)(2,"div",33)(3,"select",42),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.gender=o)}),t.TgZ(4,"option",68),t._uU(5),t.qZA(),t.TgZ(6,"option",69),t._uU(7),t.qZA()()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.gender),t.xp6(2),t.hij(" ",e.util.translate("Male")," "),t.xp6(2),t.hij(" ",e.util.translate("Female")," ")}}function k(n,a){if(1&n&&(t.TgZ(0,"option",70),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function Q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",71),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.createSalon())}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.util.translate("Save changes")," ")}}function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",71),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateSalon())}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.util.translate("Save changes")," ")}}const j=function(n){return{id:"pagin1",itemsPerPage:10,currentPage:n}},F=[{path:"",component:(()=>{class n{constructor(e,i){this.api=e,this.util=i,this.firstName="",this.lastName="",this.email="",this.password="",this.country_code="",this.mobile="",this.gender="1",this.cover="",this.categories=[],this.usertype=[],this.selectedItems=[],this.selectedUsertypes=[],this.cities=[],this.lat="",this.name="",this.address="",this.have_shop=!1,this.service_at_home=!1,this.have_stylist=!1,this.lng="",this.about="",this.website="",this.cityID="",this.zipcode="",this.link=0,this.search="",this.dropdownSettings={singleSelection:!1,idField:"id",textField:"name",selectAllText:"Select All",unSelectAllText:"UnSelect All",allowSearchFilter:!0},this.dropdownSettings1={singleSelection:!1,idField:"id",textField:"type",selectAllText:"Select All",unSelectAllText:"UnSelect All",allowSearchFilter:!0},this.salons=[],this.dummySalons=[],this.salonId="",this.salonUID="",this.action="create",this.page=1,this.getAllSalon(),this.getAllCates(),this.getAllUserTypes(),this.getAllCities()}ngOnInit(){}getAllSalon(){this.salons=[],this.dummySalons=Array(5),this.api.get_private("v1/salon/getAll").then(e=>{this.dummySalons=[],e&&e.status&&200==e.status&&e.success&&(console.log(">>>>>",e),e.data.length>0&&(this.salons=e.data,console.log("====",this.salons)))},e=>{this.dummySalons=[],console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{this.dummySalons=[],console.log("Err",e),this.util.apiErrorHandler(e)})}selectSalon(e){this.link=e.uid,this.search=e.name,this.salons=[]}searchSalon(e){console.log(e),this.salons=e&&""!==e?this.dummySalons.filter(i=>i.name.toLowerCase().indexOf(e.toLowerCase())>-1):[]}preview_banner(e){console.log("fle",e),0!=e.length&&null!=e[0].type.match(/image\/*/)&&(e?(console.log("ok"),this.util.show(),this.api.uploadFile(e).subscribe(o=>{console.log("==>>>>>>",o.data),this.util.hide(),o&&o.data&&(this.cover=o.data)},o=>{console.log(o),this.util.hide()})):console.log("no"))}getAllCates(){this.api.get_private("v1/category/getAll").then(e=>{e&&e.status&&200==e.status&&e.success&&(console.log(">>>>>",e),e.data.length>0&&(this.categories=e.data,console.log("====",this.categories)))},e=>{console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{console.log("Err",e),this.util.apiErrorHandler(e)})}getAllUserTypes(){this.api.get_private("v1/salon/getAllUserTypes").then(e=>{e&&e.status&&200==e.status&&e.success&&(console.log(">>>>>",e),e.data.length>0&&(this.usertype=e.data,console.log("====",this.usertype)))},e=>{console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{console.log("Err",e),this.util.apiErrorHandler(e)})}getAllCities(){this.api.get_private("v1/cities/getAll").then(e=>{e&&e.status&&200==e.status&&e.success&&(console.log(">>>>>",e),e.data.length>0&&(this.cities=e.data))},e=>{console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{console.log("Err",e),this.util.apiErrorHandler(e)})}exportCSV(){}importCSV(){}createNew(){this.action="create",this.myModal2.show(),this.clearData()}createSalon(){if(console.log("create salon"),console.log(this.firstName),console.log(this.lastName),console.log(this.email),console.log(this.password),console.log(this.country_code),console.log(this.mobile),console.log(this.selectedItems),console.log(this.selectedUsertypes),console.log(this.cityID),console.log(this.zipcode),console.log(this.lat),console.log(this.lng),console.log(this.cover),console.log(this.have_shop),console.log(this.have_stylist),console.log(this.service_at_home),""==this.firstName||""==this.lastName||""==this.email||""==this.password||""==this.country_code||""==this.mobile||this.selectedItems.length<=0||this.selectedUsertypes.length<=0||""==this.cityID||""==this.zipcode||""==this.lat||""==this.lng||""==this.about||""==this.address||null==this.mobile||""==this.cover||""==this.name)return this.util.error(this.util.translate("All Fields are required")),!1;if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.email))return this.util.error(this.util.translate("Please enter valid Email ID")),!1;console.log(typeof this.country_code),this.country_code.toString().includes("+")||(this.country_code="+"+this.country_code);const o={first_name:this.firstName,last_name:this.lastName,gender:this.gender,cover:this.cover,mobile:this.mobile,email:this.email,country_code:this.country_code,password:this.password};this.util.show(),this.api.post_private("v1/auth/createSalonAccount",o).then(s=>{if(this.util.hide(),console.log(s),500==s.status&&this.util.error(s.message),s&&s.status&&200==s.status&&s.user&&s.user.id)console.log(s),this.saveSalonProfile(s.user.id);else if(s&&s.error&&s.error.msg)this.util.error(s.error.msg);else if(s&&s.error&&"Validation Error."==s.error.message)for(let l in s.error[0])console.log(s.error[0][l][0]),this.util.error(s.error[0][l][0]);else this.util.error(this.util.translate("Something went wrong"))},s=>{if(console.log(s),this.util.hide(),s&&s.error&&500==s.error.status&&s.error.message)this.util.error(s.error.message);else if(s&&s.error&&s.error.error&&422==s.error.status)for(let l in s.error.error)console.log(s.error.error[l][0]),this.util.error(s.error.error[l][0]);else this.util.error(this.util.translate("Something went wrong"))}).catch(s=>{if(console.log(s),this.util.hide(),s&&s.error&&500==s.error.status&&s.error.message)this.util.error(s.error.message);else if(s&&s.error&&s.error.error&&422==s.error.status)for(let l in s.error.error)console.log(s.error.error[l][0]),this.util.error(s.error.error[l][0]);else this.util.error(this.util.translate("Something went wrong"))})}saveSalonProfile(e){console.log("uid",e);const i=this.selectedItems.map(l=>l.id),o=this.selectedUsertypes.map(l=>l.id);console.log(i),console.log(o);const s={uid:e,name:this.name,status:1,lat:this.lat,lng:this.lng,cover:this.cover,categories:i.join(),UserType:o.join(),address:this.address,about:this.about,images:"NA",cid:this.cityID,zipcode:this.zipcode,rating:0,total_rating:0,website:"NA",timing:"NA",verified:1,available:1,have_shop:1==this.have_shop?1:0,service_at_home:1==this.service_at_home?1:0,have_stylist:1==this.have_stylist?1:0,popular:0,in_home:1,extra_field:"NA"};this.util.show(),this.api.post_private("v1/salon/create",s).then(l=>{console.log("+++++++++++++++",l),this.util.hide(),l&&l.status&&200==l.status&&l.success&&(this.myModal2.hide(),this.getAllSalon(),this.clearData(),this.util.success(this.util.translate("Salon added !")))},l=>{this.util.hide(),console.log("Error",l),this.util.apiErrorHandler(l)}).catch(l=>{this.util.hide(),console.log("Err",l),this.util.apiErrorHandler(l)})}clearData(){this.firstName="",this.lastName="",this.email="",this.password="",this.country_code="",this.mobile="",this.selectedItems=[],this.selectedUsertypes=[],this.name="",this.cityID="",this.address="",this.zipcode="",this.lat="",this.lng="",this.about="",this.cover="",this.have_shop=!1,this.have_stylist=!1,this.service_at_home=!1}changeShop(e){console.log(e);const i={id:e.id,have_shop:0==e.have_shop?1:0};console.log("======",i),this.util.show(),this.api.post_private("v1/salon/update",i).then(o=>{this.util.hide(),console.log("+++++++++++++++",o),o&&o.status&&200==o.status&&o.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},o=>{this.util.hide(),console.log("Error",o),this.util.apiErrorHandler(o)}).catch(o=>{this.util.hide(),console.log("Err",o),this.util.apiErrorHandler(o)})}changeHome(e){console.log(e);const i={id:e.id,in_home:0==e.in_home?1:0};console.log("======",i),this.util.show(),this.api.post_private("v1/salon/update",i).then(o=>{this.util.hide(),console.log("+++++++++++++++",o),o&&o.status&&200==o.status&&o.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},o=>{this.util.hide(),console.log("Error",o),this.util.apiErrorHandler(o)}).catch(o=>{this.util.hide(),console.log("Err",o),this.util.apiErrorHandler(o)})}changePopular(e){console.log(e);const i={id:e.id,popular:0==e.popular?1:0};console.log("======",i),this.util.show(),this.api.post_private("v1/salon/update",i).then(o=>{this.util.hide(),console.log("+++++++++++++++",o),o&&o.status&&200==o.status&&o.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},o=>{this.util.hide(),console.log("Error",o),this.util.apiErrorHandler(o)}).catch(o=>{this.util.hide(),console.log("Err",o),this.util.apiErrorHandler(o)})}changeStylist(e){console.log(e);const i={id:e.id,have_stylist:0==e.have_stylist?1:0};console.log("======",i),this.util.show(),this.api.post_private("v1/salon/update",i).then(o=>{this.util.hide(),console.log("+++++++++++++++",o),o&&o.status&&200==o.status&&o.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},o=>{this.util.hide(),console.log("Error",o),this.util.apiErrorHandler(o)}).catch(o=>{this.util.hide(),console.log("Err",o),this.util.apiErrorHandler(o)})}changeServiceAtHome(e){console.log(e);const i={id:e.id,service_at_home:0==e.service_at_home?1:0};console.log("======",i),this.util.show(),this.api.post_private("v1/salon/update",i).then(o=>{this.util.hide(),console.log("+++++++++++++++",o),o&&o.status&&200==o.status&&o.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},o=>{this.util.hide(),console.log("Error",o),this.util.apiErrorHandler(o)}).catch(o=>{this.util.hide(),console.log("Err",o),this.util.apiErrorHandler(o)})}deleteItem(e){console.log(e),_().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To delete this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(i=>{if(i&&i.value){console.log("update it"),console.log(e),console.log(e);const o={id:e.id,uid:e.uid};console.log("======",o),this.util.show(),this.api.post_private("v1/salon/destroy",o).then(s=>{this.util.hide(),console.log("+++++++++++++++",s),s&&s.status&&200==s.status&&s.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},s=>{this.util.hide(),console.log("Error",s),this.util.apiErrorHandler(s)}).catch(s=>{this.util.hide(),console.log("Err",s),this.util.apiErrorHandler(s)})}})}updateInfo(e,i){console.log(e,i),this.salonId=e,this.salonUID=i,this.util.show(),this.api.post_private("v1/salon/getById",{id:i}).then(o=>{console.log(o),this.util.hide(),o&&o.status&&200==o.status&&(this.action="update",this.firstName=o.data.userinfo.first_name,this.lastName=o.data.userinfo.last_name,this.selectedUsertypes=o.data.user_type_data,this.selectedItems=o.data.web_cates_data,this.cityID=o.data.cid,this.zipcode=o.data.zipcode,this.lat=o.data.lat,this.lng=o.data.lng,this.about=o.data.about,this.cover=o.data.cover,this.name=o.data.name,this.email=o.data.userinfo.email,this.mobile=o.data.userinfo.mobile,this.address=o.data.address,this.have_shop=o.data.have_shop,this.have_stylist=o.data.have_stylist,this.service_at_home=o.data.service_at_home,this.myModal2.show())}).catch(o=>{console.log(o),this.util.hide(),this.util.apiErrorHandler(o)})}statusUpdate(e){console.log(e),_().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To update this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(i=>{if(i&&i.value){console.log("update it");const o={id:e.id,status:0==e.status?1:0};console.log("======",o),this.util.show(),this.api.post_private("v1/salon/update",o).then(s=>{this.util.hide(),console.log("+++++++++++++++",s),s&&s.status&&200==s.status&&s.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},s=>{this.util.hide(),console.log("Error",s),this.util.apiErrorHandler(s)}).catch(s=>{this.util.hide(),console.log("Err",s),this.util.apiErrorHandler(s)})}})}updateSalon(){if(""==this.cover||""==this.name||""==this.address||""==this.about||""==this.cityID||this.selectedUsertypes.length<=0||""==this.zipcode||""==this.lat||""==this.lng)return this.util.error(this.util.translate("All Fields are required")),!1;const e=this.selectedItems.map(s=>s.id),i=this.selectedUsertypes.map(s=>s.id);console.log(e);const o={id:this.salonId,name:this.name,first_name:this.firstName,last_name:this.lastName,email:this.email,mobile:this.mobile,lat:this.lat,lng:this.lng,cover:this.cover,categories:e.join(),UserType:i.join(),address:this.address,about:this.about,cid:this.cityID,zipcode:this.zipcode,have_shop:1==this.have_shop?1:0,service_at_home:1==this.service_at_home?1:0,have_stylist:1==this.have_stylist?1:0};this.util.show(),this.api.post_private("v1/salon/update",o).then(s=>{console.log("+++++++++++++++",s),this.util.hide(),s&&s.status&&200==s.status&&s.success&&(this.myModal2.hide(),this.getAllSalon(),this.clearData(),this.util.success(this.util.translate("Salon updated !")))},s=>{this.util.hide(),console.log("Error",s),this.util.apiErrorHandler(s)}).catch(s=>{this.util.hide(),console.log("Err",s),this.util.apiErrorHandler(s)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T.s),t.Y36(y.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-salons"]],viewQuery:function(e,i){if(1&e&&t.Gf(S,5),2&e){let o;t.iGM(o=t.CRH())&&(i.myModal2=o.first)}},decls:166,vars:82,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-header-actions"],["type","submit",1,"btn","btn-sm","btn-primary",2,"float","right","margin","0px 5px",3,"click"],[1,"card-body"],["class","error_div",4,"ngIf"],[1,"table","align-items-center","table-flush"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["myModal2","bs-modal"],["role","document",1,"modal-dialog","modal-primary","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"logoContainer"],["onError","this.src='assets/img/dummy.jpeg'",3,"src"],[1,"fileContainer","sprite"],["type","file","value","Choose File",3,"change"],[1,"center-data-helper","mb-5"],[1,"card","card-profile","shadow"],[1,"card-header","text-center","border-0"],[1,"d-flex","justify-content-start"],[1,"col-lg-6"],[1,"form-group"],[1,"input-group","input-group-alternative"],["type","text","id","input-first-name",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],["type","text","id","input-last-name",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],["type","email","id","input-first-name",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],["class","col-lg-6",4,"ngIf"],["class","row",4,"ngIf"],["maxHeight","100",3,"placeholder","data","ngModel","settings","ngModelChange"],["rows","3",1,"form-control","form-control-alternative",3,"ngModel","placeholder","ngModelChange"],["id","select2","name","select2",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"center-data-helper"],[1,"text-heler"],["href","https://www.mapcoordinates.net/en","target","_blank","rel","noopener noreferrer",2,"color","blue !important"],["for","input-email",1,"form-control-label"],["type","text","id","input-email",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],[1,"col-lg-4"],[3,"switch"],["cFormCheckInput","","type","checkbox",3,"ngModel","checked","ngModelChange"],[1,"modal-footer"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],[1,"error_div"],["count","1","appearance","line"],["scope","row"],[1,"img-responsive",2,"height","40px","width","40px","object-fit","cover",3,"src"],[2,"width","100px","display","flex","flex-direction","column","overflow","scroll"],["cFormCheckInput","","type","checkbox",3,"checked","change"],[1,"d-flex","align-items-center"],[3,"color","click"],["color","info",1,"me-1","badge","bg-info",3,"click"],["color","danger",1,"me-1","badge","bg-danger",3,"click"],[2,"font-size","10px","margin","0px"],["id","pagin1",3,"pageChange"],["type","password","id","input-last-name",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],["value","1"],["value","0"],[3,"value"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,i){if(1&e){const o=t.EpF();t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.TgZ(7,"div",6)(8,"button",7),t.NdJ("click",function(){return i.createNew()}),t._uU(9),t.qZA(),t._uU(10," \xa0 "),t.qZA()(),t.TgZ(11,"div",8),t.YNc(12,A,3,1,"div",9),t.TgZ(13,"table",10)(14,"thead",11)(15,"tr")(16,"th",12),t._uU(17),t.qZA(),t.TgZ(18,"th",12),t._uU(19),t.qZA(),t.TgZ(20,"th",12),t._uU(21),t.qZA(),t.TgZ(22,"th",12),t._uU(23),t.qZA(),t.TgZ(24,"th",12),t._uU(25),t.qZA(),t.TgZ(26,"th",12),t._uU(27),t.qZA(),t.TgZ(28,"th",12),t._uU(29),t.qZA(),t.TgZ(30,"th",12),t._uU(31),t.qZA(),t.TgZ(32,"th",12),t._uU(33),t.qZA(),t.TgZ(34,"th",12),t._uU(35),t.qZA(),t.TgZ(36,"th",12),t._uU(37),t.qZA(),t.TgZ(38,"th",12),t._uU(39),t.qZA()()(),t.TgZ(40,"tbody"),t.YNc(41,x,2,2,"tr",13),t.YNc(42,U,37,23,"tr",13),t.ALo(43,"paginate"),t.qZA()(),t.YNc(44,N,2,0,"div",14),t.qZA()()()()(),t.TgZ(45,"div",15,16)(47,"div",17)(48,"div",18)(49,"div",19)(50,"h5",20),t._uU(51),t.qZA(),t.TgZ(52,"button",21),t.NdJ("click",function(){t.CHM(o);const l=t.MAs(46);return t.KtG(l.hide())}),t.TgZ(53,"span",22),t._uU(54,"\xd7"),t.qZA()()(),t.TgZ(55,"div",23)(56,"div",24),t._UZ(57,"img",25),t.qZA(),t.TgZ(58,"div",26)(59,"span"),t._uU(60),t.qZA(),t.TgZ(61,"input",27),t.NdJ("change",function(l){return i.preview_banner(l.target.files)}),t.qZA()(),t._UZ(62,"div",28),t.TgZ(63,"div",29)(64,"div",30)(65,"div",31)(66,"h4"),t._uU(67),t.qZA()()(),t.TgZ(68,"div",8)(69,"div",2)(70,"div",32)(71,"div",33)(72,"div",34)(73,"input",35),t.NdJ("ngModelChange",function(l){return i.firstName=l}),t.qZA()()()(),t.TgZ(74,"div",32)(75,"div",33)(76,"div",34)(77,"input",36),t.NdJ("ngModelChange",function(l){return i.lastName=l}),t.qZA()()()()(),t.TgZ(78,"div",2)(79,"div",32)(80,"div",33)(81,"div",34)(82,"input",37),t.NdJ("ngModelChange",function(l){return i.email=l}),t.qZA()()()(),t.YNc(83,E,4,2,"div",38),t.qZA(),t.TgZ(84,"div",2),t.YNc(85,q,4,2,"div",38),t.TgZ(86,"div",32)(87,"div",33)(88,"div",34)(89,"input",36),t.NdJ("ngModelChange",function(l){return i.mobile=l}),t.qZA()()()()(),t.YNc(90,H,8,3,"div",39),t.qZA(),t.TgZ(91,"div",30)(92,"div",31)(93,"h4"),t._uU(94),t.qZA()()(),t.TgZ(95,"div",8)(96,"div",2)(97,"div",3)(98,"div",33)(99,"ng-multiselect-dropdown",40),t.NdJ("ngModelChange",function(l){return i.selectedItems=l}),t.qZA()()(),t.TgZ(100,"div",3)(101,"div",33)(102,"ng-multiselect-dropdown",40),t.NdJ("ngModelChange",function(l){return i.selectedUsertypes=l}),t.qZA()()(),t.TgZ(103,"div",3)(104,"div",33)(105,"div",34)(106,"input",36),t.NdJ("ngModelChange",function(l){return i.name=l}),t.qZA()()()(),t.TgZ(107,"div",3)(108,"div",33)(109,"div",34)(110,"textarea",41),t.NdJ("ngModelChange",function(l){return i.about=l}),t.qZA()()()(),t.TgZ(111,"div",3)(112,"div",33)(113,"div",34)(114,"textarea",41),t.NdJ("ngModelChange",function(l){return i.address=l}),t.qZA()()()(),t.TgZ(115,"div",32)(116,"div",33)(117,"select",42),t.NdJ("ngModelChange",function(l){return i.cityID=l}),t.YNc(118,k,2,2,"option",43),t.qZA()()(),t.TgZ(119,"div",32)(120,"div",33)(121,"div",34)(122,"input",36),t.NdJ("ngModelChange",function(l){return i.zipcode=l}),t.qZA()()()(),t.TgZ(123,"div",44)(124,"p",45),t._uU(125),t.TgZ(126,"a",46),t._uU(127,"https://www.mapcoordinates.net/en"),t.qZA()(),t.TgZ(128,"p",45),t._uU(129),t.qZA()(),t.TgZ(130,"div",32)(131,"div",33)(132,"label",47),t._uU(133),t.qZA(),t.TgZ(134,"input",48),t.NdJ("ngModelChange",function(l){return i.lat=l}),t.qZA()()(),t.TgZ(135,"div",32)(136,"div",33)(137,"label",47),t._uU(138),t.qZA(),t.TgZ(139,"input",48),t.NdJ("ngModelChange",function(l){return i.lng=l}),t.qZA()()(),t.TgZ(140,"div",49)(141,"div",33)(142,"label",47),t._uU(143),t.qZA(),t._UZ(144,"br"),t.TgZ(145,"c-form-check",50)(146,"input",51),t.NdJ("ngModelChange",function(l){return i.have_stylist=l}),t.qZA()()()(),t.TgZ(147,"div",49)(148,"div",33)(149,"label",47),t._uU(150),t.qZA(),t._UZ(151,"br"),t.TgZ(152,"c-form-check",50)(153,"input",51),t.NdJ("ngModelChange",function(l){return i.have_shop=l}),t.qZA()()()(),t.TgZ(154,"div",49)(155,"div",33)(156,"label",47),t._uU(157),t.qZA(),t._UZ(158,"br"),t.TgZ(159,"c-form-check",50)(160,"input",51),t.NdJ("ngModelChange",function(l){return i.service_at_home=l}),t.qZA()()()()()()()(),t.TgZ(161,"div",52),t.YNc(162,Q,2,1,"button",53),t.YNc(163,I,2,1,"button",53),t.TgZ(164,"button",54),t.NdJ("click",function(){t.CHM(o);const l=t.MAs(46);return t.KtG(l.close())}),t._uU(165),t.qZA()()()()()}2&e&&(t.xp6(6),t.hij(" ",i.util.translate("All Salons")," "),t.xp6(3),t.hij(" ",i.util.translate("Add New")," "),t.xp6(3),t.Q6J("ngIf",(null==i.salons?null:i.salons.length)<=0&&(null==i.dummySalons?null:i.dummySalons.length)<=0),t.xp6(5),t.hij("",i.util.translate("Id")," "),t.xp6(2),t.hij("",i.util.translate("Cover")," "),t.xp6(2),t.hij("",i.util.translate("Name")," "),t.xp6(2),t.hij("",i.util.translate("City")," "),t.xp6(2),t.hij("",i.util.translate("Categories")," "),t.xp6(2),t.hij("",i.util.translate("Rating")," "),t.xp6(2),t.hij("",i.util.translate("Have Shop")," "),t.xp6(2),t.hij("",i.util.translate("Have Stylist")," "),t.xp6(2),t.hij("",i.util.translate("Service At Home")," "),t.xp6(2),t.hij("",i.util.translate("In Home")," "),t.xp6(2),t.hij("",i.util.translate("Is Popular")," "),t.xp6(2),t.hij("",i.util.translate("Action")," "),t.xp6(2),t.Q6J("ngForOf",i.dummySalons),t.xp6(1),t.Q6J("ngForOf",t.xi3(43,77,i.salons,t.VKq(80,j,i.page))),t.xp6(2),t.Q6J("ngIf",(null==i.salons?null:i.salons.length)>0),t.xp6(7),t.hij("",i.util.translate("Manage Salon")," "),t.xp6(6),t.Q6J("src",i.api.imageUrl+i.cover,t.LSH),t.xp6(3),t.hij(" ",i.util.translate("Add Cover")," "),t.xp6(7),t.hij("",i.util.translate("Owner Details")," "),t.xp6(6),t.Q6J("placeholder",i.util.translate("First Name"))("ngModel",i.firstName),t.xp6(4),t.Q6J("placeholder",i.util.translate("Last Name"))("ngModel",i.lastName),t.xp6(5),t.Q6J("placeholder",i.util.translate("Email"))("ngModel",i.email),t.xp6(1),t.Q6J("ngIf","create"==i.action),t.xp6(2),t.Q6J("ngIf","create"==i.action),t.xp6(4),t.Q6J("placeholder",i.util.translate("Mobile"))("ngModel",i.mobile),t.xp6(1),t.Q6J("ngIf","create"==i.action),t.xp6(4),t.hij("",i.util.translate("Salon Details")," "),t.xp6(5),t.Q6J("placeholder",i.util.translate("Top Category"))("data",i.categories)("ngModel",i.selectedItems)("settings",i.dropdownSettings),t.xp6(3),t.Q6J("placeholder",i.util.translate("Salon User Type"))("data",i.usertype)("ngModel",i.selectedUsertypes)("settings",i.dropdownSettings1),t.xp6(4),t.Q6J("placeholder",i.util.translate("Salon Name"))("ngModel",i.name),t.xp6(4),t.Q6J("ngModel",i.about)("placeholder",i.util.translate("Brief of salon")),t.xp6(4),t.Q6J("ngModel",i.address)("placeholder",i.util.translate("Salon Address")),t.xp6(3),t.Q6J("ngModel",i.cityID),t.xp6(1),t.Q6J("ngForOf",i.cities),t.xp6(4),t.Q6J("placeholder",i.util.translate("Zipcode"))("ngModel",i.zipcode),t.xp6(3),t.AsE("",i.util.translate("Select Latitude")," & ",i.util.translate("Longitude From here"),": "),t.xp6(4),t.AsE(" ",i.util.translate("Please enter valid Latitude")," & ",i.util.translate("Longitude otherwise app may not work properly.")," "),t.xp6(4),t.hij("",i.util.translate("Latitude")," "),t.xp6(1),t.Q6J("placeholder",i.util.translate("Latitude"))("ngModel",i.lat),t.xp6(4),t.hij("",i.util.translate("Longitude")," "),t.xp6(1),t.Q6J("placeholder",i.util.translate("Longitude"))("ngModel",i.lng),t.xp6(4),t.hij(" ",i.util.translate("Have Multiple Stylist?")," "),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("ngModel",i.have_stylist)("checked",1==i.have_stylist),t.xp6(4),t.hij("",i.util.translate("Have Shop?")," "),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("ngModel",i.have_shop)("checked",1==i.have_shop),t.xp6(4),t.hij(" ",i.util.translate("Do you provide service at home?")," "),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("ngModel",i.service_at_home)("checked",1==i.service_at_home),t.xp6(2),t.Q6J("ngIf","create"==i.action),t.xp6(1),t.Q6J("ngIf","update"==i.action),t.xp6(2),t.hij(" ",i.util.translate("Close")," "))},dependencies:[u.sg,u.O5,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,m.Ro,d.LS,v.xr,f.oB,C.O,h.FzQ,h.yfq,d._s],styles:['@charset "UTF-8";']}),n})()}];let D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(F),g.Bz]}),n})();var z=r(9241);let G=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,D,c.u5,m.ef,d.JX,v.hx.forRoot({animation:"progress-dark"}),z.P4,f.zk,C.Z.forRoot(),h.ejP,h.hJ1,h.ga2,h.kWm,h.m81,h.Xo8,h.dTQ,h.zE6]}),n})()}}]);