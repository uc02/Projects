document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();

  clearErrors();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  if(name.length < 2){
    showError('nameError', 'Name must be at least 2 characters long');
    isValid = false;
  }

  if(!validateEmail(email)){
    showError('emailError', 'please enter a valid email address');
    isValid = false;
  }

  if(phone && !validatePhone(phone)){
    showError('phoneError', 'Please enter a valid phone number');
    isValid =false;
  }

  if(message.length < 10){
    showError('messageError', 'message must be at least 10 characters long');
    isValid = false;
  }

  if( isValid){
    console.log('Form data: ', { name, email, phone, message });

    document.getElementById('successMessage').style.display = 'block';

    document.getElementById('contactForm').reset();

    setTimeout(() => {
      document.getElementById('successMessage').style.display = 'none';
    }, 3000);
  }
});

function validateEmail(email){
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone){
  const re = /^\+?[\d\s-]{10,}$/;
  return re.test(phone);
}

function showError(elementId, message){
  document.getElementById(elementId).textContent = message;
}

function clearErrors(){
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(element => element.textContent = '');
  document.getElementById('successMessage').style.display = 'none';
}