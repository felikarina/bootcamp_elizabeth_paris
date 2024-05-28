/* Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? */

let test1 = "abcdef"
let test2 = "bafa"
let test3 = "loup"

function isUnique(string){
    const regex = /(.+)(?=.*\1)/
    return !regex.test(string)
}

console.log(isUnique(test2))
