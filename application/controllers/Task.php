<?php

class Task extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Task_model');
    }

    public function getTasks()
    {
        echo json_encode($this->Task_model->getTasks());
    }
}