import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { Page404Component } from './core/page404/page404.component';
import { FormationRoutingModule } from './modules/formation/formation-routing.module';
import { FormationModule } from './modules/formation/formation.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { Routes } from '@angular/router';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormationModule,
    AuthModule,
    AdminModule,
    FormationRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
