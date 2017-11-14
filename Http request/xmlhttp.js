const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

function get(URL, callback) {
	const xhr = new XMLHttpRequest()

	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			callback(null, JSON.parse(this.responseText))
		}
		else {
			callback(new Error(`Se produjo un error al realizar el request ${this.status}`))
		}
	}

	xhr.open('GET', URL)
	xhr.send(null)
}

function handleError(err) {
	console.log(`Request failed ${err}`)
}


get('https://swapi.co/api/people/1/', function onResponse(err,luke) {
	if (err) return handleError(err)

	get(luke.homeworld, function onHomeworldResponse(err,homeworld){
		if(err) return handleError(err)

		luke.homeworld = homeworld
		console.log(`${luke.name} nació en ${luke.homeworld.name} `)
	}) 
	console.log(`request succeded`)
	console.log('luke', luke)
})