<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_info extends CI_Controller {

	public function __construct(){
		parent::__construct();
        $this->load->database();
        $this->load->model('User_model');
    }


	


	public function user_info(){
        $id = $this->input->get("id");

        if(isset($id)==true){
            $info = $this->User_model->find($id);	
			$data["json"] = $info;
			//$data["json"]["access"] = "true"; 
				
			$this->load->view("backend/json_user_info.php", $data);
        }
        else{
			$data["json"] = array(
				"access" => "false"
			);

			$this->load->view("backend/json_user_info.php", $data);
        }
	}
}