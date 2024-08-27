<?php

    require "Conexion.php";

    class baseDatos{
        private $con;
        public function __construct(){
            $this->con = new Conexion;
        }
        
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

        public function deletePeliculas($id){
            return $id;
        }
    }