import { Injectable } from '@angular/core';
import { chartData } from './chart-data';
import { chartOptions } from './chart-options';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  get chartData(): Chart.ChartData {
    return chartData;
  }

  get chartOptions(): Chart.ChartOptions {
      return chartOptions;
  }

}
