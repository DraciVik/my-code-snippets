// recursively

function joinElements(array, joinString) {
        function recurse(index, resultSoFar) {
                resultSoFar += array[index];

                if (index === array.length - 1) {
                        return resultSoFar;
                }
                return recurse(index + 1, resultSoFar + joinString);
        }

        return recurse(0, '');
}

joinElements(['s', 'cr', 't cod', ' :) :)'], 'e');

// iteratively

function joinElements(array, joinString) {
        let result = '';
        for (let i = 0; i < array.length; i += 1) {
                if (i === array.length - 1) {
                        result += array[i];
                } else {
                        result += array[i] + joinString;
                }
        }
        return result;
}
joinElements(['s', 'cr', 't cod', ' :) :)'], 'e');
