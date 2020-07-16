import Company from "./Company";

interface IDeveloper {
  name: string;
  age: number;
  position: string;
  company: Company;
  skills: string[];
}
export default IDeveloper;
