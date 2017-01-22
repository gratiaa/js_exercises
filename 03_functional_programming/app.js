/*******************************************************
1. Make a function called composedValue that takes
  two functions f1 and f2 and a value and returns
  f1(f2(value)), i.e., the first function called on the
  result of the second function called on the value.
********************************************************/

function square(x) {
  return (x * x);
}

function double(x) {
  return (x * 2);
}

function composedValue(fn1, fn2, value) {
  return fn1(fn2(value));
}

console.log(composedValue(square, double, 5)); // 100

/*******************************************************
2. Make a function called compose that takes two functions
  f1 and f2 and returns a new function that, when called
  on a value, will return f1(f2(value)). Assume that f1
  and f2 each take exactly one argument.
********************************************************/

function compose(fn1, fn2) {
  return function (value) {
    return fn1(fn2(value));
  };
}

var f1 = compose(square, double);
console.log(f1); // function (value) { return fn1(fn2(value)); }
console.log(f1(5)); // 100
console.log(f1(10)); // 400

var f2 = compose(double, square);
console.log(f2); // function (value) { return fn1(fn2(value)); }
console.log(f2(5)); // 50
console.log(f2(10)); // 200

/*******************************************************
3. Make a function called "find" that takes an array and
  a test function, and returns the first element of the 
  array that "passes" (returns non-false for) the test. 
  Don't use map, filter, or reduce.
********************************************************/

function isEven(num) {
  return (num % 2 === 0);
}

console.log(isEven(3)); // false
console.log(isEven(4)); // true

function find(array, testFunc) {
  var firstVal = 0,
      i = 0,
      length = array.length;
  
  for (i = 0; i < length - 1; i++) {
    if (testFunc(array[i])) {
      firstVal = array[i];
      break;
    }
  }
  
  return firstVal;
}

console.log(find([1, 3, 5, 4, 2], isEven)); // 4

/*******************************************************
4. Recent JavaScript versions added the "map" method of
  arrays. But, in earlier JS versions, you had to write 
  yourself. Make a function called "map" that takes an
  array and a function, and returns a new array that is 
  the result of calling the function on each element of
  the input array. Don't use map, filter, or reduce.
  (Hint: remember the push method of arrays.)
********************************************************/

function map(arr, func) {
  var newArr = [];
  arr.forEach(function (curr) {
    newArr.push(func(curr));
  })
  return newArr;
}

console.log(map([1, 2, 3, 4, 5], square)); // [1, 4, 9, 16, 25]
console.log(map([1, 4, 9, 16, 25], Math.sqrt)); // [1, 2, 3, 4, 5]
