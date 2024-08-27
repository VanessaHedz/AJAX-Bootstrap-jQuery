<?php
    require "BaseDatos/baseDatos.php";
    $con = new baseDatos;
    $peliculas = $con->getPeliculas();
    
    //print_r($peliculas);
    //exit();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Bootstrap & Sweetalert-->
    <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/modals/"> <!-- Para las modales -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>

    <!-- Fontawesome -->
    <script src="https://kit.fontawesome.com/1ba023f67a.js" crossorigin="anonymous"></script>

    <title>Catálogo de Películas</title>
</head>
<body>
    <div class="container">
        <br>
        <div class="row">
            <h1>Catálogo de películas</h1><br><br><br>
        </div>
        <div class="row">
            <div class="col-6">
                <button class="btn btn-primary" type="button" id="btnAdd">
                    <i class="fa-solid fa-plus"></i>
                </button><br><br>
            </div>
            <div class="col-6"></div>
        </div>
        
        <div class="row">
            <h1></h1>
        </div>

        <div class="row">
            <h2>Catálogo: </h2><br><br><br>
        </div>

        <div class="row">
            <table class="table">
                <tr>
                    <th>id</th>
                    <th>Título</th>
                    <th>Tipo</th>
                    <th>Género</th>
                    <th>Año</th>
                    <th>Plataforma</th>
                    <th>Acciones</th>
                </tr>
                <!-- Mostrar los elementos de la base de datos en la vista -->
                <?php
                    foreach ($peliculas as $index => $pelicula):                    
                ?>

                <tr>
                    <th><?=$pelicula->id?></th>
                    <th><?=$pelicula->titulo?></th>
                    <th><?=$pelicula->tipo?></th>
                    <th><?=$pelicula->genero?></th>
                    <th><?=$pelicula->anio?></th>
                    <th><?=$pelicula->plataforma?></th>
                    <th>
                        <button class="btn btn-danger" type="button" id="btnDel" onclick="deletePeliculas(<?=$pelicula->id?>)">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <button class="btn btn-success" type="button" id="btnEdit">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </th>
                </tr>

                <?php
                    endforeach;
                ?>

            </table>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="formulario-modal" tabindex="-1" role="dialog" aria-labelledby="formulario" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="formulario">Formulario</h5>
                </div>
                <!-- Cuerpo del modal -->
                <div class="modal-body">
                    <form>
                        <!-- Título -->
                        <div class="form-group">
                            <label for="idTitle">Título:</label>
                            <input type="text" class="form-control" id="idTitle" placeholder="Título de la película o serie">
                        </div>
                        <br>
                        <!-- Tipo -->
                        <div class="form-group">
                            <label for="idTipo">Formato:</label>
                            <input type="text" class="form-control" id="idTipo" placeholder="Serie, Película o Novela">
                        </div>
                        <br>
                       <!-- Género -->
                        <div class="form-group">
                            <label for="idGenero">Género:</label>
                            <input type="text" class="form-control" id="idGenero" placeholder="Drama, Acción, Ficción, Ciencia Ficción...">
                        </div>
                        <br>
                        <!-- Año -->
                            <div class="form-group">
                                <label for="idYear">Año:</label>
                                <input type="number" class="form-control" id="idYear" placeholder="Año en el que se estrenó">
                            </div>
                        <br>
                        <!-- Plataforma -->
                            <div class="form-group">
                                <label for="idPlataforma">Plataforma:</label>
                                <input type="text" class="form-control" id="idPlataforma" placeholder="Netflix, Disney+, Prime Video...">
                            </div>
                        <br>

                        <button type="button" class="btn btn-primary" id="btnSend" onclick='addPeliculas()'>Enviar</button>
                    </form>
                </div>
                <!-- Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" id="btnClose">No Enviar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
    <script src="../Bibliotecas_externas/jquery-3.7.1.js"></script>
    <script src="jQuery.js"></script>

</body>
</html>