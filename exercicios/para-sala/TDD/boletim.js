function calcularBoletim(number){
    if (number >= 6){
        return 'aprovado'
    }
    
    return 'reprovado'
}

module.exports = calcularBoletim