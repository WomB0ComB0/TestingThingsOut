// Set is a collection of unique values, no duplicates allowed. Update data while still providing the same interface
// Opposite of get, set is used to set a value
export class Song {
  title: string; //◀️ Property to store the title of the song
  lyric: string; //◀️ Property to store the lyric of the song
  length: number; //◀️ Property to store the length of the song
  whenLiked: Date; //◀️ Property to store the date when the song was liked
  private _isLiked: boolean; // private property to store the value of isLiked property
  set isLiked(value: boolean){ //◀️ Setter
    if(value === true){
      this.whenLiked = new Date(); //◀️ Set the date when the song was liked
      console.log('You liked the song');
    }else{
      console.log('You disliked the song');
    }
    this._isLiked = value;
  }
  get isLiked(): boolean{ //◀️ Getter
    return this._isLiked;
  }
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
  previewLyric(): string{  // Method
    return `${this.lyric.slice(0, 10)}...`;
  }
}
const lyric = new Song(
  'Two fictitious stories','Another win on a page, I make it through these hardships like i\'m Phineas Gage. My biggest hater most likely a hideous face.', 7.21, true
);
lyric.isLiked = true;
lyric.titleStatus;
lyric.previewLyric();