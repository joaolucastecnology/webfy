// Logica Calculo Leve x Pague y

function calcularPromocao() {

    let preco_partida = document.getElementById('preco_partida').value;

    let leve_x = document.getElementById('leve_x').value;

    let calc_leve = (preco_partida / leve_x);

    let pague_y = document.getElementById('pague_y').value;

    let calc_pague = (calc_leve * pague_y);

    preco_final = document.getElementById('preco_prom').value = calc_pague.toFixed(2)

    // validacoes de campos
    if (preco_partida === '' | leve_x === '' | pague_y === '' | preco_final === '') {
        alert('Para Efetuar o calculo, por favor preencha Todos os campos.')
    } else if (pague_y > leve_x) {
        alert('O Campo Pague, Deve ser menor que o Campo Leve!')
        document.getElementById('preco_prom').value = ''
        window.location.reload()
    }
}

// Logica calculo de porcentagem na segunda unidade

function calcularPromocaoPercent() {
    desconto = 101

    let preco_partida = document.getElementById('preco_partida').value
    console.log(preco_partida)

    let aplica_percent = document.getElementById('porcentagem').value

    let calc_desc = preco_partida - (preco_partida * aplica_percent / 100)
    document.getElementById('und-desconto').value = parseFloat(calc_desc.toFixed(2))

    
    let total_prom = (parseFloat(calc_desc) + parseFloat(preco_partida))
    let preco_un = (total_prom / 2)
    document.getElementById('preco_prom').value = parseFloat(preco_un).toFixed(2)

    let duas_und = (parseFloat(preco_partida) + parseFloat(calc_desc))
    document.getElementById('duas_und').value = parseFloat(duas_und).toFixed(2)

    // validacoes de campos
    if (preco_partida === '' | aplica_percent === '') {
        alert('Para efetuar o calculo por favor preencha todos os campos')
        window.location.reload()
    } else if (aplica_percent >= desconto) {
        alert('Valor Maximo para Desconto é de 100%')
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

// // Pegando data e Hora do Sistema Client-Side

// let dataHora = new Date

// let dataAtual = `${dataHora.getDate()}/${(dataHora.getMonth() +1)}/${dataHora.getFullYear()}`
// let horaAtual = `${dataHora.getHours()}:${dataHora.getMinutes()}`

// document.getElementById('data-hora').innerHTML = `${dataAtual} ${horaAtual}`


