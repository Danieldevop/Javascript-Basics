// 1. Definir un objeto simple utilizando un literal
var persona1 = {
	nombre:"Angel",
	apellido:"Dicaprio",
	year:"1977"
}

// 2. Definir y crear un objeto simple utilizando la palabra new
var persona2 = new Object()
persona2.nombre = "David"
persona2.apellido = "Guetta"
persona2.year = "1799"

// 3. Definir un constructor de un objeto, y crear objetos del
// construido

function Persona(nom,ape,ano) {
	this.nombre = nom
	this.apellido = ape
	this.ano = ano
}
var ada = new Persona("Ada","lovelace","1815")
var leonard = new Persona("leonard","bull","1991")

/* This(palabra reservada)
	-Hace referencia al propietario de la función que
	 este invocandose
	-Hace referencia al objeto donde la	función es un método.