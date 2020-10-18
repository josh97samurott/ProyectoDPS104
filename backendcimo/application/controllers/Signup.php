<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model("Signup");
	}

	public function index()
	{

    }
    
	public function sign_up(){
		$JSONData = file_get_contents("php://input");
		$dataObject = json_decode($JSONData);
		/*$username = $this->input->post("username");
		$password = $this->input->post("password");
		$name = $this->input->post("name");
		$lastname = $this->input->post("lastname");
		$role = $this->input->post("role");
		$email = $this->input->post("email");
		$phone = $this->input->post("phone");
		$nationality = $this->input->post("nationality");
		$dui_or_passport = $this->input->post("dui_or_passport");*/
		$username = $dataObject->username;
		$password = $dataObject->password;
		$name = $dataObject->name;
		$lastname = $dataObject->lastname;
		$role = $dataObject->role;
		$email = $dataObject->email;
		$phone = $dataObject->phone;
		$nationality = $dataObject->nationality;
		$dui_or_passport = $dataObject->dui_or_passport;
		
		if($role == 2){
			if(isset($username)==true && isset($password)==true && isset($name)==true && isset($lastname)==true && isset($email)==true && isset($nationality)==true){
				$data = array(
					"username" => $username,
					"password" => $password,
					"name" => $name,
					"lastname" => $lastname,
					"role" => $role,
					"email" => $email,
					"phone" => $phone,
					"nationality" => $nationality,
					"dui_or_passport" => $dui_or_passport,
					"creation_date" => date("d")."/".date("m")."/".date("Y"),
					"confirm_email" => 0
				);

				if($this->Signup->sign_up($data)){
					$data["json"] = array(
						"access" => "1"
					);
				}
				else{
					$data["json"] = array(
						"access" => "0"
					);
				}

				$this->load->view("backend/json_sign_up.php", $data);
			}
			else{
				$data["json"] = array(
					"access" => "0"
				);

				$this->load->view("backend/json_sign_up.php", $data);
			}
		}
		else if($role == 1){

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
