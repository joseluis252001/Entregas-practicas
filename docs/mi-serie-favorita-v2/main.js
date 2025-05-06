document.addEventListener("DOMContentLoaded", function () {
    // Botón hamburguesa
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "☰";
    toggleBtn.classList.add("menu-toggle");

    const nav = document.querySelector("nav");
    const navList = nav.querySelector("ul");
    nav.insertBefore(toggleBtn, navList);

    toggleBtn.addEventListener("click", () => {
        navList.classList.toggle("activo");
    });

    // Botón modo claro/oscuro
    const modoBtn = document.createElement("button");
    modoBtn.innerText = "🌙";
    modoBtn.classList.add("modo-toggle");
    document.body.appendChild(modoBtn);

    modoBtn.addEventListener("click", () => {
        document.body.classList.toggle("oscuro");
        modoBtn.innerText = document.body.classList.contains("oscuro") ? "☀️" : "🌙";
    });
});
