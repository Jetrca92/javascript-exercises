const add = function(x, y) {
  return x + y;
	
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  let result = 0;
	for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function(array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  if (x === 0) {
    return 1;
  }
	let result = x;
  for (let i = 1; i < x; i++) {
    result *= x - i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
