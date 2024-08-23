<?php
    $nombre = $_POST['name'];
    $email = $_POST['email'];

    $data=['name'=> $nombre,
            'email'=> $email];

    echo json_encode($data);
?>