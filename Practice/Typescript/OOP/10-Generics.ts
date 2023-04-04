// Generics are a way to make components work with any data type and not restrict to one data type.
export class User<T> {
    firstName: string;
    lastName: string;
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    email: string;
    public classicUserdata: T;
    public mergeUserdata(params: T): void {
      const { firstName, lastName, email } = this;  
      this.classicUserdata = { firstName, lastName, email, ...params };
    }
}
interface ClassicUser {
  name: { first: string, last: string };
}
interface ClassicUser2 {
  name: { first: string, middle: string, last: string };
}
const user1 = new User<ClassicUser>();
user1.mergeUserdata({ name: { first: 'John', last: 'Doe' } });
user1.classicUserdata.name.first;
const user2 = new User<ClassicUser2>();
user2.mergeUserdata({ name: { first: 'Jane', middle:'Penelope', last: 'Doe' } });
user2.classicUserdata.name.middle;