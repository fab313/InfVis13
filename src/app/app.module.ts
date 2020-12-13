import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LinechartComponent } from './components/linechart/linechart.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { MapOverviewComponent } from './components/map-overview/map-overview.component';
import { DocumentationComponent } from './components/documentation/documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    GoogleMapsComponent,
    AdvancedComponent,
    MapOverviewComponent,
    DocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
