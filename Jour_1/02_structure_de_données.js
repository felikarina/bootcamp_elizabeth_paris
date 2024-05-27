/* Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? */

let test1 = "abcdef"
let test2 = "babababa"
let test3 = "loup"

function isUnique(string){
    const regex = /(.+)(?=.*\1)/gm
    return !regex.test(string)
}

console.log(isUnique(test3))
