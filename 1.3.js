/* flatArray function take two arguments : item & array
    first check to ensure item is not array itself and continue to flat the items until it's not a array
    then push the item to result array
* */
const flatArray = (item, array) => {
    if (!Array.isArray(item)) return array.push(item);
    item.forEach(v => flatArray(v,array));
}

const testArray = [4,[[5],[6,[7],8],9,10]];
const resultArray = [];
flatArray(testArray,resultArray);
console.log(resultArray);
