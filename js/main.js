$(document).ready(function(){
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

	// Make .feature-bg be full height

	var wHeight = $(window).height();

	console.log("Window Height is: " + wHeight);

	$('.feature-gradient').css('min-height', wHeight + 'px');

});
