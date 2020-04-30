$(document).ready(function () {

	$('.main_btna').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});

	$('.main_btn').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});

	$('.main_nav nav li:eq(1)').on('click', function (event) {
		event.preventDefault();
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});

	$('.close').on('click', function () {
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');
	});


});