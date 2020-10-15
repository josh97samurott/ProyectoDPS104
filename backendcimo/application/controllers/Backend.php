<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Backend extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model("Login");
	}

	public function index()
	{
		if ( $this->session->userdata("id") !== null && $this->session->userdata("username") !== null && $this->session->userdata("name") !== null && $this->session->userdata("lastname") !== null && $this->session->userdata("email") !== null ){
			
		}
		else{
			$this->load->view("log_in");
		}
	}


	public function log_in(){
		if ( $this->session->userdata("id") == null && $this->session->userdata("username") == null && $this->session->userdata("name") == null && $this->session->userdata("lastname") == null && $this->session->userdata("email") == null){
			$username = $this->input->get("username");
			$password = $this->input->get("password");

			if($this->Login->log_in($username, $password)){
				$data = $this->Login->save_session($username);

				//role = 0 (Administracion)
				//role = 1 (Doctor)
				//role = 2 (Paciente)
				$user_data = array( 	
					'id' => $data["id"],
					'username' => $data["username"],
					'name' => $data["name"],
					'lastname' => $data["lastname"],
					'email' => $data["email"],
					'role' => $data["role"]
				);
				
				$this->session->set_userdata($user_data);
				
				$data["json"] = array(
					"access" => "1",
					'role' => $data["role"]
				);
				
				$this->load->view("backend/json_log_in.php", $data);
			}
			else{
				$data["json"] = array(
					"access" => "0"
				);

				$this->load->view("backend/json_log_in.php", $data);
			}
		}
		else{
			$data["json"] = $this->session->userdata();
			$this->load->view("backend/json_log_in.php", $data);
			$this->session->sess_destroy();
		}
	}
}
