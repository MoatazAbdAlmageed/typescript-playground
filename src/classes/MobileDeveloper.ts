import { DeveloperPositions } from "./../enums/DeveloperPositions";
import Company from "./Company";
import Developer from "./Developer";

class MobileDeveloper extends Developer {
  constructor(
    name: string,
    age: number,
    position: DeveloperPositions,
    company: Company,
    // greeting: (msg: string) => string,
    skills: string[],
    native: boolean
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
