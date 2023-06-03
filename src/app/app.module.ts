import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LayoutService } from './layout/service/app.layout.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppLayoutModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },LayoutService],

  bootstrap: [AppComponent],
})
export class AppModule {}
