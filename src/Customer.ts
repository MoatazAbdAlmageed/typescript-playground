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

export default Customer;
