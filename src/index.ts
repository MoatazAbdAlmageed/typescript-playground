import Car from "./Car/Car";
import Customer from "./Developer/Developer";

let customer = new Customer("Moataz", 29, "PHP web developer", "camelCase", [
  "HTML",
  "CSS",
  "JS",
  "NodeJS",
  "MongoDb",
]);
console.log(customer.hello());

// year ago (1/1/2020)
customer.setAge(30);
customer.setCompany("wuilt");
customer.setPosition("MERN developer");
console.log(customer.hello());

const car = new Car("BMW");
car.start();
car.stop();
car.start();
car.stop();
