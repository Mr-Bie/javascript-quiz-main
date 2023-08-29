let array = [0,4,3,2,3,4,5,6];

const doAJobThatTakeVeryLongTime = (timeout) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`it took ${timeout} ms to do this!`);
            resolve(timeout);
        }, timeout)
    })
}

array = array.map(v => doAJobThatTakeVeryLongTime(v * 100));

Promise.all(array).then(result => {
    console.log(result);
})
