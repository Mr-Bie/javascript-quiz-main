const array = [];

// Imperative
const alterArrayI = (array) => {
    const result = [];
    for (const element of array) {
        const newValue = element + Math.floor(Math.random() * array.length);
        result.push(newValue);
    }
    return result;
}

