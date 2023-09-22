const { allKeys, isObject } = require('./checarObjeto')

describe("checar objeto", () => {
    const pessoa = {
        nome: 'Isabelle',
        sobrenome: 'Galvão'
    }
    const pessoaArray = ['nome', 'sobrenome']

    // se o parametro não for um objeto retornar []
    test("verificar se não é um objeto", () => {
        expect(allKeys("Isabelle")).toEqual([])
    })
    // se estamos retornando as chaves
    test("verifar se estamos retornando as chaves", () => {
        expect(allKeys(pessoa)).toEqual(pessoaArray)
    })
    // se o parametro é um objeto
    test("verifica se o paremetro é um objeto", () => {
        expect(isObject(pessoa)).toEqual(true)
    })

});


describe('function allKeys', ()=>{
    test('verify is not obj', ()=>{
        expect(allKeys('geice')).toEqual([]);
    });
    
    test('is object', ()=>{
        const object = {
        'nome': 'geice',
        'idade': 30
        };
        expect(allKeys(object)).toEqual(['nome', 'idade']); 
    });

    describe('function isObject', ()=>{
        test('verify is obj', ()=>{
            const object = {
                'nome': 'geice',
                'idade': 30
            };
            
            expect(isObject(object)).toBeTruthy();
        })
        test('verify is not object', ()=>{
            expect(isObject(5)).not.toBeTruthy();
            expect(isObject(5)).toBeFalsy();
        })
    });
});

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in
  // https://jestjs.io/pt-BR/docs/expect
  // https://github.com/reprograma/on28-ijs-tdd/blob/main/exercicios/para-sala/checarObjeto.test.js
  // https://github.com/reprograma/on28-ijs-tdd/blob/main/exercicios/para-sala/Objeto/Produto.js
  // https://github.com/reprograma/on28-ijs-tdd/tree/main/exercicios/para-casa