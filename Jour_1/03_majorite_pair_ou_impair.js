/* ## ♣️ Majorité, pairs ou impair ?

[Source: Newsletter de Cassidoo](https://cassidoo.co/)

Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.

S'il n'y a pas d'élément qui apparaît plus qu'un autre, retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs.

Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0

Exemple

```
> majority([3,1,4,1])
> "1"

> majority([33,44,55,66,77])
> "Majorité impairs"

> majority([1,2,3,4])
> "Pas de majorité"
``` */
let test1 = [3,1,4,1]
let test2 = [33,44,55,66,77]
let test3 = [1,2,3,4]

function majority (array) {
    let arrayAsc = array.sort()
    let isdouble = false
    let result = ""
    for(i=0; i<array.length-1; i++){
        if(arrayAsc[i]== arrayAsc[i+1]){
            isdouble == true
            result = arrayAsc[i]
        }
    }
    let pair = 0
    let impair = 0
    if(isdouble == false){
        for(i=0; i<arrayAsc.length; i++){
            if(arrayAsc[i]%2 == 0){
                pair ++
            }
            else {
                impair ++
            }
        }
        if(pair > impair){
            result = "Majorité pairs"
        }
        if(pair < impair) {
            result = "Majorité impairs"
        }
        else {
            result = "Pas de majorité"
        }
    }
    return result
}
console.log(majority(test3))
