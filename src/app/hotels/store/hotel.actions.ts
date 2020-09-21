import { Action } from '@ngrx/store';

export const SET_HOTELS = '[Hotels] Set Hotels';
export const FETCH_HOTELS = '[Hotels] Fetch Hotels';
export const SET_CURRENT_HOTEL = '[Hotels] Set Current Hotel';

export class SetHotels implements Action {
  readonly type = SET_HOTELS;

  constructor(public payload: any[]) {}
}

export class FetchHotels implements Action {
  readonly type = FETCH_HOTELS;
}

export class SetCurrentHotel implements Action {
  readonly type = SET_CURRENT_HOTEL;

  constructor(public payload: any) {}
}

export type HotelsActions = SetHotels | FetchHotels | SetCurrentHotel;
