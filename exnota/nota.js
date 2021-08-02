var nota = document.getElementById("notas")
var n = Number(nota.value)
var lista = document.getElementById("lista")
var valores = []

function isNumero(n) {
    if (Number(n) >= 0 && Number(n) <= 10) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(nota.value)) {
        valores.push(Number(nota.value))
        var item = document.createElement("option")
        item.text = `Nota ${nota.value} adicionada.`
        lista.appendChild(item)
        resposta.innerHTML = ""
    }
    nota.value = ""
    nota.focus()
}

function calcular() {
    var media = 0
    if (valores.length == 0 ) {
        alert("Adicione valores válidos antes de finalizar!")
    } else {
        var tot = valores.length
        var soma = 0
        
        for(var pos in valores) {
            soma += valores[pos]
        }
        media = soma / tot
        resposta.innerHTML = ""
        resposta.innerHTML += `<p>A média das notas é ${media}.</p>`
    }
    if (media >=0 && media <6) {
        resposta.innerHTML += "Você está reprovado."
    } else {
        resposta.innerHTML += "Você está aprovado."
    }
}