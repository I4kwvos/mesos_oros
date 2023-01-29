const prompt = require('prompt-sync')()
let nos = prompt('Δώσε τους βαθμούς σου χωρισμένους με κόμματα: ')

const mesosOros = (...args) => {
    let highest = Math.max.apply(0, args)
    let lowest = Math.min.apply(0, args)

    let sum = args.reduce((a, c) => {
        return a + c
    })
    return `Ο μέσος όρος σου είναι ${sum / args.length}\nΑριθμός μαθημάτων: ${args.length}\nΨηλότερος βαθμός: ${highest}\nΧαμηλότερος βαθμός: ${lowest}`
}

let fixedNos = []
nos.split(',').forEach(no => {
    let sno = no.toString().trim()
    fixedNos.push(Number(sno))
})

console.log(mesosOros(...fixedNos))