export class Message{
  public readonly id: number; 
  title: string;
  message: string;
  isSent: boolean;
  constructor(id: number){
    this.id = id;
  }
}
const message = new Message(123);
message.id;
// Error: Cannot assign to 'id' because it is a read-only property.
// message.id = 123;