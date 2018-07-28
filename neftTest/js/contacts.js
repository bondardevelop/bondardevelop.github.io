$(document).ready(function() {

	$('.phone').mask('+7 (000) 000-00-00');

	$('.dropdown').click(function () {
		$(this).attr('tabindex', 1).focus();
		$(this).toggleClass('active');
		$(this).find('.dropdown-menu').slideToggle(500);
	});
	$('.dropdown').focusout(function () {
		$(this).removeClass('active');
		$(this).find('.dropdown-menu').slideUp(500);
	});
	$('.dropdown .dropdown-menu li').click(function () {
		$(this).parents('.dropdown').find('.select_output').text($(this).text());
		$(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
	});

});

