function saludarFamilia(apellido) {
	return function saludarMienbroDeFamilia(nombre) {
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia('Gomez')
const saludarPerez = saludarFamilia('Perez')

saludarGomez('Juan')
saludarPerez('Dario')


