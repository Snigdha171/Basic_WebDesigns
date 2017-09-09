$(document).ready(function(){
  $("#sec-tools1").on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
  $("#sec-tools2").on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
  $("#sec-tools3").on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
  $("#sec-tools4").on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

});