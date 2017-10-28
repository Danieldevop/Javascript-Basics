const starWars7 = 'Star Wars: El Despertar de la fuerza'
const pgStarWars = 13

let nameDaniel = 'Daniel'
let ageDaniel = 19

let nameJose = 'Jose'
let ageJose = 12

const canWhatchStarWars7 = (age,name,withAdult = false) => {
	if(age > pgStarWars){
		alert(`${name} puede entrar a ver ${starWars7} ya que su edad es ${age}`)
	}
	else if(withAdult){
		alert(`${name} puede ver ${starWars7}, aunque su edad sea ${age},
		ya que se encuentra acompañado de un adulto`)
	}
	else{
		alert(`${name} no puede ver ${starWars7} ya que tiene ${age} años
		y no cumple con el pg que es de ${pgStarWars} `)
	}
} 

canWhatchStarWars7(ageDaniel,nameDaniel)
canWhatchStarWars7(ageJose,nameJose)