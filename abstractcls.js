var Shape=function(nameofshape)
{
    this.shapeName=nameofshape;
    throw new Error("You can't create object of this abstract class.")   ;

}

Shape.prototype.draw=function()
{
    return "Drawing the Shape "+this.shapeName;
}

var Circle=function(name)
{
    this.shapeName=name;
}

Circle.prototype=Object.create(Shape.prototype);


var circle=new Circle("Circle");
document.writeln("<br/>");
document.writeln("is circle instance of Circle "+(circle instanceof Circle));
document.writeln("<br/>");
document.writeln("is circle instance of Shape "+(circle instanceof Shape))
document.writeln("<br/>");
document.writeln(circle.draw());

