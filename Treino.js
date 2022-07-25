const escola = 'Cod3r'

console.log(escola)
console.log(escola.indexOf('r'))
console.log(escola.charAt(2))
console.log(escola.charAt(0))
console.log(typeof escola)
console.log(escola.substring(2))
console.log(escola.substring(0,3))
console.log(escola.isInteger)







const nome = ' Raisa'
const templade = `
Você é o amor da minha vida${nome}`
console.log(templade)


const up = texto => texto.toUpperCase()

console.log(`Raisa você sabe ${up('o quanto te amo')} !`)


let isAtivo = true

console.log(isAtivo)

isAtivo = false
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(!!isAtivo)

console.log("Os verdadeiros")
console.log(!!3)
console.log(!! -1)
console.log(!!' ')
console.log(!!{})
console.log(!![])
console.log(!!(isAtivo = true))
console.log(!!Infinity)

console.log("Os falsos")

console.log(!!0)
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log(!!(0||''||null||NaN||' '))

console.log('Raisa,Francy,Heloisa'.split(','))

const valores = [7.7, 2.5, 4.3, 8.5]
console.log(valores[0], valores[3])
valores.push({id:3},null,undefined,'teste')
console.log(valores)
console.log(valores.pop())
delete valores[3]
console.log(valores)
console.log(valores.length)



const prod1 = {}
prod1.nome = 'Celular da Moda'
prod1.preco = 2250.00
prod1['Desconto do bom'] = 35
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    valor: 75.50,
    desconto: 35
}
console.log(prod2)


function imprimirSoma (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(3, 5)

function soma(a, b = 0){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(5, 7))