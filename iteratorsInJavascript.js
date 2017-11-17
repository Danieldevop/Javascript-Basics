function fibonacci() {
	let a = 0, b= 1
	while (true) {
		let f = a
			a = b
			b = f + 1
			yield f
	}
	return {
		next : function(reset) {
			if (reset) a = 0 , b = 1
			let f = a
				a = b
				b = f + a
			return {value: f, done: false}
		}
	}
}

const fibo = fibonacci()

fibo.next().value 

const fibo = {}

fibo[Symbol.iterator] = fibonacci

let i = 0
for (let value in fibo) {
	console.log(value)
	i++
	if (i > 20) break
}