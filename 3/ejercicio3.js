let botom = document.querySelector(".openbtn");
let close = document.querySelector(".closebtn");
let sidebar = document.querySelector("#mySidebar");
botom.addEventListener("click", abrirMenu3);
function abrirMenu3(){
    sidebar.style.left = "0";
};

close.addEventListener("click", closeMenu3);
function closeMenu3(){
    sidebar.style.left = "-200px"
};
   


