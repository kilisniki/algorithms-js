export  function binary2Function (array: number[], key: number): number {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    let currentIndex;
    while (leftIndex < rightIndex) {
        currentIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (array[currentIndex] > key) rightIndex = currentIndex;
        else leftIndex = currentIndex;
    }
    if (array[])
}
