const sumAll = function(num1, num2) {
    if (num1 < 0 || Number.isInteger(num1) === false || num2 < 0 || Number.isInteger(num2) === false) {return 'ERROR'}
    sum = 0

    for(i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        sum += i
    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
