function sum() {
    let total = 0;
    return function(x) {
        total += x;
        return total;
    }
}

let sumFunction = sum();

console.log(sumFunction(3));
console.log(sumFunction(5));
console.log(sumFunction(20));
