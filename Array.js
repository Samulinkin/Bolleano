const valores = [7.7 , 8.9, 6.3, 9.2]
console.log(valores[0], valores [3], valores [4])
valores[4] = 10
console.log(valores [4])
console.log(valores)
console.log(Number.isInteger(valores[2]))
console.log(valores.length)

valores.push({id:3}, false, null,'test')
console.log(valores)
delete valores[0]
console.log(valores)
delete valores[5]
console.log(valores)
console.log(typeof valores)
console.log(valores.pop())
