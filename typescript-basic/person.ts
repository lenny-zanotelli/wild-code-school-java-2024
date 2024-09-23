export class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public tellMyName() {
    return `I am ${this.name}`;
  }
  public tellMyAge() {
    return `I am ${this.age} years old`;
  }
}
