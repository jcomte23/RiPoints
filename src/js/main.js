import * as bootstrap from "bootstrap";
import "../scss/style.scss";
import { getLanguague } from "./translator";

const btnLang = document.getElementById("btn-lang")
const span_es = document.getElementById("span_es")
const span_en = document.getElementById("span_en")

let lang = getLanguague()
if (lang === "es") {
  span_es.classList.add("d-none")
  span_en.classList.remove("d-none")
} else {
  span_es.classList.remove("d-none")
  span_en.classList.add("d-none")
}

btnLang.addEventListener('click', () => {
  let lang = getLanguague()
  if (lang === "es") {
    span_es.classList.add("d-none")
    span_en.classList.remove("d-none")
  } else {
    span_es.classList.remove("d-none")
    span_en.classList.add("d-none")
  }
})



const btnLogout = document.getElementById("btn-logout");
btnLogout ? btnLogout.addEventListener("click", logout) : "";

function logout() {
  localStorage.setItem("userStorage", "");
  localStorage.setItem("isAutorizated", "false");
  window.location.href = "/";
}
