import { DeveloperPositions } from "./../enums/DeveloperPositions";
import ICompany from "./ICompany";

interface IDeveloper {
  name: string;
  age: number;
  position: DeveloperPositions;
  company: ICompany;
  skills: string[];
  native?: boolean;
}
export default IDeveloper;
