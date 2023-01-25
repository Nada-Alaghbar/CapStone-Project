import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const material=[
  MatButtonModule,
  MatIconModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],exports:[material]
})
export class MaterialModule { }
