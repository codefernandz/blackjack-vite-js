import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposCarta example: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposCartaEspeciales example: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposCarta, tiposCartaEspeciales) => {

    if (!tiposCarta || tiposCarta.length === 0) 
        throw new Error('TiposCarta es obligatorio como un arreglo de string');

    if (!tiposCartaEspeciales || tiposCartaEspeciales.length === 0) 
        throw new Error('tiposCartaEspeciales es obligatorio como un arreglo de string');
    
    let deck = [];
    
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposCarta) {
        for (let especial of tiposCartaEspeciales) {
            deck.push(especial + tipo);
        }
    }

    return _.shuffle(deck);
};