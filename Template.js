const nome = 'Raisa'
const concatenacao = 'Olá ' + nome + '!'
const templade = `
Olá
${nome}`

console.log(concatenacao,templade)
console.log(`1 + 1 = ${1+1}`) // Ele aceita expresões matematicas//

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)