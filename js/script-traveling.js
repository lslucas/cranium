	
	// Variáveis
	var largBrowser;
	var altBrowser;
	var alturaMenu = 140;	
	var alturaCenter;
	var secao = 0;
	var posTop;
	var posLeft;
	var api; var api2;

	
	//////////////////////////////
	//Configurações de tela
	
	var pos = new Array();
	
	// Home 
	pos[0] = new Array();
	pos[0][0] = 2620; pos[0][1] = 3000;
	pos[0][2] = '/';
	pos[0][3] = 'center';
	                                                                  
	// O jogo
	pos[1] = new Array();
	pos[1][0] = 1020; pos[1][1] = 1275;
	pos[1][2] = '#/o-jogo';
	pos[1][3] = 'top';
	
	// Divirta-se
	pos[2] = new Array();
	pos[2][0] = 3590; pos[2][1] = 1250;
	pos[2][2] = '#/divirta';
	pos[2][3] = 'top';
	
	
	// Campanha 
	pos[3] = new Array();
	pos[3][0] = 1300; pos[3][1] = 4745;
	pos[3][2] ='#/campanha';
	pos[3][3] ='center';
	
	// Contato
	pos[4] = new Array();
	pos[4][0] = 3645; pos[4][1] = 4765;
	pos[4][2] ='#/contato'
	pos[4][3] ='top'
	
	$(document).ready(function(){
		
			//Scroll Pane
			//var element = $('.scroll1').jScrollPane();
			//var element2 = $('.scroll2').jScrollPane();
			//var element4 = $('.scroll4').jScrollPane();
	
		//api =  new Array();
		//api[1] = element.data('jsp');
		//api[2] = element2.data('jsp');
		//api[4] = element4.data('jsp');
		posicaoIni();
	
	})
	

	//Seta a posição do Main para uma seção
	function setPosition(proxSecao) {
		posTop = 0 - pos[proxSecao][0]+alturaMenu;
		posLeft = 0 - pos[proxSecao][1]+largBrowser;
				
		if(pos[proxSecao][3] == "center") {
			posTop = posTop+altBrowser; 
		}
		
	}
	
	// Posiciona no primeiro carregamento
	function posicaoIni() {
		for(var i in pos) {    		
    		if(window.location.href.indexOf(pos[i][2]) != -1)  {
				secao = i;
				recalculate()
			}
		}
	}

	//Calcula e aplica posicionamentos de acordo com o tamanho da tela
	function recalculate() {
		largBrowser = $(window).width()/2;
		altBrowser = $(window).height()/2;	
		setPosition(secao);
		$('#main').css({'top': posTop, 'left': posLeft});
		alturaCenter = $(window).height() - 41;
		$('section .fullvertical').css({'height' : alturaCenter});
		//api[1].reinitialise();
		//api[2].reinitialise();
		//api[4].reinitialise();
	}

	//Recalcula posições se a tela for redimensionada 
	$(window).resize(function() {
		$('#main').stop(true,true);
		recalculate();
	});
	
	// Transições
	function transicao(proxSecao,scroll) {
				
		if(secao != proxSecao) {
			var goHome = true;
			if($('#main').is(':animated') ) {
				$('#main').stop(true);
				goHome = false;
			}
			
			if(proxSecao != 0 && secao != 0 && goHome) {
				setPosition(0);
				$('#main').animate({'top' : posTop, 'left' : posLeft},{duration: 2000, easing: 'easeInOutQuad'});
			}
		
			setPosition(proxSecao);
			$('#main').animate({'top' : posTop, 'left' : posLeft},{duration: 2500, easing: 'easeInOutQuad'});
			secao = proxSecao;
		}
		
		// Scrola
		if(!isNaN(scroll)) {
			$('section .scroll'+proxSecao).animate({'scrollTop' : scroll},1000);
			//api[proxSecao].scrollTo(0,scroll,true);
		}
		else if(pos[proxSecao][3]== "top") {
			$('section .scroll'+proxSecao).animate({'scrollTop' : 0},1000);
			//api[proxSecao].scrollTo(0,0,true);
		}

	}


	// Clique
	$(function() {
		$('#menu a, .home-jogo, .home-divirta, .personagens a').click(function(e) {
			e.preventDefault();	
			var area = parseInt($(e.currentTarget).attr('data-area'));
			var scrollDiv = parseInt($(e.currentTarget).attr('data-scroll'))
			transicao(area,scrollDiv);
		});
	});