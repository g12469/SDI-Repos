// Sifa Tulikihihifo
// SDI 1307
// Project 1
// Hopefully I get a good grade for this project!

// My Variables and values
var wakeUp = "Time to wakeup!";
var	money = 12;
var daughtersName = "Lia";
var daughtersHungry = true;
var noMoreFormula = true;
var alarmClock = true;

//My first outputs
console.log("I guess that it is time to " + wakeUp);
console.log("I check my bank account and I only have " + "$" + money + ".");
console.log("My daughter, " + daughtersName +", is crying.");
console.log("It is " + daughtersHungry + ", " + daughtersName + " must be hungry.");

// Conditionals
if (alarmClock === true) {
	console.log("Ugh... " + wakeUp );
	if (daughtersHungry === true) {
		console.log("I hope we have enough formula to make Lia a bottle.");
		if (noMoreFormula === true) {
			console.log("I must go to the store to buy formula.");
		} else {
			console.log("Looks like we have enough formula to make " + daughtersName + " a bottle.");
		}
	} else {
		console.log("Looks like I get more time to do homework!");
	};
} else {
	console.log("Looks like I get to sleep in.");
};

if (money >= 6.99) {
	console.log("Looks like I have enough money to buy formula.");
} else {
	console.log("I don't have enough money to buy formula for Lia");
};

/* I know that the flow of the story didn't go well, but I tried my best to make sure that I had all of the requirements met first. */