import { Chart } from "chart.js";
import { getTopCoders } from "../js/services/getTopCoders";

export const topCodersChars = async (container, label, id) => {
    const coders = await getTopCoders();
    container.innerHTML = `
    <canvas height="100" raking_coders_chart id="${id}"></canvas>
    <div class="d-flex gap-5 ">
        <div class="d-flex flex-column ">
            <span>${coders.top1.name} ${coders.top1.lastName}</span>
            <span> Clan: ${coders.top1.clanId.replace("_", " ")}</span>
        </div>

        <div class="d-flex flex-column ">
            <span>${coders.top2.name} ${coders.top2.lastName}</span>
            <span> Clan: ${coders.top2.clanId.replace("_", " ")}</span>
        </div>

        <div class="d-flex flex-column ">
            <span>${coders.top1.name} ${coders.top3.lastName}</span>
            <span> Clan: ${coders.top3.clanId.replace("_", " ")}</span>
        </div>
    </div>
    `;
    const chart = document.getElementById(`${id}`);

    new Chart(chart, {
        type: "bar",
        data: {
            labels: [``, ``, ``],

            datasets: [
                {
                    label: label,
                    data: [
                        coders.top1.amount,
                        coders.top2.amount,
                        coders.top3.amount,
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 24,
                        },
                    },
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
};
