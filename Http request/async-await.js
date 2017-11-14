// use babel polyfill and babael repl and run ins codepen to run this:

function handleError(err) {
	console.log(`Request failed ${err}`)
}

async function  getLuke () {
  try{
  	const response = await fetch('https://www.swapi.co/api/people/1/')
  const luke = await response.json()
  const responseHomeWorld = await fetch(luke.homeworld)
  luke.homeworld = await responseHomeWorld.json()
  console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
  
  }
  catch (err){
    	handleError(err)
	}	
}
