const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    result = '';
    for(i = 1; i<= num; i++) {
        result += string
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
