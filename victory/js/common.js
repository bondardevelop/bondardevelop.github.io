$(document).ready(function() {

	//front_page
	$(".show_more_top").click(function(){
		$(".top_block_more").slideToggle();
		$(this).toggleClass('active');
	});

	$(".show_more_news").click(function(){
		$(".news_block_content_more").slideToggle();
		$(this).toggleClass('active');
	});


	$('.team_slider').slick({		
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		speed: 500
	});


});

