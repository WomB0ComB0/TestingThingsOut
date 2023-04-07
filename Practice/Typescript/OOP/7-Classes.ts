class User {
    firstName: string;
    lastName: string;
    email: string;
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value: string) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
    doesEmailMatch(email: string): boolean {
        return this.email === email;
    }
}