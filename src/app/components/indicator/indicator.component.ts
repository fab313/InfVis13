import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {

  @Input() quality: number;

  constructor() { }

  ngOnInit(): void {
  }

  getColorForQuality(quality: number ) {
    if(quality === 3) {
      return '#06d6a0'
    } else if (quality === 2) {
      return '#ffd166'
    } else {
      return '#ef476f'
    }
  }

  getTextForQuality(quality: number) {
    if(quality === 3) {
      return 'Good'
    } else if (quality === 2) {
      return 'Ok'
    } else {
      return 'Bad'
    } 
  }
}
