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
                  <div class="total__points" id="totalPoints">0</div>
                  <span id="plusSign">+</span>
                  <div class="quantity">
                  <input class="quantity__input" type="text" value="0" readonly />
                  <div class="quantity__add">
                  <div class="less"><img class="img__arrows" src="../../../public/img/img_globales/asigmentPointsDown.png" alt=""></div>
                  <div class="add"><img class="img__arrows" src="../../../public/img/img_globales/asigmentPointUp.png" alt="" /></div>
                
                  </div>
                </div>
                </div>
              </div>
              
              <div class="container__area">
                <textarea placeholder="observaciones" id="observations" name="observations"></textarea>
                        </div>
              
              <div class="btn_actions m-5 ">
                <button class="btn__delete btn btn-danger btn-lg col-md-5 m-1" id="cancel-modal">Cancelar</button>
                <button class="btn__succes btn btn-success btn-lg col-md-5 m-1" id="save-modal">Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;


  const inputNum = document.querySelector(".quantity__input");
  const numadd = document.querySelector(".quantity__add .add");
  const numless = document.querySelector(".quantity__add .less");
  const plusSign = document.getElementById("plusSign");
  const btnSaveModal = document.getElementById("save-modal");
  const btnCancelModal = document.getElementById("cancel-modal");

  let realNum = 0;

  function updateInput() {
    inputNum.value = Math.abs(realNum);
    inputNum.classList.add("pop");
    setTimeout(() => {
      inputNum.classList.remove("pop");
    }, 200);
  }

  function plus(x) {
    realNum += x;
    if (realNum < -5) {
      realNum = -5;
    } else if (realNum > 5) {
      realNum = 5;
    }
    updateInput();
    updateSign();
  }

  function updateSign() {
    plusSign.textContent = realNum < 0 ? "-" : "+";
  }

  numadd.addEventListener("click", () => {
    plus(1);
  });

  numless.addEventListener("click", () => {
    plus(-1);
  });

  btnSaveModal.addEventListener("click", () => {
    // Perform any additional actions you need before updating the points
    // For example, you can save the observations from the textarea

    // Update the total points based on the realNum value
    const totalPointsElement = document.getElementById("totalPoints");
    const totalPoints = parseInt(totalPointsElement.textContent);
    totalPointsElement.textContent = totalPoints + realNum;

    // Update the input field next to the quantity control
    const quantityInput = document.querySelector(".quantity__input");
    quantityInput.value = parseInt(quantityInput.value) + realNum;

    // Reset realNum to 0 and update the input and sign
    realNum = 0;
    updateInput();
    updateSign();

    // Manually close the modal
    const closeButton = document.querySelector(".btn-close");
    closeButton.click();
  });

  const closed = document.querySelector("#cancel-modal");
  closed.addEventListener("click",(event)=>{
    const closeButton = document.querySelector(".btn-close");
    closeButton.click();
  })
}
