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
var findLongestToken = function (text) {
	var pattern = /([^a|^b]+)/g;
	var matches = text.match(pattern);
	var longestToken = "Cannot find the token which contains neither an 'a' nor a 'b'.";

	if (matches !== null) {
		longestToken = matches.reduce(findLongerString);
	}

	console.log("The input value was: " + text);
	console.log("And the longest token is: " + longestToken);

	return false;
};

// findLongestToken("ababcdababefgababhiab");
// findLongestToken("abab");

/***
 * 5. Write a function that, given an array of strings,
 * will compute the sum of the lengths of the words
 * that do not contain a "q".
 * Do not use a loop or the forEach method, only array methods (filter, map, reduce)
 * and string methods/properties (indexOf, length).
 */
var makeStrToLowerCase = function (element, index, array) {
	array[index] = element.toLowerCase();
};

var calculateLength= function (strArray) {
	var sumOfLength = 0;

	strArray.reduce(function (prev, curr) {
		if (curr.indexOf("q") !== "-1") {
			sumOfLength += curr.length;
		} else {
			//TODO: the result value of test2 is 4. Why?
			sumOfLength;
		}
	});

	return sumOfLength;
};

var lengthOfNonQWords = function (strArray) {
	var resultValue;

	strArray.map(makeStrToLowerCase);
	resultValue = calculateLength(strArray);

	console.log("The sum of the lengths of the words without a 'q' is: " + resultValue);

	return false;
};

// var test1 = ["STOP", "Quit", "exit"];
// lengthOfNonQWords(test1);
var test2 = ["queen", "quit"];
lengthOfNonQWords(test2);
