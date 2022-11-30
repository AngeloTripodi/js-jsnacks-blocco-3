const divElementGreen = document.getElementById('green');
const divElementRed = document.getElementById('red');

function createNewElementP(array,[i]){
    const newElement = document.createElement('p');
    newElement.innerText = array[i];
    return newElement;
}

const array = [1,33,55,64,33,22,10,44,88, 22, 7];

for (let i=0; i<array.length; i++){
    if (array[i] % 2 === 0){
        divElementGreen.appendChild(createNewElementP(array,[i]));
    }
    else {
        divElementRed.appendChild(createNewElementP(array,[i]));
    }
}