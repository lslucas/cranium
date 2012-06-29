$(function() {
	$('.voltar-form').click(function(e) {
		e.preventDefault();
	$('.error').fadeOut(250);
		setTimeout(function() {
			$('.formulario').fadeIn(250);
		},250);
	});
});

$(function() {
	$('.leia').live('click', function(e) {
		e.preventDefault();
		$('#politica').fadeIn(500);
	});
	$('.bt-voltar-politica').live('click', function(e) {
		e.preventDefault();
		$('#politica').fadeOut(500);
	});
});