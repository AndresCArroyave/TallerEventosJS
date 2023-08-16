let bottomContraseña = document.querySelector("#psw");
let mensaje = document.querySelector("#message");
let letra = document.querySelector("#letter");
let capital = document.querySelector("#capital");
let numero = document.querySelector("#number");
let longitud = document.querySelector("#length");

bottomContraseña.addEventListener("focus", ()=>{
    mensaje.style.display = "block";
});

bottomContraseña.addEventListener("blur", () =>{
    mensaje.style.display = "none";
});

bottomContraseña.addEventListener("keyup", () =>{
    let lowerCaseLetters = /[a-z]/g;
    if(bottomContraseña.value.match(lowerCaseLetters)){
        letra.classList.remove("invalid");
        letra.classList.add("valid");
    }else{
        letra.classList.remove("valid");
        letra.classList.add("invalid");
    }



    let upperCaseLetters = /[A-Z]/g;
    if(bottomContraseña.value.match(upperCaseLetters)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }


    let numbers = /[0-9]/g;
    if(bottomContraseña.value.match(numbers)){
        numero.classList.remove("invalid");
        numero.classList.add("valid");
    }else{
        numero.classList.remove("valid");
        numero.classList.add("invalid");
    }


if(bottomContraseña.value.length >= 8){
    longitud.classList.remove("invalid");
    longitud.classList.add("valid");
}else{
    longitud.classList.remove("valid");
    longitud.classList.add("invalid");
};

});