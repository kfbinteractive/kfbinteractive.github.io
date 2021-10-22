const cardbg = document.querySelector('.cardbg');

window.onload = function(){
        document.getElementById("browsersensor").style.display = "block";       
        document.getElementById("loader").style.opacity = "0";     
    document.getElementById("browsersensor").style.display = "block";
    setTimeout(function(){
        document.getElementById("loader").style.animationPlayState = "running";    
        document.getElementById("loader").style.opacity = "0.3";       
    },100); 
     
    
    setTimeout(function(){
        document.getElementById("loader").style.opacity = "0";
        document.getElementById("browsersensor").style.opacity = "1";
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
        document.getElementById("backgroundvideo").style.opacity = "1";
    },2500); 
    
};

