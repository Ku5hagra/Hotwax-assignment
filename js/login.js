function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === "password" ? "text" : "password";
  }
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Clear errors
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
  
    // Retrieve user data from local storage
    const storedData = JSON.parse(localStorage.getItem("user"));
  
    if (
      !storedData || 
      storedData.email !== email || 
      storedData.password !== password
    ) {
      document.getElementById("passwordError").textContent = "Invalid email or password.";
    } else {

      window.location.href = "../html/homepage.html";
    }
  });
  