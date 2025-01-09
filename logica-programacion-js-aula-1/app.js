
//Usamos doble barra para hacer comentarios
/*Damos la bienvenida al usuario usando el metodo alert
para generar un pop up de texto en la pagina
*/

alert("Bienvenidos queridos algoritmeadores");

// Ahora usamos let para definir una variable la cual sera el numero secreto a adivinar
let numeroSecreto = Math.floor(Math.random()*10)+1;

/*entonces lo que haremos sera ahora definir nuestro valor de interes a 0 para que se pueda utilizar 
el while definiendo primero de que existe esa variable pero que aun no tiene un valor que sera el que 
le dara el usuario*/

let numeroUsuario = 0;

/* ahora crearemos un contador, un concepto que ya habiamos visto en el curso de programacion de la u, lo que haremos
sera contar las veces que el jugador tuvo que adivinar para llegar al numero secreto, crearemos una variable igual 
a 1 indicando de que si el jugador adivina a la primera habra hecho un intento, sino, se iran sumando*/ 

let intentos = 1; 


/* ahora crearemos una variable que al igual que "intentos" se pueda modificar, pero sera para cambiar la palabra
veces ya que cuando adivine el alert dira que acerto en x veces si se hizo en mas de 1 intento, pero , si se adivina
en un solo intento tambien dira veces, asi que ahora esta variable en el momento de que intentos aumente es decir
se le sume uno, entonces esta variable cambiara a llamarse de "vez" a llamarse "veces" para que se cumpla el plural*/

//let palabraVeces = "vez";


/* crearemos una variable llamada maximos intentos para que asi podamos cambiar el valor si deseamos talvez reducir
la dificultad del juego*/

let maximosintentos = 3


/* Ahora miremos que usaremos el while y en numero usuario simplemente colocamos la variable sin el let ya que
ya se definio antes, lo que haremos sera modificar su valor por medio de prompt para que el usuario escoja el numero
nuevo*/


while (numeroUsuario != numeroSecreto){

/*Usamos otro let para definir el numero que el usuario va a escoger por medio de prompt
que permite preguntar informacion al usuario en un pop up de texto
*/
    numeroUsuario = prompt("Digite un numero del 1 al 10 por favor:");

    //ahora guardamos el numero que se genero en la consola de la pagina web
    console.log(numeroUsuario); 

        console.log("el numero registrado es: "+numeroUsuario)


    /* usamos if para poner la condicion de que si el usuario acerto el
    numero secreto, se mandara un alert que dira que se acerto el numero
    */
    console.log(numeroUsuario == numeroSecreto);


    if (numeroUsuario == numeroSecreto) {
        console.log("Adivinaste");
    }else {
        console.log("El numero secreto es", numeroSecreto,"intenta nuevamente");
    }



    // else sirve para decirnos que si no se cumple la condicion mande un mensaje que diga que no se acerto
    if (numeroUsuario == numeroSecreto ) {
        alert(`Acertaste, el numero secreto es ${numeroSecreto}, lo lograste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    }else {
        if (numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }

        /*si nos damos cuenta arriba colocamos un operador ternario lo cual es en una misma linea de codigo donde 
        escribamos texto podemos agregar un if (?) con su condicion (intentos ==1) y su resultado (vez : veces) los dos
        puntos significa el else*/

        /* ahora coloco el conrador que quiere decir que se ira 
        modificando e incrementando el valor original de la variable intentos por 1 cada vez que se repite 
        el while o mas bien cuando la persona no acierta, lo coloco cuando el usuario se equivoca (despues del else) 
        ya que puede que lo adivine a la primera caso en donde se haria un solo intento (intentos =1)
        por lo que se ira sumando los intentos cuando se equivoque y repita el juego*/

        intentos++;

        /* como vemos, arriba se aumento el valor de variable intentos por lo tanto tambien cambiara el valor
        de variable palabraVeces*/

        //palabraVeces = "veces";

        if (intentos > maximosintentos){
            alert(`Has llegado al numero maximo de ${maximosintentos} intentos, por favor reinicia el juego`);
            break;
        }


    }
} 


//alert("No acertaste el numero secreto, el numero secreto es: "+numeroSecreto+" y elegiste el numero: "+numeroUsuario);



/* este es el comando para hacer los comentarios
*/ 
//como vemos ahi dos formas de insertar una variable en un alert: poniendo comas o poniendo signos mas antes y despues

