<?php

    require "Conexion.php";

    class baseDatos{
        private $con;
        public function __construct(){
            $this->con = new Conexion;
        }
        
        //Muestra las películas en pantalla
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