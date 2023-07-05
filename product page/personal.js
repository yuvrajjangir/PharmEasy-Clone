
var personalproduct=[
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1671741223.jpg",
        name:"Soulflower Onion Biotin Shampoo With Aloevera & Plant Keratin Restore Shine & Smoothness 300ml",
        strike_price:"MRP 1123",
        price:"1000",

    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/270382/scalpe-plus-anti-dandruff-shampoo-bottle-of-75-ml-2-1671741035.jpg",
        name:"Venusia Max Intensive Moisturizing Cream For Dry To Very Dry Skin Repairs & Smoothens Skin 150g",
        strike_price:"MRP 4567",
        price:"2000",

    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/A75976/liveasy-essentials-handwash-pump-250-ml-2-1653312958.jpg",
        name:"Everherb (By Pharmeasy) Aloe Vera Juice With Pulp - Rejuvenates Skin & Hair - 1 Litre Bottle",
        strike_price:"MRP 890",
        price:"700",

    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/F12431/soulflower-onion-biotin-shampoo-with-aloevera-plant-keratin-restore-shine-smoothness-300ml-2-1641795823.jpg",
        name:"Mildy Tube Of 100ml Shampoo",
        strike_price:"MRP 890",
        price:"1099",

    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/180461/venusia-max-intensive-moisturizing-cream-for-dry-to-very-dry-skin-repairs-smoothens-skin-150g-2-1686118239.jpg",
        name:"Venusia Max Intensive Moisturizing Lotion Repairs Dry Skin Provides Soft & Smooth Skin 500gm",
        strike_price:"MRP 900",
        price:"800",

    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/E54755/everherb-by-pharmeasy-aloe-vera-juice-with-pulp-rejuvenates-skin-hair-1-litre-bottle-2-1680172150.jpg",
        name:"Revital H Men Multivitamin With Calcium Zinc & Ginseng For Immunity Strong Bones (30 Capsules)",
        strike_price:"MRP 1490",
        price:"1300",

    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/263100/venusia-max-intensive-moisturizing-lotion-repairs-dry-skin-provides-soft-smooth-skin-300gm-2-1671740865.jpg",
        name:"New Photostable Spf55+ Sunscreen Emulgel 50g",
        strike_price:"MRP 1567",
        price:"1400",

    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/281751/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-60-capsules-2-1671741037.jpg",
        name:"Everherb (By Pharmeasy) Ashwagandha-Immunity Booster Capsules-Anxiety & Stress Relief-Bottle Of 60",
        strike_price:"MRP 5678",
        price:"788",

    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/M56307/new-photostable-spf55-sunscreen-emulgel-50g-2-1671744622.jpg",
        name:"New Hair 4u 5% Hair Spray Bottle Of 60 Ml",
        strike_price:"MRP 777",
        price:"599",

    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1681476033.jpg",
        name:"Selsun Shampoo 120ml",
        strike_price:"MRP 6789",
        price:"6000",

    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/I42413/new-hair-4u-5-hair-spray-bottle-of-60-ml-1-1669710872.jpg",
        name:"I-Pill Emergency Contraceptive Pill",
        strike_price:"MRP 458",
        price:"199",

    },
    {
        url:"https://cdn01.pharmeasy.in/dam/products_otc/I05057/dettol-liquid-handwash-refill-original-hand-wash-675ml-germ-defence-formula-10x-better-germ-protection-2-1679979599.jpg",
        name:"Dettol Liquid Handwash Refill - Original Hand Wash- 675ml|Germ Defence Formula 10x Better Protection",
        strike_price:"MRP899",
        price:"400",

    },
];

localStorage.setItem("personalproduct",JSON.stringify(personalproduct));
var newarray=JSON.parse(localStorage.getItem("personalproduct"));

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