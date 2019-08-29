// You are asked to create a function that takes two parameters. The first parameter, nums, is an array of numbers. The second parameter, total is a single number. The output of the function should be a two-element array that represents a pair of numbers in nums that add up to total.

// Ex:
// input: nums = [1, 2, 3], total = 4
// output: [1, 3]

// input: nums = [3, 9, 12, 20], total = 21
// output: [9, 12]

// Brute force solution (without any optimization):

const twoSum = (nums, total) => {
        for (let i = 0; i < nums.length - 1; i += 1) {
                for (let j = i + 1; j < nums.length; j += 1) {
                        if (nums[i] + nums[j] === total) {
                                return [nums[i], nums[j]];
                        }
                }
        }
};

console.log(twoSum([1, 2, 3], 4)); // [1, 3]
console.log(twoSum([3, 9, 12, 20], 21)); // [9, 12]

// Problem here is that we're using O(n2) - quadratic time to solve it. For bigger arrays the time complexity is increased dramatically

// Better way is to solve it using a cache (hash table) - object in js that will keep track if a number has been iterated on. It changes from quadratic to linear time;

const twoSum2 = (nums, total) => {
        const cache = {};

        for (let i = 0; i < nums.length; i += 1) {
                const missingNum = total - nums[i];

                if (cache[missingNum]) {
                        return [missingNum, nums[i]];
                }
                cache[nums[i]] = true;
        }
};

console.log(twoSum2([1, 2, 3], 4)); // [1, 3]
console.log(twoSum2([3, 9, 12, 20], 21)); // [9, 12]

// We traded a bit of space complexity for time complexity

// A more idiomatic way - Using a Set()
// A set is a mechanism to store unique values (or object references) without having to do workarounds
// Set object must be implemented using either hash tables or other mechanisms that, on average, provide access timese that are sublinear on the number of elements in the collection

const twoSumSet = (nums, total) => {
        const previousValues = new Set();
        for (let i = 0; i < nums.length; i++) {
                const complement = total - nums[i];
                if (previousValues.has(complement)) {
                        return [complement, nums[i]];
                }
                previousValues.add(nums[i]);
        }
};

console.log(twoSumSet([1, 2, 3], 4)); // [1, 3]
console.log(twoSumSet([3, 9, 12, 20], 21)); // [9, 12]
