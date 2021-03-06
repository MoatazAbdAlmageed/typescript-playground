import Company from "./classes/Company";
import Developer from "./classes/Developer";
import MobileDeveloper from "./classes/MobileDeveloper";
import { DeveloperPositions } from "./enums/DeveloperPositions";
let camelCase = new Company("camelCase", "Giza");
let Moataz = new Developer(
  "Moataz",
  29,
  DeveloperPositions["Fullstack DEVELOPER"],
  camelCase,
  ["HTML", "CSS", "JS", "NodeJS", "MongoDb"]
);
console.log(Moataz.hello());
camelCase.setEmployeesNumber(6);
console.log(Moataz.company.getEmployeesNumber());

// year ago (1/1/2020)
Moataz.age = 30;
let wuilt = new Company("wuilt", "6 October");

Moataz.setCompany(wuilt);
Moataz.setPosition(DeveloperPositions["MERN DEVELOPER"]);
console.log(Moataz.hello());
wuilt.setEmployeesNumber(16);
console.log("🚀🚀🚀🚀🚀🚀 wuilt.ownerAge");
console.log(wuilt.ownerAge);
console.log("----------------------------------------------------");
console.log();

console.log(Moataz.company.getEmployeesNumber());

let orchtech = new Company("orchtech", "Giza");

const abdo = new MobileDeveloper(
  "Abdo",
  29,
  DeveloperPositions["MERN DEVELOPER"],
  orchtech,
  ["HTML", "CSS", "JS", "Android"],
  true
);

console.log(abdo.hello());

// const car = new Car("BMW");
// car.start();
// car.stop();
// car.start();
// car.stop();

//  any

let x: any = 10;
x = "valid";
x = true;
console.log("🚀🚀🚀🚀🚀🚀 x");
console.log(x);
console.log("----------------------------------------------------");

let anyData: any[] = [1, 2, true];
anyData = ["222", 2];
console.log("🚀🚀🚀🚀🚀🚀 anyData");
console.log(anyData);
console.log("----------------------------------------------------");
console.log();

let objectAnyData: { name: any; age: number } = { name: "Moataz", age: 10 };
console.log("🚀🚀🚀🚀🚀🚀 objectAnyData");
console.log(objectAnyData);
console.log("----------------------------------------------------");
console.log();

let employee: [number, string, number] = [1, "Moataz", 1];
console.log("🚀🚀🚀🚀🚀🚀 employee");
console.log(employee);
console.log("----------------------------------------------------");
console.log();
