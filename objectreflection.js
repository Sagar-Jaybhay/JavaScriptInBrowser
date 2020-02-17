var Student=function(firstname,lastname,id)
{
    this.FirstName=firstname;
    this.LastName=lastname;
    this.Id=id;
}

Student.prototype.getFullname=function(){
    return this.FirstName+" "+this.LastName;
}

Student.prototype.getID=function(){
    return this.Id;
}

var stud=new Student("Sagar","Jaybhay",101);

document.writeln("Below are the properties");
for(property in stud)
{
    document.writeln("<br/>");
    document.writeln(property);
}
document.writeln("<HR>");
document.writeln("Below are the properties with values");
for(property in stud)
{
    document.writeln("<br/>");
    document.writeln(property+ " : "+stud[property])
}

