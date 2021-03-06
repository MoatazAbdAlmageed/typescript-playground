import ICompany from "../interfaces/ICompany";

class Company implements ICompany {
  constructor(
    public name: string,
    public location?: string,
    public employeesNumber?: number,
    readonly ownerAge: number = 5
  ) {}

  setEmployeesNumber(employeesNumber: number) {
    this.employeesNumber = employeesNumber;
  }
  getEmployeesNumber() {
    return this.employeesNumber;
  }
}

export default Company;
