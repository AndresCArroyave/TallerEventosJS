let button = document.querySelector(".dropbtn");
button.addEventListener("click", openBottom);
function openBottom(){
    let menu2 = document.querySelector("#myDropdown");
    menu2.classList.toggle("show");
}