const loginFragment = document.createDocumentFragment();
const contenedor = document.createElement("div");
contenedor.className = "cntLogIn";
contenedor.id = "cntLogIn";

const cardLogin = document.createElement("form");
cardLogin.className = "cardLogin";
const btnSalir = document.createElement("div");
btnSalir.innerText = "X";
btnSalir.className = "btnSalir";
const txtTitulo = document.createElement("h1");
txtTitulo.innerHTML = "Accede a 'Pizzas1UP'";
const iptUsername = document.createElement("input");
iptUsername.type = "name";
iptUsername.maxLength = "25";
iptUsername.placeholder = "Usuario";
const iptPassword = document.createElement("input");
iptPassword.type = "password";
iptPassword.maxLength = "20";
iptPassword.placeholder = "Contraseña";
const btnLogin = document.createElement("button");
btnLogin.innerHTML = "Iniciar sesion";
btnLogin.type = "submit";

const btnRegistrar = document.createElement("button");
btnRegistrar.innerHTML = "Crea tu cuenta";

const forgot = document.createElement("a");
forgot.href = "#";
forgot.innerText = "¿olvidaste tu contraseña?";

cardLogin.appendChild(btnSalir);
cardLogin.appendChild(txtTitulo);
cardLogin.appendChild(iptUsername);
cardLogin.appendChild(iptPassword);
cardLogin.appendChild(forgot);
cardLogin.appendChild(btnLogin);
cardLogin.appendChild(btnRegistrar);

contenedor.appendChild(cardLogin);

//ocultar login y capturarlo
loginFragment.appendChild(contenedor);
const divLogin = document.getElementById("login");
divLogin.appendChild(loginFragment);
const cntLogIn = document.getElementById("cntLogIn");
divLogin.removeChild(cntLogIn);
let abierto = false;

const btnSwitch = document.getElementById("contenedorLogin");

const switchLogin = () => {
  const contenidoPagina0 = document.getElementById("sPadre");
  const contenidoPagina1 = document.getElementById("header");
  if (!abierto) {
    iptUsername.value = "";
    iptPassword.value = "";
    divLogin.appendChild(cntLogIn);
    abierto = true;
    console.log("abriendo");
    window.scrollTo(0, 0);
    contenidoPagina0.style.filter = "blur(3px)";
    contenidoPagina1.style.filter = "blur(3px)";
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
  } else {
    divLogin.removeChild(cntLogIn);
    abierto = false;
    console.log("cerrando");
    contenidoPagina0.removeAttribute("style");
    contenidoPagina1.removeAttribute("style");
    document.body.removeAttribute("style");
  }
};

btnSwitch.addEventListener("click", () => {
  switchLogin();
});
btnSalir.addEventListener("click", () => {
  switchLogin();
});

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    username: iptUsername.value,
    password: iptPassword.value,
  };
  console.log(data);
});
