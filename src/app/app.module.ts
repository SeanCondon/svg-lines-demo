import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Box1Component } from './box1/box1.component';
import { JoinerComponent } from './joiner/joiner.component';

@NgModule({
  declarations: [
    AppComponent,
    Box1Component,
    JoinerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'Window', useValue: window },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
