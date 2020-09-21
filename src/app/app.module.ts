import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelCardComponent } from './hotels/hotel-card/hotel-card.component';
import * as fromApp from './store/app.reducer';
import { HotelEffects } from './hotels/store/hotel.effects';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HotelsComponent,
    HotelCardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([HotelEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
