import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DatasetRow, DatasetRowRaw } from './dataset.model';
import { Store } from './store';
import data from '../../assets/SFO.Data.json';



@Injectable({
  providedIn: 'root'
})
export class DatasetStoreService extends Store<DatasetRowRaw[]> {


  data$ = this.state$.pipe(
    map( x => x.map(d => ({
      month: d.month,
      year: d.year,
      station_number: d["Station.Number"],
      chlorophyll: +d["Calculated.Chlorophyll"], 
      spm: +d["Calculated.SPM"],
      salinity: +d["Salinity"],
      oxygen: +d["Calculated.Oxygen"],
      temperature: +d["Temperature"] } as DatasetRow))
  ));

  /*
  lineChartData$ = this.state$.pipe( map(x =>
    x.filter(row => row.timestamp >= new Date(1980, 1, 1) && row.timestamp < new Date(1980, 12, 31) && row.temperature > 0)
      .map( row => ({x: row.timestamp, y: row.temperature} as TimeScatterPoint))));


  groupData$ = this.state$.pipe(
    map( x => x.filter(row => row.timestamp >= new Date(1980, 1, 1) && row.timestamp < new Date(1980, 12, 31))),
  map( x => {
    const a = x.reduce((prev, curr) => {
    prev.temperature += curr.temperature;
    prev.salinity += curr.salinity;
    prev.depth += curr.depth;
    prev.calculatedChlorophyll += curr.calculatedChlorophyll;
    prev.calculatedSpm += curr.calculatedSPM;
    return prev;
  }, {timestamp: 'x', calculatedSpm: 0, salinity: 0, temperature: 0, calculatedChlorophyll: 0, depth: 0 } as cummulatedData)
    a.temperature= a.temperature/x.length;
    a.salinity= a.salinity/x.length;
    a.depth= a.depth/x.length;
    a.calculatedChlorophyll= a.calculatedChlorophyll/x.length;
    a.calculatedSpm = a.calculatedSpm/x.length;
    return a }));*/


  constructor() {
    super(data);
    //this.fetchData();
  }

  /*
  private async fetchData(): Promise<void> {
    this.setState(await this.csvLoad.loadAssetFile().toPromise());
  }*/
}
