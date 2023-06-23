export class Animal {
  constructor(public name: string) {}

  move() {
    console.log("Moving along!");
  }

  greeting() {
    return `Hello, I 'm ${this.name}`;
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
  }
}

const fifi = new Animal("Fifi");
fifi.move();
console.log(fifi.greeting());

const boby = new Dog("Boby", "Fernando");
boby.move();
console.log(boby.greeting());
boby.woof(5);
console.log(boby.owner);
