import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexDataLabels, ApexMarkers, ApexTooltip, ApexGrid, ApexYAxis, ApexLegend, ApexTitleSubtitle } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart-ejemplo',
  templateUrl: './chart-ejemplo.component.html',
  styleUrls: ['./chart-ejemplo.component.scss']
})
export class ChartEjemploComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;

  public chartOptions: ChartOptions = {
    series: [], 
    chart: {
      height: 350,
      type: "line"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 5,
      curve: "smooth",
      colors: ['#00bfff', '#0000ff'] // Colores para las líneas:
    },
    title: {
      text: "Conteo 2024-09",
      align: "left"
    },
    legend: {
      tooltipHoverFormatter: function (val: string, opts: any) {
        return val + " - <strong>" + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + "</strong>";
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      labels: {
        trim: false
      },
      categories: ["13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:30"],
      title: {
        text: "Horas"
    }
  },

    tooltip: {
      y: [
        {
          title: {
            formatter: function (val: any) {
              return '<span style="color: black;">' + val + 'x 30 minutos</span>';
            }
          }
        },
        {
          title: {
            formatter: function (val: any) {
              return '<span style="color: black;">' + val + 'x 30 minutos </span>';
            }
          }
        },
        {
          title: {
            formatter: function (val: any) {
              return val;
            }
          }
        }
      ]
    },
    grid: {
      // borderColor: "#f2f3f5ff"
    },
    yaxis: {
      title: {
        text: ' Cantidad',
        style: {
          color: '' 
        }
      }
    }
  };

  // Definición de datos
  casinoData = {
    date: '',
    time: '',
    value: 0
  };

  tgmData = {
    date: '',
    time: '',
    value: 0
  };

  chartData = {
    casino: [0,0,0,0,0,0,0], //Para "CASINO": Los datos en el array en el eje Y
    tgm: [222,212,208,209,201,202,181]  //Para "TGM": Los datos en el array en el eje x
  };

  constructor() {}

  ngOnInit() {
    this.updateChartData();
  }

  /*cuenta desde el 0*/
  updateChartData() {
    const now = new Date();
    this.casinoData = { 
      date: now.toLocaleDateString(), 
      time: this.chartOptions.xaxis.categories[0], 
      value: this.chartData.casino[0] 
    };
    this.tgmData = { 
      date: now.toLocaleDateString(), 
      time: this.chartOptions.xaxis.categories[2], /*para escoger la hora que se vera en el card*/
      value: this.chartData.tgm[6]  /*para que se vea el total tgm*/
    };

    this.chartOptions.series = [
      { 
        name: "Casino", 
        data: this.chartData.casino,
        color: '#00bfff' // Color celeste para CASINO
      },
      { 
        name: "TGM", 
        data: this.chartData.tgm,
        color: '#0000ff' // Color azul para TGM
      }
    ];
  }
}
