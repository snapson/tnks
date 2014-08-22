$(function() {

  var socket = io();

  socket.emit('init', 'Create the game stage');

  socket.on('init', function(Tnks) {
    if (Tnks) {
      var imp = new Impedient();
      var stage = $('#stage');

      stage.css({ width: Tnks.stage.w, height: Tnks.stage.h});

      imp.setValues(Tnks.impedient.size, Tnks.impedient.count);
      imp.setTypes(Tnks.impedient.elements);

      imp.setFragments(Tnks.stage.w, Tnks.stage.h);
    }
  });

});