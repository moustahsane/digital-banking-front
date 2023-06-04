import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LayoutService } from './layout/service/app.layout.service';
import { MessageService, SharedModule } from 'primeng/api';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppLayoutModule,SharedModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },LayoutService,MessageService],
   
  bootstrap: [AppComponent],
})
export class AppModule {}
