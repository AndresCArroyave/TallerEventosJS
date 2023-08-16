window.addEventListener("load", function() {
    // Muestra el icono de carga al cargar la página
    let loadingIcon = document.getElementById("loading-icon");
    loadingIcon.style.display = "block";
    
    // Simula el tiempo de carga (3 segundos)
    setTimeout(function() {
      // Oculta el icono de carga después de 3 segundos
      loadingIcon.style.display = "none";
    }, 3000);
  });