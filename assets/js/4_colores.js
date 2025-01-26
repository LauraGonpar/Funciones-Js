// Cambiando los colores de las cajas a negro al hacer click

const blueBox = document.querySelector("#caja1");
const redBox = document.querySelector("#caja2");
const greenBox = document.querySelector("#caja3");
const yellowBox = document.querySelector("#caja4");

blueBox.addEventListener("click", function () {
  blueBox.style.backgroundColor = "black";
});
redBox.addEventListener("click", function () {
  redBox.style.backgroundColor = "black";
});
greenBox.addEventListener("click", function () {
  greenBox.style.backgroundColor = "black";
});
yellowBox.addEventListener("click", function () {
  yellowBox.style.backgroundColor = "black";
});

// Cambiando el color de la caja al presionar las teclas a, s y d

const keyDiv = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    keyDiv.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    keyDiv.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    keyDiv.style.backgroundColor = "lightblue";
  }
});

// duplicando la caja al presionar las teclas q, w y e y a su vez cambiando el color de la caja duplicada
const divBase = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    const newDiv = divBase.cloneNode(true);
    newDiv.style.backgroundColor = "purple";
    divBase.parentElement.appendChild(newDiv);
  } else if (event.key === "w") {
    const newDiv = divBase.cloneNode(true);
    newDiv.style.backgroundColor = "gray";
    divBase.parentElement.appendChild(newDiv);
  } else if (event.key === "e") {
    const newDiv = divBase.cloneNode(true);
    newDiv.style.backgroundColor = "brown";
    divBase.parentElement.appendChild(newDiv);
  }
});
