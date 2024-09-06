import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTitleSubtitle, ApexStroke, ApexMarkers, ApexGrid, ApexYAxis, ApexLegend, ApexOptions } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-grafico2',
  templateUrl: './grafico2.component.html',
  styleUrls: ['./grafico2.component.scss']
})
export class Grafico2Component implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;

  public chartOptions: ChartOptions = {
    chart: {
      id: 'spark2',
      group: 'sparks',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    },
    series: [{
      data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
    }],
    stroke: {
      curve: 'smooth'
    },
    grid: {
      padding: {
        top: 20,
        bottom: 10,
        left: 110
      }
    },
    markers: {
      size: 0
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (val: any) => ''
        }
      }
    },
    xaxis: {
      categories: ['Category 1', 'Category 2']
    },
    dataLabels: {
      enabled: false
    },
    yaxis: {
      title: {
        text: 'Y Axis'
      }
    },
    legend: {
      show: true
    },
    title: {
      text: 'Sample Chart'
    }
  };

  constructor() { }

  ngOnInit(): void {
    // Inicialización adicional si es necesario
  }
}
