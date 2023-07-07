// Function to save the address
function saveAddress(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  var nameInput = document.getElementById('name');
  var mobileInput = document.getElementById('Mnum');
  var addressInput = document.getElementById('addres');
  var pinInput = document.getElementById('pin');
  var addressTypeSelect = document.getElementById('atype');

  // Get the values entered by the user
  var name = nameInput.value;
  var mobileNumber = mobileInput.value;
  var address = addressInput.value;
  var pinCode = pinInput.value;
  var addressType = addressTypeSelect.value;

  // Validate the address inputs
  if (name.trim() === '' || mobileNumber.trim() === '' || address.trim() === '' || pinCode.trim() === '') {
    alert('Please fill all the address fields.');
    return;
  }

  // Perform the logic to save the address
  // You can add your code here to save the address details in your system
  console.log('Name:', name);
  console.log('Mobile Number:', mobileNumber);
  console.log('Address:', address);
  console.log('Pin Code:', pinCode);
  console.log('Address Type:', addressType);

  // Clear the form fields after saving the address
  nameInput.value = '';
  mobileInput.value = '';
  addressInput.value = '';
  pinInput.value = '';
  addressTypeSelect.value = 'home'; // Reset the address type to the default value
}

// Wait for the document to finish loading
document.addEventListener('DOMContentLoaded', function () {
  // Get the form element
  var addressForm = document.getElementById('address');

  // Add event listener to the form submission
  addressForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    var nameInput = document.getElementById('name');
    var mobileInput = document.getElementById('Mnum');
    var addressInput = document.getElementById('addres');
    var pinInput = document.getElementById('pin');

    // Check if any of the address fields are empty
    if (
      nameInput.value.trim() === '' ||
      mobileInput.value.trim() === '' ||
      addressInput.value.trim() === '' ||
      pinInput.value.trim() === ''
    ) {
      alert('Please fill all the address fields.');
    } else {
      // All fields are filled, redirect to payment.html
      window.location.href = 'payment.html';
    }
  });
});