function square(x) {
  return(x*x);
}

function double(x) {
  return(x*2);
}

// Given two 1-argument functions and a value, returns
// f1(f2(value)).

function composedValue(f1, f2, value) {
  return(f1(f2(value)));
}

composedValue(square, double, 5);

// Given two 1-argument functions, returns
// a new function that, when called on a value, returns f1(f2(value)).

function compose(f1, f2) {
  return(function(val) { return(f1(f2(val))); });
}

var f1 = compose(square, double);
f1(5);
f1(10);
var f2 = compose(double, square);
f2(5);
f2(10);

//Given an array and a test function, returns the first element
//of the array that "passes" (returns non-false for) the test.
//Returns undefined if no elements pass.

function find(array, test) {
  for(var i=0; i<array.length; i++) {
    if(test(array[i])) {
      return(array[i]);
    }
  }
}

function isEven(num) { 
  return(num%2 == 0); 
}

find([1, 3, 5, 4, 2], isEven);

// Given an array and a function, returns a new array where
// each element in the new array is the result of the function
// being applied to the corresponding element in the original array.

function map(array, func) {
  var result = new Array();
  for(var i=0; i<array.length; i++) {
    result.push(func(array[i]));
  }
  return(result);
}

map([1, 2, 3, 4, 5], square); 
map([1, 4, 9, 16, 25], Math.sqrt);