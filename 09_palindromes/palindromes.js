const palindromes = function (string) {
    let lettersString = string.replace(/[^a-zA-Z]/gm,"").toLowerCase();
    let revString = "";
    for (let i = lettersString.length - 1; i >= 0; i--) {
        revString += lettersString[i];
    }
    if (revString === lettersString) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
