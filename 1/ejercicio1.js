let icono = document.querySelector(".icon");
icono.addEventListener("click", abrirBottom);
function abrirBottom(){
    let menu = document.querySelector("#myNavbar");
    menu.classList.toggle("responsive");
}