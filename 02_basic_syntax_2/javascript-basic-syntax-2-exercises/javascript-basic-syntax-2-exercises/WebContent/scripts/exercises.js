// Solutions to exercises from Basic Syntax, Part 2 section
// of JavaScript/jQuery tutorial at coreservlets.com

var fourNums = [ Math.random(), Math.random(), Math.random(), Math.random() ];

var hundredNums = new Array(100);
for(var i=0; i<hundredNums.length; i++) {
  hundredNums[i] = Math.random();
}

function numberArray(stringArray) {
  var nums = new Array(stringArray.length);
  for(var i=0; i<stringArray.length; i++) {
    nums[i] = parseFloat(stringArray[i]);
  }
  return(nums);
}

var strings = ["1.2", "2.3", "3.4"];
var nums = numberArray(strings);

function longestToken(string) {
  var tokens = string.split(/[ab]+/);
  var longest = "";
  for(var i=0; i<tokens.length; i++) {
    if (tokens[i].length > longest.length) {
      longest = tokens[i];
    }
  }
  return(longest);
}

function stringLength(s) {
  return(s.length);
}

function lacksQ(s) {
  return(s.indexOf("q") == -1);
}

function add(n1,n2) { 
  return(n1 + n2); 
}

function lengthOfNonQWords(words) {
  return(words.filter(lacksQ)
              .map(stringLength)
              .reduce(add, 0));
}