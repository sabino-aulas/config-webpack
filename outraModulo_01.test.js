import { soma } from './outraModulo_01';

test('deve somar dois numeros corretamente', () => {
    expect(soma(2, 3)).toBe(5);
    expect(soma(-1, 5)).toBe(4);
    expect(soma(0, 0)).toBe(0);
});