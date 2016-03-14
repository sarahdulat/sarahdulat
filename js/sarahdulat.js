$('document').ready(function() {

	$('#hide').click(function() {
	  $('.jumbotron').slideUp(800);
	});
	$('#show').click(function() {
		$('.jumbotron').slideDown(800);
	});

		//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.backToTop').fadeIn();
		} else {
			$('.backToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.backToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

		$('#submit').click(function(){
		alert("Thanks for joining our cause!");
	});

});