<?php

function resolve($from, $to)
{
  $e = edges::$edges;
  $s = stations::$stations;
  $n = nodes::$station2edge;

  if ($from && $to) {
    return dijkstra($from,$to,$s,$e,$n);
  } elseif ( ! $from && ! $to) {
    return array_keys($s);
  } else {
    $o = array();
    $t = $from ?: $to;

    foreach ($e as $k=>$v) {

      $a=$v['source']==$t;
      $b=$v['target']==$t;

      if ($a OR ( ! $a && $b)) {
        $i=(string)$v[$a?'source':'target'];
        $j=(string)$v[!$a?'source':'target'];

        empty($o) && $o = $s[$i];

        !isset($o['line']) && $o['line'] = array();
        !isset($o['next']) && $o['next'] = array();

        !in_array($v['line'],$o['line']) && $o['line'] []= $v['line'];

        $o['next'][$j] = $k;

      }

    }
  }
  return $o;
}

  function dijkstra($source,$target,$stations,$edges,$station2edge)
  {
    $infinity=INF;
    $d=array();
    foreach($stations as $key=>$value)
    {
      $d[$key]=array('key'=>$key,'distance'=>'9999','is_active'=>'1','previous'=>null);
    }
    $d[$source]=array('key'=>$source,'distance'=>'0','is_active'=>'1','previous'=>$source);
    foreach($d as $key=>$value)
    {
      $node=$value;
      foreach($d as $f=>$g){
        if($g['is_active']==1 && $g['distance']<$node['distance'])
        {
          $node=$g;
        }
      }
      $d[$node['key']]['is_active']=0;
      if(is_infinite($node['distance']))
        return -1;
      $localedges=$station2edge[$node['key']];
      foreach($localedges as $edge)
      {
        $neighbor=$edges[$edge];
        $aux= $d[$node['key']]['distance']+$neighbor['weight'];
        if($neighbor['source']==$node['key'])
        {
          $intarget=$neighbor['target'];
          $insource=$neighbor['source'];
        }
        else
        {
          $insource=$neighbor['target'];
          $intarget=$neighbor['source'];
        }
        if($aux < $d[$intarget]['distance'])
        {
          $d[$intarget]['distance']=$aux;
          $d[$intarget]['previous']=$insource;
        }
      }
    }

    $o = array();
    $a=0;
    $route=$target;
    while( $route!=$source && $a<200)
    {
      $o []= (int) $route;
      $route=$d[$route]['previous'];
    }
    $o []= $route;
    return $o;
  }
