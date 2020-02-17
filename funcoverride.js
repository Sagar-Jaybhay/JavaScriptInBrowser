function Employee(name)
{
    this.Name=name;   
}

Employee.prototype.getgreeting=function(){
    return "Hello, "+this.Name;
}