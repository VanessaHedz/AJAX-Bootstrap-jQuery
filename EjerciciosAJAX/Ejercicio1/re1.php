<?php
    $nombre = $_POST['nombre'];
    $paterno = $_POST['paterno'];
    $materno = $_POST['materno'];

    $data=['nombre'=> $nombre,
            'paterno' => $paterno,
            'materno' => $materno];

    //Mandando información al jQuery
    echo json_encode($data);

    // echo "<p>Nombre: ".$nombre."</p>";
    // echo "<p>Apellido Paterno: ".$paterno."</p>";
    // echo "<p>Apellido Materno: ".$materno."</p>";
?>