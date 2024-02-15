import { pieChart, lineChart } from "./pieChart";
import { updateContent } from "../js/translator";
import { get } from "../js/services/helpers";
import { getAllClan } from "../js/services/getClan";
import "../scss/dashboard.scss";
import { topCodersChars } from "./topCodersChart";

export const showDashboard = async (element) => {
    element.innerHTML = ` 
    <div class='dashboard w-100 h-100' >

    <div class="d-flex  dashboard__line_clans  justify-content-around ">
    <div class='dashboard__pie quarter'></div>

    <div class='dashboard__ranking__coders  quarter'></div>
    </div>
    
    
  
    <div class='dashboard__line'></div>
          
    </div>
  `;

    let listClan = await getAllClan();
    let labelClan = listClan.map((clan) => {
        return clan.name;
    });
    let pointClan = listClan.map((clan) => {
        return clan.points;
    });
    pieChart(document.querySelector(".dashboard__pie"), labelClan, pointClan);

    const topCodersChart = document.querySelector(
        ".dashboard__ranking__coders"
    );
    // THe compexety of the world

    let completeList = await get(
        "users?rolId=3&_embed=clan&_embed=scoreCoins&_embed=winCoins"
    );
    // http://localhost:3000/winCoins?clanId=gates&date=2024-02-02
    lineChart(document.querySelector(".dashboard__line"), "line1");

    topCodersChars(topCodersChart, "top coders", "codersRanking");

    updateContent();
};
