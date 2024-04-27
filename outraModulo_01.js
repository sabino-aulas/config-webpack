// Exemplo de módulo que exporta as funções com ECMAScript Modules

export function soma(numeroUm, numeroDois) {
    return numeroUm + numeroDois;
}

export function divisao(numeroUm, numeroDois) {
    return numeroUm / numeroDois;
}

// Exportar com ECMAScript Modoles, ou adicionar 'export' antes de 'function'
// export { soma, divisao };

// Não é mais necessário o código abaixo! Ele era de CommonJS
// module.exports = { soma };