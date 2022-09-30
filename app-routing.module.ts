import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';*/
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
 
const routes: Routes = [
  /*{path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent},
  {path:'**', component: ErrorComponent}*/
 
  {path:'', component: SigninComponent},
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},
  {path:'welcome/:name', component: WelcomeComponent},
  /* {path:'**', component: ErrorComponent} */
 
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
