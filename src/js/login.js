import "../scss/login.scss";
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
form.addEventListener("submit", async(event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const user = {};
  for (const [key, value] of formData) {
    if (!value) return showValidation();
    user[key] = value;
  }

  userSearch = await getUser(user);
  if (userSearch) {
    const userRol = await getRolUser(userSearch.idRol);
    redirect(userRol.name);
  }else{
    showValidationAccount(form);
  }
  console.log(userSearch);
  console.log(userRol);
});

const redirect = (rol) => {
  location.href = `src/pages/${rol}/index.html`;
};
