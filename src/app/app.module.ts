

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartEjemploComponent } from './components/chart-ejemplo/chart-ejemplo.component';
import { Grafico2Component } from "./components/grafico2/grafico2.component";

@NgModule({
  declarations: [
    AppComponent,
    ChartEjemploComponent,
    Grafico2Component,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    
],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
