import Chart from "chart.js/auto";
import { toCapitalize } from "../js/services/helpers";
import { getLanguague } from './../js/translator';

function readLanguageFile(){
    return fetch(`/locales/${getLanguague()}/translation.json`);
}



export const lineChart = async (element, labelData, listData) => {
  element.innerHTML = `<canvas id="myLineChart"></canvas>`;

  let dictionary = await (await readLanguageFile()).json();

  const data = {
    labels: dictionary.days.map((day) => {
      return toCapitalize(day);
    }),
    datasets: [
      {
        label: 'Dataset 1',
        data: [40,40,30,20],
        borderColor: "#ffffff",
        backgroundColor: "#ff0f0f",
        fill: false
      }
    ]
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: (ctx) => dictionary.Pp,
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
          stacked: true,
          title: {
            display: true,
            text: dictionary.Pp,
          },
          grid: {
            display: false,
          },
        },
      },
    },
  };

  const ctx = document.getElementById("myLineChart");
  Chart.defaults.color = "#FFFFFF";

  new Chart(ctx, config);
  
};



export const pieChart = async (element, labelData, listData) => {
    element.innerHTML = ` <canvas id="myChart"></canvas>`;
    
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'pie',
    responsive: true,
    data: {
              labels: labelData.map((clan)=>{return toCapitalize(clan)}),
              datasets: [{
                backgroundColor:[
                   "#6b5cff",
                   "#181e4b",
                   "#5acca4",
                   "#e6ca52",
                   "#fe654f",
                   "#ffffff",
                   "#ffd700",
                   "#c0c0c0",
                   "#cd7f32",
                   "#ededed",
                   "#666666",
                   "#27272a",
                   "#eaa2fc"
                ],
                label: 'Rankig: ',
                data: listData.map((data)=>{return data}),
                borderWidth: 1
              }]
            },
  });
}