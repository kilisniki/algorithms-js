export function mergeSort (array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const arrLeft = array.slice(0, middle);
    const arrRight = array.slice(middle);
    return merge(mergeSort(arrLeft), mergeSort(arrRight));
}

function merge (array1, array2) {
    const buffer = [];
    let i = 0, j =0;

    while (i < array1.length && j < array2.length) {
        const element = array1[i] < array2[j]
            ? array1[i++]
            : array2[j++];
        buffer.push(element);
    }

    return [
        ...buffer,
        ...array1.slice(i),
        ...array2.slice(j)
    ]
}
