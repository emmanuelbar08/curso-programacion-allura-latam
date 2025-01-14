El método `forEach` toma una función como argumento. y esta función se ejecuta una vez por cada elemento del array. La estructura típica es:

```javascript
array.forEach((elementoActual) => {
    // Operaciones con elementoActual
});
```
lo que aparece como elementoActual vendria siendo la funcion nueva la cual creamos con la flecha (funcion de flecha) y lo que decimos es que esta funcion va a representar a cada valor que este dentro de la lista que le demos despues del corchete

### **Qué es una función de flecha (=>)
La función de flecha es una forma más compacta de escribir una función en JavaScript. Equivale a una función "normal", pero sin necesidad de usar la palabra clave `function`.

ejemplo de estos dos conceptos juntos:

```javascript
let lenguajesDeProgramacion = ['JavaScript', 'Python', 'Ruby'];

lenguajesDeProgramacion.forEach((lenguaje) => { console.log(lenguaje); });

```


basicamente estamos diciendole al for each que use una funcion que no tiene nombre con un parametro llamado lenguaje que a continuacion se le dara su funcionalidad la cual se le da con las flechas para que la palabra lenguaje haga todo lo que esta despues de la flecha y entonces este parametro lenguaje es reemplazado por cada elemento del array 
de esta manera

- `forEach` toma el primer elemento del array: `'JavaScript'`.
    
    - Llama a la función: `(lenguaje) => { console.log(lenguaje); }`.
    - Dentro de la función, `lenguaje = 'JavaScript'`.
    - Ejecuta `console.log('JavaScript')`, que imprime: `JavaScript`.
- Repite el proceso para `'Python'`:
    
    - Llama a la función: `(lenguaje) => { console.log(lenguaje); }`.
    - Ahora `lenguaje = 'Python'`.
    - Ejecuta `console.log('Python')`, que imprime: `Python`.
- Finalmente, repite para `'Ruby'`:
    
    - Llama a la función: `(lenguaje) => { console.log(lenguaje); }`.
    - Ahora `lenguaje = 'Ruby'`.
    - Ejecuta `console.log('Ruby')`, que imprime: `Ruby`.


tambien podemos simplemente añadirle una funcion que ya este creada y decir que cada elemento del arreglo aplique esa funcion
#### Paso 1: Definir una función

Supongamos que ya tienes una función que realiza alguna operación, como sumar 5 a un número:

`function sumarCinco(numero) {  
`return numero + 5; }`

#### Paso 2: Usar `forEach` con esta función

Ahora, puedes usar `forEach` y pasarle esta función creada como parámetro. `forEach` va a llamar a la función para cada elemento del array:

`let numeros = [1, 2, 3, 4, 5]; 
`numeros.forEach(sumarCinco);`

#### **¿Qué ocurre aquí?**

- **`forEach` llama a `sumarCinco` para cada elemento** del array `numeros`.
- En la **primera iteración**, el primer número (1) se pasa a `sumarCinco(1)`, y el resultado (`6`) no se imprime (porque no hemos puesto un `console.log` dentro de `sumarCinco`).
- En la **segunda iteración**, pasa el número 2 a la función, y así sucesivamente.
