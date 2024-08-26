<?php
    $email = $_POST["email"];
    $pass = $_POST["password"];

    $data = ['email' => $email,
             'password' => $pass];
    
    echo json_encode($data);
?>