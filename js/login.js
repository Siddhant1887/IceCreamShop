document.getElementById('signUp').addEventListener('click', () => {
    document.querySelector('.container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('right-panel-active');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function register() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const errorElement = document.getElementById('registerError');

    if (!name || !email || !password) {
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

    errorElement.textContent = "Registration successful!";
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorElement = document.getElementById('loginError');

    if (!email || !password) {
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

    errorElement.textContent = "Login successful!";
}
