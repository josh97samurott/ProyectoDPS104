<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

defined('BASEPATH') OR exit('No direct script access allowed');

class Payment extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model("Payment_user");

	}

	public function index()
	{

	}

	public function payment(){
       // $JSONData = file_get_contents("php://input");
		//$dataObject = json_decode($JSONData);

        //$id = $dataObject->iduser;

	    $id = $this->input->get("id");
	   //$id=2;

		if(isset($id)==true){
            $info= $this->Payment_user->payment_user($id);
			


		/*	$billing_data = array( 	
				'id' => $info["id"],
				'id_appoiment_request' => $["id_appoiment_request"],
				'date' => $data["date"],
				'description' => $data["description"],
				'number_card' => $data["number_card"],
                'expiration_date_card' => $data["expiration_date_card"],
                'to_name_card' => $data["to_name_card"],
                'security_code' => $data["security_code"],
                'tota' => $data["total"],
                'state' => $data["state"]
			);*/
				
			$data["json"] = $info;
			//$data["json"]["access"] = "true"; 
				
			$this->load->view("backend/json_payment.php", $data);
		}
		else{
			$data["json"] = array(
				"access" => "false"
			);

			$this->load->view("backend/json_payment.php", $data);
        }
        
	}

	

}
