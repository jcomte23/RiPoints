import { showClans } from "./clans";
import { showCoders } from "./coders";
import { showDashboard } from "./dashboard";
import { showFileAttachment } from "./FileAttachment";

const sideNav = () => {
  const nav = document.querySelector(".side-nav");

  nav.innerHTML = `
    
    <figure>
        <img
            src="/img/img_globales/rlogo-r-white.svg"
            alt="Logo riwi R"
        />
    </figure>

    <ul class="container__links">
        <li>
            <img src="/icons/dashboard-icon.svg" alt="dashboard-icon" />
            Dashbard
        </li>
        <li>
            <img src="/icons/clanes-icon.svg" alt="clanes" />
            Clanes
        </li>
        <li>
            <img src="/icons/coder-icon.svg" alt="coders" />
            Coders
        </li>
        <li>
            <img src="/icons/file_upload_white.svg" alt="file" width="25" height="25" id="abc"/>
            Carga Docs
        </li>
    </ul>
    
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
//default
showCoders(showView);
