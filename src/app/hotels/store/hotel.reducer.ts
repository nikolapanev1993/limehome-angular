import * as HotelsActions from './hotel.actions';

export interface State {
  hotels: any[];
  currentHotel: any;
}

const initialState: State = {
  hotels: [],
  currentHotel: {},
};

export function hotelReducer(
  state = initialState,
  action: HotelsActions.HotelsActions
) {
  switch (action.type) {
    case HotelsActions.SET_HOTELS:
      return {
        ...state,
        hotels: [...action.payload],
      };
    case HotelsActions.SET_CURRENT_HOTEL:
      const updatedHotels = [...state.hotels];
      updatedHotels.forEach((item, i) => {
        if(item.place_id === action.payload.place_id){
          updatedHotels.splice(1, 0, updatedHotels.splice(i, 1)[0]);  
        }
      })

      return {
        hotels: updatedHotels,
        currentHotel: { ...action.payload },
      };
    default:
      return state;
  }
}
