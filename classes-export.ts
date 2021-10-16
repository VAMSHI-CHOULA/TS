export class Person{
    firstName:string;
    lastName:string;
    constructor(firstname: string, lastname:string){
        this.firstName=firstname;
        this.lastName=lastname;
    }
    getFullName(){
        return this.firstName+ ""+this.lastName;
    }
}
var aperson=new Person('Vamshi','Choula');
console.log(aperson.getFullName());

 export class Employees{
    firstName:string;
    lastName:string;
    age:any;
    constructor(firstn:string, lastname:string, aage:number){
        this.firstName=firstn;
        this.lastName=lastname;
        this.age=aage;
       
    }
    getfullName(){
            return this.firstName+ " "+this.lastName+" "+this.age+" " +this.age;
    }
}
var empn=new Employees("Santhosh", "Choula",50);
console.log(empn.getfullName())