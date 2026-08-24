/**
 * Aplica regra de desconto baseada em categoria e valor da compra.
 * Requisitos:
 * - STANDARD: Sem desconto.
 * - PREMIUM: 10% de desconto para compras acima de R$ 100.
 * - VIP: 20% de desconto para qualquer valor positivo.
 * - Erros: Valores negativos ou entradas inválidas devem lançar exceções.
 */
function calculateDiscount(userTier, amount){
  if (typeof amount !== 'number' || isNaN(amount) || amount < 0) {
    throw new Error('Valor inválido');
  }
  if (!['STANDARD', 'PREMIUM', 'VIP'].includes(userTier)) {
    throw new Error('Categoria inválida');
  }

  if (userTier === 'VIP') return amount * 0.8;
  if (userTier === 'PREMIUM' && amount > 100) return amount * 0.9;
  return amount;
}

module.exports = { calculateDiscount };