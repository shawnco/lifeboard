<?php

class Widget extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Widget_model');
    }

    public function getWidgets()
    {
        $dashboardId = $this->input->get('dashboardId');
        echo json_encode($this->Widget_model->getWidgets($dashboardId));
    }
}