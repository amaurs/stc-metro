<?php

chdir(__DIR__);

require 'tetlphp/framework/initialize.php';

import(array('application', 'helpers', 'tamal', 'a_record'));
import(array('development' => array('chess', 'coffee')));

run(function () {
});
