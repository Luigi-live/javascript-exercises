const repeatString = function(repeatedString, num) {
    let word = "";
    if(num < 0){
        return 'ERROR'
    }
    for(let i = 0; i < num; i ++){
        word += repeatedString;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
