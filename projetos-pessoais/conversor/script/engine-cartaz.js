function texto1() {
    let texto1 = document.getElementById('texto1').value

    let recebeTexto1 = document.getElementById('recebe-texto1').innerHTML = texto1.toUpperCase()
}

function texto2() {
    let texto2 = document.getElementById('texto2').value

    let recebeTexto2 = document.getElementById('recebe-texto2').innerHTML = texto2.toUpperCase()
}

function medida() {
    let medida = document.getElementById('medida').value

    let medidaProduto = document.getElementById('medida-produto').innerHTML = medida
}


function precoProdutoDe(result) {
    let precoProdutoDe2 = document.getElementById('preco-produto-de').value
    result = document.getElementById('recebe-preco-value-de').innerHTML = `${precoProdutoDe2}`
}



function precoProdutoPor() {
    let precoProduto = document.getElementById('preco-produto-por').value
    let PrecoProduto1 = document.getElementById('recebe-preco-value').innerHTML = `${precoProduto}`
}

function data1() {
    const str = 'Válido Até : '
    const sep = ' De Hoje a '
    campoDataP = document.getElementById('data1').value
    console.log(campoDataP)

    document.getElementById('campoValidade').innerHTML = `${str} ${sep} ${campoDataP}`
}

function gerarCartaz() {
    alert('Seção em implementação, por favor aguarde!, disponivel em breve')
}


