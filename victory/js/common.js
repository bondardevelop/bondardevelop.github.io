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

	//toogle_mnu
	$(".toggle").click(function(e) {

			$('.toggle').toggleClass("on");
  
	});


	$('.team_slider').slick({		
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		speed: 500
	});


	//galery	
	$(".show_galery_more").click(function(){
		$(".galery_more").slideToggle();
		$(this).toggleClass('active');
	});

	//popup
	setTimeout(function(){
		$('.popup_wrapper').fadeIn();
		// $('body').addClass('overflow');
	}, 1500);
	$(".popup_close").click(function(e) {
		$('.popup_wrapper').fadeOut();
		$('body').removeClass('overflow');
	});

});

