// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codedMessage", () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", ()=> {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// ReferenceError: codedMessage is not defined

// Define a function called codedMessage
// Define parameter to codeWordString
// Use .split to put string into an array, then use .map to iterate over the array
// Use conditionals to change vowels to numbers
// Join string back together

const codedMessage = (codeWordString) => {
    return codeWordString.split('').map(vowel =>{
        if(vowel === "a" || vowel === "A") {
            return 4
        } else if(vowel === "e" || vowel === "E"){
            return 3
        } else if(vowel === "i" || vowel === "I"){
            return 1
        } else if(vowel === "o" || vowel === "O"){
            return 0
        } else {
            return vowel
        }
    }).join("")
}


// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.321 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.14s.


// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.


describe("letterChecker", () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", ()=> {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"];
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(letterChecker(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(letterChecker(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// ReferenceError: letterChecker is not defined


// b) Create the function that makes the test pass.

// Pseudocode
// Define a function called letterChecker
// Define parameter to letterChecker called wordArray
// Use .filter to filter through the array for words containing a particular letter.
// After filter, the word vowel represents words in the array that are being filtered through to check if they contain a particular letter.
// Use .includes to filter for the particular letter.

const letterChecker = (wordArray, letter) => {
    return wordArray.filter(vowel => {
        return vowel.toLowerCase().includes(letter)
    })
}


// For the purposes of teaching the function and what it is doing for myself and someone else.
// const letterChecker = (wordArray, letter) => {
//     return wordArray.filter(wordInArray => {
//         return wordInArray.toLowerCase().includes(letter)
//     })
// }


// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (3 ms)
// letterChecker
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.51 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.86s.





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house", ()=> {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})

// b) Create the function that makes the test pass.


// Setup
// The function takes in an array of 5 numbers and determines whether or not the array is a “full house"
// A full house is a pair and 3 of a kind
// This function needs to return a Boolean value of true or false on whether or not a hand is a full house after evaluation

// Pseudocode
// Define a function called fullHouse
// Set parameter to handArray
// Need to iterate over the array using the .sort to narrow down cases that need accounted for and to write conditionals.
// Use conditionals to evalaute if the values at the indexes are equal to other values in the array.

// if(array[i] = same value 3 times && array[i] = same value 2 times)
// return true
// else
// return false


const fullHouse = (handArray) => {
    handArray.sort((a,b) => a-b)
    if(handArray[0] === handArray[1] && handArray[0] === handArray[2] && handArray[3] === handArray[4]) {
        return true
    } else if(handArray[0] === handArray[1] && handArray[2] === handArray[3] && handArray [2]=== handArray[4]) {
        return true
    } else {
        return false
    }
}
// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (2 ms)
// letterChecker
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.42 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.44s.
