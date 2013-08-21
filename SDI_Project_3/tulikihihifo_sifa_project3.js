// Sifa Tulikihihifo
// SDI 1307
// Project 3
// "Let's Get It!!!"

// Global Variables
var say = function(message) {
	console.log(message); 
};// Won't add this function to the flowchart. Using function as a shortcut.
var	knightInfo,
	princessInfo,
	trollInfo,
	finalBattle;

// Objects	
knightInfo = {
	name: "Anthony",
	nickNames: ["Anthony The Great", "Prince of the West"],
	power: 100,
	speed: 85,
	health: 850,
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
	power: 200,
	speed: 40,
	health: 1750,
	gold: 25,
	attackWithClaws: 14
};

// Variables to be used later on in the story...
var trollAttack = (trollInfo.power + trollInfo.speed + trollInfo.attackWithClaws);
var knightAttack = (knightInfo.power + knightInfo.speed + knightInfo.attackWithSword);
var knightSpells = {
	fire: 250,
	ice: 200,
	wisdom: (knightInfo.power + 500) //ability to find enemies weaknesses
};
var trollSpells = {
	beserker: 275,
	bloodThirsty: 300  
};

var trollTotalAttack = (trollSpells.beserker + trollSpells.bloodThirsty + trollAttack);
var knightTotalAttack = (knightSpells.fire + knightSpells.ice + knightSpells.wisdom + knightAttack);	

if (trollAttack > knightAttack){
	say("The troll is more powerful.");
		} else {
	say("The knight is more powerful.");	
};
if (trollTotalAttack > knightTotalAttack){
	say("The troll is still more powerful.")
	} else {
	say("The knight, with the power of magic, is now able to defeat the evil troll.");
};

say(trollSpells.beserker + trollSpells.bloodThirsty + trollAttack + " is the trolls total attack power.");
say(knightSpells.fire + knightSpells.ice + knightSpells.wisdom + knightAttack + " is the knights total attack power.");


//I need to figure out how to code a battle.
