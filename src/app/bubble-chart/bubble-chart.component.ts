import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartService } from '../chart.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {
  @ViewChild('bubbleChart') private chartRef;
  private chart: Chart;
  private chartData: Chart.ChartData;
  private chartOptions: Chart.ChartOptions;

  constructor(private chartService: ChartService) {
    this.chartData = chartService.chartData;
    this.chartOptions = chartService.chartOptions;
  }

  ngOnInit() {
    this.chart = new Chart(this.chartRef.nativeElement,
      {
        type: 'bubble',
        data: this.chartData,
        options: this.chartOptions
      });
  }

}
