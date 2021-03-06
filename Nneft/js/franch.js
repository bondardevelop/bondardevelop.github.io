$(document).ready(function() {

	//slider ---
	function changeCurrent(slider){
		var sliders = slider.find('.slick-track').children();
		var circle = $('#circlebg');
		var slideCurent = $('.slide_curent');
		var dashOffset = 62;
		var sectorsNumber = dashOffset/(sliders.length);  

		for (var i = 0; i < sliders.length; i++) {
			if(sliders.eq(i).hasClass("slick-current")){
				slideCurent.html(i+1);
				var offset = 938+sectorsNumber*(i+1);
				circle.css('stroke-dashoffset', offset);
			}      
		}
	}


	//franch page
	$('.franch_3_slider').on('init', function(event, slick){
		let counterAll = $('.franch_3 .slide_all');
		let slider = $('.franch_3_slider .slick-track');
		let sliderLength = slider.children().length;  
		counterAll.html(sliderLength); 

		//circle
		let sliders = $('.franch_3_slider .slick-track').children();
		let dashOffset = 62;
		let sectorsNumber = dashOffset/(sliders.length);
		let circle = $('.franch_3 #circlebg');
		let offset = 938+sectorsNumber;
		circle.css('stroke-dashoffset', offset);
	});

	$('.franch_3_slider').click(function(){
		changeCurrent($(this));
	});

	$('.franch_3_slider').on('swipe', function(event, slick, currentSlide, nextSlide){
		changeCurrent($(this));
	});


	//tabs

	$('#franch_1').click(function(){
		$('.franch_nav a').removeClass('active');
		$('.franch_nav li').removeClass('liactive');
		$(this).addClass('active');
		$(this).parent().addClass('liactive');
		$('.franch').hide();	
		$('.franch_1').show();
		$('#franch_1_mob').parent().addClass('liactive');
		$("body").removeClass("overflow"); 
		$("html").removeClass("overflow");
	});

	$('#franch_2, #franch_1_more').click(function(){
		$('.franch').hide();	
		$('.franch_2').show();	
		$('.franch_nav a').removeClass('active');
		$('.franch_nav li').removeClass('liactive');
		$(this).addClass('active');
		// $(this).parent().addClass('liactive');
		$('#franch_2_mob').parent().addClass('liactive');
		$("body").removeClass("overflow"); 
		$("html").removeClass("overflow");
	});

	$('#franch_3').click(function(){
		$('.franch').hide();	
		$('.franch_nav a').removeClass('active');
		$('.franch_nav li').removeClass('liactive');
		$(this).addClass('active');
		$('#franch_3_mob').parent().addClass('liactive');
		$('.franch_3').show();	
		$("body").removeClass("overflow"); 
		$("html").removeClass("overflow");
		$('.franch_3_slider').slick({		
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			infinite: true,
			fade: true,
			cssEase: 'ease-in-out',
			speed: 500,
			asNavFor: '.franch_3_content_slider'
		});

		$('.franch_3_content_slider').slick({		
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			infinite: true,
			fade: true,
			cssEase: 'ease-in-out',
			speed: 500,
			asNavFor: '.franch_3_slider'
		});
	});

	$('#franch_4').click(function(){
		$('.franch_nav a').removeClass('active');
		$('.franch_nav li').removeClass('liactive');
		$(this).addClass('active');
		$('#franch_4_mob').parent().addClass('liactive');
		$('.franch').hide();	
		$('.franch_4').show();	
		$("body").removeClass("overflow"); 
		$("html").removeClass("overflow");
	});

	$('#franch_5').click(function(){
		$('.franch_nav a').removeClass('active');
		$('.franch_nav li').removeClass('liactive');
		$(this).addClass('active');
		$('#franch_5_mob').parent().addClass('liactive');
		$('.franch').hide();	
		$('.franch_5').show();	
		$("body").removeClass("overflow"); 
		$("html").removeClass("overflow");
	});

	$('#franch_6').click(function(){
		$('.franch_nav a').removeClass('active');
		$('.franch_nav li').removeClass('liactive');
		$(this).addClass('active');
		$('#franch_6_mob').parent().addClass('liactive');
		$('.franch').hide();	
		$('.franch_6').show();
		$("body").removeClass("overflow"); 
		$("html").removeClass("overflow");
	});
	//---

	$(".franch_nav_mobile a").click(function(e) {
		$('.franch_nav').slideToggle();
		$('.franch_nav').addClass('franch_nav_open');
		$('.franch_nav_main a').addClass('check_franch');
		$('.franch_nav_main span').addClass('check_franch');
		$(this).addClass('active');
		$("body").addClass("overflow"); 
		$("html").addClass("overflow"); 
	});

	$("body").click(function(e) {
		if ($(e.target).hasClass("check_franch")){
			$('.franch_nav_open').slideUp();
		} 
	});


	//franch-toggler

	$('.franch_5_right .show_580_flex').click(function(){
		console.log("ASDASD")
			$(this).toggleClass('franch_5_togler_active');
			$(this).next().slideToggle();
	});

	$('.franch_5_togler_first').click(function(){
		if (!$(this).hasClass("show_580_flex")) {
			if (!$(this).hasClass("franch_5_togler_active")) {
				$('.franch_5_more').slideUp();
				$('.franch_5_togler').removeClass('franch_5_togler_active');
				$(this).addClass('franch_5_togler_active');
				var toggleMore = $(this).parent().parent().find('.franch_5_more_1');
				toggleMore.slideDown();
			}	
			else{
				$('.franch_5_more').slideUp();
				$('.franch_5_togler').removeClass('franch_5_togler_active');
			}
		}	

		// if ($('.franch_5_togler').hasClass("franch_5_togler_active")) {
		// 	$('.franch_5_more_1').slideUp();
		// 	console.log('asdas')
		// }	
	});

	$('.franch_5_togler_second').click(function(){
		if (!$(this).hasClass("show_580_flex")) {
			if (!$(this).hasClass("franch_5_togler_active")) {
				$('.franch_5_more').slideUp();
				$('.franch_5_togler').removeClass('franch_5_togler_active');
				$(this).addClass('franch_5_togler_active');
				var toggleMore = $(this).parent().parent().find('.franch_5_more_2');
				toggleMore.slideDown();
			}
			else{
				$('.franch_5_more').slideUp();
				$('.franch_5_togler').removeClass('franch_5_togler_active');
			}
		}		
	});

	


	$("textarea").focus(function(){
		$(this).val("");
	});
	$("textarea").focusout(function(){
		$(this).val("Текст сообщения");
	});

	//masked
	$('.phone_us').mask('+7 (000) 000-00-00');
});

