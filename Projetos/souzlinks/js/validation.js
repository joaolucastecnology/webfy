function msgDia() {
    var msg = document.getElementById('msg');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes()
    var hora = `${data.getHours()} : ${data.getMinutes()}`
    var horas = document.getElementById('hora')

    setInterval(function () {
        horas.innerHTML = ((new Date).toLocaleString().substr(11, 8));  
    }, 1000);
    msg.style.textAlign = `center`
    

    if (hora >= 0 && hora <= 12) {
            msg.innerHTML += ` Olá, Bom Dia `
    }
     else if (hora >=12 && hora <= 18) {
        msg.innerHTML += ` Olá, Boa Tarde `
    }
     else {
        msg.innerHTML += ` Olá, Boa Noite `
    }
}