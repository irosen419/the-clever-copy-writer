// function solution(num) {
//     let strArray = num.toString()
//     let numStr = ""
//     for (let i = 0; i < strArray.length; i++) {
//         if (num >= 0) {
//             if (strArray[i] <= 5) {
//                 numStr += '5' + strArray.substr(i)
//                 break
//             }
//             numStr += strArray[i]
//             if (i === strArray.length - 1) {
//                 numStr += '5'
//             }
//         } else {
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

// function solution(S) {
//     let answer = Number.POSITIVE_INFINITY;
//     for (let i = 0; i < S.length; i++) {
//         for (let j = 0; j <= S.length; j++) {
//             if (i === j) {
//                 continue
//             }
//             let length = solutionHelper(S, i, j, answer)
//             if (length < answer) {
//                 answer = length
//             }
//         }
//     }
//     if (answer === Number.POSITIVE_INFINITY) {
//         return -1;
//     }
//     return answer;
// }

// function solutionHelper(S, i, j, answer) {
//     let subString
//     if (i < j) {
//         subString = S.substr(i, j - i)
//     } else {
//         subString = S.substr(j, i - j)
//     }
//     // save letters in a set 
//     let setOfLetters = new Set();
//     for (let k = 0; k < subString.length; k++) {
//         setOfLetters.add(subString[k]);
//     }

//     for (let k = 0; k < subString.length; k++) {
//         if (!setOfLetters.has(subString[k].toUpperCase()) || !setOfLetters.has(subString[k].toLowerCase())) {
//             return answer;
//         }
//     }

//     return subString.length
// }
// console.log(solution('lEEtcodeiSBetETrThaNhAcKerRaNk'))

// azABaabza => 5
// TacoCat => -1
// AcZCbaBz => 8
// sSbBddAa => 2
// AggrrRttTaatsG => 2
// cOoKiEeSsnNcrEam => 2
// cHoOChOo => 4

function daysOfTheWeek(S, K) {
    let days = { "Mon": 0, "Tues": 1, "Wed": 2, "Thurs": 3, "Fri": 4, "Sat": 5, "Sun": 6 }
    let opposite = { 0: "Mon", 1: "Tues", 2: "Wed", 3: "Thurs", 4: "Fri", 5: "Sat", 6: "Sun" }
    let givenDays = (K + days[S]) % 7
    return opposite[givenDays]
}

console.log(daysOfTheWeek("Thurs", 6)) 

// Sat, 23 => Mon