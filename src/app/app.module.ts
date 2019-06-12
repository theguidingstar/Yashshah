import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './common/intro/intro.component';
import { MainFrameComponent } from './common/main-frame/main-frame.component';
import { TechStackComponent } from './common/tech-stack/tech-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MainFrameComponent,
    TechStackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
