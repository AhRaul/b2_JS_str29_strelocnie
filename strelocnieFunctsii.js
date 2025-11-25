//1 агрумент.
/**
const lordify = function(firstName) {
	return `${firstName} of Canterbury`;
};

console.log(lordify("Dale"));
console.log(lordify("Gail"));
**/

//-----
//Больше аргументов.

/**
const lordify = firstName => `${firstName} of Canterbury`;

console.log(lordify("Dale"));
console.log(lordify("Gail"));
**/

//-----

/**
const lordify = function(firstName, land) {
	return `${firstName} of ${land}`;
};
**/

//const lordify = (firstName, land) => `${firstName} of ${land}`;

//console.log(lordify("Don", "Piscataway"));
//console.log(lordify("Todd", "Schenectady"));

//-----
//Если тело функции занимает много строк, то нужны фигурные скобки.

/**
const lordify = (firstName, land) => {
	if(!firstName) {
		throw new Error("A firstName is required to lordify");
	}
	if(!land) {
		throw new Error("A lord must have a land");
	}
	
	return `${firstName} of ${land}`;
};

console.log(lordify("Kelly", "Sonoma"));	// Kelly of Sonoma
console.log(lordify("Dave"));	// ! ОШИБКА JAVASCRIPT
**/

//-----

//при возврате ОБЪЕКТА из стрелочной функции, нужны круглые скобки.
//Так делать НЕЛЬЗЯ!

/**
const person = (firstName, lastName) =>
	{
		first: firstName,
		last: lastName
	}

console.log(person("Brad", "Janson"));
**/

//так МОЖНО!
const person = (firstName, lastName) => 
	({
		first: firstName,
		last: lastName
	})

console.log(person("Flad", "Hanson"));