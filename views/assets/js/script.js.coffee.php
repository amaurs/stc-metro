(($)->
  $ ->
    output = $('#output')
    from   = $('#from')
    to     = $('#to')
    all    = <?php echo json_encode(stations::$stations); ?>

    $('#go').click ->
      $.getJSON location.href + "index.php/api/#{from.val()}/#{to.val()}", (data) ->
        list = $('<ol/>')
        $.each data, (i,v) ->
          item = $('<li>').text all[v].name
          item.appendTo list
        output.html list
)(jQuery)
