$(document).ready(function() {
	
	$('.front_slider').slick({		
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		fade: true,
		speed: 1000,
	});

	$(".menu").click(function() {
		$(this).toggleClass("menu_active");
		$('#toggle').toggleClass("on");
		$(".toggle_mnu_wrapp").toggleClass("active");      
	});

	$(".toggle_mnu_wrapp").click(function(e) {
		console.log('asd', $(e.target));
		if ($(e.target).hasClass("toggle_mnu_wrapp")){
			$('#toggle').removeClass("on");
			$(".toggle_mnu_wrapp").removeClass("active");
			console.log('asd');
		}    
	});

});
