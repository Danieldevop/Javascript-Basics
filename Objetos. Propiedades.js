/* Sintaxis de acceso a las propiedades de un objeto:
	-objeto.propiedad
	-objeto["propiedad"]
	-objeto[expresion] */

var persona1 = { 
	nombre: 'ada',
	apellido: 'lovelace', 
	year: '1815'
}
alert(persona1.nombre)
alert(persona1["nombre"])

var expresion  = "year"
alert(persona1[expresion])

// Recorrer las propiedades de un objeto:

for (x in persona1) {
	alert(persona1[x])
}

/* Añadir una nueva propiedad a un objeto:
<nombre_objeto>.<nueva_propiedad> = <valor_propiedad> */

persona1.nacionalidad = "inglesa"

alert(persona1.nacionalidad)

/*Borrar una propiedad de un objeto:
	delete <nombre_objeto>.<nombre_propiedad> */

delete persona1.year

for (x in persona1) {
	alert(persona1[x])
}