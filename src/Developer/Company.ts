class Company {
  name: string;
  location?: string;

  constructor(name: string, location?: string) {
    this.name = name;
    if (location) {
      this.location = location;
    }
  }
}

export default Company;
