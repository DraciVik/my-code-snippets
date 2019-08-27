// Task 1: Without peeking, write your own recursive factorial method

function factorial(n) {
        if (n === 1) {
                return 1;
        }

        return n * factorial(n - 1);
}

// Task 2: Use your memo function from the previous exercise to memoize your factorial method

const memoize = fn => {
        const cache = {};

        return (...args) => {
                const n = args[0];
                if (n in cache) {
                        return cache[n];
                }
                const result = fn(n);
                cache[n] = result;
                return result;
        };
};

const factorial = memoize(
        (x) => {
                if(x === 0) return 1;
                return x * factorial(x - 1);
        }
)

console.log(factorial(5)); // calculated
console.log(factorial(5));