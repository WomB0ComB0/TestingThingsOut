// Static method  in tpescript class is a method which can be invoked without creating an instance of the class.
export class Message {
  title: string;
  message: string;
  isSent: boolean;
}
export class Messages extends Array<Message>{
  // Will need instantiation to be invoked
  public getValidMessages(messages: Message[]): Message[] {
    return this.filter((value) => value.message.trim().length > 0);
  }
  // static method is by default public
  static getValidMessage (messages: Message[]): Message[] {
    return messages.filter((value) => value.message.trim().length > 0);
  }
}
Messages.getValidMessage([]);