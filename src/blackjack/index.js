import _ from 'underscore'
import { crearDeck, turnoJugador, turnoComputadora } from './usecases'

const myModule = (() => {
  'use strict'

  // Deck
  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];


  // Referencias (HTML)
  const botonNuevoJuego = document.querySelector('#botonNuevoJuego'),
        botonPerdirCarta = document.querySelector('#botonPerdirCarta'),
        botonDetenerJuego = document.querySelector('#botonDetenerJuego'),

        divCartasJugadores = document.querySelectorAll('.divCartas'), 
        puntosHTML = document.querySelectorAll('small');


  // Puntos Acumulados (Jugador / Computadora)
 let puntosJugadores = []; 

 
  // Iniciar Juego  
  const inicializarJuego = (numeroJugadores = 2) => {


      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];

      for (let i = 0; i < numeroJugadores; i++) {
          puntosJugadores.push(0);
      }

      puntosHTML.forEach((elem => elem.innerText = 0));
      divCartasJugadores.forEach(elem => elem.innerHTML = '');

      botonDetenerJuego.disabled = false;
      botonPerdirCarta.disabled = false;
  };

  
  botonPerdirCarta.addEventListener('click', () => {

     let puntosJugador = turnoJugador(deck, divCartasJugadores, puntosJugadores, puntosHTML);

      if (puntosJugador > 21) {

          console.warn('Lo siento mucho, perdiste!!!');
          botonPerdirCarta.disabled = true;
          botonDetenerJuego.disabled = true;
          turnoComputadora(deck, puntosJugador, puntosJugadores, divCartasJugadores, puntosHTML);

      } else if (puntosJugador === 21) {

          console.warn('21, genial');
          botonPerdirCarta.disabled = true;
          botonDetenerJuego.disabled = true;
          turnoComputadora(deck, puntosJugador, puntosJugadores, divCartasJugadores, puntosHTML);
      }

      return puntosJugador;
  });


  botonDetenerJuego.addEventListener('click', () => {

    let puntosJugador = botonPerdirCarta;

      botonDetenerJuego.disabled = true;
      botonPerdirCarta.disabled = true;
      turnoComputadora(deck, puntosJugador, puntosJugadores, divCartasJugadores, puntosHTML);
  });
  

  botonNuevoJuego.addEventListener('click', () => {
      inicializarJuego();
  });
  
})();