import * as bootstrap from "bootstrap";
import Chart from "chart.js/auto";
import { renderCoder } from "../../components/coder";
import { getLanguague } from "../../js/translator";
import { getWeekCoins } from "../services/getWinCoins";

const btnLang = document.getElementById("btn-lang");
const span_es = document.getElementById("span_es");
const span_en = document.getElementById("span_en");

let lang = getLanguague();
if (lang === "es") {
    span_es.classList.add("d-none");
    span_en.classList.remove("d-none");
} else {
    span_es.classList.remove("d-none");
    span_en.classList.add("d-none");
}

btnLang.addEventListener("click", () => {
    let lang = getLanguague();
    if (lang === "es") {
        span_es.classList.add("d-none");
        span_en.classList.remove("d-none");
    } else {
        span_es.classList.remove("d-none");
        span_en.classList.add("d-none");
    }
});

Chart.defaults.color = "#fff";
const floatingBackground = document.querySelector(".floatingBackground");
renderCoder(floatingBackground);

const renderweekChart = async () => {
    // const weekCoins = getWeekCoins(user.id,week)
    const datos = {
        labels: ["Lunes", "Martes", "Miercoles", "Jueves", "viernes"],
        datasets: [
            {
                label: "Points",
                backgroundColor: "#fff",
                borderColor: "#000",
                borderWidth: 1,
                borderRadius: 5,
                data: [5, 3, 8, 6, 0],
            },
        ],
    };

    // Opciones del gráfico
    const opciones = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    const ctx = document.querySelector("#graphic__week");
    // Crea el gráfico de barras
    const weekchart = new Chart(ctx, {
        type: "bar",
        data: datos,
        options: opciones,
    });

    return weekchart;
};
renderweekChart();
