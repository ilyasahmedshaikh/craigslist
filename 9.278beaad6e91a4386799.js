(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{IbxU:function(n,t,o){"use strict";o.r(t),o.d(t,"AuthModule",function(){return C});var e=o("ofXK"),r=o("3Pt+"),i=o("tyNb"),c=o("fXoL");let a=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Cb({type:n,selectors:[["app-auth"]],decls:1,vars:0,template:function(n,t){1&n&&c.Jb(0,"router-outlet")},directives:[i.e],styles:[""]}),n})();var g=o("UbJi"),d=o("gfgO"),p=o("edgM"),s=o("Qilz");const l=function(n){return{"disable-opacity":n}};let b=(()=>{class n{constructor(n,t,o,e,i,c){this.router=n,this.fb=t,this.auth=o,this.checkLogin=e,this.config=i,this.apiCallService=c,this.programForm=r.e,this.loginStatus=!1,this.Users=[]}ngOnInit(){this.formInit(),this.ifLogin()}formInit(){this.programForm=this.fb.group({email:["",r.p.required],password:["",r.p.required],rememberMe:[!1,r.p.required]})}login(){const n=this.programForm.value.email;this.auth.signInWithEmailAndPassword(n,this.programForm.value.password).then(t=>{this.apiCallService.getWithQuery(this.config.collections.users,"email","==",n).subscribe(n=>{this.checkLogin.setLoginData(n[0])}),this.checkLogin.setLoginStatus(!0),this.router.navigateByUrl("/homepage"),setTimeout(()=>{location.reload()},1e3)}).catch(n=>{alert(n.message),console.log("Something went wrong: ",n.message)})}ifLogin(){this.checkLogin.status.subscribe(n=>{this.loginStatus=n,this.loginStatus&&this.router.navigateByUrl("/auth/profile")})}}return n.\u0275fac=function(t){return new(t||n)(c.Ib(i.a),c.Ib(r.c),c.Ib(g.a),c.Ib(d.a),c.Ib(p.a),c.Ib(s.a))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-login"]],decls:30,vars:5,consts:[[1,"login"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-md-8","col-lg-4"],[1,"pt-3",3,"formGroup"],[1,"form-group"],["type","email","placeholder","Email","formControlName","email",1,"form-control"],["type","password","placeholder","Password","formControlName","password",1,"form-control"],[1,"row","forgot-checkout","pt-2"],[1,"col-6"],[1,"form-group","checkout","form-check"],["type","checkbox","formControlName","rememberMe",1,"form-check-input"],[1,"form-check-label"],[1,"forgot-btn"],["routerLink","/auth/forgot-password"],[1,"rounded-btn","mt-2",3,"disabled","ngClass","click"],[1,"new-account","text-center"],["routerLink","/auth/create-account"]],template:function(n,t){1&n&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"div",3),c.Lb(4,"form",4),c.Lb(5,"div",5),c.Lb(6,"label"),c.ic(7,"Email"),c.Kb(),c.Jb(8,"input",6),c.Kb(),c.Lb(9,"div",5),c.Lb(10,"label"),c.ic(11,"Password"),c.Kb(),c.Jb(12,"input",7),c.Kb(),c.Lb(13,"div",8),c.Lb(14,"div",9),c.Lb(15,"div",10),c.Jb(16,"input",11),c.Lb(17,"label",12),c.ic(18,"Remember me"),c.Kb(),c.Kb(),c.Kb(),c.Lb(19,"div",9),c.Lb(20,"div",13),c.Lb(21,"a",14),c.ic(22,"Forgot Password?"),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Lb(23,"button",15),c.Sb("click",function(){return t.login()}),c.ic(24," Login "),c.Kb(),c.Kb(),c.Lb(25,"div",16),c.Lb(26,"span"),c.ic(27,"Don't have an Account?"),c.Kb(),c.Lb(28,"a",17),c.ic(29," Create Account "),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()),2&n&&(c.yb(4),c.Yb("formGroup",t.programForm),c.yb(19),c.Yb("disabled",t.programForm.invalid)("ngClass",c.ac(3,l,t.programForm.invalid)))},directives:[r.r,r.i,r.f,r.b,r.h,r.d,r.a,i.c,e.j],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#4481eb,#0072ff);color:#fff}.outline-btn[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{border:1px solid #4481eb;padding:5px 50px;cursor:pointer;border-radius:50px;display:block;margin:auto;text-align:center}.outline-btn[_ngcontent-%COMP%]{background:#fff;color:#4481eb}.chip-icon-btn[_ngcontent-%COMP%]{color:#fff;font-size:15px;border:1px solid #4481eb;background:linear-gradient(60deg,#4481eb,#0072ff);border-radius:20px;padding:5px 15px;cursor:pointer}.chip-icon-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:15px;padding-right:8px;color:#fff;position:relative;top:4px}.bg-gradient[_ngcontent-%COMP%]{background:linear-gradient(60deg,#4481eb,#0072ff)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important;height:45px}textarea.form-control[_ngcontent-%COMP%]{height:100%}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px;display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px;display:block;margin:20px auto}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.disable-opacity[_ngcontent-%COMP%]{opacity:.5}.back-btn[_ngcontent-%COMP%]{position:fixed;top:20px;left:15px;background:hsla(0,0%,80%,.1607843137254902);padding:5px 20px;color:#000;border-radius:25px}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.login[_ngcontent-%COMP%]{padding:5% 0}.login[_ngcontent-%COMP%]   .forgot-checkout[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:linear-gradient(60deg,#4481eb,#0072ff);font-size:17px}.login[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]{float:right}.login[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:linear-gradient(60deg,#4481eb,#0072ff);font-size:17px}.login[_ngcontent-%COMP%]   .new-account[_ngcontent-%COMP%]{padding-top:35px}.login[_ngcontent-%COMP%]   .new-account[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#485563;font-size:15px}.login[_ngcontent-%COMP%]   .new-account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:600;font-size:16px;padding-left:2px;color:linear-gradient(60deg,#4481eb,#0072ff)}.form-group[_ngcontent-%COMP%]   label.form-check-label[_ngcontent-%COMP%]{color:#007bff;font-size:17px}@media screen and (max-width:600px){.login[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]{width:100%;height:auto}}']}),n})();const u=function(n){return{"disable-opacity":n}},f=[{path:"",component:a,children:[{path:"",component:b},{path:"login",component:b},{path:"create-account",component:(()=>{class n{constructor(n,t,o,e,i){this.fb=n,this.router=t,this.auth=o,this.config=e,this.apiCallService=i,this.programForm=r.e}ngOnInit(){this.formInit()}formInit(){this.programForm=this.fb.group({firstname:["",r.p.required],lastname:["",r.p.required],email:["",r.p.required],password:["",r.p.required],confirmPassword:["",r.p.required]})}signup(){this.auth.createUserWithEmailAndPassword(this.programForm.value.email,this.programForm.value.password).then(n=>{this.apiCallService.post(this.config.collections.users,{firstname:this.programForm.value.firstname,lastname:this.programForm.value.lastname,email:this.programForm.value.email,user_type:"user"}).then(()=>{this.router.navigateByUrl("/auth/login")}).catch(n=>{alert(n)})}).catch(n=>{alert(n.message),console.log("Something went wrong: ",n.message)})}}return n.\u0275fac=function(t){return new(t||n)(c.Ib(r.c),c.Ib(i.a),c.Ib(g.a),c.Ib(p.a),c.Ib(s.a))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-create-account"]],decls:32,vars:5,consts:[[1,"signup"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-md-8","col-lg-4"],[1,"pt-3",3,"formGroup"],[1,"form-group"],["type","text","formControlName","firstname","placeholder","First Name",1,"form-control"],["type","text","formControlName","lastname","placeholder","Last Name",1,"form-control"],["type","email","formControlName","email","placeholder","Email",1,"form-control"],["type","password","formControlName","password","placeholder","Password",1,"form-control"],["type","password","formControlName","confirmPassword","placeholder","Confirm Password",1,"form-control"],[1,"rounded-btn","w-100","mt-4",3,"disabled","ngClass","click"],[1,"login-account","text-center"],["routerLink","/auth/login"]],template:function(n,t){1&n&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"div",3),c.Lb(4,"form",4),c.Lb(5,"div",5),c.Lb(6,"label"),c.ic(7,"*First Name"),c.Kb(),c.Jb(8,"input",6),c.Kb(),c.Lb(9,"div",5),c.Lb(10,"label"),c.ic(11,"*Last Name"),c.Kb(),c.Jb(12,"input",7),c.Kb(),c.Lb(13,"div",5),c.Lb(14,"label"),c.ic(15,"*Email"),c.Kb(),c.Jb(16,"input",8),c.Kb(),c.Lb(17,"div",5),c.Lb(18,"label"),c.ic(19,"*Password"),c.Kb(),c.Jb(20,"input",9),c.Kb(),c.Lb(21,"div",5),c.Lb(22,"label"),c.ic(23,"*Confirm Password"),c.Kb(),c.Jb(24,"input",10),c.Kb(),c.Lb(25,"button",11),c.Sb("click",function(){return t.signup()}),c.ic(26," Create Account "),c.Kb(),c.Kb(),c.Lb(27,"div",12),c.Lb(28,"span"),c.ic(29,"Already have an Account"),c.Kb(),c.Lb(30,"a",13),c.ic(31," Login "),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()),2&n&&(c.yb(4),c.Yb("formGroup",t.programForm),c.yb(21),c.Yb("disabled",t.programForm.invalid)("ngClass",c.ac(3,u,t.programForm.invalid)))},directives:[r.r,r.i,r.f,r.b,r.h,r.d,e.j,i.c],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#4481eb,#0072ff);color:#fff}.outline-btn[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{border:1px solid #4481eb;padding:5px 50px;cursor:pointer;border-radius:50px;display:block;margin:auto;text-align:center}.outline-btn[_ngcontent-%COMP%]{background:#fff;color:#4481eb}.chip-icon-btn[_ngcontent-%COMP%]{color:#fff;font-size:15px;border:1px solid #4481eb;background:linear-gradient(60deg,#4481eb,#0072ff);border-radius:20px;padding:5px 15px;cursor:pointer}.chip-icon-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:15px;padding-right:8px;color:#fff;position:relative;top:4px}.bg-gradient[_ngcontent-%COMP%]{background:linear-gradient(60deg,#4481eb,#0072ff)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important;height:45px}textarea.form-control[_ngcontent-%COMP%]{height:100%}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px;display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px;display:block;margin:20px auto}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.disable-opacity[_ngcontent-%COMP%]{opacity:.5}.back-btn[_ngcontent-%COMP%]{position:fixed;top:20px;left:15px;background:hsla(0,0%,80%,.1607843137254902);padding:5px 20px;color:#000;border-radius:25px}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.signup[_ngcontent-%COMP%]{padding:6% 0}.signup[_ngcontent-%COMP%]   .conditions[_ngcontent-%COMP%]{padding-top:5%}.signup[_ngcontent-%COMP%]   .conditions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:#485563;text-align:center}.signup[_ngcontent-%COMP%]   .conditions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:linear-gradient(60deg,#4481eb,#0072ff);text-decoration:none;font-weight:600}.signup[_ngcontent-%COMP%]   .login-account[_ngcontent-%COMP%]{padding-top:12%}.signup[_ngcontent-%COMP%]   .login-account[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#485563;font-size:15px}.signup[_ngcontent-%COMP%]   .login-account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:600;font-size:16px;padding-left:2px;color:linear-gradient(60deg,#4481eb,#0072ff)}@media screen and (max-width:600px){.signup[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]{width:100%;height:auto}}']}),n})()},{path:"forgot-password",component:(()=>{class n{constructor(n){this.fb=n,this.programForm=r.e}ngOnInit(){this.formInit()}formInit(){this.programForm=this.fb.group({email:["",r.p.required]})}}return n.\u0275fac=function(t){return new(t||n)(c.Ib(r.c))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-forgot-password"]],decls:15,vars:1,consts:[[1,"forgot"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-md-8","col-lg-4"],[1,"pt-3",3,"formGroup"],[1,"form-group"],["type","email","placeholder","Email","formControlName","email",1,"form-control"],[1,"rounded-btn"]],template:function(n,t){1&n&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"div",3),c.Lb(4,"h5"),c.ic(5,"Forgot Your Password?"),c.Kb(),c.Lb(6,"p"),c.ic(7,"To recover your password, you need to enter your registerted email address. We will sent the recovery code to your email"),c.Kb(),c.Lb(8,"form",4),c.Lb(9,"div",5),c.Lb(10,"label"),c.ic(11,"Email"),c.Kb(),c.Jb(12,"input",6),c.Kb(),c.Lb(13,"a",7),c.ic(14,"Send"),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()),2&n&&(c.yb(8),c.Yb("formGroup",t.programForm))},directives:[r.r,r.i,r.f,r.b,r.h,r.d],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#4481eb,#0072ff);color:#fff}.outline-btn[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{border:1px solid #4481eb;padding:5px 50px;cursor:pointer;border-radius:50px;display:block;margin:auto;text-align:center}.outline-btn[_ngcontent-%COMP%]{background:#fff;color:#4481eb}.chip-icon-btn[_ngcontent-%COMP%]{color:#fff;font-size:15px;border:1px solid #4481eb;background:linear-gradient(60deg,#4481eb,#0072ff);border-radius:20px;padding:5px 15px;cursor:pointer}.chip-icon-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:15px;padding-right:8px;color:#fff;position:relative;top:4px}.bg-gradient[_ngcontent-%COMP%]{background:linear-gradient(60deg,#4481eb,#0072ff)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important;height:45px}textarea.form-control[_ngcontent-%COMP%]{height:100%}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px;display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px;display:block;margin:20px auto}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.disable-opacity[_ngcontent-%COMP%]{opacity:.5}.back-btn[_ngcontent-%COMP%]{position:fixed;top:20px;left:15px;background:hsla(0,0%,80%,.1607843137254902);padding:5px 20px;color:#000;border-radius:25px}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.forgot[_ngcontent-%COMP%]{padding:20px 0}.forgot[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-align:center;font-size:25px;font-weight:700;padding-top:5%}.forgot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:14px;color:#485563;padding-top:10px}@media screen and (max-width:600px){.forgot[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]{width:100%;height:auto}}']}),n})()},{path:"reset-password",component:(()=>{class n{constructor(n){this.fb=n,this.programForm=r.e}ngOnInit(){this.formInit()}formInit(){this.programForm=this.fb.group({email:["",r.p.required],password:["",r.p.required],confirmPassword:["",r.p.required]})}}return n.\u0275fac=function(t){return new(t||n)(c.Ib(r.c))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-reset-password"]],decls:19,vars:1,consts:[[1,"reset"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-md-8","col-lg-4"],[1,"pt-3",3,"formGroup"],[1,"form-group"],["type","email","autocomplete","off","placeholder","Email","formControlName","email",1,"form-control"],["type","password","autocomplete","off","placeholder","Password","formControlName","password",1,"form-control"],["type","password","autocomplete","off","placeholder","Confirm Password","formControlName","confirmPassword",1,"form-control"],[1,"rounded-btn"]],template:function(n,t){1&n&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"div",3),c.Lb(4,"form",4),c.Lb(5,"div",5),c.Lb(6,"label"),c.ic(7,"Email"),c.Kb(),c.Jb(8,"input",6),c.Kb(),c.Lb(9,"div",5),c.Lb(10,"label"),c.ic(11,"Password"),c.Kb(),c.Jb(12,"input",7),c.Kb(),c.Lb(13,"div",5),c.Lb(14,"label"),c.ic(15,"Confirm Password"),c.Kb(),c.Jb(16,"input",8),c.Kb(),c.Lb(17,"a",9),c.ic(18,"Reset Password"),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()),2&n&&(c.yb(4),c.Yb("formGroup",t.programForm))},directives:[r.r,r.i,r.f,r.b,r.h,r.d],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#4481eb,#0072ff);color:#fff}.outline-btn[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{border:1px solid #4481eb;padding:5px 50px;cursor:pointer;border-radius:50px;display:block;margin:auto;text-align:center}.outline-btn[_ngcontent-%COMP%]{background:#fff;color:#4481eb}.chip-icon-btn[_ngcontent-%COMP%]{color:#fff;font-size:15px;border:1px solid #4481eb;background:linear-gradient(60deg,#4481eb,#0072ff);border-radius:20px;padding:5px 15px;cursor:pointer}.chip-icon-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:15px;padding-right:8px;color:#fff;position:relative;top:4px}.bg-gradient[_ngcontent-%COMP%]{background:linear-gradient(60deg,#4481eb,#0072ff)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important;height:45px}textarea.form-control[_ngcontent-%COMP%]{height:100%}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px;display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px;display:block;margin:20px auto}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.disable-opacity[_ngcontent-%COMP%]{opacity:.5}.back-btn[_ngcontent-%COMP%]{position:fixed;top:20px;left:15px;background:hsla(0,0%,80%,.1607843137254902);padding:5px 20px;color:#000;border-radius:25px}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.reset[_ngcontent-%COMP%]{padding:20px 0}@media screen and (max-width:600px){.reset[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]{width:100%;height:auto}}']}),n})()},{path:"profile",component:(()=>{class n{constructor(n,t,o){this.fb=n,this.router=t,this.loginSrv=o,this.programForm=r.e,this.userData={}}ngOnInit(){this.formInit(),this.getData()}formInit(){this.programForm=this.fb.group({firstname:["",r.p.required],lastname:["",r.p.required],email:["",r.p.required],password:["",r.p.required],confirmPassword:["",r.p.required]})}getData(){this.userData=this.loginSrv.getUserData(),this.programForm.patchValue({firstname:this.userData.firstname,lastname:this.userData.lastname,email:this.userData.email})}logout(){this.loginSrv.logout(),this.router.navigateByUrl("/homepage")}}return n.\u0275fac=function(t){return new(t||n)(c.Ib(r.c),c.Ib(i.a),c.Ib(d.a))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-profile"]],decls:24,vars:2,consts:[[1,"profile"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-md-8","col-lg-4"],[1,"image-container"],[1,"inner"],[1,"pt-3",3,"formGroup"],[1,"form-group"],["type","text","formControlName","firstname","placeholder","First Name",1,"form-control"],["type","text","formControlName","lastname","placeholder","Last Name",1,"form-control"],["type","email","formControlName","email","placeholder","Email",1,"form-control"],[1,"pt-3"],[1,"rounded-btn",3,"click"]],template:function(n,t){1&n&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"div",3),c.Lb(4,"div",4),c.Lb(5,"div",5),c.Lb(6,"h1"),c.ic(7),c.Kb(),c.Kb(),c.Kb(),c.Lb(8,"form",6),c.Lb(9,"div",7),c.Lb(10,"label"),c.ic(11,"First Name"),c.Kb(),c.Jb(12,"input",8),c.Kb(),c.Lb(13,"div",7),c.Lb(14,"label"),c.ic(15,"Last Name"),c.Kb(),c.Jb(16,"input",9),c.Kb(),c.Lb(17,"div",7),c.Lb(18,"label"),c.ic(19,"Email"),c.Kb(),c.Jb(20,"input",10),c.Kb(),c.Kb(),c.Lb(21,"div",11),c.Lb(22,"button",12),c.Sb("click",function(){return t.logout()}),c.ic(23,"Logout"),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()),2&n&&(c.yb(7),c.jc(t.userData.firstname.charAt(0)),c.yb(1),c.Yb("formGroup",t.programForm))},directives:[r.r,r.i,r.f,r.b,r.h,r.d],styles:[".bg-gradient[_ngcontent-%COMP%]{background:linear-gradient(60deg,#4481eb,#0072ff)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}.profile[_ngcontent-%COMP%]{padding-top:20px}.profile[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:150px;height:150px;background:linear-gradient(60deg,#29323c,#485563);color:#fff;border-radius:50%;display:block;margin:auto;position:relative}.profile[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.profile[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:70px}"]}),n})()}]}];let m=(()=>{class n{}return n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({factory:function(t){return new(t||n)},imports:[[i.d.forChild(f)],i.d]}),n})(),C=(()=>{class n{}return n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({factory:function(t){return new(t||n)},imports:[[e.c,m,r.g,r.n]]}),n})()}}]);