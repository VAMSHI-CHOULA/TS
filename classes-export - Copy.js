"use strict";
exports.__esModule = true;
exports.Employees = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + "" + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
var aperson = new Person('Vamshi', 'Choula');
console.log(aperson.getFullName());
var Employees = /** @class */ (function () {
    function Employees(firstn, lastname, aage) {
        this.firstName = firstn;
        this.lastName = lastname;
        this.age = aage;
    }
    Employees.prototype.getfullName = function () {
        return this.firstName + " " + this.lastName + " " + this.age + " " + this.age;
    };
    return Employees;
}());
exports.Employees = Employees;
var empn = new Employees("Santhosh", "Choula", 0);
console.log(empn.getfullName());
