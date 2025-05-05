
// Prompt usado: "Add a responsive hamburger menu using JavaScript"
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "☰";
    toggleBtn.classList.add("menu-toggle");

    const nav = document.querySelector("nav ul");
    nav.parentElement.insertBefore(toggleBtn, nav);

    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("activo");
    });

    // Prompt usado: "Toggle dark/light mode with a button using JavaScript"
    const modoBtn = document.createElement("button");
    modoBtn.innerText = "🌙";
    modoBtn.classList.add("modo-toggle");
    document.body.appendChild(modoBtn);

    modoBtn.addEventListener("click", () => {
        document.body.classList.toggle("oscuro");
        modoBtn.innerText = document.body.classList.contains("oscuro") ? "☀️" : "🌙";
    });
});
