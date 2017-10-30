//1. String:
var x1 = new String() // no es conveniente
var y1 = "Daniel" //utilizar

//1. Number:
var x2 = new Number() // no es conveniente
var y2 = 3.14 //utilizar

//1. Boolean:
var x3 = new Boolean() // no es conveniente
var y3 = true //utilizar

//4. Array:
var y4 = new Array() // no usar
var y4 = [] // utilizar

// 5. RegExp:

var y5 = new RegExp() //no utilizar
var y5 = /()/ // utilizar

//6. Function:

var y6 = new Function() // no usar
var y6 = function () {} // usar

//7. Date:
var x7 = new Date() 

// 8. Math: no se puede declarar con new porque es un 
//objeto global

//9. Object
var x8 = new Object() // no recomendado
var x8 = { llave: "valor" }

