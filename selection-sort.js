function swap(array, firstIndex, secondIndex) {
    let auxiliary = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = auxiliary;
};

function indexOfMinimum(array, startIndex) {
    let minValue = array[startIndex];
    let minIndex = startIndex;
    for(let i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        const indexSwap = indexOfMinimum(array, i);
        swap(array, i, indexSwap);
    }
    return array;
};

const array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);