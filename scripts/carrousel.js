const cntCarrousel = document.getElementById("cntCarrousel");
const carrousel = document.createElement("div");
carrousel.id = "carrousel";
carrousel.classList.add("carrousel");

const items = [
  //Imagenes del corredor
  "./imagenes/corredor/pizzas940x788.png",
  "./imagenes/corredor/pasteleria940x788.png",
  "./imagenes/corredor/tortas940x788.png",
];

let imgCarrousel;
let btn;
let indice = 0;

const cntBtn = document.createElement("div");
cntBtn.className = "cntBtn";

for (let item of items) {
  imgCarrousel = document.createElement("img");
  imgCarrousel.src = item;
  imgCarrousel.classList.add("imgCarrousel");
  carrousel.appendChild(imgCarrousel);
  btn = document.createElement("button");
  btn.className = `item${indice} boton`;
  cntBtn.appendChild(btn);
  indice++;
}
cntCarrousel.appendChild(carrousel);
cntCarrousel.appendChild(cntBtn);
const seccion = document.getElementById("sContacto");
seccion.appendChild(cntCarrousel);

const carrousel1 = document.getElementById("carrousel");
const btns = document.querySelectorAll(".boton");
btns[0].classList.add("activo");
btns.forEach((cadaBtn, i) => {
  btns[i].addEventListener("click", () => {
    let posicion = i;
    let operacion = posicion * -33.333333;
    carrousel1.style.transform = `translateX(${operacion}%)`;
    btns.forEach((cadaBtn, i) => {
      btns[i].classList.remove("activo");
    });
    btns[i].classList.add("activo");
  });
});
