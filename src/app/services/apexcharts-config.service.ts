import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApexchartsConfigService {

  constructor() { 

    (window as any)['Apex'] = {
    chart: {
      foreColor: '#ccc',
      toolbar: { show: false },
    },
    stroke: { width: 3 },
    dataLabels: { enabled: false },
    tooltip: { theme: 'dark' },
    grid: {
      borderColor: "#535A6C",
      xaxis: { lines: { show: true } }
    }
  };
}
}
