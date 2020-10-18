<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model("Login");
	}

	public function index()
	{

	}

	public function log_in(){
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
				
			$data["json"] = $user_data;
			$data["json"]["access"] = "1"; 
				
			$this->load->view("backend/json_log_in.php", $data);
		}
		else{
			$data["json"] = array(
				"access" => "0"
			);

			$this->load->view("backend/json_log_in.php", $data);
		}
	}

	public function register_videoconference(){
		$JSONData = file_get_contents("php://input");
		$dataObject = json_decode($JSONData);

		$id_pacient=$dataObject->id_pacient;
		$id_profession_specialization=$dataObject->id_profession_specialization;
		$age= $dataObject->age;
		$date=$dataObject->date;
		$start_session=$dataObject->start_session;
		$duration=$dataObject->duration;
		$type_date=$dataObject->type_date;
		$commentary=$dataObject->commentary;

		if(isset($id_pacient)==true && isset($id_profession_specialization)==true && isset($age)==true && isset($date)==true && isset($start_session)==true && isset($duration)==true && isset($type_date)==true && isset($commentary)==true){
			$data = array(
				"id_pacient" => $id_pacient,
				"id_profession_specialization" => $id_profession_specialization,
				"age" => $age,
				"date" => $date,
				"start_session" => $start_session,
				"duration" => $duration,
				"type_date" => $type_date,
				"commentary" => $commentary
			);

			if($this->Signup->sign_up($data)){
				$data["resultado"] = array(
					"res" => "funciono"
				);
			}
			else{
				$data["resultado"] = array(
					"res" => "no funciono"
				);
			}

			$this->load->view("backend/json_sign_up.php", $data);
		}
	}
}
