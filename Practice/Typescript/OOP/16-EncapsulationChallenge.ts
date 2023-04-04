/*
1. Add an appropriate readonly property to the User class.
*/
export class User {
  public readonly id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  protected password: string;
  protected DateOfBirth: Date;
  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  public doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}
export class Adnim extends User {
  public readonly yearBorn: number;
  constructor(firstName:string, lastName:string, email:string, password:string, DateOfBirth:Date){
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.yearBorn = this.getYear();
  }
  private getYear(): number {
    return this.DateOfBirth.getFullYear();
  }
}