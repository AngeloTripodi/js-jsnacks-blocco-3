

function getSumOfElement(array) {

    let sum = 0;
    for (let i=0; i<array.length; i++) {
        const castedElement = parseInt(array[i], 10)
        sum = sum + castedElement; 
    }
    return sum;   
}


const listNumbers = [1, 2, 3, 4, 5, 10];

console.log(getSumOfElement(listNumbers))
// let sumElement = getSumOfElement();
// console.log (sumElement);