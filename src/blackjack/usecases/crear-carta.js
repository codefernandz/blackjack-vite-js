export const crearCarta = (carta, turno, divCartasJugadores) => {
    
    const imagenCarta = document.createElement('img');
    imagenCarta.src = `assets/cards/${carta}.png`;
    imagenCarta.classList.add('carta');

    divCartasJugadores[turno].append(imagenCarta);
};