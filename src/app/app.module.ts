import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './common/intro/intro.component';
import { MainFrameComponent } from './common/main-frame/main-frame.component';
import { TechStackComponent } from './common/tech-stack/tech-stack.component';
import { SideMenuComponent } from './common/side-menu/side-menu.component';
import { AboutMeComponent } from './common/navigation/about-me/about-me.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MainFrameComponent,
    TechStackComponent,
    SideMenuComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      innerStrokeWidth: 8,
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
