export const determinarGanador = (puntosJugadores) => {

    const [puntosJugador, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if ( puntosJugador === puntosComputadora) {
            alert('Nadie Gana :(');
    
        } else if (puntosJugador > 21) {
            alert('Computadora Gana');
    
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');

        } else {
            alert('Computadora Gana');
        }
    }, 100);
};