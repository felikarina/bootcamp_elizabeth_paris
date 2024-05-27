/* Fizzbuzz

Rédigez un programme informatique qui affiche les nombres de 1 à 100 dans l’ordre, en remplaçant les multiples de 3 par le mot Fizz, les multiples de 5 par Buzz, et les multiples de 15 par FizzBuzz. */

function FizzBuzz() {
    for(i=1; i<101; i++){
        if (i%15 == 0){
            console.log("FizzBuzz")
        }
        if (i%5 == 0){
            console.log("Buzz")
        }
        if (i%3 == 0){
            console.log("Fizz")
        }
        else {
            console.log(i)
        }
    }
}

FizzBuzz()