function close_box()
	{
		$('#backdrop, .lightbox').fadeOut(300), function() {
			$('#backdrop, .lightbox').css('display', 'none');
		};
	}

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

	// lightbox

	$('.title').on('click', function(e) {

		var target = $(e.target);
		var parent = target.parentElement;
		var src = parent.attr('src');

		$('.lightbox img').attr('src', src);
        $('.lightbox').fadeIn(300);      // to make the box visible
        $('#backdrop').fadeIn(800);       // to make the backdrop visible
    });


    $('#backdrop').click(function(){
					close_box();
				});

});
