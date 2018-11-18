export class ChartData {
  labels: string[];
  datasets: ChartDataset[];

  constructor() {
    this.labels = [];
    this.datasets = [];
  }
}

export class ChartDataset {
  data: number[];
  backgroundColor: string;
  label: string;

  constructor() {
    this.data = [];
  }

  fillDataWithNulls(nullCount: number) {
    for(let i = 0; i<nullCount; i++) {
      this.data.push(null);
    }
  }
}
