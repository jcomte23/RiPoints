export function modal(element) {
  element.innerHTML += `
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

              <div class="title__text">
                <h2 id="codeR">Codigo </h2><img src="/img/img_desktop/r-logo.svg" alt="">
              </div>
              
              <div class="information__coder">
                <div class="name">
                  <h4>Nombre:</h4>
                  <div class="center__text">
                    <h4 class="center__text">pepito maximilano</h4>
                  </div>
                </div>
                <div class="last__name">
                  <h4 for="lastname">Apellido:</h4>
                  <div class="center__text">
                    <h4 class="center__text">contreras ramirez</h4>
                  </div>
                </div>
                <div class="clan">
                  <h4 for="clan">Clan:</h4>
                  <div class="center__text">
                    <h4>Meta</h4>
                  </div>
                </div>
              </div>
              
              <div class="container__profile">
                <div class="profile__imgs">
                  <div class="coder__profile__table ">
                    <div class="coder__profile__clan__table "></div>
                  </div>
                </div>
                
                <div class="container__points">
                  <div class="total__points" id="totalPoints">12</div>
                  <span id="plusSign">+</span>
                  <input class="asignador__points" type="number" id="numberInput" value="0" >
                </div>
              </div>
              
              <div class="container__area">
                <textarea placeholder="observaciones" id="observations" name="observations"></textarea>
                        </div>
              
              <div class="btn_actions m-5 ">
                <button class="btn__delete btn btn-danger btn-lg col-md-5 m-1" id="save-modal">Cancelar</button>
                <button class="btn__succes btn btn-success btn-lg col-md-5 m-1" id="save-modal">Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;

  const assigment = document.querySelector(".asignador__points");
  const plusSign = document.getElementById("plusSign");

  let isFirstTime = true;

  assigment.addEventListener("input", (event) => {
    if (assigment.value.startsWith("-") && isFirstTime) {
      plusSign.textContent = "-";
      assigment.value = assigment.value.slice(1);
      isFirstTime = false;
    } else if (!assigment.value.startsWith("-")) {
      plusSign.textContent = "+";
      isFirstTime = true;
    }
  });
}
