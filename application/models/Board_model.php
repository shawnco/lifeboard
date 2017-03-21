<?php

class Board_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function getBoards()
    {
        return $this->db->get('dashboard')->result_array();
    }
}