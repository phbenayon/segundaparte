const { calculateDiscount } = require('./discountService');

describe('ISO 25010: Adequação Funcional', () => {
  test('CT-01: STANDARD não deve receber desconto', () => {
    expect(calculateDiscount('STANDARD', 150)).toBe(150);
  });

  test('CT-02: PREMIUM no limite exato de R$ 100 não recebe desconto', () => {
    expect(calculateDiscount('PREMIUM', 100)).toBe(100);
  });

  test('CT-03: PREMIUM acima de R$ 100 recebe 10% de desconto', () => {
    expect(calculateDiscount('PREMIUM', 200)).toBe(180);
  });

  test('CT-04: VIP recebe 20% de desconto para qualquer valor válido', () => {
    expect(calculateDiscount('VIP', 50)).toBe(40);
  });
});

describe('ISO 25010: Confiabilidade (Tolerância a Falhas)', () => {
  test('CT-05: Deve lançar erro para valores negativos', () => {
    expect(() => calculateDiscount('PREMIUM', -10)).toThrow('Valor inválido');
  });

  test('CT-06: Deve lançar erro para categorias não cadastradas', () => {
    expect(() => calculateDiscount('GUEST', 100)).toThrow('Categoria inválida');
  });
});