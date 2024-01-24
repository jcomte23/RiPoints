import * as bootstrap from "bootstrap";
import "../scss/coder.scss";
import Chart from 'chart.js/auto';


// Obtén el contexto del canvas
var ctx = document.getElementById('graphic').getContext('2d');

// Datos para el gráfico
var datos = {
    labels: ['Lunes','Martes', 'Miercoles','Jueves',"viernes"],
    datasets: [{
    label: 'Points',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    data: [50, 30, 80, 60,20],
}]
};

// Opciones del gráfico
var opciones = {
scales: {
    y: {
    beginAtZero: true
    }
}
};

// Crea el gráfico de barras
var miGrafico = new Chart(ctx, {
type: 'bar',
data: datos,
options: opciones
});


