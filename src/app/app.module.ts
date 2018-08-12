import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BusinessToolsLibModule } from 'business-tools-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BusinessToolsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
