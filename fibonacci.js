function fibonacci(number){
    let term = number;
    let penultimate = 0, last = 1;
    let result = 0;
    if (term <= 2) {
        result = term - 1;
    } else {
        for(let i = 3; i<= term; i++){
            console.log(result);
            result = last + penultimate;
            penultimate = last;
            last = result;
        }
    }
    return result;
}
console.log(fibonacci(8));
console.log(fibonacci(13));
