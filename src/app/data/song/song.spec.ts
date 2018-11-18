import { TestBed } from '@angular/core/testing';
import { Song } from './song';

describe('Song', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Song
    ]
  }));

  it('should be created', () => {
    const song: Song = TestBed.get(Song);
    expect(song).toBeTruthy();
  });

  it('should calculate the seconds correctly', () => {
    const song = new Song();
    song.length = "3:50";
    expect(song.getLengthInSeconds()).toBe(230);
  })
});
