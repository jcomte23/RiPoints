export const filter = () => {
  const form = document.querySelector(".listCoders");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  let myInput = document.getElementById("searchKeywords");
  let myTableRows = document.querySelectorAll("#myTable tbody tr");
  myInput.addEventListener("keyup", function () {
    let value = myInput.value.toLowerCase();
    myTableRows.forEach(function (row) {
      let text = row.textContent.toLowerCase();
      // Determine if 'value' is found inside of the row's text using => index0f(string).
      let shouldShow = text.indexOf(value) > -1;
      row.style.display = shouldShow ? "" : "none";
    });
  });
};
