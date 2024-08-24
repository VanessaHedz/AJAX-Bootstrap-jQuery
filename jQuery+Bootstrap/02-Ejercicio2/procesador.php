<?php
    $email = $_POST["email"];
    $pass = $_POST["password"];

    $correo = 'correo@correo.com';
    $contrasena = '123456';

    $msj = '';

    if($email != $correo || $pass != $contrasena){
        $msj = 'Usuario o contraseña incorrectos.';
    }
    else{
        $msj = 'Acceso correcto.';
    }

    $data1 = ['email' => $email,
              'password' => $pass,
              'msj' => $msj];
    
    echo json_encode($data1);

?>