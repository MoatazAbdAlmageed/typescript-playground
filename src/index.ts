import Company from "./Developer/Company";
import Customer from "./Developer/Developer";
let camelCase = new Company("camelCase", "Giza");
let customer = new Customer("Moataz", 29, "PHP web developer", camelCase, [
  "HTML",
  "CSS",
  "JS",
  "NodeJS",
  "MongoDb",
]);
console.log(customer.hello());

// year ago (1/1/2020)
customer.age = 30;
let wuilt = new Company("wuilt", "6 October");

customer.setCompany(wuilt);
customer.setPosition("MERN developer");
console.log(customer.hello());

// const car = new Car("BMW");
// car.start();
// car.stop();
// car.start();
// car.stop();
