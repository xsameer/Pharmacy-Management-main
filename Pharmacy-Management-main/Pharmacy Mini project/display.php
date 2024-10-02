<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Details</title>
    <link rel="stylesheet" href="style.css">
    <style>
         body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            background-color: #c62708;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-size: cover; /* Increase background size */
        }
        .h1 {
            font-style:inherit;
            color: white;
            text-decoration: underline black;
            text-align: center;
            margin-bottom: 30px;
        }
        .details {
            margin-top: 20px;
        }
        .details h2 strong {
            font-size: 20px;
            color: white;
            margin-bottom: 5px;
        }
        .details p {
            font-size: 16px;
            color: #666;
            margin-bottom: 10px;
        }
        .details p:last-child {
            margin-bottom: 0;
        }
    </style>
</head>
<body>
<div class="container">
        <h1 class="h1">CUSTOMER DETAILS</h1>
        <?php
        $customerName = "";
        $customerAge = "";
        $customerEmail = "";
        $customerPhone = "";
        $drugName = "";
        $quantity = "";
        $expirationDate = "";

        if (isset($_SESSION['customerName']) && isset($_SESSION['customerAge']) && isset($_SESSION['customerEmail']) && isset($_SESSION['customerPhone']) && isset($_SESSION['drugName']) && isset($_SESSION['quantity']) && isset($_SESSION['expirationDate'])) {
        $customerName = $_SESSION['customerName'];
        $customerAge = $_SESSION['customerAge'];
        $customerEmail = $_SESSION['customerEmail'];
        $customerPhone = $_SESSION['customerPhone'];
        $drugName = $_SESSION['drugName'];
        $quantity = $_SESSION['quantity'];
        $expirationDate = $_SESSION['expirationDate'];
    }
    else{
        echo "Session variables are not set.";
    }
        ?>
        <div class="details">
            <h2><strong>Customer Name:</strong> <?php echo $customerName; ?></h2>
            <h2><strong>Age:</strong> <?php echo $customerAge; ?></h2>
            <h2><strong>Email:</strong> <?php echo $customerEmail; ?></h2>
            <h2><strong>Phone:</strong> <?php echo $customerPhone; ?></h2>
            <h2><strong>Drug Name:</strong> <?php echo $drugName; ?></h2>
            <h2><strong>Quantity:</strong> <?php echo $quantity; ?></h2>
            <h2><strong>Expiration Date:</strong> <?php echo $expirationDate; ?></h2>
        </div>
    </div>
</body>
</html>
