document.addEventListener("DOMContentLoaded", function () {
    const btnShowForm = document.getElementById("show-form");
    const hideForm = document.getElementById("formm");

    let res = false; // Variable para rastrear si el formulario está visible

    btnShowForm.addEventListener("click", function () {
        if (res) {
            hideForm.style.display = "none";
        } else {
            hideForm.style.display = "block"; 
        }

        res = !res; // Invierte el estado del formulario
    });
});
