export function binarySearchSimple (array: number[], key: number) {
    let leftIndex = -1;
    let rightIndex = array.length;
    let currentIndex;
    while (leftIndex < rightIndex - 1) {
        currentIndex = getCurrentIndex(leftIndex, rightIndex);
        if (array[currentIndex] === key) return currentIndex;
        if (array[currentIndex] < key)
            leftIndex = currentIndex;
        else
            rightIndex = currentIndex;
    }
    return null;
}

function getCurrentIndex (left: number, right: number) {
    return Math.floor((left + right) / 2);
}
