<?php

class Profession extends CI_Model {

    public function __construct(){
        parent::__construct();
    }

    public function get_profession_and_specialization(){
        $dbcimo = $this->load->database('default', TRUE);
        $dbresult = $dbcimo->query("SELECT * FROM profession_and_specialization");
        if($dbresult->num_rows()>0){
            $this->dbcimo = null;
            return $dbresult->result_array();
        }
        else{
            $this->dbcimo = null;
            return false;
        }
    }

}

?>