import Chart from "chart.js/auto";

let language;
if (localStorage.getItem("lang")) {
    language=localStorage.getItem("lang")
}else{
    language="en"
}

function readLanguageFile(){
    return fetch(`/public/locales/${language}/translation.json`);
}

export const showDashboard = (element) => {
    element.innerHTML = ` <div>
    <canvas id="myChart"></canvas>
  </div>
  
    `;
    
    const ctx = document.getElementById('myChart');
    
    readLanguageFile().then(data => data.json()).then(data => {
        console.log("DATOSSS", data)
        new Chart(ctx, {
            type: 'pie',
            data: {
              labels: [data.P, data.R, data.FJ, data.FI],
              datasets: [{
                backgroundColor:[
                    '#5acca4',
                    '#6b5cff',
                    '#e6ca52',
                    '#fe654f'
                ],
                label: '# of Votes',
                data: [19, 5, 3, 2],
                borderWidth: 1
              }]
            },
          });
    })
}

