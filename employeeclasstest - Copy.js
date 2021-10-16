// import { Employees } from "./classes-export";
/* class Employees{
    //Data members
     fname:string;
     lname:string;
     employeeId:number;
     contact:number;
     constructor(_fname:string,_lname:string){
         this.fname=_fname;
         this.lname=_lname;
     }
     getFullName(): string{
        return  this.fname+ " "+this.lname;
     }
}
var obj= new Employees("Vamshi","Choula");
console.log(obj.getFullName());
 */
/*I will ask some questions*/
// 1.
// what is an object?
// a: 
// Object is the physical entity. c
// class is a physical entity or object entity?
// a: object entity .
// It is case sensitive
// class is correct Class is wrong.
// classname should be always start with capital letter.
// where the datamembers should we write inside th class or inside th contructor?
// a:
// Inside the class we are writing the data members but not inside the constructor ok.
// Is that constructor is a function ?
// a:
// 1. Yes constructor is a function.
// 2.
// It is the pre defined function.
// constructor function is always declaired with the keyword called constructor(){}
// 2.
// Object inside only this keyword should work. this is used inside the current object y/n?
// a: yes Object inside (constructor inside) we should write the this.PerformanceMeasure, this.lname like this ok understood.
// adhi physical entity inka avo avo anukunta vunde kadha avvi chudali malla vinali raa y/n?
// a: yes vinta raa. thappaknda vinta.
// inside the block scope var created outside let same variable ame you should writing means outside the block local score let value should be displayed ok.
/*
inside function you write var it wont effect outside the block outout y/n?
a: without function means it will get output otherwise it wont get output. */
var Employees = /** @class */ (function () {
    function Employees(_fName, _lName) {
        this.fname = _fName;
        this.lname = _lName;
    }
    //member function
    Employees.prototype.getFullName = function () {
        return this.fname + " " + this.lname;
    };
    Employees.prototype.getmeFirstName = function () {
        return this.fname;
    };
    return Employees;
}());
var obj = new Employees("Roopa", "Choula");
var obj2 = new Employees("Vamshi", "Choula");
var obj3 = new Employees("Santhosh", "Choula");
console.log(obj.getFullName());
console.log(obj3.getmeFirstName());
/*What you are missing?
// a:
// member function lo declaire chestunnav kani adhi function laga rayatledu functiin name laga gani inka variable name laga rastunnavu that is wrong ok.
*/
// class consists of variable yes or no?
// a: yes. It consists of variables. correct.
