/**
 * https://app.codesignal.com/interview-practice/task/dQD4TCunke2JQ98rj/description
 * Given an array of integers, find the maximum possible sum you can get from one of its contiguous subarrays. 
 * The subarray from which this sum comes must contain at least 1 element.
 * Example
 * For inputArray = [-2, 2, 5, -11, 6], the output should be solution(inputArray) = 7.
 * The contiguous subarray that gives the maximum possible sum is [2, 5], with a sum of 7.
 * Input/Output [execution time limit] 4 seconds (js)
 * [input] array.integer inputArray
 * An array of integers.
 * Guaranteed constraints:
 * 3 ≤ inputArray.length ≤ 105,
 * -1000 ≤ inputArray[i] ≤ 1000.
 * [output] integer
 * The maximum possible sum of a subarray within inputArray.
 */
function arrayMaxSum(inputArray) {
    let maxSum = inputArray[0];
    let sum = maxSum;
    for (let i in inputArray) {
        let number = inputArray[i];
        if(i > 0) {
            sum = Math.max(sum + number, number);
        }
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
}
console.log(arrayMaxSum([11, -2, 1, -4, 5, -3, 2, 2, 2]))
