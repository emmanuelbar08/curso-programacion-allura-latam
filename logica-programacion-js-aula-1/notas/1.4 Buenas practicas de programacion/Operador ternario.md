si nos acordamos en nuestro codigo del juego para que se mandara el mensaje de que se habia completado el juego en x veces teniamos 2 situaciones
cuando se termina en una sola vez (se gana el juego a la primera)
o cuando se termina en varios intentos

para esto usabamos una variable llamada
```javascript
let palabraveces = "vez"
```
y justamente esta variable iba dentro de un templatestring en la que se ponia la condicion para mostrar el mensaje

```javascript
if (numeroUsuario == numeroSecreto ) {
        alert(`Acertaste, el numero secreto es ${numeroSecreto}, lo lograste en ${intentos} ${palabraVeces}`);
```
y luego agregabamos un else en donde deciamos que si se pasaba de un intento entonces se cambiara el valor de esa variable a veces

```javascript
else {

   alert("El numero es menor al numero secreto");
}

   intentos = intentos + 1;
  
   palabraVeces = "veces";
```

pero que piensas si te dijera que puedes hacer todo este proceso en una linea? 

usamos el operador ternario, el cual es meter un codigo de javascript dentro de un templatestring 
y ese codigo estara abreviado de manera que pueda ser trabajable dentro del template 

miremos como quedaria la parte donde iba palabraveces
```javascript
alert(`Acertaste, el numero secreto es ${numeroSecreto}, lo lograste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
```
en este caso el ? se convierte en nuestro if y los dos puntos se convierten en el else 
estamos diciendo que si se cumple que intentos es igual a 1 entonces se dira la palabra "vez" en el alert, de lo contrario (los dos puntos) se dira la palabra veces 

