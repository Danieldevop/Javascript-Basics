console.log('hola')
setTimeout(function() {
	console.log('medio')
},1000)
console.log('chau!')

setTimeout(() => console.log('hola'),3000)