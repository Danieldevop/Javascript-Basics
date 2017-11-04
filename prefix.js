function prefix(prefix) {
	return function words(word) {
		console.log(`${prefix}`+`${word}`)
	}
}

const prefixWord = prefix('re')
prefixWord('chiquito')