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

	$('.front_slider').on('init', function(event, slick){
		let counterAll = $('.slide_all');
		let slider = $('.front_slider .slick-track');
		let sliderLength = slider.children().length;  
		counterAll.html(sliderLength); 

		//circle
		let sliders = $('.front_slider .slick-track').children();
		let dashOffset = 62;
		let sectorsNumber = dashOffset/(sliders.length);
		let circle = $('#circlebg');
		let offset = 938+sectorsNumber;
		circle.css('stroke-dashoffset', offset);
	});

	$('.front_slider').click(function(){
		changeCurrent($(this));
	});

	$('.front_slider').on('swipe', function(event, slick, currentSlide, nextSlide){
		changeCurrent($(this));
	});
	
	$('.front_slider').slick({		
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		fade: true,
		cssEase: 'ease-in-out',
		speed: 500,
	});
	//---

	//toggler
	$(".menu").click(function() {
		$(this).toggleClass("menu_active");
		$('#toggle').toggleClass("on");
		$(".toggle_mnu_wrapp").toggleClass("active");
		$("body").toggleClass("overflow"); 
		$("html").toggleClass("overflow"); 
	});

	$(".toggle_mnu_wrapp").click(function(e) {
		console.log('asd', $(e.target));
		if ($(e.target).hasClass("toggle_mnu_wrapp")){
			$('#toggle').removeClass("on");
			$(".toggle_mnu_wrapp").removeClass("active");
			$("body").removeClass("overflow");
			$(".menu").removeClass("menu_active");
			$("html").removeClass("overflow"); 
		}    
	});

	// $(window).on('scroll', function() {
	// 	$('#toggle').removeClass("on");
	// 	$(".toggle_mnu_wrapp").removeClass("active");
	// 	$(".menu").removeClass("menu_active");
	// });
	//---

	



});

///
//http://talkerscode.com/webtricks/display-progress-bar-while-page-loads-using-jquery.php

// document.onreadystatechange = function(e)
// {
//   if(document.readyState=="interactive")
//   {
//     var all = document.getElementsByTagName("*");
//     for (var i=0, max=all.length; i < max; i++) 
//     {
//       set_ele(all[i]);
//     }
//   }
// }

// function check_element(ele){
//   var all = document.getElementsByTagName("*");
//   var totalele=all.length;
//   var per_inc=100/all.length;

//   if($(ele).on()){
//   	var prog_width=per_inc+Number(document.getElementById("progress_width").value);
//   	document.getElementById("progress_width").value=prog_width;
//   	$("#bar1").animate({width:prog_width+"%"},10,function(){
//   		if(document.getElementById("bar1").style.width=="100%"){
//   			$(".bg_loader, .progress").fadeOut("slow");
//   		}			
//   	});
//   }
//   else{
//   	set_ele(ele);
//   }

// }

// function set_ele(set_element){
// 	check_element(set_element);
// }

// $(window).on('load', function() {  
// 	var progress = $('.progress');
// 	progress.animate({
// 		width: "100%"
// 	}, 100, function() {
// 		$('.bg_loader').fadeOut();
// 	});
// })








// $('.slider').slick({
//   slidesToShow: 1,
//   dots: true,
//   slidesToScroll: 1,
//   speed: 500,
//   infinite: false,
//   cssEase: 'ease-in-out',
//   fade: true,
//   // infinite: true
// });
