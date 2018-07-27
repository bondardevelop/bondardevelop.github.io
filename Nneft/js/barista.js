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
	$('.barista_slider_img').on('init', function(event, slick){
		let counterAll = $('.barista_teachers_inner .slide_all');
		let slider = $('.barista_slider_img .slick-track');
		let sliderLength = slider.children().length;  
		counterAll.html(sliderLength); 

		//circle
		let sliders = $('.barista_slider_img .slick-track').children();
		let dashOffset = 62;
		let sectorsNumber = dashOffset/(sliders.length);
		let circle = $('.barista_teachers_inner #circlebg');
		let offset = 938+sectorsNumber;
		circle.css('stroke-dashoffset', offset);
	});

	$('.barista_slider_img').click(function(){
		changeCurrent($(this));
	});

	$('.barista_slider_img').on('swipe', function(event, slick, currentSlide, nextSlide){
		changeCurrent($(this));
	});



		$('.barista_slider_img').slick({		
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			infinite: false,
			fade: true,
			cssEase: 'ease-in-out',
			speed: 500,
			asNavFor: '.barista_slider'
		});

		$('.barista_slider').slick({		
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			infinite: false,
			fade: true,
			cssEase: 'ease-in-out',
			speed: 500,
			asNavFor: '.barista_slider_img'
		});

		


	//masked
});

