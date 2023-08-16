let cambiar = document.querySelector(".nieve");
let respuesta = document.querySelector(".resultado");
cambiar.addEventListener("change", cambiarHelado);
function cambiarHelado(){
    let opcion = cambiar.options[cambiar.selectedIndex].value;
   if(opcion !== ""){
    respuesta.textContent = "Te gusta el sabor de: " + opcion;
   }else{
    respuesta.textContent = "Seleccione una opcion";
   }
};