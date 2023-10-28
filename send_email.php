
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Replace these variables with your email server details
    $to = "carlinpauls@gmail.com";
    $subject = "New Contact Form Submission from $name";
    $headers = "From: $email";
    
    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";
    
    // Send the email
    mail($to, $subject, $email_message, $headers);

    // You can also redirect the user to a "Thank you" page
    header("Location: thank_you.html");
}
?>
