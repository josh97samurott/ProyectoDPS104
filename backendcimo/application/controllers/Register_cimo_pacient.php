<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

defined('BASEPATH') OR exit('No direct script access allowed');

class Register_cimo_pacient extends CI_Controller {

	public function __construct(){
		parent::__construct();
		//en este modelo va el registro y el pago para la tabla billing
		$this->load->model("Register_conference");
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

		//comienzan datos para la tabla billing

		$current_date=$dataObject->current_date;
		$description=$dataObject->description;
		$number_card=$dataObject->number_card;
		$expiration_date_card=$dataObject->expiration_date_card;
		$to_name_card=$dataObject->to_name_card;
		$security_code=$dataObject->security_code;
		$total=$dataObject->total;
		$state=$dataObject->state;

		if(isset($id_pacient)==true && isset($id_profession_specialization)==true && isset($age)==true && isset($date)==true && isset($start_session)==true && isset($duration)==true && isset($type_date)==true && isset($commentary)==true
		&& isset($description)==true && isset($number_card)==true && isset($expiration_date_card)==true && isset($to_name_card)==true && isset($security_code)==true && isset($total)==true && isset($state)==true && isset($current_date)==true){
			$data = array(
				"id_pacient" => $id_pacient,
				"id_profession_specialization" => $id_profession_specialization,
				"age" => $age,
				"date" => $date,
				"start_session" => $start_session,
				"duration" => $duration,
				"type_date" => $type_date,
				"commentary" => $commentary,

				//aqui van datos para tabla billing
				"current_date" => $current_date,
				"description" => $description,
				"number_card" => $number_card,
				"expiration_date_card" => $expiration_date_card,
				"to_name_card" => $to_name_card,
				"security_code" => $security_code,
				"total" => $total,
				"state" => $state
			);

			if($this->Register_conference->register_videoconference($data)){
				$data["resultado"] = array(
					"res" => "funciono"
				);
			}
			else{
				$data["resultado"] = array(
					"res" => "no funciono"
				);
			}

			$this->load->view("backend/json_register_videoconference.php", $data);
		}
	}


	public function register_chatconference(){
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

		//comienzan datos para la tabla billing

		$current_date=$dataObject->current_date;
		$description=$dataObject->description;
		$number_card=$dataObject->number_card;
		$expiration_date_card=$dataObject->expiration_date_card;
		$to_name_card=$dataObject->to_name_card;
		$security_code=$dataObject->security_code;
		$total=$dataObject->total;
		$state=$dataObject->state;

		if(isset($id_pacient)==true && isset($id_profession_specialization)==true && isset($age)==true && isset($date)==true && isset($start_session)==true && isset($duration)==true && isset($type_date)==true && isset($commentary)==true
		&& isset($description)==true && isset($number_card)==true && isset($expiration_date_card)==true && isset($to_name_card)==true && isset($security_code)==true && isset($total)==true && isset($state)==true && isset($current_date)==true ){
			$data = array(
				"id_pacient" => $id_pacient,
				"id_profession_specialization" => $id_profession_specialization,
				"age" => $age,
				"date" => $date,
				"start_session" => $start_session,
				"duration" => $duration,
				"type_date" => $type_date,
				"commentary" => $commentary,

				//aqui van datos para tabla billing
				"current_date" => $current_date,
				"description" => $description,
				"number_card" => $number_card,
				"expiration_date_card" => $expiration_date_card,
				"to_name_card" => $to_name_card,
				"security_code" => $security_code,
				"total" => $total,
				"state" => $state
			);

			if($this->Register_conference->register_chatconference($data)){
				$data["resultado"] = array(
					"res" => "funciono"
				);
			}
			else{
				$data["resultado"] = array(
					"res" => "no funciono"
				);
			}

			$this->load->view("backend/json_register_chatconference.php", $data);
		}
	}
}
