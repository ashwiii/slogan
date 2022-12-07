import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { ContactComponent } from './contact/contact.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'listing',component: AfterloginComponent},
  {path:'select',component: SelectCategoryComponent},
  {path:'terms',component: TermsComponent},
  {path:'contact',component: ContactComponent},
  {path:'profile',component: ProfileComponent},
  {path:'edit',component: EditProfileComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
