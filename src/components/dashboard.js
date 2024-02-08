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

  let listClan = await getAllClan()
  let labelClan = listClan.map((clan) =>  {return clan.name})
  let pointClan = listClan.map((clan) =>  {return clan.points})
  pieChart(document.querySelector('.pieChart'), labelClan,pointClan);
  lineChart(document.querySelector('.dashboard__line'), labelClan);
  
  updateContent()
}