import { crearCarta } from "./crear-carta";
import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";

export const turnoJugador = (deck, divCartasJugadores, puntosJugadores, puntosHTML) => {

    const turno = 0;
    const carta = pedirCarta(deck);
    
    crearCarta(carta, turno, divCartasJugadores);

    return acumularPuntos(carta, turno, puntosJugadores, puntosHTML);
}