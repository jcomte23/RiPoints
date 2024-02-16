import "../scss/login.scss"
import { smallAlertError } from "./alerts"
import { showLogin } from "../components/login"
import { getUser } from "./services/getUser"
import { showValidation } from "./validations/validationForm"

const sectionForm = document.getElementById("sectionForm")
showLogin(sectionForm)


const form = document.querySelector("form")
const userName = document.getElementById("user")
const password = document.getElementById("password")


form.addEventListener("submit", async (event) => {
  event.preventDefault()
  const formData = new FormData(form)
  const user = {}
  for (const [key, value] of formData) {
    if (!value) return showValidation()
    user[key] = value
  }

  let userSearch = await getUser(user)

  if (userSearch === null) {
    form.classList.remove("was-validated")
    userName.classList.add("is-invalid")
    smallAlertError("user not found", "usuario no encontrado")
  } else if (userSearch === undefined) {
    form.classList.remove("was-validated")
    userName.classList.remove("is-invalid")
    userName.classList.add("is-valid")
    password.classList.add("is-invalid")
    smallAlertError("incorrect password", "contraseña incorrecta")
  } else {
    showValidation()
    localStorage.setItem("userStorage", JSON.stringify(userSearch))
    localStorage.setItem("isAutorizated", "true")
    switch (userSearch.rol.name) {
      case "admin":
        redirect(userSearch.rol.name)
        break;
      case "trainer":
        redirect(userSearch.rol.name)
        break;
      case "coder":
        redirect(userSearch.rol.name)
        break;
      default:
        location.href = `/`
        break;
    }
  }
})


const redirect = (rol) => {
  location.href = `src/pages/${rol}/index.html`
}
