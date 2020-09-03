import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCountryComponent } from './pages/home-country/home-country.component';
import { ListCountryComponent } from './pages/list-country/list-country.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DetailCountryComponent } from './pages/detail-country/detail-country.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCountryComponent,
    ListCountryComponent,
    DetailCountryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
