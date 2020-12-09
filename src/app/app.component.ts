import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { DatasetStoreService } from './services/dataset-store.service';
import { TimeScatterPoint } from './services/dataset.model';
import embed from 'vega-embed';
import data from '../assets/bar.vg.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent implements AfterViewInit{
  title = 'InfVis13';

  @ViewChild('vis')
  ctx!: ElementRef;

  constructor(public datasetStore: DatasetStoreService) {
  }

  async ngAfterViewInit(): Promise<void> {
    await embed(this.ctx.nativeElement, '../assets/bar.vg.json' );
  }


  convertToDataset(lineData: TimeScatterPoint[], label?: string, color?: string): ChartDataset<'line'> {

    // bug in chart.js library, convert to any object
    return {label, data: lineData as any[], backgroundColor: color, tension: 0.3, borderColor: color + '80'};

  }
}
