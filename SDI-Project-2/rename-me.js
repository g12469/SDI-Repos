// Sifa Tulikihihifo
// SDI 1308
// Project 2
// Time to Workout!!!

// Variables
	

// Procedure
console.log("I wake up at " + timeToWakeUp + ". This way I have enough time to eat breakfast and get to the gym by " + timeToWorkout + ".");

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