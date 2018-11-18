import { TestBed } from '@angular/core/testing';
import { Album } from './album';
import { Song } from '../song/song';

describe('Album', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Album
    ]
  }));

  it('should be created', () => {
    const album: Album = TestBed.get(Album);
    expect(album).toBeTruthy();
  });

  it('should return the correct number of songs inside an album', () => {
    const album = new Album();
    album.songs = [new Song(), new Song(), new Song()];

    expect(album.getNumberOfSongs()).toBe(3);
  });
});
