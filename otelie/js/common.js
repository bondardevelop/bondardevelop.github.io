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

});

