/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore,
   minuti e secondi corrispondenti,    poi stampa il risultato.
   L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/


var secondiTotali = 29848;
var minuto = [secondiTotali-(secondiTotali%60)]/60; //minuti totali

var ore = [minuto-(minuto%60)]/60;
var minuti = minuto%60;
var secondi = secondiTotali%60;

console.log(ore);
console.log(minuti);
console.log(secondi);
