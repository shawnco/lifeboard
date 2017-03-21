<?php

class Board extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Board_model');
    }

    public function getBoards()
    {
        echo json_encode($this->Board_model->getBoards());
    }
}