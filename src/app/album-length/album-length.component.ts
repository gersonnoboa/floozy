import { Component, OnInit, ElementRef } from '@angular/core';
import Chart from 'chart.js';
import { AlbumLengthService } from './album-length.service';
import { ChartData } from '../data/plot/chart-data';

@Component({
  selector: 'app-album-length',
  templateUrl: './album-length.component.html',
  styleUrls: ['./album-length.component.scss']
})
export class AlbumLengthComponent implements OnInit {

  chart = [];

  constructor(private elementRef: ElementRef, private service: AlbumLengthService) { }

  ngOnInit() {
    const chartData = this.getAlbumData();
    this.initializeChart(chartData);
  }

  getAlbumData() {
    const information = this.service.getAlbumLengthInformation();
    return information;
  }

  initializeChart(chartData: ChartData) {
    this.chart = new Chart(this.getChartContext(), this.getChartConfiguration(chartData));
  }

  getChartContext() {
    return this.elementRef.nativeElement.querySelector("#chart-canvas");
  }

  getChartConfiguration(chartData: ChartData) {
    return {
      type: 'bar',
      data: chartData,
      options: this.getChartOptions()
    }
  }

  getChartOptions() {
    return {
      responsive: true,
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      },
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }
  }
}
