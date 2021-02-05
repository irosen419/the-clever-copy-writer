// function solution(num) {
//     let strArray = num.toString()
//     let numStr = ""
//     if (num >= 0) {
//         for (let i = 0; i < strArray.length; i++) {
//             if (strArray[i] <= 5) {
//                 numStr += '5' + strArray.substr(i)
//                 break
//             }
//             numStr += strArray[i]
//             if (i === strArray.length - 1) {
//                 numStr += '5'
//             }
//         }
//     } else {
//         for (let i = 0; i < strArray.length; i++) {
//             if (strArray[i] >= 5) {
//                 numStr += '5' + strArray.substr(i)
//                 break
//             }
//             numStr += strArray[i]
//             if (i === strArray.length - 1) {
//                 numStr += '5'
//             }
//         }
//     }
//     return parseInt(numStr)
// }

// console.log(solution(-222))

function solution(S) {
    let answer = Number.POSITIVE_INFINITY;
    for (let i = S.length; i >= 0; i--) {
        let length = solutionHelper(S, 0, i, answer)
        if (length < answer) {
            answer = length
        }
    }
    if (answer === Number.POSITIVE_INFINITY) {
        return -1;
    }
    return answer;
}

function solutionHelper(S, i, j, answer) {
    // save letters in a set 
    let setOfLetters = new Set();
    for (let i = 0; i < j; i++) {
        setOfLetters.add(S[i]);
    }

    for (let i = 0; i < S.length; i++) {
        if (!setOfLetters.has(S[i].toUpperCase()) || !setOfLetters.has(S[i].toLowerCase())) {
            return answer;
        }
    }

    return j - i
}
console.log(solution('azABaabza'))

// azABaabza => 5
// TacoCat => -1
// AcZCbaBz => 8
// sSbBddAa => 2

// function daysOfTheWeek(S, K) {
//     let days = { "Mon": 0, "Tues": 1, "Wed": 2, "Thurs": 3, "Fri": 4, "Sat": 5, "Sun": 6 }
//     let opposite = { 0: "Mon", 1: "Tues", 2: "Wed", 3: "Thurs", 4: "Fri", 5: "Sat", 6: "Sun" }
//     let givenDays = (K + days[S]) % 7
//     return opposite[givenDays]
// }

// console.log(daysOfTheWeek("Sat", 23))