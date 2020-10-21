<?php

class Manage_model extends CI_Model {

    public function __construct(){
        parent::__construct();
    }

    public function getappoiment(){
        $dbcimo = $this->load->database('default', TRUE);
        $db_result=$dbcimo->query("SELECT DISTINCT a.id as id_billing, a.date as date_billing , a.total, a.state, b.id as id_ap, b.id_profession_specialization, b.age, b.date, b.start_session, b.duration, b.type_date, b.commentary, c.id as id_u, c.name, c.lastname, c.email, c.phone, c.nationality, c.dui_or_passport FROM billing as a inner join appoiment_request as b on a.id_appoiment_request = b.id inner join user as c on b.id_pacient = c.id WHERE a.state = 'espera' AND b.type_date = 'videoconferencia' ");
        if($db_result->num_rows()>0){
          
            $dbcimo = null;
            return $db_result->result_array();
        }
        else{
            $dbcimo = null;
            return false;
        }
    }



    public function acceptvideo($dataregister){
        $dbcimo = $this->load->database('default', TRUE);
        $sql="INSERT INTO accept_request VALUES(null, ".$dataregister["id_doctor"].", '".$dataregister["link_meeting"]."', '".$dataregister["commentary"]."', ".$dataregister["id_billing"]." )" ;
        
        if($dbcimo->query($sql)==TRUE){
          
            $sql2="UPDATE billing SET state = 'cancelado' WHERE id = ".$dataregister["id_billing"]." ";
            $dbcimo->query($sql2);
            $dbcimo = null;
            return true;
        }
        else{
            $dbcimo = null;
            return false;
        }
    }


    public function getappoiment_chat(){
        $dbcimo = $this->load->database('default', TRUE);
        $db_result=$dbcimo->query("SELECT DISTINCT a.id as id_billing, a.date as date_billing , a.total, a.state, b.id as id_ap, b.id_profession_specialization, b.age, b.date, b.start_session, b.duration, b.type_date, b.commentary, c.id as id_u, c.name, c.lastname, c.email, c.phone, c.nationality, c.dui_or_passport FROM billing as a inner join appoiment_request as b on a.id_appoiment_request = b.id inner join user as c on b.id_pacient = c.id WHERE a.state = 'espera' AND b.type_date = 'chat en linea' ");
        if($db_result->num_rows()>0){
          
            $dbcimo = null;
            return $db_result->result_array();
        }
        else{
            $dbcimo = null;
            return false;
        }
    }


    public function acceptchat($dataregister){
        $dbcimo = $this->load->database('default', TRUE);
        $sql="INSERT INTO accept_request VALUES(null, ".$dataregister["id_doctor"].", '".$dataregister["link_meeting"]."', '".$dataregister["commentary"]."', ".$dataregister["id_billing"]." )" ;
        
        if($dbcimo->query($sql)==TRUE){
          
            $sql2="UPDATE billing SET state = 'cancelado' WHERE id = ".$dataregister["id_billing"]." ";
            $dbcimo->query($sql2);
            $dbcimo = null;
            return true;
        }
        else{
            $dbcimo = null;
            return false;
        }
    }


}

?>