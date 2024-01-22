import "../scss/login.scss";
import * as bootstrap from "bootstrap";
import { showLogin } from "../components/login";
import { getAllUsers } from "./data";
import { showValidation, showValidationAccount } from "./validations/validationForm";

const sectionForm = document.getElementById("sectionForm");
showLogin(sectionForm);
let listUsersCache;
document.addEventListener("DOMContentLoaded", async () => {
   listUsersCache = await getAllUsers();
});


const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const user = {};
  for (const [key, value] of formData) {
    if (!value) return showValidation();
    user[key] = value;
  }
  const userSerch = listUsersCache.find((userCache) => {
    return (
      userCache.user === user.user &&
      userCache.password === user.password &&
      userCache.options === user.options
    );
  });

  if (!userSerch) {
    showValidationAccount(form);
  } else redirect(userSerch.rol);
});

const redirect = (rol) => {
  location.href = `src/pages/${rol}/index.html`;
}





