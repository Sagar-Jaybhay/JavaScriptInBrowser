function setCookies(){

    var firstName=document.getElementById('firstname').value;
   // alert(firstName);
    if(firstName!=""){
        debugger
        document.getElementById('firstname').value=firstName;
        document.cookie="fname = "+firstName+"; expires=Mon, 17 Feb 2020 00:21:00 UTC;";
    }
}

window.onload=function(){

    alert(this.navigator.cookieEnabled)
    var cookiearray=document.cookie.split('=')
    document.getElementById('firstname').value=cookiearray[1]
}