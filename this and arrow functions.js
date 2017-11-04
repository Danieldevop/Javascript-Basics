class Persona {
	constructor (nombre, amigos = []) {
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos () {
		// const _this = this
		/* this.amigos.forEach(function (a) {
			console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${a}`)
		}.bind(this)) */
		this.amigos.forEach((amigo) => console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)) 
		//si es una arrow function va a tomar el this por defecto en el scope de la función

	}
}


const daniel = new Persona('daniel',['pedro','juan','diego'])