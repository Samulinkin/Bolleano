 // Função sem retorno
 function imprimirSoma(a, b) {
    console.log(a + b)
 }

 imprimirSoma (2, 3)
 imprimirSoma(2)
 imprimirSoma(2, 10, 4, 6, 7, 8)// Ele só irá somar os dois primeiro valores
 imprimirSoma()

 //Função com retorno
 function soma (a, b = 0){
    return a + b
 }

 console.log(soma(2, 3))
 console.log(soma(2))
 console.log(soma()) 