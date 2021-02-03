// Example Input: wordlist: ['APPLE', 'PLEAS', 'PLEASE'] keypads: ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'] Expected output: [0, 1, 3, 2, 0] Explanation:

// Output: An array of integers. Each integer should be the number of valid words in the corresponding lock.

function keypads(wordlist, keypads) {
    let possibleWordsArray = []

    let charObj = {}
    for (let i = 0; i < keypads.length; i++) {
        charObj[i] = {}
        for (const key of keypads[i]) {
            charObj[i][key] = true
        }
    }
    console.log(charObj)
}

console.log(keypads(['APPLE', 'PLEAS', 'PLEASE'], ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']))