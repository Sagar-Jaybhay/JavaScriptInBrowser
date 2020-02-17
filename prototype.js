function Employee(name)
{

    this.FullName=name;
}

var emp=new Employee("SAGAR JAYBHAY");
// emp.greeting=function(){
//     return "Hello, "+this.FullName;
// }

Employee.prototype.greeting=function(){
    return "Hello, "+this.FullName;
}



var emp2=new Employee("XYZ");
emp2.greeting();