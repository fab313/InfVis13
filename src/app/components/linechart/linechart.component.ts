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


  private _data: ChartDataset<'line'>[];
  @Input()
  set data(d: ChartDataset<'line'>[]) {
    this._data = d;
    if (this.myChart) {
      this.myChart.data.datasets = d;
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
        datasets: this._data
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            right: 50
          }
        },
        scales: {
          x: {
            type: 'time',
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
            color: '#F8F8F8',
            lineWidth: '1'
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
