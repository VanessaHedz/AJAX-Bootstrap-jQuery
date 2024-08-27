<?php
    require "BaseDatos/baseDatos.php";
    $db = new baseDatos;

    //Obtención de los datos del formulario
    $titulo = $_POST["titulo"];
    $tipo = $_POST["tipo"];
    $genero = $_POST["genero"];
    $anio = $_POST["anio"];
    $plataforma = $_POST["plataforma"];

    $data =['titulo'=>$titulo,
             'tipo'=>$tipo,
             'genero'=>$genero,
             'anio'=>$anio,
             'plataforma'=>$plataforma];

    //Mandar datos a la base de datos
    $success = $db->addPeliculas($data);
    $message = 'Se agregó el registro correctamente.';

    if (!$success){
        $message = 'Ocurrió un  error al agregar el registro, intente nuevamente.';
    }

    echo json_encode([
        'success'=>$success,
        'message' => $message
    ]);




