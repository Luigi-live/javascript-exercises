const sumAll = function(start, end) {
    let result = 0;
    if(end < 0 || start < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR"
    }
    else if (start > end){
        while(end <= start){
            result += end;
            end ++;
        }
    } else{
        while(start <= end){
            result += start;
            start ++;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
