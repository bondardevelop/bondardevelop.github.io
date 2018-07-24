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
	});

	$(".toggle_mnu_wrapp").click(function(e) {
		console.log('asd', $(e.target));
		if ($(e.target).hasClass("toggle_mnu_wrapp")){
			$('#toggle').removeClass("on");
			$(".toggle_mnu_wrapp").removeClass("active");
		}    
	});

	$(window).on('scroll', function() {
		$('#toggle').removeClass("on");
		$(".toggle_mnu_wrapp").removeClass("active");
	});
	//---

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


});

///
//http://talkerscode.com/webtricks/display-progress-bar-while-page-loads-using-jquery.php

document.onreadystatechange = function(e)
{
  if(document.readyState=="interactive")
  {
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) 
    {
      set_ele(all[i]);
    }
  }
}

function check_element(ele){
  var all = document.getElementsByTagName("*");
  var totalele=all.length;
  var per_inc=100/all.length;

  if($(ele).on()){
  	var prog_width=per_inc+Number(document.getElementById("progress_width").value);
  	document.getElementById("progress_width").value=prog_width;
  	$("#bar1").animate({width:prog_width+"%"},10,function(){
  		if(document.getElementById("bar1").style.width=="100%"){
  			$(".bg_loader, .progress").fadeOut("slow");
  		}			
  	});
  }
  else{
  	set_ele(ele);
  }

}

function set_ele(set_element){
	check_element(set_element);
}

$(window).on('load', function() {  
	var progress = $('.progress');
	progress.animate({
		width: "100%"
	}, 100, function() {
		$('.bg_loader').fadeOut();
	});
})








$('.slider').slick({
  slidesToShow: 1,
  dots: true,
  slidesToScroll: 1,
  speed: 500,
  infinite: false,
  cssEase: 'ease-in-out',
  fade: true,
  // infinite: true
});
