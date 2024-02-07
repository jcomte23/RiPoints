import {get} from "../js/services/helpers";

let info = await get('users?rolId=3');
console.log(info);
export async function modal(element) {

  let modalContainer = document.createElement('div');
  modalContainer.classList.add('modal', 'fade');
  modalContainer.id = "exampleModal";
  modalContainer.tabIndex = "-1";
  modalContainer.setAttribute('aria-labelledby', 'exampleModalLabel');
  modalContainer.setAttribute('aria-hidden', 'true');

 
  modalContainer.innerHTML += `
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
            <h4 class="center__text" id="coder__name"></h4>
            </div>
              </div>
              <div class="last__name">
                <h4 for="lastname">Apellido:</h4>
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
                <div class="add"><img class="img__arrowsUp" src="../../../public/img/img_globales/asigmentPointsDown.png" alt=""></div>
                <div class="less"><img class="img__arrowsDown" src="../../../public/img/img_globales/asigmentPointUp.png" alt="" /></div>
              
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
    `;

    element.appendChild(modalContainer);

  // const modalElement = document.querySelector(`#exampleModal-${coder.id}`);
  
  // // Selecciona el input dentro del modal
  // const quantityInput = modalElement.querySelector(".quantity__input");
  // const numadd = modalElement.querySelector(".quantity__add .add");
  // const numless = modalElement.querySelector(".quantity__add .less");
  // //const plusSign = modalElement.getElementById("plusSign");
  // const btnSaveModal = modalElement.getElementById("save-modal");
  // //const btnCancelModal = modalElement.getElementById("cancel-modal");
  
  // let realNum = 0;
  
  // function updateInput() {
  //   quantityInput.value = Math.abs(realNum);
  //   quantityInput.classList.add("pop");
  //   setTimeout(() => {
  //     quantityInput.classList.remove("pop");
  //   }, 200);
  // }
  
  
  
  // numadd.addEventListener("click", () => {
  //   plus(1);
  // });
  
  // numless.addEventListener("click", () => {
  //   plus(-1);
  // });
    
  //   btnSaveModal.addEventListener("click", () => {
  //     const totalPointsElement = document.getElementById("totalPoints");
  //     const totalPoints = parseInt(totalPointsElement.textContent);
  //     totalPointsElement.textContent = totalPoints + realNum;
  
  //     const quantityInput = document.querySelector(".quantity__input");
  //     quantityInput.value = parseInt(quantityInput.value) + realNum;
  
  //     realNum = 0;
  //     updateInput();
  //     updateSign();
  
  //     const closeButton = document.querySelector(".btn-close");
  //     closeButton.click();
  //   });
    
  //   const closed = document.querySelector("#cancel-modal");
  //   closed.addEventListener("click", (event) => {
  //     const closeButton = document.querySelector(".btn-close");
  //     closeButton.click();
  //   });
    
    // Obtención de información de la API y mostrarla en pantalla


}
