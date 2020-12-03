import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartDataset, Legend, LinearScale, LineController, LineElement, PointElement, ScatterDataPoint, TimeScale,
  TimeSeriesScale, Tooltip } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { de } from 'date-fns/locale';
import { TimeScatterPoint } from '../../services/dataset.model';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinechartComponent implements AfterViewInit {

  @Input()
  set data(d: ChartDataset<'line'>) {
    if (this.myChart) {
      this.myChart.data.datasets[0] = d;
      this.myChart.update();

    }
  }

  @ViewChild('myChart')
  public ctx: ElementRef;

  public myChart: Chart<'line'>;

  constructor() {
    Chart.register(LineController, LinearScale, TimeScale, TimeSeriesScale, Tooltip, Legend, PointElement, LineElement);

   }

  ngAfterViewInit(): void {
    this.myChart = new Chart(this.ctx.nativeElement as HTMLCanvasElement, {
      type: 'line',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        scales: {
          x: {
            type: 'timeseries',
          time: {
            unit: 'month',
            tooltipFormat: 'dd.MM.yyyy -- hh:mm'
          },
          adapters: {
            date: {
              locale: de,
            },
          },
          gridLines: {
            color: 'whitesmoke',
          },
          ticks: {
            font: {
              color: '#b5b5b5'
            }
          }
          }
        }
      }
    });
  }

}
