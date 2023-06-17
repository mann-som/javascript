// Function to validate the form
function validateForm() {
    // Get the values from the form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Validate the name field
    if (name == '') {
      alert('Please enter your name');
      return false;
    }
  
    // Validate the email field
    if (email == '') {
      alert('Please enter your email');
      return false;
    }
    // Simple email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email');
      return false;
    }
  
    // Validate the password field
    if (password == '') {
      alert('Please enter your password');
      return false;
    }
    // Password length should be at least 6 characters
    if (password.length < 6) {
      alert('Password should be at least 6 characters long');
      return false;
    }
  
    // If all validations pass, return true
    return true;
  }
  