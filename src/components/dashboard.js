import { pieChart, lineChart } from "./pieChart";
import { updateContent } from "../js/translator";
import { get } from '../js/services/helpers';
import { getAllClan } from '../js/services/getClan';
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

// THe compexety of the world

  let completeList = await get('users?rolId=3&_embed=clan&_embed=scoreCoins&_embed=winCoins');
  // http://localhost:3000/winCoins?clanId=gates&date=2024-02-02
  console.log(completeList)
  lineChart(document.querySelector('.dashboard__line'), labelClan);
  
  updateContent()
}