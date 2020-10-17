<?php

class Signup extends CI_Model {

    public function __construct(){
        parent::__construct();
    }

    public function sign_up($dataregister){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "INSERT INTO user VALUES(null, '".$dataregister["username"]."', md5('".$dataregister["password"]."'), '".$dataregister["name"]."', '".$dataregister["lastname"]."', ".$dataregister["role"].", '".$dataregister["email"]."', '".$dataregister["phone"]."', '".$dataregister["nationality"]."', '".$dataregister["dui_or_passport"]."', '".$dataregister["creation_date"]."', ".$dataregister["confirm_email"].")";

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