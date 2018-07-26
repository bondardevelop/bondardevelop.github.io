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
	$('.abou_history_slider').on('init', function(event, slick){
		let counterAll = $('.abou_history_right .slide_all');
		let slider = $('.abou_history_slider .slick-track');
		let sliderLength = slider.children().length;  
		counterAll.html(sliderLength); 

		//circle
		let sliders = $('.abou_history_slider .slick-track').children();
		let dashOffset = 62;
		let sectorsNumber = dashOffset/(sliders.length);
		let circle = $('.abou_history_right #circlebg');
		let offset = 938+sectorsNumber;
		circle.css('stroke-dashoffset', offset);
	});

	$('.abou_history_slider').click(function(){
		changeCurrent($(this));
	});

	$('.abou_history_slider').on('swipe', function(event, slick, currentSlide, nextSlide){
		changeCurrent($(this));
	});

	$('.abou_history_slider').slick({		
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		fade: true,
		cssEase: 'ease-in-out',
		speed: 500,
	});


	//fancy
	$(".fancy").fancybox({
		youtube : {
			controls : 1,
			showinfo : 0
		},        
	});

});

