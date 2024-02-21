<?php
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $appointment_date = $_POST["appointment_date"];
    $services = $_POST["services"];
    $total_price = $_POST["total_price"];

    // Here you would typically save the data to a database and process the payment
    // For demonstration purposes, let's just print out the data
    echo "<h2>Thank you for your payment, $name!</h2>";
    echo "<p>Your appointment details:</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Appointment Date: $appointment_date</p>";
    echo "<p>Services: $services</p>";
    echo "<p>Total Price: $total_price</p>";

    // Clear session data
    session_destroy();
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barber Shop Checkout</title>
</head>
<body>
    <h1>Barber Shop Checkout</h1>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>
        
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="appointment_date">Appointment Date:</label><br>
        <input type="date" id="appointment_date" name="appointment_date" required><br><br>
        
        <label for="services">Services:</label><br>
        <select id="services" name="services[]" multiple required>
            <option value="Haircut">Haircut</option>
            <option value="Shave">Shave</option>
            <option value="Beard Trim">Beard Trim</option>
        </select><br><br>
        
        <label for="total_price">Total Price:</label><br>
        <input type="text" id="total_price" name="total_price" required><br><br>
        
        <input type="submit" value="Submit Payment">
    </form>
</body>
</html>