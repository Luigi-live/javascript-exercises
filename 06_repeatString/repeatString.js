const repeatString = function(repeatedString, num) {
    let word = "";
    for(let i = 0; i < num; i++) {
        word = word + repeatedString;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
