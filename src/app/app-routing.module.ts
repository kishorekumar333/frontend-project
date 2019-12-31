import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {SeekerloginComponent} from './auth/login/seekerlogin/seekerlogin.component';
import {SeekerregisterComponent} from './auth/register/seekerregister/seekerregister.component';
import { RecruiterregisterComponent } from './auth/register/recruiterregister/recruiterregister.component';

import {RecruiterloginComponent} from './auth/login/recruiterlogin/recruiterlogin.component';
const routes: Routes = [
  {
    path:'login',component:LoginComponent,children:[
      {path:'seekerlogin',component:SeekerloginComponent},
      {path:'reclogin',component:RecruiterloginComponent}
    ]},
    {path:'sekerregister',component:SeekerregisterComponent},
    {path:'recruiterregister', component:RecruiterregisterComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
