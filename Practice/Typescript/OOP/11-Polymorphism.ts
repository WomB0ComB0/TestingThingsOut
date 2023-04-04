// Polymorphism in TypeScript is the ability of a programming language to present the same interface for several different underlying data types.
/* 
1. Method / param overriding -> child overrides parent method 
2. method overloading -> same name methods with different params ( not supported in Js nor TS)
3. Interface / abstract classes implements / extends -> child implements / extends parent interface / abstract class 
*/
export class User {
  firstName:string;
  lastName:string;
  email:string;
  constructor(firstName:string, lastName:string, email:string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  getFullName = ():string => {
    return `${this.firstName} ${this.lastName}`;
  }
  canSendMessage = ():boolean => {
    return true;
  }
  introduce = ():string => {
    return `Hello, my name is ${this.getFullName()}.`;
  }
}
class BaseUser extends User {
  protected role: string;
  public hasAllAccess = ():boolean => {
    return this.role === 'admin';
  }
}
export class SuperAdmin extends BaseUser {
  constructor(firstName: string, lastName: string, email: string) {
    super(firstName, lastName, email);
    this.role = 'admin';
  }
  // override
  public hasAllAccess = (user?: User):boolean => {
    return true;
  }
  // overloading failure
  // public hasAllAccess(user:user) {
  //   return user.age > 18 && this.role === 'admin';
  // }
}
export class Guest implements User {
  name: string;
  age: number;
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  getFullName = ():string => {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }
  canSendMessage = ():boolean => {
    return false;
  }
  introduce = ():string => {
    return `Hello, my name is ${this.getFullName()}.`;
  }
  constructor(firstName: string, lastName: string, age: number, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }   
}