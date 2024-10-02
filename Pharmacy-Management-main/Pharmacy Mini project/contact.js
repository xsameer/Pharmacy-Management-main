document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    var formMessage = document.getElementById('form-message');
    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var formGroups = contactForm.querySelectorAll('.form-group');
            formGroups.forEach(function (group) {
                group.classList.remove('error');
            });
            var formData = new FormData(contactForm);
            var name = formData.get('name');
            var email = formData.get('email');
            var phone = formData.get('phone');
            var message = formData.get('message');
            var hasError = false;
        
            if (!name.trim() || !/^[a-zA-Z\s]+$/.test(name)) {
                setError(contactForm.querySelector('#name'), 'Please enter a valid name (letters only)');
                hasError = true;
            }
        
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setError(contactForm.querySelector('#email'), 'Please enter a valid email address');
                hasError = true;
            }
            
            var phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone)) {
                setError(contactForm.querySelector('#phone'), 'Please enter a valid phone number');
                hasError = true;
            }
            
            if (!message.trim()) {
                setError(contactForm.querySelector('#message'), 'Message is required');
                hasError = true;
            }
            
            if (hasError) {
                return;
            }
            
            setTimeout(function () {
                formMessage.textContent = 'Message sent successfully!';
                formMessage.classList.remove('hidden');
                contactForm.reset();
            }, 1000);
        });
    }
    function setError(element, message) {
        var formGroup = element.parentElement;
        formGroup === null || formGroup === void 0 ? void 0 : formGroup.classList.add('error');
        var errorMessage = formGroup === null || formGroup === void 0 ? void 0 : formGroup.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = message;
        }
    }
});
