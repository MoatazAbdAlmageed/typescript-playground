import Company from "./Company";

interface IDeveloper {
  name: string;
  age: number;
  position: string;
  company: Company;
  skills: string[];
  native?: boolean;
}
export default IDeveloper;
