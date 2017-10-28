// cuantos videos debo ver por día si quiero hacer varios cursos en un 
//límete de tiempo?

var calculate = ''
var contVideos = 0
var courses = []
while (calculate.toLowerCase() != 's') {

	let numOfCourses = prompt(`Escriba el Curso que desea completar: `)
	let numOfVideos = prompt(`Escriba el número de vídeos del curso: `)
	var calculate = prompt('si desea calcular escriba (C). Agregar otro curso (A) o salir(S): ')
	let videos = parseInt(numOfVideos)
	contVideos += videos
	courses.push(numOfCourses)
	console.log(courses)
	console.log(contVideos)

	if (calculate.toLowerCase() == 'c') {
		let numOfDays = prompt('En cuantos días de realizar todos los cursos? ')
		numOfDays = parseInt(numOfDays)
		let calcTime = (contVideos,numOfDays) => contVideos / numOfDays
		let nVideos = Math.ceil(calcTime(contVideos,numOfDays))
		alert(`Debe ver ${nVideos} video(s) al día para completar los cursos de ${courses.toString(',')} en ${numOfDays} días`)
	}	
}



	


