const removeFromArray = function(arr, ...args) {
 
    for (let arg of args) {
        console.log(arg)

        while (arr.indexOf(arg) !== -1) {
          arr.splice(arr.indexOf(arg), 1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
