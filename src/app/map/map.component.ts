import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as HotelActions from '../hotels/store/hotel.actions';

const homeIconDefault = 'assets/home-marker.png';
const homeIconActive = 'assets/home-marker-active.png';

let infowindow = new google.maps.InfoWindow();

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  markers: any[] = [];
  hotels: any[] = [];

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const berlin = { lat: 52.52, lng: 13.405 };
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: berlin,
        zoom: 17,
        draggable: true,
      }
    );

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(
      { location: berlin, radius: 500, type: 'lodging' },
      (
        results: google.maps.places.PlaceResult[],
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status !== 'OK') return;

        this.hotels = results;
        this.onSetData(results);
        this.createMarkers(results, map);
      }
    );
  }

  createMarkers(
    places: google.maps.places.PlaceResult[],
    map: google.maps.Map
  ) {
    const bounds = new google.maps.LatLngBounds();

    for (let i = 0, place; (place = places[i]); i++) {
      let marker = new google.maps.Marker({
        map,
        icon: homeIconDefault,
        title: place.name,
        position: place.geometry.location,
      });

      this.markers.push(marker);

      marker.addListener('click', (e) => {
        for (let j = 0; j < this.markers.length; j++) {
          this.markers[j].setIcon(homeIconDefault);
        }
        marker.setIcon(homeIconActive);
        this.onClickEvent(place);
      });

      marker.addListener('mouseover', function () {
        infowindow = new google.maps.InfoWindow({
          content: place.name,
        })
        infowindow.open(map, this);
      });

      // assuming you also want to hide the infowindow when user mouses-out
      marker.addListener('mouseout', function () {
        infowindow.close();
      });

      bounds.extend(place.geometry.location);
    }
    map.fitBounds(bounds);
  }

  onClickEvent(hotel: any) {
    document.querySelector('.scrollmenu').scrollLeft = 1;
    this.store.dispatch(new HotelActions.SetCurrentHotel(hotel));
  }

  onSetData(hotels: any[]) {
    this.store.dispatch(new HotelActions.SetHotels(hotels));
  }
}
