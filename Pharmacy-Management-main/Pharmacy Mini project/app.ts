// class LoginForm {
//     form: HTMLFormElement;

//     constructor() {
//         this.form = document.getElementById('loginForm') as HTMLFormElement;
//         if (this.form) {
//             this.form.addEventListener('submit', this.handleSubmit.bind(this));
//         } else {
//             console.error("Error: Unable to find login form element.");
//         }
//     }

//     handleSubmit(event: Event): void {
//         event.preventDefault();

//         const usernameInput = document.getElementById('username') as HTMLInputElement;
//         const passwordInput = document.getElementById('password') as HTMLInputElement;

//         const username = usernameInput.value.trim();
//         const password = passwordInput.value.trim();

//         const errorContainer = document.getElementById('errorContainer');

//         let hasErrors = false;

//         if (errorContainer) {
//             errorContainer.innerHTML = '';
//         }

//         if (!username) {
//             this.displayError('Please enter a username', errorContainer);
//             hasErrors = true;
//         } else if (!/^[a-zA-Z]{3,20}$/.test(username)) {
//             this.displayError('Username must be between 3 and 20 characters and contain only letters', errorContainer);
//             hasErrors = true;
//         }

//         if (!password) {
//             this.displayError('Please enter a password', errorContainer);
//             hasErrors = true;
//         } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
//             this.displayError('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number', errorContainer);
//             hasErrors = true;
//         }

//         if (!hasErrors) {
//             alert('Login successful!');
//         }
//     }

//     displayError(message: string, container: HTMLElement | null): void {
//         if (container) {
//             const errorElement = document.createElement('p');
//             errorElement.textContent = message;
//             container.appendChild(errorElement);
//         }
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     new LoginForm();
// });
