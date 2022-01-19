 document.getElementById("titre2").addEventListener("mousemove", function(e){
    this.style.backgroundPositionX = "50px";
    this.style.backgroundPositionY = "50px";

});

document.getElementById("titre2").addEventListener("mouseleave", function(e){
    this.style.backgroundPositionX = 0;
    this.style.backgroundPositionY = 0;

});

document.getElementsByClassName("navbar-brand menu1")[0].addEventListener("mouseenter", function(){

    this.style.color = '#222733';
    this.style.borderBottom = '4px solid #222733';

} );


document.getElementsByClassName("nav-link menu2")[0].addEventListener("mouseenter", function(){

    
    this.style.color = 'orangered';
    this.style.borderBottom = '4px solid orangered';


} );

document.getElementsByClassName("nav-link menu3")[0].addEventListener("mouseenter", function(){

    
    this.style.color = '#d06503';
    this.style.borderBottom = '4px solid #d06503';
    

} );

document.getElementsByClassName("nav-link menu4")[0].addEventListener("mouseenter", function(){


    this.style.color = '#0fbcc3';
    this.style.borderBottom = '4px solid #0fbcc3';

} );

document.getElementsByClassName("nav-link menu5")[0].addEventListener("mouseenter", function(){


    this.style.color = 'rgb(142, 106, 241)';
    this.style.borderBottom = '4px solid rgb(142, 106, 241)';

} );



for(var i=0; i < document.querySelectorAll(".menu1, .menu2, .menu3, .menu4, .menu5").length; i++)
{

document.querySelectorAll(".menu1, .menu2, .menu3, .menu4, .menu5")[i].addEventListener("mouseleave", function(){

    this.style.color = 'white';
    this.style.borderBottom = 'none';
});
}



