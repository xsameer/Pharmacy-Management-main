// document.addEventListener('DOMContentLoaded', function () {
//     const contactForm = document.getElementById('contactForm') as HTMLFormElement;
//     const formMessage = document.getElementById('form-message');

//     if (contactForm && formMessage) {
//         contactForm.addEventListener('submit', function (event) {
//             event.preventDefault();

//             const formGroups = contactForm.querySelectorAll('.form-group');
//             formGroups.forEach((group) => {
//                 group.classList.remove('error');
//             });

//             const formData = new FormData(contactForm);
//             const name = formData.get('name') as string;
//             const email = formData.get('email') as string;
//             const phone = formData.get('phone') as string;
//             const message = formData.get('message') as string;

//             let hasError = false;

//             if (!name.trim() || !/^[a-zA-Z\s]+$/.test(name)) {
//                 setError(contactForm.querySelector('#name') as HTMLElement, 'Please enter a valid name (letters only)');
//                 hasError = true;
//             }
            
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(email)) {
//                 setError(contactForm.querySelector('#email') as HTMLElement, 'Please enter a valid email address');
//                 hasError = true;
//             }

//             const phoneRegex = /^\d{10}$/;
//             if (!phoneRegex.test(phone)) {
//                 setError(contactForm.querySelector('#phone') as HTMLElement, 'Please enter a valid phone number');
//                 hasError = true;
//             }

//             if (!message.trim()) {
//                 setError(contactForm.querySelector('#message') as HTMLElement, 'Message is required');
//                 hasError = true;
//             }

//             if (hasError) {
//                 return;
//             }

//             setTimeout(() => {
//                 formMessage.textContent = 'Message sent successfully!';
//                 formMessage.classList.remove('hidden');
//                 contactForm.reset();
//             }, 1000);
//         });
//     }

//     function setError(element: HTMLElement, message: string) {
//         const formGroup = element.parentElement;
//         formGroup?.classList.add('error');

//         const errorMessage = formGroup?.querySelector('.error-message');
//         if (errorMessage) {
//             errorMessage.textContent = message;
//         }
//     }
// });
