import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './common/intro/intro.component';
import { MainFrameComponent } from './commmon/main-frame/main-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MainFrameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
