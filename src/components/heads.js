// function heads(num, target) {
//     let elephants = 0
//     while (elephants < num) {
//         let parrots = num - elephants
//         if ((elephants * 4 + parrots * 2) === target) return { 'elephants': elephants, 'parrots': parrots }
//         elephants++
//     }
//     return -1
// }

// console.log(heads(39, 98))

function firstNonRepeating(str) {
    // let mapInOrder = new Map()
    // for (const char of str) {
    //     if (mapInOrder.has(char)) {
    //         mapInOrder.set(char, mapInOrder.get(char) + 1)
    //     } else {
    //         mapInOrder.set(char, 1)
    //     }
    // }

    // for (const char of [...mapInOrder.keys()]) {
    //     if (mapInOrder.get(char) === 1) {
    //         return char
    //     }
    // }
    // return null
    let hash = {}
    for (const char of str) {
        if (!hash[char]) {
            hash[char] = 1
        } else if (hash[char] === 1) {
            hash[char]++
        } else if (hash[char] === 2) {
            hash[char] = hash[char] * -1
        } else if (hash[char] < 0) {
            hash[char]--
        }
    }

    for (const char in hash) {
        if (hash[char] === 1) {
            return char
        }
    }

    return null
}

console.log(firstNonRepeating('twittewr'))
console.log(firstNonRepeating('aaabbcdcce'))