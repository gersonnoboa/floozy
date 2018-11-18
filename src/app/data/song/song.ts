export class Song {
  title: string;
  length: string;

  getLengthInSeconds() {
    const durationComponents = this.length.split(":");

    const minutesComponent = parseInt(durationComponents[0]);
    const minutesInSeconds = minutesComponent * 60;
    const secondsComponent = parseInt(durationComponents[1]);

    return minutesInSeconds + secondsComponent;
  }
}