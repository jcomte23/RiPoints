import * as bootstrap from "bootstrap";
import { showClans } from "./clans";
import { showCoders } from "./coders";
import { showDashboard } from "./dashboard";
import { showFileAttachment } from "./FileAttachment";
import { changeLanguageOnClick } from "../js/translator"; 
import '../scss/tables.scss'

const sideNav = () => {
  const nav = document.querySelector(".side-nav");
  const session = localStorage.getItem("userStorage")
  const role = JSON.parse(session).roleId
  nav.innerHTML = `
    <figure>
      <img src="/img/img_globales/rlogo-r-white.svg" alt="Logo riwi R" width="183" height="183"/>
    </figure>
    <ul class="container__links">
      <li>
        <img src="/icons/dashboard-icon.svg" alt="dashboard-icon" width="24" height="23" />
        <span data-i18n="dashboard" class="text-capitalize"></span>
      </li>
      <li>
        <img src="/icons/clanes-icon.svg" alt="clanes" width="25" height="25" />
        <span data-i18n="clans" class="text-capitalize"></span>
      </li>
      <li>
        <img src="/icons/coder-icon.svg" alt="coders" width="25" height="25" />
        <span data-i18n="developers" class="text-capitalize"></span>
      </li>
      <li>
        <img src="/icons/file_upload_white.svg" alt="file" width="25" height="25" id="abc"/>
        <span data-i18n="load_docs" class="text-capitalize"></span>
      </li>
    </ul>
    <a class="menu__header--lang btn btn-primary">
      <div class="lang--flag"></div>
      <h4 data-i18n="lang"></h4>
    </a>
  `;
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
      showDashboard(showView);
      break;
    case 1:
      showClans(showView);
      break;
    case 3:
      showFileAttachment(showView);
      break;
    default:
      showCoders(showView);
      break;
  }
});
changeLanguageOnClick();
//default

showFileAttachment(showView);
