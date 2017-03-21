<?php

class Widget_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function getWidgets($dashboardId)
    {
        $this->db->where('dashboard_id', $dashboardId);
        return $this->db->get('widget')->result_array();
    }
}