const contenedorHome = document.getElementById("contenedorHome");
const contenedorUbicacion = document.getElementById("contenedorUbicacion");
const contenedorContacto2 = document.getElementById("contenedorContacto");
const contenedorLogin = document.getElementById("contenedorLogin");

const cargarSeccion = (entradas, observador) => {
  //Animacion menui nav
  entradas.forEach((entrada) => {
    //Animacion de secciones
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");

      if (entrada.target.id == "sHome") {
        contenedorHome.classList.add("activo");
      } else {
        contenedorHome.classList.remove("activo");
      }
      if (entrada.target.id == "sContacto") {
        contenedorContacto2.classList.add("activo");
      } else {
        contenedorContacto2.classList.remove("activo");
      }
      if (entrada.target.id == "sUbicacion") {
        contenedorUbicacion.classList.add("activo");
      } else {
        contenedorUbicacion.classList.remove("activo");
      }
    } else {
      entrada.target.classList.remove("visible");
    }
  });
};

const div = document.getElementById("sPadre");
const secciones = document.getElementsByClassName("seccion");
const observador = new IntersectionObserver(cargarSeccion, {
  //crear observador
  root: null,
  rootMargin: "0px 0px 30px 0px",
  threshold: 0.2,
});
for (let item of secciones) observador.observe(item); //observar elementos div

contenedorHome.addEventListener("click", (e) => {
  location.href = "/#sHome";
});
contenedorUbicacion.addEventListener("click", (e) => {
  location.href = "/#sUbicacion";
});
contenedorContacto2.addEventListener("click", (e) => {
  location.href = "/#sContacto";
});
