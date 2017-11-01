function suma(...numeros) {
	return numeros.reduce(function (acum, numero) {
		acum += numero
		return acum
	}, 0)
}

const suma1 = (...numeros) => numeros.reduce((acum,numero) => acum += numero, 0)

const dobles = (...numeros) => numeros.map(numero => numero * 2)

const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)