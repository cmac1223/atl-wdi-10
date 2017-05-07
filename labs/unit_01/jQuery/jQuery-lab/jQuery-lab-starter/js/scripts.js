$(document).ready(function(){

var teams = ['New York Giants', 'Washington Redskins', 'Philadelphia Eagles', 'Dallas Cowboys'];

$(this).on('keyup', function($event){
  if ($event.keyCode === 32) {
  alert('spacebar!')
}
});

});
