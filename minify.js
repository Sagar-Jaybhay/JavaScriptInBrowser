//Inhertiance example 
class person{ 
	constructor(name){ 
		this.name = name; 
	} 
	//method to return the string 
	toString(){ 
		return (`Name of person: ${this.name}`); 
	} 
} 
class student extends person{ 
	constructor(name,id){ 
		//super keyword to for calling above class constructor 
		super(name); 
		this.id = id; 
	} 
	toString(){ 
		return (`${super.toString()},Student ID: ${this.id}`); 
	} 
} 
let student1 = new student('<b>Sagar Jaybhay</b>',22); 
document.writeln(student1.toString()); 














// //encapsulation example 
// class person{ 
// 	constructor(name,id){ 
// 		this.name = name; 
// 		this.id = id; 
// 	} 
// 	add_Address(add){ 
// 		this.add = add; 
// 	} 
// 	getDetails(){ 
// 		document.writeln(`Name is ${this.name},Address is: ${this.add}`); 
// 	} 
// } 

// let person1 = new person('Sagar Jaybhay',31); 
// person1.add_Address('Pune'); 
// person1.getDetails(); 


















// Defining class using es6 
// class Vehicle { 
//     constructor(name, maker, engine) { 
//         this.name = name; 
//         this.maker = maker; 
//         this.engine = engine; 
//     } 
//     getDetails(){ 
//         return (`The name of the bike is ${this.name}.`) 
//     } 
//     } 
//     // Making object with the help of the constructor 
//     let car = new Vehicle('Balleno', 'Maruti Suzuki', '1340cc'); 
    
    
//     document.writeln(car.name); 
//     document.writeln("<br/>");
//     document.writeln(car.maker); 
//     document.writeln("<br/>");
//     document.writeln(car.getDetails()); 
    




// var student= {
// FirstName:"Sagar",
// LastName:"Jaybhay",
// getFullName:function(){
//     return this.FirstName+"-"+this.LastName;
// }
// }

// document.writeln("<br/>");
// document.writeln(student.FirstName)
// document.writeln("<br/>")
// document.writeln(student.LastName)
// document.writeln("<br/>")
// document.writeln(student.getFullName())
// document.writeln("<br/>")





// function Student(firstName, lastName)
// {

//     this.FirstName=firstName;
//     this.LastName=lastName;

//     this.getFullName=function ()
//     {       
//         return this.FirstName+" - "+this.LastName;
//     }
// }

// var s =new Student('x','y');


// document.writeln(s.FirstName)
// document.writeln("<br/>")

// document.writeln(s.LastName)
// document.writeln("<br/>")

// document.writeln(s.getFullName())