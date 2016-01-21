$(document).ready(function(){
	var domain = $(location).attr('hostname');
	
	if(domain === 'localhost'){
		$('.home-nav > li > a').each(function(){
			var newLink = $(this).attr('href').slice(8);
			$(this).attr('href', newLink);
		});
	}

});
