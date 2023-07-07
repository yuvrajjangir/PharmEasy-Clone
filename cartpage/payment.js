document.addEventListener('DOMContentLoaded', function () {
  // Retrieve the address details from localStorage
  var addressDetails = JSON.parse(localStorage.getItem('addressDetails'));

  // Update the elements with the retrieved address details
  var addressName = document.getElementById('address-name');
  var addressMobile = document.getElementById('address-mobile');
  var addressAddress = document.getElementById('address-address');
  var addressPin = document.getElementById('address-pin');
  var addressType = document.getElementById('address-type');

  addressName.textContent = addressDetails.name;
  addressMobile.textContent = addressDetails.mobileNumber;
  addressAddress.textContent = addressDetails.address;
  addressPin.textContent = addressDetails.pinCode;
  addressType.textContent = addressDetails.addressType;
});
document.addEventListener("DOMContentLoaded", function () {
  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  function displayOrderSummary() {
    var orderContainer = document.querySelector("#main");
    orderContainer.innerHTML = "";
  
    var orderSummaryDiv = document.createElement("div");
    orderSummaryDiv.classList.add("textdiv");
  
    var orderTitle = document.createElement("h3");
    orderTitle.textContent = "Order Summary";
    orderSummaryDiv.appendChild(orderTitle);
  
    cartItems.forEach(function (item) {
      var orderItemDiv = document.createElement("div");
      orderItemDiv.classList.add("order-item");
  
      var itemImage = document.createElement("img");
      itemImage.classList.add("imgdiv");
      itemImage.src = item.url;
      orderItemDiv.appendChild(itemImage);
  
      var itemTextDiv = document.createElement("div");
      itemTextDiv.classList.add("textdiv");
  
      var itemName = document.createElement("h5");
      itemName.textContent = item.name;
      itemTextDiv.appendChild(itemName);
  
      var itemPrice = document.createElement("p");
      itemPrice.textContent = "Price: " + item.price;
      itemTextDiv.appendChild(itemPrice);
  
      orderItemDiv.appendChild(itemTextDiv);
      orderSummaryDiv.appendChild(orderItemDiv);
    });
  
    orderContainer.appendChild(orderSummaryDiv);
  }
  
  displayOrderSummary();

  function updateOrderSummary() {
    var orderName = document.querySelector("#n");
    var orderPrice = document.querySelector("#p");
    var orderQuantity = document.querySelector("#q");
    var orderTotal = document.querySelector("#t");

    var totalItems = cartItems.length;
    var totalPrice = 0;
    var totalQuantity = 0;

    cartItems.forEach(function (item) {
      totalPrice += parseFloat(item.total);
      totalQuantity += parseInt(item.quantity);
    });

    orderName.textContent = "Total Items: " + totalItems;
    orderPrice.textContent = "Total Price: " + totalPrice.toFixed(2);
    orderQuantity.textContent = "Total Quantity: " + totalQuantity;
    orderTotal.textContent = "Order Total: " + totalPrice.toFixed(2);
  }

  displayCartItems();
});