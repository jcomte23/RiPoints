import { changeLanguageOnClick,updateContent } from "../js/translator"; 
export const renderCoder = (element) => {
  const user = JSON.parse(localStorage.getItem("userStorage"));
  element.innerHTML = `
  <div class="coder">
    <h3 class="coder__header" data-i18n="yourscore" ></h3>
    <div class="coder__profile profile__mint">
      <div class="coder__profile__clanShiled"></div>
    </div>
    <h4 class="coder__name">${user.name} ${user.lastName}</h4>
    <h5 class="coder__points--title" data-i18n="totalpoints" >Total Points</h5>
    <div class="coder__points">
      <div class="coder__points__coin"></div>
      <span id="counter">580</span>
    </div>
  </div>

  <!-- FLOATING BACKGROUND -->

  <div class="container-graphics">
    
    <div class="container-graphic">
      <span data-i18n="weeklychart"  >Grafica Semanal</span>
      <canvas id="graphic__week" class="graphic"></canvas>
    </div>

  <div class="container-history">
    <span data-i18n="history" ></span>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Puntos</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Profesor</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="table-safe">5</th>
            <td class="table-safe">Se porto bien en clase</td>
            <td class="table-safe">Mark</td>
            <td class="table-safe">31/02/2024</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >Buena participacion</td>
            <td>Jacob</td>
            <td>31/02/2024</td>
          </tr>
          <tr>
            <th scope="row" class="table-danger">-4</th>
            <td class="table-danger">Mal comportamiento</td>
            <td class="table-danger">Joseph</td>
            <td class="table-danger">31/02/2024</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td >Buen aporte</td>
            <td>Salomon</td>
            <td>31/02/2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `;
  updateContent()
};
changeLanguageOnClick();
