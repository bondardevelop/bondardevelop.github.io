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
		$(this).addClass('active');
		$('.franch').hide();	
		$('.franch_1').show();	
	});

	$('#franch_2').click(function(){
		$('.franch').hide();	
		$('.franch_2').show();	
		$('.franch_nav a').removeClass('active');
		$(this).addClass('active');
	});

	$('#franch_3').click(function(){
		$('.franch').hide();	
		$('.franch_nav a').removeClass('active');
		$(this).addClass('active');
		$('.franch_3').show();	
		$('.franch_3_slider').slick({		
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			infinite: false,
			fade: true,
			cssEase: 'ease-in-out',
			speed: 500,
			asNavFor: '.franch_3_content_slider'
		});

		$('.franch_3_content_slider').slick({		
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			infinite: false,
			fade: true,
			cssEase: 'ease-in-out',
			speed: 500,
			asNavFor: '.franch_3_slider'
		});
	});

	$('#franch_4').click(function(){
		$('.franch_nav a').removeClass('active');
		$(this).addClass('active');
		$('.franch').hide();	
		$('.franch_4').show();	
	});

	$('#franch_5').click(function(){
		$('.franch_nav a').removeClass('active');
		$(this).addClass('active');
		$('.franch').hide();	
		$('.franch_5').show();	
		console.log("SDFDS")
	});

	$('#franch_6').click(function(){
		console.log("SDFDS")
		$('.franch_nav a').removeClass('active');
		$(this).addClass('active');
		$('.franch').hide();	
		$('.franch_6').show();	
	});
	//---


	//franch-toggler
	$('.franch_5_togler_first').click(function(){
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
		
		

		// if ($('.franch_5_togler').hasClass("franch_5_togler_active")) {
		// 	$('.franch_5_more_1').slideUp();
		// 	console.log('asdas')
		// }	
	});

	$('.franch_5_togler_second').click(function(){
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
		

		
	});

	//masked
	$('.phone_us').mask('+7 (000) 000-00-00');
});

