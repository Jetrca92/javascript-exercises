const sumAll = function(x, y) {
    if (x < 0 || y < 0) {
        return "ERROR";
    }
    if (typeof(x) != "number" || typeof(y) != "number") {
        return "ERROR";
    }
    if (y < x) {
        let len = x - y;
        let total = 0;
        for (let i = 0; i <= len; i++) {
            total += y + i;
        }
        return total;
    }
    let len = y - x;
    let total = 0;
    for (let i = 0; i <= len; i++) {
        total += x + i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
