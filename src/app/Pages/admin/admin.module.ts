import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CrudComponent } from './crud/crud.component';
import { AddNewComponent } from './add-new/add-new.component';



@NgModule({
  declarations: [
    CrudComponent,
    AddNewComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
