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
			$('.tg_menu').toggleClass("active");
			$('body').toggleClass("overflow");
	});

	//search
	$(".search").click(function(e) {
		// e.preventDefault();
		$(this).addClass("active");
		$('.search_form').fadeIn();
		$('.search_inp').focus();
	});

	$(".search_inp").focusout(function(){
		$('.search').removeClass("active");
		$('.search_form').hide();
	});


	$('.team_slider').slick({		
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		speed: 500,
		responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
	});


	//galery	
	$(".show_galery_more").click(function(){
		$(".galery_more").slideToggle();
		$(this).toggleClass('active');
	});

	//galery	
	$(".top_block_hover a").click(function(){
		
		var galary = $(this).parent().parent().find('.galery_images');
		console.log("sd",galary.find('img') );

		galary.find(".fancy").fancybox({ 
			animationEffect : 'fade'
		}).attr('data-fancybox', 'group1');
		galary.find(".fancy").eq(0).trigger("click");

	});




	//popup
	// setTimeout(function(){
	// 	$('.popup_wrapper').fadeIn();
	// 	// $('body').addClass('overflow');
	// }, 1500);
	// $(".popup_close").click(function(e) {
	// 	$('.popup_wrapper').fadeOut();
	// 	$('body').removeClass('overflow');
	// });

});

