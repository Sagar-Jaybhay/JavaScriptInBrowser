function Employee(name,salary)
{
    var _name=name;
    var _salary=salary;


    Object.defineProperty(this,"salary",{
        get:function(){
            return _salary;
        },
        set:function(value){
            if(value>0&&value<100000)
            _salary=salary;
            else
            alert("Invalid Salary;")
        }
    });


    Object.defineProperty(this,"name",{
        get:function(){
                return _name;
            }
    });

}

var emp=new Employee("Sagar Jaybhay",-1);
emp.salary=-1; //not set salary because we use conditions in that properties
emp.name="Xyz"; // not able to set the xyz name

alert(emp._name+" "+emp.salary)
