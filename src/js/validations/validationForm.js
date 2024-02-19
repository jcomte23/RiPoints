export const showValidation = () => {
  const forms = document.querySelectorAll(".needs-validation")
  forms.forEach((input) => input.classList.add("was-validated"))
}
