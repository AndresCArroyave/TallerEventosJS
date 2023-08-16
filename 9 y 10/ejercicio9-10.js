let div = document.querySelector("div");
div.classList.add("myDiv");
let myDiv = document.querySelector(".myDiv");
let previaScroll = window.scrollY;
window.addEventListener("scroll", function(){
    let actualScroll = window.scrollY;
    if(actualScroll > previaScroll){
    myDiv.style.background ="green"; 
    }else{
        myDiv.style.background ="black";
    }
    previaScroll = actualScroll;
});

let boton = document.querySelector("#myBtn");
window.addEventListener("scroll", function(){
    if(window.scrollY > 10){
        boton.style.display = "block";
    }else{
        boton.style.display = "none";
    }
});

boton.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: "smooth"});
});
