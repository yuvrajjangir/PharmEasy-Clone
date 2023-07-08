document.getElementById('payment-btn').addEventListener('click', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var mobile = document.getElementById('mobile').value;
  var address = document.getElementById('address').value;
  var pincode = document.getElementById('pincode').value;

  if (name === '' || mobile === '' || address === '' || pincode === '') {
    alert('Please fill in all the fields before proceeding to payment.');
  } else {
    window.location.href = 'payment.html';
  }
});