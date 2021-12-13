const cardbg = document.querySelector('.cardbg');

window.onload = function(){
        document.getElementById("browsersensor").style.display = "block";       
        document.getElementById("loader").style.opacity = "0";     
    document.getElementById("browsersensor").style.display = "block";
    setTimeout(function(){
        document.getElementById("loader").style.animationPlayState = "runnig";    
        document.getElementById("loader").style.opacity = "0.3";       
    },100); 
     
    
    setTimeout(function(){
        document.getElementById("loader").style.opacity = "0";
    },2300); 
    
    setTimeout(function(){
        document.getElementById("loader").style.display = "none";
    },2400); 

    setTimeout(function(){
        document.getElementById("right").style.display = "block";
        document.getElementById("left").style.display = "block";
    },2550); 

    setTimeout(function(){
        document.getElementById("backgroundvideo").style.display = "block";
        document.getElementById("backgroundvideo").style.opacity = "0.5";
        document.getElementById("background").style.display = "none";
    },3000); 

    setTimeout(function(){
        document.getElementById("browsersensor").style.opacity = "1";
    },2700); 
    
};



function navigation() {
    var element = document.getElementById("navigation");
  element.classList.toggle("navigation-open");
}