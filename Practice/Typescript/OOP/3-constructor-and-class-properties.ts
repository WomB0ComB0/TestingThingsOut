export class Message {
  title: string;
  message: string;
  isSent: boolean;
  id: number;

  constructor(title, message, id){
    this.title = title;
    this.message = message;
    this.id = id;
    this.isSent = false;
  }
}
const message = new Message('title', 'message', 1);