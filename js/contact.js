console.log("contact.js connected");

const form = document.querySelector("#form");
const yourName = document.querySelector("#name");
const yourNameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#textAreaError");
// const formError = document.querySelector(".form-error");
const successMessage = document.querySelector("#successMessage");
const submitBtn = document.querySelector(".submit-message-btn");



//Form Validation
form.addEventListener("click", function validateForm(event) {
    event.preventDefault();
    if (checkLength(yourName.value, 6 === true)) {
        yourNameError.style.display = "none";
    } else {
        yourNameError.style.display = "block";
    }
    if (checkLength(message.value, 24 === true)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (validatEmail(email.value === true)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
    if ( checkLength(yourName.value, 6) && 
        checkLength(message.value, 24) && 
        validatEmail(email.value) ) {
        successMessage.style.display = "block";
        yourNameError.style.display = "none";
        emailError.style.display = "none";
        messageError.style.display = "none";
        form.reset();
            // form.submit();
    } else {
        successMessage.style.display = "none";
    }
});

// check the length of the value
function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }
  
  // validate email address
  function validatEmail(email) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const patternMatches = regEx.test(email);
    console.log(patternMatches);
  
    return patternMatches;
  }