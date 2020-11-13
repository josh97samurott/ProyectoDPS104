<?php

class Calender_model extends CI_Model {

    public function __construct(){
        parent::__construct();
    }

    public function getcalender($dataregister){
        $dbcimo = $this->load->database('default', TRUE);
        $db_result=$dbcimo->query("SELECT DISTINCT a.link_meeting, a.commentary as commentary_doctor , c.id as id_appoiment, c.id_profession_specialization, c.date, c.start_session, c.duration, c.type_date, c.commentary as commentary_appoiment FROM accept_request as a inner join billing as b on a.id_billing = b.id inner join appoiment_request as c on b.id_appoiment_request = c.id  WHERE c.id_pacient = $dataregister  AND b.state = 'cancelado' ");
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