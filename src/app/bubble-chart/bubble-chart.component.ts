import { Component, OnInit, ViewChild } from '@angular/core';
import { chartDataSets } from '../chart-data-sets';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {
  @ViewChild('bubbleChart') private chartRef;
  chart: Chart;

  ngOnInit() {
    this.chart = new Chart(this.chartRef.nativeElement,
      {
        type: 'bubble',
        data: chartDataSets,
        options: {
          title: {
            display: true,
            text: 'Automated, Manual & Total number of Requirements per Domain'
          }, scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Manual'
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Automated'
              }
            }]
          },
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      });
  }

}
