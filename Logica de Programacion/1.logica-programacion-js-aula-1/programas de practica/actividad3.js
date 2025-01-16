
//1.Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let seriedenumeros = 10
let contador = 1 
while (contador<=seriedenumeros){
    
    alert(`el numero que corresponde es ${contador}`)
    contador= contador + 1
} 


//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let seriedenumeros2 = 0
let contador2 = 10 
while (contador>=seriedenumeros){
    
    alert(`el numero que corresponde es ${contador}`)
    contador= contador - 1
} 

// Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 
//'while' en la consola del navegador.
let seriedenumeros3 = prompt("Por favor pide un numero del 1 al 10 para la cuenta regresiva")
while (seriedenumeros3>=0){
    alert(`tu cuenta regresiva es ${seriedenumeros3}`)
    seriedenumeros3=seriedenumeros3-1
} 

//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 
//hasta ese número utilizando un bucle 'while' en la consola del navegador. 

let seriedenumeros4 = prompt("Por favor pide un numero del 1 al 10 para la cuenta progresiva")
let contador4=0
while (contador4<=seriedenumeros4){
    alert(`tu cuenta progresiva es ${contador4}`)

    contador4=contador4+1
} 

