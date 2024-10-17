let img = document.querySelectorAll("img");
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("dragstart", (event) => {
    console.log("dragstart");
    //se guarda la url de la imagen
    event.target.style.opacity = "0.4";
    event.target.style.cursor = "grabbing";
    event.target.style.transform = "scale(1.5)";
    event.dataTransfer.setData("text/plain", event.target.src);
  });
}

container2.addEventListener("drop", (event) => {
  console.log("drop");
  //se cargan los datos del objeto arrastrado
  console.log("drop");
  let img = document.createElement("img");
  img.src = event.dataTransfer.getData("text/plain");
  event.target.appendChild(img);
});
//hace que funcione el evento anterior cuando entra en el div donde se le aplica
container2.addEventListener("dragover", (event) => {
  console.log("dragover");
  event.preventDefault();
});

for (let i = 0; i < img.length; i++) {
img[i].addEventListener("dragend", (event) => {
    console.log("dragend");
    event.target.style.opacity = "1";
    event.target.style.transform = "scale(1)";
  });}