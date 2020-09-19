import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelCardComponent } from './hotels/hotel-card/hotel-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HotelsComponent,
    HotelCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
