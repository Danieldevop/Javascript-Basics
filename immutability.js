let daniel = { name: 'daniel', surname: 'sep', age: 20}

let otherDan = daniel


let counter = function counterAge (person) {
	const clone = Object.assign({}, person)
	clone.age++
	return clone
}

function counterAge2 (person) {
	return person.age++
} 

