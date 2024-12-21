function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === "password" ? "text" : "password";
}

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('nameError').textContent = '';

    let isValid = true;

    if (!email.match(/^\S+@\S+\.\S+$/)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('passwordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    if(password.length < 6){
        document.getElementById('passwordError').textContent = 'Passwords must of 6 characters or more.';
        isValid = false;
    }

    if (isValid) {

        const userData = { email, password, name };
        localStorage.setItem('user', JSON.stringify(userData));

        window.location.href = "login.html";
    }
});