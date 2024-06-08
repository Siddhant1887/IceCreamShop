function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function register() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const cpassword=document.getElementById('cPassword').value;
    const errorElement = document.getElementById('registerError');

    if (!name || !email || !password || !cpassword) {
        errorElement.textContent = "All fields are required.";
        return;
    }

    if (!validateEmail(email)) {
        errorElement.textContent = "Invalid email format.";
        return;
    }

    if (password.length < 6) {
        errorElement.textContent = "Password must be at least 6 characters long.";
        return;
    }

    if(password!=cpassword) {
        errorElement.textContent = "Password and Confirm Password should match.";
        return;
    }

    errorElement.textContent = "Registration successful!";
}
