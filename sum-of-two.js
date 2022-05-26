/**
 * You have two integer arrays a and b and an integer target
 * value v. Determine whether there is a pair of numbers, where
 * one number is from a, and the other number from b, that can be added 
 * together to get a sum of v. Return true if such a pair exists. otherwise
 * return false.
 * Example
 * for a = [1,2,3]. b = [10,20,30,40] anv v = 42 the output should be true
 * 
 */
function sumOfTwo(array1 = [], array2, value) {
    const complements = new Set();
    for(let i in array1){
        complements.add(value - array1[i]);
    }
    for(let i in array2){
       console.log(complements);
       if(complements.has(array2[i])) {
           return true;
       }
    }
    return false;
}
const array1 = [1,2,3];
const array2 = [10,20,30,40];
const value = 42;
console.log(sumOfTwo(array1, array2, value));