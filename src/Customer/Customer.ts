import ICustomer from "./ICustomer";

class Customer implements ICustomer {
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
  getName() {
    return `Hello my name is  ${this.name}`;
  }

  setName(name: string) {
    this.name = name;
  }

  getAge() {
    return `I have ${this.age} years old `;
  }

  setAge(age: number) {
    this.age = age;
  }

  getPosition() {
    return `I'm  working as ${this.position}`;
  }

  setPosition(position: string) {
    this.position = position;
  }

  getCompany() {
    return `I'm  working for ${this.company} company`;
  }

  setCompany(company: string) {
    this.company = company;
  }

  hello(): string {
    return ` ${this.getName()}
    ${this.getAge()}
    ${this.getCompany()}
    ${this.getPosition()}
    `;
  }
}

export default Customer;
