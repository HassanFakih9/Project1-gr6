document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".A-Form");
    const emailInput = document.getElementById("A-email");
    const messageContainer = document.querySelector(".A-Subscribe-message-container");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const emailValue = emailInput.value;
      
      if (validateEmail(emailValue)) {
        showMessage("Thank you for subscribing!", "orange");
        setTimeout(function() {
          messageContainer.innerHTML = "";
        }, 5000);
      } else {
        showMessage("The email you entered is invalid. Please try again.", "orange");
      }
    });
    
    emailInput.addEventListener("input", function() {
      messageContainer.innerHTML = "";
    });
    
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
    
    function showMessage(message, color) {
      const messageElement = document.createElement("p");
      messageElement.textContent = message;
      messageElement.style.color = color;
      messageContainer.innerHTML = "";
      messageContainer.appendChild(messageElement);
    }
  });