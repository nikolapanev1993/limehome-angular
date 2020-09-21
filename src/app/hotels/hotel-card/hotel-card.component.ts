import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {
  @Input() hotel: any;
  currHotel: any;
  allHotels: any[];

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select('hotels').subscribe((hotels: any) => {
      this.allHotels = hotels.hotels;
    });
    
    this.store.select('currentHotel').subscribe((item) => {
      this.currHotel = item.currentHotel;
    });
  }

}
