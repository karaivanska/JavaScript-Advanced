/*Write a higher-order JS function that fixes some of the parameters of another function. Your program will receive a function that takes 4 parameters and returns a formatted string (a monetary value with currency symbol). Your task is to return another function that only takes one parameter and returns the same formatted string.
This is the function you will receive:
 */

function currencyFormat(separator, symbol, symbolFirst, value){
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) {
        return symbol + ' ' + result;
    }
    else return result + ' ' + symbol;
}

let dollarFormatter = result(currencyFormat());
console.log(dollarFormatter(5454));
console.log(dollarFormatter(5.8545));
console.log(dollarFormatter(4.545));

function result(func) {
    return function (value) {
        return func(',', '$', true, value)
    }
}

console.log(currencyFormat(',', '$', true, 1000.454545));