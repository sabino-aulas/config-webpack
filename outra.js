
// Importando CSS nas páginas que utilizam este arquivo JS como chunk
import './outra.css'
// Importa soma de calculadora.js com ECMAScript Modules
import { soma, subtracao } from './outraModulo_01.js'

console.log("-- Outra página! --")

function executar() {
    const numeroUm = parseFloat(document.getElementById('somaNumero01').value);
    const numeroDois = parseFloat(document.getElementById('somaNumero02').value);
    const resultado = soma(numeroUm, numeroDois);
    document.getElementById('somaResultado').innerHTML = resultado;
}

window.addEventListener('load', function () {
    document.getElementById('botaoSomar').addEventListener('click', executar);
});