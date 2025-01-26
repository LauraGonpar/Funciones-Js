// Cambiando el color de fondo del texto al hacer click
function pintar(element, color = "green") {
  element.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});

pintar(ele);
