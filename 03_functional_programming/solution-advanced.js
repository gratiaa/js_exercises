// Alternative implementations of some of the functions from
// the functional programming exercises. These versions eschew
// iteration and local variables.

// Given an array and a test function, returns the first element
// of the array that "passes" (returns non-false) the test.
// Returns undefined if no elements pass.

function find(array, test) {
  if (array.length == 0) {
    return(undefined);
  } else if (test(array[0])) {
    return(array[0]);
  } else {
    return(find(array.slice(1), test));
  }
}

// Given an array and a function, returns a new array where
// each element in the new array is the result of the function
// being applied to the corresponding element in the original array.

function map(array, func) {
  if (array.length == 0) {
    return(array);
  } else {
    return([func(array[0])].concat(map(array.slice(1), func)));
  }
}

// Self eval

(function(x) { return "("+x+")("+x+")"; })(function(x) { return "("+x+")("+x+")"; })