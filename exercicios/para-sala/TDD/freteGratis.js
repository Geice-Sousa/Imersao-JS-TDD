class Produto {
    constructor(produto, valor, frete){
        this.produto = produto,
        this.valor = valor,
        this.frete = frete
    }

    hasFreteGratis(){
        return this.frete
    }
}

module.exports = Produto