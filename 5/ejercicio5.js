let botonCheck = document.querySelector("#myCheck");
let texto = document.querySelector("#text");
function myFunction(){
    if(botonCheck.checked){
        texto.style.display = "block";
    }else{
        texto.style.display = "none";
    }
}