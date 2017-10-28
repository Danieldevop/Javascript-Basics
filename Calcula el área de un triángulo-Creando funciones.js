let base = 5
let height = 7
/*

function triangleArea(base, height){  //funció simple
	return base * height / 2
}										

*/
/*
let triangleArea = function(base,height){ // función anónima
	return base * height / 2
}
}
*/

const triangleArea = (base,height) => base * height / 2 //arrow functions

console.log(`El área de un triangulo de base 
${base} y altura ${height} es: ${triangleArea(base,height)}`)

