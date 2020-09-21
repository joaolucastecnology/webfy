function texto1() {
    let texto1 = document.getElementById('texto1').value
    console.log(texto1)

    let recebeTexto1 = document.getElementById('recebe-texto1').innerHTML = texto1
}

function texto2() {
    let texto2 = document.getElementById('texto2').value
    console.log(texto2)

    let recebeTexto2 = document.getElementById('recebe-texto2').innerHTML = texto2
}

function medida() {
    let medida = document.getElementById('medida').value
    console.log(medida)

    let medidaProduto = document.getElementById('medida-produto').innerHTML = medida
}

function precoProduto() {
    let precoProduto = document.getElementById('preco-produto').value
    console.log(precoProduto)

    let PrecoProduto1 = document.getElementById('recebe-preco-value').innerHTML = precoProduto
}