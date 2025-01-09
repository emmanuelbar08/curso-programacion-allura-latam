No solamente tenemos el ciclo while tambien esta el ciclo for

ambos son ciclo repetitivos pero con sintaxis diferente

primero escribimos el for, 

luego vendran 3 parametros

1. La variable que se modificara
2. la condicion que se debe cumplir para modificar la variable
3. la actualizacion de la variable despues de cumplir la condicion

en la practica se veria asi  
```javascript
let numeroSecreto = Math.floor(Math.random() * 10);
for (let intentos = 0; intentos < 5; intentos++) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}
``` 
miremos bien que en la parte de for hay tres parametros: la variable intentos la cual si cumple la condicion de ser menor a 5 entonces se sumara 1 al valor original de intentos

luego si se cumple la condicion sigue lo demas y al finalizar si el intento es igual al numero secreto entonces se manda un alert y se rompe el ciclo con break