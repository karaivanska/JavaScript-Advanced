/* Write a JS program that takes an array of numeric elements as input and returns the largest element of the array.*/

function maxElement(arr) {
    return Math.max.apply(null,arr);
}
console.log(maxElement([10, 20, 5]));