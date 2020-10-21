<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

defined('BASEPATH') OR exit('No direct script access allowed');

class Users_controller extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model("Users");
	}

	public function index()
	{

    }
    
    public function pacients(){
        
        $data["json"] = $this->Users->getPacients();
        $this->load->view("json_info_users.php", $data);

    }

    public function doctors(){
        $data["json"] = $this->Users->getDoctors();
        $this->load->view("json_info_users.php", $data);
    }

    public function administrators(){
        $data["json"] = $this->Users->getAdministrators();
        $this->load->view("json_info_users.php", $data);
    }

    public function get_user_information(){

        $id = $this->input->get("id");

        $data["json"] = $this->Users->getUserInfo($id);
        $this->load->view("json_info_users.php", $data);

    }

    public function get_doctor_information(){

        $id_user = $this->input->get("id_user");

        $data["json"] = $this->Users->getUserInfoDoctor($id_user);
        $this->load->view("json_info_users.php", $data);

    }

    public function delete_user(){
        $id = $this->input->get("id");
        if($this->Users->delete_user($id)){
            $data["json"] = array(
                "res" => 1
            );
        }
        else{
            $data["json"] = array(
                "res" => 0
            );
        }

        $this->load->view("json_info_users.php", $data);
    }

    public function delete_doctor(){
        $id_user = $this->input->get("id_user");
        $id_doctor_information = $this->input->get("id_info");
        $id_profession_specialization = $this->input->get("id_p");

        $this->Users->delete_doctor($id_user, $id_doctor_information, $id_profession_specialization);

        $data["json"] = array(
            "res" => 1
        );

        $this->load->view("json_info_users.php", $data);
    }

    public function update_user(){
		$JSONData = file_get_contents("php://input");
        $dataObject = json_decode($JSONData);
        $id = $dataObject->id;
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
			if(isset($id)==true && isset($username)==true && isset($password)==true && isset($name)==true && isset($lastname)==true && isset($email)==true && isset($nationality)==true){
				$data = array(
                    "id" => $id,
					"username" => $username,
					"password" => $password,
					"name" => $name,
					"lastname" => $lastname,
					"role" => $role,
					"email" => $email,
					"phone" => $phone,
					"nationality" => $nationality,
					"dui_or_passport" => $dui_or_passport
				);

				if($this->Users->check_user_for_update($data["id"], $data["username"])){

					if($this->Users->check_email_for_update($data["id"], $data["email"])){
                        
						if($this->Users->update_user($data)){
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

				$this->load->view("json_info_users", $data);
			}
			else{
				$data["json"] = array(
					"res" => "0"
				);

				$this->load->view("json_info_users", $data);
			}
		}
		else if($role == 1){
            $profession_specialization_select = $dataObject->profession_specialization_select;
            $confirm_info = $dataObject->confirm_info;
            $id_doctor_information = $dataObject->id_doctor_information;
            $observation = $dataObject->observation;

			if(isset($username)==true && isset($password)==true && isset($name)==true && isset($lastname)==true && isset($email)==true && isset($nationality)==true){
				$data = array(
                    "id" => $id,
					"username" => $username,
					"password" => $password,
					"name" => $name,
					"lastname" => $lastname,
					"role" => $role,
					"email" => $email,
					"phone" => $phone,
					"nationality" => $nationality,
					"dui_or_passport" => $dui_or_passport,
                    "id_profession_specialization" => $profession_specialization_select,
                    "id_doctor_information" => $id_doctor_information,
                    "observation" => $observation,
                    "confirm_info" => $confirm_info
				);

				if($this->Users->check_user_for_update($data["id"], $data["username"])){

					if($this->Users->check_email_for_update($data["id"], $data["email"])){
						
						if($this->Users->update_doctor($data)){
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
				

				$this->load->view("json_info_users", $data);

			}
			else{
				$data["json"] = array(
					"res" => "0"
				);

				$this->load->view("json_info_users", $data);
			}

		}

	}
}
