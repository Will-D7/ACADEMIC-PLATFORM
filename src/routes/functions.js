function showForm(){
    const botonMostrarFormulario = document.getElementById("show-form");
    const formularioOculto = document.getElementById("formm");

    botonMostrarFormulario.addEventListener("click", function () {
        if (formularioOculto.style.display === "none" || formularioOculto.style.display === "") {
            formularioOculto.style.display = "block"; // Muestra el formulario al hacer clic en el botón
        } else {
            formularioOculto.style.display = "none"; // Oculta el formulario si ya estaba visible
        }
    });
}