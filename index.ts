class Customer {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  hello() {
    return `hello my name is ${this.name}`;
  }
}

let moataz = new Customer("maoataz", 30);

console.log(moataz);
console.log(moataz.hello());
