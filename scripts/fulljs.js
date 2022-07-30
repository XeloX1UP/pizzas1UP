// Funcion para crear botones
const addBtn = (idContenedor, srcImagen, txtBoton) => {
  //Crear divContenedor
  let divContenedor = document.createElement("div");
  divContenedor.id = `${idContenedor}`;
  //Crear imagen boton
  let imagen = document.createElement("img");
  imagen.className = "iconoBoton";
  imagen.src = `${srcImagen}`;
  //Crear texto boton
  let span = document.createElement("span");
  span.className = "text";
  span.textContent = `${txtBoton}`;
  //agregar imagen y boton al contenedor
  divContenedor.appendChild(imagen);
  divContenedor.appendChild(span);
  return divContenedor;
};
const crearSeccion = (id) => {
  let seccion = document.createElement("div");
  seccion.className = `seccion s${id}`;
  return seccion;
};

const crearLinkInteres = (rutaImagen, texto, boton) => {
  let contenedorFondo = document.createElement("div");
  contenedorFondo.className = "imagenLink";
  contenedorFondo.style.backgroundImage = `url('${rutaImagen}')`;
  let contenedorFiltro = document.createElement("div");
  contenedorFiltro.className = "filtroImagenLink";
  contenedorFiltro.style.backgroundImage = `linear-gradient(180deg, rgba(255,255,255, 0.3) 30%, 
    rgba(0, 0, 0, 0.7) 65%)`;

  let titulo = document.createElement("h2");
  titulo.className = "tituloLI";
  titulo.innerHTML = `${texto[0]}`;

  let parrafo = document.createElement("p");
  parrafo.className = "textoLI";
  parrafo.innerHTML = `${texto[1]}`;

  contenedorFiltro.appendChild(titulo);
  contenedorFiltro.appendChild(parrafo);

  let btnLI = document.createElement("input");
  btnLI.type = "button";
  btnLI.className = "btnLI";
  btnLI.value = `${boton}`;
  contenedorFiltro.appendChild(btnLI);

  //montar imagenes
  contenedorFondo.appendChild(contenedorFiltro);

  return contenedorFondo;
};
//Crear fragmento de navegacion
const fragmentNav = document.createDocumentFragment();

// Crear Header
const header = document.createElement("header");
// Crear contenedor del logo
const contenedorLogo = document.createElement("div");
contenedorLogo.className = "contenedorLogo";
contenedorLogo.id = "contenedorLogo";
const imgLogo = document.createElement("img");
imgLogo.className = "logo";
imgLogo.src = "/imagenes/logo/logoPizza.png";
contenedorLogo.appendChild(imgLogo);

// Crear contenedor de botones
const navegador = document.createElement("nav");
navegador.id = "mainMenu";

//Crear botones
const btnHome = addBtn("contenedorHome", "/imagenes/iconos/casa.png", "inicio");
const btnUbicacion = addBtn(
  "contenedorUbicacion",
  "/imagenes/iconos/ubicacion.png",
  "ubicacion"
);
const btnContacto = addBtn(
  "contenedorContacto",
  "/imagenes/iconos/contacto.png",
  "contacto"
);
const btnLogIn = addBtn(
  "contenedorLogin",
  "/imagenes/iconos/acceso.png",
  "login"
);
// insertar botones al nav
navegador.appendChild(btnHome);
navegador.appendChild(btnUbicacion);
navegador.appendChild(btnContacto);
navegador.appendChild(btnLogIn);

//Insertar barra de navegacion al body
header.appendChild(contenedorLogo);
header.appendChild(navegador);
fragmentNav.appendChild(header);
document.body.appendChild(fragmentNav);

//Crear fragmento de Seccion
const fragmentSeccion = document.createDocumentFragment();
//Crear seccion Home
const seccionHome = crearSeccion("Home");
//Crear texto para el boton []
let textoLI = [
  "¿Tienes hambre?",
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Aliquam viverra rhoncus felis quis fringilla. Etiam porta rutrum risus nec pellentesque.`,
];
//Crear Link Interes
const link1 = crearLinkInteres(
  "/imagenes/corredor/comida1.jpg",
  textoLI,
  "Pide aqui"
);
//Crear texto para el boton []
textoLI = [
  "Trabaja con nosotros",
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aliquam viverra rhoncus felis quis fringilla. Etiam porta rutrum risus nec pellentesque.`,
];
//Crear Link Interes
const link2 = crearLinkInteres(
  "/imagenes/corredor/comida2.jpg",
  textoLI,
  "Solicitar"
);

const seccionUbicacion = crearSeccion("Ubicacion");

const tituloMapa = document.createElement("h1");
tituloMapa.innerHTML = "Dónde encontrarnos";
tituloMapa.className = "titulo";

const contenedorMapa = document.createElement("div");
contenedorMapa.className = "contenedorMapa";
//Insertar codigo de mapa aquii 👇🏼👇🏼👇🏼👇🏼

//Insertar codigo de mapa aquii 👆🏼👆🏼👆🏼

const botonesMapa = document.createElement("div");
botonesMapa.className = "contBotonesMapa";
const centrarBtn = document.createElement("input");
centrarBtn.type = "button";
centrarBtn.value = "Centrar";
centrarBtn.className = "btnMapa";
const abrirGMBtn = document.createElement("input");
abrirGMBtn.type = "button";
abrirGMBtn.value = "Abrir en Google Maps";
abrirGMBtn.className = "btnMapa";

botonesMapa.appendChild(centrarBtn);
botonesMapa.appendChild(abrirGMBtn);

const seccionContacto = crearSeccion("Contacto");

const contenedorContacto = document.createElement("div");
contenedorContacto.className = "CtnContacto";

const tituloContacto = document.createElement("h1");
tituloContacto.innerHTML = "Contáctanos";
tituloContacto.className = "titulo";

const textoContacto = document.createElement("div");
textoContacto.className = "textoContacto";
const contactanos = document.createElement("h2");
contactanos.innerHTML = "Siguenos en nuestras redes sociales:";
const facebook = document.createElement("h3");
facebook.innerHTML = "Facebook";
facebook.addEventListener("click", () =>
  open("https://www.facebook.com/Pizzas1UP", "_blank")
);
const instagram = document.createElement("h3");
instagram.innerHTML = "Instagram";
instagram.addEventListener("click", () =>
  open("https://www.instagram.com/pizzas1up/", "_blank")
);
const whatsapp = document.createElement("h3");
whatsapp.innerHTML = "Whatsapp";
whatsapp.addEventListener("click", () =>
  open("https://wa.me/56933278825", "_blank")
);

const info1 = document.createElement("h4");
info1.innerHTML = "*Valor del delivery dependen de tu ubicación*";
const info2 = document.createElement("h2");
info2.innerHTML = "'Deliverys desde El Tabo hasta Llolleo'";
textoContacto.appendChild(contactanos);
textoContacto.appendChild(facebook);
textoContacto.appendChild(instagram);
textoContacto.appendChild(whatsapp);
textoContacto.appendChild(info2);
textoContacto.appendChild(info1);

const formulario = document.createElement("form");
formulario.className = "formularioContacto";
const iptNombre = document.createElement("input");
iptNombre.type = "text";
iptNombre.placeholder = "Nombre";
iptNombre.required = "required";
const iptCorreo = document.createElement("input");
iptCorreo.type = "email";
iptCorreo.placeholder = "Correo";
iptCorreo.required = "required";
const iptPedido = document.createElement("TEXTAREA");
iptPedido.placeholder = "¿Que quieres pedir?";
iptPedido.required = "required";
iptPedido.autocomplete = "off";
const btnFormContacto = document.createElement("button");
btnFormContacto.type = "submit";
btnFormContacto.innerHTML = "Enviar pedido";
btnFormContacto.addEventListener("click", (e) => {
  // e.preventDefault();
  console.log("Btn presionado");
});

formulario.appendChild(iptNombre);
formulario.appendChild(iptCorreo);
formulario.appendChild(iptPedido);
formulario.appendChild(btnFormContacto);
contenedorContacto.appendChild(textoContacto);
contenedorContacto.appendChild(formulario);

//Agregar links a seccion Home
seccionHome.appendChild(link1);
seccionHome.appendChild(link2);

//Agregar contenido seccion mapa
seccionUbicacion.appendChild(tituloMapa);
seccionUbicacion.appendChild(contenedorMapa);
seccionUbicacion.appendChild(botonesMapa);

//Agregar contenido seccion Contacto
seccionContacto.appendChild(tituloContacto);
seccionContacto.appendChild(contenedorContacto);

fragmentSeccion.appendChild(seccionHome);
fragmentSeccion.appendChild(seccionUbicacion);
fragmentSeccion.appendChild(seccionContacto);
document.body.appendChild(fragmentSeccion);
