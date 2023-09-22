function getCompanyById(id){
    if (!id) return undefined

    //  não poderia ser if('') pq é um valor passado, apesar de funcionar, não é uma boa prática
    // poderia ser if(id === undefined || id === null || id === '')

    return {
        nome: 'Reprograma',
        email: 'email@email.com'
    }

}

module.exports = getCompanyById