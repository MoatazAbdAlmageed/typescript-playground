var Customer = /** @class */ (function () {
    function Customer(name, age) {
        this.name = name;
        this.age = age;
    }
    Customer.prototype.hello = function () {
        return "hello my name is " + this.name;
    };
    return Customer;
}());
var moataz = new Customer("maoataz", 30);
console.log(moataz);
console.log(moataz.hello());
