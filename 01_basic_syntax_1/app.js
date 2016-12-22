/**
 * Created by Young Bae on 2016. 12. 22..
 */

/**
 * 1. Make a function that returns "even" or "odd" depending on the number passed to it.
 *
 * @param number
 * @returns {*}
 */
function parity(number) {
	if (Number.isInteger(number)) {
		return ((number % 2) == 0) ? "even" : "odd";
	} else {
		return "This number is not an integer.";
	}
}

// console.log(parity(5));
// console.log(parity(4));
// console.log(parity(10.2));

/**
 * 2. a simple version of max that took exactly three arguments.
 *
 * @param numb1
 * @param numb2
 * @param numb3
 * @returns max-value among params
 */
function max(numb1, numb2, numb3) {
	var max_value = numb1;

	if(max_value < numb2) {
		max_value = numb2;
	}

	if(max_value < numb3) {
		max_value = numb3;
	}

	return max_value;
}

function coinFlip() {
	return Math.floor(Math.random() * 2);
}

/**
 * 3. Given a number, flips a coin that many times and returns the number of heads.
 * @param how_many_flip
 * @returns {number}
 */
function numHeads(how_many_flip) {
	var how_many_heads = 0;

	for (var i=0; i<how_many_flip; i++) {
		if (coinFlip() == 0) { how_many_heads++; }
	}

	return how_many_heads;
}

// console.log(numHeads(10));

/**
 * 4. A function that takes a number of flips and returns the fraction that were heads.
 *
 * @param how_many_flip
 * @returns {number}
 */
function headsRatio(how_many_flip) {
	return (numHeads(how_many_flip) / how_many_flip);
}

// console.log(headsRatio(1000000));

/**
 * 5. A function that takes a number and a short string, and returns the string
 * concatenated that number of times.
 *
 * @param i
 * @param string
 * @returns {*}
 */
function padChars(i, string) {
	return (string.repeat(i));
}

//console.log(padChars(7, "-"));

/**
 * 6. A function that returns the number of times you have to roll a die to get a 6.
 *
 * @returns {number}
 */
function numRollsToGetSix() {
	var numRolls = 1;
	var numb_this_time = Math.random();

	while (numb_this_time < (5/6)) {
		numRolls++;
		numb_this_time = Math.random();
	}

	return numRolls;
}

// console.log(numRollsToGetSix());

/**
 * 7. update the HTML page, so that each time you reload it,
 * randomly see either a "Have a GOOD day!" or "Have a BAD day!" message.
 *
 * @returns {boolean}
 */
function writeSomeMessage() {
	var message = ["Have a GOOD day!", "Have a BAD day!"];
	var random_index = Math.floor(Math.random() * 2);
	var paragraph = document.getElementById("test_paragraph");

	paragraph.innerHTML = message[random_index];

	return false;
}

writeSomeMessage();