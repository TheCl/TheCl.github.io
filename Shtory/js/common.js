
$(document).ready(function(){

		$('.banner__slider').slick({

		  arrows:true,
		    dots: false,
		    slidesToShow: 1,
	        slidesToScroll: 1,
	        nextArrow: $(".banner__slider-next"),
	        prevArrow: $(".banner__slider-prev"),
		});

		$('.deals__slider').slick({

		  arrows:false,
		    dots: true,
		    slidesToShow: 1,
	        slidesToScroll: 1,
		});

		$('.new__slider').slick({
		  arrows:false,
		    dots: true,
		    slidesToShow: 1,
	        slidesToScroll: 1,
		});

		$('.feedback__slider').slick({
		  arrows:false,
		    dots: true,
		    slidesToShow: 1,
	        slidesToScroll: 1,
		});

		$('.brands__slider').slick({

		  arrows:true,
		    dots: false,
		    slidesToShow: 6,
	        slidesToScroll: 6,
	        nextArrow: $(".brands__slider-next"),
	        prevArrow: $(".brands__slider-prev"),
		});

		$('.blog__slider').slick({
		  arrows:false,
		    dots: true,
		    slidesToShow: 3,
	        slidesToScroll: 3,
		});

	});