import { showClans } from "./clans";
import { showCoders } from "./coders";
import { showDashboard } from "./dashboard";
import { showFileAttachment } from "./FileAttachment";
import { getLanguague } from "../js/translator";
import "../scss/tables.scss";

const renderSideNav = (session) => {
  const { name, lastName, rol } = session;
  return `
    <div class="profile-container" >
      <figure class="profile__pic">
        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo riwi R" width="183" height="183"/>
      </figure>
      <div class="profile_info pb-2" >
        <h2>${name} ${lastName}</h2>
        <span>${rol.name}</span>
      </div>
    </div>

    <ul class="container__links">    
      ${rol.name === "admin" ?
      `  
        <li>
          <img src="/svgs/dashboard_icon.svg" alt="dashboard-icon" width="24" height="23" />
          <span data-i18n="dashboard" class="text-capitalize"></span>
        </li>
        <li>
          <img src="/icons/file_upload_white.svg" alt="file" width="25" height="25" id="abc"/>
          <span data-i18n="load_docs" class="text-capitalize"></span>
        </li>
        `
      : ""}
      <li>
        <img src="/icons/coder-icon.svg" alt="coders" width="25" height="25" />
        <span data-i18n="developers" class="text-capitalize"></span>
      </li>
      <li>
        <img src="/svgs/clanes_icon.svg" alt="clanes" width="25" height="25" />
        <span data-i18n="clans" class="text-capitalize"></span>
      </li>  
    </ul>

    <div class='settings-container'>
      <div class="btn-group dropup-center dropup z-3 my-2 mx-3">
        <button type="button" class="btn btn-secondary dropdown-toggle text-capitalize" data-bs-toggle="dropdown" aria-expanded="true" data-i18n="settings">
        </button>
        <ul class="dropdown-menu text-center">
          <li id="btn-lang" class="changeLang dropdown-item d-flex justify-content-center align-items-center gap-2"><i
              class="bi bi-translate fs-5"></i>
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
  `
}

const sideNav = () => {
  const nav = document.querySelector(".side-nav");
  const session = JSON.parse(localStorage.getItem("userStorage"));
  nav.innerHTML = renderSideNav(session);
};

sideNav();

const showView = document.getElementById("containerTable");
const sideNavSelector = document.getElementsByTagName("ul")[0];
sideNavSelector.addEventListener("click", (event) => {
  let selected = event.target;
  let ulList = Array.from(selected.parentElement.children);
  let position = ulList.indexOf(selected);

  switch (position) {
    case 0:
      showCoders(showView);
      break;
    case 1:
      showClans(showView);
      break;
    case 2:
      showDashboard(showView);
      break;
    case 3:
      showFileAttachment(showView);
      break;
  }
});

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

// changeLanguageOnClick();
// //default

showCoders(showView)

const btnLogout = document.getElementById("btn-logout");
btnLogout ? btnLogout.addEventListener("click", logout) : "";

function logout() {
  localStorage.setItem("userStorage", "");
  localStorage.setItem("isAutorizated", "false");
  window.location.href = "/";
}
