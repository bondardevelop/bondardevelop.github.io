//my script//

$(window).on('load', function() {
	
	$('#preloader').fadeOut();
	setTimeout(function(){				

		$('#hola').fadeOut();
		$('.center_circle .circle_animate').addClass('circle-chart__circle');
		$('.header_man').addClass('header_man_animate');
		$('.social_icons_inner').addClass('social_icons_inner_animate');
		$('.main_text_inner').addClass('main_text_inner_animete');
		$("#menu li").each(function(index) {        
			(function(that, i) { 
				var t = setTimeout(function() { 
					$(that).addClass('li_active');
				}, 400 * i);
			})(this, index);
		});

	}, 100);
});




$(function() {


	$("#toggle").click(function() {
		$(this).toggleClass("on");
		$(".main_nav").slideToggle();
	});

	$(".main_nav").on("click","a", function (event) {
		// event.preventDefault();
		var toggle = $("#toggle");
		if (toggle.hasClass("on")){
			$(".main_nav").slideToggle();
			$("#toggle").removeClass("on");
			remove();
		} 
	});

	function remove(e){ return true; }

	$('.our_team_content').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 1,
		variableWidth: true,
		focusOnSelect: true,
		arrows: true,	
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
		]
	});


$(document).ready(function() {


	$('#fullpage').fullpage({
		//Navigation
		
		lockAnchors: false,
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixPage'],
		menu: '#menu',
		navigation: true,
		navigationPosition: 'right',
		// navigationTooltips: ['firstPage', 'secondPage', 'thirdPage'],
		showActiveTooltip: true,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,		
		fitToSection: true,
		scrollBar: false,
		easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: true,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: true,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		paddingTop: '0',
		paddingBottom: '0',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		afterLoad: function(anchorLink, index){

			if (index == 2) {
				$('.about_us .about_us_title').addClass('title_animation');
				$('.read_more_button_wrapp').addClass('read_more_animation');
				$('.about_us_content p').first().addClass('about_us_content_animation');
				$('.img_wrapp').css({'opacity':'1', 'height':'calc(100% + 70px)', 'margin-top':'0'});
				$('.rectangle_wrapp').css({'opacity':'1'});				
				
				setTimeout(function(){
					$('.img_wrapp img').css({'margin-top':'0', 'opacity':'1'});
				}, 400);			
				setTimeout(function(){
					$('.about_us_content p').addClass('about_us_content_animation');
				}, 300);
			}

			if (index == 3) {
				$('.read_more_button_wrapp').addClass('read_more_animation');
				$('.get_price h3').addClass('title_animation');
				$('.circle_animate').addClass('circle-chart__circle');
				$('.slide .slide_left img').addClass('scaling_img');
				// $('.slide .slide_left img').css({'transform':'scale(1)'});	
				setTimeout(function(){
					$('.get_price_content').fadeIn('slow');
				}, 400);
				setTimeout(function(){					
					$('.slide .slide_left img').css({'animation':'scaling 6s ease-in-out infinite'});
				}, 800);
			}

			if (index == 5) {
				$('.read_more_button_wrapp').addClass('read_more_animation');
				$('.mobile_upp_title h3').addClass('title_animation');
				$('.iphone_x img').css({'opacity':'1', 'margin-top':'0'});
				$('.slide .slide_left img').addClass('scaling_img');
				// $('.slide .slide_left img').css({'transform':'scale(1)'});	
				setTimeout(function(){
					$('.mobile_upp_content_inside_text').css({'opacity':'1'});
				}, 400);				
			}

			if (index == 5) {
				$('.read_more_button_wrapp').addClass('read_more_animation');

			
			}
		},

		//events
		onLeave: function(index, nextIndex, direction){},

		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});


$('.read_more_button_main').click(function(e){
  e.preventDefault();
  $('.read_more_toggl').slideToggle();
  $('.close_up').toggle();
  $('.open').toggle(); 
});


setInterval(function(){ 
	var toplLine = $('.top_line');
	var randomNum = Math.floor((Math.random() * 130) + 1);
	toplLine.css('transform','translatex('+randomNum+'px)'); 
}, 2400);

setInterval(function(){ 
	var bottomLine = $('.bottom_line');
	var randomNum = Math.floor((Math.random() * 150) + 40) + 'px';
	bottomLine.css({'transform':'translatex('+randomNum+')', 'width':randomNum}); 
}, 1500);

});


