<?php

if (isset($_Post['submit'])) {
    $name = $_Post['name'];
    $mailFrom = $_Post['mail'];
    $phone = $_Post['phone'];
    $interest = $_Post['interest'];
    $message = $_Post['message'];

    $mailTo = 'kolton@faceliftdevelopment.com';

    $subject = "New Form Submission";

    $txt = "You have received a message from ".$name.".\n\n".$message.".\n\n Guest is interested in ".$interest;
    $headers = "From: ".$mailFrom.".\n\n Phone: ".$phone;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: contact.html");
}

?>