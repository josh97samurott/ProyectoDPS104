<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

defined('BASEPATH') OR exit('No direct script access allowed');

class Profession_and_specialization extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model("Profession");
	}

	public function index()
	{

	}

	public function get_profession(){
        if($this->Profession->get_profession_and_specialization() != false){
            $dataprofession = $this->Profession->get_profession_and_specialization();

			$data["json"] = $dataprofession;
			
			$this->load->view("json_profession_specialization.php", $data);
        }
    }
}
