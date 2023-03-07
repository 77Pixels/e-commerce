import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component'
import { AdminComponent } from './pages/admin/admin.component'
import { BuyerComponent } from './pages/buyer/buyer.component'
import { SellerComponent } from './pages/seller/seller.component'
import { LoginComponent } from './pages/login/login.component'
import { SignupComponent } from './pages/signup/signup.component'

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "buyer",
    component: BuyerComponent
  },
  {
    path: "seller",
    component: SellerComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
