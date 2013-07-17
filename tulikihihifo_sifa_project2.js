// Sifa Tulikihihifo
// SDI 1307
// Project 2
// Hopefully I get a good grade for this project!


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
	thingsJaylaLikesToDo = ["play outside", "play with her toys", "watch TV"],
	daughtersName = ["Lia", "Jayla"],
	whatToFeedBaby = ["baby food", "milk", "cookies", "vegies"],
	howMuchMoneyIHave = "$" + 45,
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


say("I get up and try to find something to feed Lia.");
say("I see that we have " + whatToFeedBaby[1] + ". So, I pour Lia a bottle of " + whatToFeedBaby[1] + ", lay her down in my arms, and give her the 8 oz. bottle.");

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
var pricePerApp = 5; //unrealistic I know, but it's better than logging $0.99 apps.
var numberFunction = function (moneyIHave = 45) {
	while (moneyIHave > pricePerApp) {
		var moneyLeftOver = moneyIHave - pricePerApp;
		if (moneyLeftOver > pricePerApp) {
			say("After purchasing the app, I have $" + moneyLeftOver + " left to spend.");
			say("I find another app for Jayla. It costs another $5.")
			say(" ");
		} else{
			say("Now I only have $5! I better save my money for something more important.");
			say(" ");
				}
	moneyIHave -= pricePerApp
	};
	
	return
};

// String Function
var stringFunction = function (whatChannelToWatch) {
	var myFavoriteShow = "ESPN",
		whatChannelToWatch = myFavoriteShow;
	if (myFavoriteShow == "ESPN") {
		say("I'll watch " + whatChannelToWatch + " for a little bit.");
	} else {
		say("I'll watch something on Netflix.")
	}
	
	return
};

// Array Function
var arrayFunction = function(myDaughtersFavoriteShows) {
	var myDaughtersFavoriteShows = ["Bubble Guppies" , "Mickey's Play House" , "Back Yardigans"],
		minutesPerShow = [ 30, 30, 30];
	for (var favoriteShowNumber = 0; favoriteShowNumber < myDaughtersFavoriteShows.length; favoriteShowNumber++) {
		var myDaughtersFavoriteShows = myDaughtersFavoriteShows[favoriteShowNumber],
			minutesThisShow = minutesPerShow[favoriteShowNumber];
	say("We'll watch the " + myDaughtersFavoriteShows + " for " + minutesThisShow + " minutes.");
	for (var minutes = 0; minutes < minutesThisShow; minutes += 10) {
		var minutesRemain = minutesThisShow - minutes;
		say(minutes + " done, " + minutesRemain + " to go till this show is over!");
		}
	}
										
	return
};

// Returned Values

booleanFunction()

say(soundBabiesMake);
say("Looks like I forgot to play with " + daughtersName[1] + ".");
say("Since " + daughtersName[1] + " loves to play games on the iPad, I'll download a few new apps for her.")
say('I think to myself, "Do I even have any money in my bank account?"')
say('Using my "Bank of America" app, I check my account and it says I have ' + howMuchMoneyIHave + " in my account.");
say("I check the app store and find a few good apps I know Jayla will love.")

numberFunction()

say("Now that Lia is fed and Jayla is entertained, I guess I can watch some TV.")

stringFunction()

say("After a few minutes of relaxation I hear ," + soundBabiesMake);

arrayFunction()

say("Looks like the day is going to end. I bath the girls, read them a bed time story, and tuck them to bed... knowing that tomorrow will be just like today.");
