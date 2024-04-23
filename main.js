

require("./style.css")
const { soma } = require("./calculadora")

console.log("Olá webpack com JS!!!!")

const numeroUm = 10
const numeroDois = 20
const resultado = soma(numeroUm, numeroDois)

console.log("ATUALIZEI AQUI: ",resultado)


function executar(){
    console.log("FUI CLICADO!!!")
}