var SagarJaybhay=SagarJaybhay || {};
SagarJaybhay.TeamB=SagarJaybhay.TeamB || {};


SagarJaybhay.TeamB.CustomerInfo=function(firstname,middleName,lastname){

    this.FirstName=firstname;
    this.LastName=lastname;
    this.MiddleName=middleName;
    this.getFullName=function(){
        return this.FirstName+" "+ this.MiddleName+" " +this.LastName;
    }
    return this;
}