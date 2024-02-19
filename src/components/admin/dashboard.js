import "../../scss/dashboard.scss";
import { pieChart, lineChart } from "./pieChart";
import { updateContent } from "../../js/translator";
import { getDataFromDifferentEndpoints } from "../../js/services/helpers";
import { getAllClan } from "../../js/services/getClan";
import { topCodersChars } from "./topCodersChart";

export const showDashboard = async (element) => {
    element.innerHTML = ` 
    <div class='dashboard' >
        <div class="dashboard__row" >
            <div class='dashboard__pie'></div>
            <div class='dashboard__ranking__coders'></div>
        </div>
        <div class='dashboard__line' ></div>
    </div>
    `

    //Grafica de puntaje de clanes
    let listClan = await getAllClan();
    let labelClan = listClan.map((clan) => {
        return clan.name
    })
    let pointClan = listClan.map((clan) => {
        return clan.points
    })
    pieChart(document.querySelector(".dashboard__pie"), labelClan, pointClan)


    //Grafica de Top Coders
    const topCodersChart = document.querySelector(".dashboard__ranking__coders")
    topCodersChars(topCodersChart, "top coders", "codersRanking")
    

    // let completeList = await getDataFromDifferentEndpoints(
    //     "users?rolId=3&_embed=clan&_embed=scoreCoins&_embed=winCoins"
    // );
    // http://localhost:3000/winCoins?clanId=gates&date=2024-02-02
    lineChart(document.querySelector(".dashboard__line"), "line1")

    

    updateContent()
}
