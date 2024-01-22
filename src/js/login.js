import "../scss/login.scss";
import * as bootstrap from "bootstrap";
import { showLogin } from "../components/login";

const sectionForm = document.getElementById("sectionForm");
showLogin(sectionForm);

//Esto es la data, la cual deberi ir un archivo aparte. Preguntar si vamos a hacer una carpeta temporal con la data que se maneje en el local storage.
const testUsers = () => {
  const user = [{ user: "Sebastian", password: "123", options: "coder" }];
  localStorage.setItem("usersCache", JSON.stringify(user));
};
testUsers();
const listUsersCache = JSON.parse(localStorage.getItem("usersCache"));

//Preguntar si vamos hacer los casos de usos en otra carpeta, inicialmente hare todo aqui
const btnSubmit = document.getElementById("btn-login");
//Cuando lo hago con un submit no me funciona, ya que pone la pagina en blanco, pero con el click si. Creo que de momento asi esta bien pues como tal no estamos haciendo un submit sino que estamos comparados informacion con el btn
btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const form = document.querySelector("form");
  const formData = new FormData(form);

  const user = {};
  for (const [key, value] of formData) {
    user[key] = value;
  }
  validform();
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

const validform = () => {
  const inputs = document.querySelectorAll("input");
  let acumCheck = 0;

  inputs.forEach((input) => {
    if (input.type === "checkbox" && !input.checked) {
      acumCheck++;
    }

    if (input.value.trim() === "") {
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }
  });

  if (acumCheck == 3) {
    inputs.forEach((input) => {
      if (input.type === "checkbox") {
        //agregar esta clase en los estilos y hacerle marco rojo
        input.classList.add("is-invalid-checkbox");
      }
    });
  }
};

