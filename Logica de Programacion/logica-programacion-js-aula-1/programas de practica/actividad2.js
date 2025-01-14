/*a continuacion se creara un programa que nos permite preguntar el dia de la semana al usuario 
y si responde que es sabado o domingo se le dira feliz fin de semana, 
en el caso que sea otro dia se le dira buena semana*/

alert("Hola bienvenido querido usuario");
let preguntaDiasemana = prompt("Por favor podria decirme que dia de la semana es");

preguntaDiasemana = preguntaDiasemana.toLowerCase(); 

console.log(preguntaDiaSemana ===  "sabado"|| "domingo");
if (preguntaDiaSemana === "sabado" || "domingo") {
    alert("Feliz fin de semana!");
    
}else {
    alert("Buena semana");
}


//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numero = prompt("Bienvenido querido usuario, por favor digite un numero ")

console.log(numero)
if (numero > 0 ){ 
    alert("Su numero es positivo")
} else if (numero < 0 ){ 
    alert("Su numero es negativo")
} else {
    alert("Su nummero es igual a 0")
}

/*Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".*/

alert("Hola bienvenido querido usuario");
let puntuación = prompt("Por favor podria decirme cual es su puntuacion en el juego");

console.log(puntuación);

if (puntuación >= 100) {
    alert("Felicidades, has ganado!");
} else {
    alert("Intentalo nuevamente para ganar");
}

/* Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string
para incluir el valor del saldo.*/

alert("Hola bienvenido querido usuario");

let saldo = prompt("Por favor, a continuacion digite el valor de su saldo");
console.log (saldo);
alert(`ok estimado usuario el valor de su saldo es de ${saldo}`)

//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt("Por favor ingrese su nombre querido usuario");

alert(`Bienvenido, su nombre es ${nombre}`); 
