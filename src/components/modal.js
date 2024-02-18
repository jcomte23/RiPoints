import { setCoinsByUser } from "../js/usecases/setCoins";
import { smallAlertSuccess } from '../js/validations/alerts'
 
export async function modal(element) {
  let modalContainer = document.createElement("div");
  modalContainer.classList.add("modal", "fade");
  modalContainer.id = "exampleModal";
  modalContainer.tabIndex = "-1";
  modalContainer.setAttribute("aria-labelledby", "exampleModalLabel");
  modalContainer.setAttribute("aria-hidden", "true");

  modalContainer.innerHTML += `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  
            <div class="title__text">
              <h2 id="codeR" class="text-capitalize" data-i18n="code">Codigo </h2><img src="/img/img_desktop/r-logo.svg" alt="logo r">
            </div>
            
            <div class="information__coder">
              <div class="name">
                <h4><span data-i18n="name"></span>:</h4>
                <div class="center__text">
                <h4 class="center__text" id="coder__name"></h4>
              </div>
                </div>
                <div class="last__name">
                  <h4><span data-i18n="last_name"></span>:</h4>
                  <div class="center__text">
                    <h4 class="center__text" id="coder__lastname"></h4>
                  </div>
                </div>
                <div class="clan">
                  <h4 for="clan">Clan:</h4>
                  <div class="center__text">
                    <h4 id="coder__clanid"></h4>
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
                  <div class="total__points" id="totalPoints"></div>
                    <span id="plusSign">+</span>
                  <div class="quantity">
                  <input class="quantity__input" type="text" value="0" readonly />
                  <div class="quantity__add">
                  <div class="add"><img class="img__arrowsUp" src="../../../img/img_globales/asigmentPointsDown.webp" alt=""></div>
                  <div class="less"><img class="img__arrowsDown" src="../../../img/img_globales/asigmentPointUp.webp" alt="" /></div>
                  </div>
                </div>
                </div>
              </div>
              
              <div class="containerInputDate">
                <label class="text-capitalize"><span data-i18n="date"></span>:</label>
                <input class="inputDate" type="date" id="fecha" name="fecha">
              </div>

              <div class="container__area">
                <textarea  id="observations" name="observations"></textarea>
              </div>
              
              <div class="btn_actions m-5 ">
                <button class="btn__delete btn btn-danger text-capitalize btn-lg col-md-5 m-1" id="cancel-modal" data-i18n="cancel">Cancelar</button>
                <button class="btn__succes btn btn-success text-capitalize btn-lg col-md-5 m-1" id="save-modal" data-i18n="save">Guardar</button>
              </div>
          </div>
        </div>
      </div>
    `;

  element.appendChild(modalContainer);

  // Selecciona el input dentro del modal
  const quantityInput = document.querySelector(
    "#exampleModal .quantity__input"
  );
  const numadd = document.querySelector("#exampleModal .quantity__add .add");
  const numless = document.querySelector("#exampleModal .quantity__add .less");
  const plusSign = document.querySelector("#exampleModal #plusSign");
  const btnSaveModal = document.querySelector("#exampleModal #save-modal");

  let realNum = 0;

  function updateInput() {
    quantityInput.value = Math.abs(realNum);
    quantityInput.classList.add("pop");
    setTimeout(() => {
      quantityInput.classList.remove("pop");
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

  if (numadd !== null && numless !== null) {
    numadd.addEventListener("click", () => { plus(1); })
    numless.addEventListener("click", () => { plus(-1); });
  }
  //No entiendo la finalidad de esto, la dat ase debe cragar desde el json, no desde lo que le popngamos manual
  //! CORREGIR MODAL: ADIGNACION DE PUNTOS CODER!
  if (btnSaveModal != null) {
    btnSaveModal.addEventListener("click", () => {
      const totalPointsElement = document.querySelector("#exampleModal #totalPoints");
      const totalPoints = parseInt(totalPointsElement.textContent);
      totalPointsElement.textContent = totalPoints + realNum;
      const quantityInput = document.querySelector("#exampleModal .quantity__input");
      quantityInput.value = parseInt(quantityInput.value) + realNum;
      //Esto no es buena practica pero no encuentro otra manera de hacerlo sin alteral la logica que ya esta hecha
      setCoinsByUser(realNum);
      realNum = 0;
      document.getElementById("observations").value = "";
      updateInput();
      updateSign();

      const closeButton = document.querySelector("#exampleModal .btn-close");
      closeButton.click();
      smallAlertSuccess('Points added correctly',"Puntos agregados correctamente")
    });
  }

  const closed = document.querySelector("#exampleModal #cancel-modal");
  if (closed !== null) {
    closed.addEventListener("click", (event) => {
      const closeButton = document.querySelector("#exampleModal .btn-close");
      closeButton.click();
    });
  }
}
