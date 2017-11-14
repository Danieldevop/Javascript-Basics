function get(URL, callback) {
	return new Promise((resolve,reject) => {
	const xhr = new XMLHttpRequest()

		xhr.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status === 200) {
					resolve(JSON.parse(this.responseText))
				}
				else{
					reject(new Error(`We found a error: ${this.status}`))
				}
			}	
		}
	xhr.open('GET', URL)
	xhr.send(null)
	})
}

function handleError(err) {
	console.log(`Request failed ${err}`)
}

let luke

get('https://www.swapi.co/api/people/1/')
	.then((response) => {
		luke = response
		return get(luke.homeworld)
	})
	.then(homeworld => {
		luke.homeworld = homeworld
		console.log(`${luke.name} nació en ${luke.homeworld.name}`)
	} )
	.catch( err => handleError(err))

let lukeFetch

/*fetch('https://www.swapi.co/api/people/1/')
	.then(response => response.json())
	.then(json => {
		lukeFetch = json
		return fetch(luke.homeworld)
	})
	.then(response => response.json())
	.then(json => {
		lukeFetch.homeworld = json
		console.log(`${lukeFetch.name} nació en ${lukeFetch.homeworld.name}`)
	})
	.catch((err) => handleError(err))

*/


