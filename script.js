
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.free_trial_form');

    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get input values
        const firstName = form.querySelector('input[placeholder="First name"]').value.trim();
        const lastName = form.querySelector('input[placeholder="Last name"]').value.trim();
        const email = form.querySelector('input[placeholder="Email address"]').value.trim();
        const phoneNumber = form.querySelector('input[placeholder="Phone Number"]').value.trim();
        const password = form.querySelector('input[placeholder="Create password"]').value.trim();

        // Regular expression for valid email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation flags
        let isValid = true;
        let errorMessage = '';

        // Check for empty fields
        if (!firstName || !lastName || !email || !phoneNumber || !password) {
            isValid = false;
            errorMessage += 'All fields are required.\n';
        }

        // Validate email format
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessage += 'Please enter a valid email address.\n';
        }

        // If the form is valid, log data as an object
        if (isValid) {
            const formData = {
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                email: email,
                password: password
            };

            console.log(formData); // Log the form data object
            alert('Form submitted successfully!'); // Optional alert

            // Optionally submit the form if needed
            // form.submit(); // Uncomment this if you want to submit the form
        } else {
            alert(errorMessage); // Display error message
        }
    });
});
