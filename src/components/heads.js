function heads(num, target) {
    let elephants = 0
    while (elephants < num) {
        let parrots = num - elephants
        if ((elephants * 4 + parrots * 2) === target) return { 'elephants': elephants, 'parrots': parrots }
        elephants++
    }
    return -1
}

console.log(heads(39, 98))