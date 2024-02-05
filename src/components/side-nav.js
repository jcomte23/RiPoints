import * as bootstrap from "bootstrap";
import { showClans } from "./clans";
import { showCoders } from "./coders";
import { showDashboard } from "./dashboard";
import { showFileAttachment } from "./FileAttachment";
import { changeLanguageOnClick } from "../js/translator";
import '../scss/tables.scss'



const renderSideNav = (role) => {

      return  `
      <div class="profile-container" >
      
        <figure class="profile__pic">
          <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo riwi R" width="183" height="183"/>
        </figure>

        <div class="profile_info" >
          <h2>Kevin Mejia</h2>
          <span>Desarrollo</span>
        </div>
      
      </div>
      <hr/>
        <ul class="container__links">
          <li>
            <img src="/svgs/coder_icon.svg" alt="dashboard-icon" width="24" height="23" />
            <span data-i18n="dashboard" class="text-capitalize"></span>
          </li>
          <li>
            <img src="/svgs/clanes_icon.svg" alt="clanes" width="25" height="25" />
            <span data-i18n="clans" class="text-capitalize"></span>
          </li>

          ${
            role === "admin" ? `  
            <li>
            <img src="/icons/coder-icon.svg" alt="coders" width="25" height="25" />
            <span data-i18n="developers" class="text-capitalize"></span>
          </li>
          <li>
            <img src="/icons/file_upload_white.svg" alt="file" width="25" height="25" id="abc"/>
            <span data-i18n="load_docs" class="text-capitalize"></span>
          </li>`
          : ""}
        
        </ul>
        <a class="menu__header--lang btn btn-primary">
          <div class="lang--flag"></div>
          <h4 data-i18n="lang"></h4>
        </a>
        <button type="button" data-i18n="logout" class="btn btn-primary-coder btn-block bi bi-arrow-left" id="btn-logout"></button>
      `
}


const sideNav = () => {
  const nav = document.querySelector(".side-nav");
  const session = localStorage.getItem("userStorage")
  const role = JSON.parse(session).role.name
  nav.innerHTML=  renderSideNav(role)


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
