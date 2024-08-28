<?php

    require "Conexion.php";

    class baseDatos{
        private $con;
        public function __construct(){
            $this->con = new Conexion;
        }
        
        //Muestra todas las películas de la base de datos en pantalla
        public function getPeliculas(){
            try {
                $conn = $this->con->conectar();
                $query = "SELECT * FROM catalogo";
                $stmt = $conn->prepare($query);
                $stmt->execute();
                $catalogoID = $stmt->fetchAll(PDO::FETCH_OBJ);
    
                if ($catalogoID !== false) {
                    return  $catalogoID;
                }
            } catch (PDOException $ex) {
                throw $ex;
            }
            return null;
        }

        //Ver UNA SOLA película
        public function verPeliculas($id){
            try{
                $conn = $this->con->conectar();
                $query= "SELECT * FROM catalogo WHERE id=".$id;
                $stmt = $conn->prepare($query);
                $stmt->execute();
                $pelicula = $stmt->fetch(PDO::FETCH_OBJ); //Recibe todos los datos de la película
                
                if($pelicula !== false){
                    return $pelicula;
                }

            }catch(PDOException $ex){
                throw $ex;
            }
            return null;
        }

        //Elimina la película seleccionada
        public function deletePeliculas($id){
            try{
                $conn = $this->con->conectar();
                $query = "DELETE FROM catalogo WHERE id=".$id;
                $stmt = $conn->prepare($query);
                $stmt->execute();
            } catch(PDOException $ex){
                throw $ex;
            }
            return $id;
        }

        
        public function addPeliculas($data){
            try{
                $conn = $this->con->conectar();
                $query = "INSERT INTO catalogo(titulo, tipo, genero, anio, plataforma) 
                          VALUES ('".$data['titulo']."','".$data['tipo']."','".$data['genero']."','".$data['anio']."','".$data['plataforma']."')";
                //var_dump($query);
                $stmt = $conn->prepare($query);
                $response = $stmt->execute();

                $response = true;
                if ($response){
                    return true;
                }
            } catch(PDOException $ex){
                throw $ex;
            }
            return false;
        }
    }