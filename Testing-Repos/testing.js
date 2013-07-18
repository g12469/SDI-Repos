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

var stringFunction = function(myChannel, theirChannel) {
	var myFavoriteShow = "ESPN",
		myChannel = myFavoriteShow,
		theirChannel = "Disney Channel";
	if (myFavoriteShow == "ESPN") {
		say("I'll watch " + myChannel + " for a little bit. Once " + daughtersName[0] + " and " + daughtersName[1] + " wake up, I'll have to change it to the " + theirChannel);
	}
};

stringFunction()