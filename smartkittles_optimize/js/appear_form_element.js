$(document).ready(function () {
	$('.checkmark__element_1 .checkmark__box').on('click', function () {
		$('.checkmark__element_2 .checkmark__text').toggle();
		$('.checkmark__element_2 .checkmark__box').toggle();
	});
});

