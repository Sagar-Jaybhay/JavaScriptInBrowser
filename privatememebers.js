function DisplayFullname(firstname,lastname)
{

    // this are public fields
    this.FirstName=firstname;
    this.LastName=lastname;

    // this is Private variable which is accessible only inside of this constructor function.
    var fullname="";


    //private function
    var getFullName=function()
    {
        fullname=this.FirstName+" "+this.LastName;
        return fullname;
    }


    //privileged function
    this.previlageFunction=function()
    {
        return getFullName();
    }

    //public fucntion
    DisplayFullname.prototype.publicgetFullName=function(){
            return this.previlageFunction();
    }
}

var dis=new DisplayFullname("Sagar", "Jaybhay");
document.writeln(dis.FirstName); // Sagar
document.writeln(dis.LastName);// Jaybhay
document.writeln(dis.previlageFunction());// undefined
document.writeln("<br/>");
document.writeln(dis.fullname);//undefined
document.writeln("<br/>");
document.writeln(dis.publicgetFullName());//undefined