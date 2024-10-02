var LoginForm = /** @class */ (function () {
    function LoginForm() {
        this.form = document.getElementById('loginForm');
        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit.bind(this));
        }
        else {
            console.error("Error: Unable to find login form element.");
        }
    }
    LoginForm.prototype.handleSubmit = function (event) {
        event.preventDefault();
        var usernameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');
        var username = usernameInput.value.trim();
        var password = passwordInput.value.trim();
        var errorContainer = document.getElementById('errorContainer');
        var hasErrors = false;
        if (errorContainer) {
            errorContainer.innerHTML = '';
        }
        if (!username) {
            this.displayError('Please enter a username', errorContainer);
            hasErrors = true;
        }
        else if (!/^[a-zA-Z]{3,20}$/.test(username)) {
            this.displayError('Username must be between 3 and 20 characters and contain only letters', errorContainer);
            hasErrors = true;
        }
        if (!password) {
            this.displayError('Please enter a password', errorContainer);
            hasErrors = true;
        }
        else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
            this.displayError('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number', errorContainer);
            hasErrors = true;
        }
        if (!hasErrors) {
            alert('Login successful!');
        }
    };
    LoginForm.prototype.displayError = function (message, container) {
        if (container) {
            var errorElement = document.createElement('p');
            errorElement.textContent = message;
            container.appendChild(errorElement);
        }
    };
    return LoginForm;
}());
document.addEventListener('DOMContentLoaded', function () {
    new LoginForm();
});
