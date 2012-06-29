// Função Sub-Menu
var menuAberto ='.sub-menu-jogo';

function hideSub(){
	$('#menu').css({'height' : '41px'});
	$(menuAberto).hide();
}

$(function() {

	$('#menu nav > ul > li > a').hover(function() { hideSub(); })

	$('a.jogo').hover(function() {
		hideSub();
		$('#menu').css({'height' : '71px'});
		$('.sub-menu-jogo').show();
		menuAberto = '.sub-menu-jogo';
	});

	$('a.divirta').hover(function() {
		hideSub();
		$('#menu').css({'height' : '71px'});
		$('.sub-menu-divirta-se').show();
		menuAberto = '.sub-menu-divirta-se';
	});

	$('#menu').hover(function(){},hideSub);

});

// Função Hover do Vídeo
$(function() {
	$('.envie-video-anima-text').hover(function() {
		$('.envie-video-anima').css({'backgroundPosition' : '-428px 0px'});
	},function() {
		$('.envie-video-anima').css({'backgroundPosition' : '0px 0px'});
	});
});

//Função jQuery para Animação de Personagens
$(function() {
	var superAstro = 88;
	var gatoCriativo = 265;
	var infonauta = 442;
	var minhocabulario = 642;
	
	$('#menu-personagens a').click(function(e) {
		e.preventDefault();
		$('#menu-personagens a').removeClass('active').end()
		$(this).addClass('active');
	});
	
	$('.gato-criativo').click(function() {$('.seta-menu-personagens').animate({'left' : gatoCriativo + 'px'},500);
		if($('#gato-criativo').css('display') == 'block'){return false;}
		$('#infonauta, #minhocabulario, #super-astro').fadeOut(150, function() {
			$('#gato-criativo').fadeIn(350);
		});
	});
	
	$('.infonauta').click(function() {$('.seta-menu-personagens').animate({'left' : infonauta + 'px'},500);
		if($('#infonauta').css('display') == 'block'){return false;}
		$('#gato-criativo, #minhocabulario, #super-astro').fadeOut(150, function() {
			$('#infonauta').fadeIn(350);
			});
	});
	
	$('.minhocabulario').click(function() {$('.seta-menu-personagens').animate({'left' : minhocabulario + 'px'},500);
		if($('#minhocabulario').css('display') == 'block'){return false;}
		$('#gato-criativo, #infonauta, #super-astro').fadeOut(150, function() {
			$('#minhocabulario').fadeIn(350);
		});
	});
	
	$('.super-astro').click(function() {$('.seta-menu-personagens').animate({'left' : superAstro + 'px'},500);
		if($('#super-astro').css('display') == 'block'){return false;}
		$('#gato-criativo, #infonauta, #minhocabulario').fadeOut(150, function() {
			$('#super-astro').fadeIn(350);
		});
	});	
	});

//Função para mudança de Hashtags.
$(function () {
	$('.jogo, .home-jogo').address(function() {return $(this).attr('href').replace('#', '/o-jogo');});
	$('.divirta, .home-divirta').address(function() {return $(this).attr('href').replace('#', '/divirta');});
	$('.campanha').address(function() {return $(this).attr('href').replace('#', '/campanha');});
	$('.contato').address(function() {return $(this).attr('href').replace('#', '/contato');});	
	$('.logo').address(function() {return $(this).attr('href').replace('#', '/');});	
});

//Funcção para Active do Menu 
$(function() {		
	
	$('#menu nav ul li a, #menu .logo').live('click', function() {
		var retornar = {'backgroundPosition' : '0px 0px'};	
		$('#menu nav ul li a').removeClass('active-menu');
		$(this).addClass('active-menu');					
		if($('.jogo').hasClass('active-menu')) {$(this).css({'backgroundPosition' : '-57px 0px'});}else {$('.jogo').css(retornar);}		
		if($('.divirta').hasClass('active-menu')) {$(this).css({'backgroundPosition' : '-86px 0px'});}else {$('.divirta').css(retornar);}
		if($('.campanha').hasClass('active-menu')) {$(this).css({'backgroundPosition' : '-81px 0px'});}else {$('.campanha').css(retornar);}
		if($('.contato').hasClass('active-menu')) {$(this).css({'backgroundPosition' : '-65px 0px'});}else {$('.contato').css(retornar);}
		$('#menu nav ul li a').hover(function() {$(this).unbind(retornar);});			
	});
	
	$('.personagens a').click(function() {
		var retornar = {'backgroundPosition' : '0px 0px'};
		$('.jogo').removeClass('active-menu').css(retornar);
		$('.divirta').css({'backgroundPosition' : '-86px 0px'});
		$('.divirta').addClass('active-menu');
	});
		
	$('.sub-menu-jogo li a').live('click' ,function() {
		$('.jogo').css({'backgroundPosition' : '-57px 0px'});
	});
	
	$('.sub-menu-divirta-se li a').live('click' ,function() {
		$('.divirta').css({'backgroundPosition' : '-86px 0px'});
	});	

});

$(function() {
	if($('html').hasClass('ie-7')) {
		$('.cantinho-pintura').attr('data-scroll', '2600');
	}
});

function noColum() {
	$('#datatable_instrutores tr').each(function() {
		$(this).find('td:eq(1)').addClass('no_colum');
	});
}

		
// scripts FALE CONOSCO -->

		var base_url = ".";

		$(document).ready(function(){
			faleComInitialize();
		});

		function faleComInitialize(){
			faleComHideAlert();
			$("form#falecom input[name=nascimento]").mask("99/99/9999");
			$('form#falecom').submit(function(event){
				event.preventDefault();
				faleComSend();
			});
		}
		function faleComSend(){

			faleComHideAlert();

			if($("form#falecom input[name=nome]").val() == ""){
				faleComAlert("Preencha os campos obrigatórios.");
				return false;
			}
			if($("form#falecom input[name=telefone]").val() == ""){
				faleComAlert("Preencha os campos obrigatórios.");
				return false;
			}
			if($("form#falecom input[name=email]").val() == ""){
				faleComAlert("Preencha os campos obrigatórios.");
				return false;
			}
			if($("form#falecom input[name=nascimento]").val() == ""){
				faleComAlert("Preencha os campos obrigatórios.");
				return false;
			}
			if($("form#falecom input[name=mensagem]").val() == ""){
				faleComAlert("Preencha os campos obrigatórios.");
				return false;
			}

			$.ajax({

				type:"POST",
				dataType:"json",
				url:base_url + "/services/ajax.php?m=formFaleCom",

				data:{
					nome:$("form#falecom input[name=nome]").val(),
					telefone:$("form#falecom input[name=telefone]").val(),
					email:$("form#falecom input[name=email]").val(),
					nascimento:$("form#falecom input[name=nascimento]").val(),
					novidades:$("form#falecom input[name=novidades]:checked").val(),
					mensagem:$("form#falecom textarea[name=mensagem]").val()
				},

				success:function(response){
					$("form#falecom fieldset").hide();
					$("div.fale-conosco-sucess").show();
				}
			});
		}
		function faleComAlert(msg){
			$("form#falecom p.error").html(msg);
			$("form#falecom p.error").slideDown();
		}
		function faleComHideAlert(){
			$("form#falecom p.error").slideUp();
		}
		
		
// scripts QUIZ -->
		
		window.jQuery || document.write('<script src="js/jquery-1.7.1.min.js"><\/script>')
	
 		var currentQuestion;
		var rs_keys = [];
		$(document).ready(function(){
			initialize();
			$('input[type=radio]').click(function(){
				rs_keys.push($(this).attr('class'));
			});
		});
		function initialize(){
			currentQuestion = 1;
			//$("div#container").css("margin-left", $("#q1").offset().left * -1);
		}
		function nextQuestion(){
			$("div#container").animate({"margin-left":"-=892"}, 'slow');
		}
		function resultado(){
			var freqs = {};
			var max_index;
			var max_value = -1/0;
			$.each(rs_keys, function(i, v){
				if(freqs[v] != undefined){
					freqs[v]++;
				}else{
					freqs[v] = 1;
				}
			});
			$.each(freqs, function(rs_keys, freq){
				if (freq > max_value) {
					max_value = freq;
					max_index = rs_keys;
				}
			});
			if (max_index != undefined) {
			}
			$("div.resultado").hide();
			$("div#"+max_index+"").show();
			$("div#container").animate({"margin-left":"-=892"}, 'slow');
		}    


swfobject.embedSWF("colorir/game.swf", "jogo-pintura", "873", "440", "9.0.0");
