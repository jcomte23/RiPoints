export const renderCoder = (element) => {
  const user = JSON.parse(localStorage.getItem("userStorage"));
  element.innerHTML = `
  <div class="coder">
  <h3 class="coder__header">Your score</h3>
  <div class="coder__profile profile__danger">
    <div class="coder__profile__clanShiled profile__danger"></div>
  </div>
  <h4 class="coder__name">${user.name} ${user.lastName}</h4>
  <h5 class="coder__points--title">Total Points</h5>
  <div class="coder__points">
    <div class="coder__points__coin">

    </div>

    <span id="counter">580</span>
  </div>
</div>
<!-- Floating background -->
<div class="container-graphics">
  
  <div class="container-graphic">
    <span>Grafica Semanal</span>
    <canvas id="graphic__week" class="graphic"></canvas>
  </div>

  <div class="container-graphic">
    <span>Grafica Mensual</span>
    <canvas id="graphic__moth" class="graphic"></canvas>
  </div>
</div>
  `;
};
