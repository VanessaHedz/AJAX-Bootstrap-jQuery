<?php
    require_once "BaseDatos/baseDatos.php";
   

    //Obtención de los datos del formulario
    $id = $_POST["id"];
    $titulo = $_POST["titulo"];
    $tipo = $_POST["tipo"];
    $genero = $_POST["genero"];
    $anio = $_POST["anio"];
    $plataforma = $_POST["plataforma"];

    $data =[ 'id'=>$id,
             'titulo'=>$titulo,
             'tipo'=>$tipo,
             'genero'=>$genero,
             'anio'=>$anio,
             'plataforma'=>$plataforma];
    
    //Mandar datos a la base de datos
    $success = (new baseDatos())->editPeliculas($data);
    $message = 'Se agregó el registro correctamente.';

    if (!$success){
        $message = 'Ocurrió un  error al agregar el registro, intente nuevamente.';
    }

    echo json_encode([
        'success'=>$success,
        'message' => $message
    ]);
