import Company from "./Company";
import Developer from "./Developer";

class MobileDeveloper extends Developer {
  constructor(
    name: string,
    age: number,
    position: string,
    company: Company,
    // greeting: (msg: string) => string,
    skills: string[]
  ) {
    super(name, age, position, company, skills);
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
