<?php

class User_model extends CI_Model {
    public $table = 'user';
    public $table_id = 'id';

    
    public function __construct(){
        
    }
    

    function find($id){
        $this->db->select();
        $this->db->from($this->table);
        $this->db->where($this->table_id, $id);

        $query = $this->db->get();
        return $query->row();
    }

    function findAll(){
        $this->db->select();
        $this->db->from($this->table);

        $query = $this->db->get();
        return $query->result();
    }

    function update_user($data) {
        $this->db->where($this->table_id, $data['id']);
        $result = $this->db->update($this->table, $data);

        if($result){
            return true;            
        }
        else{
            return false;
        }
                
    }

}