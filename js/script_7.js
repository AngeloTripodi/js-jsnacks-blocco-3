const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function getRandomNumber (index) {
    const randomNumbers = Math.floor (Math.random () * (index) + index);
    return randomNumbers;

}

for (let i=0; i<9; i++){
    console.log(getRandomNumber(startingList[i]))
}
