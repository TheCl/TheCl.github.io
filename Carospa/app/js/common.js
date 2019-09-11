$(function() {

	$('.scroll').on( 'click', function(){ 
		var el = $(this);
		var dest = el.attr('href'); // получаем направление
		if(dest !== undefined && dest !== '') { // проверяем существование
			$('html').animate({ 
				scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
			}, 500 // скорость прокрутки
			);
		}
		return false;
	});

	$('.menu__title').on( 'click', function(){ 
		
		$('.mobile__menu ul').toggleClass("visible");	

	});

});
