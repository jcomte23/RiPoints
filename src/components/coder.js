import { changeLanguageOnClick, updateContent } from "../js/translator";
import { historyWinCoinsByUserId } from "../js/usecases/winCoinsHistory";

export const renderCoder = (element) => {
  const user = JSON.parse(localStorage.getItem("userStorage"));
  element.innerHTML = `
  <div class="coder">
    <h3 class="coder__header" data-i18n="yourscore"></h3>
    <div class="coder__profile profile__mint">
      <div class="coder__profile__clanShiled"></div>
    </div>
    <h4 class="coder__name"></h4>
    <h5 class="coder__points--title" data-i18n="totalpoints">Total Points</h5>
    <div class="coder__points">
      <div class="coder__points__coin"></div>
      <span id="counter">770</span>
    </div>
  </div>

  <div class="container-graphics">
    <div class="container-graphic">
      <span data-i18n="weeklychart">Grafica Semanal</span>
      <canvas id="graphic__week" class="graphic"></canvas>
    </div>
  <div class="container-history">
    <span data-i18n="history"></span>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Puntos</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Profesor</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody id="tbody_historial">
        </tbody>
      </table>
    </div>
  </div>
  `

  document.querySelectorAll('.coder__name').forEach((el) => {
    el.textContent = user.name + ' ' + user.lastName 
  })
  updateContent();
  historyCoderRender(user);
}
changeLanguageOnClick();

const historyCoderRender = async (user) => {
  const historyTbody = document.getElementById("tbody_historial")
  const history = await historyWinCoinsByUserId(user.id);
  console.log(history)
  history.forEach((winCoin) => {
    const color = winCoin.coins > 0 ? "safe" : "danger"
    historyTbody.innerHTML += `
    <tr>
      <th scope="row" class="table-${color}">${winCoin.coins}</th>
      <td class="table-${color}">${winCoin.comment}</td>
      <td class="table-${color}">${user.name}</td>
      <td class="table-${color}">${winCoin.date}</td>
    </tr>
  `
  })
}
