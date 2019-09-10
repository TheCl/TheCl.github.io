$(document).ready(function(){

		$('.testimonials__slider').slick({

		 	 arrows: true,
		  	 dots: false,
		  	 nextArrow: $(".testimonial__slider-next"),
	       	 prevArrow: $(".testimonial__slider-prev"),
		});

		$(".hamburger__content").click(function() {

		$(".header__menu").toggleClass("visible");

	});

	});