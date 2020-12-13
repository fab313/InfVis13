import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatasetStoreService } from '../../services/dataset-store.service';
import {
  AccumulatedData,
  DatasetRowAccumulated,
  Station,
  TimeScatterPoint,
} from '../../services/dataset.model';

interface AverageData {
  month: number;
  year: number;
  value: number;
  amount: number;
}

@Component({
  selector: 'app-map-overview',
  templateUrl: './map-overview.component.html',
  styleUrls: ['./map-overview.component.scss'],
})
export class MapOverviewComponent {
  possibleTypes = ['temperature', 'spm', 'chlorophyll', 'salinity'];

  private selectedStation$ = new BehaviorSubject<Station>(null);
  private selectedType$ = new BehaviorSubject<string>('temperature');

  vm$ = combineLatest([
    this.selectedStation$,
    this.datasetStore.data$,
    this.selectedType$,
  ]).pipe(
    map(([x, y, z]) => ({
      selectedStation: x,
      selectedType: z,
      dataset: y
        .filter((d) => d.station_number === x?.sNr)
        .map(
          (d) =>
            ({ x: new Date(d.year, d.month - 1), y: d[z] } as TimeScatterPoint)
        ),
      average: y
        .reduce((prev, curr) => {
          const el = prev.find(
            (x) => x.month === curr.month && x.year === curr.year
          );
          const index = prev.indexOf(el);
          if (index >= 0 && curr[z]) {
            el.amount++;
            el.value += curr[z];
            prev[index] = el;
          } else if (curr[z]) {
            prev.push({
              month: curr.month,
              year: curr.year,
              value: curr[z],
              amount: 1,
            });
          }
          return prev;
        }, [] as AverageData[])
        .map(
          (d) =>
            ({
              x: new Date(d.year, d.month - 1),
              y: d.value / d.amount,
            } as TimeScatterPoint)
        ),
    })),
    map((data) => {
      return {
        dataset: [
          this.convertToDataset(data.dataset, data.selectedType, '#f14668'),
          this.convertToDataset(data.average, `average ${data.selectedType}`, ),
        ],
        selectedStation: data.selectedStation,
        selectedType: data.selectedType
      };
    })
  );

  constructor(public datasetStore: DatasetStoreService) {}

  convertToDataset(
    lineData: TimeScatterPoint[],
    label?: string,
    color?: string
  ): ChartDataset<'line'> {
    // bug in chart.js library, convert to any object
    return {
      label,
      data: lineData as any[],
      backgroundColor: color,
      tension: 0.3,
      borderColor: color + '80',
    };
  }

  updateStation(stat: Station) {
    this.selectedStation$.next(stat);
  }

  setType(name: string) {
    this.selectedType$.next(name);
  }

  getTextForQuality(qual: number ) {
    if(qual === 3) {
      return 'Excellent Water Quality'
    } else if (qual === 2) {
      return 'Average Water Quality'
    } else if (qual === 1) {
      return 'Bad Water Quality'
    }
  }
}
