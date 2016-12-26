$(document).ready(function () {

	var date = new Date ();
	var contClickAndroid = 0;
	var contClickIos = 0;


	$('.btn-android').click(function(event) {
		event.preventDefault();
		$('#dados-de-usuario-android').modal();

		var dia = date;
		contClickAndroid++;

		$.ajax({
			url: '/path/to/file',
			type: 'POST',
			data: {
				email: $('input[name=email]').val()	
			}
		}, 
		success = function() {

		}, 
		error = function(e) {

		})
	});

	$('.btn-ios').click(function(event) {
		event.preventDefault();
		$('#dados-de-usuario-ios').modal();
	});

	
});