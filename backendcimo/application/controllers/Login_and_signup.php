<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

defined('BASEPATH') OR exit('No direct script access allowed');

class Login_and_signup extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model("Login");
		$this->load->model("Signup");
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

	public function sign_up(){
		$JSONData = file_get_contents("php://input");
		$dataObject = json_decode($JSONData);
		$username = $dataObject->username;
		$password = $dataObject->password;
		$name = $dataObject->name;
		$lastname = $dataObject->lastname;
		$role = $dataObject->role;
		$email = $dataObject->email;
		$phone = $dataObject->phone;
		$nationality = $dataObject->nationality;
		$dui_or_passport = $dataObject->dui_or_passport;
		
		if($role == 2 || $role == 0){
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

				if($this->Signup->check_user($data["username"])){

					if($this->Signup->check_email($data["email"])){
						if($this->Signup->sign_up($data)){
							$data["json"] = array(
								"res" => "1"
							);
						}
						else{
							$data["json"] = array(
								"res" => "0"
							);
						}
					}
					else{
						$data["json"] = array(
							"res" => "-2"
						);
					}	
				}
				else{
					$data["json"] = array(
						"res" => "-1"
					);
				}

				$this->load->view("backend/json_sign_up.php", $data);
			}
			else{
				$data["json"] = array(
					"res" => "0"
				);

				$this->load->view("backend/json_sign_up.php", $data);
			}
		}
		else if($role == 1){
			$profession_specialization_select = $dataObject->profession_specialization_select;
			$confirm_info = $dataObject->confirm_info;

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
					"confirm_email" => 0,
					"id_profession_specialization" => $profession_specialization_select,
					"confirm_info" => $confirm_info
				);

				if($this->Signup->check_user($data["username"])){

					if($this->Signup->check_email($data["email"])){
						
						if($this->Signup->sign_up_doctor($data)){
							$data["json"] = array(
								"res" => "1"
							);
						}
						else{
							$data["json"] = array(
								"res" => "0"
							);
						}
					}
					else{
						$data["json"] = array(
							"res" => "-2"
						);
					}
				}
				else{
					$data["json"] = array(
						"res" => "-1"
					);
				}
				

				$this->load->view("backend/json_sign_up.php", $data);

			}
			else{
				$data["json"] = array(
					"res" => "0"
				);

				$this->load->view("backend/json_sign_up.php", $data);
			}

		}

	}


}
