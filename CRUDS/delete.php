<?php
    require "BaseDatos/baseDatos.php";

    $db = new baseDatos;

    $id = $_POST['id'];

    $id2 = $db->deletePeliculas($id);
    echo json_encode(['id'=>$id2]);