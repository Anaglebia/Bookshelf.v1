import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './compartilhada/app-material.module';
import { AppDialogosComponent } from './app-compartilhada/app-dialogos/app-dialogos.component';
import { PipesPipe } from './app-compartilhada/app-pipes/pipes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppDialogosComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
