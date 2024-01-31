export const showValidation = () => {
  const forms = document.querySelectorAll(".needs-validation");
  forms.forEach((input) => input.classList.add("was-validated"));
};

export const showValidationAccount = (form) => {
  const containerValidation = form.querySelector("#validationAccount");
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => input.classList.add("danger"));
  containerValidation.innerHTML = `
  <div class="alert alert-danger" role="alert">
    Usuario o contraseña incorrectos.
  </div>
  `;
  
}