import { Song } from "../song/song";
import { Type } from "class-transformer";

export class Album {
  title: string;

  @Type(() => Song)
  songs: Song[];

  getNumberOfSongs() {
    return this.songs.length;
  }
}