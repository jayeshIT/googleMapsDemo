import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { SingleRouteComponent } from './single-route/single-route.component';
import { MultipleRoutesComponent } from './multiple-routes/multiple-routes.component'


@NgModule({
  declarations: [
    AppComponent,
    SingleRouteComponent,
    MultipleRoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
