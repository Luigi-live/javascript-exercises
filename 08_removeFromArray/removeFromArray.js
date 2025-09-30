const removeFromArray = function(arr, ...values) {
    for(var value of values){
        var i = 0;
        var index = arr.indexOf(value);
        if(index > -1){
            while(i < arr.length){
                if(arr[i] === value){
                    arr.splice(i, 1);
                } else {
                    i++;
                }
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
