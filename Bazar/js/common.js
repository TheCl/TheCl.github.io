
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
	        responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 5,
			        slidesToScroll: 3,
			      }
			    },
			    {
			      breakpoint: 850,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 650,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			     {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },

  			]
		});

		$('.blog__slider').slick({
		  arrows:false,
		    dots: true,
		    slidesToShow: 3,
	        slidesToScroll: 3,
	         responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
  			]
		});


		 $('.gallery__slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  // fade: true,
		  asNavFor: '.gallery__bottom'
		});

		$('.gallery__bottom').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.gallery__slider',
		  dots: false,
		  centerMode: true,
		  nextArrow: $(".gallery__bottom-next"),
	      prevArrow: $(".gallery__bottom-prev"),
		  focusOnSelect: true
		});

				

	});