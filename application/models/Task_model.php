<?php

class Task_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function getTasks()
    {
        return $this->db->get('tasks')->result_array();
        // // Grab all the IDs. Then add -1.
        // $this->db->distinct();
        // $this->db->select('id');
        // $ids = $this->db->get('tasks')->result_array();
        // array_unshift($ids, array('id' => -1));

        // // Make output array
        // $output = array();
        // foreach($ids as $id)
        // {
        //     $this->db->where('parent', $id['id']);
        //     $output[$id['id']] = $this->db->get('tasks')->result_array();
        // }
        // return $output;
    }
}