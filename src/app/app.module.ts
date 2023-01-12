import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DelayRenderingDirective } from './delay-rendering.directive';
import { NotDirective } from './not-directive';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    DelayRenderingDirective,
    NotDirective,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
