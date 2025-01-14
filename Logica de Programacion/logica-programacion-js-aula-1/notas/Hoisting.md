analicemos este tema ya que es interesante, en el caso de las funciones podemos hacer uso de ellas incluso antes de declararlas, esto es debido a que el motor de javascript reconoce la funcion y la almacena en la memoria inicialmente en la fase de compilacion y aun asi seguira estando la funcion en el lugar donde se escribio

esto no es aplicable para variables ya que si intentamos hacer lo mismo con let,var o const nos devolvera una inconsistencia 

Analicemos el código de **declaración de función** abajo y lo que devuelve:

```javascript
console.log(suma(2,5)) 
function suma(a,b) { 
	return a + b }
```

La razón por la que funciona el código anterior es que los motores de JavaScript mueven la función `suma` a la parte superior del campo de aplicación, o **[escopo](https://www.aluracursos.com/blog/escopo-en-javascript)**, como lo ilustra el siguiente código:

```javascript
function suma(a,b){ 
	return a + b 
} 
console.log(suma(2,5))
```
