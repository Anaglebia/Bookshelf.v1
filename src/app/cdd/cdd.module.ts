import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app-compartilhada/app-material/app-material.module';
import { AppCompartilhadoModule } from '../app-compartilhada/app-compartilhada.module';
import { CddRoutingModule } from './cdd-routing.module';
import { ClassesComponent } from './classes/classes.component';


@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    CddRoutingModule,
    AppMaterialModule,
    AppCompartilhadoModule
  ]
})
export class CddModule { }
