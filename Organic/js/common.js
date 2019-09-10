$(document).ready(function(){

		$('.slick').slick({

	  nextArrow: $(".next"),
      prevArrow: $(".prev"),

		});

		$( ".slide-menu" ).click(function(){
 			$("nav").slideToggle(500);

		});

		$(".toggle").click(function(){
 			$(this).parent().children("ul").slideToggle(100);
		});


});