export class Message {
  title: string;
  message: string;
  id: number;
}

export function Message2(title, message, id){
  this.title = title;
  this.message = message;
  this.id = id;
}

const message2 = new Message2('title', 'message', 1);