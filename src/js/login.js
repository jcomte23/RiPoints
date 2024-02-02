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
    console.log(userSearch);
    switch (userSearch.idRol) {
      case 1:
        window.location.href = `src/pages/admin/index.html`;
        break;
      case 2:
        window.location.href = `src/pages/trainer/index.html`;
        break;
      case 3:
        window.location.href = `src/pages/coder/index.html`;
        break;
      default:
        window.location.href = `/`;
        break;
    }
  }



  // localStorage.setItem("userStorage", JSON.stringify(userSearch));
  // if (userSearch) {
  //   const userRol = await getRolUser(userSearch.idRol);
  //   redirect(userRol.name);
  // } else {
  //   let idioma = localStorage.getItem("lang")
  //   if (idioma=="es") {
  //     smallAlertError("Usuario o contraseña incorrectos")
  //   } else {
  //     smallAlertError("Incorrect username or password")
  //   }
  //   // showValidationAccount(form);
  // }
});

const redirect = (rol) => {
  location.href = `src/pages/${rol}/index.html`;
};
