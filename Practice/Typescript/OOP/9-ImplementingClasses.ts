// Base / Parent Class
export class Owner {
  firstName: string;
  lastName: string;
  age: number;
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getAge(): number {
    return this.age;
  }
  introduce(): string {
    return `Hello, my name is ${this.getFullName()} and I am ${this.getAge()} years old.`;
  }
}
export class Animal {
    name: string;
    species: string;
    age: number;
    status: string;
    constructor(name: string, species: string, age: number, status: string) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.status = status;
    }
    // Implement a condition where if the pet is deceased, it will not be able to make a sound. And the dialogue is different.
}
export class Dog extends Animal {
    constructor(data: {name: string, species: string, age: number, status: string}) {
        super(data.name, data.species, data.age, data.status);
    }
    bark(): string{
        return 'Woof woof!';
    }
}
export class Cat extends Animal {
    constructor(data: {name: string, species: string, age: number, status: string}) {
        super(data.name, data.species, data.age, data.status);
    }
    meow(): string{
      return 'Meow meow!';
    }
}
export default function main(): string {
const owner = new Owner('John', 'Doe', 30);
const dog = new Dog({name: 'Bingo', species: 'Dog', age: 5, status: 'Alive'});
const cat = new Cat({name: 'Tom', species: 'Cat', age: 5, status: 'Alive'});
function checkSpecies(animal: Animal): string {
  if (animal.species === 'Dog') {
    return dog.bark();
  } else if (animal.species === 'Cat') {
    return cat.meow();
  } else {
    return 'They\'re shy :).';
  }
}
function Introduction(owner: Owner, animal: Animal): string {
    return `${owner.introduce()} This is my ${animal.species}, ${animal.name}, and they're ${animal.age} years old.\n${checkSpecies(animal)}`;
}
return (Introduction(owner, cat));

}