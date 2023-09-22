const Produto = require('./freteGratis');

describe("Produto", () => {
    let tenis

    beforeEach(() => {
        tenis = new Produto("Tenis", 150, false)
    }) 

    test('opção de frete grátis não ativada', () => {
        expect(tenis.hasFreteGratis()).toBeFalsy()
    })
    
})
// it("não deve permitir um depósito negativo", () => {
//     expect(() => {
//       conta.realizarDeposito(-1);
//     }).toThrow("Valor para depósito precisa ser positivo");
//   });