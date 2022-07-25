const peso1 = 2.0
const peso2 = Number('3.5')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(typeof peso2)

const avaliacao1 = 3.528
const avaliacao2 = 2.354
const total = peso1 * avaliacao1 + peso2 * avaliacao2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(Number.isInteger(media))
console.log(typeof media)