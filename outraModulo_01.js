// Exemplo de módulo que exporta as funções com ECMAScript Modules

function soma(numeroUm, numeroDois) {
    return numeroUm + numeroDois;
}

function subtracao(numeroUm, numeroDois) {
    return numeroUm - numeroDois;
}

export function divisao(numeroUm, numeroDois) {
    return numeroUm / numeroDois;
}

// Exportar com ECMAScript Modoles, ou adicionar 'export' antes de 'function'
export { soma, subtracao };

// Não é mais necessário o código abaixo! Ele era de CommonJS
// module.exports = { soma };