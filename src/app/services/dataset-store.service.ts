import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CsvLoaderService } from './csv-loader.service';
import { DatasetRow, TimeScatterPoint } from './dataset.model';
import { Store } from './store';



@Injectable({
  providedIn: 'root'
})
export class DatasetStoreService extends Store<DatasetRow[]> {

  lineChartData$ = this.state$.pipe( map(x =>
    x.filter(row => row.timestamp >= new Date(1980, 1, 1) && row.timestamp < new Date(1980, 12, 31) && row.temperature > 0)
      .map( row => ({x: row.timestamp, y: row.temperature} as TimeScatterPoint))));

  constructor(private csvLoad: CsvLoaderService) {
    super([]);
    this.fetchData();
  }

  private async fetchData(): Promise<void> {
    this.setState(await this.csvLoad.loadAssetFile().toPromise());
  }
}
