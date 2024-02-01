import { pieChart, lineChart } from "./pieChart";
import '../scss/dashboard.scss'

export const showDashboard = (element) => {
  element.innerHTML = ` 
    <div class='dashboard' >
      <div class='dashboard__pie' >
          <div class='pieChart' ></div>
      </div>

      <div class='dashboard__line' >
          
      </div>
    </div>
    `;
  let dataPie = [50,8,5,6]
  pieChart(document.querySelector('.pieChart'), dataPie);
  lineChart(document.querySelector('.dashboard__line'), dataPie);

}