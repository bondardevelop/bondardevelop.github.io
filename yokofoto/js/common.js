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

	$(".a_scroll").on("click", function (event) {
		event.preventDefault();
		var thiss = $(this);
		$('.mnu').removeClass('mnu_open');
		$('.toggler_open').removeClass('active');
		setTimeout(function(){			
			var id  = thiss.attr('href');
			var top = $(id).offset().top;		
			$('body,html').animate({scrollTop: top}, 1000);
		}, 300);
	});

	$(window).scroll(function(){
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
		arrows: true,
		swipe: false,
		slidesToScroll: 1,
		asNavFor: '.section_3_description_slider',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				swipe: true,
				centerMode: false,
				slidesToShow: 1,
				arrows: true
			}
		},
		]
	});

	$('.partners_img').slick({
		slidesToShow: 1,
		centerMode: true,
		infinite: true,
		dots: false,
		responsive: [
		{
			breakpoint: 99999,
			settings: "unslick",
		},
		{
			breakpoint: 580,
			settings: {				
				focusOnSelect: true,
				centerPadding: '100px',
				arrows: false,
				slidesToScroll: 1,
			}
		},
		]
	});

	$('.section_3_description_slider').slick({
		infinite: true,
		slidesToShow: 1,
		centerMode: true,
		infinite: true,
		dots: false,
		fade: true,
		focusOnSelect: true,
		centerPadding: 0,
		arrows: false,
		slidesToScroll: 1,
		asNavFor: '.section_3_slider'
	});

	$('.phone_us').mask('+7 (000) 000-00-00');

	$('.working_map_botton').click( function() {
		$(this).parent().parent().parent().toggleClass('map_open');
		$(this).parent().find('.map_toggle').slideToggle();
	});

	$('.working_map_item_1_1 .working_map_botton').click( function() {		
		$('.working_map_item_2_1').toggleClass('working_map_item_2_1_margin');
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

	$( ".sec_3_slider_prev" ).on( "click", function() {
		$( ".section_3_slider_wrap .slick-prev" ).trigger( "click" );
	});

	$( ".sec_3_slider_next" ).on( "click", function() {
		$( ".section_3_slider_wrap .slick-next" ).trigger( "click" );
	});	

	$(".section_3_slider_item").click(function(){
		var container = $(this).find('.fancy_container');
		var links = container.children('a');
		var images = container.children('img');
		for (var i = 0; i < links.length; i++) {
			links[i].href = links[i].getAttribute('data-src');
		}
		for (var i = 0; i < images.length; i++) {
			images[i].src = images[i].getAttribute('data-src');
		}
		var dataThis = $(this).children('a').attr('data-fancybox');
		$(this).find(".fancy_img").fancybox({ 
			animationEffect : 'fade'
		}).attr('data-fancybox', dataThis);
	});

});

