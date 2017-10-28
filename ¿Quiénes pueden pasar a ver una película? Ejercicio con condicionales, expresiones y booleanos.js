const starWars7 = 'Star Wars: El Despertar de la fuerza'
const pgStarWars7 = 13

const nameDaniel = 'Daniel'
let ageDaniel = 26

const nameJose = 'Jose'
let ageJose = 12

function canWatchStarWars7(name,age, isWithAdult = false){
	if(age >= pgStarWars7){
		alert(`${name} puede pasar aver ${starWars7}`)
	}
	else if(isWithAdult){
		alert(`${name} puede pasar a ver ${starWars7}.
		aunque su edad es ${age}, se encuentra acompañado(a) por un adulto`)
	}
	else{
		alert(`${name} no puede pasar a ver ${starWars7}.
			Tiene ${age} años y necesita tener el ${pgStarWars7}`)
	}
}

canWatchStarWars7(nameDaniel,ageDaniel)
canWatchStarWars7(nameJose,ageJose, true)
