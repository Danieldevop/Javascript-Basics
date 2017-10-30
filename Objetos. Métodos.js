/*Sintaxis de creación de metodos de un objeto:
	<nombre_metodo> : function() {
		//instructions
	}

	- Sintaxis de acceso a metodos de un objeto:
	<nombre_objeto>.<nombre_metodo>()
	*/

var persona1 = {
	nombre: 'ada',
	apellido: 'lovelace',
	nombreCompleto: function () {
		return this.nombre + " " + this.apellido
	}
}

alert(persona1.nombre)
alert(persona1.apellido)
alert(persona1.nombreCompleto())