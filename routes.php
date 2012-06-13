<?php

root('home#index', array('path' => 'home'));

get('/api(/:from(/:to))', 'api#resolve_path', array('path' => 'resolve_path'));
