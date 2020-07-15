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

  setAge(age: number): number {
    this.age = age;
    return this.age;
  }
  setCompany(company: string): string {
    this.company = company;
    return this.company;
  }
  setPosition(position: string): string {
    this.position = position;
    return this.position;
  }
}

let customer = new Customer("maoataz", 29, "PHP web developer", "camelCase");
console.log(customer);

// year ago (1/1/2020)
customer.setAge(30);
customer.setCompany("wuilt");
customer.setPosition("MERN developer");

console.log(customer);
