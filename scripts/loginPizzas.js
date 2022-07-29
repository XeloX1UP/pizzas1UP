const loginFragment = document.createDocumentFragment();
const contenedor = document.createElement("div");
contenedor.className = "cntLogIn";
let abierto = false;

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
const iptPassword = document.createElement("input");
iptPassword.type = "password";
iptPassword.maxLength = "20";
const btnLogin = document.createElement("button");
btnLogin.innerHTML = "Iniciar sesion";

cardLogin.appendChild(btnSalir);
cardLogin.appendChild(txtTitulo);
cardLogin.appendChild(iptUsername);
cardLogin.appendChild(iptPassword);
cardLogin.appendChild(btnLogin);

contenedor.appendChild(cardLogin);

loginFragment.appendChild(contenedor);

const btnSwitch = document.getElementById("contenedorLogin");

const switchLogin = () => {
  if (!abierto) {
    document.body.appendChild(loginFragment);
    abierto = !abierto;
  } else {
    document.body.removeChild(loginFragment.firstElementChild);
    abierto = !abierto;
  }
};

btnSwitch.addEventListener("click", () => {
  switchLogin();
});
btnSalir.addEventListener("click", () => {
  switchLogin();
});
