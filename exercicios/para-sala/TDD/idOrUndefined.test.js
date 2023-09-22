const getCompanyById = require('./idOrUndefined')

it('caso nenhum id seja passado o resultado deve ser undefined', () => {
    expect(getCompanyById()).toBeUndefined();
});