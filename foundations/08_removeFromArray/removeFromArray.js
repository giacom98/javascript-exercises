const removeFromArray = function(array, ...values) {
    return array.filter(elemento => !values.includes(elemento))
};

// Do not edit below this line
module.exports = removeFromArray;
