function convertTextMin() {
    

    let campoMin = document.getElementById('texto-convert-min').value

    if (campoMin === '') {
        alert('Por Favor, Insira algum texto para realizar a conversão')
    }
    
    let convert = document.getElementById('texto-recept-min').value = campoMin.toLowerCase()
}

function convertTextMaius() {
    let campoMaius = document.getElementById('texto-convert-maius').value

    if (campoMaius === '') {
        alert('Por Favor, Insira algum texto para realizar a conversão')
    }

    let convert = document.getElementById('texto-recept-maius').value = campoMaius.toUpperCase()
}