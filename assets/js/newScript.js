$(document).ready(function () {
	$('.btn-android').click(function(event) {
		event.preventDefault();
		$('#dados-de-usuario-android').modal();
	});

	$('.btn-ios').click(function(event) {
		event.preventDefault();
		$('#dados-de-usuario-ios').modal();
	});

	
});