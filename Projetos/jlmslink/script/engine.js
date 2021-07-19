function msgDia() {
    var msg = document.getElementById('msg');
    var data = new Date();
    var msgDia = data.getHours();
    var horas = document.getElementById('hora');

    setInterval(function () {
        horas.innerHTML = ((new Date).toLocaleString().substr(11, 8));  
    }, 1000);
    

    if (msgDia >= 0 && msgDia <= 12) {
            msg.innerHTML += `Olá, Bom Dia `;
    }
     else if (msgDia >=12 && msgDia <= 18) {
        msg.innerHTML += ` Olá, Boa Tarde `;
    }
     else {
        msg.innerHTML += ` Olá, Boa Noite `;
    }
}

function construct() {
    alert('Em breve disponivel')
}