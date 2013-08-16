// Sifa Tulikihihifo
// SDI 1308
// Project 2
// Time to Workout!!!

// Variables
// My Variables
var soundBabiesMake = '"Wah... Wah... WAAAAAAAAH!"',
	isLiaHungry = true,
	isJaylaHungry = false,
	isLiaBored = false,
	isJaylaBored = true,
	doWeHaveBabyFood = false,
	doesLiaLikeMilk = true,
	daughtersName = ["Lia", "Jayla"],
	whatToFeedBaby = ["baby food", "milk", "cookies", "vegies"],
	howMuchMoneyIHave = "$" + 45,
	pricePerApp = 5,
	say = function(message) { console.log(message); };
;

// Procedure
say("I wake up in the morning to the sounds of babies crying.");
say("They cry in unison." + soundBabiesMake);
say('I think to myself, "I wonder if they are hungry."');
say("I check to see if " + daughtersName[0] + " is hungry.");
if (isLiaHungry == true && isJaylaBored == true) {
	say("It's true that " + daughtersName[0] + " is hungry, but it seems that " + daughtersName[1] + " is bored.");
} else {
	say("I guess I can go back to sleep.");
};

// Boolean Function
var booleanFunction = function(doesLiaLikeMilk = true) {
	if (doesLiaLikeMilk == true) {
	say(daughtersName[0] + " drinks all of her milk and falls right back to sleep.")
	} else {
	say(soundBabiesMake);
	};
	
	return
};

// Number Function
var numberFunction = function(moneyIHave = 45) {
	while (moneyIHave > pricePerApp) {
		var moneyLeftOver = moneyIHave - pricePerApp;
		if (moneyLeftOver > pricePerApp) {
			say("After purchasing the app, I have $" + moneyLeftOver + " left to spend.");
			say("I find another app for Jayla. It costs another $5.");
		} else{
			say("Now I only have $5! I better save my money for something more important.");
				}
	moneyIHave -= pricePerApp
	};
	
	return
};

// String Function
var getGreetingByName = function(){
	var currentHour = (new Date()).getHours(),
		timeOfDay,
		greeting;
	if (currentHour < 12) { timeOfDay = "morning";}
	else if (currentHour <17) { timeOfDay = "afternoon";}
	else { timeOfDay = "evening";}
	greeting = "Good " + timeOfDay + ", " + name + "!";
	return greeting;
	
};


// Array Function
var getGreetingByName = function(){
	var currentHour = (new Date()).getHours(),
		timeOfDay,
		greeting;
	if (currentHour < 12) { timeOfDay = "morning";}
	else if (currentHour <17) { timeOfDay = "afternoon";}
	else { timeOfDay = "evening";}
	greeting = "Good " + timeOfDay + ", " + name + "!";
	return greeting;
	
};


// Returned Values
var fullGreeting = getGreetingByName("Sifa");


// Output
console.log(fullGreeting);


// Finish