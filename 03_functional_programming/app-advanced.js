/*******************************************************
1. Make a "pure" recursive version of find. That is, don't
  use any explicit loops (e.g, for loops or the forEach 
  method), and don't use any local variables(e.g., var x=...)
  inside the functions. 
  (HINT: remember the slice method of arrays)
********************************************************/

function isEven(num) {
  'use strict';
  return (num % 2 === 0);
}

function find(arr, func) {
  'use strict';
  if (arr.length === 0) {
    return undefined;
  } else if (func(arr[0])) {
    return arr[0];
  } else {
    return find(arr.slice(1), func);
  }
}

isEven(3); //false
isEven(4); //true
find([1, 3, 5, 4, 2], isEven); //4

/*******************************************************
2. Make a "pure" recursive version of map.
  (HINT: remember the slice method of arrays)
********************************************************/

function square(num) {
  'use strict';
  return (num * num);
}

function map(arr, func) {
  'use strict';
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length === 1) {
    return [func(arr[0])];
  } else {
    return [func(arr[0])].concat(map(arr.slice(1), func));
  }
}

map([1, 2, 3, 4, 5], square); // [1, 4, 9, 16, 25]
map([1, 4, 9, 16, 25], Math.sqrt); // [1, 2, 3, 4, 5]
