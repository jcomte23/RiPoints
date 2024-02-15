import { getUserById } from "../js/services/getUser";
import { setImageMultiple } from "../js/services/helpers";
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
      <span id="counter"></span>
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
            <th class="text-capitalize" scope="col" data-i18n="points">Puntos</th>
            <th class="text-capitalize" scope="col" data-i18n="description">Descripcion</th>
            <th class="text-capitalize" scope="col" data-i18n="teacher">Profesor</th>
            <th class="text-capitalize" scope="col" data-i18n="date">Fecha</th>
          </tr>
        </thead>
        <tbody id="tbody_historial">
        </tbody>
      </table>
    </div>
  </div>
  `;

  document.querySelectorAll('.coder__name').forEach((el) => {
    el.textContent = user.name + ' ' + user.lastName 
  })
  setImageMultiple('.coder__profile__clanShiled',[user.clanId,user.clanId])
  document.querySelectorAll(".coder__name").forEach((el) => {
    el.textContent = user.name + " " + user.lastName;
  });
  updateContent();
  historyCoderRender(user);
  amountByUserId(user.id)
};
changeLanguageOnClick();

const historyCoderRender = async (user) => {
  const historyTbody = document.getElementById("tbody_historial");
  const history = await historyWinCoinsByUserId(user.id);
  history.forEach((winCoin) => {
    const color = winCoin.coins > 0 ? "safe" : "danger";
    historyTbody.innerHTML += `
    <tr>
      <th scope="row" class="table-${color}">${winCoin.coins}</th>
      <td class="table-${color}">${winCoin.comment}</td>
      <td class="table-${color}">${user.name}</td>
      <td class="table-${color}">${winCoin.date}</td>
    </tr>
  `;
  });
};

const amountByUserId = async (userId) => {
  const user = await getUserById(userId);
  const counter = document.getElementById("counter");
  counter.innerHTML = user[0].amount;
};
