import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as HotelsActions from './hotel.actions';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class HotelEffects {
  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(HotelsActions.FETCH_HOTELS),
    switchMap(() => {
      return this.http.get<any[]>(
        'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=hotel&keyword=cruise&key=AIzaSyAP8TWtPqip7O3sPIK_lcKlPdUVIXSMUf0',
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }),
    map((hotels) => {
      return hotels.map((hotel) => {
        return {
          ...hotel,
        };
      });
    }),
    map((hotels) => {
      return new HotelsActions.SetHotels(hotels);
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
