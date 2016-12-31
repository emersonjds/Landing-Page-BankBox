$(document).ready(function () {

	$('.btn-android').click(function(event) {
		event.preventDefault();
		upClick('ANDROID');
		$('input#plataforma-escolhida').val('ANDROID');	
	});

	$('.btn-ios').click(function(event) {
		event.preventDefault();
		upClick('iOS');
		$('input#plataforma-escolhida').val('iOS');

	});

	$('.btn-android').click(function(event) {
		event.preventDefault();
	});



	$('#informacoes-usuario').submit(function (e) {
            e.preventDefault();
            var data = $(this).serializeFormJSON();
            
        $.ajax({
				// Captura a URL de envio do form
				url: "assets/php/salvaInformacoes.php",
				
				// Captura o método de envio do form
				type: 'POST',
				
				// Os dados do form
				data: data,
				
				//qual será  o tipo de dados que a página irá retornar;
				dataType: "json",
				
				// Se enviado com sucesso
				success: function(dados) {
					//após salvar o clique abre o modal
					//alert(dados[0]);

					if(dados[0] == "sucesso"){
						$('#dados-de-usuario').modal('hide');
						toastr.success("Dados cadastrados com sucesso, agora é só aguardar.");
                    } else {
                    	toastr.warning("Houve algum tipo de falha na operação tente novamente");
                    }
				}
		});
    });
	
});

function upClick(qPlataforma){
	$.ajax({
				// Captura a URL de envio do form
				url: "assets/php/salvaClique.php",
				
				// Captura o método de envio do form
				type: 'POST',
				
				// Os dados do form
				data: {plataforma:qPlataforma},
				
				//qual será  o tipo de dados que a página irá retornar;
				dataType: "json",
				
				// Se enviado com sucesso
				success: function(dados) {
					//após salvar o clique abre o modal
					//alert(dados[0]);
					if(dados[0] == "sucesso"){
                        $('#dados-de-usuario').modal();
                        
                    } else {
                        
                    }
				}
		});
	
}

(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);