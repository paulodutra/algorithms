function swap(inputArray = [], firstIndex, secondIndex) {
    const auxiliary = inputArray[firstIndex];
    inputArray[firstIndex] = inputArray[secondIndex];
    inputArray[secondIndex] = auxiliary;
    return inputArray;
}
console.log(swap([9,7,4], 0, 1));