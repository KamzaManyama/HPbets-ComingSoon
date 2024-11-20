// Countdown Timer
const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); 

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();




document.getElementById('toggle-arrow').addEventListener('click', function () {
    const moreContent = document.getElementById('more-content');
    const arrow = document.getElementById('toggle-arrow');

    if (moreContent.classList.contains('hidden')) {
        moreContent.classList.remove('hidden');
        arrow.classList.add('active');
    } else {
        moreContent.classList.add('hidden');
        arrow.classList.remove('active');
    }
});

//form validation

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting until validation is complete

    // Validate the form
    if (validateForm()) {
        alert('Thank you for registering! We\'ll contact you when we launch.');
        this.reset(); // Reset the form if validation is successful
    }
});

// Validate the form
function validateForm() {
    let isValid = true;

    // Clear previous error messages
    clearErrors();

    // Validate Full Name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        displayError('name-error', 'Full Name is required');
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        displayError('email-error', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate Phone Number (Optional but validate if entered)
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[0-9]{10}$/; // Adjust regex to fit your phone format
    if (phone && !phoneRegex.test(phone)) {
        displayError('phone-error', 'Please enter a valid phone number (10 digits)');
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        displayError('message-error', 'Please provide additional information');
        isValid = false;
    }

    return isValid;
}

// Display error message next to the field
function displayError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Clear previous error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(error => {
        error.textContent = '';
    });
}