import Chart from "chart.js/auto";
import { toCapitalize } from "../../js/services/helpers";
import { getLanguague } from "../../js/translator";

function readLanguageFile() {
    return fetch(`/locales/${getLanguague()}/translation.json`);
}

Chart.defaults.color = "#000000";

export const lineChart = async (element, id) => {
    element.innerHTML = `<canvas height="80" id="${id}"></canvas>`;

    let dictionary = await (await readLanguageFile()).json();

    let dataSet = undefined;
    if (id == "line1") {
        dataSet = [
            {
                label: "Meta",
                data: [40, 45, 43, 45, 50],
                borderColor: "#6b5cff",
                backgroundColor: "#6b5cff",
                fill: false,
            },
            {
                label: "Dell",
                data: [38, 41, 45, 35, 35],
                borderColor: "#181e4b",
                backgroundColor: "#181e4b",
                fill: false,
            },
            {
                label: "Linus",
                data: [36, 40, 40, 35, 40],
                borderColor: "#5acca4",
                backgroundColor: "#5acca4",
                fill: false,
            },
            {
                label: "Lovelace",
                data: [36, 40, 41, 40, 41],
                borderColor: "#e6ca52",
                backgroundColor: "#e6ca52",
                fill: false,
            },
            {
                label: "Van Rossum",
                data: [35, 35, 33, 40, 37],
                borderColor: "#fe654f",
                backgroundColor: "#fe654f",
                fill: false,
            },
        ];
    } else {
        // "P": "Attendance",
        // "R": "Late",
        // "FJ": "Excused Absence",
        // "FI": "Unexcused Absence",
        dataSet = [
            {
                label: dictionary.P,
                data: [32, 35, 32, 40, 38],
                borderColor: "#181e4b",
                backgroundColor: "#181e4b",
                fill: false,
            },
            {
                label: dictionary.R,
                data: [2, 5, 1, 4, 5],
                borderColor: "#5acca4",
                backgroundColor: "#5acca4",
                fill: false,
            },
            {
                label: dictionary.FJ,
                data: [3, 3, 2, 4, 4],
                borderColor: "#e6ca52",
                backgroundColor: "#e6ca52",
                fill: false,
            },
            {
                label: dictionary.FI,
                data: [2, 0, 3, 2, 4],
                borderColor: "#fe654f",
                backgroundColor: "#fe654f",
                fill: false,
            },
        ];
    }

    const data = {
        labels: dictionary.days.map((day) => {
            return toCapitalize(day);
        }),
        datasets: dataSet,
    };

    const config = {
        type: "line",
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: (ctx) => dictionary.weeklychart,
                },
                tooltip: {
                    mode: "index",
                },
            },
            interaction: {
                mode: "nearest",
                axis: "x",
                intersect: false,
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "",
                    },
                    grid: {
                        display: false,
                    },
                },
                y: {
                    stacked: false,
                    title: {
                        display: true,
                        text:
                            id == "line1"
                                ? dictionary.points
                                : dictionary.developers,
                    },
                    grid: {
                        display: false,
                    },
                },
            },
        },
    };

    const ctx = document.getElementById(`${id}`);

    new Chart(ctx, config);
};

export const pieChart = async (element, labelData, listData) => {
    element.innerHTML = ` <canvas id="myChart"></canvas>`;

    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
        type: "pie",
        responsive: true,
        data: {
            labels: labelData.map((clan) => {
                return toCapitalize(clan);
            }),
            datasets: [
                {
                    backgroundColor: [
                        "#6b5cff",
                        "#181e4b",
                        "#5acca4",
                        "#e6ca52",
                        "#fe654f",
                    ],
                    label: "Rankig: ",
                    data: listData.map((data) => {
                        return data;
                    }),
                    borderWidth: 1,
                    color: "#000",
                },
            ],
        },
    });
};
