const array1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const array2 = [2, 0, 3, 0, 3, 0, 0, 8, 99, 0, 18, 189, 42, 0, 33, 44, 88, 99]

while (array1.length < array2.length) {
    array1.push(0);
}
console.log(array1, array2);