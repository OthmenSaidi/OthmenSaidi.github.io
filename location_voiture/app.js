
/**************Exo 4***************/
$(document).ready(function(){

        //alert('ok');
/****Evenement sur l'image de HEADER: changement d'image de fond toutes les 15 secondes*/

var i = 0;
function changementImage()
{

    myImage ='img/'+i+'.jpg'
    console.log(myImage);
    i += 1;
    $('.menu').css('background-image','url('+ myImage +')');
   
    if(i === 6)
    {
        i = 0; 
        changementImage(); 
    }
    
}
var timer = setInterval(changementImage, 1500); 




/**************************load scroll: affichage par 4 images****************/


$(window).scroll(function(){
    if(($(window).scrollTop() + $(window).height()) == $(document).height()
    && ($(window).scrollTop() + $(window).height()) + 50 > $(document).height())

        $('#cacher').css('display', 'block')

    });

/*********Evenement pour changer l'image des voitures de location **************************************/





var slideIndex = [1,1,1,1,1,1,1,1];
var slideId = [".mySlides1", ".mySlides2",".mySlides3", ".mySlides4",".mySlides5", ".mySlides6",".mySlides7", ".mySlides8"]


showSlides(1,0);
showSlides(1,1);
showSlides(1,2);
showSlides(1,3);

showSlides(1,4);
showSlides(1,5);
showSlides(1,6);
showSlides(1,7);


function plusSlides(n,m) {
  
  showSlides(slideIndex[m] += n,m);
}

function showSlides(n, m) {
  var i;
  var x = $(slideId[m]);
  console.log(x.length);


  if (n > x.length) {slideIndex[m]= 1}
  if (n < 1) {slideIndex[m] = x.length}
  for (i = 0; i < x.length; i++) {
     x.eq(i).css("display" , "none");
  }
  x.eq(slideIndex[m]-1).css("display", "block");
}


$('.imagesVoiture1 .suivant').on('click', function(){

  plusSlides(1,0);
 

 });

 
  $('.imagesVoiture1 .precedent').on('click', function(){

   plusSlides(-1,0);
  

  });
  
  
$('.imagesVoiture2 .suivant').on('click', function(){

  plusSlides(1,1);
 

 });

 
  $('.imagesVoiture2 .precedent').on('click', function(){

   plusSlides(-1,1);
  

  });
  

  
  $('.imagesVoiture3 .suivant').on('click', function(){

    plusSlides(1,2);
   
  
   });
  
   
    $('.imagesVoiture3 .precedent').on('click', function(){
  
     plusSlides(-1,2);
    
  
    });

      
  
$('.imagesVoiture4 .suivant').on('click', function(){

  plusSlides(1,3);
 

 });

 
  $('.imagesVoiture4 .precedent').on('click', function(){

   plusSlides(-1,3);
  

  });

  
$('.imagesVoiture5 .suivant').on('click', function(){

  plusSlides(1,4);
 

 });

 
  $('.imagesVoiture5 .precedent').on('click', function(){

   plusSlides(-1,4);
  

  });
  
  
$('.imagesVoiture6 .suivant').on('click', function(){

  plusSlides(1,5);
 

 });

 
  $('.imagesVoiture6 .precedent').on('click', function(){

   plusSlides(-1,5);
  

  });
  

  
  $('.imagesVoiture7 .suivant').on('click', function(){

    plusSlides(1,6);
   
  
   });
  
   
    $('.imagesVoiture7 .precedent').on('click', function(){
  
     plusSlides(-1,6);
    
  
    });

      
  
$('.imagesVoiture8 .suivant').on('click', function(){

  plusSlides(1,7);
 

 });

 
  $('.imagesVoiture8 .precedent').on('click', function(){

   plusSlides(-1,7);
  

  });

  
});

 

