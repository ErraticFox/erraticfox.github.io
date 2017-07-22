$(document).ready(() => {

	const time = 500;

	$('#contactMe').click(() => {
		$('.cardContainer').toggle('slide', {
			direction: 'left'
		}, time);
		$('#contactForm').toggle('slide', {
			direction: 'right'
		}, time);
	})

	$('#cancelEmail').click(() => {
		$('.cardContainer').toggle('slide', {
			direction: 'left'
		}, time);
		$('#contactForm').toggle('slide', {
			direction: 'right'
		}, time);
	})

	$('textarea').resizable();

	$('.ui-resizable-s, .ui-resizable-e').remove();

	$('#sendEmail').click(() => {
		$('input[type="submit"]').click();
	});

});
