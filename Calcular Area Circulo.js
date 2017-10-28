let radio = parseFloat(prompt('Ingrese el rádio del circulo: '))
radio.value
const calcArea = (radio) => Math.PI * Math.pow(radio,2)
console.log(`El área de un círculo de radio ${radio} es: ${calcArea(radio)}`)