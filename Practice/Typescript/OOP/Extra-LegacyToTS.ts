export class User {
  firstName: string;
  lastName: string;
  email: string;
  constructor(firstName: string, lastName: string, email: string) {}
  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}
// Same as constuctor above
function UserLegacy(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;

  this.doesEmailMatch = function (email) {
    return this.email === email;
  }
}
const user = new UserLegacy('John', 'Doe', 'JohnDoe2001@gmail.com');
user.firstName;