class Customer {
  name: string;
  age: number;
  position: string;
  company: string;

  constructor(name: string, age: number, position: string, company: string) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.company = company;
  }
  hello(): string {
    return `hello my name  is ${this.name}
    I have ${this.age} years old
    I'm a  ${this.position} ad ${this.company}
    `;
  }
}
let customer = new Customer("maoataz", 30, "web developer", "Wuilt");
console.log(customer);
console.log(customer.hello());
