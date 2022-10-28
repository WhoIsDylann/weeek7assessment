let addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let y = i + 1; y < arr.length; y++) {
            if (arr[i] + arr[y] === 0 ) {
                return true;
            }
        }
    }
    return false;
}

console.log(addToZero([1, 2, 3,]))

// o(n^2)

function hasUniqueChars(string) {
    for(let i = 0; i < string.length; i++) {
        for(let y = i + 1; y < string.length; y++){
            if (string[i] == string[y]) {
                return false; 
            } 
        }         
    } 
    return true;
}
console.log(hasUniqueChars('dylan'))

// o(n^2)

let alphabet = "abcdefghijklmnopqrstuvwxyz";

let isPangram = (str) => {
    for (let i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
        return true;
}

console.log(isPangram('the quick brown fox jumps over the lazy dog'))

//o(n)

let findLongestWord = (arr) => {
    let word = '';
    for (let i = 0; i < arr.length; i++){
            if (word.length < arr[i].length) {
                word = arr[i]
            }
    }
    return word.length;
}


console.log(findLongestWord(['hi', 'swag']))

// o(n)
