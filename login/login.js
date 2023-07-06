var login= document.querySelector("#login");
login.addEventListener("submit",function()
{
event.preventDefault();

if(login.lemail.value==="admin@gmail.com")
{ if(login.lpass.value==="admin")
    {
        window.location.assign("./admin.html");

    }
    else{
        alert("wrong admin password");
    }
   
}
else{
    var userobj=JSON.parse(localStorage.getItem("userId"));
   
    if(userobj.email===login.lemail.value)
    {
        //
        //localStorage.setItem("userobj",JSON.stringify(userobj));
        if(userobj.pass===login.lpass.value)
        {
            alert("login successfull");
            window.location.assign("./index.html");
        }
        else{
            alert("not matched");
        }
    }
    else{
        alert("user not registered");
    }
}



});