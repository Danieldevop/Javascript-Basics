/*Prototipos(Resumido es como si fuese una variable global pero 
este caso es el atributo de un objeto) */

/* Sintaxis de creación de un prototipo de un objeto 
usando la función constructor: */

function Persona(nom, ape, an) {
	this.nombre = nom
	this.apellido = ape
	this.ano = an

	this.nombreCompleto = function () {
		return this.nombre + " " + this.apellido
	}
}

var ada = new Persona("Ada","Lovelace","1815")
var charles = new Persona("charles","babbage","1791")

// añadir una propiedad a un objeto

ada.nacionalidad = "inglesa"
alert(ada.nacionalidad)
charles.nacionalidad = "alemana"
alert(charles.nacionalidad)

//Añadir un método a un objeto

ada.nacimiento = function () {
	return "Nacimiento en el año" + this.ano
}

alert(ada.nacimiento())

/*Añadir una propiedad a un prototipo:
-Añadiendo directamente sobre la definición del prototipo:
 	Mediante la sintaxis <nombre_objeto>.prototype.<propiedad>*/

Persona.prototype.muerte = "2000"
alert(ada.muerte)
alert(charles.muerte)

/* Añadir un método a un prototipo
 -Añadiendo directamente sobre la definición del prototipo
 -Mediante la sintaxis <nombre_objeto>.prototype.<metodo>...
*/

Persona.prototype.defuncion = function () {
	return "defuncion en el año " + this.muerte
}

var alan = new Persona("alan","turing","1912")
alert(alan.nombre)
alert(alan.muerte)
alert(alan.defuncion())

