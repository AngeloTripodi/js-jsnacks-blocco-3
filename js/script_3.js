const array1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 88, 66]
const array2 = [2, 0, 3, 0, 3, 0, 0, 8, 99, 0]

if (array1.length < array2.length) {
    while (array1.length < array2.length) {
        array1.push(0);
    }
}

if (array2.length < array1.length) {
    while (array2.length < array1.length) {
        array2.push(0);
    }
}
console.log(array1, array2);