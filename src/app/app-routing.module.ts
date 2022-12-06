import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SelectCategoryComponent } from './select-category/select-category.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'listing',component: AfterloginComponent},
  {path:'select',component: SelectCategoryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
