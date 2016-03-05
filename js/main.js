$(document).ready(function(){

	new WOW().init();

	var domain = $(location).attr('hostname');

	if(domain === 'localhost'){
		$('.home-nav > li > a').each(function(){
			var newLink = $(this).attr('href').slice(21);
			$(this).attr('href', newLink);
		});

		$('.navbar-brand').each(function(){
			var newLink = $(this).attr('href').slice(21);
			$(this).attr('href', newLink);
		});
	}

	// Make .feature-gradient be full height

	var wHeight = $(window).height();

	$('.feature-gradient').css('min-height', wHeight + 'px');

	// Animation for animated links

	$('.scroll-link').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// Animate Services on Hover
	$('.service').hover(function(){
		$(this).addClass('animated').addClass('pulse');
	}, function(){
		$(this).removeClass('animated').removeClass('pulse');
	});

	// Twitter feed
	twitterFetcher.fetch({
  "id": '705913950752210944',
  "domId": 'twitter-fetch',
  "maxTweets": 3,
  "enableLinks": true
});

	// Twitter slider

	$('#twitter-fetch').delay(2000).queue(function(){
		$( '.simple-slider > ul' ).owlCarousel({
					autoPlay: 7000,
					stopOnHover: true,
					slideSpeed: 200,
					paginationSpeed: 800,
					rewindSpeed: 800,
					singleItem: true
				});
	});

});
