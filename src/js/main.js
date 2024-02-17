import * as bootstrap from "bootstrap";
import "../scss/style.scss";
import { updateClansPoints } from "./services/helpers";

updateClansPoints("van_rossum")

const btnLogout = document.getElementById("btn-logout");
btnLogout ? btnLogout.addEventListener("click", logout) : "";

function logout() {
  const lang = localStorage.getItem("lang")
  let message
  switch (lang) {
    case "es":
      message = "¿Estás seguro de que quieres salir?"
      break;
    case "en":
      message = "Are you sure you want to exit?"
      break;
    default:
      message = "Are you sure you want to exit?"
      break;
  }

  if (confirm(message)) {
    localStorage.setItem("userStorage", "");
    localStorage.setItem("isAutorizated", "false");
    window.location.href = "/";
  }
}