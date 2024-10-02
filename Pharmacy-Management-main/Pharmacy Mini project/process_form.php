<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $customerName = $_POST['customerName'];
    $customerAge = $_POST['customerAge'];
    $customerEmail = $_POST['customerEmail'];
    $customerPhone = $_POST['customerPhone'];
    $drugName = $_POST['drugName'];
    $quantity = $_POST['quantity'];
    $expirationDate = $_POST['expirationDate'];

    $servername = "localhost";
    $username = "root"; 
    $password = ""; 
    $database = "pharmacy"; 

    
    $conn = mysqli_connect($servername, $username, $password, $database);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "INSERT INTO form_data (customerName, customerAge, customerEmail, customerPhone, drugName, quantity, expirationDate)
            VALUES ('$customerName', '$customerAge', '$customerEmail', '$customerPhone', '$drugName', '$quantity', '$expirationDate')";

    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}

