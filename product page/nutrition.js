var nutriproduct=[
{url:"https://cdn01.pharmeasy.in/dam/products_otc/V68813/everherb-diabetic-care-juice-11-potent-ingredients-healthy-blood-sugar-management-1-litre-bottle-2-1680238244.jpg",
    name:"Calcimax Forte Plus Strip Of 30 Tablets",
    strike_price:"MRP 599",
    price:"299",
},
{
    url:"https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1680172214.jpg",
    name:"Revital H Women Multivitamin With Calcium Zinc Ginseng For Immunity Strong Bones & Energy 30 Tablets",
    strike_price:"MRP 1455",
    price:"799",
},

{
    url:"https://cdn01.pharmeasy.in/dam/products_otc/V68813/everherb-diabetic-care-juice-11-potent-ingredients-healthy-blood-sugar-management-1-litre-bottle-2-1680238244.jpg",
    name:"Everherb (By Pharmeasy) Amla Juice-Rich In Vitamin C-Natural Immunity Booster - 1 Litre Bottle",
    strike_price:"MRP 456",
    price:"300",
},


{
    url:"https://cdn01.pharmeasy.in/dam/products_otc/E54755/everherb-by-pharmeasy-aloe-vera-juice-with-pulp-rejuvenates-skin-hair-1-litre-bottle-2-1680172150.jpg",
    name:"Pharmeasy Apple Cider Vinegar With Mother -Improves Metabolism- 500ml Bottle",
    strike_price:"MRP 899",
    price:"600",
},

{
    url:"https://cdn01.pharmeasy.in/dam/products_otc/I00596/revital-h-women-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-tablets-2-1671741117.jpg",
    name:"Revital H Men Multivitamin With Calcium Zinc & Ginseng For Immunity Strong Bones (30 Capsules)",
    strike_price:"MRP 789",
    price:"490",
},

{
    url:"https://cdn01.pharmeasy.in/dam/products_otc/E22952/pharmeasy-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-2-1670992890.jpg",
    name:"Pharmeasy Calcium Magnesium Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60",
    strike_price:"MRP 789",
    price:"600",
},

{
    url:"https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-30-capsules-2-1686664568.jpg",
    name:"Maxirich Multivitamin & Minerals Sofgels Strip Of 10",
    strike_price:"MRP 567",
    price:"500",
},

{
    url:"https://cdn01.pharmeasy.in/dam/products_otc/G67452/pharmeasy-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-2-1672137118.jpg",
    name:"Everherb Giloy Tulsi Juice - Strengthens Body Defence System - Natural Immunity Booster - 1 Litre",
    strike_price:"MRP 399",
    price:"199",
},

{
    url:"https://cdn01.pharmeasy.in/dam/products_otc/205923/maxirich-multivitamin-minerals-sofgels-strip-of-10-2-1671740732.jpg",
    name:"Pharmeasy Iron+Folic Acid With Zinc, Vitamin C &B12 - Maintains Overall Health - Bottle Of 60",
    strike_price:"MRP 599",
    price:"299",
},

{
    url:"https://cdn01.pharmeasy.in/dam/products_otc/U97974/everherb-giloy-tulsi-juice-strengthens-body-defence-system-natural-immunity-booster-1-litre-2-1680172279.jpg",
    name:"Pharmeasy Multivitamin Multimineral - Immunity Booster - Complete Nutrition - Bottle Of 60",
    strike_price:"MRP 699",
    price:"384",
},

{
    url:"https://cdn01.pharmeasy.in/dam/products_otc/O80793/pharmeasy-ironfolic-acid-with-zinc-vitamin-c-b12-maintains-overall-health-bottle-of-60-2-1668672053.jpg",
    name:"Liveasy Foods Healthy Seed Mix - Blend Of 6 Fibre Rich Healthy Seeds - 200 Gms",
    strike_price:"MRP 349",
    price:"191",
},
{
    url:"https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-30-capsules-2-1686664568.jpg",
    name:"Maxirich Multivitamin & Minerals Sofgels Strip Of 10",
    strike_price:"MRP 1567",
    price:"1000",
},



];
//  console.log(nutriproduct);

localStorage.setItem("nutriproduct",JSON.stringify(nutriproduct));
var newarray=JSON.parse(localStorage.getItem("nutriproduct"));

function showdata(array){
 var maindiv=document.querySelector("#container");
 maindiv.innerHTML="";
 console.log(array);
 console.log(typeof(array));
 array.forEach(function(element){
var newdiv=document.createElement("div");
var img=document.createElement("img");
var name=document.createElement("h3");
var sprice=document.createElement("p");
var price=document.createElement("p");

img.setAttribute("src",element.url);
    name.textContent=element.name;
    sprice.textContent=element.strike_price;
    price.textContent=element.price;

    newdiv.append(img,name,sprice,price);
    maindiv.append(newdiv);
    var link=document.createElement("a");
    

    newdiv.addEventListener("click",function(){
        var showelement=[element];
        localStorage.setItem("showelement",JSON.stringify(showelement));
         window.location.replace("./showelement.html");

        

    });
 });

 
};
showdata(newarray);

var changbyname=document.querySelector("#byname");
changbyname.addEventListener("change",function(){
    var val=changbyname.value;
    if(val==""){
        showdata(newarray);
    }
    else if(val=="ascending") {

        var asc=newarray.sort(function(x,y){
            var namex=x.name.toUpperCase();
            var namey=y.name.toUpperCase();
            if(namex<namey){
                return -1;
            }
            else if(namex>namey){
                return 1;
            }
            return 0;

        });
        console.log(asc);
        showdata(asc);
    }
    else if(val=="descending"){
        var asc=newarray.sort(function(x,y){
            var namex=x.name.toUpperCase();
            var namey=y.name.toUpperCase();
            if(namex<namey){
                return 1;
            }
            else if(namex>namey){
                return -1;
            }
            return 0;

        });
        console.log(asc);
        showdata(asc);
    }

});

//sort bt price
var changebyprice=document.querySelector("#byprice");
changebyprice.addEventListener("change",function(){
    var val=changebyprice.value;
    if(val==""){
        showdata(newarray);
    }
    else if(val=="low to high"){
        var lth=newarray.sort(function(x,y){
            return x.price - y.price;

        });
        showdata(lth);
    }
    else if(val=="high to low"){
        var lth=newarray.sort(function(x,y){
            return  y.price - x.price;

        });
        showdata(lth);
    }

});

//filter part

// var arrfilter=document.querySelector

