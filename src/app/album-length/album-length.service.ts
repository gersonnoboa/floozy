import { Injectable } from '@angular/core';
import * as albums from "../../assets/album-length-information.json";
import { plainToClass } from "class-transformer";
import { Album } from '../data/album/album';
import { ChartData, ChartDataset } from '../data/plot/chart-data.js';

@Injectable({
  providedIn: 'root'
})
export class AlbumLengthService {

  constructor() { }

  getAlbumLengthInformation() {
    let jsonAlbums = albums.default as Object[];
    let objectAlbums = plainToClass(Album, jsonAlbums);
    return this.getAlbumLengthInformationInDatasetFormat(objectAlbums);
  }

  getAlbumLengthInformationInDatasetFormat(albums: Album[]) {
    let chartData = new ChartData();
    let maxSongNumber = this.getMaxSongNumber(albums);

    let albumCount = albums.length;

    let colors = this.getRandomColors(maxSongNumber);
    for(let i = 0; i < albumCount; i++) {
      let album = albums[i];

      chartData.labels.push(album.title);
      for(let j = 0; j < album.songs.length; j++) {
        const song = album.songs[j];

        const dataset = new ChartDataset();
        dataset.label = song.title;
        dataset.fillDataWithNulls(albumCount);

        dataset.data[i] = song.getLengthInSeconds();
        dataset.backgroundColor = colors[j];
        chartData.datasets.push(dataset);
      }
    }

    console.log(chartData);
    return chartData;
  }

  getRandomColors(max: number) {
    let colors: string[] = [];
    for(let i = 0; i < max; i++) {
      colors.push(this.getRandomHexColor());
    }

    return colors;
  }
  /*getAlbumLengthInformationInDatasetFormat(albums: Album[]) {
    let chartData = new ChartData();
    let maxSongNumber = this.getMaxSongNumber(albums);
    for(let i = 0; i < maxSongNumber; i++) {
      chartData.datasets.push(new ChartDataset());
    }
    
    albums.forEach(album => {
      chartData.labels.push(album.title);
      for(let i = 0; i < maxSongNumber; i++) {
        const dataset = chartData.datasets[i];

        let length = this.getSongLength(album, i);

        if (length == 0) {
          dataset.data.push(0);
        } else {
          dataset.data.push(length);
        }
        
        let song = album.songs[i];
        if (song != undefined) {
          dataset.labels.push(song.title);
        }
        
        if (dataset.backgroundColor == undefined) {
          dataset.backgroundColor = this.getRandomHexColor();
        }
        
      }  
    });

    return chartData;
  }*/

  getRandomHexColor() {
    return "#" + Math.random().toString(16).slice(2, 8);
  }
  getMaxSongNumber(albums: Album[]) {
    const numberOfSongs = albums.map(x => x.getNumberOfSongs());
    return Math.max.apply(null, numberOfSongs);
  }

  getSongLength(album: Album, index: number) {
    let song = album.songs[index];
    if (song === undefined) { return 0; }
    return song.getLengthInSeconds();
  }
}
