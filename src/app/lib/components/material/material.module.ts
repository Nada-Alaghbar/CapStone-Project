import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const material=[
  MatButtonModule,
  MatIconModule,
  FormsModule,
  ReactiveFormsModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],exports:[material]
})
export class MaterialModule { }
