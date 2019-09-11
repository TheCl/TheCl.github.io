
$(document).ready(function(){

	$('.banner-slider').slick({

		  arrows: false,
		    dots: true,
	});


	$('.trend-slider').slick({

		  arrows: false,
		    dots: true,
	});


	$('.blog-slider').slick({

		  arrows:true,
		    dots: true,
		    slidesToShow: 2,
	        slidesToScroll: 1,
	        nextArrow: $(".blog__slider-next"),
	        prevArrow: $(".blog__slider-prev"),

		    	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	  ]
	});

    $(".scroll").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });

});

