import * as bootstrap from "bootstrap";
import "../scss/style.scss";

const btnLogout = document.getElementById("btn-logout");
btnLogout ? btnLogout.addEventListener("click", logout) : "";

function logout() {
  localStorage.setItem("userStorage", "");
  localStorage.setItem("isAutorizated", "false");
  window.location.href = "/";
}