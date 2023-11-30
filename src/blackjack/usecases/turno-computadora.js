import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";
import { pedirCarta } from "./pedir-carta";

export const turnoComputadora = (deck, puntosJugador, puntosJugadores, divCartasJugadores, puntosHTML ) => {
    
    let puntosComputadora = 0;

    do {
        const turno = puntosJugadores.length - 1;
        const carta = pedirCarta(deck);

        puntosComputadora = acumularPuntos(carta, turno, puntosJugadores, puntosHTML);
        crearCarta(carta, turno, divCartasJugadores);

    } while((puntosJugador > puntosComputadora) && (puntosJugador <= 21));

    determinarGanador(puntosJugadores);
};