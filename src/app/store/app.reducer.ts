import { ActionReducerMap } from '@ngrx/store';

import * as fromHotels from '../hotels/store/hotel.reducer';

export interface AppState {
  hotels: fromHotels.State;
  currentHotel: fromHotels.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  hotels: fromHotels.hotelReducer,
  currentHotel: fromHotels.hotelReducer,
};
