function get(URL,callback) {

	const petition = new XMLHttpRequest()
	petition.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			callback(null, JSON.parse(this.responseText))
		}
		else{
			callback(`Se produjo un error al realizar el request ${this.status}`)
		}
	}

	petition.open('GET',URL)
	petition.send(null) 
}

get('https://swapi.co/api/people/1/', function onResponse(error,luke) {
	if (error) return console.log(`Request failed ${err}`)

	get('https://swapi.co/api/planets/1/', function onHomeworldResponse(err,homeworld){
		if(error) return console.log(`Request failed ${err}`)
		luke.homeworld = homeworld
		console.log(`${luke.name} nació en ${luke.homeworld.name} `)
	}) 
	console.log(`request succeded`)
	console.log('luke', luke)
})

                                