const times10 = n => n * 10;

const memoize = cb => {
        const cache = {};

        return num => {
                if (num in cache) {
                        return cache[num];
                }
                const result = cb(num);
                cache[num] = result;
                return result;
        };
};

const memoizedTimes10 = memoize(times10);
memoizedTimes10(9);
