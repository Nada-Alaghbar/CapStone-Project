import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndUserRoutingModule } from './end-user-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/lib/components/material/material.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    DashboardComponent,
    UserFormComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EndUserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule
  ]
})
export class EndUserModule { }
