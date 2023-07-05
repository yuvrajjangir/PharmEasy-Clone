var show=JSON.parse(localStorage.getItem("showelement"))||[];
console.log(show);
     function update(array){
 
    var maindiv=document.querySelector("#container");
    array.forEach(function(element){
var newdiv=document.createElement("div");
var img=document.createElement("img");
var name=document.createElement("h3");
var sprice=document.createElement("p");
var price=document.createElement("p");
var cart=document.createElement("button");

img.setAttribute("src",element.url);
    name.textContent=element.name;
    sprice.textContent=element.strike_price;
    price.textContent=element.price;
    cart.textContent="Add to cart";

    newdiv.append(img,name,sprice,price,cart);
    maindiv.append(newdiv);
    cart.addEventListener("click",function(){
        var cartarray=JSON.parse(localStorage.getItem("cart"))||[];
        cartarray.push(element);
        localStorage.setItem("cart",JSON.stringify(cartarray));
        alert("Item added to cart");
    });
});
     };
     update(show);
