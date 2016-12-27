/***
 * 1. Create an array containing four random numbers. Use one-step array allocation.
 * Print out the array by evaluating the array variable.
 */
var fourNums = [
	Math.random(),
	Math.random(),
	Math.random(),
	Math.random()
];

// console.log(fourNums.valueOf());

/***
 * 2. Create an array containing 100 random numbers. Use two-step array allocation.
 * Print out the array.
 */
var hundredNums = [];

for (var i=0; i<100; i++) {
	var randomNum = Math.random().toFixed(2);
	hundredNums[i] = parseFloat(randomNum);
}

// console.log(hundredNums.valueOf());

/***
 * 3. Make a function that given an array of strings, where each string represents
 * a number, returns an array of the corresponding numbers.
 */
var strings = ["1.2", "2.3", "3.4"];

strings.forEach(function(element, index, array) {
	array[index] = parseFloat(element);
});

//console.log(strings.valueOf());

var filterEmptyString = function (string) {
	return (string !== "");
};

var findLongerString = function (prev, curr) {
	return (prev.length > curr.length ? prev : curr);
};

/***
 * 4. Write a function that, given a string, will return the longest token
 * that contains neither an 'a' nor a 'b'.
 * @param text
 * @returns {boolean}
 */
var longestToken = function (text) {
	var pattern = /[a|b]/g;
	var matches = text.split(pattern);
	var longestToken;

	var filtered = matches.filter(filterEmptyString);

	if (filtered.length !== 0) {
		longestToken = filtered.reduce(findLongerString);
	} else {
		longestToken = "Cannot find the token which contains neither an 'a' nor a 'b'.";
	}

	console.log("The input value was: " + text);
	console.log("And the longest token is: " + longestToken);

	return false;
};

longestToken("ababcdababefgababhiab");
longestToken("aba");


