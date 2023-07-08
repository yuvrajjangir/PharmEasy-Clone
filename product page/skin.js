var skinproduct=[
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/M47114/veet-pure-hair-removal-cream-for-women-with-no-ammonia-smell-normal-skin-30g-2-1656923503.jpg",
        name:"Episoft Cleansing Lotion 250ml",
        strike_price:"MRP 870",
        price:"700",
    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/196228/sebamed-clear-face-care-gel-50ml-ph-55-acne-prone-skin-hyaluron-aloe-vera-2-1688551380.jpg",
        name:"Veet Pure Hair Removal Cream For Women With No Ammonia Smell Normal Skin - 100g",
        strike_price:"MRP 7845",
        price:"3000",
    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/273329/episoft-cleansing-lotion-250ml-2-1686010041.jpg",
        name:"Nivea Soft Light Moisturizer Of 300 Ml",
        strike_price:"MRP 678",
        price:"599",
    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/I40181/veet-pure-hair-removal-cream-for-women-with-no-ammonia-smell-sensitive-skin-50-g-2-1686145869.jpg",
        name:"Hexilak Ultra Advanced Scar Gel Tube Of 15 G",
        strike_price:"MRP 4500",
        price:"3000",
    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/I40924/nivea-soft-light-moisturizer-of-300-ml-2-1679372254.jpg",
        name:"Episoft Cleansing Lotion 125ml",
        strike_price:"MRP 2900",
        price:" 2599",
    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/I08490/hexilak-ultra-anti-scar-gel-tube-of-15-g-1-1669655046.jpg",
        name:"Mamaearth Bye Bye Dark Circles Cucumber + Peptides Under Eye Cream For Dark Circles Tube Of 20 Gm",
        strike_price:"MRP 780",
        price:"699",
    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/D80414/mamaearth-bye-bye-dark-circles-cucumber-peptides-under-eye-cream-for-dark-circles-tube-of-20-gm-2-1641788935.jpg",
        name:"Nivea Aloe Hydration Skin Cream - 200 Ml",
        strike_price:"MRP 679",
        price:"499",
    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/241829/elovera-moisturizer-tube-of-75-g-2-1685975282.jpg",
        name:"Himalaya Under Eye Cream 15ml",
        strike_price:"MRP 670",
        price:"499",
    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/065719/elovera-imf-moisturizer-tube-of-50-g-1-1632774800.jpg",
        name:"Elovera Imf Moisturizer Tube Of 50 G",
        strike_price:"MRP 4800",
        price:"2900",
    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/M03078/mamaearth-skin-illuminate-vitamin-c-serum-for-radiant-skin-with-high-potency-vitamin-c-turmeric-30-g-2-1632778230.jpg",
        name:"Mamaearth Skin Illuminate Vitamin C Serum For Radiant Skin With High Potency Vitaminc & Turmeric 30g",
        strike_price:"MRP 700",
        price:"300",
    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/I13973/havglo-cream-tube-of-30-g-1-1669710124.jpg",
        name:"Havglo Cream Tube Of 30 G",
        strike_price:"MRP 6700",
        price:"300",
    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/P10918/lotus-herbals-safe-sun-uv-screen-mattegel-pa-spf-50-50-gm-2-1671742533.jpg",
        name:"Lotus Herbals Safe Sun Uv Screen Mattegel Pa+++ Spf-50 50 Gm",
        strike_price:"MRP 800",
        price:"599",
    },
];





localStorage.setItem("skinproduct",JSON.stringify(skinproduct));
var newarray=JSON.parse(localStorage.getItem("skinproduct"));

function showdata(array){
 var maindiv=document.querySelector("#container");
 maindiv.innerHTML="";
//  console.log(array);
//  console.log(typeof(array));
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
    // var link=document.createElement("a");
    

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
