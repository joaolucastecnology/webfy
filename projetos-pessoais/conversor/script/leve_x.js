// Logica Calculo Leve x Pague y

function calcularPromocao() {

    let preco_partida = document.getElementById('preco_partida').value;

    let leve_x = document.getElementById('leve_x').value;

    let calc_leve = (preco_partida / leve_x);

    let pague_y = document.getElementById('pague_y').value;

    let calc_pague = (calc_leve * pague_y);

    preco_final = document.getElementById('preco_prom').value = calc_pague.toFixed(2)

    if (preco_partida === '' | leve_x === '' | pague_y === '' | preco_final === '') {
        alert('Para Efetuar o calculo, por favor preencha Todos os campos.')
    } else if (pague_y > leve_x) {
        alert('O Campo Pague, Deve ser menor que o Campo Leve!')
        document.getElementById('preco_prom').value = ''
        window.location.reload()
    }

}
    
// Limpar Campos Aplicando reload

function limparCampos() {
    window.location.reload();
}


// Blue Mode 

function lightMode() {
    let light = document.body;
    light.classList.toggle("light-mode");
}

// Pegando data e Hora do Sistema Client-Side

let dataHora = new Date

let dataAtual = `${dataHora.getDate()}/${(dataHora.getMonth() +1)}/${dataHora.getFullYear()}`
let horaAtual = `${dataHora.getHours()}:${dataHora.getMinutes()}`

document.getElementById('data-hora').innerHTML = `${dataAtual} ${horaAtual}`
