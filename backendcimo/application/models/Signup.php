<?php

class Signup extends CI_Model {

    public function __construct(){
        parent::__construct();
    }

    public function check_user($username){
        $dbcimo = $this->load->database('default', TRUE);
        $dbresult = $dbcimo->query("SELECT * FROM user WHERE username = '".$username."'");

        if($dbresult->num_rows()>0){
            $this->dbcimo = null;
            return false;
        }
        else {
            $this->dbcimo = null;
            return true;
        }
    }

    public function check_email($email){
        $dbcimo = $this->load->database('default', TRUE);
        $dbresult = $dbcimo->query("SELECT * FROM user WHERE email = '".$email."'");

        if($dbresult->num_rows()>0){
            $this->dbcimo = null;
            return false;
        }
        else {
            $this->dbcimo = null;
            return true;
        }
    }

    public function sign_up($dataregister){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "INSERT INTO user VALUES(null, '".$dataregister["username"]."', md5('".$dataregister["password"]."'), '".$dataregister["name"]."', '".$dataregister["lastname"]."', ".$dataregister["role"].", '".$dataregister["email"]."', '".$dataregister["phone"]."', '".$dataregister["nationality"]."', '".$dataregister["dui_or_passport"]."', '".$dataregister["creation_date"]."', ".$dataregister["confirm_email"].")";

        if($dbcimo->query($sql)==TRUE){
            $this->dbcimo = null;
            return true;
        }
        else{
            $this->dbcimo = null;
            return false;
        }
    }

    public function sign_up_doctor($dataregister){
        $dbcimo = $this->load->database('default', TRUE);

        $sql = "INSERT INTO user VALUES(null, '".$dataregister["username"]."', md5('".$dataregister["password"]."'), '".$dataregister["name"]."', '".$dataregister["lastname"]."', ".$dataregister["role"].", '".$dataregister["email"]."', '".$dataregister["phone"]."', '".$dataregister["nationality"]."', '".$dataregister["dui_or_passport"]."', '".$dataregister["creation_date"]."', ".$dataregister["confirm_email"].")";
        
        if($dbcimo->query($sql)==TRUE){
            
            $sql = "SELECT id FROM user WHERE username = '".$dataregister["username"]."'";
            $dbresult = $dbcimo->query($sql);

            if($dbresult->num_rows()>0){
                
                $row = $dbresult->row_array();
                $sql = "INSERT INTO doctor_information VALUES(null, ".$row["id"].", null, null, ".$dataregister["confirm_info"].")";

                if($dbcimo->query($sql)==TRUE){
                    
                    $sql = "SELECT id FROM doctor_information WHERE id_user = ".$row["id"];
                    $dbresult = $dbcimo->query($sql);

                    if($dbresult->num_rows()>0){
                        $row2 = $dbresult->row_array();
                        $sql = "INSERT INTO doctor_rel_specialization VALUES(null, ".$row2["id"].", ".$dataregister["id_profession_specialization"].")";

                        if($dbcimo->query($sql)==TRUE){
                            $this->dbcimo = null;
                            return true;
                        }
                        else{
                            $this->dbcimo = null;
                            return false;
                        }
                    }
                    else{
                        $this->dbcimo = null;
                        return false;
                    }
                }
                else{
                    $this->dbcimo = null;
                    return false;
                }
            }
            else{
                $this->dbcimo = null;
                return false;
            }
            
        }
        else{
            $this->dbcimo = null;
            return false;
        }
    }
}

?>