//Number 1

// console.log(array.reduce(sum));

// function sum(a, b) {
//     return a + b;
// }

// console.log(array.map(sum));
// console.log(sum);

// console.log(array);
// console.log(array.length);

let array = [1, [2, [3, 4], 5]];

function FlatenArray(array) {
    let tempArray = array.toString();
    console.log(tempArray);
    console.log(tempArray.length);
    let finalArray = [];
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] != ',') {
            finalArray.push(tempArray[i]);
        }
    }
    return finalArray;
}

console.log(FlatenArray(array));

// Number 2

function hasUniqueCharacters(string) {
    for (let j = 0; j < string.length; j++) {
        for (let i = j + 1; i < string.length; i++) {
            if (string[j] === string[i]) {
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueCharacters("abcdefghijklmnozqrstuvwxyz"));

//Number 3

function isAnagram(word1, word2) {
    if (word1.length != word2.length) {
        return false;
    }
    for (let i = 0; i < word1.length; i++) {
        console.log(word2[i]);
        if (!word1.includes(word2[i])) {
            return false;
        }
    }
    return true;
}

// let word1 = 'hamza';
// let word2 = 'hammad';
// console.log(word1[0], word2[0]);
// console.log(word1.includes(word2[0]));

console.log(isAnagram('listan', 'silent'));

//Nummber 4