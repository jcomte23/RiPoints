import { pieChart, lineChart } from "./pieChart";
import '../scss/dashboard.scss'
import { updateContent } from "../js/translator";

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

    let list = ['Clan Gosling','Clan Dell','Clan Ritchie','Clan Linus','Clan Lorevace','Clan Vinour']

  
  pieChart(document.querySelector('.pieChart'), list);
  lineChart(document.querySelector('.dashboard__line'), list);
  
  updateContent()
}