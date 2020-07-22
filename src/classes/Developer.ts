import { DeveloperPositions } from "../enums/DeveloperPositions";
import IDeveloper from "../interfaces/IDeveloper";
import Company from "./Company";
export default class Developer implements IDeveloper {
  constructor(
    public name: string,
    private _age: number,
    public position: DeveloperPositions,
    public company: Company,
    // greeting: (msg: string) => string,
    public skills: string[]
  ) {}
  native?: boolean | undefined;
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

  setPosition(position: DeveloperPositions) {
    this.position = position;
  }

  getCompany(): string {
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
