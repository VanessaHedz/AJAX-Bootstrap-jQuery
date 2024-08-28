<?php
    require "BaseDatos/baseDatos.php";
    $db = new baseDatos;
    $id=$_POST['id'];       //Envía la id de la película seleccionada para obtener los datos de la película

    $data=$db->verPeliculas($id);
    echo json_encode($data);
    