const dias = [
	
	'domingo',
	'lunes',
	'martes',
	'miércoles',
	'jueves',
	'viernes',
	'sábado'
]

const nacimiento = new Date(1997, 10, 10)
const hoy = new Date()
const tiempoMilisegundos = hoy - nacimiento
const tiempoSeg = tiempoMilisegundos / 1000
const tiempoMin = tiempoSeg / 60
const tiempoHoras = tiempoMin / 60
const tiempoDias = tiempoHoras / 24
const tiempoYear = tiempoDias / 365
const proximo = new Date(hoy.getFullYear(),nacimiento.getMonth(),nacimiento.getDate())
console.log(dias[proximo.getDay()])