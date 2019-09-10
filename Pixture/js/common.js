$(document).ready(function(){




	$(".side__menu").click(function(){
	    $(".slideMenu").slideToggle(520);
	});

	/* This is basic - uses default settings */
	
	$(".fancy").fancybox();
	
    $('.bxslider').bxSlider({
 		slideMargin: 20,
 		pager: true,
 		responsive: true,
 		auto:true
  });

     $(".scroll").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });

var hellopreloader = document.getElementById("hellopreloader_preload");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},1000);};

  //   var addFunction = function(first, second){

  //   	return first + second;
  //   };

  //  console.log(addFunction(5,3));

  //   var multiFunction = function(third, fourth){

  //   	return third * fourth;
  //   };

  //  console.log(multiFunction(5,3));

  // console.log(addFunction(multiFunction(36325,9824),777));

  // var areArraysSame = function(arrOne,arrTwo){
  // 	if (arrOne.length != arrTwo.length) {
  // 		return false;
  // 	}
  // 	for (var i = 1; i < arrTwo.length; i++) {
  // 		if (arrOne[i] = arrTwo.length) {
  // 			alert("Победа!");
  // 		}
  // 	}
  // }
  // 	console.log(areArraysSame([1,2],[1,2]));


  		// $("h2").fadeOut(3000).fadeIn(3000);
  		// $("h2").slideUp(3000).slideDown(3000);
   
});