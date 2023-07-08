function showProductDetails(productId) {
 
  const product = getProductById(productId);

  
  document.getElementById("productImage").src = product.image;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productPrice").textContent = "₹" + product.price;
  document.getElementById("discountedPrice").textContent = "₹" + product.discountedPrice;
  document.getElementById("discountPercentage").textContent = "(" + product.discountPercentage + "%)";

  
  document.querySelector(".product-list").style.display = "none";
  document.getElementById("productDetails").style.display = "block";
}

function hideProductDetails() {
  
  document.querySelector(".product-list").style.display = "block";
  document.getElementById("productDetails").style.display = "none";
}

function addToCart() {
 
  alert('Product added to cart!');
}


function getProductById(productId) {
 
  const products = [
    {
      id: 1,
      name: "Shelcal Strip",
      price: "131.30",
      discountedPrice: "118.17",
      discountPercentage: "10",
      image: "https://cdn01.pharmeasy.in/dam/products_otc/159115/shelcal-500mg-strip-of-15-tablets-2-1679999355.jpg?dim=1440x0"
    },
    {
      id: 2,
      name: "Liveasy Wellness",
      price: "399.00",
      discountedPrice: "207.48",
      discountPercentage: "48",
      image: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1680172214.jpg?dim=1440x0"
    },
    {
      id: 3,
      name: "Liveasy Paper",
      price: "849.00",
      discountedPrice: "638.02",
      discountPercentage: "25",
      image: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=1440x0"
    },
    {
      id: 4,
      name: "Renal Nutrition",
      price: "60.35",
      discountedPrice: "54.31",
      discountPercentage: "10",
      image: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablet-with-essential-zinc-vitamins-for-daily-immunity-energy-2-1677155713.jpg?dim=1440x0"
    },
    {
      id: 5,
      name: "Live Cream",
      price: "399.00",
      discountedPrice: "219.45",
      discountPercentage: "45",
      image: "https://cdn01.pharmeasy.in/dam/products_otc/D52223/liveasy-foods-healthy-roasted-seed-mix-blend-of-6-fibre-rich-healthy-roasted-seeds-200-gms-2-1656420865.jpg?dim=1440x0"
    },
    {
      id: 6,
      name: "Moisturising Lotion",
      price: "78.98",
      discountedPrice: "71.08",
      discountPercentage: "10",
      image: "https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-2-1683208555.jpg?dim=1440x0"
    },
    {
      id: 7,
      name: "Himalaya Hiora",
      price: "499.00",
      discountedPrice: "249.50",
      discountPercentage: "50",
      image: "https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1669349726.jpg?dim=1440x0"
    },
    {
      id: 8,
      name: "Celehealth Kidz",
      price: "285.00",
      discountedPrice: "256.50",
      discountPercentage: "10",
      image: "https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1671741016.jpg?dim=1440x0"
    }
  ];

  return products.find(product => product.id === productId);
}
