// prototypes in typescript are classes in javascript (ES6)
export class Message {  // class declaration
  title: string;
  message: string;
  id: number;
}
export function Message2(title, message, id){ // class expression
  this.title = title;
  this.message = message;
  this.id = id;
}
const message2 = new Message2('title', 'message', 1);