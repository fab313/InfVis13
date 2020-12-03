import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DatasetRow } from './dataset.model';

@Injectable({
  providedIn: 'root'
})
export class CsvLoaderService {


  constructor(private http: HttpClient) { }


  loadAssetFile(): Observable<DatasetRow[]> {

    return this.http.get('assets/SFBay_version2.csv', {responseType: 'text'}).pipe(
      map( csv => csv.split('\n').slice(1).map(row => {
        const splittedRow = row.split(';');

        return {
          timestamp: new Date(splittedRow[0]),
          stationNumber: +splittedRow[1],
          distanceFrom36: +splittedRow[2],
          depth: +splittedRow[3],
          discreteChlorophyll: +splittedRow[4],
          chlorophyllPHA: +splittedRow[5],
          fluorescence: +splittedRow[6],
          calculatedChlorophyll: +splittedRow[7],
          discreteOxygen: +splittedRow[8],
          oxygenElectrode: +splittedRow[9],
          oxygenSaturationPercent: +splittedRow[10],
          calculatedOxygen: +splittedRow[11],
          discreteSPM: +splittedRow[12],
          opticalBackscatter: +splittedRow[13],
          calculatedSPM: +splittedRow[14],
          measuredExtinctionCoefficient: +splittedRow[15],
          calculatedExtinctionCoefficient: +splittedRow[16],
          salinity: +splittedRow[17],
          temperature: +splittedRow[18],
          sigmaT: +splittedRow[19],
          nitrite: +splittedRow[20],
          ammonium: +splittedRow[21],
          phosphate: +splittedRow[22],
          silicate: +splittedRow[23]
        } as DatasetRow;
      }))
    );
  }
}
