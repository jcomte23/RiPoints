import "../scss/login.scss";
import { smallAlertError } from "./alerts";
import { showLogin } from "../components/login";
import { getUser } from "./services/getUser";
import {
  showValidation,
} from "./validations/validationForm";

const sectionForm = document.getElementById("sectionForm");
showLogin(sectionForm);

let userSearch;
const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const user = {};
  for (const [key, value] of formData) {
    if (!value) return showValidation();
    user[key] = value;
  }
  
  userSearch = await getUser(user);
  if (userSearch === null) {
    let idioma = localStorage.getItem("lang")
    if (idioma == "es") {
      smallAlertError("usuario no encontrado")
    } else {
      smallAlertError("user not found")
    }
  } else if (userSearch === undefined) {
    let idioma = localStorage.getItem("lang")
    if (idioma == "es") {
      smallAlertError("contraseña incorrecta")
    } else {
      smallAlertError("incorrect password")
    }
  } else {
    localStorage.setItem("userStorage", JSON.stringify(userSearch));
    localStorage.setItem("isAutorizated", "true")
    switch (userSearch.role.name) {
      case "admin":
        redirect(userSearch.role.name);
        break;
      case "trainer":
        redirect(userSearch.role.name);
        break;
      case "coder":
        redirect(userSearch.role.name);
        break;
      default:
        break;
    }
  }
});

const redirect = (rol) => {
  location.href = `src/pages/${rol}/index.html`;
};
