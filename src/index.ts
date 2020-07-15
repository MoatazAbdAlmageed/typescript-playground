import Customer from "./Customer";

let customer = new Customer("maoataz", 29, "PHP web developer", "camelCase");
console.log(customer);

// year ago (1/1/2020)
customer.setAge(30);
customer.setCompany("wuilt");
customer.setPosition("MERN developer");

console.log(customer);
