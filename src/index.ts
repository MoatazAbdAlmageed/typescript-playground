import Company from "./Developer/Company";
import Developer from "./Developer/Developer";
let camelCase = new Company("camelCase", "Giza");
let Moataz = new Developer("Moataz", 29, "PHP web developer", camelCase, [
  "HTML",
  "CSS",
  "JS",
  "NodeJS",
  "MongoDb",
]);
console.log(Moataz.hello());

// year ago (1/1/2020)
Moataz.age = 30;
let wuilt = new Company("wuilt", "6 October");

Moataz.setCompany(wuilt);
Moataz.setPosition("MERN developer");
console.log(Moataz.hello());

let orchtech = new Company("orchtech", "Giza");

const abdo = new Developer("Abdo", 29, "Mobile Developer", orchtech, [
  "HTML",
  "CSS",
  "JS",
  "Android",
]);

console.log(abdo.hello());

// const car = new Car("BMW");
// car.start();
// car.stop();
// car.start();
// car.stop();
