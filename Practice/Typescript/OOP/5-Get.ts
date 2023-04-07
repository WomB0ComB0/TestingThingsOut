// Getters and setters in typescript are the same as in javascript (ES6)
// Getters and setters are functions that are used to get and set the values of an object's internal properties, respectively.
export class Song {
  title: string;
  lyric: string;
  length: number;
  isLiked: boolean;
  constructor(title, lyric, length, isLiked){
    this.title = title;
    this.lyric = lyric;
    this.length = length.toFixed(2);
    this.isLiked = false; // default value
  }
  get titleStatus(): string{ // getter
    const songLiked = (this.isLiked == true) ? 'liked' : 'not liked';
    return `The song ${this.title} is ${songLiked}`;
  }
  previewLyric(): string{ // Method
    return `${this.lyric.slice(0, 10)}...`;
  }
}
const lyric = new Song(
  'Two fictitious stories','Another win on a page, I make it through these hardships like i\'m Phineas Gage. My biggest hater most likely a hideous face.', 7.21, true
);
lyric.titleStatus;
lyric.previewLyric();