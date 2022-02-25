document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // check email and password for login
    if (userEmail == 'admin@gmail.com' && userPassword == 1234) {
        window.location.href = 'bank-management.html';
    }
})  