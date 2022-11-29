function getRandomNumber (num1, num2) {
    const randomNumbers = Math.floor (Math.random () * (num1 - num2 + 1) + num2);
    return randomNumbers;
}

let Result = getRandomNumber(0,10);
console.log(Result);

// for (i = 0; i<2; i++) 
// {
// let getResultRandomNumber = parseInt(prompt("insrisci un numero"));
// console.log(getRandomNumber(getResultRandomNumber, getResultRandomNumber));
// }



