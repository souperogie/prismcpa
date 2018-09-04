$(document).ready(function() {

	// About --> Dropdown
	$('ul.nav li.dropdown').hover(function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
		return false;
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > 80) {
			$('.navbar-scroll').fadeIn();
			//$('.navbar').hide();
		}
		else {
			$('.navbar-scroll').fadeOut();
			//$('.navbar').show();
		}
		return false;
	});

	// btn to top
	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
			$('.btn-top').fadeIn();
		}
		else {
			$('.btn-top').fadeOut();
		}
		return false;
	});

	$('.btn-top').click(function() {
		$('body, html').animate({scrollTop: 0}, 800);
		return false;
	});

	// btn socmed
	$('.card-holder a').click(function() {
		if(this.getAttribute('href').charAt(0) == '#') {
			$(this).popover({
				title: 'Error!',
				content: 'No link',
				placement: 'bottom'
			}).popover('show');
		}
	});
});