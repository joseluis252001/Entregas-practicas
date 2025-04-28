console.log(window);
console.log(document);
console.log(navigator);

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

const $firstParagraph = document.querySelector("p");
const $firstPaleGreenItem = document.querySelector(".bg-palegreen ");
const $idTitle = document.querySelector("#title");

console.log($firstParagraph);
console.log($firstPaleGreenItem);
console.log($idTitle);

const $linkDOM = document.querySelector("#link-dom");

//Obtener el valor actual
console.log($linkDOM.textContent);
console.log($linkDOM.innerHTML);

//Establecer un nuevo valor
$linkDOM.textContent = "Acceso a la documentación del DOM en MDN";
$linkDOM.innerHTML = "Acceso a la documentación del <i>DOM</i> en <i>MDN</i>";

// Valida que el atributo exista
console.log($linkDOM.hasAttribute("target"));
console.log($linkDOM.hasAttribute("href"));

// Obtener el valor actual del atributo
console.log($linkDOM.getAttribute("href"));

// Elimina el atributo del elemento
$linkDOM.removeAttribute("download");

let urlDoc =
  "https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model";

// Establecer un nuevo valor al atributo
$linkDOM.setAttribute("href", urlDoc);
$linkDOM.setAttribute("target", "_blank");

// Modificamos los estilos de un elemento mediante la propiedad style
const $subtitleCSS = document.querySelector("#subtitle-css");

// Cualquiera de las 2 opciones son válidas:
//    1) usar el método setProperty o
//    2) acceder a la propiedad directa
$subtitleCSS.style.setProperty("color", "red");
$subtitleCSS.style.color = "red";
$subtitleCSS.style.setProperty("background-color", "black");
$subtitleCSS.style.backgroundColor = "black";

$subtitleCSS.style.padding = "1rem";
$subtitleCSS.style.borderRadius = "0.5rem";
$subtitleCSS.style.textAlign = "center";
$subtitleCSS.style.fontSize = "2rem";

// Para modificar los estilos de varios elementos a la vez, nos ayudamos del método forEach
const $thumbnails = document.querySelectorAll(".thumbnail");

$thumbnails.forEach((el) => {
  el.style.borderRadius = "50%";
  el.style.filter = "grayscale(1)";
  el.style.transform = "rotate(45deg)";
});
