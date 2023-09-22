function buildApartamentTags(shared){
    if(shared){
        return {
            icon: 'shared',
            color: 'green',
            background: 'gray',
            label: 'Compartilhado',
        }
    }
    return {
        icon: 'not shared',
        color: 'black',
        label: 'individual'
    }

}
module.exports = buildApartamentTags