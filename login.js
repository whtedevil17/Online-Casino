function validateLoginForm() {
    // Get the values from the username and password fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Default username and password values
    var defaultUsername = 'project';
    var defaultPassword = '1234';

    // Check if username and password match the default values
    if (username.trim() === defaultUsername && password.trim() === defaultPassword) {
        // Redirect the user to the main page
        window.location.href = 'index.html'; // Replace 'main.html' with the URL of the main page
        return false; // Prevent form submission
    } else {
        // Display an error message for incorrect credentials
        var errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password. Please try again.';
        return false; // Prevent form submission
    }
}

