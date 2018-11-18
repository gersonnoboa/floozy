import { TestBed } from '@angular/core/testing';

import { AlbumLengthService } from './album-length.service';
import { Song } from '../data/song/song';
import { Album } from '../data/album/album';

describe('AlbumLengthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Song,
      Album
    ]
  }));

  it('should be created', () => {
    const service: AlbumLengthService = TestBed.get(AlbumLengthService);
    expect(service).toBeTruthy();
  });

  it("should return the correct max number of songs", () => {
    const service: AlbumLengthService = TestBed.get(AlbumLengthService);

    const album1 = new Album();
    album1.songs = [new Song()];

    const album2 = new Album();
    album2.songs = [new Song(), new Song()];

    expect(service.getMaxSongNumber([album1, album2])).toBe(2);
  });

  it("should return correct album information in dataset format", () => {
    const service: AlbumLengthService = TestBed.get(AlbumLengthService);

    const song1 = new Song();
    song1.length = "4:00";
    const song2 = new Song();
    song2.length = "4:45";
    const album1 = new Album();
    album1.title = "Showbiz";
    album1.songs = [song1, song2];

    const song3 = new Song();
    song3.length = "4:30";
    const song4 = new Song();
    song4.length = "4:00";
    const song5 = new Song();
    song5.length = "5:00";
    const album2 = new Album();
    album2.title = "Origin";
    album2.songs = [song3, song4, song5];

    let chartData = service.getAlbumLengthInformationInDatasetFormat([album1, album2]);
    expect(chartData.datasets.length).toBe(5);
    expect(chartData.labels).toEqual(["Showbiz", "Origin"]);
    expect(chartData.datasets[0].data).toEqual([240, null]);
    expect(chartData.datasets[1].data).toEqual([285, null]);
    expect(chartData.datasets[2].data).toEqual([null, 270]);
    expect(chartData.datasets[3].data).toEqual([null, 240]);
    expect(chartData.datasets[4].data).toEqual([null, 300]);
  });
});
