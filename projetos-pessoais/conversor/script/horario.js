// Pegando data e Hora do Sistema Client-Side

let dataHora = new Date

let dataAtual = `${dataHora.getDate()} / ${(dataHora.getMonth() +1)} / ${dataHora.getFullYear()}`
let horaAtual = `${dataHora.getHours()}:${dataHora.getMinutes()}`

let clock = document.getElementById('horario');
    
setInterval(function () {
    clock.innerHTML = ((new Date).toLocaleString().substr(11, 8)) + '<br/>' + dataAtual;  
}, 1000);
