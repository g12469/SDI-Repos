// Sifa Tulikihihifo
// SDI 1307
// Project 3
// "Let's Get It!!!"

// Global Variables
var say = function(message) {console.log(message); },
	knightInfo,
	princessInfo,
	trollInfo;

// Objects	
knightInfo = {
	name: "Anthony",
	nickNames: ["Anthony The Great", "Prince of the West"],
	power: 100,
	speed: 85,
	health: 1000,
	gold: 1000,
	attackWithSword: 20
};
princessInfo = {
		name: "Zinnia",
		nickNames: ["The Fair Princess", "Princess of the East"],
		power: 25,
		speed: 25,
		health: 500
};
trollInfo = {
	name: "Zurlorg",
	nickNames: ["The Wicked Troll", "The Ferocious Beast"],
	power: 150,
	speed: 40,
	health: 1750,
	gold: 25,
	attackWithClaws: 14
};



// Variables to be used later on in the story...
var trollAttack = (trollInfo.power + trollInfo.speed + trollInfo.attackWithClaws);
var knightAttack = (knightInfo.power + knightInfo.speed + knightInfo.attackWithSword);	




//I need to figure out how to code a battle.
