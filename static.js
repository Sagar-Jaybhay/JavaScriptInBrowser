function Shape(){

    //here count is variable and it is static declaration contains constructor function name
    Shape.Count=++Shape.Count||1;

    // this is static function 
    Shape.GetTotalCount=function(){
        return Shape.Count;
    }

    // below is the instance variable
    this.val=0;
}


var shape1=new Shape();
var shape2=new Shape();
var shape3=new Shape();

alert(Shape.GetTotalCount());


