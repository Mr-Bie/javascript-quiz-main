const array = [0,4,3,2,3,4,5,6];

// Imperative
const alterArrayI = (_array) => {
    const result = [];
    for (const element of _array) {
        const newValue = element + Math.floor(Math.random() * _array.length);
        result.push(newValue);
    }
    return result;
}

// Declaritive
const alterArrayD = (_array) => _array.map(v => v + Math.floor(Math.random() * _array.length));

console.log(alterArrayD(array));
console.log(alterArrayI(array));