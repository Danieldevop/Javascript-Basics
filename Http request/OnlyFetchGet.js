function handleError(err) {
	console.log(`Request failed ${err}`)
}

let lukeFetch

fetch('https://www.swapi.co/api/people/1/')
	.then(response => response.json())
	.then(json => {
		lukeFetch = json
		return fetch(lukeFetch.homeworld)
	})
	.then(response => response.json())
	.then(json => {
		lukeFetch.homeworld = json
		console.log(`${lukeFetch.name} nació en ${lukeFetch.homeworld.name}`)
	})
	.catch((err) => handleError(err))
