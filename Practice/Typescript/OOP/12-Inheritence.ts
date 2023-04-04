/*
1. Use the User class below and create a new class called Admin that extends the User class.
2. Create a new instance of Admin and call the introduce method.
3. Create a GUest class that implements the User interface.
*/
export class User {
    firstName: string;
    lastName: string;
    email: string;
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    doesEmailMatch = (email: string): boolean => {
        return this.email === email;
    }
}

export class Admin extends User {
    role: string;
    constructor(firstName: string, lastName: string, email: string) {
        super(firstName, lastName, email);
        this.role = 'admin';
    }
}
export class Guest implements User {
    firstName: string;
    lastName: string;
    email: string;
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    doesEmailMatch = (email: string): boolean => {
        return this.email === email;
    }
}