// 1) Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function sumZero(nums) {
    let addToZero = false
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0) {
                addToZero = true
            }
        }
    } return addToZero
}

console.log(sumZero([3, 4, 5, 7, 8, 44, -4]))
console.log(sumZero([]))
console.log(sumZero([1]))
console.log(sumZero([1, 2, 3]))
console.log(sumZero([1, 2, 3, -2]))

// Runtime: O(n^2)
// Space Complexity: O(n^2)

// 2) Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function uniqueCharacters(word) {
    let isUnique = true
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                isUnique = false
                break
            }
        }
    } return isUnique
}

console.log(uniqueCharacters("Monday"))
console.log(uniqueCharacters("Moonday"))
console.log(uniqueCharacters("September"))
console.log(uniqueCharacters("April"))
console.log(uniqueCharacters("October"))
console.log(uniqueCharacters("Sets"))

// Runtime: O(n^2)
// Space Complexity: O(n^2)

// 3) A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.” Write a function to check a sentence to see if it is a pangram or not.

/*
-create object to hold letters count
-split sentence into letters
-check number of times each letter appears in sentence
-check that each letter in the alphabet appears at least once
-if so, return true
*/

function isPangram(sentence) {
    let letters = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
      }

      sentence.toLowerCase()
      let splitSentence = sentence.split('')

}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))

// Runtime: O(n) - I'm not sure how to write the rest of this function, but I think the function runtime would be based on the length of the sentence.
// Space Complexity: O(n) - I think the space complexity would also be based on the length of the sentence.

// 4) Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function find_longest_word(wordslist) {
    let longestWord = 0
    for (let i = 0; i < wordslist.length; i++) {
        if (wordslist[i].length > longestWord) {
            longestWord = wordslist[i].length
        }
    } return longestWord
}

console.log(find_longest_word(["hi", "hello", "sup", "gudday"]))
console.log(find_longest_word(["a", "abcdefghi", "abc", "zyxwv"]))
console.log(find_longest_word(["abracadabra", "bop", "poof", "zipzap"]))

// Runtime: O(n)
// Space Complexity: O(n)