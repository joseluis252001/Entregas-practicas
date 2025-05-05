// Prompt: "Add a responsive hamburger menu using JavaScript"

document.addEventListener("DOMContentLoaded", function () {
    // Crear botón hamburguesa
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "☰";
    toggleBtn.classList.add("menu-toggle");

    // Seleccionar la barra de navegación y la lista
    const nav = document.querySelector("nav");
    const navList = nav.querySelector("ul");

    // Insertar el botón antes de la lista
    nav.insertBefore(toggleBtn, navList);

    // Alternar clase al hacer clic
    toggleBtn.addEventListener("click", () => {
        navList.classList.toggle("activo");
    });

    // Crear botón de modo claro/oscuro
    const modoBtn = document.createElement("button");
    modoBtn.innerText = "🌙";
    modoBtn.classList.add("modo-toggle");
    document.body.appendChild(modoBtn);

    // Alternar tema al hacer clic
    modoBtn.addEventListener("click", () => {
        document.body.classList.toggle("oscuro");
        modoBtn.innerText = document.body.classList.contains("oscuro") ? "☀️" : "🌙";
    });
});
