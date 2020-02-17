var SagarJaybhay=SagarJaybhay || {};
SagarJaybhay.TeamA=SagarJaybhay.TeamA || {};

SagarJaybhay.TeamA.CustomerInfo=function (firstname,lastname){

    this.FirstName=firstname;
    this.LastName=lastname;

    this.getFullName=function(){
        return this.FirstName+" "+this.LastName;
    }
    return this;
}