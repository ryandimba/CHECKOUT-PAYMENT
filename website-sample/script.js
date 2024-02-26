
function signup() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var birthdate = document.getElementById("birthdate").value;
    var location = document.getElementById("location").value;
    var phone = document.getElementById("phone").value;

    // Check if passwords match
    if (password !== confirm_password) {
        alert("Passwords do not match!");
        return;
    }

    // Prepare the request body
    var data = {
        "username": email,
        "email": email,
        "fullname": fullname,
        "birthdate": birthdate,
        "location": location,
        "phone": phone,
        "password": password,
        "password2": confirm_password,
        "is_active": true
    };

    // Send POST request to the API
    fetch('https://checkout-barber-django-rest-api.onrender.com/api/signup/client/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        // Handle successful signup
        console.log('Success:', data);
        alert("Signup successful!");
    })
    .catch((error) => {
        // Handle errors
        console.error('Error:', error);
        alert("An error occurred. Please try again later.");
    });
}
