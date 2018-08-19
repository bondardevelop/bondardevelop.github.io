$(document).ready(function() {

	//fancy
	$(".fancy").fancybox({
		youtube : {
			controls : 1,
			showinfo : 0
		},        
	});

	$(".vatch_video").fancybox({
		youtube : {
			controls : 1,
			showinfo : 0
		},        
	});

	$('.slider').slick({		
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		speed: 500,
		asNavFor: '.counter_slider'
	});

	$('.counter_slider').slick({		
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: true,
		asNavFor: '.slider'
	});

	$(".front_slides_prev").click(function(){
		$(".slick-prev").trigger("click");
	});
	$(".front_slides_next").click(function(){
		$(".slick-next").trigger("click");
	});

	//smoth scroll
	$(".scroll_to").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href');
		var top = $(id).offset().top;		
		$('body,html').animate({scrollTop: top}, 1500);
	});

	//fix menu on scroll
	var header = $("#main_nav");
	var sticky = header.offsetTop;
	window.onscroll = function() {
		if ($(window).scrollTop() > 50) {
        header.addClass("sticky");
    } else {
        header.removeClass("sticky");
    }
	};


	//mask
	$('.phone').mask('+7 (000) 000-00-00');


	//toggler
	$("#toggle").click(function() {
		$('#main_nav').slideToggle();
		$("body").toggleClass("overflow"); 
		$("html").toggleClass("overflow"); 
	});

	$(".mobile_mnu_arrow").click(function() {
		$('#main_nav').slideToggle();
		$("body").removeClass("overflow"); 
		$("html").removeClass("overflow"); 
	});

});

