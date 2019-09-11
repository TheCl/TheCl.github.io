
const dots = document.getElementsByClassName('slider__dot');

const width = 1024;

const height = 768;

let index = 0;

window.addEventListener('load', function(){

    let touchStart;

    document.body.addEventListener('touchstart', function(e){
    
        touchStart = e.changedTouches[0].pageY;
    
    }, false);
    
    document.body.addEventListener('touchend', function(e){
    
        touchEnd = e.changedTouches[0].pageY;
     
        if( touchStart > touchEnd && index === 0){

            dots[index].classList.remove("active__dot");
            dots[index + 1].classList.add("active__dot");
            
            window.scrollTo({

                behavior: 'smooth',
                top: height,
                });
                index++;       
        }
        

        else if( touchStart > touchEnd && index === 1){

            dots[index].classList.remove("active__dot");
            dots[index + 1].classList.add("active__dot");
            
            window.scrollTo({

                behavior: 'smooth',
                top: height*2,
                });
                index++;
        }

        else if( touchStart < touchEnd && index === 2){

            dots[index].classList.remove("active__dot");
            dots[index - 1].classList.add("active__dot");

            if ( touchStart < 2170){

                window.scrollTo({

                    behavior: 'smooth',
                    top: height,

                    });
                index--;
            }

            else return

        }

        else if( touchStart < touchEnd && index === 1){

            dots[index].classList.remove("active__dot");
            dots[index - 1].classList.add("active__dot");
            
            window.scrollTo({

                behavior: 'smooth',
                top: 0,
                });

            index--;
        }

        else return;

        console.log("Current index - " + index);
  
      }, false);
    

    (function shaderFunction (){

        const shader = document.getElementById('shader');

        let windowWidth = window.screen.width;
    
        let windowHeight = window.screen.height;
    
        if( windowHeight !== height || windowWidth !== width ){
    
            shader.style.display = "block";
    
        }
    
        else shader.style.display = "none";

    })(); 

   

});


function toggleSlider(){

    let toggle = document.getElementById('toggle');

    let horizontalSlider = document.getElementById('slider__horizontal');

    if ( toggle.value > 66 ){

        horizontalSlider.style.left = -width * 2 + "px";

        console.log(horizontalSlider.style.left);
       
    }

    else if( toggle.value >= 33 ){
        
        horizontalSlider.style.left = -width + "px";
    }

    else{ horizontalSlider.style.left = 0;}
    
}
