<?php

class Pages extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
    }

    public function index()
    {
        redirect('http://localhost:4200');
    }
}