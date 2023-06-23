export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log("Moving along!");
  }

  greeting() {
    return `Hello, I 'm ${this.name}`;
  }

  protected doSomething() {
    console.log("dooo");
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log("Woof!");
    }
    this.doSomething();
  }

  move() {
    console.log("Moving as a dog");
    super.move();
  }
}

const boby = new Dog("Boby", "Fernando");
// boby.name = "Firulais";
console.log(boby.greeting());
boby.woof(3);
boby.move();
