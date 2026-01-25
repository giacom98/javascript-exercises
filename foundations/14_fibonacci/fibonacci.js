const fibonacci = function(n) {
    let count
    if (typeof n !== 'number') {
        count = parseInt(n)
    } else {
        count = n
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let a = 0
    let b = 1

    for (let i = 0; i < count; i++) {
        [a,b] = [b, a +b];
    }

    return a
};

// Do not edit below this line
module.exports = fibonacci;
