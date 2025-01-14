cada uno de estas funciones de Javascript tienen trabajos diferentes 

por ejemplo parseInt lo usamos cuando queremos convertir un promp en numeros es decir una orden que le damos al usuario en forma de texto y que gracias al parseint este texto se convierta en un numero entero Si la cadena no se puede convertir a un número, devuelve `NaN` (Not a Number). Esencial para trabajar con datos numéricos que vienen del usuario.

este parseInt es crucial colocarlo cuando le pedimos al usuario un valor numerico, ya que el prompt solamente recoge valores de string o valores que son de texto alfabetico

Math.floor lo que hace es redondear los numeros para que sean enteros es decir no tengan decimales pero a su entero inmediatamente menor es decir que si tengo 5.999 solamente me arrojara 5, es como si esta funcion "tirara la parte decimal"

Math.random lo que hace es generar numeros aleatorios entre 0 y 1 es decir 0 y hasta 0.9999 
	cabe recalcar que este limite se puede modificar multiplicando con el numero limite que queramos como vemos en la imagen para ampliar nuestro limite
ahora si vemos lo que estamos haciendo es multiplicar 10 por el valor que genera el math random entonces si por ejemplo genera un 0.555 multiplicado por 10 es 5.55 y nuestra fruncion math.floor lo redondea a 5

![[Pasted image 20241208195107.png]]

como vemos nosotros estamos incluyendo una funcion dentro de una funcion es decir el math.random dentro del math.floor para que de esa manera se pueda redondear lo que esta adentro 

### Ahora.. 
si nos damos cuenta el math.random genera numeros aleatorios o pseudoaleatorios desde 0 hasta 9 pero nosotros en nuestro necesitamos que sea de 1 hasta 10 entonces que hacemos? 

le sumamos 1 al final
de esta manera en el caso que de 0 dara 1 y si da 9 dara 10

		let numeroSecreto= Math.floor(Math.random()*10)+1;
y listo de esta forma tenemos todo listo

