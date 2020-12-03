import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { DatasetStoreService } from './services/dataset-store.service';
import { TimeScatterPoint } from './services/dataset.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  title = 'InfVis13';

  constructor(public datasetStore: DatasetStoreService) {
  }


  convertToDataset(lineData: TimeScatterPoint[], label?: string, color?: string): ChartDataset<'line'> {

    // bug in chart.js library, convert to any object
    return {label, data: lineData as any[], backgroundColor: color, tension: 0.3, borderColor: color + '80'};

  }
}
