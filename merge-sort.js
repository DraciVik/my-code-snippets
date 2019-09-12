// PSEUDOCODE

// MergeSort (list)
//     base case: if list.length < 2 return
//     break the list into halves L & R
//     Lsorted = mergeSort(L);
//     Rsorted = mergeSort(R);
//     return merge(Lsorted, Rsorted);

function mergeSort (arr) {
    if (arr.length < 2) return arr;

    const middle = Math.floor(arr.length / 2); // Get the middle item of the array rounded down
    const left = arr.slice(0, middle); // Left side items
    const right = arr.slice(middle); //Right side items;
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while(indexLeft < left.length && indexRight < right.length) {
        if(left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft += 1;
        }   else {
            result.push(right[indexRight]);
            indexRight += 1;
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];

console.log(mergeSort(list));