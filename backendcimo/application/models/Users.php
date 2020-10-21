<?php

class Users extends CI_Model {

    public function __construct(){
        parent::__construct();
    }

    public function getPacients(){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "SELECT * FROM user WHERE role = 2";
        $dbresult = $dbcimo->query($sql);

        if($dbresult->num_rows()>0){
            $dbcimo = null;
            return $dbresult->result_array();
        }
        else{
            $dbcimo = null;
            return false;
        }
    }

    public function getDoctors(){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "SELECT * FROM user as a inner join doctor_information as b ON a.id = b.id_user inner join doctor_rel_specialization as c on c.id_doctor_information = b.id inner join profession_and_specialization as d on d.id = c.id_profession_specialization WHERE a.role = 1";
        $dbresult = $dbcimo->query($sql);

        if($dbresult->num_rows()>0){
            $dbcimo = null;
            return $dbresult->result_array();
        }
        else{
            $dbcimo = null;
            return false;
        }

    }

    public function getAdministrators(){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "SELECT * FROM user WHERE role = 0";
        $dbresult = $dbcimo->query($sql);

        if($dbresult->num_rows()>0){
            $dbcimo = null;
            return $dbresult->result_array();
        }
        else{
            $dbcimo = null;
            return false;
        }
    }

    public function getUserInfo($id){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "SELECT * FROM user WHERE id = $id";
        $dbresult = $dbcimo->query($sql);

        if($dbresult->num_rows()>0){
            $dbcimo = null;
            return $dbresult->row_array();
        }
        else{
            $dbcimo = null;
            return false;
        }
    }

    public function getUserInfoDoctor($id_user){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "SELECT * FROM user as a inner join doctor_information as b ON a.id = b.id_user inner join doctor_rel_specialization as c on c.id_doctor_information = b.id inner join profession_and_specialization as d on d.id = c.id_profession_specialization WHERE a.id = $id_user";
        $dbresult = $dbcimo->query($sql);

        if($dbresult->num_rows()>0){
            $dbcimo = null;
            return $dbresult->row_array();
        }
        else{
            $dbcimo = null;
            return false;
        }
    }

    public function check_email_for_update($id, $email){
        $dbcimo = $this->load->database('default', TRUE);
        $dbresult = $dbcimo->query("SELECT * FROM user WHERE id != $id AND email = '".$email."'");

        if($dbresult->num_rows()>0){
            $this->dbcimo = null;
            return false;
        }
        else {
            $this->dbcimo = null;
            return true;
        }
    }

    public function check_user_for_update($id, $username){
        $dbcimo = $this->load->database('default', TRUE);
        $dbresult = $dbcimo->query("SELECT * FROM user WHERE id != $id AND username = '".$username."'");

        if($dbresult->num_rows()>0){
            $this->dbcimo = null;
            return false;
        }
        else {
            $this->dbcimo = null;
            return true;
        }
    }

    public function update_user($dataregister){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "UPDATE user SET 
            `username` = '".$dataregister["username"]."', 
            `password` = md5('".$dataregister["password"]."'), 
            `name` = '".$dataregister["name"]."', 
            `lastname` = '".$dataregister["lastname"]."', 
            `role` = ".$dataregister["role"].", 
            `email` = '".$dataregister["email"]."', 
            `phone` = '".$dataregister["phone"]."', 
            `nationality` = '".$dataregister["nationality"]."', 
            `dui_or_passport` = '".$dataregister["dui_or_passport"]."' WHERE id = ".$dataregister["id"];

        if($dbcimo->query($sql)==TRUE){
            $this->dbcimo = null;
            return true;
        }
        else{
            $this->dbcimo = null;
            return false;
        }
    }

    public function update_doctor($dataregister){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "UPDATE user SET 
            `username` = '".$dataregister["username"]."', 
            `password` = md5('".$dataregister["password"]."'), 
            `name` = '".$dataregister["name"]."', 
            `lastname` = '".$dataregister["lastname"]."', 
            `role` = ".$dataregister["role"].", 
            `email` = '".$dataregister["email"]."', 
            `phone` = '".$dataregister["phone"]."', 
            `nationality` = '".$dataregister["nationality"]."', 
            `dui_or_passport` = '".$dataregister["dui_or_passport"]."' WHERE id = ".$dataregister["id"];
        
        $dbcimo->query($sql);

        $sql = "UPDATE doctor_information SET
            `observation` = '".$dataregister["observation"]."',
            `confirm_info` = ".$dataregister["confirm_info"]." WHERE id = ".$dataregister["id_doctor_information"];
        
        $dbcimo->query($sql);

        $sql = "UPDATE doctor_rel_specialization SET
            `id_profession_specialization` = ".$dataregister["id_profession_specialization"]." WHERE id_doctor_information = ".$dataregister["id_doctor_information"];

        $dbcimo->query($sql);

        return true;
    }

    public function delete_user($id){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "DELETE FROM user WHERE id = $id";

        if($dbcimo->query($sql) == TRUE){
            $this->dbcimo = null;
            return true;
        }
        else{
            $this->dbcimo = null;
            return false;
        }

    }

    public function delete_doctor($id_user, $id_doctor_information, $id_profession_specialization){
        $dbcimo = $this->load->database('default', TRUE);
        $sql = "DELETE FROM user WHERE id = $id_user";
        $dbcimo->query($sql);
        $sql = "DELETE FROM doctor_information WHERE id = $id_doctor_information";
        $dbcimo->query($sql);
        $sql = "DELETE FROM doctor_rel_specialization  WHERE id_doctor_information = $id_doctor_information AND id_profession_specialization = $id_profession_specialization";
        $dbcimo->query($sql);
    }

    
}