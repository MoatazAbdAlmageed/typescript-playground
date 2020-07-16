import Customer from "./Customer/Customer";

let customer = new Customer("Moataz", 29, "PHP web developer", "camelCase");
console.log(customer.hello());

// year ago (1/1/2020)
customer.setAge(30);
customer.setCompany("wuilt");
customer.setPosition("MERN developer");
console.log(customer.hello());
