function contar() {
    var maca = document.getElementById("contador")
    var valor = 0.3 
    var m = Number(maca.value)
    if (m == 0) {
        alert("Digite uma quantidade de maçãs")
    } if (m <= 11) {
        resposta.innerHTML = `A compra de ${m} maçãs deu um total de R$${m*valor}.`
    } if (m >= 12) {
        var valor = 0.25
        resposta.innerHTML = `A compra de ${m} maçãs deu um total de R$${m*valor}.`
    }
}