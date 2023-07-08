function generateOTP() {
    var digits = '0123456789';
    var otp = '';
    for (var i = 0; i < 4; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  }
  
  function verifyOTP() {
    var inputOTP = prompt('Please enter the OTP:');
    var generatedOTP = localStorage.getItem('generatedOTP');
  
    if (inputOTP === generatedOTP) {
      // Redirect to the loading page
      window.location.href = 'loading.html';
    } else {
      alert('Invalid OTP. Please try again.');
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    var otpButton = document.querySelector('#otp-button');
    otpButton.addEventListener('click', function () {
      var generatedOTP = generateOTP();
      localStorage.setItem('generatedOTP', generatedOTP);
      alert('Your OTP is: ' + generatedOTP);
      verifyOTP();
    });
  });