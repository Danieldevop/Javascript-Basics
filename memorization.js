let counter = 1

function fibonacci(num, memory = {}) {
	counter++
	if (memory[num]) return memory[num]
	if (num == 1) return 0
	if (num == 2) return 1

	return memory[num] = fibonacci(num - 1, memory) 
						+ fibonacci(num - 2, memory)
}