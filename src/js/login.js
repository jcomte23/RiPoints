import "../scss/login.scss";
import * as bootstrap from "bootstrap";
import { showLogin } from "../components/login";
import { getAllUsers } from "./data";
import { showValidation } from "./validations/validationForm";

const sectionForm = document.getElementById("sectionForm");
showLogin(sectionForm);

getAllUsers();
const listUsersCache = JSON.parse(localStorage.getItem("usersCache"));

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
    alert("Usuario o contraseña incorrecta");
  } else alert("Todo correcto");
});



