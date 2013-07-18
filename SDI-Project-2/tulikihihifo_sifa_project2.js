// Sifa Tulikihihifo
// SDI 1307
// Project 2
// I am glad this Project is over! Ready to tackle week 3!!!


// My Variables
var soundBabiesMake = '"Wah... Wah... WAAAAAAAAH!"',
	enoughMoney = "I can buy food for the babies.",
	notEnoughMoney = "I can't buy any food.",
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

// Procedures
say("I wake up in the morning to the sounds of babies crying.");
say("They cry in unison." + soundBabiesMake);
say('I think to myself, "I wonder if they are hungry."');
say("I check to see if " + daughtersName[0] + " is hungry.");
if (isLiaHungry == true && isJaylaBored == true) {
	say("It's true that " + daughtersName[0] + " is hungry and " + daughtersName[1] + " is bored.");
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
var stringFunction = function(myChannel, theirChannel) {
	var myFavoriteShow = "ESPN",
		myChannel = myFavoriteShow,
		theirChannel = "Disney Channel";
	if (myFavoriteShow == "ESPN") {
		say("I'll watch " + myChannel + " for a little bit. Once " + daughtersName[0] + " and " + daughtersName[1] + " wake up, I'll have to change it to the " + theirChannel);
	}
};

// Array Function
var arrayFunction = function() {
	var myDaughtersFavoriteShows = ["The Bubble Guppies", "Mickey's Play House", "The Back Yardigans"],
		minutesPerShow = [ 30, 30, 30];
	for (var favoriteShowNumber = 0; favoriteShowNumber < myDaughtersFavoriteShows.length; favoriteShowNumber++) {
		var myDaughtersFavoriteShow = myDaughtersFavoriteShows[favoriteShowNumber],
			minutesThisShow = minutesPerShow[favoriteShowNumber];
			say("We'll now watch " + myDaughtersFavoriteShow + ". The show will only last " + minutesThisShow + " minutes.");
	for (var minutes = 0; minutes < minutesThisShow; minutes += 10) {
		var minutesRemain = minutesThisShow - minutes;
		say("I look at that clock and notice that " + minutes + " minutes have passed, " + minutesRemain + " to go till this show is over!");
		}
	}						
	return
};

// Returned Values
say("I get up and try to find something to feed Lia.");
say("I see that we have " + whatToFeedBaby[1] + ". So, I pour Lia a bottle of " + whatToFeedBaby[1] + ", lay her down in my arms, and give her the 8 oz. bottle.");

booleanFunction()

say(soundBabiesMake);
say("Looks like I forgot to play with " + daughtersName[1] + ".");
say("Since " + daughtersName[1] + " loves to play games on the iPad, I'll download a few new apps for her.")
say('I think to myself, "Do I even have any money in my bank account?"')
say('Using my "Bank of America" app, I check my account and it says I have ' + howMuchMoneyIHave + " in my account.");
say("I check the app store and find a few good apps I know Jayla will love. It looks like they all cost $5.")

numberFunction()

say("Now that Lia is fed and Jayla is entertained, I guess I can watch some TV.")

stringFunction()

say("After a few minutes of relaxation I hear ," + soundBabiesMake);
say("It was fun having some personal time, but now I should find something for these kids to watch.");

arrayFunction()

say("After a few hours of watching TV shows, it looks like the day is going to end soon.")
say("I bathe the girls, read them a bed time story, and tuck them to bed... knowing that tomorrow will be just like today.");
say(" ");
say("Now I can FINALLY do homework!");
