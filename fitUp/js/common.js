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

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});


$('.read_more_button').click(function(e){
  e.preventDefault();
  $('.read_more_toggl').slideToggle();
  $('.close_up').toggle();
  $('.open').toggle();
 
});

});
