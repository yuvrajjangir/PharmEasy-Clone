var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

function displayCartItems() {
  var cartContainer = document.querySelector("#cartside");
  cartContainer.innerHTML = "";

  cartItems.forEach(function (item) {
    var cartItemDiv = createCartItem(item);
    cartContainer.appendChild(cartItemDiv);
  });

  updateCartTotal();
}

function createCartItem(item) {
  var cartItemDiv = document.createElement("div");
  cartItemDiv.classList.add("cart-item");

  var itemImage = document.createElement("img");
  itemImage.classList.add("imgdiv");
  itemImage.src = item.url;
  cartItemDiv.appendChild(itemImage);

  var itemTextDiv = document.createElement("div");
  itemTextDiv.classList.add("textdiv");

  var itemName = document.createElement("h5");
  itemName.classList.add("name");
  itemName.textContent = item.name;
  itemTextDiv.appendChild(itemName);

  var itemPrice = document.createElement("p");
  itemPrice.classList.add("price");
  itemPrice.textContent = "Price: " + item.price;
  itemTextDiv.appendChild(itemPrice);

  cartItemDiv.appendChild(itemTextDiv);

  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Remove";
  deleteButton.addEventListener("click", function () {
    removeItemFromCart(item);
  });
  cartItemDiv.appendChild(deleteButton);

  return cartItemDiv;
}

function removeItemFromCart(item) {
  var itemIndex = cartItems.findIndex(function (cartItem) {
    return cartItem.name === item.name;
  });

  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCartItems();
    updateCartTotal();
  }
}

function updateCartTotal() {
  var cartTotalInput = document.querySelector("#cart-total");
  var cartTotal = 0;

  cartItems.forEach(function (item) {
    var total = parseFloat(item.price);
    if (!isNaN(total)) {
      cartTotal += total;
    }
  });

  cartTotalInput.value = cartTotal.toFixed(2);
}

function applyCoupon() {
  var cartTotalInput = document.querySelector("#cart-total");
  var couponCodeInput = document.querySelector("#pcode");
  var couponCode = couponCodeInput.value.trim();

  if (couponCode === "masai30") {
    // Apply your coupon code logic here
    var discount = 0.3 * parseFloat(cartTotalInput.value);
    var discountedTotal = parseFloat(cartTotalInput.value) - discount;
    cartTotalInput.value = discountedTotal.toFixed(2);
  }

  // Clear the coupon code input
  couponCodeInput.value = "";
}

document.querySelector("#promobutton").addEventListener("click", function () {
  applyCoupon();
});
// Add the product to the cart
function addToCart(product) {
  cartItems.push(product);
  localStorage.setItem("cart", JSON.stringify(cartItems));

  // Display the updated cart items and cart total
  displayCartItems();
  updateCartTotal();
}

displayCartItems();

localStorage.setItem("cart", JSON.stringify(cartItems));