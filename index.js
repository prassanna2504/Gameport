var cont=0;
function loopSlider(){
  var xx= setInterval(function(){
        switch(cont)
        {
        case 0:{
            $("#slider-1").fadeOut(400);
            $("#slider-2").delay(400).fadeIn(400);
            $("#sButton2").addClass("bg-purple-800");
            
        cont=1;
        
        break;
        }
        case 1:
        {
        
            $("#slider-2").fadeOut(400);
            $("#slider-3").delay(400).fadeIn(400);
            $("#sButton2").removeClass("bg-purple-800");
            $("#sButton3").addClass("bg-purple-800");
            

            
           
        cont=2;
        
        break;
        }

        case 2:
        {
        
            $("#slider-3").fadeOut(400);
            $("#slider-1").delay(400).fadeIn(400);
            $("#sButton3").removeClass("bg-purple-800");
            $("#sButton1").addClass("bg-purple-800");
            

            
           
        cont=0;
        
        break;
        }
        
        
        }},4000);

}



    
    
    function sliderButton1(){
    
        $("#slider-2").fadeOut(400);
        $("#slider-3").fadeOut(400);
        $("#slider-1").delay(400).fadeIn(400);
        $("#sButton2").removeClass("bg-purple-800");
        $("#sButton1").addClass("bg-purple-800");
        
        cont=0
        
        }
        
    function sliderButton2(){

        $("#slider-1").fadeOut(400);
        $("#slider-3").fadeOut(400);
        $("#slider-2").delay(400).fadeIn(400);
        $("#sButton1").removeClass("bg-purple-800");
        $("#sButton2").addClass("bg-purple-800");
        
        cont=1
        
        }

    function sliderButton3(){
        
        $("#slider-1").fadeOut(400);
        $("#slider-2").fadeOut(400);
        $("#slider-3").delay(400).fadeIn(400);
        $("#sButton2").removeClass("bg-purple-800");
        $("#sButton3").addClass("bg-purple-800");
            
        cont=1
            
        }


        function productButton1(){
    
            $("#product-2").fadeOut(400);
            $("#product-3").fadeOut(400);
            $("#product-4").fadeOut(400);
            $("#product-5").fadeOut(400);
            $("#product-1").delay(400).fadeIn(400);
            
        }


        function productButton2(){
    
            $("#product-1").fadeOut(400);
            $("#product-3").fadeOut(400);
            $("#product-4").fadeOut(400);
            $("#product-5").fadeOut(400);
            $("#product-2").delay(400).fadeIn(400);
            
        }

        function productButton3(){
    
            $("#product-1").fadeOut(400);
            $("#product-2").fadeOut(400);
            $("#product-4").fadeOut(400);
            $("#product-5").fadeOut(400);
            $("#product-3").delay(400).fadeIn(400);
            
        }


        function productButton4(){
    
            $("#product-1").fadeOut(400);
            $("#product-2").fadeOut(400);
            $("#product-3").fadeOut(400);
            $("#product-5").fadeOut(400);
            $("#product-4").delay(400).fadeIn(400);
            
        }
    
        function productButton5(){
    
            $("#product-1").fadeOut(400);
            $("#product-2").fadeOut(400);
            $("#product-3").fadeOut(400);
            $("#product-4").fadeOut(400);
            $("#product-5").delay(400).fadeIn(400);
            
        }

        


    $(window).ready(function(){
        $("#slider-2").hide();
        $("#slider-3").hide();
        $("#product-2").hide();
        $("#product-3").hide();
        $("#product-4").hide();
        $("#product-5").hide();
        loopSlider();
        
     
        
    
    
    
    
    });

    
   
//cardsslider

const removeActiveClasses = () => {
    slideElement.forEach((slide) => {
      slide.classList.remove("active");
    });
  };
  
const slideElement = document.querySelectorAll(".slide");
slideElement.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeActiveClasses();
    slide.classList.add("active");
  });
});
  