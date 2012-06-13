<?php

class api_controller extends base_controller
{

  public static function resolve_path() {
    return static::to_json(resolve(params('from'), params('to')));
  }

}
