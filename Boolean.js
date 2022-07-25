let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)// Duas negações tranforma em verdadeiro//
isAtivo = 1
console.log(isAtivo)

console.log(!!isAtivo)

console.log('Os verdadeiros')

console.log(!!3)
console.log(!! -1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo=false))
console.log(!!NaN)
console.log(!!('' || null || 0|| ' '))// O sistema vai buscar se há algum verdadeiro e esse por sua vez será o resultado!//
