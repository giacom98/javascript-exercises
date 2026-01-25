const add = function(numberOne, numberTwo) {
	return numberOne + numberTwo
};

const subtract = function(numberOne, numberTwo) {
	return numberOne - numberTwo
};

const sum = function(array) {
	return array.reduce((acc, current) => acc + current, 0)
};

const multiply = function(array) {
  return array.reduce((acc, current) => acc * current, 1)
};

const power = function(numberOne, numberTwo) {
	return numberOne ** numberTwo
};

const factorial = function(numberOne) {

  let res = 1
  for (let i=2; i <= numberOne; i++) res *= i;
  return res
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
