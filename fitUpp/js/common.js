$(window).on('load', function() {
	
	$('#preloader').fadeOut();
	setTimeout(function(){				

		$('#hola').fadeOut();
		$('.center_circle .circle_animate').addClass('circle-chart__circle');
		$('.header_man').addClass('header_man_animate');
		$('.social_icons_inner').addClass('social_icons_inner_animate');
		$('.text_svg_container_inner').addClass('text_svg_container_inner_animate');
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

$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		
		lockAnchors: false,
		anchors: ['firstPage', 'secondPage', 'thirdPage'],
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
		scrollOverflow: true,
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
		paddingTop: '3em',
		paddingBottom: '10px',
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


// var iris = $('.about_us_title span')

// var calcSkew = function (max, windowWidth, cursorX, cursorY, skewY) {

// 	// setup
// 	var halfWidth = windowWidth / 2; // get the half width of the window
// 	var halfCurrentPos = cursorX - halfWidth; // get position of x/y releative to halfWidth
// 	var percentageDecimal = halfCurrentPos / halfWidth, // turn halfCurrentPos into a percentage decimal
// 		skewDegree;

// 	if (cursorY < window.innerHeight / 2) return 0;

// 	if (!skewY) { // calculations for posX
// 		if (halfCurrentPos > 0) {
// 			skewDegree = -Math.abs(Math.floor(percentageDecimal * max)); // flip skewDegree to negetive for pos on right side
// 		} else {
// 			skewDegree = Math.abs(Math.floor(percentageDecimal * max)); // calc skewDegree for left side
// 		}
// 	} else { // calculations for posY	
// 		if (halfCurrentPos > 0) {
// 			skewDegree = Math.abs(Math.floor(percentageDecimal * max)); // calc skewDegree for right side
// 		} else {
// 			skewDegree = -Math.abs(Math.floor(percentageDecimal * max)); // flip skewDegree to negetive for pos on left side
// 		}
// 	}
// 	return skewDegree;
// }

// window.addEventListener('mousemove', function (e) {

// 	// config
// 	var self = this,
// 		evnt = e,
// 		cursorX = evnt.pageX,
// 		cursorY = evnt.pageY,
// 		windowWidth = self.innerWidth,
// 		windowHeight = self.innerHeight,
// 		posLeftPercetange = (cursorX / windowWidth) * 10, // turn cursorX pos into a percentage
// 		posTopPercentage = (cursorY / windowHeight) * 100; // turn cursorY pos into a percentage

// 	for (var i = 0; i < iris.length; i++) {
// 		iris[i].style.right = posLeftPercetange + '%';
// 		// iris[i].style.transform = 'translate(-50%, -50%) skewX(' + calcSkew(12, windowWidth, cursorX, cursorY) +
// 		// 	'deg) skewY(' + calcSkew(8, windowWidth, cursorX, cursorY, 'skewY') + 'deg)';
// 	}

// 	// for (var j = 0; j < iris.length; j++) {
// 	// 	iris[j].style.top = posTopPercentage + '%';
// 	// 	iris[j].style.transform = 'translate(-50%, -50%) skewX(' + calcSkew(12, windowWidth, cursorX, cursorY) +
// 	// 		'deg)  skewY(' + calcSkew(8, windowWidth, cursorX, cursorY, 'skewY') + 'deg)';
// 	// }

// 	evnt.stopPropagation();

// });

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
