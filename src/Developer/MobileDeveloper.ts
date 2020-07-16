import Company from "./Company";
import Developer from "./Developer";

class MobileDeveloper extends Developer {
  native: boolean;
  constructor(
    name: string,
    age: number,
    position: string,
    company: Company,
    // greeting: (msg: string) => string,
    skills: string[],
    native: boolean
  ) {
    super(name, age, position, company, skills);
    this.native = native;
  }

  hello(): string {
    return ` I'm Mobile developer 
    ${this.getName()}
    ${this.age}
    ${this.getCompany()}
    ${this.getPosition()}
    `;
  }
}

export default MobileDeveloper;
