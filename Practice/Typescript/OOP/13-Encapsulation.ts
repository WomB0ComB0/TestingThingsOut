// Private, Public, Protected
// Public: Accessible from anywhere
// Private: Accessible only from within the class
// Protected: Accessible from within the class and from classes derived from that class
export class Animal {
  public species: string;
  name: string;
  age: number;
  constructor(species: string, name: string, age: number) {
    this.age = age;
    this.name = name;
    this.species = species;
  }
}
// Child
export class Cat extends Animal {
  constructor(data: {species:string, name: string,age: number}) {
    super(data.species, data.name, data.age);
  }
  public get catAge(): number {
    return this.age * 7;
  }
  get birthday(): number {
    return this.age + 1;
  }
  public meow = (): string => {
    return 'Meow!';
  }
}
// Shape
export class Dog implements Animal {
  species: string;
  name: string;
  age: number;
  constructor(species: string, name: string, age: number) {
    this.age = age;
    this.name = name;
    this.species = species;
  }
  public get dogAge(): number {
    return this.age * 7;
  }
  public bark = (): string => {
    return 'Woof!';
  }
}