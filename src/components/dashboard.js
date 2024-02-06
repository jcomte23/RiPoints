import { pieChart, lineChart } from "./pieChart";
import { updateContent } from "../js/translator";
import { getAllClan } from '../js/services/getClan'
import '../scss/dashboard.scss'

export const showDashboard = async (element) => {
  element.innerHTML = ` 
    <div class='dashboard' >
      <div class='dashboard__pie' >
          <div class='pieChart' ></div>
      </div>

      <div class='dashboard__line' >
          
      </div>
    </div>
    `;

    let list = (await getAllClan()).map((clan) =>  {return clan.name})
  
  pieChart(document.querySelector('.pieChart'), list);
  lineChart(document.querySelector('.dashboard__line'), list);
  
  updateContent()
}