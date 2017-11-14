
let promise = new Promise((resolve,reject) => {
	/*const FLAG = 5
	if (FLAG == 5) {
		resolve('es correcto!')
	}
	else {
		reject('Incorrecto')
	}*/
	setTimeout(resolve,1000,'Everything is Ok!')
})

promise.then((res) => console.log(res),(error) => console.log(error))