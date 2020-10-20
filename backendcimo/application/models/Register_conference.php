<?php

class Register_conference extends CI_Model {

    public function __construct(){
        parent::__construct();
    }

    public function register_videoconference($dataregister){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "INSERT INTO appoiment_request VALUES(null, ".$dataregister["id_pacient"].", ".$dataregister["id_profession_specialization"].", ".$dataregister["age"].", '".$dataregister["date"]."', '".$dataregister["start_session"]."', ".$dataregister["duration"].", '".$dataregister["type_date"]."', '".$dataregister["commentary"]."')";

        
        
        if($dbcimo->query($sql)==TRUE){
            
            $db_id = $dbcimo->query("SELECT id FROM appoiment_request WHERE id_pacient = ".$dataregister["id_pacient"]." and date = '".$dataregister["date"]."' ");
            $row=$db_id->row_array();
            $sql2 = "INSERT INTO billing VALUES(null, ".$row["id"].", '".$dataregister["date"]."', '".$dataregister["description"]."', ".$dataregister["number_card"].", '".$dataregister["expiration_date_card"]."', '".$dataregister["to_name_card"]."',  ".$dataregister["security_code"].", ".$dataregister["total"].", '".$dataregister["state"]."')";

            if($dbcimo->query($sql2)==TRUE){
                $this->dbcimo = null;
                return true;
            }
            else{
                
            }


        }
        else{
            $this->dbcimo = null;
            return false;
        }
    }

    public function register_chatconference($dataregister){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "INSERT INTO appoiment_request VALUES(null, ".$dataregister["id_pacient"].", ".$dataregister["id_profession_specialization"].", ".$dataregister["age"].", '".$dataregister["date"]."', '".$dataregister["start_session"]."', ".$dataregister["duration"].", '".$dataregister["type_date"]."', '".$dataregister["commentary"]."')";

        if($dbcimo->query($sql)==TRUE){
            
            $db_id = $dbcimo->query("SELECT id FROM appoiment_request WHERE id_pacient = ".$dataregister["id_pacient"]." and date = '".$dataregister["date"]."' ");
            $row=$db_id->row_array();
            $sql2 = "INSERT INTO billing VALUES(null, ".$row["id"].", '".$dataregister["date"]."', '".$dataregister["description"]."', ".$dataregister["number_card"].", '".$dataregister["expiration_date_card"]."', '".$dataregister["to_name_card"]."',  ".$dataregister["security_code"].", ".$dataregister["total"].", '".$dataregister["state"]."')";

            if($dbcimo->query($sql2)==TRUE){
                $this->dbcimo = null;
                return true;
            }
            else{
                
            }
        }
        else{
            $this->dbcimo = null;
            return false;
        }
    }
}

?>