
const daniel = {
	nombre : 'daniel',
	apellido : 'sep'
}

function saludar(veces, uppercase) {
	let str = `Hola ${this.nombre} ${this.apellido}`
	str = uppercase ? str.toUpperCase() : str
	for (let i = 0; i < veces; i++) {
		console.log(str)
	}
}

const params = [3, true]
saludar.call(daniel, ...params) //spread operator
saludar.call(daniel, 3, true)
saludar.apply(daniel, [3, true])


