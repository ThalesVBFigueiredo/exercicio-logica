function calcular() {
    var ano = 2021
    var anoN = document.getElementById("anoN")
    var a = Number(anoN.value)
    resposta.innerHTML = ""
    resposta.innerHTML += `Você tem ${ano-a} anos.<br>`
    if (a <=2003) {
        resposta.innerHTML += "Você é maior de idade, então tem que votar."
    } else if (a > 2003) {
        
        resposta.innerHTML += "Você não é maior de idade, quando completar 18 anos pode votar."
    }
}