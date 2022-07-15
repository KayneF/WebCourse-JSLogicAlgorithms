// Operação ternária
// Substitui condicionais simples

const pontuacaoUsuario = 999;
//                   (------ condição ------) ? 'Valor true'  : 'Valor false';
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário padrão';
console.log(nivelUsuario);

// Set valor padrão (fall back)
const corUsuario = null;
const corPadrão = corUsuario || 'Preto';
// Quando o valor de uma variável for null, o valor padrão é utilizado
console.log(corPadrão);
