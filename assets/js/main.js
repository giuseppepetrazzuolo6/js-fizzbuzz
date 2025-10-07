/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

/*TOOLS
- for
- if; else
- operatori di base (<;>;=...)
- operatore modulo %

TASK
- ciclo for composto da iniziallizazione, condizione e incremento/decremento 
- prima condizione mutipli di 3 e 5
- seconda condizione solo multipli di 3
- terza condizione solo multipli di 5
- quarta condizione numeri non multipli di 3 e/o 5
*/

//stampo i numeri da 1 a 100 usando un ciclo for
for (let i = 1; i <= 100; i++) {
    // numeri multipli di 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        // numeri multipli di 3
    } else if (i % 3 === 0) {
        console.log("Fizz");   
    } else {
        console.log(i);
    }
}