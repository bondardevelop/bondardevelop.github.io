$(document).ready(function() {

	//galery	

	$(".toggler_open").click(function(){
		$('.mnu').addClass('mnu_open');
		$('.toggler_close').addClass('active');
	});

	$(".toggler_close").click(function(){
		$('.mnu').removeClass('mnu_open');
		$('.toggler_open').removeClass('active');
	});

	$('.sec_2_slider').slick({
		infinite: true,
		slidesToShow: 1,
		fade: true,
		infinite: true,
		arrows: true,
		slidesToScroll: 1
	});

	$( ".sec_2_slider_prev" ).on( "click", function() {
		$( ".sec_2_slider .slick-prev" ).trigger( "click" );
	});

	$( ".sec_2_slider_next" ).on( "click", function() {
		$( ".sec_2_slider .slick-next" ).trigger( "click" );
	});

	$(".arrow_scroll").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href');
		var top = $(id).offset().top;		
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$(window).scroll(function(){
		console.log($(document).scrollTop(), $(window).height())
		if ($(document).scrollTop() > $(window).height()-1 && !$('.top').hasClass("top_fixed")) {
				$('.top').addClass('top_fixed').hide().fadeIn();
				$('.section_2_line').addClass('section_2_line_fixed');
						
		}
		else if($(document).scrollTop() < $(window).height() && $('.top').hasClass("top_fixed")){
			$('.top').removeClass('top_fixed');
			$('.section_2_line').removeClass('section_2_line_fixed');
		}
	});


	$('.section_3_slider').slick({
		infinite: true,
		slidesToShow: 3,
		centerMode: true,
		infinite: true,
		dots: true,
		focusOnSelect: true,
		centerPadding: 0,
		arrows: false,
		slidesToScroll: 1
	});

	$('.phone_us').mask('+7 (000) 000-00-00');

	$('.working_map_botton').click( function() {
		$(this).parent().parent().parent().toggleClass('map_open');
		$(this).parent().find('.map_toggle').slideToggle();
	});

	$('.section_4_slider').slick({
		infinite: true,
		slidesToShow: 1,
		fade: true,
		infinite: true,
		arrows: true,
		slidesToScroll: 1
	});

	$( ".sec_4_slider_prev" ).on( "click", function() {
		$( ".section_4_slider .slick-prev" ).trigger( "click" );
	});

	$( ".sec_4_slider_next" ).on( "click", function() {
		$( ".section_4_slider .slick-next" ).trigger( "click" );
	});



});

