window.onload = function(){
    setTimeout(function(){
        document.getElementById("loader").style.animationPlayState = "running";
    },1000); 
    
    
    setTimeout(function(){
        document.getElementById("loader").style.display = "none";
    },10000); 
};

//or

// window.addEventListener("load", function(){
//    document.getElementById("loader").style.display = "none";
// });