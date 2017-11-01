// Consult the name age and year in object persons
// https://funnyfrontend.com/

class Persons{
	constructor(name,age,year) {
		this.name = name
		this.year = year
		this.age = age
	}
}


cp = new Persons("Dan","Gray","1966")
cp2 = new Persons("Charles","Garwin","1777")

console.log(cp.name)
console.log(cp2.name)

