<?php

class Register_videoconference extends CI_Model {

    public function __construct(){
        parent::__construct();
    }

    public function register_videoconference($dataregister){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "INSERT INTO appoiment_request VALUES(null, ".$dataregister["id_pacient"].", ".$dataregister["id_profession_specialization"].", ".$dataregister["age"].", '".$dataregister["date"]."', '".$dataregister["start_session"]."', ".$dataregister["duration"].", '".$dataregister["type_date"]."', '".$dataregister["commentary"]."')";

        if($dbresult = $dbcimo->query($sql)==TRUE){
            $this->dbcimo = null;
            return true;
        }
        else{
            $this->dbcimo = null;
            return false;
        }
    }
}

?>