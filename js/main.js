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


	twitterFetcher.fetch({
  "id": '705913950752210944',
  //"domId": 'twitter-fetch',
	"dataOnly": true,
  "maxTweets": 5,
  "enableLinks": false,
	"customCallback": createTweets
});

	function createTweets(tweets){
		var element = document.getElementById('twitter-fetch');
		if(element){
			var html = '<div id="slides">';

			for (var i = 0, lgth = tweets.length; i < lgth ; i++) {
		    var tweetObject = tweets[i];
		    html += '<div class="row slide-row">'
		      + (tweetObject.image ? '<div class="tweet-img col-sm-12"><img src="'+tweetObject.image+'" /></div>' : '')
		      + '<div class="col-sm-12"><p class="tweet-content">' + tweetObject.tweet + '</p></div>'
		      + '<div class="col-xs-6"><p class="tweet-infos text-center">Posted on ' + tweetObject.time + '</p></div>'
		      + '<div class="col-xs-6"><p class="tweet-link text-center"><a target="_blank" class="btn btn-primary" href="' + tweetObject.permalinkURL + '">View Tweet</a></p></div>'
		    + '</div>';
		  }

		  html += '</div>';
		  element.innerHTML = html;
			$( '#slides' ).owlCarousel({
						autoPlay: 7000,
						stopOnHover: true,
						slideSpeed: 200,
						paginationSpeed: 800,
						rewindSpeed: 800,
						singleItem: true
					});
				$('.Avatar').addClass('img-circle').addClass('img-responsive');

		}

	}

	$('.full').anystretch();

});
