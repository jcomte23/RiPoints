import { showClans } from "./clans";
import { showCoders } from "./coders";
import { showDashboard } from "./dashboard";
import { showFileAttachment } from "./FileAttachment";
import { getLanguague } from "../js/translator";
import "../scss/tables.scss";

const renderSideNav = (session) => {
  const { name, photo, lastName, rol } = session;
  return `
    <div class="d-flex flex-column align-items-center w-100 border-bottom" >
      <figure class="profile__pic border border-5 rounded-circle d-flex justify-content-center align-items-center"> 
        <img src="../../../img/persons/${
          photo !== undefined ? photo : "default.webp"
        }" class="m-0 w-100 h-100" alt="photo user" width="183" height="183"/>
      </figure>
      <div class="profile_info pb-2 d-flex flex-column align-items-center d-none d-sm-flex text-center" >
        <h2 class="text-capitalize fs-5">${name} ${lastName}</h2>
        <span class="text-capitalize text-white-50">${rol.name}</span>
      </div>
    </div>

    <ul class="container__links d-flex flex-column justify-content-start align-items-center gap-3 list-unstyled mt-3 p-0 h-75 w-100 ">    
      ${
        rol.name === "admin"
          ? `  
        <li class="p-2 d-flex justify-content-start align-items-center gap-2 rounded-start rounded-end w-100">
          <img src="/svgs/dashboard_icon.svg" alt="dashboard-icon" width="24" height="23" />
          <span data-i18n="dashboard" class="text-capitalize d-none d-sm-flex"></span>
        </li>
        <li class="p-2 d-flex justify-content-start align-items-center gap-2 rounded-start rounded-end w-100">
          <img src="/icons/file_upload_white.svg" alt="file" width="25" height="25" id="abc"/>
          <span data-i18n="load_docs" class="text-capitalize d-none d-sm-flex"></span>
        </li>
        `
          : ""
      }
      <li class="p-2 d-flex justify-content-start align-items-center gap-2 rounded-start rounded-end w-100">
        <img src="/icons/coder-icon.svg" alt="coders" width="25" height="25" />
        <span data-i18n="developers" class="text-capitalize d-none d-sm-flex"></span>
      </li>
      ${rol.name === "trainer"? `
      <li class="p-2 d-none justify-content-start align-items-center gap-2 rounded-start rounded-end w-100">
      ` :`
      <li class="p-2 d-flex justify-content-start align-items-center gap-2 rounded-start rounded-end w-100">
      `}
        <img src="/svgs/clanes_icon.svg" alt="clanes" width="25" height="25" />
        <span data-i18n="clans" class="text-capitalize d-none d-sm-flex"></span>
      </li>
    </ul>

    <div class='border-top w-100 d-flex justify-content-center pt-2 align-items-center'>
      
      <div class="btn-group dropup-center dropend dropup z-3 my-2 mx-3">
        <i class="bi bi-gear-fill fs-1 d-flex d-sm-none" data-bs-toggle="dropdown" aria-expanded="true"></i>
        <button type="button" class="d-none d-sm-flex justify-content-sm-center align-items-sm-center btn btn-secondary dropdown-toggle text-capitalize" data-bs-toggle="dropdown" aria-expanded="true" data-i18n="settings">
        </button>
        <ul class="dropdown-menu text-center">
          <li id="btn-lang" class="changeLang dropdown-item ">
              <i class="bi bi-translate fs-5"></i>
              <span id="span_es" class="d-none" onclick="changeLanguage('es')">Español</span>
              <span id="span_en" class="d-none" onclick="changeLanguage('en')">English</span>
            </li>
          <li><a class="dropdown-item text-capitalize" href="https://moodle.riwi.io" target="_blank" data-i18n="gotomoodle"></a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><button type="button" data-i18n="logout" class="btn btn-secondary text-capitalize" id="btn-logout"></button></li>
        </ul>
      </div>
    </div>  
  `;
};

const sideNav = () => {
  const nav = document.querySelector(".side-nav");
  const session = JSON.parse(localStorage.getItem("userStorage"));
  nav.innerHTML = renderSideNav(session);
};

sideNav();

const showView = document.getElementById("containerTable");
const sideNavSelector = document.getElementsByTagName("ul")[0];
sideNavSelector.addEventListener("click", (event) => {
  let position = event.target.children[1].textContent.toLowerCase();
  console.log(position);
  switch (position) {
    case "coders":
    case "desarrolladores":
      showCoders(showView);
      break;
    case "panel":
    case "dashboard":
      showDashboard(showView);
      break;
    case "carga docs":
    case "load docs":
      showFileAttachment(showView);
      break;
    case "clanes":
    case "clans":
      showClans(showView);
      break;
  }
});

showDashboard(showView);

// FUNCION PARA CAMBIAR DE IDIOMA
const btnLang = document.getElementById("btn-lang");
const span_es = document.getElementById("span_es");
const span_en = document.getElementById("span_en");

let lang = getLanguague();
if (lang === "es") {
  span_es.classList.add("d-none");
  span_en.classList.remove("d-none");
} else {
  span_es.classList.remove("d-none");
  span_en.classList.add("d-none");
}

btnLang.addEventListener("click", () => {
  let lang = getLanguague();
  if (lang === "es") {
    span_es.classList.add("d-none");
    span_en.classList.remove("d-none");
  } else {
    span_es.classList.remove("d-none");
    span_en.classList.add("d-none");
  }
});

// FUNCION PARA CERRAR SESION
const btnLogout = document.getElementById("btn-logout");
btnLogout ? btnLogout.addEventListener("click", logout) : "";

function logout() {
  localStorage.setItem("userStorage", "");
  localStorage.setItem("isAutorizated", "false");
  window.location.href = "/";
}

//FUNCION PARA LA BARRA DE NAVEGACION
// const iconMenu = document.querySelector(".icon-menu")
// iconMenu.addEventListener("click", () => {
//   const nav = document.querySelector(".side-nav")

//   if (nav.style.width === "4rem") {
//     nav.style.width = "15rem"
//     nav.firstElementChild.style.marginLeft = "190px"
//     nav.firstElementChild.style.borderBottom = "none"
//     nav.firstElementChild.nextElementSibling.classList.remove("d-none")
//     nav.firstElementChild.nextElementSibling.nextElementSibling.classList.remove("d-none")
//     nav.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("d-none")
//   } else {
//     nav.style.width = "4rem"
//     nav.firstElementChild.style.marginLeft = "0"
//     nav.firstElementChild.style.borderBottom = "1px solid #ffffff51"
//     nav.firstElementChild.nextElementSibling.classList.add("d-none")
//     nav.firstElementChild.nextElementSibling.nextElementSibling.classList.add("d-none")
//     nav.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("d-none")
//   }
// })
