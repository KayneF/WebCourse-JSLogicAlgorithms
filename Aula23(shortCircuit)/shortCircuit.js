// Short Circuit

/**
 * Quando há uma cadeia condicional (OU),
 * a condição verdadeira é executada e a expressão
 * é cortada, executando assim, somente a primeira
 * condição que for verdadeira.
 */

const a = 0;
const b = null;
const c = false;
const d = 'exemplo'; // primeira condição verdadeira
const e = true;
const f = NaN;
const g = 'outro'; // segunda condição verdadeira, porém não será executada

console.log(a || b || c || d || e || f || g);