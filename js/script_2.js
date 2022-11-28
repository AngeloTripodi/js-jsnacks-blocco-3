const listNumbers = [];

let number = 0;
let sum = 0;

while (sum < 50){
    number = parseInt(prompt('Inserisci un numero'));
    sum = sum + number;
    listNumbers.push(number);
}
console.log(sum);
console.log(listNumbers);