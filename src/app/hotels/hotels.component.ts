import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as HotelActions from '../hotels/store/hotel.actions';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent implements OnInit {
  hotels: any[];

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select('hotels').subscribe((item) => {
      this.hotels = item.hotels;
    });
  }
}
