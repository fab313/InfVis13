import { Component, EventEmitter, Output } from '@angular/core';
import { Station } from '../../services/dataset.model';
import { StationStoreService } from '../../services/station-store.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent {

  center: google.maps.LatLngLiteral = {lat: 37.8, lng: -122};
  zoom = 10;

  @Output()
  selectStation = new EventEmitter<Station>();

  markerOptions: google.maps.MarkerOptions = {clickable: true, icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png' };

  constructor(public stationStore: StationStoreService) {

  }

  showStation(station: Station) {
    this.selectStation.emit(station);
  }

  getOptions(quality: number) {
    let options: google.maps.MarkerOptions = {clickable: true};

    if(quality === 3) {
      options.icon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
    } else if (quality === 2) {
      options.icon = 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
    } else if (quality === 1) {
      options.icon = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
    }
    return options;
  }

}
