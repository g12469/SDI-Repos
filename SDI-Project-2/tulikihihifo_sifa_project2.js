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


// Boolean Function
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


// Number Function
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