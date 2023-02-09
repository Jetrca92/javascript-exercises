const repeatString = function(string, num) {
    var returnString = "";
    if (Math.sign(num) === -1) {
        return "ERROR"
    }
    for (i = 0; i < num; i++) {
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
