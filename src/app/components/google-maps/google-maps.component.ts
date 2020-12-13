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

  markerOptions: google.maps.MarkerOptions = {clickable: true };

  constructor(public stationStore: StationStoreService) {

  }

  showStation(station: Station) {
    this.selectStation.emit(station);
  }

}
