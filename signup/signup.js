
var signup= document.querySelector("#signUpForm");
signup.addEventListener("submit",function()
{
event.preventDefault();
var userobj={
    email:signup.email.value,
    pass: signup.password.value,
};

    alert("signup successfull");
    localStorage.setItem("userId",JSON.stringify(userobj));
    window.location.assign("./index.html");

});
var y=document.querySelector("#first>button");

y.addEventListener("click",function()
{
    window.location.assign("./index.html");
});

