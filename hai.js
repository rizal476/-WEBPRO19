$(document).ready(function() {
	$('a').click(function() {
		$('a.active').removeClass('active');
		$(this).addClass('active');
    });

    $('a[href^="#"]').on('click', function(e) {
    	e.preventDefault();

    	var target = this.hash;
    	var $target = $(target);

    	$('html,body').animate({
    		'scrollTop': $target.offset().top
    	}, 800, 'swing');
    });
});
