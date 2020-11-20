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

	public function user_update(){/*
		if ($this->input->server("REQUEST_METHOD") == "POST"){
			$id = $this->input->post("id");
			$data["name"] = $this->input->post("name");
		}
		$this->User_model->update_user($id, $data);
		*/
		$JSONData = file_get_contents("php://input");
		$dataObject = json_decode($JSONData);
		
		$id = $dataObject->id;
		$username = $dataObject->username;
		$name = $dataObject->name;
		$lastname = $dataObject->lastname;
		$email = $dataObject->email;
		$phone = $dataObject->phone;
		$nationality = $dataObject->nationality;
		$dui_or_passport = $dataObject->dui_or_passport;
		$password = $dataObject->password;
		
			if(isset($id)==true && isset($username)==true  && isset($name)==true && isset($lastname)==true && isset($email)==true && isset($nationality)==true){
				if($password == "" || $password == null){
					$datos = array(
						"id" => $id,
						"username" => $username,
						"name" => $name,
						"lastname" => $lastname,
						"email" => $email,
						"phone" => $phone,
						"nationality" => $nationality,
						"dui_or_passport" => $dui_or_passport
					);
				}
				else{
					$datos = array(
						"id" => $id,
						"username" => $username,
						"name" => $name,
						"lastname" => $lastname,
						"email" => $email,
						"phone" => $phone,
						"nationality" => $nationality,
						"dui_or_passport" => $dui_or_passport,
						"password" => md5($password)
					);
				}
				

				if($this->User_model->update_user($datos)){
					$data["json"] = array(
						"access" => "true"
					);
				}
				else{
					$data["json"] = array(
						"access" => "false"
					);
				}

				$this->load->view("backend/json_update_user.php", $data);
			}
			else{
				$data["json"] = array(
					"access" => "false"
				);

				$this->load->view("backend/json_update_user.php", $data);
			}
		
		

	}
}