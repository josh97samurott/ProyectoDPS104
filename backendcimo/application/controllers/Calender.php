<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Calender extends CI_Controller {

	public function __construct(){
		parent::__construct();
        $this->load->model('Calender_model');
    }


	

	public function get_calender(){
		$JSONData = file_get_contents("php://input");
		$dataObject = json_decode($JSONData);
        
        $id_user = $dataObject->id_user;
        $role = $dataObject->role;
		

                $datos=$this->Calender_model->getcalender($id_user, $role);
                $data["json"] = $datos;

				$this->load->view("backend/json_calender.php", $data);
		

    }


}
?>