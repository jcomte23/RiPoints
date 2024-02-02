import "../scss/login.scss";
import { smallAlertError } from "./alerts";
import { showLogin } from "../components/login";
import { getRolUser, getUser } from "./services/getUser";
import {
  showValidation,
  showValidationAccount,
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
  localStorage.setItem("userStorage", JSON.stringify(userSearch));
  if (userSearch) {
    const userRol = await getRolUser(userSearch.idRol);
    redirect(userRol.name);
  } else {
    let idioma = localStorage.getItem("lang")
    if (idioma=="es") {
      smallAlertError("Usuario o contraseña incorrectos")
    } else {
      smallAlertError("Incorrect username or password")
    }
    // showValidationAccount(form);
  }
});

const redirect = (rol) => {
  location.href = `src/pages/${rol}/index.html`;
};
