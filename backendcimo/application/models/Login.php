<?php

class Login extends CI_Model {

    public function __construct(){
        parent::__construct();
    }

    public function log_in($username, $password){
        $dbcimo = $this->load->database('default', TRUE);
        $dbresult = $dbcimo->query("SELECT id, role FROM user WHERE username = '$username' AND password = MD5('$password')");
        if($dbresult->num_rows()>0){
            $temp = $dbresult->row_array();
            if($temp["role"] == 1){
                $dbtemp = $dbcimo->query("SELECT * FROM doctor_information WHERE id_user = ". $temp["id"]);
                $temp2 = $dbtemp->row_array();
                if($temp2["confirm_info"] == 0){
                    $this->dbcimo = null;
                    return false;
                }
                else{
                    $this->dbcimo = null;
                    return true;
                }
            }
            else{
                $this->dbcimo = null;
                return true;
            }
        }
        else{
            $this->dbcimo = null;
            return false;
        }
    }

    public function save_session($username){
        $dbcimo = $this->load->database('default', TRUE);
        $dbresult = $dbcimo->query("SELECT * FROM user WHERE username = '$username'");
        if($dbresult->num_rows()>0){
            $dbcimo = null;
            return $dbresult->row_array();
        }
        else{
            $dbcimo = null;
            return false;
        }
    }
}

?>