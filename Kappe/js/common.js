
$(document).ready(function() {

	 $('.popup').magnificPopup({type:'image'});

	 $(".info__link").click(function(){
	 	$(".info__content").toggleClass("visible");
	 });

	  $('.owl-carousel').owlCarousel({
    	items : 1,
    	// nav: true
	  });

	  $(".post__slider").owlCarousel({
	  	items : 1,
	  });

	  $(".mobile__menu").click( function() {
	  	$(".sidebar").toggleClass("visible-sidebar");
	  	$(".hamburger").toggleClass("opened");
	  });


	 // // progressArray = [];
	 // var skillProgress = $(".skill__progress").text();

	 // // console.log(skillProgress);	
	 // $(".skill__load-inner").css("width", skillProgress);


})
