    function close_box()
			{
				$('#backdrop, .box').fadeOut(300), function() {
					$('#backdrop, .box').css('display', 'none');
				};
			}

$(document).ready(function(){
    $(".trigger").click(function(e) {
    	e.preventDefault()           // to keep from opening href in new window
        var portImage = $(this).attr('href');     // to extract the image url from img's src
        var index = '<img src="' + portImage + '">';     // to create an image element with the a's href as its src
        $("#content").html(index);     // to select the content div container and set the src of its embedded image to the src value
        $(".box").fadeIn(300);      // to make the box visible
        $("#backdrop").fadeIn(800);       // to make the backdrop visible
    });

    $('#backdrop').click(function(){
					close_box();
				});
}); 