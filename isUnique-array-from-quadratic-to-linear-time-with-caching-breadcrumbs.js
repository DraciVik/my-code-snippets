// This algorithm is done in quadratic time becase of the nested loop

const isUnique = arr => {
        let result = true;

        for (let i = 0; i < arr.length; i += 1) {
                for (let y = 0; y < arr.length; y += 1) {
                        if (i !== y && arr[i] === arr[y]) result = false;
                }
        }
        return result;
};

console.log(isUnique([1, 2, 3]) === true);
console.log(isUnique([1, 1, 3]) === false);

// We can lower the time complexity from quadratic time to linear by using the breadcrumbs method(caching)

const isUnique = (arr) => {
    const breadcrumbs = {};
    let result = true;

    for(let i = 0; i < arr.length; i += 1) {
        if(breadcrumbs[arr[i]]) {
            result = false;
        }   else {
            breadcrumbs[arr[i]] = true;
        }
            
    }
    return result;

}
console.log(isUnique([1, 2, 3]) === true);
console.log(isUnique([1, 1, 3]) === false);
