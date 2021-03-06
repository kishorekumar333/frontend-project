import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RecruiterloginComponent } from './auth/login/recruiterlogin/recruiterlogin.component';
import { SeekerloginComponent } from './auth/login/seekerlogin/seekerlogin.component';
import { DashboardComponent } from './jobseeker/dashboard/dashboard.component';
import { AppliedlistComponent } from './jobseeker/dashboard/appliedlist/appliedlist.component';
import { JoblistComponent } from './jobseeker/dashboard/joblist/joblist.component';
import { ProfileComponent } from './recruiter/profile/profile.component';
import { MainviewComponent } from './recruiter/profile/mainview/mainview.component';
import { SideviewComponent } from './recruiter/profile/sideview/sideview.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecruiterregisterComponent } from './auth/register/recruiterregister/recruiterregister.component';
import { SeekerregisterComponent } from './auth/register/seekerregister/seekerregister.component';
import { CommonDirective } from './common.directive';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecruiterloginComponent,
    SeekerloginComponent,
    DashboardComponent,
    AppliedlistComponent,
    JoblistComponent,
    ProfileComponent,
    MainviewComponent,
    SideviewComponent,
    RegisterComponent,
    RecruiterregisterComponent,
    SeekerregisterComponent,
    CommonDirective,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
