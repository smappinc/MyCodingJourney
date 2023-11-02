// Function to change the background color of the page
function changeColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  // Function to validate the form inputs
  function validateForm() {
    // Get the form element
    var form = document.getElementById("myForm");
    // Get the name and email values
    var name = form.name.value;
    var email = form.email.value;
    // Check if the name is empty
    if (name == "") {
      alert("Please enter your name");
      return false;
    }
    // Check if the email is empty or invalid
    if (email == "" || !email.includes("@")) {
      alert("Please enter a valid email");
      return false;
    }
    // If everything is valid, show a confirmation message
    alert("Thank you for submitting your details");
  } 
  