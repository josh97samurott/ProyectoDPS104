<?php

class Payment_user extends CI_Model {

    public function __construct(){
        parent::__construct();
    }

    public function payment_user($dataid){
        $dbcimo = $this->load->database('default', TRUE);
        $db_result = $dbcimo->query("SELECT b.* FROM appoiment_request as a inner join billing as b on a.id=b.id_appoiment_request WHERE a.id_pacient = $dataid AND b.state = 'cancelado' ");
        
        if($db_result->num_rows()>0){

           
            $dbcimo = null;
            return $db_result->result_array();
        }
        else{
            $dbcimo = null;
            return false;
        }
    }


}

?>