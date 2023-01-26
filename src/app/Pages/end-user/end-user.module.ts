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


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    DashboardComponent,
    UserFormComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EndUserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EndUserModule { }
