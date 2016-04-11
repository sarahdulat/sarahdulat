$('document').ready(function() {

	$('#burger-show').click(function() {
		$('.dropdown').slideToggle(800);
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

	// $('.portImage').click(function() {
	// 	$(this).find('.title').css('opacity', 0.9);
 //    });

});
