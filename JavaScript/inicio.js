document.getElementById("inicio2").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario para validación

    // Obtener los valores de los campos
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validación simple: comprobar que los campos no estén vacíos
    if (username === "" || password === "") {
        document.getElementById("error-message").textContent = "Por favor, complete todos los campos.";
    } else {
        document.getElementById("error-message").textContent = ""; // Limpiar mensaje de error
        alert("¡Bienvenido, " + username + "!");
        // Aquí puedes redirigir al usuario a otra página o hacer más acciones.
    }
});

