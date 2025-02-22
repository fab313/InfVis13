import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DatasetStoreService } from './dataset-store.service';
import { DatasetRowRaw, Station } from './dataset.model';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class StationStoreService extends Store<Station[]> {

  private subscription: Subscription;

  constructor(private dataStore: DatasetStoreService) {
    super([ 
    ]);

    this.fetchAll();

   }

   async fetchAll() {

    const currentYear = 2014;
    const currentMonth = 2;

    /*const data = await this.dataStore.state$.pipe(
      map(x => x.filter(z => z.year === currentYear && z.month === currentMonth )
      .map( x => ({quality: 3, sNr: x["Station.Number"]} as Station))),
      ).toPromise();*/
    this.subscription = this.dataStore.state$.subscribe(x => {
      const da = x.filter(z => z.year === currentYear && z.month === currentMonth )
      .map( x => ({quality: this.getQuality(x), sNr: x["Station.Number"], ...this.getDataForStation(x["Station.Number"])} as Station))
      this.setState(da);
    });
    
   }

   getDataForStation(snr: number) {
     switch (snr) {
       case 657: return {sNr: 657, name: 'Rio Vista', latitude: 38.15167, longitude: -121.68833, depth: 10.1 };
       case 649: return {sNr: 649, name: 'Sacramento River', latitude: 38.06, longitude: -121.8, depth: 10.1 };
       case 2: return {sNr: 2, name: 'Chain Island', latitude: 38.063333, longitude: -121.851667, depth: 11.3 };
       case 3: return {sNr: 3, name: 'Pittsburg', latitude: 38.051667, longitude: -121.88, depth: 11.3};
       case 4: return {sNr: 4, name: 'Simmons Point', latitude: 38.048333, longitude: -121.935, depth: 11.6 };
       case 5: return {sNr: 5, name: 'Middle Ground', latitude: 38.06	, longitude: -121.98, depth: 9.8 };
        case 6: return {sNr: 6, name: 'Roe Island', latitude: 38.065, longitude: -122.035, depth: 10.1 };
        case 7: return {sNr: 7, name: 'Avon Pier', latitude: 38.048333, longitude: -122.096667, depth: 11.6 };
        case 8: return {sNr: 8, name: 'Martinez', latitude: 38.03, longitude: -122.151667, depth: 14.3 };
        case 9: return {sNr: 9, name: 'Benicia', latitude: 38.056667, longitude: -122.185, depth: 34.4 };
        case 10: return {sNr: 10, name: 'Crockett', latitude: 38.06, longitude: -122.208333, depth: 17.7 };
        case 11: return {sNr: 11, name: 'Mare Island', latitude: 38.06, longitude: -122.266667, depth: 15.5 };
        case 12: return {sNr: 12, name: 'Pinole Shoal', latitude: 38.051667, longitude: -122.311667, depth: 8.8 };
        case 13: return {sNr: 13, name: 'N. of Pinole Point', latitude: 38.028333, longitude: 122.37, depth: 9.8 };
        case 14: return {sNr: 14, name: '"Echo" Buoy', latitude: 38.006667, longitude: -122.405, depth: 13.1 };
        case 15: return {sNr: 15, name: 'Point San Pablo', latitude: 37.973333, longitude: -122.436667, depth: 22.9 };

        case 16: return {sNr: 16, name: '"Charlie" Buoy', latitude: 37.916667, longitude: -122.446667, depth: 12.8 };
        case 17: return {sNr: 17, name: 'Raccoon Strait', latitude: 37.878333, longitude: -122.421667, depth: 32.0 };
        case 18: return {sNr: 18, name: 'Point Blunt', latitude: 37.846667, longitude: -122.421667, depth: 43.0 };
        case 20: return {sNr: 20, name: 'Blossom Rock', latitude: 37.82, longitude: -122.393333, depth: 18.2 };
        case 21: return {sNr: 21, name: 'Bay Bridge', latitude: 37.788333, longitude: -122.358333, depth: 17.4 };
        case 22: return {sNr: 22, name: 'Potrero Point', latitude: 37.765, longitude: -122.358333, depth: 18.0 };

        case 23: return {sNr: 23, name: 'Hunter\'s Point', latitude: 37.728333, longitude: -122.336667, depth: 20.1 };
        case 24: return {sNr: 24, name: 'Candlestick Point', latitude: 37.698333, longitude: -122.338333, depth: 11.0 };
        case 25: return {sNr: 25, name: 'Oyster Point', latitude: 37.67, longitude: -122.325, depth: 8.8 };
        case 26: return {sNr: 26, name: 'San Bruno Shoal', latitude: 37.636667, longitude: -122.313333, depth: 9.8 };
        case 27: return {sNr: 27, name: 'San Francisco Airport', latitude: 37.618333, longitude: -122.291667, depth: 13.0 };
        case 28: return {sNr: 28, name: 'N. of San Mateo Bridge', latitude: 37.601667, longitude: -122.27, depth: 16.2 };
        case 29: return {sNr: 29, name: 'S. of San Mateo Bridge', latitude: 37.58, longitude: -122.245, depth: 14.6 };
        case 29.5: return {sNr: 29.5, name: 'Steinberger Slough', latitude: 37.568333, longitude: -122.218333, depth: 14.6 };

        case 30: return {sNr: 30, name: 'Redwood Creek', latitude: 37.555, longitude: -122.19, depth: 12.8 };
        case 31: return {sNr: 31, name: 'Coyote Hills', latitude: 37.528333, longitude: -122.158333, depth: 13.7 };
        case 32: return {sNr: 32, name: 'Ravenswood Point', latitude: 37.518333, longitude: -122.133333, depth: 12.8 };
        case 33: return {sNr: 33, name: 'Dumbarton Bridge', latitude: 37.508333, longitude: -122.121667, depth: 11.6 };
        case 34: return {sNr: 34, name: 'Newark Slough', latitude: 37.495, longitude: -122.098333, depth: 7.9 };
        case 35: return {sNr: 35, name: 'Mowry Slough', latitude: 37.48, longitude: -122.078333, depth: 8.5 };
        case 36: return {sNr: 36, name: 'Calaveras Point', latitude: 37.471667, longitude: -122.066667, depth: 7.9 }
       default: return {sNr: -1, name: 'MISSING', latitude: 38.15167, longitude: -121.68833, depth: 9.8 };
     }
   }

   getQuality(x: DatasetRowRaw) {
    if(x["Calculated.Chlorophyll"] <= 2) {
      return 3;
    }
    else if(x["Calculated.Chlorophyll"] <= 3) {
      return 2;
    }
    return 1;
   }

   /*
   {sNr: 657, name: 'Rio Vista', latitude: 38.15167, longitude: -121.68833, depth: 10.1 } ,
   {sNr: 649, name: 'Sacramento River', latitude: 38.06, longitude: -121.8, depth: 10.1 } ,
   {sNr: 2, name: 'Chain Island', latitude: 38.063333, longitude: -121.851667, depth: 11.3 } ,
   {sNr: 3, name: 'Pittsburg', latitude: 38.051667, longitude: -121.88, depth: 11.3 } ,
   {sNr: 4, name: 'Simmons Point', latitude: 38.048333, longitude: -121.935, depth: 11.6 } ,
   {sNr: 5, name: 'Middle Ground', latitude: 38.15167, longitude: -121.68833, depth: 9.8 } ,
   {sNr: 6, name: 'Roe Island', latitude: 38.15167, longitude: -121.68833, depth: 10.1 } ,
   {sNr: 7, name: 'Avon Pier', latitude: 38.15167, longitude: -121.68833, depth: 11.6 } ,
   {sNr: 8, name: 'Martinez', latitude: 38.15167, longitude: -121.68833, depth: 14.3 } ,
   {sNr: 9, name: 'Benicia', latitude: 38.15167, longitude: -121.68833, depth: 34.4 } ,
   {sNr: 10, name: 'Crockett', latitude: 38.15167, longitude: -121.68833, depth: 17.7 } ,
   {sNr: 11, name: 'Mare Island', latitude: 38.15167, longitude: -121.68833, depth: 15.5 } ,
   {sNr: 12, name: 'Pinole Shoal', latitude: 38.15167, longitude: -121.68833, depth: 8.8 } ,
   {sNr: 13, name: 'N. of Pinole Point', latitude: 38.15167, longitude: -121.68833, depth: 9.8 } ,
   {sNr: 14, name: '"Echo" Buoy', latitude: 38.15167, longitude: -121.68833, depth: 13.1 } ,
   {sNr: 15, name: 'Point San Pablo', latitude: 38.15167, longitude: -121.68833, depth: 22.9 } ,
   {sNr: 16, name: '"Charlie" Buoy', latitude: 38.15167, longitude: -121.68833, depth: 12.8 } ,
   {sNr: 17, name: 'Raccoon Strait', latitude: 38.15167, longitude: -121.68833, depth: 32.0 } ,
   {sNr: 18, name: 'Point Blunt', latitude: 38.15167, longitude: -121.68833, depth: 43.0 } ,
   {sNr: 20, name: 'Blossom Rock', latitude: 38.15167, longitude: -121.68833, depth: 18.2 } ,
   {sNr: 21, name: 'Bay Bridge', latitude: 38.15167, longitude: -121.68833, depth: 17.4 } ,
   {sNr: 22, name: 'Potrero Point', latitude: 38.15167, longitude: -121.68833, depth: 18.0 } ,
   {sNr: 23, name: 'Hunter\'s Point', latitude: 38.15167, longitude: -121.68833, depth: 20.1 } ,
   {sNr: 24, name: 'Candlestick Point', latitude: 38.15167, longitude: -121.68833, depth: 11.0 } ,
   {sNr: 25, name: 'Oyster Point', latitude: 38.15167, longitude: -121.68833, depth: 8.8 } ,
   {sNr: 26, name: 'San Bruno Shoal', latitude: 38.15167, longitude: -121.68833, depth: 9.8 } ,
   {sNr: 27, name: 'San Francisco Airport', latitude: 38.15167, longitude: -121.68833, depth: 13.0 } ,
   {sNr: 28, name: 'N. of San Mateo Bridge', latitude: 38.15167, longitude: -121.68833, depth: 16.2 } ,
   {sNr: 29, name: 'S. of San Mateo Bridge', latitude: 38.15167, longitude: -121.68833, depth: 14.6 } ,
   {sNr: 29.5, name: 'Steinberger Slough', latitude: 38.15167, longitude: -121.68833, depth: 14.6 } ,
   {sNr: 30, name: 'Redwood Creek', latitude: 38.15167, longitude: -121.68833, depth: 12.8 } ,
   {sNr: 31, name: 'Coyote Hills', latitude: 38.15167, longitude: -121.68833, depth: 13.7 } ,
   {sNr: 32, name: 'Ravenswood Point', latitude: 38.15167, longitude: -121.68833, depth: 12.8 } ,
   {sNr: 33, name: 'Dumbarton Bridge', latitude: 38.15167, longitude: -121.68833, depth: 11.6 } ,
   {sNr: 34, name: 'Newark Slough', latitude: 38.15167, longitude: -121.68833, depth: 7.9 } ,
   {sNr: 35, name: 'Mowry Slough', latitude: 38.15167, longitude: -121.68833, depth: 8.5 } ,
   {sNr: 36, name: 'Calaveras Point', latitude: 38.15167, longitude: -121.68833, depth: 7.9 } ,*/
}