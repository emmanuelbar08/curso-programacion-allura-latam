/// 1
let mensajeBienvenida = prompt("Bienvenidos queridos usuarios");
console.log(mensajeBienvenida);
///// 2
let nombre = "Emmanuel";
console.log(`Hola ${nombre}`);
//// 3
alert(`Hola ${nombre}`);
///// 4
prompt("¿Cuál es el lenguaje de programación que más te gusta?.");
let respuesta = prompt("El lenguaje que mas me gusta es python");
console.log(respuesta)
//// 5
let valor1 = 2
let valor2 = 3
let resultado = valor1+valor2
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`)
//// 6 
let valor3 = 4
let valor4 = 3
let resultadoresta = valor3-valor4
console.log(`La resta de ${valor3} y ${valor4} es igual a ${resultadoresta}`)
//// 7 

let edad = parseInt(prompt("Por favor ingrese su edad"))

if (edad >= 18){
    console.log("Usted es mayor de edad")
}
else{
    console.log("Usted es menor de edad")
}
/// 8 
let numero = parseInt(prompt("Por favor ingrese su numero"))

if (numero > 0){
    console.log("Su numero es positivo")
} 
else { if (numero <0){
    console.log("Su numero es negativo")
}else{
    console.log("Su numero es 0")
}
}





