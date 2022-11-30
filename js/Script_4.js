function getRandomNumber (num1, num2) {
    const randomNumbers = Math.floor (Math.random () * (num1 - num2 + 1) + num2);
    return randomNumbers;
}

// let Result = getRandomNumber(0,10);
// console.log(Result);


let numero1 = parseInt(prompt("insrisci un numero"));
let numero2 = parseInt(prompt("insrisci un numero"));
let getResultRandomNumber = getRandomNumber(numero1, numero2);

console.log(getResultRandomNumber);


