const repeatString = function(text, repetition) {
    if (repetition < 0) return "ERROR"

    let string = ""
    for (let i=0; i < repetition; i++) {
        string += text
    }
    
    return string
};

// Do not edit below this line
module.exports = repeatString;
