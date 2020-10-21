<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Manage_appoiment extends CI_Controller {

	public function __construct(){
		parent::__construct();
        $this->load->model('Manage_model');
    }


	
	public function get_video_appoiment(){
       

       
            $info = $this->Manage_model->getappoiment();	
			$data["json"] = $info;
			//$data["json"]["access"] = "true"; 
				
			$this->load->view("backend/json_video_appoiment.php", $data);

			
        
	}

	public function accept_video(){
		$JSONData = file_get_contents("php://input");
		$dataObject = json_decode($JSONData);
        
        $id_doctor = $dataObject->id_doctor;
		$link_meeting = $dataObject->link_meeting;
        $commentary = $dataObject->commentary;
        $id_billing = $dataObject->id_billing;
        

		
		
			if(isset($link_meeting)==true && isset($commentary)==true && isset($id_doctor)==true && isset($id_billing)==true ){
				$datos = array(
                    "id_doctor" => $id_doctor,
					"link_meeting" => $link_meeting,
                    "commentary" => $commentary,
                    "id_billing" => $id_billing
				);

				if($this->Manage_model->acceptvideo($datos)){
					$data["json"] = array(
						"access" => "true"
					);
				}
				else{
					$data["json"] = array(
						"access" => "false"
					);
				}

				$this->load->view("backend/json_accept_videoconference.php", $data);
			}
			else{
				$data["json"] = array(
					"access" => "false"
				);

				$this->load->view("backend/json_accept_videoconference.php", $data);
			}
		
		

    }
    

    public function get_chat_appoiment(){
             
        $info = $this->Manage_model->getappoiment_chat();	
        $data["json"] = $info;
        //$data["json"]["access"] = "true"; 
            
        $this->load->view("backend/json_chat_appoiment.php", $data);
        
    }



    public function accept_chat(){
		$JSONData = file_get_contents("php://input");
		$dataObject = json_decode($JSONData);
        
        $id_doctor = $dataObject->id_doctor;
		$link_meeting = $dataObject->link_meeting;
        $commentary = $dataObject->commentary;
        $id_billing = $dataObject->id_billing;
        

		
		
			if(isset($link_meeting)==true && isset($commentary)==true && isset($id_doctor)==true && isset($id_billing)==true ){
				$datos = array(
                    "id_doctor" => $id_doctor,
					"link_meeting" => $link_meeting,
                    "commentary" => $commentary,
                    "id_billing" => $id_billing
				);

				if($this->Manage_model->acceptchat($datos)){
					$data["json"] = array(
						"access" => "true"
					);
				}
				else{
					$data["json"] = array(
						"access" => "false"
					);
				}

				$this->load->view("backend/json_accept_chatconference.php", $data);
			}
			else{
				$data["json"] = array(
					"access" => "false"
				);

				$this->load->view("backend/json_accept_chatconference.php", $data);
			}
		
		

    }


}