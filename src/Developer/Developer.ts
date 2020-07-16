import Company from "./Company";
import IDeveloper from "./IDeveloper";

class Developer implements IDeveloper {
  name: string;
  private _age: number;
  position: string;
  company: Company;
  // greeting: (msg: string) => string;
  skills: string[];

  constructor(
    name: string,
    age: number,
    position: string,
    company: Company,
    // greeting: (msg: string) => string,
    skills: string[]
  ) {
    this.name = name;
    this._age = age;
    this.position = position;
    this.company = company;
    // this.greeting = (greeting) => `${greeting} ${this.name}`;
    this.skills = skills;
  }
  getName() {
    return `Hello my name is  ${this.name}`;
  }

  setName(name: string) {
    this.name = name;
  }

  get age() {
    // return `I have ${this._age} years old `;
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }

  getPosition() {
    return `I'm  working as ${this.position}`;
  }

  setPosition(position: string) {
    this.position = position;
  }

  getCompany() {
    const { name, location } = this.company;
    return `I'm  working for ${name} company ,it's location is ${location}`;
  }

  setCompany(company: Company) {
    this.company = company;
  }

  hello(): string {
    return ` 
    ${this.getName()}
    ${this.age}
    ${this.getCompany()}
    ${this.getPosition()}
    `;
  }
}

export default Developer;
