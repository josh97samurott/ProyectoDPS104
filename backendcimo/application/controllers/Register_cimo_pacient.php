<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

defined('BASEPATH') OR exit('No direct script access allowed');

class Register_cimo_pacient extends CI_Controller {

	public function __construct(){
		parent::__construct();
	}

	public function index()
	{

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
