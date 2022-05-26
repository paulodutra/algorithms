function linearSearch(array = [], target) {
    if(array.length === 0) {
        return - 1;
    }
    for (let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return - 1;
}
const array = [9,0,1,2,3,4,5,6,7,8];
const target = 9;
console.log(linearSearch(array, target));