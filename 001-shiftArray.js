const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultArray = [];

function shiftArr(array, k) {
    for (let index = 0; index < array.length; index++) {
        const nextInd = (index + k) % array.length;
        resultArray[nextInd] = array[index];
    }
    return resultArray;

}

shiftArr(arr, 4);