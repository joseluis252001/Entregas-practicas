// Prompt: "Add a responsive hamburger menu using JavaScript"
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "☰";
    toggleBtn.classList.add("menu-toggle");

    const nav = document.querySelector("nav");
    nav.insertBefore(toggleBtn, nav.firstChild);

    const navList = nav.querySelector("ul");

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
